// Test script for cookie-based authentication integration
// To use: import and call testCookieAuth() after logging in

import { userController } from './userController.js'

export const testCookieAuth = async () => {
  console.log('🔬 Testing Cookie-based Authentication Integration')
  console.log('=' .repeat(60))

  try {
    // Test 1: Session sync
    console.log('📋 Test 1: Session Sync')
    await userController.syncSession()
    console.log('✅ Session sync successful')

    // Test 2: Get all users from Express backend
    console.log('\n📋 Test 2: Get All Users from Express Backend')
    const users = await userController.getAllUsersWithAuth()
    console.log(`✅ Successfully fetched ${users?.length || 0} users`)

    // Test 3: Profile access via Next.js
    console.log('\n📋 Test 3: Profile Access via Next.js API')
    const profileResponse = await fetch('/api/auth/profile', {
      credentials: 'include'
    })
    const profileData = await profileResponse.json()
    
    if (profileData.success) {
      console.log('✅ Next.js profile access successful:', profileData.user)
    } else {
      console.log('❌ Next.js profile access failed:', profileData.message)
    }

    console.log('\n🎉 All tests completed successfully!')
    console.log('=' .repeat(60))

  } catch (error) {
    console.error('❌ Test failed:', error)
    console.log('🔧 Make sure you are logged in first!')
  }
}

// Individual test functions
export const testSessionSync = () => userController.syncSession()
export const testGetUsers = () => userController.getAllUsersWithAuth()
export const testProfile = async () => {
  const response = await fetch('/api/auth/profile', { credentials: 'include' })
  return response.json()
}

// Express backend cookie verification test
export const testExpressCookies = async () => {
  console.log('🍪 Testing Express Backend Cookie Verification')
  
  try {
    // First sync the session to get cookies set up
    await userController.syncSession()
    
    // Then try to access the Express users endpoint
    const response = await fetch('http://localhost:5001/api/users', {
      credentials: 'include', // 🔑 KEY: This sends cookies to Express
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      const data = await response.json()
      console.log('✅ Express cookie authentication successful!')
      console.log(`📊 Retrieved ${data?.length || 0} users from Express backend`)
      return data
    } else {
      console.log(`❌ Express authentication failed: ${response.status}`)
      const errorData = await response.text()
      console.log('Error details:', errorData)
    }
  } catch (error) {
    console.error('❌ Express connection error:', error)
  }
}

export default {
  testCookieAuth,
  testSessionSync,
  testGetUsers, 
  testProfile,
  testExpressCookies
}