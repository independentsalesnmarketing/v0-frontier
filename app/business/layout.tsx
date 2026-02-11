import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Business | Enterprise-Grade Fiber Internet & Communication Solutions",
  description:
    "Empower your business with Frontier's high-speed fiber internet, reliable phone systems, and advanced technology solutions. Tailored for businesses of all sizes with 99.9% uptime guarantee.",
  keywords:
    "business internet, fiber internet, business phone, managed IT services, enterprise solutions, static IP, business VoIP, Frontier Business",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "Frontier Business | Enterprise-Grade Fiber Internet & Communication Solutions",
    description:
      "Empower your business with Frontier's high-speed fiber internet, reliable phone systems, and advanced technology solutions.",
    url: "https://frontier-deals.com/business",
    siteName: "Frontier Deals",
    images: [
      {
        url: "/images/hero-family-internet.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Business Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
