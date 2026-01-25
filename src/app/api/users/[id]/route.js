import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/jwt-middleware'

// Get single user by ID from Express backend
export async function GET(request, { params }) {
  try {
    const { id } = await params
    console.log(`🔍 Getting user by ID: ${id}`)

    // Verify authentication
    const auth = verifyToken(request)
    if (!auth.success) {
      return NextResponse.json(
        { success: false, message: auth.message }, 
        { status: auth.status }
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
    const expressResponse = await fetch(`http://localhost:5001/api/users/${id}`, {
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

    const userData = await expressResponse.json()
    console.log('✅ User data retrieved successfully')

    const response = NextResponse.json({
      success: true,
      message: 'User retrieved successfully',
      data: userData
    })

    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
    response.headers.set('Access-Control-Allow-Credentials', 'true')

    return response

  } catch (error) {
    console.error('❌ Get user error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to get user data' },
      { status: 500 }
    )
  }
}

// Update user data
export async function PUT(request, { params }) {
  try {
    const { id } = await params
    console.log(`🔄 Updating user: ${id}`)

    // Verify authentication
    const auth = verifyToken(request)
    if (!auth.success) {
      return NextResponse.json(
        { success: false, message: auth.message }, 
        { status: auth.status }
      )
    }

    // Get request body
    const updateData = await request.json()
    console.log('📝 Update data:', updateData)

    // Get the auth-token cookie
    const authToken = request.cookies.get('auth-token')?.value

    if (!authToken) {
      return NextResponse.json(
        { success: false, message: 'No authentication token' },
        { status: 401 }
      )
    }

    // Forward request to Express backend
    const expressResponse = await fetch(`http://localhost:5001/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `auth-token=${authToken}`
      },
      body: JSON.stringify(updateData)
    })

    if (!expressResponse.ok) {
      const errorText = await expressResponse.text()
      console.error('❌ Express backend error:', errorText)
      return NextResponse.json(
        { success: false, message: `Backend error: ${expressResponse.status}` },
        { status: expressResponse.status }
      )
    }

    const updatedUser = await expressResponse.json()
    console.log('✅ User updated successfully')

    const response = NextResponse.json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    })

    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
    response.headers.set('Access-Control-Allow-Credentials', 'true')

    return response

  } catch (error) {
    console.error('❌ Update user error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update user' },
      { status: 500 }
    )
  }
}

// Delete user
export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    console.log(`🗑️ Deleting user: ${id}`)

    // Verify authentication
    const auth = verifyToken(request)
    if (!auth.success) {
      return NextResponse.json(
        { success: false, message: auth.message }, 
        { status: auth.status }
      )
    }

    // Only admin can delete users
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
    const expressResponse = await fetch(`http://localhost:5001/api/users/${id}`, {
      method: 'DELETE',
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

    const result = await expressResponse.json()
    console.log('✅ User deleted successfully')

    const response = NextResponse.json({
      success: true,
      message: 'User deleted successfully',
      data: result
    })

    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
    response.headers.set('Access-Control-Allow-Credentials', 'true')

    return response

  } catch (error) {
    console.error('❌ Delete user error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete user' },
      { status: 500 }
    )
  }
}

// Handle preflight requests
export async function OPTIONS(request) {
  const response = new NextResponse(null, { status: 200 })
  
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie')
  
  return response
}