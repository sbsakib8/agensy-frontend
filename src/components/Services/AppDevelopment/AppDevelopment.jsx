"use client";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import mobileAppShowcase from "../../../../public/animation.json";
import {
  Rocket,
  Code2,
  Smartphone,
  Palette,
  Zap,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Database,
  Bell,
  ShieldCheck,
  RefreshCw,
  Activity,
  Layers,
  LineChart,
  Target,
  Heart,
} from "lucide-react";

const AppDevelopment = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-anim");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    "Cross-Platform Speed & Efficiency",
    "Native Performance Optimization",
    "Data-Driven UI/UX Excellence",
    "Flutter & React Native (Expo) Focus",
    "Scalable Cloud Backends & APIs",
    "Seamless App Store Deployment",
  ];

  const services = [
    {
      title: "Flutter Development",
      desc: "Build beautiful, natively compiled apps for mobile, web, and desktop from one codebase. We ensure high-fidelity UIs with smooth performance across all platforms.",
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "React Native & Expo Apps",
      desc: "Deliver scalable iOS and Android apps using JavaScript/TypeScript. We utilize Expo-based workflows for rapid development and seamless native module integration.",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Native iOS/Android",
      desc: "For maximum performance and hardware access, we build using Swift and Kotlin. Optimized for device-specific features like ARKit, sensors, and background tasks.",
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "App UI/UX Design",
      desc: "Crafting intuitive user flows and stunning, accessible designs. Our process focuses on reducing friction and creating engaging, performance-first mobile interfaces.",
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "API & Backend Services",
      desc: "Secure, real-time backend infrastructure using Firebase, AWS, or custom APIs. We ensure effortless scaling with robust data modeling and enterprise-grade security.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Maintenance & Support",
      desc: "Proactive maintenance, version updates, and bug fixes post-launch. We manage App Store compliance to ensure your application stays optimized and up-to-date.",
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
    },
  ];

  const capabilities = [
    {
      title: "Offline Sync & Persistence",
      desc: "Reliable app performance without internet. We implement local caching and background sync to keep data consistent anytime.",
      icon: <Database className="w-5 h-5 text-red-500" />,
      bgColor: "bg-red-500/10",
      borderColor: "group-hover:border-red-500/40",
    },
    {
      title: "Push Notifications",
      desc: "Drive retention with real-time alerts. Seamless integration of FCM and APNs for personalized and timely user engagement.",
      icon: <Bell className="w-5 h-5 text-blue-500" />,
      bgColor: "bg-blue-500/10",
      borderColor: "group-hover:border-blue-500/40",
    },
    {
      title: "Biometric Auth & Security",
      desc: "Protect user data with Face ID, Touch ID, and multi-factor auth using industry-standard encryption protocols.",
      icon: <ShieldCheck className="w-5 h-5 text-green-500" />,
      bgColor: "bg-green-500/10",
      borderColor: "group-hover:border-green-500/40",
    },
    {
      title: "Automated CI/CD Pipelines",
      desc: "Fast, stable updates via automated testing and deployment pipelines to TestFlight and Google Play Store.",
      icon: <Layers className="w-5 h-5 text-orange-400" />,
      bgColor: "bg-orange-400/10",
      borderColor: "group-hover:border-orange-400/40",
    },
    {
      title: "Performance Monitoring",
      desc: "Real-time crash reports and usage analytics to proactively monitor app health and optimize user experience.",
      icon: <Activity className="w-5 h-5 text-pink-500" />,
      bgColor: "bg-pink-500/10",
      borderColor: "group-hover:border-pink-500/40",
    },
    {
      title: "Over-the-Air (OTA) Updates",
      desc: "Deploy critical bug fixes and UI updates instantly, bypassing long app store review cycles with CodePush.",
      icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
      bgColor: "bg-cyan-400/10",
      borderColor: "group-hover:border-cyan-400/40",
    },
  ];

  const pillars = [
    {
      title: "Strategic MVP & Launch",
      subTitle: "Growth-Oriented Roadmap",
      desc: "We transform your vision into a scalable roadmap, prioritizing essential features for rapid market entry and long-term stability.",
      icon: <Target className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Performance Design & UX",
      subTitle: "Speed & User Retention",
      desc: "We craft lightning-fast, intuitive interfaces focused on native performance to ensure maximum user engagement and retention.",
      icon: <Heart className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Data-Driven Delivery",
      subTitle: "Continuous Improvement",
      desc: "Real-time analytics and telemetry are baked into your app, providing the insights needed to optimize performance and grow.",
      icon: <LineChart className="w-6 h-6 text-cyan-400" />,
    },
  ];

  // Component-er bitore nicher code-tuku:

  {
    /* SECTION 5: PILLARS */
  }
  <div className="scroll-anim mb-20">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        The Core Pillars of Our Delivery
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pillars.map((pillar, index) => (
        <div
          key={index}
          className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800/60 text-left space-y-5 scroll-anim hover:border-cyan-500/40 hover:bg-slate-900/50 hover:-translate-y-2 transition-all duration-300 group"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-slate-800/50 rounded-2xl group-hover:bg-cyan-500/10 transition-all duration-300">
              {pillar.icon}
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              {pillar.title}
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              {pillar.subTitle}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              {pillar.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>;

  return (
    <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto route-container">
        {/* SECTION 1: HERO (mb-32) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          <div className="flex-1 space-y-8 text-left scroll-anim order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Cross-Platform App <br />
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Development. Fast, Fluid, & Future-Ready.
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              We build native-quality mobile apps using{" "}
              <span className="text-cyan-400 font-semibold">Flutter</span> and{" "}
              <span className="text-blue-500 font-semibold">React Native</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center items-center order-1 lg:order-2 scroll-anim relative">
            <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full opacity-50"></div>
            <div className="relative w-full max-w-75 sm:max-w-100 lg:max-w-125">
              <Lottie animationData={mobileAppShowcase} loop={true} className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* SECTION 2: SERVICES GRID (mb-32) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-700 backdrop-blur-md shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out group"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-800 group-hover:bg-cyan-500/20 text-white text-2xl transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* SECTION 3: CAPABILITIES (Header + Grid + Button) (mb-32) */}
        <div className="mb-32">
          <div className="text-center mb-16 scroll-anim">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrated Mobile Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              We integrate essential, high-performance features into every app to ensure
              reliability, top-tier security, and seamless user engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-md shadow-md transition-colors duration-500 scroll-anim group"
              >
                {/* Icon Circle */}
                <div
                  className={`mb-6 w-14 h-14 rounded-full flex items-center justify-center border border-slate-700/50 transition-all duration-500 ${cap.bgColor} ${cap.borderColor} text-white text-2xl group-hover:bg-cyan-500/20 group-hover:border-cyan-400`}
                >
                  {cap.icon}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-cyan-400 transition-colors duration-500">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center scroll-anim">
            <button className="px-8 py-3 bg-cyan-700 text-white rounded-lg text-sm font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95">
              Explore All Features
            </button>
          </div>
        </div>

        {/* SECTION 4: PARTNER CALLOUT (mb-32) */}
        <div className="p-8 md:p-16 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-12 mb-32 scroll-anim shadow-lg">
          {/* Text Section */}
          <div className="max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Partner for Flawless Delivery
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We handle the entire development lifecycle—from initial concept and strategic planning
              to final App Store acceptance and post-launch optimization.
            </p>
          </div>

          {/* Button */}
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all duration-300 flex items-center group shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap">
            Schedule a Consultation{" "}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* SECTION 5: PILLARS */}
        <div className="scroll-anim">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              The Core Pillars of Our Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800/60 text-left space-y-5 scroll-anim
                   transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-slate-900/50 hover:border-cyan-500/40 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-800/50 rounded-2xl transition-colors duration-500 group-hover:bg-cyan-500/20">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight transition-colors duration-500 group-hover:text-cyan-400">
                    {pillar.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="text-cyan-400 text-md font-bold">{pillar.subTitle}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-300">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;