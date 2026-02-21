# Agensy Frontend

A modern Next.js application for agency management with authentication, dashboard, and service management features.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Firebase account (for authentication)
- SMTP email account (Gmail recommended)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agensy-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and fill in all required values. See [SETUP.md](./SETUP.md) for detailed instructions.

4. **Verify configuration**
   ```bash
   npm run check
   ```
   
   This will validate all environment variables and test connections.

5. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Documentation

- **[SETUP.md](./SETUP.md)** - Comprehensive setup guide with detailed instructions for all environment variables
- **[.env.example](./.env.example)** - Template file showing all required environment variables

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run check    # Validate environment configuration
```

## 🔐 Environment Variables

This project requires the following environment variables:

- **Firebase Configuration** - For authentication
- **JWT Secret** - For token signing
- **SMTP Configuration** - For sending emails
- **Cloudinary** - For image uploads
- **Backend API URL** - API endpoint

**Optional:**
- **MongoDB** - Only if using local database features

Run `npm run check` to validate your configuration.

## 🐛 Troubleshooting

1. Verify all environment variables are set: `npm run check`
2. Check Firebase configuration
3. Ensure JWT_SECRET is at least 32 characters
4. Verify backend API is accessible
3. Ensure JWT_SECRET is at least 32 characters
### Common Issues

- **Module not found**: Delete `node_modules` and run `npm install`
- **Email sending failed**: Verify SMTP credentials (use App Password for Gmail)
- **Authentication errors**: Check Firebase configuration and JWT_SECRET
- **Database connection failed**: Check MongoDB connection string and IP whitelist
- **Email sending failed**: Verify SMTP credentials (use App Password for Gmail)

See [SETUP.md](./SETUP.md) for detailed troubleshooting.

## 📦 Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19, TailwindCSS 4
- **Authentication**: Firebase Auth, JWT
- **Database**: MongoDB with Mongoose
- **Email**: Nodemailer
- **File Upload**: Cloudinary
- **Animations**: Framer Motion, Lottie

## 🤝 Contributing

1. Clone the repository
2. Follow setup instructions in [SETUP.md](./SETUP.md)
3. Create a feature branch
4. Make your changes
5. Run `npm run check` to verify configuration
6. Submit a pull request

## 📄 License

This project is private and proprietary.

---

**Need Help?** Check the [SETUP.md](./SETUP.md) file or run `npm run check` to diagnose issues.

