"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const tabs = ["All", "Custom", "WordPress", "AI Agent", "App"]

const projects = [
  {
    title: "Programming Fighter",
    category: "Custom",
    image: "https://i.ibb.co.com/twxNxLS7/img1.jpg",
    desc: "A sci-fi coding battle game developed in JavaScript & WebGL.",
    bage: "custom",
  },
  {
    title: "Real Estate WordPress",
    category: "WordPress",
    image: "https://i.ibb.co.com/k2KZ0ZWC/img2.jpg",
    desc: "A real estate WordPress website built for property listings.",
    bage: "wordpress",
  },
  {
    title: "WordPress Website",
    category: "WordPress",
    image: "https://i.ibb.co.com/WWJH1hNk/img3.jpg",
    desc: "A sleek and modern WordPress site for a creative portfolio.",
    bage: "wordpress",
  },
]

export default function OurProjects() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section className="relative w-full min-h-screen bg-[#050B18] overflow-hidden">
      {/* ================= FULL GLOW BACKGROUND ================= */}
      <div className="absolute -top-40 left-1/4 w-150 h-150 bg-cyan-500/20 blur-[180px]" />
      <div className="absolute -bottom-40 right-1/4 w-150 h-150 bg-purple-500/20 blur-[180px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Our Projects
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base"
        >
          Explore a curated showcase of custom websites, WordPress sites,
          AI projects, and mobile applications.
        </motion.p>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-3 flex-wrap mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all
                ${
                  active === tab
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 md:p-6 shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-40 md:h-44 rounded-xl overflow-hidden mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition z-10" />
              </div>

              {/* TITLE + BADGE */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <span className="text-xs bg-sky-900 text-cyan-400 px-2 py-0.5 rounded-full">
                  {item.bage}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {item.desc}
              </p>

              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:opacity-90 transition">
                Preview
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
