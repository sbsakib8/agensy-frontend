"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "../../../public/Contact Us (1).json";
export default function ContactPage() {
  // Floating particles
  const particles = Array.from({ length: 30 }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 5,
  }));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Message received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="relative min-h-screen px-6 py-24 text-white">
      {/* ================= FULL SCREEN BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animation: `float ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="text-center mb-20 mt-12 md:mt-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl">
          Have any questions or want to work with us? Fill out the form and we’ll
          get back to you shortly.
        </p>
      </div>

      {/* ================= FORM + IMAGE ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT: FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none h-32"
            required
          />

          <button
            type="submit"
            className="py-3 bg-linear-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:bg-purple-500 transition"
          >
            Send Message
          </button>
        </form>

       {/* RIGHT: IMAGE */}
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
    </main>
  );
}
