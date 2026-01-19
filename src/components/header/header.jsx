"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

 const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const services = [
    { name: 'Web Development', desc: 'Custom websites & web apps', href: '/web-development'},
    {name:'AI Agents', desc: 'Intelligent virtual assistants', href: '/ai-agents'},
    { name: 'Mobile Apps', desc: 'iOS & Android development', href: '/app-development' },
    { name: 'UI/UX Design', desc: 'Beautiful user experiences' },
    { name: 'Digital Marketing', desc: 'SEO, PPC & Social Media' },
    { name: 'Branding', desc: 'Logo & identity design' },
    { name: 'E-commerce', desc: 'Online store solutions' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="shrink-0 group cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-linear-to-br from-cyan-400 to-blue-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <Link href={'/'} className="text-2xl font-bold">
                  <span className="text-white">BD Stack </span>
                  <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">-Solutions</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="/product" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Product</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span>Services</span>
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden animate-fade-in">
                    <div className="p-2">
                   {services.map((service, index) => (
                            <a
                              key={index}
                              href={
                                service.name === "Web Development"
                                  ? "/web-development"
                                  : service.name === "AI Agents"
                                  ? "/ai-agents"
                                  : service.name === "Mobile Apps"
                                  ? "/app-development"
                                  : service.name === "UI/UX Design"
                                  ? "/ui-ux-design"
                                  : `#${service.name.toLowerCase().replace(/\s+/g, '-')}`
                              }
                              className="block px-4 py-3 rounded-lg hover:bg-linear-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </h3>
                                  <p className="text-sm text-gray-400 mt-0.5">
                                    {service.desc}
                                  </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                              </div>
                            </a>
                          ))}

                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/demo" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Demo</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/pricing" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/team" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Team</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/career" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Career</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
<div className='flex gap-5'>

          {/* Auth Links */}
          <div className="hidden lg:flex items-center space-x-3">
            {session ? (
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
                    {session.user.image ? (
                      <img 
                        src={session.user.image} 
                        alt={session.user.name} 
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  {/* Hover Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    <div className="font-medium">{session.user.name || 'User'}</div>
                    <div className="text-gray-300 text-xs">{session.user.email}</div>
                    {/* Tooltip Arrow */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
                  </div>
                </div>
                <button 
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 hover:text-white hover:border-red-400 rounded-full transition-all duration-300 font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : status !== 'loading' && (
              <Link href="/signup" className="px-4 py-2 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:text-white hover:border-cyan-400 rounded-full transition-all duration-300 font-medium">
                Sign Up
              </Link>
            )}
          </div>

          {/* CTA Button */}
          {!session && status !== 'loading' && (
            <div className="hidden lg:block">
              <button className="relative px-6 py-2.5 rounded-full font-semibold text-white overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center cursor-pointer">
                  Schedule a call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          )}
</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800 transition-all duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-slate-900/98 backdrop-blur-xl border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <a href="#product" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300">
              Product
            </a>
            
            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'mobile-services' && (
                <div className="mt-2 ml-4 space-y-1">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#demo" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300">
              Demo
            </a>
            <a href="#pricing" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300">
              Pricing
            </a>
            <a href="/team" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300">
              Team
            </a>
            <a href="#career" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300">
              Career
            </a>
            
            {/* Auth Links */}
            <div className="border-t border-slate-700 pt-4 mt-4">
              {session ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 px-4 py-3 bg-slate-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      {session.user.image ? (
                        <img 
                          src={session.user.image} 
                          alt={session.user.name} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {session.user.name || 'User'}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {session.user.email}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-all duration-300 font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : status !== 'loading' && (
                <>
                  <Link href="/signin" className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all duration-300 font-medium">
                    Sign In
                  </Link>
                  <Link href="/signup" className="block px-4 py-3 text-cyan-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 font-medium">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            
            {!session && status !== 'loading' && (
              <button className="w-full mt-4 px-6 py-3 cursor-pointer bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                Schedule a call
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Demo Content for Scrolling */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}

export default Header;

