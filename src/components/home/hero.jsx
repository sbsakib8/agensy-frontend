"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { Search, Code, TrendingUp, Users, Globe, Zap } from 'lucide-react';

 const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchFocused, setSearchFocused] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Generate stable random values for particles
  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float"
          style={{ 
            top: '10%', 
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"
          style={{ 
            bottom: '20%', 
            right: '15%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"
          style={{ 
            top: '50%', 
            right: '10%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-particle"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          ></div>
        ))}

        {/* Circular Grid */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200 h-200">
          <div className="absolute inset-0 border border-cyan-500/10 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-8 border border-cyan-500/10 rounded-full animate-spin-slower"></div>
          <div className="absolute inset-16 border border-cyan-500/10 rounded-full animate-spin-reverse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Hero Title */}
        <div className={`text-center mb-8 ${mounted ? 'animate-fade-in-up' : 'opacity-100'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Innovating </span>
            <span className={`bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent ${mounted ? 'animate-gradient' : ''}`}>
              Intelligent
            </span>
            <span className="text-white"> Solutions</span>
          </h1>
          
          <p className={`text-gray-400 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${mounted ? 'animate-fade-in-up-delayed' : 'opacity-100'}`}>
            We transform complex challenges into robust, high-performance software,
            leveraging cutting-edge technology and agile methodologies to deliver unparalleled
            business value.
          </p>
        </div>

        {/* Search Bar */}
        <div className={`max-w-2xl mx-auto mb-16 ${mounted ? 'animate-fade-in-up-more-delayed' : 'opacity-100'}`}>
          <div className={`relative group ${searchFocused ? 'scale-105' : ''} transition-transform duration-300`}>
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex items-center bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
              <Search className="w-5 h-5 text-cyan-400 ml-5" />
              <input
                type="text"
                placeholder="Search our solutions..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full px-4 py-4 bg-transparent text-white placeholder-gray-500 outline-none"
              />
              <button className="mr-2 px-6 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 - Deployment Success Rate */}
          <div className={`group ${mounted ? 'animate-fade-in-up-stagger-1' : 'opacity-100'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Code className="w-5 h-5" />
                    <span className="text-sm font-semibold">Deployment Success Rate</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-5xl font-bold text-white mb-2">99.8%</div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Uptime & Stability Average</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Lines of Code Deployed</span>
                    <span className="text-cyan-400 font-semibold">2M+</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-linear-to-r from-cyan-500 to-blue-500 rounded-full animate-progress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Project Velocity */}
          <div className={`group ${mounted ? 'animate-fade-in-up-stagger-2' : 'opacity-100'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-semibold">Project Velocity (Y-o-Y)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-end space-x-2 mb-4">
                    <div className="w-12 h-16 bg-linear-to-t from-cyan-500 to-cyan-400 rounded-t-lg animate-bar-grow-1"></div>
                    <div className="w-12 h-24 bg-linear-to-t from-purple-500 to-purple-400 rounded-t-lg animate-bar-grow-2"></div>
                    <div className="w-12 h-32 bg-linear-to-t from-green-500 to-green-400 rounded-t-lg animate-bar-grow-3"></div>
                  </div>
                  <div className="text-xs text-gray-500 text-center">Average Delivery Speed</div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-400">Global Markets</span>
                  </div>
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Client Retention */}
          <div className={`group ${mounted ? 'animate-fade-in-up-stagger-3' : 'opacity-100'} md:col-span-2 lg:col-span-1`}>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-t from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-semibold">95% Client Retention</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  Innovation, Partnership, Trust.
                </h3>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  Our long-term success is built on a foundation of delivering consistent value
                  and adapting to evolving technology needs.
                </p>

                <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-xl border border-slate-700/30">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-gray-400">Tech Stack Focus</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-8 h-8 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      JS
                    </div>
                    <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      TS
                    </div>
                    <div className="w-8 h-8 bg-linear-to-br from-green-400 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      AI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(20px); }
        }
        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 99%; }
        }
        @keyframes bar-grow-1 {
          0% { height: 0; }
          100% { height: 4rem; }
        }
        @keyframes bar-grow-2 {
          0% { height: 0; }
          100% { height: 6rem; }
        }
        @keyframes bar-grow-3 {
          0% { height: 0; }
          100% { height: 8rem; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-particle { animation: particle linear infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slower { animation: spin-slower 30s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-progress { animation: progress 2s ease-out; }
        .animate-bar-grow-1 { animation: bar-grow-1 1s ease-out; }
        .animate-bar-grow-2 { animation: bar-grow-2 1.2s ease-out; }
        .animate-bar-grow-3 { animation: bar-grow-3 1.4s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-up-delayed { animation: fade-in-up 1s ease-out; }
        .animate-fade-in-up-more-delayed { animation: fade-in-up 1.2s ease-out; }
        .animate-fade-in-up-stagger-1 { animation: fade-in-up 1s ease-out; }
        .animate-fade-in-up-stagger-2 { animation: fade-in-up 1.2s ease-out; }
        .animate-fade-in-up-stagger-3 { animation: fade-in-up 1.4s ease-out; }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
export default HeroSection;