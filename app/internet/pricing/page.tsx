import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Frontier Internet Pricing | Plans from $34.99/mo",
  description:
    "Compare Frontier fiber internet pricing. Plans from $34.99/mo with unlimited data, no contracts, and free installation.",
  alternates: { canonical: "/internet" },
}

// Middleware 301-redirects /internet/pricing to /internet.
// This server-side redirect is a fallback in case middleware is bypassed.
export default function PricingPage() {
  redirect("/internet")
}

