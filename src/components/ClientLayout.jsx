"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/header";
import Footer from "@/components/home/Footer";
import AuthSessionProvider from "@/components/providers/SessionProvider";
import { LayoutProvider } from "@/context/LayoutContext";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <LayoutProvider>
      <AuthSessionProvider>
        {!isDashboard && <Header />}
        {children}
        {!isDashboard && <Footer />}
      </AuthSessionProvider>
    </LayoutProvider>
  );
}