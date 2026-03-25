import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { StickyPromoBar } from "@/components/StickyPromoBar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata = {
  title: "Frontier Fiber Internet: Best Deals from $29.99/mo | Frontier Deals",
  description:
    "Get the best Frontier fiber internet deals through an authorized retailer. Plans from $29.99/mo with unlimited data, free eero router, and free installation. Order online today.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Frontier Deals | Authorized Retailer — Fiber Internet from $29.99/mo",
    description:
      "Shop Frontier fiber internet plans through an authorized retailer. Compare speeds up to 7 Gbps, check availability, and order online.",
    type: "website",
    images: [
      {
        url: "/images/og-frontier-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Fiber Internet — Authorized Retailer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Fiber Internet: Best Deals from $29.99/mo | Frontier Deals",
    description:
      "Best Frontier fiber internet deals from $29.99/mo. Unlimited data, free eero router, free installation.",
    images: ["/images/og-frontier-hero.jpg"],
  },
  keywords: [
    "frontier fiber internet",
    "frontier authorized retailer",
    "frontier internet deals",
    "fiber internet plans",
    "frontier internet service",
    "high speed internet",
    "internet service provider",
    "frontier fiber deals",
  ],
  metadataBase: new URL("https://frontier-deals.com"),
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
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#e10600" />
      </head>
      <body className="bg-white text-foreground font-sans pb-16">
        <Header />
        <main className="min-h-screen pt-14">{children}</main>
        <Footer />
        <StickyPromoBar />
      </body>
    </html>
  )
}
