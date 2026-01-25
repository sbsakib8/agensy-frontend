import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/jwt-middleware'

export async function GET(request) {
  try {
    const auth = verifyToken(request)

    if (!auth.success) {
      return NextResponse.json(
        { success: false, message: auth.message }, 
        { status: auth.status }
      )
    }

    // Get the full user data from Express backend instead of just JWT data
    const authToken = request.cookies.get('auth-token')?.value
    
    if (!authToken) {
      return NextResponse.json(
        { success: false, message: 'No authentication token' },
        { status: 401 }
      )
    }

    try {
      // Fetch complete user data from Express backend
      const expressResponse = await fetch(`http://localhost:5001/api/users/${auth.user.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `auth-token=${authToken}`
        }
      })

      if (expressResponse.ok) {
        const userData = await expressResponse.json()
        console.log('✅ Full user data from Express backend:', userData)
        
        const response = NextResponse.json({
          success: true,
          message: 'Profile retrieved successfully',
          user: userData.data || userData // Handle both response formats
        })

        // Add CORS headers
        response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
        response.headers.set('Access-Control-Allow-Credentials', 'true')

        return response
      } else {
        console.log('❌ Express backend failed, falling back to JWT data')
        // Fallback to JWT data if Express backend fails
        const response = NextResponse.json({
          success: true,
          message: 'Profile retrieved successfully (JWT fallback)',
          user: auth.user
        })

        // Add CORS headers
        response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
        response.headers.set('Access-Control-Allow-Credentials', 'true')

        return response
      }
    } catch (expressError) {
      console.error('❌ Express backend error, using JWT data:', expressError)
      // Fallback to JWT data if Express backend is unavailable
      const response = NextResponse.json({
        success: true,
        message: 'Profile retrieved successfully (JWT fallback)',
        user: auth.user
      })

      // Add CORS headers
      response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
      response.headers.set('Access-Control-Allow-Credentials', 'true')

      return response
    }
    
  } catch (error) {
    console.error('Profile error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request) {
  const response = new NextResponse(null, { status: 200 })
  
  // CORS headers for preflight
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie')
  
  return response
}
