import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ChevronRight } from "lucide-react"
import { frontierCoverage } from "@/lib/coverage-data"
import Breadcrumbs from "@/components/Breadcrumbs"
import SeoFreshnessNote from "@/components/SeoFreshnessNote"
import KeyFacts from "@/components/KeyFacts"

export const metadata: Metadata = {
  title: "Frontier Fiber Coverage Map | Find Internet in Your Area",
  description:
    "Check Frontier Fiber Internet availability at your address. Coverage across 19+ states and 400+ cities — plans from $34.99/mo, no contracts, free installation.",
  keywords: [
    "frontier fiber coverage",
    "frontier internet availability",
    "fiber internet map",
    "frontier service area",
    "internet availability checker",
    "frontier coverage map",
    "frontier internet coverage map",
    "frontier fiber availability map",
    "frontier service map",
    "frontier internet near me",
    "frontier fiber availability",
    "frontier internet in my area",
    "frontier in my area",
    "frontier fiber map",
    "frontier internet locations",
    "frontier fiber near me",
    "frontier availability map",
    "frontier communications coverage map",
    "frontier fiber coverage map",
    "frontier fiber address check",
    "frontier internet availability by address",
    "frontier check availability",
    "frontier internet check availability",
    "frontier fiber availability by address",
    "frontier communications check availability",
    "frontier communications availability map",
    "frontier internet florida",
    "frontier internet california",
    "frontier internet in my area",
  ],
  alternates: { canonical: "/coverage" },
  openGraph: {
    title: "Frontier Fiber Coverage Map | Find Internet in Your Area",
    description: "Check Frontier Fiber Internet availability in your area. Browse our coverage map across 19+ states and hundreds of cities starting at $34.99/mo.",
    url: "https://frontler-internet.com/coverage",
    siteName: "Frontier Deals",
    images: [{ url: "/images/og-frontier-internet.jpg", width: 1200, height: 630, alt: "Frontier Fiber Coverage Map" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Fiber Coverage Map | Find Internet in Your Area",
    description: "Check Frontier Fiber availability across 19+ states. Find plans from $34.99/mo.",
    images: ["/images/og-frontier-internet.jpg"],
  },
}

export default function CoveragePage() {
  const states = Object.keys(frontierCoverage).sort()

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: "Coverage", href: "/coverage" }]} />
      {/* Hero */}
      <section className="bg-[#0a1e3c] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Frontier Fiber Coverage Map
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Frontier Fiber Internet is available in {states.length} states across the United States.
            Find service availability in your city below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/check-availability"
              className="inline-flex items-center justify-center bg-[#da202c] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Check Your Address
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Freshness + Key Facts */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 space-y-4 max-w-4xl">
          <SeoFreshnessNote />
          <KeyFacts
            title="Frontier Fiber Coverage — Key Facts"
            facts={[
              { label: "States Served", value: `${states.length}+ states` },
              { label: "Service Type", value: "Fiber-to-the-premises (FTTP)" },
              { label: "Network Expansion", value: "Actively growing — new cities added regularly" },
              { label: "Speed Range", value: "500 Mbps to 7 Gbps" },
              { label: "Data Policy", value: "Unlimited — no caps" },
              { label: "Contract", value: "None — month-to-month only" },
            ]}
          />
        </div>
      </section>

      {/* States Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-12 text-center">
            Browse by State
          </h2>
          <div className="space-y-12">
            {states.map((state) => {
              const cities = frontierCoverage[state].sort()
              const stateSlug = state.toLowerCase().replace(/\s+/g, "-")
              return (
                <div key={state} id={stateSlug} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-[#da202c]" />
                    <h3 className="text-xl font-bold text-[#0a1e3c]">
                      {state}{" "}
                      <span className="text-sm font-normal text-gray-500">
                        ({cities.length} {cities.length === 1 ? "city" : "cities"})
                      </span>
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                    {cities.map((city) => {
                      const citySlug = city.toLowerCase().replace(/\s+/g, "-")
                      return (
                        <Link
                          key={city}
                          href={`/fiber-internet-in/${citySlug}/${stateSlug}`}
                          className="text-sm text-gray-600 hover:text-[#da202c] hover:bg-[#f5f7fa] px-3 py-2 rounded-lg transition-colors"
                        >
                          {city}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Jump */}
      <section className="py-12 bg-[#f5f7fa] sticky bottom-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {states.map((state) => {
              const stateSlug = state.toLowerCase().replace(/\s+/g, "-")
              return (
                <a
                  key={state}
                  href={`#${stateSlug}`}
                  className="text-xs bg-white text-gray-600 hover:text-[#da202c] px-3 py-1.5 rounded-full shadow-sm transition-colors"
                >
                  {state}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link href="/internet" className="bg-white text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">View Plans</p>
              <p className="text-xs text-gray-500 mt-1">From $34.99/mo</p>
            </Link>
            <Link href="/deals" className="bg-white text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Current Deals</p>
              <p className="text-xs text-gray-500 mt-1">Visa reward cards</p>
            </Link>
            <Link href="/blog/fiber-internet-availability-guide" className="bg-white text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Availability Guide</p>
              <p className="text-xs text-gray-500 mt-1">How fiber expands</p>
            </Link>
            <Link href="/reviews" className="bg-white text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Customer Reviews</p>
              <p className="text-xs text-gray-500 mt-1">Rated 4.8/5</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#da202c] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {"Don't"} See Your City?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Frontier is constantly expanding its fiber network. Enter your address to check
            availability or call us to learn when service may be available in your area.
          </p>
          <Link
            href="/check-availability"
            className="inline-flex items-center justify-center bg-white text-[#da202c] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Check Availability
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}
