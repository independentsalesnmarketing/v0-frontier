import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { StickyPromoBar } from "@/components/StickyPromoBar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })

export const metadata = {
  title: "Frontier Deals | Fast & Reliable Fiber Internet",
  description:
    "Experience lightning-fast fiber internet, TV, and phone services from Frontier. Enjoy unbeatable speeds, reliability, and customer support for your home and business.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    title: "Frontier Deals",
    capable: true,
    statusBarStyle: "default",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Frontier Deals | Fast & Reliable Fiber Internet",
    description:
      "Experience lightning-fast fiber internet, TV, and phone services from Frontier. Enjoy unbeatable speeds, reliability, and customer support for your home and business.",
    type: "website",
    images: [
      {
        url: "/images/og-frontier-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Fiber Internet - Fast & Reliable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Deals | Fast & Reliable Fiber Internet",
    description:
      "Experience lightning-fast fiber internet, TV, and phone services from Frontier. Enjoy unbeatable speeds, reliability, and customer support for your home and business.",
    images: ["/images/og-frontier-hero.jpg"],
  },
  keywords: [
    "frontier fiber internet",
    "high speed internet",
    "fiber optic internet",
    "frontier communications",
    "internet service provider",
    "fast internet",
    "reliable internet",
    "fiber internet deals",
    "home internet",
    "business internet"
  ],
  metadataBase: new URL("https://frontier-deals.com"),
  alternates: {
    canonical: "/",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e10600",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#e10600" />
      </head>
      <body className="bg-white text-foreground font-sans pb-20">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyPromoBar />
      </body>
    </html>
  )
}
