"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Layout,
  Smartphone,
  CheckCircle,
  Award,
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../../../public/UIUX Designer.json";

export default function UiUxDesignPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Generate stable random values for particles
  const [particles] = useState(() => {
    return [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-sans selection:bg-blue-500/30 relative overflow-hidden">
      {/* 1. Animated Grid Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-linear(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-linear(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* 2. Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 3. linear Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-125 h-125 bg-blue-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute top-[-10%] left-[-20%] w-125 h-125 bg-blue-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-24 pb-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-3 h-3" />
            World Class UI/UX Studio
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            Digital <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Experience
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed font-medium">
            We craft intuitive interfaces and meaningful user journeys that transform how people
            interact with your brand.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-md mb-8">
            <HeroStatCard number="200+" label="Projects" subLabel="Done" />
            <HeroStatCard number="95%" label="Client" subLabel="Happy" />
            <HeroStatCard number="10+" label="Years" subLabel="Exp." />
          </div>

          <button className="group relative px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-3 shadow-lg hover:shadow-blue-500/40 text-sm overflow-hidden">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-64 md:w-113 h-auto aspect-square">
            <Lottie animationData={animationData} loop={true} className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-4xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />

          {/* Main Container */}
          <div className="relative flex flex-wrap justify-around items-center gap-y-10 gap-x-6 py-12 px-8 border border-white/10 bg-linear-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-2xl rounded-4xl shadow-2xl overflow-hidden">
            {/* Top Subtle Line Highlight */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

            {/* Stat Items */}
            <StatItem
              icon={<Search className="w-6 h-6" />}
              number="200+"
              label="Projects Done"
              color="text-blue-400"
            />

            <div className="hidden md:block w-px h-16 bg-linear-to-b from-transparent via-white/10 to-transparent" />

            <StatItem
              icon={<CheckCircle className="w-6 h-6" />}
              number="95%"
              label="Happy Clients"
              color="text-cyan-400"
            />

            <div className="hidden md:block w-px h-16 bg-linear-to-b from-transparent via-white/10 to-transparent" />

            <StatItem
              icon={<Award className="w-6 h-6" />}
              number="10+"
              label="Years Exp."
              color="text-indigo-400"
            />

            <div className="hidden md:block w-px h-16 bg-linear-to-b from-transparent via-white/10 to-transparent" />

            <StatItem
              icon={<Star className="w-6 h-6" />}
              number="4.9/5"
              label="Avg. Rating"
              color="text-blue-400"
            />

            {/* Bottom Subtle Line Highlight */}
            <div className="absolute bottom-0 right-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Our <span className="text-blue-500">Design Expertise</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            We combine strategy, creativity, and technology to build products that users love.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Search className="w-7 h-7 text-blue-400 group-hover:text-white transition" />}
            title="User Research"
            desc="We dive deep into user psychology and data to ensure your product solves real problems."
          />

          <ServiceCard
            icon={<Layout className="w-7 h-7 text-indigo-400 group-hover:text-white transition" />}
            title="Prototyping"
            desc="Bridging the gap between idea and reality with high-fidelity interactive blueprints."
          />

          <ServiceCard
            icon={
              <Smartphone className="w-7 h-7 text-cyan-400 group-hover:text-white transition" />
            }
            title="Visual UI/UX"
            desc="Crafting pixel-perfect, intuitive interfaces that reflect your brand identity."
          />
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="relative py-24 bg-slate-950/50 border-y border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Our <span className="text-blue-500">Design Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessCard
              step="01"
              title="Discovery"
              desc="Goals, user needs, and market trends deep dive."
            />
            <ProcessCard
              step="02"
              title="Strategy"
              desc="Information architecture and wireframing."
            />
            <ProcessCard
              step="03"
              title="Design"
              desc="High-fidelity visuals and interactive prototypes."
            />
            <ProcessCard
              step="04"
              title="Delivery"
              desc="Rigorous testing and final hand-off."
              isLast
            />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
          <div className="relative border border-white/10 rounded-3xl p-8 md:p-12 bg-slate-900/80 backdrop-blur-2xl flex flex-col lg:flex-row items-center gap-8">
            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/30">
                <Image
                  src="/image-1.jpg"
                  alt="Client"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 px-3 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 fill-white text-white" />
                <span className="font-bold text-xs text-white">5.0</span>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <Quote className="w-8 h-8 text-blue-500/30" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                “The team redefined our UX. Engagement has seen a{" "}
                <span className="text-blue-400 font-bold">40% increase</span> since launch.”
              </p>
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-black text-white">Sakib Sarkar</h4>
                  <p className="text-blue-400 font-bold uppercase text-[10px] tracking-widest">
                    CEO, Tech Innovate
                  </p>
                </div>
                <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm flex items-center gap-2">
                  Contact Now <Zap className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.4;
          }
        }
        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </main>
  );
}

/* --- REFINED SUB-COMPONENTS --- */

function StatItem({ icon, number, label, color }) {
  return (
    <div className="flex flex-col items-center gap-3 group/item transition-all duration-300 hover:scale-110">
      <div
        className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-all duration-500 shadow-xl`}
      >
        <div className={`${color} transition-colors duration-300 group-hover/item:text-white`}>
          {icon}
        </div>
      </div>
      <div className="text-center">
        <span className="block text-3xl font-black text-white tracking-tighter group-hover/item:text-blue-400 transition-colors duration-300">
          {number}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 group-hover/item:text-slate-300 transition-colors duration-300">
          {label}
        </span>
      </div>
    </div>
  );
}
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl p-px bg-linear-to-br from-blue-500/40 via-indigo-500/20 to-transparent hover:from-blue-500 hover:to-indigo-600 transition-all duration-500">
      {/* Card */}
      <div className="relative h-full rounded-2xl bg-[#070d27]/80 backdrop-blur-xl p-7 border border-white/10 flex flex-col gap-5">
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-blue-500/10 via-indigo-500/10 to-transparent blur-xl" />

        {/* Icon */}
        <div className="relative w-14 h-14 rounded-xl bg-linear-to-br from-blue-500/20 to-indigo-500/10 flex items-center justify-center border border-blue-400/20 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>

        {/* CTA Button */}
        <div className="relative mt-auto">
          <button
            className="
            flex items-center gap-2 text-sm font-medium
            px-4 py-2 rounded-full
            border border-blue-500/30
            text-blue-400
            transition-all duration-300
            group-hover:bg-blue-500/10
            group-hover:text-blue-300
            group-hover:border-blue-400
          "
          >
            Explore Service
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ step, title, desc, isLast }) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="w-14 h-14 mb-6 rounded-2xl bg-slate-900 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
        <span className="text-lg font-black text-blue-400 group-hover:text-white">{step}</span>
      </div>
      <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400">{title}</h4>
      <p className="text-xs text-slate-400 px-2 leading-relaxed">{desc}</p>
      {!isLast && (
        <div className="hidden lg:block absolute top-7 left-3/4 w-full h-px bg-blue-500/20" />
      )}
    </div>
  );
}

function HeroStatCard({ number, label, subLabel }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-md rounded-xl p-4 border border-white/5 text-center hover:border-blue-500/30 transition-all group">
      <p className="text-xl font-black text-white group-hover:text-blue-400">{number}</p>
      <p className="text-[8px] uppercase tracking-widest font-bold text-slate-500 mt-1">
        {label} {subLabel}
      </p>
    </div>
  );
}
