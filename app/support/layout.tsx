import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Support | 24/7 Customer Service & Tech Help",
  description:
    "Get expert help from Frontier's 24/7 support team. Find answers to FAQs, troubleshooting guides, and personalized assistance for all your services.",
  alternates: { canonical: "/support" },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
