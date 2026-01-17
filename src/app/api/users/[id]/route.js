import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

// GET user by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params
    
    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid user ID' },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db('test')
    
    // Get user by ID (excluding password for security)
    const user = await db.collection('users').findOne(
      { _id: new ObjectId(id) },
      { 
        projection: { 
          password: 0 // Exclude password field
        }
      }
    )
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      user: user
    })
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch user' },
      { status: 500 }
    )
  }
}

// PUT - Update user by ID
export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const body = await request.json()
    
    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid user ID' },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db('test')
    
    // Remove sensitive fields that shouldn't be updated directly
    const { password, _id, createdAt, ...updateData } = body
    updateData.updatedAt = new Date()
    
    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    )
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      message: 'User updated successfully',
      modifiedCount: result.modifiedCount
    })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update user' },
      { status: 500 }
    )
  }
}

// DELETE user by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    
    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid user ID' },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db('test')
    
    const result = await db.collection('users').deleteOne({
      _id: new ObjectId(id)
    })
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      message: 'User deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete user' },
      { status: 500 }
    )
  }
}