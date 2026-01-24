import { signIn } from 'next-auth/react'

// Google OAuth sign-in function
export const signInWithGoogle = async () => {
  try {
    await signIn('google', { callbackUrl: '/' })
  } catch (error) {
    console.error('Google sign-in error:', error)
    throw error
  }
}

// Email sign-up function
export const emailSignUp = async (userData) => {
  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Sign up error:', error)
    return { success: false, message: 'An error occurred during sign up' }
  }
}

// Email sign-in function - Updated to use custom auth API
export const emailSignIn = async (credentials) => {
  try {
    console.log('🔄 Signing in with custom auth API...')
    
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // 🔑 KEY: Include cookies for auth-token
      body: JSON.stringify(credentials),
    })
    
    const result = await response.json()
    console.log('📝 Sign in response:', result)
    
    if (result.success) {
      console.log('✅ Login successful, auth-token cookie set')
      return { 
        success: true, 
        message: 'Sign in successful',
        user: result.user 
      }
    } else {
      console.log('❌ Login failed:', result.message)
      return { 
        success: false, 
        message: result.message || 'Sign in failed' 
      }
    }
  } catch (error) {
    console.error('❌ Sign in error:', error)
    return { 
      success: false, 
      message: 'An error occurred during sign in' 
    }
  }
}
