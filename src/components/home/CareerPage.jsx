"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  PenTool,
  BadgeCheck,
  TrendingUp,
  Quote,
  Mail,
  Phone,
  User,
  MessageSquare,
  Sparkles,
} from "lucide-react";


/* ================= Data ================= */
const services = [
  {
    title: "Web Development",
    desc: "Next.js, MERN, high-performance sites.",
    icon: Code2,
    cta: "Learn More",
  },
  {
    title: "UI/UX Design",
    desc: "Modern UI, conversion-focused layouts.",
    icon: PenTool,
    cta: "Learn More",
  },
  {
    title: "Branding",
    desc: "Logo, brand kit, social templates.",
    icon: BadgeCheck,
    cta: "Learn More",
  },
  {
    title: "SEO & Marketing",
    desc: "On-page SEO, performance growth.",
    icon: TrendingUp,
    cta: "Learn More",
  },
];

const caseStudies = [
  {
    title: "Roquet",
    subtitle: "SaaS Dashboard",
    metric: "Load time ↑ 40%",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    cta: "Learn More",
  },
  {
    title: "GolfHub",
    subtitle: "Tour Booking Website",
    metric: "Leads ↑ 2.1x",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    cta: "View Case Study",
  },
  {
    title: "RSFinance",
    subtitle: "Fintech Platform",
    metric: "Growth ↑ 260%",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    cta: "View Case Study",
  },
];

const testimonials = [
  {
    text: "Their team transformed our website speed in a matter of weeks. We've seen a 45% drop in bounce rate.",
    name: "Sarah L.",
    role: "Marketing Director",
  },
  {
    text: "Outstanding design work that boosted our conversions. Transparent, reliable and innovative.",
    name: "David R.",
    role: "E-commerce Manager",
  },
];

/* ================= Helpers ================= */
function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return pos;
}

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function makeParticles(count = 12, seed = 1337) {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, () => ({
    top: rand() * 100,
    left: rand() * 100,
    delay: rand() * 6,
    duration: 10 + rand() * 14,
    size: 1 + rand() * 2,
    opacity: 0.08 + rand() * 0.12,
  }));
}

/* ================= Premium Card ================= */
function GlowCard({ children, className = "" }) {
  return (
    <div className={`group relative rounded-3xl p-px ${className}`}>
      <div className="absolute inset-0 rounded-3xl bg-[radial-linear(900px_circle_at_20%_10%,rgba(34,211,238,.18),transparent_45%),linear-linear(to_right,rgba(51,65,85,.22),rgba(30,41,59,.35))] opacity-70 blur-[10px] transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className={[
          "relative rounded-3xl overflow-hidden",
          "border border-white/10",
          "bg-[#0b1225]/75 backdrop-blur-2xl",
          "shadow-[0_20px_50px_rgba(0,0,0,0.35)]",
          "transition-all duration-300 ease-out",
          "group-hover:-translate-y-1 group-hover:border-cyan-200/20 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.55)]",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -top-28 left-1/3 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />
          <div className="absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-linear(to_bottom,rgba(255,255,255,0.035),transparent)]" />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

/* ================= Section Header ================= */
function SectionHeader({ label, title, desc }) {
  return (
    <div className="text-center space-y-4 reveal">
      {label ? (
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
            {label}
          </span>
        </div>
      ) : null}

      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
        <span className="bg-linear-to-r from-cyan-200 via-slate-100 to-blue-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {desc ? (
        <p className="text-sm md:text-base text-slate-300/90 leading-relaxed max-w-2xl mx-auto">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

/* ================= Hero Micro UI ================= */
function Badge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
      <Icon className="h-3.5 w-3.5 text-cyan-200" />
      {children}
    </span>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-lg font-semibold text-slate-50 leading-none">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-300/80">{label}</p>
    </div>
  );
}

export default function NeonAgencyLanding() {
  const mouse = useMouseParallax();
  const particles = useMemo(() => makeParticles(12, 20260201), []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-neon-blue text-slate-100">
      {/* ================= Background FX ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.085]" />
        <div className="absolute inset-0 bg-grid-shimmer opacity-[0.11]" />
        <div className="absolute inset-0 bg-neon-vignette opacity-90" />

        {/* aurora blobs */}
        <div
          className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-cyan-500/12 blur-3xl animate-aurora-slow"
          style={{ transform: `translate(${mouse.x * 0.01}px, ${mouse.y * 0.01}px)` }}
        />
        <div
          className="absolute -bottom-44 -right-44 h-155 w-155 rounded-full bg-blue-500/12 blur-3xl animate-aurora-slower"
          style={{ transform: `translate(${mouse.x * -0.01}px, ${mouse.y * -0.01}px)` }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-105 w-105 rounded-full bg-indigo-500/8 blur-3xl animate-aurora-mid" />

        {/* seeded particles */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-300/40 animate-float-slow"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-24 space-y-20 md:space-y-28">
        {/* HERO / BANNER (improved) */}
        {/* HERO / BANNER (NEW) */}
        <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-18 md:pt-16 lg:pt-0">
          {/* Left */}
          <div className="lg:col-span-6 space-y-7 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.55)]" />
              Premium agency • Clean UI • High conversion
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              We Build Websites <br />
              <span className="bg-linear-to-r from-cyan-200 via-slate-100 to-blue-300 bg-clip-text text-transparent">
                That Look Expensive
              </span>
            </h1>

            <p className="text-slate-300/90 text-base md:text-lg leading-relaxed max-w-xl">
              Design-first development for brands that want premium visuals, fast performance, and
              more leads—without messy code.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button className="btn-shine group inline-flex items-center gap-2 rounded-xl px-7 py-4 bg-blue-600/90 hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-900/30">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl px-7 py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold text-slate-200">
                View Work
              </button>
            </div>

            {/* social proof */}
            <div className="pt-5 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300/80">
                Trusted by teams & founders
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {["ROQUET", "GOLFHUB", "RSFINANCE", "NORTHBYTE"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200/80"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6 reveal">
            <div className="relative">
              {/* glow */}
              <div className="absolute -inset-10 rounded-[3rem] bg-[radial-linear(closest-side,rgba(34,211,238,.14),transparent_70%)] blur-2xl" />
              <div className="absolute -inset-14 rounded-[3rem] bg-[radial-linear(closest-side,rgba(59,130,246,.10),transparent_70%)] blur-3xl" />

              <div className="grid gap-4">
                {/* main showcase card */}
                <div className="relative rounded-[2.2rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-0 bg-[linear-linear(120deg,rgba(34,211,238,0.10),transparent_40%,rgba(59,130,246,0.10))]" />
                  <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
                  <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                  {/* top bar */}
                  <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-400/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-300/70" />
                      <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    </div>
                    <p className="text-xs font-semibold tracking-widest text-slate-300/80 uppercase">
                      Featured Project
                    </p>
                    <span className="h-8 w-16 rounded-full bg-white/5 border border-white/10" />
                  </div>

                  {/* image */}
                  <div className="relative h-90 md:h-90 p-5">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                        alt="Project Preview"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                    </div>

                    {/* overlay chips */}
                    <div className="absolute bottom-8 left-8 right-8 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-semibold text-slate-100">
                        Next.js + Tailwind
                      </span>
                      <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-semibold text-slate-100">
                        Lighthouse 95+
                      </span>
                      <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-semibold text-slate-100">
                        SEO Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* mini KPI cards */}
                <div className="grid grid-cols-3 gap-4">
                  <GlowCard>
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300/80">
                        conversion
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-50">+38%</p>
                    </div>
                  </GlowCard>

                  <GlowCard>
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300/80">
                        speed
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-50">0.9s</p>
                    </div>
                  </GlowCard>

                  <GlowCard>
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300/80">
                        leads
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-50">2.1x</p>
                    </div>
                  </GlowCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="space-y-10 md:space-y-12">
          <SectionHeader
            label="Services"
            title="What We Do"
            desc="High-end digital solutions crafted with precision and deep technical expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <GlowCard key={i} className="h-full reveal">
                  <div className="flex h-68 flex-col justify-between p-8">
                    <div>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                        <Icon className="h-7 w-7 text-cyan-200" />
                      </div>

                      <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{s.desc}</p>
                    </div>

                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100 transition">
                      {s.cta}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="space-y-10 md:space-y-12">
          <SectionHeader
            label="Work"
            title="Recent Projects"
            desc="Real outcomes for real growing businesses."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <GlowCard key={i} className="reveal">
                <div className="p-5 space-y-5">
                  <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10">
                    <Image src={c.img} alt={c.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />
                    <span className="absolute top-4 left-4 text-xs font-semibold text-cyan-100 bg-cyan-500/10 px-2 py-1 rounded border border-white/10">
                      {c.metric}
                    </span>
                  </div>

                  <div className="px-1">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-300/90 leading-relaxed">{c.subtitle}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <button className="text-sm font-semibold text-slate-300 hover:text-slate-100 transition inline-flex items-center gap-2">
                        {c.cta} <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center text-cyan-200">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="space-y-10 md:space-y-12">
          <SectionHeader
            label="Proof"
            title="Client Success"
            desc="What people say after working with us."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <GlowCard key={i} className="reveal">
                <div className="p-10">
                  <Quote className="w-8 h-8 text-white/20 mb-6" />
                  <p className="text-slate-200/95 text-base md:text-lg italic leading-relaxed">
                    {t.text}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-1 bg-linear-to-r from-cyan-400 to-blue-500 w-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-slate-50">{t.name}</p>
                      <p className="text-xs text-slate-300 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="space-y-10 md:space-y-12">
          <SectionHeader label="Contact" title="Start a Project" desc="Response within 24 hours." />

          <GlowCard className="reveal">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* form */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field icon={User} placeholder="Full Name" />
                    <Field icon={Mail} placeholder="Email Address" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SelectField
                      placeholder="Service Interested"
                      options={["Web Development", "UI/UX Design", "Branding", "SEO"]}
                    />
                    <SelectField
                      placeholder="Budget Range"
                      options={["$500 - $1000", "$1k - $3k", "$3k - $10k"]}
                    />
                  </div>

                  <TextareaField icon={MessageSquare} placeholder="Project Details" />

                  <button className="btn-shine w-full md:w-auto px-10 py-4 bg-blue-600/90 hover:bg-blue-500 rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/30">
                    Send Message
                  </button>
                </div>

                {/* side card */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-8">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 mb-4">
                        Contact Info
                      </h4>
                      <div className="space-y-4 text-slate-200/90">
                        <p className="flex items-center gap-3 text-sm hover:text-cyan-200 transition cursor-pointer">
                          <Mail className="w-4 h-4" /> hello@youragency.com
                        </p>
                        <p className="flex items-center gap-3 text-sm hover:text-cyan-200 transition cursor-pointer">
                          <Phone className="w-4 h-4" /> +880 1234-567890
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 mb-4">
                        Process
                      </h4>
                      <ul className="space-y-3 text-sm text-slate-200/80 leading-relaxed">
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-cyan-300 rounded-full" /> Initial Consultation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-cyan-300 rounded-full" /> Strategy & Proposal
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-cyan-300 rounded-full" /> Weekly Sprints
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </section>
      </div>
    </div>
  );
}

/* ================= Inputs ================= */
function Field({ icon: Icon, placeholder }) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-12 py-4 text-sm text-slate-50 placeholder:text-slate-400 outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-500/10 transition-all"
      />
    </div>
  );
}

function SelectField({ placeholder, options }) {
  return (
    <select
      defaultValue=""
      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 text-sm text-slate-200 outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-500/10 transition-all"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o, i) => (
        <option key={i} value={o} className="bg-[#050b2e]">
          {o}
        </option>
      ))}
    </select>
  );
}

function TextareaField({ icon: Icon, placeholder }) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-12 py-4 text-sm text-slate-50 placeholder:text-slate-400 outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-500/10 transition-all resize-none"
      />
    </div>
  );
}
