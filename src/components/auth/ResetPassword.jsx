"use client";

import { useLayout } from "@/context/LayoutContext";
import Lottie from "lottie-react";
import { Eye, EyeOff, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import login from "../../../public/animation.json";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { setShowHeader, setShowFooter } = useLayout();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      router.push('/forgot-password');
      return;
    }
    
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
  }, [setShowHeader, setShowFooter, token, router]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          password: formData.password
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.message || 'Failed to reset password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  if (success) {
    return (
      <div className="w-screen h-screen flex items-center justify-center p-6 md:p-10 bg-[#0b1220]">
        <div className="relative flex w-full max-w-4xl h-full md:h-[80vh] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.15)] border border-cyan-500/10">
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent pointer-events-none" />
          
          <div className="w-full flex items-center justify-center px-6 md:px-16 bg-[#020617]">
            <div className="w-full max-w-md text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold text-white mb-4">Password Reset Successful</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your password has been successfully reset. You can now sign in with your new password.
                </p>
              </div>

              <button
                onClick={() => router.push('/signin')}
                className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition cursor-pointer"
              >
                Continue to Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center p-6 md:p-10 bg-[#0b1220]">
      <div className="relative flex w-full max-w-7xl h-full md:h-[90vh] md:max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.15)] border border-cyan-500/10">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent pointer-events-none" />

        {/* RIGHT SIDE - FORM */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 bg-[#020617]">
          <div className="w-full max-w-md route-container">
            <div className="mb-8">
              <Link 
                href="/signin"
                className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </Link>
              
              <h2 className="text-3xl font-semibold text-white mb-2">Reset Password</h2>
              <p className="text-gray-400 mb-8 text-sm">
                Enter your new password below.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter new password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#020617] border border-cyan-500/20 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-300 hover:text-white transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm new password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#020617] border border-cyan-500/20 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-300 hover:text-white transition"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Resetting Password...' : 'Reset Password'}
              </button>
            </form>
          </div>
        </div>

        {/* LEFT SIDE - ANIMATION */}
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
            <div className="w-full max-w-70 md:max-w-82.5 aspect-square flex items-center justify-center">
              <Lottie
                key="reset-password-lottie"
                animationData={login}
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="text-center mt-5">
              <h2 className="text-4xl font-semibold text-white leading-tight mb-3">
                Create New Password. <br />
                <span className="text-cyan-400">Stay Safe.</span>
              </h2>
              <p className="text-cyan-200/70 text-sm max-w-xs mx-auto">
                Choose a strong password to keep your account secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}