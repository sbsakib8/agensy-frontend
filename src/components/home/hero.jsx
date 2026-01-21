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
 

 <div className="absolute inset-0 z-10 pointer-events-none">

  {/* LEFT BOTTOM — BIG */}
  <motion.div
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute left-10 bottom-16"
  >
    <Image
      src="/UI-UX.png"
      alt="UI UX"
      width={180}
      height={400}
      unoptimized
      className="rounded-2xl drop-shadow-2xl"
    />
  </motion.div>

  {/* RIGHT TOP — MEDIUM */}
  <motion.div
    animate={{ y: [0, 16, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute right-12 top-14"
  >
    <Image
      src="/photo1.jpeg"
      alt="Photo"
      width={230}
      height={300}
      unoptimized
      className="rounded-xl drop-shadow-xl"
    />
  </motion.div>

  {/* LEFT TOP — SMALL */}
  <motion.div
    animate={{ x: [0, 12, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute left-10 top-25"
  >
    <Image
      src="/wrodpress.webp"
      alt="WordPress"
      width={180}
      height={220}
      unoptimized
      className="rounded-xl drop-shadow-lg"
    />
  </motion.div>

  {/* RIGHT BOTTOM — WIDE */}
  <motion.div
    animate={{ x: [0, -14, 0], y: [0, 8, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    className="absolute right-16 bottom-14"
  >
    <Image
      src="/e-commerce.jpg"
      alt="E-commerce"
      width={180}
      height={160}
      unoptimized
      className="rounded-2xl drop-shadow-xl"
    />
  </motion.div>

 {/* 🔹 EXTRA SMALL — CENTER LEFT — Upward */}
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  className="absolute left-1/4 top-1/3"  // ← এখানে top কমানো হলো
>
  <Image
    src="/app.jpg"
    alt="Icon"
    width={140}
    height={130}
    unoptimized
    className="rounded-lg drop-shadow-md opacity-80"
  />
</motion.div>


  {/* 🔹 EXTRA SMALL — CENTER RIGHT */}
  <motion.div
    animate={{ x: [0, -10, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    className="absolute right-1/6 top-1/4"
  >
    <Image
      src="/download.jpg"
      alt="Icon"
      width={140}
      height={180}
      unoptimized
      className="rounded-lg drop-shadow-md opacity-75"
    />
  </motion.div>

  {/* 🔹 EXTRA TINY — BOTTOM CENTER */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute left-1/2 bottom-8 -translate-x-1/2"
  >
    <Image
      src="/Digital_marketing1.jpg"
      alt="Tiny"
      width={120}
      height={100}
      unoptimized
      className="rounded-md drop-shadow opacity-70"
    />
  </motion.div>

</div>

</div>

        
      </div>
    </section>
  );
}
