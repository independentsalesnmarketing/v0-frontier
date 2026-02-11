import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ChevronRight, Phone } from "lucide-react"
import { frontierCoverage } from "@/lib/coverage-data"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Frontier Fiber Coverage Map | Find Internet in Your Area",
  description:
    "Check Frontier Fiber Internet availability in your area. Browse our coverage map across 19+ states and hundreds of cities. Find plans starting at $29.99/mo.",
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
              href="/order"
              className="inline-flex items-center justify-center bg-[#da202c] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Check Your Address
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
            <a
              href="tel:+18009218101"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              (800) 921-8101
            </a>
          </div>
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

      {/* CTA */}
      <section className="py-16 bg-[#da202c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {"Don't"} See Your City?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Frontier is constantly expanding its fiber network. Enter your address to check
            availability or call us to learn when service may be available in your area.
          </p>
          <Link
            href="/order"
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
