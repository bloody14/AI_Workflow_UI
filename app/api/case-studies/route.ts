import { NextResponse } from 'next/server';

export async function GET() {
  // Placeholder data model for Case Studies
  const caseStudies = [
    {
      id: "cigna",
      clientName: "Cigna",
      metric: "99% Uptime",
      summary: "Deployed reliable logic routing for healthcare data.",
      mediaUrl: "/media/cigna-study.webp"
    }
  ];

  return NextResponse.json({ caseStudies });
}
