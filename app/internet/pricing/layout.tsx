import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Fiber Internet Plans & Pricing | Starting at $29.99/mo",
  description:
    "Compare Frontier Fiber Internet plans with speeds from 200 Mbps to 7 Gig. All plans include unlimited data, no contracts, and free Amazon eero routers.",
  alternates: { canonical: "/internet/pricing" },
  openGraph: {
    title: "Frontier Fiber Internet Plans & Pricing | Starting at $29.99/mo",
    description:
      "Compare Frontier Fiber Internet plans with speeds from 200 Mbps to 7 Gig. All plans include unlimited data, no contracts, and free Amazon eero routers.",
    images: [
      {
        url: "/images/hero-family-internet.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Fiber Internet Plans",
      },
    ],
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
