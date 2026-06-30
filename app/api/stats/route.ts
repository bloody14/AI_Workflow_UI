import { NextResponse } from 'next/server';
import os from 'os';

export async function GET() {
  const stats = {
    cpuLoad: os.loadavg()[0], 
    ramUsage: Math.floor(((os.totalmem() - os.freemem()) / os.totalmem()) * 100),
    uptime: os.uptime(), 
  };
  
  return NextResponse.json(stats);
}