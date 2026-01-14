"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const testimonials = [
  { id: 1, name: "রাশেদ মাহমুদ", image: "https://i.ibb.co/bgycfYMH/img2.jpg", text: "এই কোম্পানির সার্ভিস আমাদের ব্যবসার গ্রোথে বড় ভূমিকা রেখেছে।", rating: 5 },
  { id: 2, name: "সাদিয়া ইসলাম", image: "https://i.ibb.co/v4FyWfzd/img1.jpg", text: "ডিজাইন কোয়ালিটি এবং সাপোর্ট টিম দুটোই খুবই প্রফেশনাল ছিল।", rating: 5 },
  { id: 3, name: "মেহেদী হাসান", image: "https://i.ibb.co/KjhYb4Wy/img3.jpg", text: "সময়মতো কাজ ডেলিভারি পেয়েছি এবং কোড কোয়ালিটি ছিল অসাধারণ।", rating: 4 },
  { id: 4, name: "নুসরাত জাহান", image: "https://i.ibb.co/4PpJwzP/user1.jpg", text: "আমাদের ওয়েবসাইট এখন আগের চেয়ে অনেক দ্রুত এবং ইউজার ফ্রেন্ডলি।", rating: 5 },
  { id: 5, name: "আরিফুল ইসলাম", image: "https://i.ibb.co/G7cYwN9/user2.jpg", text: "প্রতিটি ধাপে তারা আমাদের সাথে পরিষ্কারভাবে কমিউনিকেট করেছে।", rating: 4 },
  { id: 6, name: "ফারহানা রহমান", image: "https://i.ibb.co/7QXcZ9d/user3.jpg", text: "UI/UX ডিজাইন আমাদের ক্লায়েন্টদের কাছ থেকে দারুণ রেসপন্স পেয়েছে।", rating: 5 },
]

// Generate stable particles outside component to avoid Math.random() in render
const generateParticles = () => {
  return [...Array(15)].map((_, i) => ({
    top: (i * 17 + 23) % 100,
    left: (i * 23 + 17) % 100,
    delay: (i * 0.7) % 5,
    duration: 15 + (i * 3) % 15
  }));
};

const particles = generateParticles();

export default function Testimonial() {
  const total = testimonials.length
  const [active, setActive] = useState(0)
  const [avatarStart, setAvatarStart] = useState(0)

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
        <div className="testimonial-glow-orb-1"></div>
        <div className="testimonial-glow-orb-2"></div>
        <div className="testimonial-grid-pattern"></div>
        {particles.map((particle, i) => (
          <div
            key={i}
            className="testimonial-particle"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        /* Smooth Glow Orbs Animation */
        .testimonial-glow-orb-1 {
          position: absolute;
          top: 5rem;
          left: 2.5rem;
          width: 18rem;
          height: 18rem;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: testimonial-pulse-slow 8s ease-in-out infinite;
        }

        .testimonial-glow-orb-2 {
          position: absolute;
          bottom: 5rem;
          right: 2.5rem;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: testimonial-pulse-slower 12s ease-in-out infinite;
        }

        .testimonial-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: radial-gradient(currentColor 0.5px, transparent 0.5px);
          background-size: 20px 20px;
        }

        .testimonial-particle {
          position: absolute;
          width: 0.5rem;
          height: 0.5rem;
          background: rgba(34, 211, 238, 0.3);
          border-radius: 50%;
          animation: testimonial-float-particle linear infinite;
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.4);
        }

        @keyframes testimonial-pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes testimonial-pulse-slower {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes testimonial-float-particle {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-60px) translateX(20px) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg);
            opacity: 0.3;
          }
        }

        /* Smooth Avatar Transitions */
        .testimonial-avatar-wrapper {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-avatar-wrapper:hover {
          transform: scale(1.05);
        }

        /* Smooth Content Card Animation */
        .testimonial-content-card {
          backdrop-filter: blur(20px);
          transition: all 0.3s ease-out;
        }

        .testimonial-content-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 tracking-wide uppercase">Client Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-6 md:gap-10 items-center relative">
          {/* LEFT AVATARS */}
          <div className="flex flex-col md:flex-col items-center gap-3 relative">
            {/* Desktop Up Arrow */}
            <button 
              onClick={() => setAvatarStart((prev) => (prev - 1 + total) % total)} 
              className="text-gray-400 hover:text-cyan-400 p-2 hidden md:block transition-colors duration-200"
              aria-label="Previous testimonials"
            >
              <FaChevronUp />
            </button>

            {/* Avatars with Mobile Arrows Outside */}
            <div className="flex items-center gap-2 md:flex-col md:gap-3 justify-center relative">
              {/* Mobile Left Arrow */}
              <button
                onClick={() => setAvatarStart((prev) => (prev - 1 + total) % total)}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full md:hidden hover:bg-white/20 text-white z-20 transition-all duration-200"
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>

              <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible px-1 scrollbar-hide">
                {visibleAvatars.map((item, idx) => {
                  const index = (avatarStart + idx) % total
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setActive(index)}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      animate={active === index ? { scale: 1.12, y: -6 } : { scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={`testimonial-avatar-wrapper flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 relative
                        ${active === index 
                          ? "border-cyan-400 ring-4 ring-cyan-400/30 shadow-lg shadow-cyan-400/50" 
                          : "border-gray-700/50 opacity-60 hover:opacity-100 hover:border-gray-600"}`}
                    >
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        sizes="80px"
                        className="object-cover" 
                      />
                    </motion.button>
                  )
                })}
              </div>

              {/* Mobile Right Arrow */}
              <button
                onClick={() => setAvatarStart((prev) => (prev + 1) % total)}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full md:hidden hover:bg-white/20 text-white z-20 transition-all duration-200"
                aria-label="Next"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Desktop Down Arrow */}
            <button 
              onClick={() => setAvatarStart((prev) => (prev + 1) % total)} 
              className="text-gray-400 hover:text-cyan-400 p-2 hidden md:block transition-colors duration-200"
              aria-label="Next testimonials"
            >
              <FaChevronDown />
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) { 
                  setActive((active + 1) % total)
                  setAvatarStart((avatarStart + 1) % total) 
                }
                if (info.offset.x > 100) { 
                  setActive((active - 1 + total) % total)
                  setAvatarStart((avatarStart - 1 + total) % total) 
                }
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.4, 0, 0.2, 1]
              }}
              className="testimonial-content-card cursor-grab active:cursor-grabbing bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-cyan-400/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v8h8v-8H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light italic">
                  {activeItem.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 border-cyan-400/30">
                  <Image 
                    src={activeItem.image} 
                    alt={activeItem.name}
                    fill
                    sizes="64px"
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{activeItem.name}</h4>
                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {[...Array(activeItem.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Index indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === idx 
                  ? 'w-8 bg-cyan-400' 
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
