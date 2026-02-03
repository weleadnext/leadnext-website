import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/env';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Create read-only client
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });

    const { id: programId } = await params;

    // Get program application status and active cohort info
    const [program, activeCohort] = await Promise.all([
      client.fetch(
        `*[_type == "program" && _id == $programId][0]{ 
          _id, 
          title, 
          applicationsOpen 
        }`,
        { programId }
      ),
      client.fetch(
        `*[_type == "cohort" && status == "active"][0]{ 
          _id, 
          name, 
          startDate, 
          endDate 
        }`
      )
    ]);

    if (!program) {
      return NextResponse.json(
        { error: 'Program not found' },
        { status: 404 }
      );
    }

    const canApply = program.applicationsOpen && !!activeCohort;
    
    let message = '';
    if (!program.applicationsOpen) {
      message = 'Applications are currently closed for this program';
    } else if (!activeCohort) {
      message = 'No active cohort available';
    } else {
      message = `Applications are open for ${activeCohort.name}`;
    }

    return NextResponse.json({
      canApply,
      message,
      program: {
        id: program._id,
        title: program.title,
        applicationsOpen: program.applicationsOpen,
      },
      activeCohort: activeCohort ? {
        id: activeCohort._id,
        name: activeCohort.name,
        startDate: activeCohort.startDate,
        endDate: activeCohort.endDate,
      } : null,
    });

  } catch (error: any) {
    console.error('Program status check error:', error);
    return NextResponse.json(
      { error: 'Failed to check program status' },
      { status: 500 }
    );
  }
}