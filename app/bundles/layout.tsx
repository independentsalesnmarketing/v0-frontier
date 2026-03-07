import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Bundles | Save with Internet & Phone Packages",
  description:
    "Save up to $120/year with Frontier's customizable bundles. Combine blazing-fast fiber internet and digital voice for the ultimate home connectivity package with speeds up to 7 Gig.",
  alternates: { canonical: "/bundles" },
  openGraph: {
    title: "Frontier Bundles | Save with Internet & Phone Packages",
    description:
      "Save up to $120/year with Frontier's customizable bundles. Combine blazing-fast fiber internet and digital voice for the ultimate home connectivity package.",
    images: [
      {
        url: "/images/hero-family-internet.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Internet and Phone Bundles",
      },
    ],
  },
}

export default function BundlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
