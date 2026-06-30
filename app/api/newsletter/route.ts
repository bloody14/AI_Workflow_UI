import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    // Placeholder for newsletter subscription logic
    const subscriber = {
      id: crypto.randomUUID(),
      email,
      subscribedAt: new Date().toISOString()
    };

    return NextResponse.json({ success: true, subscriber });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
