import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Business Internet | High-Speed Fiber Solutions",
  description:
    "Power your business with Frontier's high-speed fiber internet. Get reliable connectivity, dedicated support, and scalable solutions for businesses of all sizes.",
  alternates: { canonical: "/business/internet" },
}

export default function BusinessInternetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
