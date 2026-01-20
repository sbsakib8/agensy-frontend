"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Palette, Rocket, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#05060a] text-white">
      {/* ================= GRID BACKGROUND ================= */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
      />

      {/* ================= GLOW BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/3 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 h-105 w-105 rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute -bottom-64 left-1/2 h-155 w-155 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-28 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
            <Sparkles size={16} />
            BD-Stack Solutions Agency
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Build{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Modern
            </span>{" "}
            &<br />
            Scalable Web Experiences
          </h1>

          <p className="mt-6 max-w-xl text-base text-gray-400 md:text-lg">
            We design and develop high-performance websites and web applications
            using modern technologies like React, Next.js and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]">
              Get Started
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-white/10 px-8 py-4 text-sm text-gray-300 transition-all hover:border-blue-400/40 hover:text-white">
              View Our Work
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
<div className="relative flex items-center justify-center">
  {/* MAIN IMAGE + BORDER GLOW */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="relative z-0" // <-- z-0 so cards can be above
  >
    {/* Border glow */}
    <div className="absolute -inset-0.75 rounded-3xl 
      bg-linear-to-r from-blue-500 to-cyan-400 
      blur-md opacity-70" />

    <Image
      src="/banner1.jpg"
      alt="Agency Preview"
      width={800}
      height={500}
      priority
      className="relative rounded-3xl object-cover 
        w-105 h-65 md:w-130 md:h-80"
    />
  </motion.div>

  {/* ================= FLOATING CARDS ON IMAGE ================= */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    {/* LEFT BOTTOM */}
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-6 bottom-10 -translate-x-1/2
        rounded-2xl border border-blue-400/30 bg-blue-500/10 
        px-5 py-4 backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <Zap size={18} className="text-blue-400" />
        <p className="text-sm font-semibold text-blue-400">
          Fast Performance
        </p>
      </div>
      <p className="mt-1 text-xs text-gray-400">Optimized & scalable</p>
    </motion.div>

    {/* RIGHT TOP */}
    <motion.div
      animate={{ y: [0, 16, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-0 top-0
        rounded-2xl border border-cyan-400/30 bg-cyan-500/10 
        px-5 py-4 backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <Palette size={16} className="text-cyan-400" />
        <p className="text-sm font-semibold text-cyan-400">
          UI / UX Focused
        </p>
      </div>
      <p className="mt-1 text-xs text-gray-400">Modern visual system</p>
    </motion.div>

    {/* LEFT TOP */}
    <motion.div
      animate={{ x: [0, 12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-12 top-0 -translate-y-1/2
        rounded-2xl border border-purple-400/30 bg-purple-500/10 
        px-5 py-4 backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <Rocket size={18} className="text-purple-400" />
        <p className="text-sm font-semibold text-purple-400">
          React & Next.js
        </p>
      </div>
      <p className="mt-1 text-xs text-gray-400">Modern tech stack</p>
    </motion.div>

    {/* RIGHT BOTTOM */}
    <motion.div
      animate={{ x: [0, -14, 0], y: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-2 bottom-0
        rounded-2xl border border-emerald-400/30 bg-emerald-500/10 
        px-5 py-4 backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <ShieldCheck size={18} className="text-emerald-400" />
        <p className="text-sm font-semibold text-emerald-400">
          Secure & Reliable
        </p>
      </div>
      <p className="mt-1 text-xs text-gray-400">Production ready</p>
    </motion.div>
  </div>
</div>

        
      </div>
    </section>
  );
}
