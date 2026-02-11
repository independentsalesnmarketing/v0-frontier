import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier TV & Bundles | Customized Entertainment Packages",
  description:
    "Create your perfect TV and internet bundle with Frontier. Choose from a variety of channels, streaming services, and blazing-fast internet speeds.",
  alternates: { canonical: "/tv-and-bundles" },
}

export default function TVAndBundlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
