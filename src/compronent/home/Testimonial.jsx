"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

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

const Testimonial = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-400">Client Testimonials</p>
          <h2 className="text-4xl font-bold text-white mt-2">
            Our Valuable Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[8rem_1fr] gap-4 items-start">

          {/* LEFT IMAGES (Small Buttons) */}
          <div className="flex md:flex-col justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActive(index)}
                className={`w-24 h-24 border rounded-2xl overflow-hidden transition-all duration-300
                  ${active === index
                    ? "border-blue-500 scale-105"
                    : "border-gray-700 opacity-70 hover:opacity-100"}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="mt-6 md:mt-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">

              <div className="text-5xl text-gray-600 mb-3">“</div>

              <p className="text-gray-200 mb-5 leading-relaxed transition-all duration-300">
                {testimonials[active].text}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-14 h-14 border border-gray-700 object-cover rounded-2xl"
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

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial
