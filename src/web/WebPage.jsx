"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../public/animation.json"; // আপনার Lottie JSON path

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
const fadeSlideUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } } };

// ================= CUSTOM BACKGROUND =================
const CustomBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -80]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -40]);

  const layers = [
    { size: 600, color: "from-purple-500/30 to-pink-500/30", top: -100, left: -150, yTransform: y1, rotate: [0, 360, 0], duration: 40 },
    { size: 500, color: "from-cyan-400/30 to-blue-400/30", top: 300, left: 150, yTransform: y2, rotate: [0, -360, 0], duration: 35 },
    { size: 400, color: "from-green-400/20 to-yellow-400/20", top: 600, left: -100, yTransform: y3, rotate: [0, 360, 0], duration: 30 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {layers.map((l, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[180px] opacity-60 bg-gradient-to-br ${l.color}`}
          style={{ width: `${l.size}px`, height: `${l.size}px`, top: l.top, left: l.left, y: l.yTransform }}
          initial={{ rotate: 0 }}
          animate={{ rotate: l.rotate }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: l.duration, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/40 via-[#050914]/60 to-[#050914]/90 -z-20" />
    </div>
  );
};

// ================= MAIN WEBPAGE =================
export default function WebPage() {
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
  className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug md:leading-tight mb-6"
>
  Build{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
    Fast & Scalable
  </span>{" "}
  Web Apps
  <br className="hidden md:block" />
  Designed for{" "}
  <span className="text-cyan-400">Growth</span> &{" "}
  <span className="text-blue-400">Performance</span>
</motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-300 text-lg mb-10 max-w-xl"
          >
            We craft modern web applications that are fast, secure, and tailored to help your business grow seamlessly.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={container} className="flex gap-4 flex-wrap">
            <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition">
              Get Started
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/20 transition">
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE LOTTIE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "700px", width: "700px" }}
          />
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-28">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeSlideUp}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,255,255,0.2)" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 flex flex-col items-start transition"
            >
              <s.icon className="text-cyan-400 text-3xl mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative bg-[#020617] py-28">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-6">
          <motion.h2 variants={fadeSlideUp} className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
            Powerful Features to Accelerate Your Growth
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeSlideUp} whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,255,255,0.15)" }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <f.icon className="text-blue-400 text-2xl mb-3" />
                <h4 className="text-white font-semibold mb-1">{f.title}</h4>
                <p className="text-gray-300 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-28">
        <motion.div variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">
              Partner With Experts Who Build for the Future
            </h3>
            <p className="text-gray-300 max-w-xl">
              Strategy-driven development, modern design, and scalable engineering—all under one roof.
            </p>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* PILLARS SECTION */}
      <section className="relative bg-[#020617] py-28">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-6">
          <motion.h2 variants={fadeSlideUp} className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
            Our Pillars of Excellence
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={i} variants={fadeSlideUp} whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,255,255,0.15)" }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <p.icon className="text-cyan-400 text-2xl mb-3" />
                <h4 className="text-white font-semibold mb-1">{p.title}</h4>
                <p className="text-gray-300 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// ================= DATA =================
const services = [
  { icon: FaGlobe, title: "Web App Development", desc: "Scalable, secure, high‑performance web apps." },
  { icon: FaCode, title: "Modern Frontend", desc: "React, Next.js, pixel-perfect UI engineering." },
  { icon: FaServer, title: "Backend & APIs", desc: "Robust REST & GraphQL APIs with clean architecture." },
  { icon: FaMobileAlt, title: "Cross‑Platform Apps", desc: "Web apps optimized for all devices." },
  { icon: FaUserTie, title: "Portfolio & Personal", desc: "Professional personal & brand portfolios." },
  { icon: FaBuilding, title: "Corporate Websites", desc: "Enterprise-grade business websites." },
];

const features = [
  { icon: FaRocket, title: "Fast Integration", desc: "Quick onboarding." },
  { icon: FaTachometerAlt, title: "Performance", desc: "Optimized speed." },
  { icon: FaShieldAlt, title: "Security", desc: "Industry best practices." },
  { icon: FaCogs, title: "Automation", desc: "CI/CD workflows." },
  { icon: FaSync, title: "Scalability", desc: "Grow without limits." },
  { icon: FaBug, title: "QA & Testing", desc: "Reliable deployments." },
];

const pillars = [
  { icon: FaRocket, title: "Strategy to Launch", desc: "From idea to production with clarity." },
  { icon: FaTachometerAlt, title: "Performance‑First", desc: "Speed and optimization at core." },
  { icon: FaShieldAlt, title: "Scalable & Secure", desc: "Future-proof architecture." },
];
