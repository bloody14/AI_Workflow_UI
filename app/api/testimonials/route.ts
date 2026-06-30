import { NextResponse } from 'next/server';

export async function GET() {
  // Placeholder data model for Testimonials
  const testimonials = [
    {
      id: "1",
      name: "Jane Doe",
      company: "Acme Corp",
      logoUrl: "/logos/acme.svg",
      rating: 5,
      quote: "Armory has transformed how we deploy neural models at scale."
    }
  ];

  return NextResponse.json({ testimonials });
}
