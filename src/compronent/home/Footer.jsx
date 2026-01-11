"use client";

import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#050914] text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Logo & Brand */}
        <div className="flex flex-col gap-4 shrink-0">
          <div className="flex items-center gap-3 group cursor-pointer">
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

            <Link href={'/'} className="text-2xl font-bold flex items-center gap-1">
              <span className="text-white">BD Stack</span>
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">-Solutions</span>
            </Link>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            BD Stack Solutions delivers cutting-edge technology solutions and innovative products for businesses worldwide.
          </p>

          <div className="flex items-center gap-4">
            <SocialIcon href="#" icon={<FaTwitter />} />
            <SocialIcon href="#" icon={<FaLinkedinIn />} />
            <SocialIcon href="#" icon={<FaGithub />} />
            <SocialIcon href="#" icon={<FaEnvelope />} />
          </div>
        </div>

        {/* Quick Links */}
        <FooterColumn title="Quick Links">
          <FooterLink href="#">Product</FooterLink>
          <FooterLink href="#">Services</FooterLink>
          <FooterLink href="#">Demo</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
        </FooterColumn>

        {/* Company */}
        <FooterColumn title="Company">
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Customers</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterColumn>

        {/* Resources */}
        <FooterColumn title="Resources">
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Documentation</FooterLink>
          <FooterLink href="#">Tutorials</FooterLink>
          <FooterLink href="#">Help Center</FooterLink>
        </FooterColumn>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BD Stack Solutions. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Components */
function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition"
    >
      {icon}
    </Link>
  );
}
