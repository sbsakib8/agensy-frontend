"use client";
import React from "react";
import {
  Search,
  Layout,
  Smartphone,
  CheckCircle,
  Award,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../../../public/UIUX Designer.json";
export default function UiUxDesignPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans selection:bg-blue-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      {/* --- COMPACT ULTRA MODERN HERO SECTION --- */}
      <section className="relative px-6 pt-20 pb-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center overflow-visible">
        {/* Left Content Side */}
        <div className="z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-4 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            World Class UI/UX Studio
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.95]">
            Digital <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Experience
            </span>
          </h1>

          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            We craft intuitive interfaces and meaningful user journeys that transform how people
            interact with your brand.
          </p>

          {/* HERO STATS GRID - Slightly more compact */}
          <div className="grid grid-cols-3 gap-3 max-w-md mb-8">
            <HeroStatCard number="200+" label="Projects" subLabel="Done" />
            <HeroStatCard number="95%" label="Client" subLabel="Happy" />
            <HeroStatCard number="10+" label="Years" subLabel="Exp." />
          </div>

          <button className="group relative px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-3 shadow-lg hover:shadow-blue-500/40 text-sm">
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Visual Side (Compact Smartphone Mockup) */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 scale-90 md:scale-100">
  {/* Abstract Background Glows */}
  <div className="absolute w-full h-full bg-blue-500/10 blur-[100px] rounded-full animate-pulse" />

  {/* Lottie Container */}
  <div className="relative w-64 md:w-96 h-96 md:h-125">
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full h-full"
    />
  </div>

  {/* Optional Floating Badges */}
  <div
    className="absolute -right-6 top-16 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl animate-bounce"
    style={{ animationDuration: "4s" }}
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
        <Smartphone className="text-white w-4 h-4" />
      </div>
      <p className="text-[11px] font-bold">Responsive</p>
    </div>
  </div>

  <div
    className="absolute -left-8 bottom-16 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl animate-bounce"
    style={{ animationDuration: "5s" }}
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
        <Search className="text-white w-4 h-4" />
      </div>
      <p className="text-[11px] font-bold">User Centric</p>
    </div>
  </div>
</div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative group">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-cyan-400/20 rounded-4xl blur-xl opacity-50" />

          <div className="relative flex flex-wrap justify-around items-center gap-y-10 gap-x-6 py-10 px-8 border border-white/10 bg-white/2 backdrop-blur-md rounded-4xl overflow-hidden">
            {/* Background Pattern (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-linear(#3b82f6_1px,transparent_1px)] bg-size-[20px_20px]" />

            <StatItem
              icon={<Search className="w-5 h-5" />}
              number="200+"
              label="Projects Completed"
            />

            {/* Separator Line (Hidden on Mobile) */}
            <div className="hidden md:block w-px h-12 bg-linear-to-b from-transparent via-white/10 to-transparent" />

            <StatItem
              icon={<CheckCircle className="w-5 h-5" />}
              number="95%"
              label="Happy Clients"
            />

            <div className="hidden md:block w-px h-12 bg-linear-to-b from-transparent via-white/10 to-transparent" />

            <StatItem icon={<Award className="w-5 h-5" />} number="10+" label="Years Experience" />

            <div className="hidden md:block w-px h-12 bg-linear-to-b from-transparent via-white/10 to-transparent" />

            <StatItem icon={<Star className="w-5 h-5" />} number="4.9/5" label="Average Rating" />
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative">
        {/* Background glow for the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
              Design Expertise
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            We combine strategy, creativity, and technology to build products that users love.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <ServiceCard
            icon={<Search className="w-8 h-8 text-blue-400" />}
            title="User Research & Analysis"
            desc="We dive deep into user psychology and data to ensure your product solves real problems for real people."
          />
          <ServiceCard
            icon={<Layout className="w-8 h-8 text-indigo-400" />}
            title="Wireframing & Prototyping"
            desc="Bridging the gap between idea and reality with interactive blueprints that map out every user touchpoint."
          />
          <ServiceCard
            icon={<Smartphone className="w-8 h-8 text-cyan-400" />}
            title="Visual UI/UX Design"
            desc="Crafting pixel-perfect, intuitive interfaces that reflect your brand identity and delight your customers."
          />
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative py-32 bg-[#020617] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full `bg-[radial-linear(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]`" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Our <span className="text-blue-500">Design Process</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              A structured approach to transforming your vision into a high-performing digital
              product.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <ProcessCard
              step="01"
              title="Discovery"
              desc="We dive deep into your goals, user needs, and market trends to build a solid foundation."
              isFirst
            />
            {/* Step 2 */}
            <ProcessCard
              step="02"
              title="Strategy"
              desc="Defining the information architecture, user flows, and wireframes for a seamless journey."
            />
            {/* Step 3 */}
            <ProcessCard
              step="03"
              title="Design"
              desc="Crafting high-fidelity visuals and interactive prototypes with a focus on aesthetics and usability."
            />
            {/* Step 4 */}
            <ProcessCard
              step="04"
              title="Delivery"
              desc="Rigorous testing and final hand-off of design assets ready for seamless development."
              isLast
            />

            {/* Connector Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent z-0" />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      {/* --- COMPACT PROFESSIONAL TESTIMONIAL SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Voices of <span className="text-blue-500">Success</span>
          </h2>
          <p className="text-slate-400 text-sm tracking-wide uppercase">
            Trusted by industry leaders
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          {/* Animated Border linear */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-4xl blur-sm opacity-20 group-hover:opacity-40 transition duration-700"></div>

          {/* Main Card - Reduced Padding (p-6 md:p-10) */}
          <div className="relative border border-white/10 rounded-4xl p-6 md:p-10 bg-[#030712]/90 backdrop-blur-xl flex flex-col lg:flex-row items-center gap-8 md:gap-12 overflow-hidden">
            {/* Visual Side: Resized Client Image */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/30 rotate-2 group-hover:rotate-0 transition-transform duration-500 relative">
                <Image
                  src="/image-1.jpg"
                  alt="Sakib Sarkar"
                  width={160} // fixed width
                  height={160} // fixed height
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating Rating Badge */}
              <div className="absolute -bottom-2 -right-2 bg-blue-600 px-3 py-1 rounded-lg shadow-xl flex items-center gap-1">
                <Star className="w-3 h-3 fill-white text-white" />
                <span className="font-bold text-xs text-white">5.0</span>
              </div>
            </div>

            {/* Content Side - More Compact Spacing */}
            <div className="flex-1 space-y-4">
              <Quote className="w-8 h-8 text-blue-500/30" />

              <p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-100 italic">
                “The team redefined our UX. Engagement has seen a{" "}
                <span className="text-blue-400 font-bold">40% increase</span> since launch.”
              </p>

              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-black text-white">Sakib Sarkar</h4>
                  <p className="text-blue-400 font-semibold tracking-wider uppercase text-[11px]">
                    CEO, Tech Innovate
                  </p>
                </div>

                <button className="group/btn relative px-6 py-3 bg-white text-black font-bold rounded-xl transition-all hover:bg-blue-600 hover:text-white overflow-hidden shadow-lg active:scale-95 text-sm">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Project{" "}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Background Subtle Quote Icon */}
            <Quote className="absolute -bottom-8 -right-8 w-32 h-32 text-white/2 -rotate-12 pointer-events-none" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* SUB-COMPONENTS */

function StatItem({ icon, number, label }) {
  return (
    <div className="flex items-center gap-5 group/item transition-transform duration-300 hover:-translate-y-1">
      <div className="shrink-0 p-3.5 bg-blue-500/10 border border-blue-500/20 rounded-2xl group-hover/item:bg-blue-600 group-hover/item:border-blue-400 group-hover/item:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300">
        <div className="text-blue-400 group-hover/item:text-white transition-colors">{icon}</div>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-black tracking-tight text-white leading-none mb-1">
          {number}
        </span>
        <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-500 group-hover/item:text-blue-400/80 transition-colors">
          {label}
        </span>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group relative p-1 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Animated linear Border on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-cyan-400/20 opacity-100 group-hover:from-blue-600 group-hover:to-cyan-400 transition-all duration-500" />

      {/* Inner Content */}
      <div className="relative h-full bg-[#030712] rounded-[2.4rem] p-8 md:p-10 flex flex-col items-start space-y-6">
        {/* Icon Container with Glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500">
            {icon}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
            {desc}
          </p>
        </div>

        {/* Subtle Decorative Arrow */}
        <div className="pt-4 mt-auto">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
            <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ step, title, desc, isLast }) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Number Circle with Animation */}
      <div className="w-20 h-20 mb-8 rounded-3xl bg-[#0F172A] border border-blue-500/30 flex items-center justify-center relative z-10 group-hover:border-blue-400 group-hover:bg-blue-600 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
        <span className="text-2xl font-black text-blue-400 group-hover:text-white transition-colors">
          {step}
        </span>

        {/* Decorative Ring */}
        <div className="absolute inset-0 rounded-3xl border border-blue-500/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
      </div>

      {/* Content Box */}
      <div className="px-4 transition-all duration-300">
        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors tracking-wide">
          {title}
        </h4>
        <p className="text-[15px] text-slate-400 leading-relaxed font-medium">{desc}</p>
      </div>

      {/* Mobile Connector */}
      {!isLast && (
        <div className="md:hidden w-px h-12 bg-linear-to-b from-blue-500/50 to-transparent my-6" />
      )}
    </div>
  );
}

function HeroStatCard({ number, label, subLabel }) {
  return (
    <div className="group relative p-px rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
      {/* Border linear Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/30 to-transparent group-hover:from-blue-500 transition-all duration-500" />

      {/* Inner Card Body */}
      <div className="relative bg-[#0F172A]/80 backdrop-blur-md rounded-2xl p-4 text-center h-full flex flex-col justify-center border border-white/5">
        <p className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tight">
          {number}
        </p>
        <div className="mt-1">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold leading-none">
            {label}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
            {subLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
