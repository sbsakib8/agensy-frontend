"use client"

import { useState, useEffect, useMemo } from "react"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const testimonials = [
  { id: 1, name: "রাশেদ মাহমুদ", image: "https://i.ibb.co/bgycfYMH/img2.jpg", text: "এই কোম্পানির সার্ভিস আমাদের ব্যবসার গ্রোথে বড় ভূমিকা রেখেছে।", rating: 5 },
  { id: 2, name: "সাদিয়া ইসলাম", image: "https://i.ibb.co/v4FyWfzd/img1.jpg", text: "ডিজাইন কোয়ালিটি এবং সাপোর্ট টিম দুটোই খুবই প্রফেশনাল ছিল।", rating: 5 },
  { id: 3, name: "মেহেদী হাসান", image: "https://i.ibb.co/KjhYb4Wy/img3.jpg", text: "সময়মতো কাজ ডেলিভারি পেয়েছি এবং কোড কোয়ালিটি ছিল অসাধারণ।", rating: 4 },
  { id: 4, name: "নুসরাত জাহান", image: "https://i.ibb.co/4PpJwzP/user1.jpg", text: "আমাদের ওয়েবসাইট এখন আগের চেয়ে অনেক দ্রুত এবং ইউজার ফ্রেন্ডলি।", rating: 5 },
  { id: 5, name: "আরিফুল ইসলাম", image: "https://i.ibb.co/G7cYwN9/user2.jpg", text: "প্রতিটি ধাপে তারা আমাদের সাথে পরিষ্কারভাবে কমিউনিকেট করেছে।", rating: 4 },
  { id: 6, name: "ফারহানা রহমান", image: "https://i.ibb.co/7QXcZ9d/user3.jpg", text: "UI/UX ডিজাইন আমাদের ক্লায়েন্টদের কাছ থেকে দারুণ রেসপন্স পেয়েছে।", rating: 5 },
]

export default function Testimonial() {
  const total = testimonials.length
  const [active, setActive] = useState(0)
  const [avatarStart, setAvatarStart] = useState(0)

  // Generate stable random values for particles
  const particles = useMemo(() => {
    return [...Array(15)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20
    }));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % total)
      setAvatarStart((p) => (p + 1) % total)
    }, 4500)
    return () => clearInterval(timer)
  }, [total])

  const activeItem = useMemo(() => testimonials[active] ?? testimonials[0], [active])
  if (!activeItem) return null

  const visibleAvatars = testimonials.slice(avatarStart, avatarStart + 3)
  if (visibleAvatars.length < 3) {
    visibleAvatars.push(...testimonials.slice(0, 3 - visibleAvatars.length))
  }

  return (
    <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden bg-slate-950 text-white">
      
      {/* ================= Animated Background ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slower"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float-random"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes pulse-slow {0%,100%{opacity:.5;transform:scale(1);}50%{opacity:.8;transform:scale(1.05);}}
        @keyframes pulse-slower {0%,100%{opacity:.3;transform:scale(1);}50%{opacity:.6;transform:scale(1.1);}}
        @keyframes float-random {0%,100%{transform:translateY(0);}50%{transform:translateY(-50px);}25%,75%{opacity:0.5;}}
        .animate-pulse-slow {animation: pulse-slow 4s ease-in-out infinite;}
        .animate-pulse-slower {animation: pulse-slower 6s ease-in-out infinite;}
        .animate-float-random {animation: float-random linear infinite;}
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400">Client Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-6 md:gap-10 items-center relative">
          {/* LEFT AVATARS */}
          <div className="flex flex-col md:flex-col items-center gap-3 relative">
            {/* Desktop Up Arrow */}
            <button onClick={() => setAvatarStart((prev) => (prev - 1 + total) % total)} className="text-gray-400 hover:text-white p-1 hidden md:block">
              <FaChevronUp />
            </button>

            {/* Avatars with Mobile Arrows Outside */}
            <div className="flex items-center gap-2 md:flex-col md:gap-3 justify-center relative">
              {/* Mobile Left Arrow */}
              <button
                onClick={() => setAvatarStart((prev) => (prev - 1 + total) % total)}
                className="p-2 bg-black/30 rounded-full md:hidden hover:bg-black/50 text-white z-20"
              >
                <FaChevronLeft />
              </button>

              <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible px-1">
                {visibleAvatars.map((item, idx) => {
                  const index = (avatarStart + idx) % total
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setActive(index)}
                      whileHover={{ scale: 1.1 }}
                      animate={active === index ? { scale: 1.15, y: -4 } : { scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border
                        ${active === index ? "border-cyan-400 ring-2 ring-cyan-400/40" : "border-gray-700 opacity-70 hover:opacity-100"}`}
                    >
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </motion.button>
                  )
                })}
              </div>

              {/* Mobile Right Arrow */}
              <button
                onClick={() => setAvatarStart((prev) => (prev + 1) % total)}
                className="p-2 bg-black/30 rounded-full md:hidden hover:bg-black/50 text-white z-20"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Desktop Down Arrow */}
            <button onClick={() => setAvatarStart((prev) => (prev + 1) % total)} className="text-gray-400 hover:text-white p-1 hidden md:block">
              <FaChevronDown />
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) { setActive((active + 1) % total); setAvatarStart((avatarStart + 1) % total) }
                if (info.offset.x > 80) { setActive((active - 1 + total) % total); setAvatarStart((avatarStart - 1 + total) % total) }
              }}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="cursor-grab active:cursor-grabbing bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">“{activeItem.text}”</p>

              <div className="flex items-center gap-4">
                <img src={activeItem.image} alt={activeItem.name} className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover border border-gray-700" />
                <div>
                  <h4 className="text-white font-semibold">{activeItem.name}</h4>
                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {[...Array(activeItem.rating)].map((_, i) => (<Star key={i} size={14} fill="currentColor" />))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Index indicator */}
        <p className="text-center text-sm text-gray-400 mt-6">{active + 1} / {total}</p>
      </div>
    </section>
  )
}
