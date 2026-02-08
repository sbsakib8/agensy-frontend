import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "BD Stack Solutions | Leading Software Development & AI Solutions",
    template: "%s | BD Stack Solutions"
  },
  description: "BD Stack Solutions provides cutting-edge software development, AI agents, mobile apps, web development, and e-commerce solutions. Transform your business with our expert team.",
  keywords: ["software development", "AI solutions", "web development", "mobile apps", "e-commerce", "AI agents", "digital transformation", "BD Stack Solutions"],
  authors: [{ name: "BD Stack Solutions" }],
  creator: "BD Stack Solutions",
  publisher: "BD Stack Solutions",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bdstacksolutions.com'),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#22D3EE' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "BD Stack Solutions | Leading Software Development & AI Solutions",
    description: "Transform your business with cutting-edge software development, AI agents, and digital solutions from BD Stack Solutions.",
    url: '/',
    siteName: 'BD Stack Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BD Stack Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "BD Stack Solutions | Leading Software Development & AI Solutions",
    description: "Transform your business with cutting-edge software development, AI agents, and digital solutions.",
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050914' },
    { media: '(prefers-color-scheme: light)', color: '#22D3EE' }
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'BD Stack Solutions'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
