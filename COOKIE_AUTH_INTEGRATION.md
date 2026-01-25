# Cookie-Based Authentication Integration

This guide shows how your Next.js frontend (localhost:3000) and Express backend (localhost:5001) share authentication via cookies.

## ✅ Setup Complete

Your authentication system now includes:

1. **Same Cookie Name**: Both systems use `auth-token`
2. **Same Domain**: Both run on localhost 
3. **Credentials Included**: All requests use `credentials: 'include'`
4. **CORS Headers**: Proper headers for cookie sharing

## 🔄 How It Works

1. **Login**: User signs in via Next.js `/api/auth/signin`
2. **Cookie Set**: Next.js sets `auth-token` cookie with JWT
3. **Session Sync**: Frontend calls `/api/auth/session-sync` to verify
4. **Backend Access**: Requests to Express include the cookie automatically

## 🚀 Usage Examples

### Frontend - Get Users from Express Backend

```javascript
import { userController } from '@/controllers/userController'

// This will automatically:
// 1. Sync session with Next.js
// 2. Include auth-token cookie in request to Express
// 3. Return user data from http://localhost:5001/api/users

const users = await userController.getAllUsersWithAuth()
console.log('Users from Express:', users)
```

### Test the Integration

```javascript
import { testCookieAuth } from '@/controllers/authTest'

// Run comprehensive test after logging in
await testCookieAuth()
```

## 🔧 Key Configuration Points

### Next.js Cookie Settings (signin route)
```javascript
response.cookies.set('auth-token', token, {
  httpOnly: true,
  secure: false,      // localhost only
  sameSite: 'lax',    // Allow cross-site for localhost
  path: '/',
  maxAge: 60 * 60 * 24 * 7 // 7 days
})
```

### Frontend Fetch Configuration
```javascript
fetch('http://localhost:5001/api/users', {
  credentials: 'include', // 🔑 KEY: Always include cookies
  headers: {
    'Content-Type': 'application/json'
  }
})
```

### Express Backend Middleware
The backend should use the provided middleware that reads from cookies:
```javascript
const token = req.cookies['auth-token']; // Cookie name: 'auth-token'
```

## 🧪 Testing

1. **Login** via your Next.js auth system
2. **Open browser dev tools** → Application → Cookies
3. **Verify** `auth-token` cookie is set for localhost
4. **Test Express endpoint**: 
   ```javascript
   // In browser console:
   fetch('http://localhost:5001/api/users', { credentials: 'include' })
     .then(r => r.json())
     .then(console.log)
   ```

## 🔍 Troubleshooting

- **401 Unauthorized**: Check if auth-token cookie exists
- **CORS Error**: Verify Express has CORS enabled for localhost:3000
- **Cookie Not Sent**: Ensure `credentials: 'include'` in all requests
- **Backend Can't Read Cookie**: Verify cookie-parser middleware in Express

## 📝 Required Express.js Setup

Make sure your Express backend has:

1. **Cookie Parser**:
   ```javascript
   app.use(cookieParser())
   ```

2. **CORS Configuration**:
   ```javascript
   app.use(cors({
     origin: 'http://localhost:3000',
     credentials: true
   }))
   ```

3. **JWT Middleware** reading from cookies as provided