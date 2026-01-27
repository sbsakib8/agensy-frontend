# 🔧 Error Handling & Troubleshooting Guide

## ✅ What Was Fixed

### 1. COOP (Cross-Origin-Opener-Policy) Error
**Problem:** Firebase Google popup authentication was being blocked by COOP policy
```
Cross-Origin-Opener-Policy policy would block the window.close call.
```

**Solution:** Changed COOP header from `same-origin-allow-popups` to `unsafe-none` in `next.config.mjs`

### 2. Backend Connection Error (500)
**Problem:** POST to `http://localhost:4000/api/register-cookie` returned 500 Internal Server Error

**Root Cause:** Backend server at `localhost:4000` is either:
- Not running
- Has incorrect CORS configuration
- Has errors in the `/api/register-cookie` endpoint
- Missing required environment variables

### 3. Error Handling Improvements
**Added:**
- ✅ Centralized error handling utility (`src/lib/error-handler.js`)
- ✅ User-friendly error messages for all scenarios
- ✅ Detailed error logging with context
- ✅ Firebase-specific error handling
- ✅ Network error detection
- ✅ HTTP status code handling (400, 401, 403, 404, 409, 500, etc.)
- ✅ Multiline error display in UI with warning icon

---

## 🚀 Quick Start: Backend Setup

### Required Backend Endpoints

Your backend must have these endpoints running on `http://localhost:4000/api`:

```javascript
POST /api/register-cookie      // Email/password registration
POST /api/login-cookie         // Email/password login
POST /api/google-login         // Google OAuth login
POST /api/google-register      // Google OAuth registration
POST /api/logout               // Logout
GET  /api/profile              // Get user profile (with Bearer token)
GET  /api/users/:id            // Get user by ID
GET  /api/health               // Health check (optional but recommended)
```

### Backend Requirements

1. **CORS Configuration**
```javascript
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

2. **Cookie Parser**
```javascript
app.use(cookieParser());
```

3. **JSON Body Parser**
```javascript
app.use(express.json());
```

4. **Environment Variables**
```env
PORT=4000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
FIREBASE_PROJECT_ID=test-30c7d
```

---

## 🐛 Current Error: 500 on Register

### Error Details
```
POST http://localhost:4000/api/register-cookie 500 (Internal Server Error)
```

### Troubleshooting Steps

#### 1. Check if Backend is Running
```bash
# Terminal 1 - Check if port 4000 is in use
lsof -i :4000

# Or try to connect
curl http://localhost:4000/api/health
```

#### 2. Check Backend Logs
Look for error messages in your backend terminal. Common issues:
- Database connection failed
- Missing environment variables
- JWT secret not configured
- Firebase admin SDK not initialized

#### 3. Test Backend Endpoint
```bash
curl -X POST http://localhost:4000/api/register-cookie \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "image": "https://i.pravatar.cc/150?img=1"
  }'
```

#### 4. Check Backend Code
Ensure your `/api/register-cookie` endpoint:
- ✅ Validates input data
- ✅ Hashes password with bcrypt
- ✅ Checks for duplicate email
- ✅ Creates user in database
- ✅ Generates JWT token
- ✅ Sets cookie with proper options
- ✅ Returns `{ ok: true, user: {...} }`

---

## 📋 Error Types & Solutions

### Network Errors (Cannot Connect)
**Error:** `ERR_NETWORK` or no response
**Message:** "Cannot connect to backend server at http://localhost:4000"
**Solution:**
1. Start backend: `cd backend && npm run dev`
2. Check backend is on port 4000
3. Check firewall settings
4. Verify CORS configuration

### Authentication Errors (401/403)
**Error:** 401 Unauthorized or 403 Forbidden
**Message:** "Invalid email or password" or "Access denied"
**Solution:**
1. Verify credentials
2. Check JWT token generation
3. Ensure password hashing matches

### Validation Errors (400)
**Error:** 400 Bad Request
**Message:** "Invalid data provided"
**Solution:**
1. Check required fields
2. Validate email format
3. Check password requirements

### Duplicate Email (409)
**Error:** 409 Conflict
**Message:** "Email already exists"
**Solution:**
1. User should sign in instead
2. Or use a different email

### Server Errors (500)
**Error:** 500 Internal Server Error
**Message:** "Server error occurred"
**Solution:**
1. Check backend logs for stack trace
2. Verify database connection
3. Check environment variables
4. Look for unhandled promise rejections

### Firebase Popup Errors
**Error:** `auth/popup-closed-by-user`
**Message:** "Sign in cancelled"
**Solution:** User closed popup - no action needed

**Error:** `auth/popup-blocked`
**Message:** "Popup blocked by browser"
**Solution:** User needs to allow popups for this site

---

## 🔍 Debugging Tips

### Enable Detailed API Logging
The API client now logs all errors automatically:
```javascript
🔴 API Error: {
  url: 'register-cookie',
  method: 'post',
  status: 500,
  message: 'Internal Server Error',
  data: {...}
}
```

### Check Browser Console
Look for:
- Red error messages with ❌
- Green success messages with ✅
- API request/response logs

### Check Network Tab
1. Open DevTools → Network
2. Filter by `localhost:4000`
3. Check request payload
4. Check response body
5. Look for CORS errors

---

## 📝 Backend Example

### Sample Registration Endpoint
```javascript
// POST /api/register-cookie
router.post('/register-cookie', async (req, res) => {
  try {
    const { name, email, password, image } = req.body;
    
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        ok: false,
        message: 'Name, email, and password are required'
      });
    }
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        ok: false,
        message: 'Email already exists'
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      image: image || null
    });
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    
    // Return success
    res.status(201).json({
      ok: true,
      message: 'Registration successful',
      user: {
        uid: user._id,
        name: user.name,
        email: user.email,
        image: user.image
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      ok: false,
      message: 'Internal server error'
    });
  }
});
```

---

## ✅ Next Steps

1. **Start Backend Server**
   ```bash
   cd path/to/backend
   npm run dev
   ```

2. **Verify Backend is Running**
   ```bash
   curl http://localhost:4000/api/health
   ```

3. **Test Registration**
   - Try email/password sign up
   - Check browser console for errors
   - Check backend terminal for logs

4. **Test Google OAuth**
   - Click "Sign up with Google"
   - Complete Google sign-in
   - Check for successful redirect

---

## 🆘 Still Having Issues?

### Check These Files
- ✅ `next.config.mjs` - COOP headers
- ✅ `src/lib/api.js` - API client configuration
- ✅ `src/lib/firebase.js` - Firebase initialization
- ✅ `src/lib/error-handler.js` - Error handling logic
- ✅ `.env.local` - Environment variables

### Common Mistakes
1. Backend not running on port 4000
2. CORS not configured for `localhost:3000`
3. Missing `withCredentials: true` in API client
4. JWT secret not set
5. MongoDB connection string incorrect
6. Firebase config variables wrong

### Get Help
If you're still stuck, provide:
1. Backend logs (full error stack trace)
2. Browser console errors
3. Network tab screenshot
4. Backend framework (Express, NestJS, etc.)
5. Database type (MongoDB, PostgreSQL, etc.)
