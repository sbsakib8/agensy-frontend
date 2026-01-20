"use client";

import React from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar/Navbar";
import DashboardSidebar from "@/components/Dashboard/DashboardNavbar/DashboardSidebar/Sidebar";

export default function Layout({ children }) {
  return (
    
    <div className="h-screen flex bg-[#020617] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[130px] animate-[bounce_10s_infinite]"></div>
      </div>

      {/* Sidebar - flex-shrink-0 এবং h-full নিশ্চিত করা হয়েছে */}
      <div className="relative z-20 flex-shrink-0 h-full border-r border-blue-500/10">
        <DashboardSidebar />
      </div>

      {/* Right Side - overflow-hidden এখানে জরুরি */}
      <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
        {/* Navbar */}
        <DashboardNavbar />

        {/* Main Content - এখানেই স্ক্রল হবে */}
        <main className="flex-1 p-6 overflow-y-auto custom-scrollbar">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 10px;
        }

        aside {
          height: 100% !important;
        }
      `}</style>
    </div>
  );
}
