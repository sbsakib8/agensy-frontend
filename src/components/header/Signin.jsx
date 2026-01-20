"use client";

import { useLayout } from "@/context/LayoutContext";
import Lottie from "lottie-react";
import { Eye, EyeOff, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signInWithGoogle, emailSignIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import login from "../../../public/Login (1).json";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { setShowHeader, setShowFooter } = useLayout();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    setShowHeader(false);
    setShowFooter(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => {
      clearTimeout(timer);
      setShowHeader(true);
      setShowFooter(true);
    };
  }, [setShowHeader, setShowFooter]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await emailSignIn(formData);
      if (result.success) {
        router.push('/');
      } else {
        setError(result.message || 'Sign in failed');
      }
    } catch (err) {
      setError('An error occurred during sign in');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError('Google sign in failed');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="w-screen h-screen flex items-center justify-center p-6 md:p-10 bg-[#0b1220]">
      {/* MAIN CARD */}
      <div className="relative flex w-full max-w-7xl h-full md:h-[90vh] md:max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.15)] border border-cyan-500/10">
        {/* GLOW */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent pointer-events-none" />

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 bg-[#020617]">
          <div className="w-full max-w-md route-container">
            <h2 className="text-3xl font-semibold text-white mb-2">Sign in to account</h2>

            <p className="text-gray-400 mb-8 text-sm">
              {"Don't have an account?"}{" "}
              <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 underline">
                Register here
              </Link>
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleEmailSignIn}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-[#020617] border border-cyan-500/20 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#020617] border border-cyan-500/20 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-300 hover:text-white transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-xs text-cyan-400 hover:text-white transition"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-cyan-500/20"></div>
              <span className="px-4 text-gray-400 text-sm">or</span>
              <div className="flex-1 border-t border-cyan-500/20"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full py-3 rounded-lg border border-cyan-500/20 text-white font-medium hover:bg-cyan-500/10 transition flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>

        <div className="hidden md:flex w-1/2 relative p-10 flex-col justify-between bg-[#0f172a] overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />

          {/* TOP */}
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-linear-to-br from-cyan-400 to-blue-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <Link href="/" className="text-md font-bold">
                  <span className="text-white">BD Stack </span>
                  <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    -Solutions
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/"
              className="flex items-center gap-1 text-xs text-cyan-200 hover:text-white transition bg-gray-700 py-2 px-3 rounded-full"
            >
              Back to website <ChevronRight size={14} />
            </Link>
          </div>

          {/* CENTER CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            {/* Lottie Container - optimized size and spacing */}
            <div className="w-full max-w-70 md:max-w-82.5 aspect-square flex items-center justify-center">
              <Lottie
                key="signin-lottie"
                animationData={login}
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Text Content - Clear spacing from Lottie */}
            <div className="text-center mt-5">
              <h2 className="text-4xl font-semibold text-white leading-tight mb-3">
                Welcome Back. <br />
                <span className="text-cyan-400">Resume Work.</span>
              </h2>
              <p className="text-cyan-200/70 text-sm max-w-xs mx-auto">
                Securely access your account and continue your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}