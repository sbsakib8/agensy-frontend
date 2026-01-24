import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/jwt-middleware'

export async function POST(request) {
  try {
    console.log('🔄 Session sync request received')
    
    // Verify the token from cookies
    const auth = verifyToken(request)

    if (!auth.success) {
      console.log('❌ Session sync failed - invalid token')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Authentication required for session sync',
          synced: false 
        }, 
        { status: 401 }
      )
    }

    console.log('✅ Session sync successful for user:', auth.user.email)

    // Create response with success
    const response = NextResponse.json({
      success: true,
      message: 'Session synced successfully',
      synced: true,
      user: {
        id: auth.user.id,
        email: auth.user.email,
        name: auth.user.name,
        role: auth.user.role
      }
    })

    // Ensure CORS headers for cross-origin cookie sharing
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
    response.headers.set('Access-Control-Allow-Credentials', 'true')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie')

    return response
    
  } catch (error) {
    console.error('Session sync error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Session sync failed',
        synced: false 
      },
      { status: 500 }
    )
  }
}

// Handle preflight requests
export async function OPTIONS(request) {
  const response = new NextResponse(null, { status: 200 })
  
  // CORS headers for preflight
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie')
  
  return response
}