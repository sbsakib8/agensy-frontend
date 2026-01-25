import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import clientPromise from './mongodb'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        console.log('🔍 Authorize called with credentials:', credentials ? 'present' : 'missing')
        
        if (!credentials?.email || !credentials?.password) {
          console.log('❌ Missing email or password in credentials')
          return null
        }

        try {
          const client = await clientPromise
          const db = client.db('test')
          const user = await db.collection('users').findOne({ email: credentials.email })

          if (!user) {
            console.log('❌ User not found with email:', credentials.email)
            return null
          }

          console.log('🔍 User found, comparing passwords...')
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

          if (!isPasswordValid) {
            console.log('❌ Password comparison failed')
            return null
          }

          console.log('✅ Password valid, returning user')
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            image: user.image || '',
            phone: user.phone || '',
            address: user.address || '',
          }
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        try {
          const client = await clientPromise
          const db = client.db('test')
          
          // Check if user already exists
          const existingUser = await db.collection('users').findOne({ email: user.email })
          
          if (!existingUser) {
            // Create new user with default values for new fields
            await db.collection('users').insertOne({
              name: user.name,
              email: user.email,
              image: user.image || '',
              phone: '',
              address: '',
              provider: 'google',
              googleId: profile.sub,
              role: 'user',
              status: 'active',
              createdAt: new Date(),
              updatedAt: new Date(),
            })
          }
          return true
        } catch (error) {
          console.error('Error saving user:', error)
          return false
        }
      }
      return true
    },
    async session({ session, token }) {
      if (session?.user?.email) {
        try {
          const client = await clientPromise
          const db = client.db('test')
          const user = await db.collection('users').findOne({ email: session.user.email })
          
          if (user) {
            session.user.id = user._id.toString()
          }
        } catch (error) {
          console.error('Session error:', error)
        }
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  },
  pages: {
    signIn: '/signin',
    signUp: '/signup',
  },
  session: {
    strategy: 'jwt',
  },
}

export default NextAuth(authOptions)