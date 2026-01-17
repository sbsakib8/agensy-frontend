import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    environment: {
      hasJwtSecret: !!process.env.JWT_SECRET,
      hasDbUri: !!process.env.DB_URI,
      nodeEnv: process.env.NODE_ENV
    }
  })
}

export async function POST() {
  return NextResponse.json({
    success: true,
    message: 'POST request received',
    timestamp: new Date().toISOString()
  })
}