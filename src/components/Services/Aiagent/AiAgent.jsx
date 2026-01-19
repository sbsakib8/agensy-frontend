"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaCogs,
  FaCloud,
  FaChartLine,
  FaShieldAlt,
  FaCheck,
  FaRocket,
  FaTachometerAlt,
  FaLightbulb,
  FaSync,
  FaArrowRight,
} from "react-icons/fa";

import animationData from "../../../../public/Assistant-Bot.json";

// ✅ SSR-safe Lottie Player
const LottiePlayer = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then(
      (mod) => mod.Player
    ),
  { ssr: false }
);

const AiAgent = () => {
  const features = [
    {
      icon: <FaCloud className="text-4xl mb-4 text-blue-400" />,
      title: "Workflow Automation (Zapier / n8n Style)",
      desc: "Build and deploy complex multi-step automation flows across CRM, marketing, support, and finance systems.",
    },
    {
      icon: <FaRobot className="text-4xl mb-4 text-blue-400" />,
      title: "Custom LLM Agents",
      desc: "Develop intelligent GPT-powered agents that interact with APIs, databases, and business rules autonomously.",
    },
    {
      icon: <FaCogs className="text-4xl mb-4 text-blue-400" />,
      title: "Support & Maintenance Bots",
      desc: "Automated monitoring, maintenance handling, and smart ticket triaging systems.",
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-blue-400" />,
      title: "Advanced AI Orchestration",
      desc: "Multi-agent systems that solve complex cross-functional business workflows.",
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-blue-400" />,
      title: "Integration & API Connectors",
      desc: "Secure, fault-tolerant connectors for internal and third-party systems.",
    },
  ];

  const pillars = [
    {
      icon: <FaRocket className="text-4xl text-blue-400 mb-4 mx-auto" />,
      title: "Strategy → Launch",
      desc: "Clear roadmaps aligned with business goals from discovery to MVP.",
    },
    {
      icon: <FaTachometerAlt className="text-4xl text-blue-400 mb-4 mx-auto" />,
      title: "Performance-First Design",
      desc: "Fast, accessible, scalable UI & system architecture.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-blue-400 mb-4 mx-auto" />,
      title: "Insight-Led Delivery",
      desc: "Data-driven decisions through analytics & feedback loops.",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 font-sans">

 <section className="relative max-w-7xl mx-auto px-6 py-32">
  {/* Background Gradients & Blurs */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 -z-10" />
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -z-10" />
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl -z-10" />
  <div className="absolute top-20 right-1/3 w-[700px] h-[300px] bg-pink-500/20 rounded-full blur-2xl -z-10" />

  <div className="flex flex-col-reverse md:flex-row items-center gap-12">
    {/* Text Content */}
    <div className="md:w-1/2">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI Agent & Workflow Development
        <span className="block text-blue-400 mt-2">
          Autonomous Business Logic
        </span>
      </motion.h1>

      <p className="text-gray-300 text-lg mb-8">
        We build intelligent automation agents combining Zapier-like workflows with advanced LLM orchestration.
      </p>

     <div className="text-gray-400 flex flex-wrap gap-4">
  {[
    "No-Code & Low-Code Workflows",
    "Custom LLM Agents",
    "200+ SaaS Integrations",
    "Automated Data Pipelines",
    "Real-Time Monitoring",
    "Scalable Execution",
  ].map((item, i) => (
    <div key={i} className="flex items-center gap-2 w-1/3">
      <FaCheck className="text-blue-400" />
      <span>{item}</span>
    </div>
  ))}
</div>

    </div>

    {/* Animation Strictly Right */}
    <div className="md:w-1/2 flex justify-end md:pr-0 pr-6">
      <LottiePlayer
        autoplay
        loop
        src={animationData}
        style={{ width: 520, height: 520 }}
      />
    </div>
  </div>
</section>



      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-xl hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {f.icon}
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-300 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= CTA (NOW BEFORE PILLARS) ================= */}
      <section className="py-20 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <h2 className="text-4xl font-bold mb-4">
          Partner for Intelligent Automation
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Automate repetitive work and let your team focus on high-impact strategy.
        </p>

        <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow">
          Schedule a Call <FaArrowRight />
        </button>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pillars of Excellence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {p.icon}
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AiAgent;
