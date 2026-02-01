"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const testimonials = [
  { 
    id: 1, 
    name: "রাশেদ মাহমুদ", 
    role: "CEO, TechCorp",
    image: "https://i.ibb.co.com/H998MXC/image.png", 
    text: "এই কোম্পানির সার্ভিস আমাদের ব্যবসার গ্রোথে বড় ভূমিকা রেখেছে। তাদের প্রফেশনাল অ্যাপ্রোচ এবং কোয়ালিটি সার্ভিস সত্যিই অভূতপূর্ব।", 
    rating: 5 
  },
  { 
    id: 2, 
    name: "সাদিয়া ইসলাম", 
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=45", 
    text: "ডিজাইন কোয়ালিটি এবং সাপোর্ট টিম দুটোই খুবই প্রফেশনাল ছিল। আমাদের ব্র্যান্ডের জন্য পারফেক্ট সলিউশন দিয়েছে।", 
    rating: 5 
  },
  { 
    id: 3, 
    name: "মেহেদী হাসান", 
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=33", 
    text: "সময়মতো কাজ ডেলিভারি পেয়েছি এবং কোড কোয়ালিটি ছিল অসাধারণ। তাদের টেকনিক্যাল এক্সপার্টিজ সত্যিই প্রশংসনীয়।", 
    rating: 4 
  },
  { 
    id: 4, 
    name: "নুসরাত জাহান", 
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?img=48", 
    text: "আমাদের ওয়েবসাইট এখন আগের চেয়ে অনেক দ্রুত এবং ইউজার ফ্রেন্ডলি। কাস্টমার এক্সপেরিয়েন্স অনেক উন্নত হয়েছে।", 
    rating: 5 
  },
  { 
    id: 5, 
    name: "আরিফুল ইসলাম", 
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=59", 
    text: "প্রতিটি ধাপে তারা আমাদের সাথে পরিষ্কারভাবে কমিউনিকেট করেছে। ট্রান্সপারেন্ট প্রসেস এবং এক্সিলেন্ট রেজাল্ট।", 
    rating: 4 
  },
  { 
    id: 6, 
    name: "ফারহানা রহমান", 
    role: "UX Designer",
    image: "https://i.pravatar.cc/150?img=47", 
    text: "UI/UX ডিজাইন আমাদের ক্লায়েন্টদের কাছ থেকে দারুণ রেসপন্স পেয়েছে। মডার্ন এবং ইনোভেটিভ ডিজাইন সলিউশন।", 
    rating: 5 
  },
]

// Generate stable floating elements for enhanced background animation
const generateFloatingElements = () => {
  return [...Array(20)].map((_, i) => ({
    top: (i * 13 + 19) % 100,
    left: (i * 17 + 23) % 100,
    delay: (i * 0.5) % 6,
    duration: 12 + (i * 2) % 18,
    size: 0.3 + (i % 3) * 0.2
  }));
};

const floatingElements = generateFloatingElements();

function Testimonial() {
  const total = testimonials.length
  const [active, setActive] = useState(0)
  const [avatarStart, setAvatarStart] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (!isAutoPlay) return
    
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + direction + total) % total
        setAvatarStart(next)
        return next
      })
    }, 5000)
    
    return () => clearInterval(timer)
  }, [total, direction, isAutoPlay])

  const handleNavigation = (newIndex) => {
    setDirection(newIndex > active ? 1 : -1)
    setActive(newIndex)
    setAvatarStart(newIndex)
    setIsAutoPlay(false)
    
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const activeItem = useMemo(() => testimonials[active] ?? testimonials[0], [active])
  if (!activeItem) return null

  const visibleAvatars = testimonials.slice(avatarStart, avatarStart + 3)
  if (visibleAvatars.length < 3) {
    visibleAvatars.push(...testimonials.slice(0, 3 - visibleAvatars.length))
  }

  return (
    <section 
      className="relative w-full py-20 md:py-28 px-4 overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      
      {/* ================= Enhanced Animated Background ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs with improved animation */}
        <div className="testimonial-glow-orb-1"></div>
        <div className="testimonial-glow-orb-2"></div>
        <div className="testimonial-glow-orb-3"></div>
        
        {/* Animated grid pattern */}
        <div className="testimonial-grid-pattern"></div>
        <div className="testimonial-mesh-gradient"></div>
        
        {/* Enhanced floating elements */}
        {floatingElements.map((element, i) => (
          <div
            key={i}
            className="testimonial-floating-element"
            style={{
              top: `${element.top}%`,
              left: `${element.left}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
              width: `${element.size}rem`,
              height: `${element.size}rem`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        /* Enhanced Background Animations */
        .testimonial-glow-orb-1 {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 20rem;
          height: 20rem;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: testimonial-pulse-breathe 10s ease-in-out infinite;
        }

        .testimonial-glow-orb-2 {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 28rem;
          height: 28rem;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: testimonial-pulse-breathe-delayed 14s ease-in-out infinite;
        }

        .testimonial-glow-orb-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 16rem;
          height: 16rem;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
          animation: testimonial-pulse-rotate 18s linear infinite;
          transform: translate(-50%, -50%);
        }

        .testimonial-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.4) 1px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.3) 1px, transparent 0);
          background-size: 40px 40px, 60px 60px;
          background-position: 0 0, 20px 20px;
          animation: testimonial-grid-move 20s linear infinite;
        }

        .testimonial-mesh-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.1) 100%);
          mix-blend-mode: multiply;
        }

        .testimonial-floating-element {
          position: absolute;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.3));
          border-radius: 50%;
          animation: testimonial-float-enhanced linear infinite;
          filter: blur(1px);
        }

        /* Enhanced Keyframe Animations */
        @keyframes testimonial-pulse-breathe {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1) rotate(0deg);
          }
          25% {
            opacity: 0.6;
            transform: scale(1.05) rotate(90deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1) rotate(180deg);
          }
          75% {
            opacity: 0.6;
            transform: scale(1.05) rotate(270deg);
          }
        }

        @keyframes testimonial-pulse-breathe-delayed {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) rotate(360deg);
          }
          33% {
            opacity: 0.5;
            transform: scale(1.08) rotate(240deg);
          }
          66% {
            opacity: 0.7;
            transform: scale(1.15) rotate(120deg);
          }
        }

        @keyframes testimonial-pulse-rotate {
          0% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
          }
          100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1) rotate(360deg);
          }
        }

        @keyframes testimonial-grid-move {
          0% {
            background-position: 0 0, 20px 20px;
          }
          100% {
            background-position: 40px 40px, 60px 60px;
          }
        }

        @keyframes testimonial-float-enhanced {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 0.2;
          }
          25% {
            opacity: 0.5;
            transform: translateY(-40px) translateX(15px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-80px) translateX(30px) rotate(180deg) scale(0.9);
            opacity: 0.7;
          }
          75% {
            opacity: 0.4;
            transform: translateY(-40px) translateX(15px) rotate(270deg) scale(1.05);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg) scale(1);
            opacity: 0.2;
          }
        }

        /* Smooth Component Transitions */
        .testimonial-avatar-wrapper {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .testimonial-avatar-wrapper::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(168, 85, 247, 0.5));
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .testimonial-avatar-wrapper:hover::before {
          opacity: 1;
        }

        .testimonial-content-card {
          backdrop-filter: blur(24px);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .testimonial-content-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .testimonial-content-card:hover::before {
          opacity: 1;
        }

        .testimonial-content-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 80px rgba(6, 182, 212, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        /* Enhanced Quote Animation */
        .testimonial-quote-icon {
          animation: testimonial-quote-pulse 3s ease-in-out infinite;
        }

        @keyframes testimonial-quote-pulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1) rotate(5deg);
            opacity: 0.5;
          }
        }

        /* Scrollbar Hide */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Loading Animation for Images */
        .testimonial-image-loading {
          background: linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%);
          background-size: 200% 100%;
          animation: testimonial-shimmer 2s infinite;
        }

        @keyframes testimonial-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Heading Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm text-cyan-400/80 tracking-widest uppercase font-medium mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Client Testimonials
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="text-white">Say About Us</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[6rem_1fr] gap-8 md:gap-12 items-center relative">
          {/* LEFT AVATARS - Enhanced Design */}
          <div className="flex flex-col lg:flex-col items-center gap-4 relative">
            {/* Desktop Navigation Buttons */}
            <motion.button 
              onClick={() => handleNavigation((avatarStart - 1 + total) % total)} 
              className="text-gray-400 hover:text-cyan-400 p-3 hidden lg:block transition-all duration-300 hover:bg-white/5 rounded-full backdrop-blur-sm border border-white/10 hover:border-cyan-400/30"
              aria-label="Previous testimonials"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronUp className="text-lg" />
            </motion.button>

            {/* Avatar Container with Mobile Navigation */}
            <div className="flex items-center gap-3 lg:flex-col lg:gap-4 justify-center relative">
              {/* Mobile Navigation - Left */}
              <motion.button
                onClick={() => handleNavigation((avatarStart - 1 + total) % total)}
                className="p-3 bg-white/5 backdrop-blur-sm rounded-full lg:hidden hover:bg-white/10 text-white border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="Previous"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronLeft className="text-lg" />
              </motion.button>

              <div className="flex gap-4 overflow-x-auto lg:flex-col lg:overflow-visible px-2 scrollbar-hide">
                {visibleAvatars.map((item, idx) => {
                  const index = (avatarStart + idx) % total
                  const isActive = active === index
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={
                        isActive 
                          ? { scale: 1.15, y: -8 } 
                          : { scale: 1, y: 0 }
                      }
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 25,
                        duration: 0.4 
                      }}
                      className={`testimonial-avatar-wrapper shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border-2 relative group
                        ${isActive 
                          ? "border-cyan-400 ring-4 ring-cyan-400/20 shadow-xl shadow-cyan-400/30" 
                          : "border-gray-600/40 opacity-70 hover:opacity-100 hover:border-gray-500/60"
                        }`}
                    >
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        sizes="96px"
                        className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                          isActive ? 'brightness-110' : 'brightness-90 group-hover:brightness-100'
                        }`}
                        priority={isActive}
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-linear-to-t from-cyan-400/20 to-transparent" />
                      )}
                    </motion.button>
                  )
                })}
              </div>

              {/* Mobile Navigation - Right */}
              <motion.button
                onClick={() => handleNavigation((avatarStart + 1) % total)}
                className="p-3 bg-white/5 backdrop-blur-sm rounded-full lg:hidden hover:bg-white/10 text-white border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="Next"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronRight className="text-lg" />
              </motion.button>
            </div>

            <motion.button 
              onClick={() => handleNavigation((avatarStart + 1) % total)} 
              className="text-gray-400 hover:text-cyan-400 p-3 hidden lg:block transition-all duration-300 hover:bg-white/5 rounded-full backdrop-blur-sm border border-white/10 hover:border-cyan-400/30"
              aria-label="Next testimonials"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronDown className="text-lg" />
            </motion.button>
          </div>

          {/* RIGHT CONTENT - Enhanced Design */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              onDragEnd={(e, info) => {
                const threshold = 150
                if (info.offset.x < -threshold) { 
                  handleNavigation((active + 1) % total)
                }
                if (info.offset.x > threshold) { 
                  handleNavigation((active - 1 + total) % total)
                }
              }}
              initial={{ 
                opacity: 0, 
                y: direction > 0 ? 50 : -50, 
                scale: 0.95,
                rotateX: direction > 0 ? 10 : -10
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0
              }}
              exit={{ 
                opacity: 0, 
                y: direction > 0 ? -50 : 50, 
                scale: 0.95,
                rotateX: direction > 0 ? -10 : 10
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.23, 1, 0.32, 1],
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
                y: { duration: 0.6 },
                rotateX: { duration: 0.5 }
              }}
              className="testimonial-content-card cursor-grab active:cursor-grabbing bg-white/3 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl group"
            >
              {/* Quote Icon */}
              <div className="mb-8">
                <Quote className="w-12 h-12 text-cyan-400/40 testimonial-quote-icon" />
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <p className="text-gray-100 text-lg md:text-xl lg:text-2xl leading-relaxed font-light tracking-wide">
                  {activeItem.text}
                </p>
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-lg">
                    <Image 
                      src={activeItem.image} 
                      alt={activeItem.name}
                      fill
                      sizes="80px"
                      className="object-cover" 
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-xl mb-1">{activeItem.name}</h4>
                  <p className="text-gray-400 text-sm font-medium">{activeItem.role}</p>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star 
                          size={16} 
                          fill={i < activeItem.rating ? "currentColor" : "none"}
                          className={`drop-shadow-sm transition-colors duration-200 ${
                            i < activeItem.rating ? 'text-yellow-400' : 'text-gray-600'
                          }`}
                        />
                      </motion.div>
                    ))}
                    <span className="text-gray-400 text-sm ml-2">({activeItem.rating}/5)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced Progress Indicator */}
        <motion.div 
          className="flex justify-center items-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleNavigation(idx)}
              className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                active === idx 
                  ? 'w-12 h-3 bg-linear-to-r from-cyan-400 to-purple-500' 
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
              whileHover={{ scale: active === idx ? 1.05 : 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {active === idx && (
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial;