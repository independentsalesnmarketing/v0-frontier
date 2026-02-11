import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier FAQ | Quick Answers to Common Questions",
  description:
    "Find quick answers to frequently asked questions about Frontier's internet, TV, and phone services. Get help with billing, troubleshooting, and more.",
  alternates: { canonical: "/support/faq" },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
