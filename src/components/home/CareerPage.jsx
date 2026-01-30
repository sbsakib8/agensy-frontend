"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import {
  FaRocket,
  FaBriefcase,
  FaLaptopCode,
  FaUserTie,
  FaHandshake,
  FaSearch,
  FaClipboardCheck,
  FaUsers,
  FaChartLine,
  FaSmile,
  FaLightbulb,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import contactAnimation from "../../../public/Contact Us (1).json";

/* ================= HERO SLIDES ================= */
const heroSlides = [
  {
    title: "Design Your Future",
    text: "Work with world-class designers creating meaningful digital experiences.",
    img: "https://i.ibb.co.com/4ZHKqycS/download-5.jpg",
  },
  {
    title: "Build Scalable Products",
    text: "Develop high-performance applications with modern technologies.",
    img: "https://i.ibb.co.com/V5ptPVq/images-2.jpg",
  },
  {
    title: "Grow With Tokematic",
    text: "Learn, innovate, and grow with a fast-moving professional team.",
    img: "https://i.ibb.co.com/S7yvpd1c/download-4.jpg",
  },
  {
    title: "Collaborate Globally",
    text: "Join a team working together across borders to build amazing solutions.",
    img: "https://i.ibb.co.com/20X8zWty/download-6.jpg",
  },
  {
    title: "Unlock Your Potential",
    text: "Explore opportunities to learn, innovate, and reach new heights in your career.",
    img: "https://i.ibb.co.com/1JdM6WvH/download-6-1.jpg",
  },
];


/* ================= DATA ================= */
const benefits = [
  { title: "Fast Career Growth", icon: <FaRocket /> },
  { title: "Remote Friendly", icon: <FaLaptopCode /> },
  { title: "Professional Team", icon: <FaUserTie /> },
  { title: "Healthy Culture", icon: <FaHandshake /> },
];

const hiringProcess = [
  { title: "Application Review", icon: <FaSearch />, desc: "We carefully review your profile and experience." },
  { title: "Technical Interview", icon: <FaClipboardCheck />, desc: "Skill-based discussion with our experts." },
  { title: "Team Discussion", icon: <FaUsers />, desc: "Understand culture, collaboration, and mindset." },
  { title: "Offer & Onboarding", icon: <FaChartLine />, desc: "Smooth onboarding and growth planning." },
];

const lifeAtCompany = [
  { title: "Friendly Environment", icon: <FaSmile />, desc: "Supportive teammates with open communication." },
  { title: "Innovative Culture", icon: <FaLightbulb />, desc: "We value creativity and new ideas." },
  { title: "Career Mentorship", icon: <FaUserTie />, desc: "Learn directly from experienced professionals." },
];

const openings = [
  { title: "Frontend Developer", location: "Remote", type: "Full Time" },
  { title: "UI/UX Designer", location: "Dhaka / Remote", type: "Full Time" },
  { title: "Blockchain Developer", location: "Remote", type: "Contract" },
];

const CareerPage = () => {
  /* ================= HERO STATE ================= */
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050b2e] text-white overflow-hidden">

     {/* ================= HERO ================= */}
<section className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

  {/* LEFT TEXT */}
  <div className="relative h-65">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex flex-col justify-center"
      >
       <h1 className="text-[36px] md:text-[48px] font-bold leading-tight mb-6 flex flex-wrap gap-2 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
  {heroSlides[activeIndex].title.split(" ").map((word, i) => (
    <span
      key={i}
      className={`inline-block ${
        i % 2 === 0 ? "text-blue-400" : "text-white"
      }`}
    >
      {word}
    </span>
  ))}
</h1>


        <p className="text-[16px] md:text-[18px] text-gray-300 mb-6 max-w-xl leading-relaxed">
          {heroSlides[activeIndex].text}
        </p>

        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-sm">
            <FaBriefcase className="text-blue-400" /> 20+ Open Roles
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-sm">
            <FaRocket className="text-blue-400" /> High Growth Team
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* RIGHT IMAGE */}
  <div className="relative flex justify-center items-center h-105">
    <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.9, x: -40 }}
        transition={{ duration: 0.7 }}
        className="relative w-[320px] md:w-105 h-65 md:h-80 rounded-3xl overflow-hidden border-2 border-blue-400/30 shadow-lg shadow-blue-500/20"
      >
        <Image
          src={heroSlides[activeIndex].img}
          alt={heroSlides[activeIndex].title}
          fill
          className="object-cover filter brightness-95 contrast-105"
        />
      </motion.div>
    </AnimatePresence>
  </div>
</section>




      {/* ================= BENEFITS ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Join <span className="text-blue-400">Us</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div key={i} className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center hover:-translate-y-2 transition">
              <div className="text-3xl text-blue-400 mb-3 flex justify-center">{item.icon}</div>
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HIRING PROCESS ================= */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Hiring <span className="text-blue-400">Process</span>
        </h2>

        <div className="border-l border-blue-400/30 pl-8 space-y-6">
          {hiringProcess.map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className="text-blue-400 mt-1">{step.icon}</div>
              <div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIFE AT COMPANY ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Life at <span className="text-blue-400">Tokematic</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lifeAtCompany.map((item, i) => (
            <div key={i} className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center hover:-translate-y-2 transition">
              <div className="text-3xl text-blue-400 mb-3 flex justify-center">{item.icon}</div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Open <span className="text-blue-400">Positions</span>
        </h2>

        <div className="space-y-4">
          {openings.map((job, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between bg-white/5 border border-white/10 p-4 rounded-3xl">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <div className="flex gap-4 text-sm text-gray-300 mt-1">
                  <span className="flex items-center gap-1"><FaMapMarkerAlt />{job.location}</span>
                  <span className="flex items-center gap-1"><FaClock />{job.type}</span>
                </div>
              </div>
              <button className="mt-3 md:mt-0 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full flex items-center gap-2">
                Apply Now <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

     {/* ================= CONTACT ================= */}
<section className="relative z-10 max-w-7xl mx-auto px-6 py-16 overflow-hidden">
  {/* Background glows */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
  </div>

  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Left: Form */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-lg rounded-3xl p-8 bg-linear-to-br from-blue-600/20 via-transparent to-cyan-400/20 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,200,255,0.2)] overflow-hidden mx-auto"
    >
      {/* Starry overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${0.5 + Math.random() * 1.5}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <h2 className="flex items-center gap-2 text-[28px] md:text-[32px] font-semibold mb-4 text-blue-400 relative z-10">
        <FaHandshake /> Let’s Connect
      </h2>
      <p className="text-slate-300 mb-6 text-sm leading-relaxed relative z-10">
        Have a question or want to work with us? Send us a message and we’ll respond soon.
      </p>

      <form className="space-y-4 relative z-10">
        <div className="relative">
          <AiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0d1224]/70 border border-white/20 text-sm text-white placeholder-slate-400 transition focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30"
          />
        </div>
        <div className="relative">
          <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0d1224]/70 border border-white/20 text-sm text-white placeholder-slate-400 transition focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
          />
        </div>
        <div className="relative">
          <AiOutlineMessage className="absolute left-3 top-3 text-purple-400" />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0d1224]/70 border border-white/20 text-sm text-white placeholder-slate-400 transition focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-500/30 hover:brightness-110 transition w-full relative z-10"
        >
          Send Message
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </form>
    </motion.div>

    {/* Right: Lottie */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex justify-center items-center w-full max-w-lg mx-auto"
    >
      <div className="absolute w-72 h-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="relative w-full max-w-90 md:max-w-105">
        <Lottie animationData={contactAnimation} loop />
      </div>
    </motion.div>
  </div>
</section>


    </div>
  );
};

export default CareerPage;
