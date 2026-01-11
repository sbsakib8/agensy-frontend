"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "রাশেদ মাহমুদ",
    image: "https://i.ibb.co/bgycfYMH/img2.jpg",
    text: "এই কোম্পানির সার্ভিস আমাদের ব্যবসার জন্য অসাধারণ ফলাফল এনেছে।",
    rating: 5,
  },
  {
    id: 2,
    name: "সাদিয়া ইসলাম",
    image: "https://i.ibb.co/v4FyWfzd/img1.jpg",
    text: "ডিজাইন এবং সাপোর্ট দুটোই খুব প্রফেশনাল ছিল।",
    rating: 5,
  },
  {
    id: 3,
    name: "মেহেদী হাসান",
    image: "https://i.ibb.co/KjhYb4Wy/img3.jpg",
    text: "সময়মতো ডেলিভারি এবং কোয়ালিটি দুর্দান্ত।",
    rating: 4,
  },
]

export default function Testimonial() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full min-h-screen py-20 px-4 overflow-hidden bg-slate-950">
      
      {/* ================= Animated Background (inline Tailwind + style) ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatRandom ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* ================= Keyframes for float (inline <style>) ================= */}
      <style>{`
        @keyframes pulse {0%,100%{opacity:.3;transform:scale(.95);}50%{opacity:.6;transform:scale(1.05);}}
        @keyframes floatRandom {0%,100%{transform:translateY(0);}50%{transform:translateY(-30px);}}
      `}</style>

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-400">Client Testimonials</p>
          <h2 className="text-4xl font-bold text-white mt-2">
            Our Valuable Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[8rem_1fr] gap-6">

          {/* LEFT IMAGES */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="flex md:flex-col justify-center gap-3"
          >
            {testimonials.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActive(index)}
                variants={{
                  hidden: { opacity: 0, scale: 0.7 },
                  show: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.12, y: -4 }}
                animate={active === index ? { scale: 1.15 } : { scale: 1 }}
                className={`w-24 h-24 rounded-2xl overflow-hidden border
                  ${active === index
                    ? "border-blue-500 ring-2 ring-blue-500/40"
                    : "border-gray-700 opacity-70 hover:opacity-100"}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </motion.div>

          {/* RIGHT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-5xl text-gray-600 mb-3">“</div>

              <p className="text-gray-200 mb-5 leading-relaxed">
                {testimonials[active].text}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  loading="lazy"
                  className="w-14 h-14 rounded-2xl object-cover border border-gray-700"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonials[active].name}
                  </h4>
                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
