import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Internet & Technology Blog | Frontier Communications",
  description:
    "Guides, tips, and comparisons to help you get the most from your internet connection. From speed guides to smart home advice, written by Frontier's technology team.",
  alternates: { canonical: "https://frontier-deals.com/blog" },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
