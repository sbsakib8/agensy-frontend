"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  CheckSquare,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function DashboardSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`min-h-screen bg-[#050b1d] border-r border-white/10 flex flex-col transition-all duration-300
        ${open ? "w-64" : "w-20"}
      `}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="relative">
            <div className="relative bg-linear-to-br from-cyan-400 to-blue-600 p-2 rounded-lg">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {open && (
            <Link href="/" className="text-md font-bold whitespace-nowrap">
              <span className="text-white">BD Stack </span>
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                -Solutions
              </span>
            </Link>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 hover:text-white"
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-6 space-y-2 text-sm">
        <SidebarItem icon={<LayoutDashboard />} label="Dashboard" open={open} active />
        <SidebarItem icon={<FolderKanban />} label="Projects" open={open} />
        <SidebarItem icon={<Users />} label="Clients" open={open} />
        <SidebarItem icon={<CheckSquare />} label="Tasks" open={open} />
        <SidebarItem icon={<FileText />} label="Invoices" open={open} />
        <SidebarItem icon={<Users />} label="Team" open={open} />
        <SidebarItem icon={<BarChart3 />} label="Reports" open={open} />
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/10 space-y-2">
        <SidebarItem icon={<Settings />} label="Settings" open={open} />
        <SidebarItem icon={<LogOut />} label="Logout" open={open} danger />
      </div>
    </aside>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label, active, danger, open }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition
        ${
          active
            ? "bg-linear-to-r from-blue-500/20 to-cyan-500/10 text-white"
            : danger
              ? "text-red-400 hover:bg-red-500/10"
              : "text-gray-400 hover:text-white hover:bg-white/5"
        }
      `}
    >
      <span className="w-5 h-5">{icon}</span>
      {open && <span>{label}</span>}
    </button>
  );
}
