import { MongoClient } from 'mongodb'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

let clientPromise = new MongoClient(process.env.DB_URI).connect()

export async function POST(request) {
  try {
    // Check if request has a body
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Content-Type must be application/json' }, 
        { status: 400 }
      )
    }

    // Get raw text first to debug
    const rawBody = await request.text()
    console.log('Raw request body:', rawBody)

    if (!rawBody || rawBody.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'Request body is empty' }, 
        { status: 400 }
      )
    }

    // Parse JSON
    let requestData
    try {
      requestData = JSON.parse(rawBody)
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      return NextResponse.json(
        { success: false, message: 'Invalid JSON format' }, 
        { status: 400 }
      )
    }

    const { email, password } = requestData

    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email and password are required' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('test')

    const user = await db.collection('users').findOne({ email })
    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }

    // Check if user has a password (traditional signup) vs OAuth signup
    if (!user.password) {
      return NextResponse.json({ 
        success: false, 
        message: 'This account was created with Google. Please sign in with Google instead.' 
      }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }

    const token = jwt.sign(
      { 
        id: user._id.toString(), 
        role: user.role || 'user', 
        email: user.email,
        name: user.name
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role || 'user'
      }
    })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: false,          // localhost only
      sameSite: 'lax',        // Allow cross-site cookies for localhost
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    // 🔑 KEY: Add CORS headers for Express backend integration
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5001')
    response.headers.set('Access-Control-Allow-Credentials', 'true')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie')

    return response
    
  } catch (error) {
    console.error('Login error:', error)
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
