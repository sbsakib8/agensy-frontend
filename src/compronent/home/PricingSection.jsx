"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [currency, setCurrency] = useState("USD");
  const [billing, setBilling] = useState("Ai Agent");

  return (
    <section className="relative min-h-screen bg-[#070b14] text-white overflow-hidden">

      {/* ================= STRONG SQUARE GRID BACKGROUND ================= */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* ================= SOFT GLOW FILTERS ================= */}
      <div className="pointer-events-none absolute inset-0 z-1">
        <div className="absolute -left-48 top-1/4 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[160px] mix-blend-screen" />
        <div className="absolute -right-48 top-1/3 w-[520px] h-[520px] bg-purple-500/10 rounded-full blur-[160px] mix-blend-screen" />
        <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-blue-500/10 rounded-full blur-[180px] mix-blend-screen" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple <span className="text-cyan-400">Pricing</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Flexible plans for startups, growing teams, and enterprises. Choose a billing cycle and currency that works best for you.
          </p>

          {/* ===== Currency Toggle ===== */}
          <div className="flex justify-center mt-8">
            <div className="flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
              {["USD", "BDT"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition
                    ${currency === c ? "bg-cyan-500 text-black" : "text-gray-300 hover:text-white"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* ===== Billing Toggle ===== */}
          <div className="flex justify-center mt-6">
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
              {["Ai Agent", "App Development", "MERN Stack", "PERN Stack", "WordPress"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  className={`px-6 py-2 rounded-full text-sm transition
                    ${billing === b ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===== PRICING CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Startup"
            color="text-pink-400"
            price="$3,000"
            subtitle="Perfect for small teams"
            features={[
              "1 Senior Developer (Part Time)",
              "1 Senior Designer (Part Time)",
              "Shared Project Manager",
              "80 Development Hours / Month",
              "20 Design Hours / Month",
              "Basic Support (Email + Slack)",
            ]}
          />

          <PricingCard
            title="Growth"
            color="text-orange-400"
            price="$5,000"
            subtitle="For growing companies"
            highlight
            features={[
              "1 Senior Developer (Full Time)",
              "1 Senior Designer (Part Time)",
              "Dedicated Project Manager",
              "140 Development Hours / Month",
              "30 Design Hours / Month",
              "Priority Support + Weekly Calls",
            ]}
          />

          <PricingCard
            title="Enterprise"
            color="text-blue-400"
            price="Custom"
            subtitle="Custom solutions for large teams"
            features={[
              "Custom Development Team",
              "Custom Design Team",
              "Senior Project Manager",
              "Unlimited Hours",
              "24/7 Priority Support",
              "Custom Integrations & Solutions",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ================= PRICING CARD COMPONENT ================= */
function PricingCard({ title, subtitle, price, features, color, highlight }) {
  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-8 backdrop-blur-md shadow-xl
        ${highlight ? "ring-1 ring-cyan-400/40" : ""}`}
    >
      <h3 className={`text-2xl font-bold ${color}`}>{title}</h3>
      <p className="text-gray-400 mt-1">{subtitle}</p>

      <div className="mt-6">
        <span className="text-4xl font-extrabold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400 text-sm"> / month</span>}
      </div>

      <ul className="mt-8 space-y-3">
        {features.map((item, i) => (
          <li key={i} className="flex gap-3 text-gray-300">
            <Check className="w-5 h-5 text-green-400 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full rounded-xl bg-white/10 hover:bg-white/20 transition py-3 font-medium">
        Contact To Get Started
      </button>
    </div>
  );
}
