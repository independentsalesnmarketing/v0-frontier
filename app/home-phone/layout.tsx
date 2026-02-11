import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Digital Voice | Crystal-Clear Home Phone Service",
  description:
    "Get reliable home phone service with Frontier Digital Voice. Enjoy unlimited nationwide calling, 20+ features, and crystal-clear HD quality for just $25/mo when bundled with internet.",
  alternates: { canonical: "/home-phone" },
  openGraph: {
    title: "Frontier Digital Voice | Crystal-Clear Home Phone Service",
    description:
      "Get reliable home phone service with Frontier Digital Voice. Enjoy unlimited nationwide calling, 20+ features, and crystal-clear HD quality for just $25/mo when bundled with internet.",
    images: [
      {
        url: "/images/hero-family-internet.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Digital Voice Home Phone Service",
      },
    ],
  },
}

export default function HomePhoneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
