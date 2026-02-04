import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

// POST - Search users by email or name
export async function POST(request) {
  try {
    const { email, name, provider, role, status } = await request.json()
    
    const client = await clientPromise
    const db = client.db('test')
    
    // Build search query
    const query = {}  
    if (email) {
      query.email = { $regex: email, $options: 'i' } // Case insensitive search
    }
    
    if (name) {
      query.name = { $regex: name, $options: 'i' } // Case insensitive search
    }
    
    if (provider) {
      query.provider = provider
    }
    
    if (role) {
      query.role = role
    }
    
    if (status) {
      query.status = status
    }
    
    // Search users (excluding passwords for security)
    const users = await db.collection('users').find(
      query,
      { 
        projection: { 
          password: 0 // Exclude password field
        }
      }
    ).toArray()
    
    return NextResponse.json({
      success: true,
      count: users.length,
      users: users,
      query: query
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to search users' },
      { status: 500 }
    )
  }
}