import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, ChevronRight, ArrowRight, Phone, CheckCircle2 } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"
import { frontierCoverage } from "@/lib/coverage-data"

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
}

function deSlugify(slug: string): string | undefined {
  return Object.keys(frontierCoverage).find((s) => slugify(s) === slug)
}

interface Props { params: Promise<{ state: string }> }

export async function generateStaticParams() {
  return Object.keys(frontierCoverage).map((state) => ({ state: slugify(state) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params
  const stateName = deSlugify(state)
  if (!stateName) return {}
  const cityCount = frontierCoverage[stateName]?.length || 0
  return {
    title: `Frontier Fiber Internet in ${stateName} | Plans from $29.99/mo`,
    description: `Frontier Fiber Internet is available in ${cityCount}+ cities across ${stateName}. Plans from $29.99/mo — unlimited data, free installation, no contracts. Check availability at your address.`,
    alternates: { canonical: `/internet-in/${state}` },
    openGraph: {
      title: `Frontier Fiber in ${stateName} — Plans from $29.99/mo`,
      description: `Check Frontier Fiber availability in ${stateName}. ${cityCount}+ cities covered. Unlimited data, free installation, no contracts.`,
      type: "website",
    },
    keywords: [
      `frontier internet ${stateName.toLowerCase()}`,
      `internet providers ${stateName.toLowerCase()}`,
      `fiber internet ${stateName.toLowerCase()}`,
      `frontier fiber ${stateName.toLowerCase()}`,
      `best internet ${stateName.toLowerCase()}`,
    ],
  }
}

export default async function StateLandingPage({ params }: Props) {
  const { state } = await params
  const stateName = deSlugify(state)
  if (!stateName) notFound()

  const cities = frontierCoverage[stateName] || []
  const stateSlug = slugify(stateName)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://frontier-deals.com/" },
      { "@type": "ListItem", position: 2, name: "Coverage", item: "https://frontier-deals.com/coverage" },
      { "@type": "ListItem", position: 3, name: stateName },
    ],
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: "Coverage", href: "/coverage" },
        { label: stateName },
      ]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-[#DA202C]" />
              <span className="text-sm font-medium">{stateName}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Frontier Fiber Internet in {stateName}
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Frontier Fiber is available in {cities.length}+ cities across {stateName}. Get symmetrical speeds up to 7 Gig, free installation, unlimited data, and no contracts — starting at $29.99/mo.
            </p>
            <PageOrderButton className="inline-flex items-center justify-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg cta-pulse shadow-xl">
              Check Availability
              <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: `${cities.length}+`, label: "Cities Covered" },
              { value: "$29.99", label: "Starting Price" },
              { value: "5 Gig", label: "Max Speed" },
              { value: "$0", label: "Installation" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-5 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#DA202C] mb-1">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-4">
            Plans Available in {stateName}
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            All plans include unlimited data, free installation, no contracts, and a free eero Wi-Fi router.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Fiber 500", speed: "500/500 Mbps", price: "$29.99" },
              { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "$49.99" },
              { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "$64.99" },
              { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "$89.99" },
            ].map((plan) => (
              <div key={plan.name} className="border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#0A1E3C]">{plan.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{plan.speed}</p>
                <p className="text-2xl font-black text-[#DA202C] mt-2">{plan.price}</p>
                <p className="text-xs text-gray-400">/mo</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/internet" className="text-[#DA202C] hover:underline font-medium text-sm">
              View full plan details →
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-4">
            Frontier Fiber Cities in {stateName}
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Click a city to see local plans, pricing, and competitor comparisons.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {cities.sort().map((city) => (
              <Link
                key={city}
                href={`/fiber-internet-in/${slugify(city)}/${stateSlug}`}
                className="flex items-center gap-2 bg-white hover:bg-[#DA202C]/5 border border-gray-200 hover:border-[#DA202C]/30 rounded-lg px-4 py-3 text-sm font-medium text-[#0A1E3C] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#DA202C] flex-shrink-0" />
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Frontier in this state */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] mb-6">
              Why {stateName} Residents Choose Frontier Fiber
            </h2>
            <div className="space-y-4">
              {[
                `Frontier is expanding its fiber-optic network rapidly across ${stateName}, delivering dedicated connections that don't slow down during peak hours.`,
                "Unlike cable internet that shares bandwidth with your neighbors, Frontier Fiber gives you a dedicated line with symmetrical upload and download speeds.",
                `With ${cities.length}+ cities already covered and more being added monthly, ${stateName} residents have access to some of the fastest and most affordable fiber internet available.`,
                "Every plan includes unlimited data with no caps, no contracts, free professional installation, and a free eero Wi-Fi 6 router for whole-home coverage.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other States */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0A1E3C] mb-6">Frontier Fiber in Other States</h2>
          <div className="flex flex-wrap gap-2">
            {Object.keys(frontierCoverage)
              .filter((s) => s !== stateName)
              .sort()
              .map((s) => (
                <Link
                  key={s}
                  href={`/internet-in/${slugify(s)}`}
                  className="text-sm text-gray-600 hover:text-[#DA202C] hover:bg-white px-3 py-2 rounded-lg transition-colors"
                >
                  {s}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#DA202C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Get Frontier Fiber in {stateName}</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Plans start at $29.99/mo. Free installation, no contracts, unlimited data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center justify-center bg-white text-[#DA202C] font-bold h-14 px-10 rounded-xl text-lg hover:bg-gray-100">
              Order Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>
    </>
  )
}
