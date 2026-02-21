# 🚀 Agensy Frontend - Setup Guide

Welcome to the Agensy Frontend project! This guide will help you set up the project on your local machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.x or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)
- A code editor (VS Code recommended)

## 🔧 Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd agensy-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

This is the **most important step** for the project to work correctly!

#### Step 3.1: Create Environment File

Copy the example environment file:

```bash
cp .env.example .env
```

#### Step 3.2: Configure Environment Variables

Open the `.env` file and fill in all required values. Below are detailed instructions for each section:

---

#### 🔥 **Firebase Configuration**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Go to Project Settings (⚙️ icon)
4. Under "Your apps", click the web icon (`</>`)
5. Copy the configuration values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

#### 🔐 **JWT Secret**

Generate a secure random secret key:

**Method 1: Using Node.js**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Method 2: Use any strong random string (minimum 32 characters)**

```env
JWT_SECRET=your_super_secret_jwt_key_here_at_least_32_characters_long
```

---

#### 📧 **SMTP Email Configuration**

For sending verification emails and notifications.

**Using Gmail:**

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-Factor Authentication
3. Generate an App Password: [App Passwords](https://myaccount.google.com/apppasswords)
4. Use the generated password (16 characters)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_character_app_password
```

**Using Other Email Providers:**

| Provider | SMTP Host | Port |
|----------|-----------|------|
| Gmail | smtp.gmail.com | 587 |
| Outlook | smtp-mail.outlook.com | 587 |
| Yahoo | smtp.mail.yahoo.com | 587 |
| SendGrid | smtp.sendgrid.net | 587 |

---

#### 🖼️ **Cloudinary (Image Upload)**

1. Go to [Cloudinary](https://cloudinary.com/)
2. Create a free account
3. Go to Dashboard
4. Copy your API Environment variable (it starts with `cloudinary://`)

```env
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

---

#### 🌐 **Backend API URL**

**For Local Development:**
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
```

**For Production:**
```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend.vercel.app/api
```

---

#### 🗄️ **MongoDB (Optional)**

MongoDB is **optional** and only needed if you're using server-side database features locally.

**Option A: MongoDB Atlas (Cloud - Recommended)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```

**Option B: Local MongoDB**

```env
MONGODB_URI=mongodb://localhost:27017/agensy
```

**Note:** If you don't set MONGODB_URI, the application will work fine using the backend API for data operations.

---

### 4. Verify Configuration

Run the environment check script to ensure everything is configured correctly:

```bash
npm run check
```

This script will:
- ✅ Check if all required environment variables are set
- ✅ Validate the format of each variable
- ✅ Test database connection
- ✅ Provide detailed error messages if something is wrong

**Possible Causes:**
1. ❌ Firebase configuration is incorrect
2. ❌ JWT_SECRET is not set
3. ❌ Backend API URL is incorrect or backend is down
4. ❌ SMTP configuration is incorrect (for email verification) server
  npm run build - Build for production
```

---

### 5. Start Development Server

Once all environment variables are configured and verified:

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

---

## 🐛 Troubleshooting

### Issue: Login/Register Not Working

---

### Issue: Database Connection Failed

**Note:** MongoDB is optional for this frontend application. This error only matters if you're using local database features.
3. ❌ MONGODB_URI is invalid or database is unreachable
4. ❌ Backend API URL is incorrect

**Solution:**
```bash
# Run the check script
npm run check

# Fix any reported errors in your .env file
# Then restart the dev server
```

---

### Issue: "Module not found" Errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: Database Connection Failed

**Check:**
1. Is your IP address whitelisted in MongoDB Atlas?
   - Go to MongoDB Atlas → Network Access → Add IP Address → Allow Access from Anywhere (for development)
2. Is the connection string correct?
3. Is the password URL-encoded if it contains special characters?

---

### Issue: Email Sending Failed

**Check:**
1. Is 2-Factor Authentication enabled on your Gmail account?
2. Did you generate an App Password (not your regular password)?
3. Is the SMTP_PORT correct (587 for most providers)?

---

## 📝 Common Commands

```bash
# Install dependencies
npm install

# Check environment configuration
npm run check

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🔒 Security Notes

1. **Never commit `.env` file to Git**
   - The `.gitignore` file already excludes it
   - Only commit `.env.example` with dummy values

2. **Keep your secrets safe**
   - Don't share your `.env` file
   - Don't expose API keys in client-side code
   - Use environment variables for all sensitive data

3. **Use strong JWT secret**
   - Minimum 32 characters
   - Random and unique
   - Generate a new one for each environment

---

## 🆘 Getting Help

If you're still having issues after following this guide:

1. Run `npm run check` and share the output
2. Check the browser console for errors (F12)
3. Check the terminal/server logs
4. Contact the development team

---

## ✅ Checklist

Before starting development, ensure:

- [ ] Node.js is installed (v18+)
- [ ] All Firebase credentials are set
- [ ] JWT secret is generated and set
- [ ] SMTP credentials are configured
- [ ] Cloudinary URL is set
- [ ] Backend API URL is correctgured
- [ ] Cloudinary URL is set
- [ ] Backend API URL is correct
- [ ] `npm run check` passes all checks
- [ ] Development server starts without errors

---

## 🎉 You're Ready!

Once all checks pass, you're ready to start developing! Happy coding! 🚀
