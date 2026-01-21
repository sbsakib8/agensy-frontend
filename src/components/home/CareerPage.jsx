"use client";

import React from "react";
import Lottie from "lottie-react";
import careerAnimation from "../../../public/businessman path.json";
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

const benefits = [
  { title: "Fast Career Growth", icon: <FaRocket /> },
  { title: "Remote Friendly", icon: <FaLaptopCode /> },
  { title: "Professional Team", icon: <FaUserTie />, link: "/team" },
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

      {/* RAIN EFFECT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
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

      {/* Glow Blobs */}
      <div className="absolute -top-40 -left-40 w-120 h-120 bg-blue-500/25 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-95 h-95 bg-purple-500/25 blur-3xl rounded-full -z-10" />

      {/* HERO */}
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

      {/* BENEFITS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-center mb-10">
          Why Join <span className="text-blue-400">Us</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {benefits.map((item, index) => (
            <div key={index} className="group relative p-1 rounded-[2.5rem] overflow-hidden shadow-blue-500/30 shadow-[0_0_15px_3px] transition-all duration-500 hover:-translate-y-1 hover:shadow-blue-500/50 hover:shadow-[0_0_30px_5px]">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-cyan-400/20 group-hover:from-blue-600 group-hover:to-cyan-400 rounded-[2.5rem] transition-all duration-500" />
              <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-[2.4rem] p-4 flex flex-col items-center space-y-2">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 rounded-full transition-opacity" />
                  <div className="relative w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500 text-2xl text-blue-400">
                    {item.icon}
                  </div>
                </div>
                <p className="text-white font-medium text-[14px] group-hover:text-blue-400 transition-colors text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING PROCESS */}
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

      {/* LIFE AT COMPANY */}
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

      {/* OPEN POSITIONS */}
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

      {/* CTA */}
      <section className="relative z-10 py-16 text-center overflow-hidden bg-[#0d1229]">
        <div className="absolute inset-0 -z-10">
          {[...Array(50)].map((_, i) => (
            <span key={i} className="absolute bg-white rounded-full w-1 h-1 opacity-30 animate-twinkle-slow" style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDuration: `${5+Math.random()*5}s`, animationDelay: `${Math.random()*5}s`}} />
          ))}
        </div>
        <h2 className="text-[32px] md:text-[40px] font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
          Ready to Build Your <span className="text-white">Future</span>?
        </h2>
        <p className="text-[15px] text-slate-300 mb-6 max-w-xl mx-auto">
          Join Tokematic and grow your career with purpose.
        </p>
        <button className="relative bg-linear-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 px-8 py-3 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/30">
          Join Our Team
        </button>
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
      </section>

      <style jsx>{`
        @keyframes twinkleSlow {
          0%,100%{opacity:0.25;transform:scale(0.9);}
          50%{opacity:0.45;transform:scale(1);}
        }
        .animate-twinkle-slow{
          animation-name: twinkleSlow;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default CareerPage;
