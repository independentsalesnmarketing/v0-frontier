import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Existing Customer Deals & Upgrades 2026",
  description:
    "Already a Frontier customer? Upgrade your plan, add services, or take advantage of exclusive existing customer deals. Manage your account and explore upgrade options.",
  alternates: { canonical: "/existing-customers" },
  openGraph: {
    title: "Frontier Existing Customer Deals & Upgrades",
    description:
      "Exclusive deals for current Frontier customers. Upgrade your speed, save more, and get the most from your Frontier service.",
    type: "website",
  },
  keywords: [
    "frontier existing customer deals",
    "frontier current customer",
    "frontier upgrade plan",
    "frontier customer login",
    "frontier account",
    "frontier existing customer offers",
    "frontier upgrade speed",
    "frontier loyalty discount",
  ],
}

export default function ExistingCustomersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
