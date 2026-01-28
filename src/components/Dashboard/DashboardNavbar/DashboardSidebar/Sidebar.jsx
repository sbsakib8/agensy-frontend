"use client";

import React, { useState } from "react";
import {
  Users,
  FolderKanban,
  Settings,
  DollarSign,
  Package,
  ShoppingCart,
  UserCheck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Home,
  LayoutDashboard,
  House,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const [open, setOpen] = useState(true);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const pathname = usePathname();

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
        <SidebarItem icon={<LayoutDashboard />} label="Overview" open={open} href="/dashboard" active={pathname === '/dashboard'} />
        <SidebarItem icon={<House />} label="Home Page" open={open} href="/dashboard/home" active={pathname === '/dashboard/home'} />
        <SidebarItem icon={<UserCheck />} label="Users" open={open} href="/dashboard/users" active={pathname === '/dashboard/users'} />
        <SidebarItem icon={<ShoppingCart />} label="Orders" open={open} href="/dashboard/orders" active={pathname === '/dashboard/orders'} />
        <SidebarItem icon={<Package />} label="Product" open={open} href="/dashboard/product" active={pathname === '/dashboard/product'} />
        
        {/* Team Dropdown */}
        <div>
          <SidebarItem 
            icon={<Users />} 
            label="Team" 
            open={open} 
            active={pathname.startsWith('/dashboard/team')}
            onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
            hasDropdown={true}
            dropdownOpen={teamDropdownOpen}
          />
          {teamDropdownOpen && open && (
            <div className="ml-4 mt-1 space-y-1">
              <SidebarSubItem 
                label="Team Category" 
                href="/dashboard/team/category" 
                active={pathname === '/dashboard/team/category'} 
              />
              <SidebarSubItem 
                label="Team Members" 
                href="/dashboard/team/members" 
                active={pathname === '/dashboard/team/members'} 
              />
            </div>
          )}
        </div>
        
        <SidebarItem icon={<FolderKanban />} label="Demo Project" open={open} href="/dashboard/demo-project" active={pathname === '/dashboard/demo-project'} />
        <SidebarItem icon={<Settings />} label="Service" open={open} href="/dashboard/service" active={pathname === '/dashboard/service'} />
        <SidebarItem icon={<DollarSign />} label="Pricing" open={open} href="/dashboard/pricing" active={pathname === '/dashboard/pricing'} />
      </nav>
    </aside>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label, active, danger, open, href, onClick, hasDropdown, dropdownOpen }) {
  const content = (
    <>
      <span className="w-5 h-5 shrink-0">{icon}</span>
      {open && <span className=" whitespace-nowrap">{label}</span>}
      {open && hasDropdown && (
        <span className="w-4 h-4 shrink-0">
          {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      )}
    </>
  );

  const className = `w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition
    ${
      active
        ? "bg-linear-to-r from-blue-500/20 to-cyan-500/10 text-white"
        : danger
          ? "text-red-400 hover:bg-red-500/10"
          : "text-gray-400 hover:text-white hover:bg-white/5"
    }
  `;

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className}>
      {content}
    </button>
  );
}

/* Sidebar Sub Item */
function SidebarSubItem({ label, href, active }) {
  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded-lg text-sm transition
        ${
          active
            ? "bg-blue-500/10 text-white"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }
      `}
    >
      {label}
    </Link>
  );
}
