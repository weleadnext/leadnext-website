import { NextRequest, NextResponse } from 'next/server';
import { writeClient } from '@/sanity/lib/client';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, interest, description } = data;

    if (!name || !email || !interest || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const doc = {
      _type: 'workWithUs',
      name,
      email,
      phone,
      interest,
      description,
      submittedAt: new Date().toISOString(),
      status: 'New',
    };

    await writeClient.create(doc);

    return NextResponse.json({ success: true, message: 'Request submitted successfully' });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit request' },
      { status: 500 }
    );
  }
}
