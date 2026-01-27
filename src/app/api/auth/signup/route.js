import { MongoClient } from 'mongodb'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

let client
let clientPromise

if (!client) {
  client = new MongoClient(process.env.DB_URI)
  clientPromise = client.connect()
}

export async function POST(request) {
  try {
    const { name, email, password, phone = '', address = '', image = '' } = await request.json()
    
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and password are required' },
        { status: 400 }
      )
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    
    // Phone validation (optional)
    if (phone && phone.trim() !== '') {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(phone.replace(/[-\s]/g, ''))) {
        return NextResponse.json(
          { success: false, message: 'Please enter a valid phone number' },
          { status: 400 }
        )
      }
    }
    
    const client = await clientPromise
    const db = client.db('test')
    
    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 400 }
      )
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)
    
    // Create new user with all fields and defaults
    const result = await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
      phone: phone || '',
      address: address || '',
      image: image || '',
      provider: 'credentials',
      role: 'user',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    
    return NextResponse.json({
      success: true,
      message: 'User created successfully',
      userId: result.insertedId
    })
  } catch (error) {
    console.error('Sign up error:', error)
    return NextResponse.json(
      { success: false, message: 'An error occurred during sign up' },
      { status: 500 }
    )
  }
}