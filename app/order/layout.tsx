import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Order Frontier Services",
  description: "Order Frontier's lightning-fast fiber internet, TV, and phone services for your home or business.",
  alternates: { canonical: "/order" },
}

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
