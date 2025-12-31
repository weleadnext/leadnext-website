import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/env';

export async function POST(request: NextRequest) {
  try {
    // Check for write token
    const token = process.env.SANITY_API_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json(
        { error: 'Server configuration error: Write token not configured.' },
        { status: 500 }
      );
    }

    // Create authenticated client
    const writeClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
    });

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscription = await writeClient.fetch(
      `*[_type == "mailingListSubscription" && email == $email][0]`,
      { email }
    );

    if (existingSubscription) {
      // If unsubscribed, reactivate
      if (existingSubscription.status === 'unsubscribed') {
        await writeClient.patch(existingSubscription._id).set({ status: 'active' }).commit();
        return NextResponse.json({ success: true, message: 'Subscription reactivated' });
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Already subscribed' 
      });
    }

    // Create new subscription
    await writeClient.create({
      _type: 'mailingListSubscription',
      email,
      status: 'active',
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error: any) {
    console.error('Mailing list subscription error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe' },
      { status: 500 }
    );
  }
}

