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

// Email sign-in function
export const emailSignIn = async (credentials) => {
  try {
    const result = await signIn('credentials', {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    })
    
    if (result?.error) {
      return { success: false, message: 'Invalid credentials' }
    }
    
    return { success: true, message: 'Sign in successful' }
  } catch (error) {
    console.error('Sign in error:', error)
    return { success: false, message: 'An error occurred during sign in' }
  }
}
