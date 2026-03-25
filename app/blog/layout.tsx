import React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import GlossaryTerms from "@/components/GlossaryTerms"
import { fiberInternetTerms, internetSpeedTerms, wifiTerms, buyingGuideTerms } from "@/lib/glossary-data"

export const metadata: Metadata = {
  title: "Internet & Technology Blog | Frontier Communications",
  description:
    "Guides, tips, and comparisons to help you get the most from your internet connection. From speed guides to smart home advice, written by Frontier's technology team.",
  alternates: { canonical: "/blog" },
}

// Comprehensive cross-topic glossary injected into every blog article.
// Covers entities from all major topic clusters so search engines can map
// each post to a broad knowledge graph of internet-related concepts.
const universalBlogGlossary = [
  ...fiberInternetTerms,
  ...internetSpeedTerms.slice(0, 4),
  ...wifiTerms.slice(0, 4),
  ...buyingGuideTerms.slice(0, 4),
]

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* Service links — appears on every blog post */}
      <div className="bg-[#f8f9fb] border-t border-gray-100 py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">Frontier Services</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {([
              { href: "/internet", label: "Fiber Internet Plans" },
              { href: "/deals", label: "Current Deals" },
              { href: "/check-availability", label: "Check Availability" },
              { href: "/internet/pricing", label: "Plans & Pricing" },
              { href: "/reviews", label: "Customer Reviews" },
              { href: "/compare/fiber-vs-cable", label: "Fiber vs Cable" },
            ] as { href: string; label: string }[]).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-center text-xs font-semibold text-[#0A1E3C] bg-white border border-gray-200 rounded-lg px-3 py-3 hover:bg-[#0A1E3C] hover:text-white hover:border-[#0A1E3C] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-4xl pb-12">
        <GlossaryTerms
          terms={universalBlogGlossary}
          heading="Internet & Fiber Glossary"
        />
      </div>
    </>
  )
}

