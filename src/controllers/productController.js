import { MongoClient, ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/jwt-middleware'

let clientPromise = new MongoClient(process.env.DB_URI).connect()

// Helper function to check if user is admin
function requireAdmin(user) {
  if (user.role !== 'admin') {
    return { success: false, status: 403, message: 'Admin access required' }
  }
  return { success: true }
}

// Create a new product (Admin only)
export async function createProduct(request) {
  try {
    // Verify token and admin role
    const auth = verifyToken(request)
    if (!auth.success) {
      return NextResponse.json(
        { success: false, message: auth.message },
        { status: auth.status }
      )
    }

    const adminCheck = requireAdmin(auth.user)
    if (!adminCheck.success) {
      return NextResponse.json(
        { success: false, message: adminCheck.message },
        { status: adminCheck.status }
      )
    }

    const client = await clientPromise
    const db = client.db('test')
    const collection = db.collection('products')

    const body = await request.json()

    // Validate required fields
    const requiredFields = ['slug', 'title', 'tagline', 'description', 'coverImage', 'highlights', 'features', 'cta', 'theme', 'status']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        )
      }
    }

    const product = {
      ...body,
      postedBy: new ObjectId(auth.user.id),
      createdAt: new Date()
    }

    const result = await collection.insertOne(product)

    console.log('✅ Product created:', { ...product, _id: result.insertedId })

    return NextResponse.json({
      success: true,
      message: 'Product created successfully',
      data: { ...product, _id: result.insertedId }
    })

  } catch (error) {
    console.error('Create product error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get all products (Public with optional token)
export async function getAllProducts(request) {
  try {
    const client = await clientPromise
    const db = client.db('test')
    const collection = db.collection('products')

    // Optional token verification for user info
    let user = null
    const auth = verifyToken(request)
    if (auth.success) {
      user = auth.user
    }

    const products = await collection
      .find({ status: 'active' })
      .sort({ order: 1, createdAt: -1 })
      .toArray()

    console.log('📦 Retrieved products:', products)
    console.log('👤 User info:', user)
    console.log('📊 Total products found:', products.length)

    return NextResponse.json({
      success: true,
      data: products,
      user: user
    })

  } catch (error) {
    console.error('Get products error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Update a product (Admin only)
export async function updateProduct(request, { params }) {
  try {
    // Verify token and admin role
    const auth = verifyToken(request)
    if (!auth.success) {
      return NextResponse.json(
        { success: false, message: auth.message },
        { status: auth.status }
      )
    }

    const adminCheck = requireAdmin(auth.user)
    if (!adminCheck.success) {
      return NextResponse.json(
        { success: false, message: adminCheck.message },
        { status: adminCheck.status }
      )
    }

    const client = await clientPromise
    const db = client.db('test')
    const collection = db.collection('products')

    console.log('🔌 Database connection established for update')

    const resolvedParams = await params
    const { id } = resolvedParams
    console.log('🔄 Update request for product ID:', id)
    console.log('🔍 ID length:', id.length)
    console.log('🔍 Is valid ObjectId:', ObjectId.isValid(id))

    if (!ObjectId.isValid(id)) {
      console.error('❌ Invalid product ID format:', id)
      return NextResponse.json(
        { success: false, message: `Invalid product ID format. Expected 24-character hex string, got: ${id} (length: ${id.length})` },
        { status: 400 }
      )
    }

    const body = await request.json()
    console.log('📥 Raw request body:', body)
    const updateData = { ...body }
    delete updateData._id // Don't allow updating _id

    // Clean up the data - remove empty strings, null values, and empty arrays
    const cleanedData = {}
    for (const [key, value] of Object.entries(updateData)) {
      if (value !== null && value !== undefined && value !== '') {
        if (Array.isArray(value)) {
          // Filter out empty strings from arrays
          const filteredArray = value.filter(item => item !== null && item !== undefined && item !== '')
          if (filteredArray.length > 0) {
            cleanedData[key] = filteredArray
          }
        } else if (typeof value === 'object' && !Array.isArray(value)) {
          // For objects, check if they have any non-empty values
          const hasValues = Object.values(value).some(v => v !== null && v !== undefined && v !== '')
          if (hasValues) {
            cleanedData[key] = value
          }
        } else {
          cleanedData[key] = value
        }
      }
    }

    console.log('🧹 Cleaned update data:', cleanedData)

    // Validate cleaned data
    if (Object.keys(cleanedData).length === 0) {
      return NextResponse.json(
        { success: false, message: 'No valid fields to update' },
        { status: 400 }
      )
    }

    try {
      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: cleanedData }
      )

      console.log('📊 Update result:', result)

      if (result.matchedCount === 0) {
        console.log('⚠️ No product found with ID:', id)
        return NextResponse.json(
          { success: false, message: 'Product not found' },
          { status: 404 }
        )
      }

      if (result.modifiedCount === 0) {
        console.log('ℹ️ Product found but no changes made')
      } else {
        console.log('✅ Product successfully updated')
      }

      console.log('🔄 Product updated:', { id, cleanedData })

      return NextResponse.json({
        success: true,
        message: 'Product updated successfully'
      })
    } catch (dbError) {
      console.error('💥 Database update error:', dbError)
      return NextResponse.json(
        { success: false, message: `Database error: ${dbError.message}` },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Update product error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Delete a product (Admin only)
export async function deleteProduct(request, { params }) {
  try {
    // Verify token and admin role
    const auth = verifyToken(request)
    if (!auth.success) {
      return NextResponse.json(
        { success: false, message: auth.message },
        { status: auth.status }
      )
    }

    const adminCheck = requireAdmin(auth.user)
    if (!adminCheck.success) {
      return NextResponse.json(
        { success: false, message: adminCheck.message },
        { status: adminCheck.status }
      )
    }

    const client = await clientPromise
    const db = client.db('test')
    const collection = db.collection('products')

    const resolvedParams = await params
    const { id } = resolvedParams
    console.log('🗑️ Delete request for product ID:', id)
    console.log('🔍 ID length:', id.length)
    console.log('🔍 Is valid ObjectId:', ObjectId.isValid(id))

    if (!ObjectId.isValid(id)) {
      console.error('❌ Invalid product ID format:', id)
      return NextResponse.json(
        { success: false, message: `Invalid product ID format. Expected 24-character hex string, got: ${id} (length: ${id.length})` },
        { status: 400 }
      )
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      )
    }

    console.log('🗑️ Product deleted:', { id })

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully'
    })

  } catch (error) {
    console.error('Delete product error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}