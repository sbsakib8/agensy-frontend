import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/jwt-middleware'

// Get all users by role from Express backend
export async function GET(request) {
  try {
    console.log('🔍 Getting all users by role')

    // Verify authentication
    const auth = verifyToken(request)
    if (!auth.success) {
      return NextResponse.json(
        { success: false, message: auth.message }, 
        { status: auth.status }
      )
    }

    // Only admin can get all users
    if (auth.user.role !== 'admin') {
      return NextResponse.json(
        { success: false, message: 'Admin access required' },
        { status: 403 }
      )
    }

    // Get the auth-token cookie
    const authToken = request.cookies.get('auth-token')?.value

    if (!authToken) {
      return NextResponse.json(
        { success: false, message: 'No authentication token' },
        { status: 401 }
      )
    }

    // Forward request to Express backend
    const expressResponse = await fetch('http://localhost:5001/api/users/role/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `auth-token=${authToken}`
      }
    })

    if (!expressResponse.ok) {
      const errorText = await expressResponse.text()
      console.error('❌ Express backend error:', errorText)
      return NextResponse.json(
        { success: false, message: `Backend error: ${expressResponse.status}` },
        { status: expressResponse.status }
      )
    }

    const usersData = await expressResponse.json()
    console.log(`✅ Retrieved ${usersData.length || 0} users successfully`)

    const response = NextResponse.json({
      success: true,
      message: 'Users retrieved successfully',
      data: usersData,
      count: usersData.length || 0
    })

    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
    response.headers.set('Access-Control-Allow-Credentials', 'true')

    return response

  } catch (error) {
    console.error('❌ Get users by role error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to get users data' },
      { status: 500 }
    )
  }
}

// Handle preflight requests
export async function OPTIONS(request) {
  const response = new NextResponse(null, { status: 200 })
  
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie')
  
  return response
}