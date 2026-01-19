"use client";

import React from "react";
import {
  FaRocket,
  FaBriefcase,
  FaLaptopCode,
  FaUserTie,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

const benefits = [
  { title: "Fast Career Growth", icon: <FaRocket /> },
  { title: "Remote Friendly", icon: <FaLaptopCode /> },
  { title: "Professional Team", icon: <FaUserTie /> },
  { title: "Healthy Culture", icon: <FaHandshake /> },
];

const openings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
  },
  {
    title: "UI/UX Designer",
    location: "Dhaka / Remote",
    type: "Full Time",
  },
  {
    title: "Blockchain Developer",
    location: "Remote",
    type: "Contract",
  },
];

const CareerPage = () => {
  return (
    <div className="relative overflow-hidden bg-[#050b2e] text-white">
      {/* ===== Background Glow ===== */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl" />

      {/* ================= HERO ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Build Your Career <br />
            <span className="text-blue-400">With Tokematic</span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-xl">
            Join a team of innovators, designers, and developers building
            next-generation digital products.
          </p>

          <div className="flex gap-6 flex-wrap">
            <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10">
              <FaBriefcase className="text-blue-400 text-xl" />
              <span>20+ Open Roles</span>
            </div>

            <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10">
              <FaRocket className="text-blue-400 text-xl" />
              <span>High Growth Team</span>
            </div>
          </div>
        </div>

        {/* Right Animation */}
        <div className="relative flex justify-center items-center">
          {/* Glow */}
          <div className="absolute w-[280px] h-[280px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" />

          {/* Animated Card */}
          <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 w-[320px] animate-float">
            <h3 className="text-2xl font-semibold mb-3">
              Work With Purpose
            </h3>
            <p className="text-gray-300 mb-6">
              Grow your skills while creating meaningful digital experiences.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 text-sm rounded-full bg-blue-500/20 text-blue-400">
                Innovation
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-purple-500/20 text-purple-400">
                Growth
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-cyan-500/20 text-cyan-400">
                Impact
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Join <span className="text-blue-400">Us</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-blue-400 transition"
            >
              <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Open <span className="text-blue-400">Positions</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {openings.map((job, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6 hover:scale-[1.03] transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {job.title}
              </h3>
              <p className="text-gray-300 mb-4">
                📍 {job.location} • {job.type}
              </p>

              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <FaCheckCircle />
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative z-10 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Join Our <span className="text-blue-400">Team</span>?
        </h2>
        <p className="text-gray-300 mb-8">
          Let’s build the future together.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg">
          Join Our Team
        </button>
      </section>
    </div>
  );
};

export default CareerPage;
