import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/env';

export async function POST(request: NextRequest) {
  try {
    // Check for write token
    const token = process.env.SANITY_API_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json(
        { error: 'Server configuration error: Write token not configured. Please add SANITY_API_WRITE_TOKEN to your environment variables.' },
        { status: 500 }
      );
    }

    // Create authenticated client for this request
    const writeClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
    });

    const formData = await request.formData();
    
    const programId = formData.get('programId') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resumeFile = formData.get('resume') as File | null;

    const phoneValue = phone?.toString().trim() ?? '';

    if (!programId || !firstName || !lastName || !email || !phoneValue || !coverLetter || !resumeFile) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if program exists and applications are open
    const program = await writeClient.fetch(
      `*[_type == "program" && _id == $programId][0]{ _id, title, applicationsOpen }`,
      { programId }
    );

    if (!program) {
      return NextResponse.json(
        { error: 'Program not found' },
        { status: 404 }
      );
    }

    if (!program.applicationsOpen) {
      return NextResponse.json(
        { error: 'Applications are currently closed for this program' },
        { status: 400 }
      );
    }

    // Get the active cohort
    const activeCohort = await writeClient.fetch(
      `*[_type == "cohort" && status == "active"][0]{ _id, name }`
    );

    if (!activeCohort) {
      return NextResponse.json(
        { error: 'No active cohort available. Please contact support.' },
        { status: 400 }
      );
    }

    // Upload resume file to Sanity
    let resumeAssetId = null;
    if (resumeFile) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      const asset = await writeClient.assets.upload('file', buffer, {
        filename: resumeFile.name,
        contentType: resumeFile.type,
      });
      resumeAssetId = asset._id;
    }

    // Create application document
    const applicationData = {
      _type: 'application',
      program: {
        _type: 'reference',
        _ref: programId,
      },
      cohort: {
        _type: 'reference',
        _ref: activeCohort._id,
      },
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phoneValue,
      coverLetter: coverLetter.trim(),
      ...(resumeAssetId && {
        resume: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: resumeAssetId,
          },
        }
      }),
      status: 'pending',
      submittedAt: new Date().toISOString(),
    };

    console.log('Creating application with data:', JSON.stringify(applicationData, null, 2));

    const application = await writeClient.create(applicationData);

    if (!application || !application._id) {
      throw new Error('Failed to create application - no document returned');
    }

    return NextResponse.json({ success: true, id: application._id });
  } catch (error: any) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit application' },
      { status: 500 }
    );
  }
}

