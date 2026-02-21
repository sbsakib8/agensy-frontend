# Quick Start Guide - For New Developers

## 🚀 After Cloning This Repository

Follow these simple steps to get the project running on your machine:

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Setup Environment Variables
```bash
# Copy the example file
cp .env.example .env
```

Then open `.env` and fill in these required values:
- Firebase credentials (from Firebase Console)
- JWT_SECRET (generate with: `npm run generate-jwt-secret`)
- SMTP email credentials (use Gmail App Password)
- Cloudinary URL (from Cloudinary Dashboard)
- Backend API URL (ask your team lead)

### Step 3: Verify Configuration
```bash
npm run check
```

✅ All checks should pass!

### Step 4: Start Development
```bash
npm run dev
```

Visit: http://localhost:3000

## 📚 Need More Details?

- **SETUP.md** - Complete setup guide with step-by-step instructions
- **README.md** - Project overview and documentation

## 🆘 Getting Errors?

Run `npm run check` - it will tell you exactly what's wrong!

## 🔑 Common Issues

**Login/Register not working?**
- Check Firebase config
- Ensure JWT_SECRET is set (32+ characters)
- Verify SMTP credentials are correct

**Still stuck?**
- Check SETUP.md for troubleshooting
- Ask your team for help
- Share output of `npm run check`
