import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

// GET all users
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('test')
    
    // Get all users (excluding passwords for security)
    const users = await db.collection('users').find(
      {},
      { 
        projection: { 
          password: 0 // Exclude password field
        }
      }
    ).toArray()
    
    return NextResponse.json({
      success: true,
      count: users.length,
      users: users
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}