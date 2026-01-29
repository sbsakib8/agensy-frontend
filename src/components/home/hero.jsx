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

       {/* ===== RIGHT SIDE : FLOATING IMAGE BENTO GRID ===== */}
<div className="relative grid grid-cols-3 grid-rows-3 gap-4 h-[340px] md:h-[420px]">

  {/* background glow */}
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -z-10 w-80 h-80 rounded-full bg-sky-500/10 blur-[110px]"
  />

  {/* ===== IMAGE 1 : MAIN ===== */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.03 }}
    className="
      col-span-2 row-span-2
      rounded-2xl overflow-hidden
      bg-gradient-to-br from-sky-500/20 to-blue-600/20
      border border-white/10
    "
  >
    <img
      src="https://i.ibb.co.com/wNDjjXSZ/istockphoto-1189378904-612x612.jpg"
      alt="UI UX"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* ===== IMAGE 2 ===== */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ y: -6 }}
    className="rounded-xl overflow-hidden border border-white/10"
  >
    <img
      src="/photo1.jpeg"
      alt="Visual"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* ===== IMAGE 3 ===== */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ y: -6 }}
    className="rounded-xl overflow-hidden border border-white/10"
  >
    <img
      src="/wrodpress.webp"
      alt="WordPress"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* ===== IMAGE 4 ===== */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ y: -6 }}
    className="rounded-xl overflow-hidden border border-white/10"
  >
    <img
      src="/app.jpg"
      alt="App"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* ===== IMAGE 5 : WIDE ===== */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.05 }}
    className="
      col-span-2 row-span-1
      rounded-xl overflow-hidden
      border border-white/10
    "
  >
    <img
      src="/e-commerce.jpg"
      alt="E-commerce"
      className="w-full h-full object-cover"
    />
  </motion.div>

</div>



        
      </div>
    </section>
  );
}