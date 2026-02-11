import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier WiFi | Whole-Home Coverage & Advanced Security",
  description:
    "Experience seamless connectivity with Frontier WiFi. Enjoy whole-home coverage, advanced security features, and expert support for all your devices.",
  alternates: { canonical: "/wifi" },
}

export default function WiFiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
