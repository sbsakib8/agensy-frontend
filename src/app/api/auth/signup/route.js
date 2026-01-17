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
    const { name, email, password } = await request.json()
    
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
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
    
    // Create new user
    const result = await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
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