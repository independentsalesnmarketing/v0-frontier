import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Fiber Internet | Blazing Fast Speeds Up to 5 Gig",
  description:
    "Get lightning-fast Frontier Fiber Internet with speeds up to 5 Gig. Enjoy unlimited data, no contracts, and 99.9% reliability. Perfect for streaming, gaming, and more!",
  alternates: { canonical: "/internet" },
}

export default function InternetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
