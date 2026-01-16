"use client";

import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Bot, Globe, Server, Zap } from 'lucide-react';

const HomecardSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Custom Web Development",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      iconBg: "bg-purple-500/20",
      features: [
        "Responsive website design",
        "Custom UI/UX development",
        "Full-stack web application",
        "Performance optimization",
        "API integration",
        "Enterprise-grade security"
      ]
    },
    {
      id: 2,
      icon: Smartphone,
      title: "App Development",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      iconBg: "bg-blue-500/20",
      features: [
        "iOS and Android app development",
        "Cross-platform solutions",
        "Integration with third-party services",
        "Push notifications and analytics",
        "App performance optimization",
        "Maintenance and updates"
      ]
    },
    {
      id: 3,
      icon: Bot,
      title: "AI Agent Development",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      iconBg: "bg-emerald-500/20",
      features: [
        "Custom AI agent creation",
        "Text-to-image generation",
        "Audio & speech generation",
        "Automated content writing",
        "Social media content automation",
        "Creative storytelling with AI",
        "AI Chatbot Development"
      ]
    },
    {
      id: 4,
      icon: Globe,
      title: "WordPress Development",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      iconBg: "bg-indigo-500/20",
      features: [
        "Custom theme development",
        "Plugin development & customization",
        "SEO optimization",
        "Performance tuning",
        "Website security enhancement",
        "E-commerce solutions"
      ]
    },
    {
      id: 5,
      icon: Server,
      title: "Domain & Hosting",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      iconBg: "bg-orange-500/20",
      features: [
        "Domain registration & management",
        "Reliable web hosting",
        "SSL certificates & HTTPS",
        "Server setup & maintenance",
        "High uptime & performance",
        "Scalable cloud hosting solutions"
      ]
    },
    {
      id: 6,
      icon: Zap,
      title: "Digital Solutions",
      gradient: "from-rose-500 via-red-500 to-pink-500",
      iconBg: "bg-rose-500/20",
      features: [
        "Digital marketing strategy",
        "Brand identity design",
        "Content management systems",
        "Analytics & reporting",
        "Business automation",
        "Cloud infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Services We
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Offer</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Transform your digital presence with our cutting-edge solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <div
                key={service.id}
                className={`transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative group h-full bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-500 hover:border-slate-600 hover:shadow-2xl ${
                  isHovered ? 'scale-105 -translate-y-2' : ''
                }`}>
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Animated Border Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                  <div className="relative p-8">
                    {/* Icon with Animation */}
                    <div className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      isHovered ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Icon className={`w-8 h-8 bg-linear-to-br ${service.gradient} bg-clip-text text-transparent transition-transform duration-500 ${
                        isHovered ? 'rotate-12 scale-110' : ''
                      }`} style={{ 
                        filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))',
                        stroke: 'url(#gradient)',
                        strokeWidth: 1.5
                      }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-6 transition-colors duration-300 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text">
                      {service.title}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start text-slate-300 transition-all duration-500 ${
                            isHovered ? 'translate-x-2' : ''
                          }`}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <svg
                            className={`w-5 h-5 mr-3 mt-0.5 shrink-0 transition-all duration-300 ${
                              isHovered ? 'text-pink-400 scale-110' : 'text-purple-400'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Button */}
                    <div className={`mt-8 transition-all duration-500 transform ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <button className={`w-full py-3 rounded-xl font-semibold bg-linear-to-r ${service.gradient} text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${service.gradient} opacity-20 blur-2xl transition-all duration-500 ${
                    isHovered ? 'scale-150' : 'scale-100'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group relative px-8 py-4 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default HomecardSection;