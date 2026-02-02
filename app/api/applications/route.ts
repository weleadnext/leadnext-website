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

    if (!programId || !firstName || !lastName || !email || !coverLetter || !resumeFile) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const phoneValue = phone?.trim() || '';

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
    const application = await writeClient.create({
      _type: 'application',
      program: {
        _type: 'reference',
        _ref: programId,
      },
      firstName,
      lastName,
      email,
      phone: phoneValue,
      coverLetter,
      resume: resumeAssetId ? {
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref: resumeAssetId,
        },
      } : undefined,
      status: 'pending',
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, id: application._id });
  } catch (error: any) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit application' },
      { status: 500 }
    );
  }
}

