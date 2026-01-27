"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/header";
import Footer from "@/components/home/Footer";
import { LayoutProvider } from "@/context/LayoutContext";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname?.startsWith('/dashboard') || pathname === '/signin' || pathname === '/signup';

  return (
    <LayoutProvider>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </LayoutProvider>
  );
}