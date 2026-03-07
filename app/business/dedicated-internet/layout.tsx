import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dedicated Internet Access (DIA) | Frontier Business Fiber",
  description:
    "Frontier Dedicated Internet Access delivers guaranteed symmetrical bandwidth with 99.99% SLA, static IPs, and 24/7 priority support. Enterprise-grade fiber for mission-critical operations.",
  alternates: { canonical: "/business/dedicated-internet" },
  openGraph: {
    title: "Dedicated Internet Access — Frontier Business Fiber",
    description:
      "Enterprise-grade dedicated fiber with guaranteed bandwidth, 99.99% SLA, static IP blocks, and priority support.",
    type: "website",
  },
  keywords: [
    "dedicated internet access",
    "DIA internet",
    "business dedicated fiber",
    "enterprise internet",
    "guaranteed bandwidth",
    "static IP business internet",
    "frontier business fiber",
    "SLA internet",
    "dedicated fiber line",
    "business grade internet",
  ],
}

export default function DedicatedInternetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
