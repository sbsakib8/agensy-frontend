"use client";
import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, Zap, TrendingUp, Award } from 'lucide-react';

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, productId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const products = [
    {
      id: 1,
      title: "Resto Pilot",
      subtitle: "AI-Driven Restaurant Management System (SaaS)",
      description: "An advanced, AI-powered platform for streamlined restaurant operations, focusing on inventory, staff, and customer experience without manual photo-editing.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      gradient: "from-purple-600 via-pink-600 to-orange-500",
      tags: ["AI-Powered", "SaaS", "Real-time"],
      stats: [
        { icon: TrendingUp, label: "50% Efficiency", value: "Boost" },
        { icon: Award, label: "99.9% Uptime", value: "Guaranteed" }
      ],
      features: [
        "Smart inventory management",
        "Staff scheduling automation",
        "Customer analytics dashboard",
        "Multi-location support"
      ]
    },
    {
      id: 2,
      title: "Programming Fighter",
      subtitle: "Enterprise Learning Management System (SaaS)",
      description: "A sophisticated, real-time language and coding practice environment, leveraging cutting-edge Large Language Models (LLMs) for high-fidelity interactive training.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      gradient: "from-blue-600 via-cyan-500 to-teal-500",
      tags: ["LLM-Powered", "Interactive", "Enterprise"],
      stats: [
        { icon: Sparkles, label: "500+ Courses", value: "Available" },
        { icon: Zap, label: "Real-time", value: "Feedback" }
      ],
      features: [
        "AI-powered code review",
        "Interactive coding challenges",
        "Progress tracking & analytics",
        "Peer collaboration tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Premium Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Our
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> Products</span>
          </h1>
          
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into powerful AI solutions
          </p>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-purple-500"
                style={{
                  animation: 'pulse-dot 1.5s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const isHovered = hoveredProduct === product.id;
            
            return (
              <div
                key={product.id}
                className={`transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onMouseMove={(e) => handleMouseMove(e, product.id)}
              >
                <div className="group relative h-full">
                  {/* Glow Effect on Hover */}
                  {isHovered && (
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${product.gradient} opacity-20 blur-3xl transition-opacity duration-500 rounded-3xl`}
                    ></div>
                  )}

                  <div className={`relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden transition-all duration-500 h-full ${
                    isHovered ? 'scale-105 border-slate-600 shadow-2xl' : ''
                  }`}>
                    {/* Spotlight Effect */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
                        }}
                      ></div>
                    )}

                    {/* Image Section with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-linear-to-br ${product.gradient} opacity-40 mix-blend-multiply transition-opacity duration-500 ${
                        isHovered ? 'opacity-60' : ''
                      }`}></div>
                      
                      <img
                        src={product.image}
                        alt={product.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                      />

                      {/* Tags */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {product.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full text-xs text-slate-300 transition-all duration-300 ${
                              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                            }`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Corner Badge */}
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-linear-to-br ${product.gradient} rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? 'rotate-12 scale-110' : ''
                      }`}>
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      {/* Title */}
                      <h2 className={`text-3xl font-bold text-white mb-2 transition-all duration-300 ${
                        isHovered ? 'bg-linear-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent' : ''
                      }`}>
                        {product.title}
                      </h2>

                      {/* Subtitle */}
                      <p className="text-slate-400 text-sm mb-4 font-medium">
                        {product.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {product.stats.map((stat, idx) => {
                          const Icon = stat.icon;
                          return (
                            <div
                              key={idx}
                              className={`bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 transition-all duration-500 ${
                                isHovered ? 'border-purple-500/50 translate-x-1' : ''
                              }`}
                              style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                              <Icon className={`w-5 h-5 mb-2 bg-linear-to-r ${product.gradient} bg-clip-text text-transparent`} />
                              <div className="text-white font-bold text-sm">{stat.value}</div>
                              <div className="text-slate-400 text-xs">{stat.label}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-3 text-slate-300 text-sm transition-all duration-500 ${
                              isHovered ? 'translate-x-2' : ''
                            }`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${product.gradient}`}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className={`group/btn w-full py-4 rounded-xl font-semibold bg-linear-to-r ${product.gradient} text-white shadow-lg transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2 overflow-hidden relative ${
                        isHovered ? 'scale-105' : ''
                      }`}>
                        <span className="relative z-10">Explore Project</span>
                        <ExternalLink className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </div>

                    {/* Bottom Gradient Line */}
                    <div className={`h-1 bg-linear-to-r ${product.gradient} transition-all duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-slate-400 mb-6 text-lg">Ready to transform your business?</p>
          <button className="group relative px-10 py-5 bg-linear-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get Started Now
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.4;
          }
        }

        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductsSection;