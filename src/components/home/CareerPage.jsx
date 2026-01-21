"use client";

import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
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
import careerAnimation from "../../../public/businessman path.json";
import contactAnimation from "../../../public/Contact Us (1).json";

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
  return (
    <div className="relative overflow-hidden bg-[#050b2e] text-white min-h-screen">

      {/* ================== FULL-PAGE RAIN EFFECT ================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <span
            key={i}
            className="absolute w-0.5 h-2 bg-blue-400/40 animate-rain"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${0.5 + Math.random() * 1.5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ================== GLOW BLOBS ================== */}
      <div className="absolute -top-40 -left-40 w-120 h-120 bg-blue-500/25 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-95 h-95 bg-purple-500/25 blur-3xl rounded-full -z-10" />

      {/* ================== HERO ================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4">
            Build Your Career <br />
            <span className="text-blue-400">With Tokematic</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-300 mb-6 max-w-xl leading-relaxed">
            Join a team of designers, developers, and innovators building next-generation digital experiences.
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-sm">
              <FaBriefcase className="text-blue-400 text-lg" />
              20+ Open Roles
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-sm">
              <FaRocket className="text-blue-400 text-lg" />
              High Growth Team
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-60 h-60 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="relative w-70 md:w-105">
            <Lottie animationData={careerAnimation} loop />
          </div>
        </div>
      </section>

      {/* ================== BENEFITS ================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-[28px] md:text-[34px] font-semibold text-center mb-10">
    Why Join <span className="text-blue-400">Us</span>
  </h2>
  <div className="grid md:grid-cols-4 gap-4">
    {benefits.map((item, index) => (
      <div
        key={index}
        className="group relative p-1 rounded-[2.5rem] overflow-hidden shadow-blue-500/20 shadow-[0_0_15px_3px] transition-all duration-500 hover:-translate-y-1 hover:shadow-blue-500/30 hover:shadow-[0_0_25px_3px]"
      >
        {/* Subtle hover background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-700/15 via-transparent to-cyan-700/15 group-hover:from-blue-700/25 group-hover:to-cyan-700/25 rounded-[2.5rem] transition-all duration-500" />

        <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-[2.4rem] p-4 flex flex-col items-center space-y-2">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-60 rounded-full transition-opacity" />
            <div className="relative w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-500 text-2xl text-blue-400">
              {item.icon}
            </div>
          </div>
          <p className="text-white font-medium text-[14px] group-hover:text-blue-300 transition-colors text-center">
            {item.title}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ================== HIRING PROCESS ================== */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-center mb-10">
          Our Hiring <span className="text-blue-400">Process</span>
        </h2>
        <div className="relative border-l border-blue-400/30 pl-8 space-y-6">
          {hiringProcess.map((step, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-5 top-1 w-3 h-3 bg-blue-400 rounded-full"></span>
              <div className="flex items-start gap-3">
                <div className="text-blue-400 text-lg mt-1">{step.icon}</div>
                <div>
                  <h4 className="text-[16px] font-semibold mb-1">{step.title}</h4>
                  <p className="text-[13px] text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================== LIFE AT COMPANY ================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-center mb-10">
          Life at <span className="text-blue-400">Tokematic</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {lifeAtCompany.map((item, index) => (
            <div key={index} className="group relative p-6 rounded-[2.5rem] overflow-hidden bg-slate-800/40 backdrop-blur-xl shadow-blue-500/30 shadow-[0_0_15px_3px] transition-all duration-500 hover:-translate-y-1 hover:shadow-blue-500/50 hover:shadow-[0_0_30px_5px] hover:border-blue-400">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-all duration-500" />
              <div className="relative w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 rounded-full transition-opacity" />
                <div className="relative w-14 h-14 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500 text-3xl text-blue-400">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-[17px] font-semibold mb-1 text-white group-hover:text-blue-400 text-center">{item.title}</h4>
              <p className="text-[14px] text-slate-400 leading-relaxed text-center group-hover:text-slate-200 transition-colors">{item.desc}</p>
              <div className="pt-3 mt-3 flex justify-center">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================== OPEN POSITIONS ================== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-center mb-10">
          Open <span className="text-blue-400">Positions</span>
        </h2>
        <div className="space-y-4">
          {openings.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between bg-linear-to-r from-blue-900/20 to-cyan-900/20 border border-white/10 rounded-xl px-4 py-4 backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-blue-400">
              <div>
                <h3 className="text-[16px] font-semibold text-white">{job.title}</h3>
                <div className="flex gap-3 text-[13px] text-gray-300 mt-1">
                  <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-blue-400" />{job.location}</span>
                  <span className="flex items-center gap-1"><FaClock className="text-blue-400" />{job.type}</span>
                </div>
              </div>
              <button className="mt-2 md:mt-0 flex items-center gap-2 text-white text-sm font-medium bg-linear-to-r from-blue-700 to-cyan-700 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-500/30 active:scale-95">
                Apply Now <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-16 overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
  </div>

  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* ===== LEFT : CONTACT FORM ===== */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-lg rounded-3xl p-8
        bg-linear-to-br from-blue-600/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-10
        backdrop-blur-xl border border-white/10
        shadow-[0_10px_30px_rgba(0,200,255,0.2)]
        overflow-hidden mx-auto"
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
        {/* Name Input */}
        <div className="relative">
          <AiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0d1224]/70 border border-white/20 text-sm text-white placeholder-slate-400 transition focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0d1224]/70 border border-white/20 text-sm text-white placeholder-slate-400 transition focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
          />
        </div>

        {/* Message Input */}
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

    {/* ===== RIGHT : LOTTIE ANIMATION ===== */}
   <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative flex justify-center items-center w-full max-w-lg mx-auto"
>
  {/* Background glow */}
  <div className="absolute w-72 h-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />

  {/* Lottie animation */}
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
