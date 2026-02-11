import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Business Phone | Reliable Voice Solutions",
  description:
    "Enhance your business communications with Frontier's reliable phone systems. Enjoy crystal-clear calls, advanced features, and flexible plans for any size business.",
  alternates: { canonical: "/business/phone" },
}

export default function BusinessPhoneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
