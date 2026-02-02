"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../../../public/Shopping.json";
const Ecommerce = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { id: 1, name: "Premium Laptop", price: "$1299", category: "Electronics", span: "md:col-span-2 md:row-span-2", img: "https://i.ibb.co/Ng8VFx40/view-3d-laptop-device-with-screen-keyboard.jpg" },
    { id: 2, name: "Wireless Headphones", price: "$199", category: "Audio", span: "col-span-1", img: "https://i.ibb.co/0pfDcrst/headphones-displayed-against-dark-background.jpg" },
    { id: 3, name: "Smart Watch", price: "$299", category: "Wearable", span: "col-span-1", img: "https://i.ibb.co/HT2PLtV9/rendering-smart-home-device.jpg" },
  ];

  const features = [
    { icon: Zap, title: "Fast Delivery", desc: "Get your products delivered within 24 hours." },
    { icon: ShieldCheck, title: "Secure Payment", desc: "100% safe & encrypted transactions." },
    { icon: Star, title: "Premium Quality", desc: "Handpicked products from trusted brands." },
  ];

  const testimonials = [
    { name: "Alice Johnson", text: "Amazing service and fast delivery. Highly recommend!" },
    { name: "Mark Wilson", text: "Quality products at great prices. Loved it!" },
    { name: "Mark Wilson", text: "Quality products at great prices. Loved it!" },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-sky-500/30">

      {/* ===== Custom Full Background ===== */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0b1a3a] via-[#081226] to-[#040814]" />

        {/* Animated Blobs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-125 h-125 bg-sky-500/20 rounded-full top-[-10%] left-[-10%] blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-150 h-150 bg-purple-500/10 rounded-full bottom-[-15%] right-[-15%] blur-[180px]"
        />

        {/* Stars / Particle Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
      </div>

    

     {/* ===== Hero Section ===== */}
<section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
  
  {/* ===== Left Text Content ===== */}
  <div className="flex-1 text-left">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-sky-400 mb-8"
    >
      <Zap size={14} fill="currentColor" />
      <span>Summer Sale: Up to 50% Off</span>
    </motion.div>

    <motion.h2 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.1 }} 
      className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6"
    >
      FUTURE <br /> 
      <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-600">
        COMMERCE
      </span>
    </motion.h2>

    <motion.p 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.2 }} 
      className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed"
    >
      Experience the next generation of shopping. Clean, fast, and designed for the modern era.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.3 }} 
      className="flex flex-wrap gap-4"
    >
      <button className="group flex items-center gap-2 bg-sky-500 px-6 py-3 rounded-2xl font-bold transition-all hover:bg-sky-600 hover:scale-105 active:scale-95">
  Shop Now 
  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
</button>

      <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold backdrop-blur-sm hover:bg-white/10 transition">
        View Catalog
      </button>
    </motion.div>
  </div>

  {/* ===== Right Lottie Animation ===== */}
  <motion.div 
    className="flex-1 w-full md:w-auto"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <Player
      autoplay
      loop
      src={heroAnimation}
      className="w-full md:max-w-lg"
    />
  </motion.div>

</section>


      {/* ===== Features Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="bg-white/5 p-8 rounded-2xl text-center hover:scale-105 transition">
              <f.icon size={36} className="text-sky-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Bento Grid Products ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Editor Choice</h2>
            <p className="text-gray-500">Handpicked premium products for you.</p>
          </div>
          <button className="text-sky-400 font-medium hover:underline flex items-center gap-1">
            View all <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {products.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -10 }} className={`${p.span} relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5`}>
              <img src={p.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={p.name} />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-[10px] uppercase tracking-widest text-sky-400 font-bold mb-2 block">{p.category}</span>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                    <p className="text-gray-400 font-medium">{p.price}</p>
                  </div>
                  <button className="bg-white text-black p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    {/* ===== Testimonials ===== */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {testimonials.map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * i }}
        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden hover:scale-105 transition cursor-pointer"
      >
        {/* Decorative blur circle */}
        <div className="absolute -top-2.5 -left-2.5 w-16 h-16 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Testimonial content */}
        <p className="text-gray-300 italic mb-6">"{t.text}"</p>

        {/* User info + icon */}
        <div className="flex items-center gap-3">
          <Star size={20} className="text-yellow-400" />
          <h4 className="text-white font-bold">{t.name}</h4>
        </div>
      </motion.div>
    ))}
  </div>
</section>




      {/* ===== Newsletter ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-400 mb-8">Subscribe to get the latest deals and product launches.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <input type="email" placeholder="Enter your email" className="px-6 py-3 rounded-2xl w-72 bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <button className="bg-linear-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-2xl font-bold text-black hover:shadow-[0_0_40px_rgba(59,130,246,0.45)] transition">Subscribe</button>
        </div>
      </section>

     
    </div>
  );
};

export default Ecommerce;