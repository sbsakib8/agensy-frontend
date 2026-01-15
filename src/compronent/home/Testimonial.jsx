"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaChevronUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    name: "রাশেদ মাহমুদ",
    image: "https://i.ibb.co/bgycfYMH/img2.jpg",
    text: "এই কোম্পানির সার্ভিস আমাদের ব্যবসার গ্রোথে বড় ভূমিকা রেখেছে।",
    rating: 5,
  },
  {
    id: 2,
    name: "সাদিয়া ইসলাম",
    image: "https://i.ibb.co/v4FyWfzd/img1.jpg",
    text: "ডিজাইন কোয়ালিটি এবং সাপোর্ট টিম দুটোই খুবই প্রফেশনাল ছিল।",
    rating: 5,
  },
  {
    id: 3,
    name: "মেহেদী হাসান",
    image: "https://i.ibb.co/KjhYb4Wy/img3.jpg",
    text: "সময়মতো কাজ ডেলিভারি পেয়েছি এবং কোড কোয়ালিটি ছিল অসাধারণ।",
    rating: 4,
  },
  {
    id: 4,
    name: "নুসরাত জাহান",
    image: "https://i.ibb.co.com/rRvk2M44/girls1.jpg",
    text: "আমাদের ওয়েবসাইট এখন আগের চেয়ে অনেক দ্রুত এবং ইউজার ফ্রেন্ডলি।",
    rating: 5,
  },
  {
    id: 5,
    name: "আরিফুল ইসলাম",
    image: "https://i.ibb.co.com/KcWDdLk7/boys.jpg",
    text: "প্রতিটি ধাপে তারা আমাদের সাথে পরিষ্কারভাবে কমিউনিকেট করেছে।",
    rating: 4,
  },
  {
    id: 6,
    name: "ফারহানা রহমান",
    image: "https://i.ibb.co.com/ZzQtFXD1/girls.jpg",
    text: "UI/UX ডিজাইন আমাদের ক্লায়েন্টদের কাছ থেকে দারুণ রেসপন্স পেয়েছে।",
    rating: 5,
  },
]

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

  const activeItem = useMemo(
    () => testimonials[active] ?? testimonials[0],
    [active]
  )

  const visibleAvatars = testimonials.slice(avatarStart, avatarStart + 3)
  if (visibleAvatars.length < 3) {
    visibleAvatars.push(
      ...testimonials.slice(0, 3 - visibleAvatars.length)
    )
  }

  return (
    <section className="relative w-full py-16 md:py-24 px-4 bg-slate-950 text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400">Client Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-8 items-center">
          {/* LEFT AVATARS */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() =>
                setAvatarStart((p) => (p - 1 + total) % total)
              }
              className="hidden md:block text-gray-400 hover:text-white"
            >
              <FaChevronUp />
            </button>

            <div className="flex md:flex-col items-center gap-3">
              <button
                onClick={() =>
                  setAvatarStart((p) => (p - 1 + total) % total)
                }
                className="md:hidden p-2 rounded-full bg-black/30"
              >
                <FaChevronLeft />
              </button>

              {visibleAvatars.map((item, idx) => {
                const index = (avatarStart + idx) % total
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActive(index)}
                    whileHover={{ scale: 1.1 }}
                    animate={
                      active === index
                        ? { scale: 1.15 }
                        : { scale: 1 }
                    }
                    className={`relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl overflow-hidden border
                      ${
                        active === index
                          ? "border-cyan-400 ring-2 ring-cyan-400/40"
                          : "border-gray-700 opacity-70 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      unoptimized
                      className="object-cover"
                    />
                  </motion.button>
                )
              })}

              <button
                onClick={() =>
                  setAvatarStart((p) => (p + 1) % total)
                }
                className="md:hidden p-2 rounded-full bg-black/30"
              >
                <FaChevronRight />
              </button>
            </div>

            <button
              onClick={() =>
                setAvatarStart((p) => (p + 1) % total)
              }
              className="hidden md:block text-gray-400 hover:text-white"
            >
              <FaChevronDown />
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <p className="text-gray-200 mb-6 text-base md:text-lg">
                “{activeItem.text}”
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border border-gray-700">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.name}
                    fill
                    sizes="56px"
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    {activeItem.name}
                  </h4>
                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {[...Array(activeItem.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          {active + 1} / {total}
        </p>
      </div>
    </section>
  )
}
