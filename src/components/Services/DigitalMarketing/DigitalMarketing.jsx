"use client";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import {
  Rocket,
  Store,
  ShoppingCart,
  User,
  CheckCircle2,
  Target,
  DollarSign,
  TrendingUp,
  FileText,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

import heroAnim from "../../../../public/Google Advertisement.json";

/* ----------------- UI helpers ----------------- */
const GlowBlob = ({ className = "" }) => (
  <div
    className={[
      "pointer-events-none absolute -z-10 rounded-full blur-3xl opacity-40",
      className,
    ].join(" ")}
    style={{
      background: "radial-gradient(closest-side, rgba(56,189,248,0.55), rgba(56,189,248,0))",
    }}
  />
);

const Card = ({ className = "", children }) => (
  <div
    className={[
      "group relative overflow-hidden rounded-2xl border border-sky-500/15 bg-white/[0.035] backdrop-blur-md",
      "shadow-[0_0_0_1px_rgba(56,189,248,0.06),0_20px_60px_rgba(0,0,0,0.35)]",
      "transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/5.5",
      "hover:shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_30px_90px_rgba(0,0,0,0.55),0_0_60px_rgba(56,189,248,0.18)]",
      className,
    ].join(" ")}
  >
    {/* glow corners */}
    <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-sky-500/15 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
    <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
    {/* shine sweep */}
    <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)] transition duration-700 group-hover:translate-x-[120%]" />
    {children}
  </div>
);

const PrimaryButton = ({ children }) => (
  <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(56,189,248,0.25)] transition hover:bg-sky-400 active:scale-[0.99]">
    {children}
    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
  </button>
);

const GhostButton = ({ children }) => (
  <button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/3 px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/6 active:scale-[0.99]">
    {children}
  </button>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-xs text-white/60">
    {children}
  </span>
);

/* ----------------- page ----------------- */
export default function DigitalMarketing() {
  // ✅ scroll reveal animation (no framer)
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const els = Array.from(document.querySelectorAll(".scroll-anim"));

    // ✅ stagger delay
    els.forEach((el, idx) => {
      el.style.setProperty("--d", `${idx * 70}ms`);
    });

    if (reduceMotion) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Base gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_20%_10%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(800px_800px_at_50%_95%,rgba(236,72,153,0.10),transparent_60%)]" />

          {/* Animated glowing blobs */}
          <div className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-fuchsia-500/20 blur-3xl animate-[blob_12s_ease-in-out_infinite]" />
          <div className="absolute top-20 -right-40 h-130 w-130 rounded-full bg-indigo-500/20 blur-3xl animate-[blob_14s_ease-in-out_infinite] [animation-delay:1.2s]" />
          <div className="absolute -bottom-48 left-1/3 h-155 w-155 rounded-full bg-sky-500/12 blur-3xl animate-[blob_16s_ease-in-out_infinite] [animation-delay:2.4s]" />

          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[70px_70px]" />

          {/* Soft noise */}
          <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
        </div>

        <main className="relative mx-auto w-full max-w-7xl px-4 py-10 md:px-6 md:py-25">
          <div className="space-y-16 md:space-y-20">
            {/* ---------------- HERO ---------------- */}
            <section className="relative scroll-anim">
              <GlowBlob className="left-35 top-35 h-115 w-115" />
              <GlowBlob className="right-40 top-25 h-130 w-130" />

              <Card className="p-6 md:p-8">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                  {/* Left */}
                  <div className="scroll-anim">
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-200">
                      <Sparkles className="h-4 w-4" />
                      Digital Marketing
                    </div>

                    <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                      SEO, PPC &amp; Social Growth
                      <span className="block text-white/80">that drives real revenue</span>
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                      We build conversion-focused funnels: keyword strategy, ads testing, and
                      content systems — with weekly optimization.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <PrimaryButton>Get Free Growth Audit</PrimaryButton>
                      <GhostButton>View Case Studies</GhostButton>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Pill>
                        <Zap className="h-4 w-4 text-sky-200" /> Fast iteration
                      </Pill>
                      <Pill>
                        <ShieldCheck className="h-4 w-4 text-sky-200" /> Clear KPIs
                      </Pill>
                      <Pill>
                        <Target className="h-4 w-4 text-sky-200" /> ROI first
                      </Pill>
                    </div>

                    {/* mini proof */}
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {[
                        ["+3.5x", "Revenue", "case study"],
                        ["-22%", "CPA", "avg improvement"],
                        ["4.8x", "ROAS", "paid campaigns"],
                      ].map(([a, b, c], idx) => (
                        <div
                          key={a}
                          className="scroll-anim rounded-2xl border border-white/10 bg-white/2 p-4"
                          style={{ transitionDelay: `${idx * 80}ms` }}
                        >
                          <p className="text-2xl font-semibold text-white/90">{a}</p>
                          <p className="mt-1 text-sm font-semibold text-white/75">{b}</p>
                          <p className="mt-1 text-xs text-white/45">{c}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Lottie + particles */}
                  <div className="relative scroll-anim">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/2 p-3">
                      {/* blobs */}
                      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
                      <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

                      {/* particles */}
                      <div className="absolute inset-0">
                        {[...Array(24)].map((_, i) => (
                          <span
                            key={i}
                            className="absolute h-1.5 w-1.5 rounded-full bg-sky-300/60 blur-[0.5px] animate-[particle_6s_linear_infinite]"
                            style={{
                              left: `${(i * 41) % 100}%`,
                              top: `${(i * 57) % 100}%`,
                              animationDelay: `${i * 120}ms`,
                              opacity: 0.35 + (i % 6) * 0.08,
                              transform: `scale(${0.6 + (i % 5) * 0.15})`,
                            }}
                          />
                        ))}
                      </div>

                      {/* rings */}
                      <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full border border-sky-400/25 animate-ping" />
                      <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full border border-sky-400/30" />

                      <div className="relative">
                        <Lottie
                          animationData={heroAnim}
                          loop
                          autoplay
                          className="h-75 w-full md:h-90 "
                        />
                      </div>
                    </div>

                    {/* floating chips */}
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[
                        ["SEO", "42%"],
                        ["Ads", "31%"],
                        ["Social", "19%"],
                      ].map(([k, v], idx) => (
                        <div
                          key={k}
                          className="rounded-2xl border border-white/10 bg-white/2 p-3 text-center animate-[float_3.2s_ease-in-out_infinite]"
                          style={{ animationDelay: `${idx * 180}ms` }}
                        >
                          <p className="text-xs text-white/55">{k}</p>
                          <p className="mt-1 text-sm font-semibold text-white/85">{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* ---------------- WHO WE WORK WITH ---------------- */}
            <section className="mt-12 md:mt-16 scroll-anim">
              <div className="mb-10 text-center scroll-anim">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                  <Rocket className="h-4 w-4" />
                  Our Clients
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Who We Work With
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm md:text-base bg-linear-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Built for teams at every stage — from early ideas to scalable brands.
                </p>

                <div className="mx-auto mt-5 h-px w-32 bg-linear-to-r from-transparent via-sky-400/40 to-transparent" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Startups", Icon: Rocket },
                  { label: "Local Businesses", Icon: Store },
                  { label: "E-commerce Brands", Icon: ShoppingCart },
                  { label: "Personal Brands", Icon: User },
                ].map(({ label, Icon }, idx) => (
                  <Card
                    key={label}
                    className="p-5 scroll-anim"
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.18)]">
                        <Icon className="h-6 w-6 text-sky-300" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/90">{label}</p>
                        <p className="mt-1 text-xs text-white/50">Strategy + execution</p>
                      </div>
                    </div>

                    <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                    <p className="mt-4 text-xs leading-relaxed text-white/55">
                      We tailor channel mix, offers, and messaging to match your stage and goals.
                    </p>
                  </Card>
                ))}
              </div>
            </section>

            {/* ---------------- PROBLEMS + OUR FIX ---------------- */}
            <section className="mt-12 md:mt-14 scroll-anim">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-6 scroll-anim">
                  <h3 className="text-lg font-semibold text-white/90">Problems We Fix</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Getting traffic but no leads",
                      "Ads spend increasing, sales aren’t",
                      "Social media posts aren’t bringing in new business",
                    ].map((t) => (
                      <li key={t} className="flex gap-3 text-sm text-white/65">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-300" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 scroll-anim">
                  <h3 className="text-lg font-semibold text-white/90">Our Fix</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Conversion-focused SEO",
                      "ROI-driven ad funnels",
                      "Content + ads growth system",
                    ].map((t) => (
                      <li key={t} className="flex gap-3 text-sm text-white/65">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-300" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </section>

            {/* ---------------- WHAT YOU'LL GET ---------------- */}
            <section className="mt-12 md:mt-16 scroll-anim">
              <div className="mb-10 text-center scroll-anim">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                  <Target className="h-4 w-4" />
                  Outcomes
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  What You’ll Get
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm md:text-base bg-linear-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Simple, measurable outcomes that directly impact your revenue.
                </p>

                <div className="mx-auto mt-5 h-px w-32 bg-linear-to-r from-transparent via-sky-400/40 to-transparent" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    label: "More Qualified Leads",
                    Icon: Target,
                    desc: "Attract visitors who are ready to buy, not just browse.",
                  },
                  {
                    label: "Lower Cost per Conversion",
                    Icon: DollarSign,
                    desc: "Optimized funnels that reduce wasted ad spend.",
                  },
                  {
                    label: "Consistent Monthly Growth",
                    Icon: TrendingUp,
                    desc: "Predictable performance improvements month over month.",
                  },
                  {
                    label: "Clear Reports & Insights",
                    Icon: FileText,
                    desc: "Transparent dashboards with KPIs you can actually understand.",
                  },
                ].map(({ label, Icon, desc }, idx) => (
                  <Card
                    key={label}
                    className="p-5 scroll-anim"
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 shadow-[0_0_30px_rgba(56,189,248,0.18)]">
                        <Icon className="h-6 w-6 text-sky-300" />
                      </div>
                      <p className="text-sm font-semibold text-white/90">{label}</p>
                    </div>

                    <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                    <p className="mt-4 text-xs leading-relaxed text-white/55">{desc}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* ---------------- SELECTED WORK ---------------- */}
            <section className="mt-12 md:mt-16 scroll-anim">
              <div className="mb-10 text-center scroll-anim">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                  <Sparkles className="h-4 w-4" />
                  Case Studies
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Selected Work
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm md:text-base bg-linear-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Tooling and playbooks we use to run, measure &amp; scale growth.
                </p>

                <div className="mx-auto mt-5 h-px w-32 bg-linear-to-r from-transparent via-sky-400/40 to-transparent" />
              </div>

              <Card className="p-6 scroll-anim">
                {/* Tools row */}
                <div className="flex flex-wrap items-center gap-3">
                  {["Google Ads", "Meta", "GA4", "Search Console", "Ahrefs", "SEMrush"].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition hover:bg-sky-500/20 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
                    >
                      {x}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_1.9fr]">
                  <Card className="p-5 scroll-anim">
                    <p className="text-xs font-semibold text-sky-200">E-commerce Case Study</p>
                    <p className="mt-2 text-2xl font-semibold text-white/90">+3.5x Revenue</p>
                    <p className="mt-2 text-sm text-white/60">
                      SEO + Paid Search scaling with CRO improvements.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/55">
                      <span className="rounded-lg border border-white/10 bg-white/2 px-3 py-1.5">
                        60 days
                      </span>
                      <span className="rounded-lg border border-white/10 bg-white/2 px-3 py-1.5">
                        1 brand
                      </span>
                      <span className="rounded-lg border border-white/10 bg-white/2 px-3 py-1.5">
                        Full-funnel
                      </span>
                    </div>

                    <button className="mt-5 w-full rounded-xl border border-sky-400/20 bg-sky-500/10 px-4 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/15">
                      View Case Study
                    </button>
                  </Card>

                  <div className="grid gap-3">
                    <div className="grid gap-3 md:grid-cols-4">
                      {[
                        ["1", "Audit & Research"],
                        ["2", "Strategy Blueprint"],
                        ["3", "Launch & Test"],
                        ["4", "Optimize & Scale"],
                      ].map(([n, t], idx) => (
                        <Card
                          key={t}
                          className="p-4 scroll-anim"
                          style={{ transitionDelay: `${idx * 70}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 text-sm font-bold text-sky-200">
                              {n}
                            </div>
                            <p className="text-sm font-semibold text-white/85">{t}</p>
                          </div>
                          <p className="mt-3 text-xs text-white/55">
                            Clear actions, fast iteration, and measurable results.
                          </p>
                        </Card>
                      ))}
                    </div>

                    <Card className="p-5 scroll-anim">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white/90">Our Growth Process</p>
                          <p className="mt-1 text-sm text-white/55">
                            Flexible pricing based on your goals, budget &amp; growth stage.
                          </p>
                        </div>

                        <PrimaryButton>Request Proposal</PrimaryButton>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        </main>

        {/* Existing keyframes */}
        <style>{`
          @keyframes blob {
            0%   { transform: translate(0px, 0px) scale(1); }
            33%  { transform: translate(30px, -40px) scale(1.08); }
            66%  { transform: translate(-20px, 30px) scale(0.96); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes particle {
            0%   { transform: translate3d(0,0,0) scale(1); opacity: 0.25; }
            50%  { transform: translate3d(18px,-24px,0) scale(1.2); opacity: 0.75; }
            100% { transform: translate3d(0,0,0) scale(1); opacity: 0.25; }
          }
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>

        {/* ✅ Scroll reveal CSS */}
        <style jsx global>{`
          .scroll-anim {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
            transition:
              opacity 600ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
            transition-delay: var(--d, 0ms);
            will-change: opacity, transform;
            backface-visibility: hidden;
          }

          .scroll-anim.is-visible {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }

          @media (prefers-reduced-motion: reduce) {
            .scroll-anim,
            .scroll-anim.is-visible {
              transition: none !important;
              transform: none !important;
              opacity: 1 !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
