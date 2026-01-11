"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does BD Stack Solutions offer?",
    answer:
      "We provide cutting-edge software solutions tailored to your business needs. From web applications to mobile apps, our team ensures high performance, scalability, and reliability.",
  },
  {
    question: "How can I request a demo?",
    answer:
      "Requesting a demo is simple! Click the 'Schedule a Call' button at the top right, or reach out directly to our sales team via email. We'll guide you through a personalized walkthrough.",
  },
  {
    question: "What is your client retention rate?",
    answer:
      "Our client retention rate is 95%, a testament to our dedication, innovation, and long-term partnerships. We prioritize client satisfaction above all.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Absolutely! We offer continuous support and maintenance to ensure your systems operate smoothly and efficiently long after deployment.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 px-5 md:px-20 overflow-hidden text-white">
      {/* ================= Animated Background ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slower"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float-random"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes pulse-slow {0%,100% {opacity:0.5; transform:scale(1);} 50% {opacity:0.8; transform:scale(1.05);}}
        @keyframes pulse-slower {0%,100% {opacity:0.3; transform:scale(1);} 50% {opacity:0.6; transform:scale(1.1);}}
        @keyframes float-random {0%,100% {transform:translateY(0) translateX(0); opacity:0;} 25% {opacity:0.5;} 50% {transform:translateY(-100px) translateX(50px); opacity:1;} 75% {opacity:0.5;} 100% {transform:translateY(-200px) translateX(0); opacity:0;}}
        @keyframes gradient {0%,100% {background-position:0% 50%;} 50% {background-position:100% 50%;}}
        @keyframes fade-in {from {opacity:0; transform:scale(0.9);} to {opacity:1; transform:scale(1);}}

        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
        .animate-float-random { animation: float-random linear infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .faq-question {
          background-clip: text;
          text-fill-color: transparent;
          color: transparent;
          background-image: linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7);
          background-size: 200% 200%;
          transition: background-position 0.5s, transform 0.3s;
        }
        .faq-question:hover {
          background-position: 100% 50%;
          transform: translateX(5px) scale(1.02);
        }

        .faq-item {
          transition: background-color 0.4s, transform 0.3s;
        }
        .faq-item.active, .faq-item:hover {
          background-color: rgba(6, 182, 212, 0.15);
          transform: scale(1.02);
        }
      `}</style>

      {/* ================= FAQ Content ================= */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
      <motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex flex-col items-center mb-12"
>
  {/* Title with Icon, single line */}
  <h2 className="flex items-center text-4xl md:text-5xl font-extrabold text-blue-400 gap-3 whitespace-nowrap">
    <svg
      className="w-10 h-10 text-cyan-400 animate-bounce"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
    Frequently Asked Questions
  </h2>

  {/* Gradient Underline */}
  <div className="mt-2 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
</motion.div>


        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`faq-item bg-white/10 backdrop-blur-md rounded-xl p-6 cursor-pointer`}
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold faq-question">
                {faq.question}
              </h3>
              <span className="text-blue-400">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {/* Answer with smooth animation */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mt-4 text-gray-400 text-lg leading-relaxed max-w-xl"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
