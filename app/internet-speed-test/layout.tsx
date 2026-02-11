import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Speed Test | Check Your Internet Performance",
  description:
    "Measure your Frontier internet speed with our quick and easy online test. Get accurate results for download and upload speeds, plus expert tips.",
  alternates: { canonical: "/internet-speed-test" },
}

export default function SpeedTestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
