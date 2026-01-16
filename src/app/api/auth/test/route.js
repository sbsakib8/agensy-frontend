import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Auth API is working',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request) {
  try {
    const body = await request.text()
    console.log('Test endpoint - Raw body:', body)
    
    const data = JSON.parse(body)
    
    return NextResponse.json({
      success: true,
      message: 'Test endpoint received data',
      received: data
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error parsing JSON',
      error: error.message
    })
  }
}