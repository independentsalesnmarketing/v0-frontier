import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Frontier | Our Mission, Values & Commitment",
  description:
    "Learn about Frontier Communications' mission to deliver the best internet, TV, and phone services. Discover our values, history, and commitment to communities.",
  alternates: { canonical: "/about" },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
