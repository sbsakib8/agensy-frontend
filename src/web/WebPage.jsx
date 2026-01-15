"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import animationData from "../../public/animation.json";

// ================== LOTTIE (SSR SAFE) ==================
const Player = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then(
      (mod) => mod.Player
    ),
  { ssr: false }
);

// ================== ICONS ==================
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

// ================== ANIMATION VARIANTS ==================
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

// ================== DATA ==================
const services = [
  {
    icon: FaGlobe,
    title: "Web App Development",
    desc: "Scalable, secure, high-performance web applications.",
  },
  {
    icon: FaCode,
    title: "Modern Frontend",
    desc: "Pixel-perfect React & Next.js interfaces.",
  },
  {
    icon: FaServer,
    title: "Backend & APIs",
    desc: "Robust REST & GraphQL architectures.",
  },
  {
    icon: FaMobileAlt,
    title: "Adaptive Design",
    desc: "Optimized experience across all devices.",
  },
  {
    icon: FaUserTie,
    title: "Brand Solutions",
    desc: "Professional digital brand identity.",
  },
  {
    icon: FaBuilding,
    title: "Enterprise Web",
    desc: "High-security, scalable enterprise platforms.",
  },
];

const features = [
  { icon: FaRocket, title: "Fast Deployment", desc: "Optimized CI/CD pipelines." },
  { icon: FaTachometerAlt, title: "Core Vitals", desc: "Top-tier performance scores." },
  { icon: FaShieldAlt, title: "Data Security", desc: "Industry-standard encryption." },
  { icon: FaCogs, title: "Logic First", desc: "Clean, maintainable architecture." },
  { icon: FaSync, title: "Seamless Scaling", desc: "Built to grow with your users." },
  { icon: FaBug, title: "Rigorous QA", desc: "Stability through testing." },
];

const pillars = [
  {
    icon: FaRocket,
    title: "Strategy to Launch",
    desc: "From idea to production-ready solution.",
  },
  {
    icon: FaTachometerAlt,
    title: "Performance-First",
    desc: "Speed as a foundational principle.",
  },
  {
    icon: FaShieldAlt,
    title: "Scalable & Secure",
    desc: "Future-proof architecture you can trust.",
  },
];

// ================== CUSTOM BACKGROUND ==================
const CustomBackground = () => {
  const { scrollY } = useScroll();

  const ySlow = useTransform(scrollY, [0, 1000], [0, -40]);
  const yMedium = useTransform(scrollY, [0, 1000], [0, -70]);
  const yFast = useTransform(scrollY, [0, 1000], [0, -100]);

  const layers = [
    {
      size: 600,
      position: { top: -120, left: -160 },
      color: "from-purple-500/30 to-pink-500/30",
      y: ySlow,
      duration: 40,
      rotate: [0, 360, 0],
    },
    {
      size: 520,
      position: { top: 300, left: 200 },
      color: "from-cyan-400/30 to-blue-500/30",
      y: yMedium,
      duration: 35,
      rotate: [0, -360, 0],
    },
    {
      size: 420,
      position: { top: 650, left: -120 },
      color: "from-green-400/20 to-yellow-400/20",
      y: yFast,
      duration: 30,
      rotate: [0, 360, 0],
    },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[180px] bg-linear-to-br ${layer.color}`}
          style={{
            width: layer.size,
            height: layer.size,
            ...layer.position,
            y: layer.y,
          }}
          animate={{ rotate: layer.rotate }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: layer.duration,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-b from-[#0b1220]/40 via-[#050914]/70 to-[#050914]/95" />
    </div>
  );
};

// ================== MAIN PAGE ==================
export default function WebPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative bg-[#050914] text-gray-300 overflow-hidden font-sans">
      <CustomBackground />

      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Build{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Fast & Scalable
            </span>{" "}
            Web Apps
            <br className="hidden md:block" />
            Designed for <span className="text-cyan-400">Growth</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-10">
            We craft modern, secure, and high-performance web
            applications engineered to help your business scale
            confidently.
          </p>

          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-semibold shadow-lg hover:bg-cyan-400"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          {mounted && (
            <Player
              autoplay
              loop
              src={animationData}
              style={{ maxWidth: 600, width: "100%" }}
            />
          )}
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeSlideUp}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition"
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <s.icon className="text-2xl text-cyan-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-[#020617]/60 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Capabilities & Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-900/60"
              >
                <f.icon className="text-blue-400 text-2xl mb-4" />
                <h4 className="text-white font-semibold mb-2">
                  {f.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-10 md:p-16 rounded-3xl bg-linear-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-2xl border border-white/10 flex flex-col md:flex-row gap-10 justify-between items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to build the future?
            </h3>
            <p className="text-gray-400 max-w-xl">
              Strategy-driven engineering and modern development
              tailored for your brand.
            </p>
          </div>

          <button className="px-10 py-5 rounded-2xl bg-white text-black font-bold hover:bg-cyan-400 active:scale-95">
            Let's Talk Projects
          </button>
        </motion.div>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Our Pillars of Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-slate-900/20 border border-slate-800/50 space-y-4"
              >
                <p.icon className="text-cyan-400 text-3xl" />
                <h4 className="text-white font-bold">
                  {p.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
