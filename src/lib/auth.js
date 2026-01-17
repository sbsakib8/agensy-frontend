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
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const client = await clientPromise
          const db = client.db('test')
          const user = await db.collection('users').findOne({ email: credentials.email })

          if (!user) {
            return null
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

          if (!isPasswordValid) {
            return null
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
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
            // Create new user
            await db.collection('users').insertOne({
              name: user.name,
              email: user.email,
              image: user.image,
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