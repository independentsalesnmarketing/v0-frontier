import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Internet Pricing 2026 | Plans from $29.99/mo — No Hidden Fees",
  description:
    "Transparent Frontier Fiber internet pricing. Plans from $29.99/mo to $109.99/mo with no hidden fees, no contracts, free installation, and free eero router. Compare every plan.",
  alternates: { canonical: "/internet/pricing" },
  openGraph: {
    title: "Frontier Internet Pricing 2026 — No Hidden Fees",
    description:
      "Compare Frontier Fiber pricing from $29.99/mo. Every plan side by side with real costs. No contracts, unlimited data.",
    type: "website",
  },
  keywords: [
    "frontier internet pricing",
    "frontier fiber cost",
    "frontier internet price",
    "frontier monthly cost",
    "how much is frontier internet",
    "frontier internet rates 2026",
    "frontier internet plans and pricing",
    "cheap fiber internet",
    "affordable fiber plans",
    "frontier fiber price per month",
  ],
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
