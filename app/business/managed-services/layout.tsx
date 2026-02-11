import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Managed Services | IT Solutions for Businesses",
  description:
    "Optimize your business IT with Frontier's managed services. Get expert support, cloud solutions, and advanced security to keep your operations running smoothly.",
  alternates: { canonical: "/business/managed-services" },
}

export default function ManagedServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
