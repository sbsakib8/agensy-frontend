"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import animationData from "../../../public/animation.json";

// Lottie Player-ke SSR off kore dynamic import kora holo
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

// ICONS
import {
  FaGlobe,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaUserTie,
  FaBuilding,
  FaRocket,
  FaTachometerAlt,
  FaShieldAlt,
  FaCogs,
  FaSync,
  FaBug,
} from "react-icons/fa";

// ================= VARIANTS =================
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } },
};

// ================= CUSTOM BACKGROUND =================
const CustomBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -80]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -40]);

  const layers = [
    {
      size: 600,
      color: "from-purple-500/30 to-pink-500/30",
      top: -100,
      left: -150,
      yTransform: y1,
      rotate: [0, 360, 0],
      duration: 40,
    },
    {
      size: 500,
      color: "from-cyan-400/30 to-blue-400/30",
      top: 300,
      left: 150,
      yTransform: y2,
      rotate: [0, -360, 0],
      duration: 35,
    },
    {
      size: 400,
      color: "from-green-400/20 to-yellow-400/20",
      top: 600,
      left: -100,
      yTransform: y3,
      rotate: [0, 360, 0],
      duration: 30,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {layers.map((l, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[180px] opacity-60 bg-linear-to-br ${l.color}`}
          style={{
            width: `${l.size}px`,
            height: `${l.size}px`,
            top: l.top,
            left: l.left,
            y: l.yTransform,
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: l.rotate }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: l.duration,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-b from-[#0b1220]/40 via-[#050914]/60 to-[#050914]/90 -z-20" />
    </div>
  );
};

// ================= MAIN WEBPAGE =================
export default function WebPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // SSR error fix
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#050914] text-gray-300 font-sans">
      <CustomBackground />

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col-reverse md:flex-row items-center gap-14">
        {/* LEFT CONTENT */}
        <motion.div initial="hidden" animate="visible" variants={fadeSlideUp} className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Build{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fast & Scalable
            </span>{" "}
            Web Apps
            <br className="hidden md:block" />
            Designed for <span className="text-cyan-400">Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-300 text-lg mb-10 max-w-xl"
          >
            We craft modern web applications that are fast, secure, and tailored to help your
            business grow seamlessly.
          </motion.p>

          <motion.div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE LOTTIE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          {/* Shudu client-side-e render hobe hydration error badate */}
          {mounted && (
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "100%", width: "100%", maxWidth: "600px" }}
            />
          )}
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeSlideUp}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-4xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                 <s.icon className="text-2xl" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative bg-[#020617]/50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Capabilities & Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/60 transition-all"
              >
                <f.icon className="text-blue-400 text-2xl mb-4" />
                <h4 className="text-white font-semibold mb-2">{f.title}</h4>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-linear-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="text-left">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to build the future?
            </h3>
            <p className="text-gray-400 max-w-xl text-lg">
              Strategy-driven development and modern engineering tailored for your brand.
            </p>
          </div>
          <button className="whitespace-nowrap px-10 py-5 rounded-2xl bg-white text-black font-bold hover:bg-cyan-400 transition-all active:scale-95 shadow-xl">
            Let&apos;s Talk Projects
          </button>
        </motion.div>
      </section>

      {/* PILLARS SECTION */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Our Pillars of Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-900/20 border border-slate-800/50 text-left space-y-4"
              >
                <p.icon className="text-cyan-400 text-3xl" />
                <h4 className="text-white font-bold text-lg">{p.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ================= DATA =================
const services = [
  { icon: FaGlobe, title: "Web App Development", desc: "Scalable, secure, and high‑performance web apps built with modern tech." },
  { icon: FaCode, title: "Modern Frontend", desc: "React and Next.js based pixel-perfect UI engineering." },
  { icon: FaServer, title: "Backend & APIs", desc: "Robust REST & GraphQL APIs with clean, maintainable architecture." },
  { icon: FaMobileAlt, title: "Adaptive Design", desc: "Web applications optimized for flawless experience on all devices." },
  { icon: FaUserTie, title: "Brand Solutions", desc: "Professional digital presence for personal and corporate brands." },
  { icon: FaBuilding, title: "Enterprise Web", desc: "High-security corporate platforms designed for scale." },
];

const features = [
  { icon: FaRocket, title: "Fast Deployment", desc: "Optimized CI/CD for quick updates." },
  { icon: FaTachometerAlt, title: "Core Vitals", desc: "Top-tier speed and performance." },
  { icon: FaShieldAlt, title: "Data Security", desc: "Encryption and best security practices." },
  { icon: FaCogs, title: "Logic First", desc: "Complex business logic simplified." },
  { icon: FaSync, title: "Seamless Scaling", desc: "Grows as your user base expands." },
  { icon: FaBug, title: "Rigorous QA", desc: "Zero-compromise testing and stability." },
];

const pillars = [
  { icon: FaRocket, title: "Strategy to Launch", desc: "We guide you from the initial concept to a successful production release." },
  { icon: FaTachometerAlt, title: "Performance‑First", desc: "Speed isn't a feature; it's a foundation for everything we build." },
  { icon: FaShieldAlt, title: "Scalable & Secure", desc: "Future-proof architecture that keeps your data safe and scaling smooth." },
];