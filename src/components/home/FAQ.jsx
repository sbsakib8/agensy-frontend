"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does BD Stack Solutions offer?",
    answer:
      "We provide modern software solutions including web and mobile applications, focused on scalability, security, and performance.",
  },
  {
    question: "How can I request a demo?",
    answer:
      "Simply click the 'Schedule a Call' button or contact our sales team. We'll arrange a personalized demo for you.",
  },
  {
    question: "What is your client retention rate?",
    answer:
      "Our 95% client retention rate reflects our commitment to quality, trust, and long-term partnerships.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes! We offer ongoing maintenance, monitoring, and technical support after project delivery.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-60 h-60 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Everything you need to know about our services
          </p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className={`cursor-pointer rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg px-5 py-4 transition-all
              ${
                activeIndex === index
                  ? "bg-cyan-500/10 border-cyan-400/40"
                  : "hover:bg-white/10"
              }`}
            >
              {/* Question */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {faq.question}
                </h3>
                <span className="text-cyan-400 shrink-0">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
