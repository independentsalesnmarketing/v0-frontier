import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Fiber Internet Plans | Frontier Authorized Retailer",
  description:
    "Get enterprise-grade Frontier fiber internet for your business. Symmetrical speeds, 99.9% uptime guarantee, dedicated support, and plans for businesses of all sizes.",
  keywords:
    "business internet, fiber internet, business phone, managed IT services, enterprise solutions, static IP, business VoIP, Frontier Business",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "Business Fiber Internet Plans | Frontier Authorized Retailer",
    description:
      "Enterprise-grade Frontier fiber internet for businesses of all sizes. Symmetrical speeds, 99.9% uptime, dedicated support.",
    url: "https://frontler-internet.com/business",
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
