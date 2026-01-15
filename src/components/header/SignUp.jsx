"use client";

import { useLayout } from "@/context/LayoutContext";
import Lottie from "lottie-react";
import { Eye, EyeOff, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Lottie animation
import signup from "../../../public/animation.json";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { setShowHeader, setShowFooter } = useLayout();
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;

  return (
    <div className="w-screen h-screen flex items-center justify-center p-6 md:p-10 bg-[#0b1220]">
      {/* MAIN CARD */}
      <div className="relative flex w-full max-w-7xl h-full md:h-[90vh] md:max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.15)] border border-cyan-500/10">
        {/* GLOW */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent pointer-events-none" />

        {/* LEFT SIDE */}
        <div className="hidden md:flex w-1/2 relative p-10 flex-col bg-[#0f172a] overflow-hidden">
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

          {/* MIDDLE CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-6">
            <div className="w-full h-60 mt-20">
              <Lottie key="signup-lottie" animationData={signup} loop />
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-semibold text-white leading-tight mb-3">
                Build Fast. <br />
                <span className="text-cyan-400">Launch Smarter.</span>
              </h2>
              <p className="text-cyan-200/70 text-sm max-w-xs mx-auto">
                Create your account and start building modern solutions today.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 bg-[#020617]">
          <div className="w-full max-w-md route-container">
            <h2 className="text-3xl font-semibold text-white mb-2">Create an account</h2>

            <p className="text-gray-400 mb-8 text-sm">
              Already have an account?{" "}
              <Link href="/signin" className="text-cyan-400 hover:text-cyan-300 underline">
                Sign in
              </Link>
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-[#020617] border border-cyan-500/20 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-[#020617] border border-cyan-500/20 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
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

              <label className="flex items-center gap-2 text-sm text-gray-400">
                <input type="checkbox" className="accent-cyan-500" />I agree to the Terms &
                Conditions
              </label>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition cursor-pointer"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}