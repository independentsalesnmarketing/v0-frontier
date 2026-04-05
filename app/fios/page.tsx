import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, ArrowRightLeft, Zap, Wifi, Shield, Star, ChevronRight, DollarSign } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Frontier Fios Plans, Pricing & Availability 2026 | Frontier Deals",
  description: "Looking for Frontier Fios plans and pricing? Frontier now operates the Fios fiber network as Frontier Fiber. See current plans, prices, and availability — from $34.99/mo with no contracts.",
  alternates: { canonical: "/fios" },
  keywords: [
    "frontier fios",
    "frontier fios plans",
    "frontier fios pricing",
    "frontier fios cost",
    "frontier fios rates",
    "frontier fios internet",
    "frontier fios internet plans",
    "frontier fios availability",
    "frontier fios packages",
    "frontier fios deals",
    "frontier fios specials",
    "frontier fios florida",
    "frontier fios tampa",
    "fios frontier",
    "frontier communications fios",
    "verizon fios frontier",
    "frontier fios los angeles",
  ],
  openGraph: {
    title: "Frontier Fios Plans & Pricing 2026 | Now Frontier Fiber",
    description: "Frontier now operates the former Verizon Fios network. Current plans: 500 Mbps–7 Gig from $34.99/mo. No contracts. Free installation.",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happened to Frontier Fios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier acquired Verizon's Fios fiber network in several states including Florida, California, Texas, Connecticut, and Indiana. The same physical fiber infrastructure is used, now operated by Frontier Communications as Frontier Fiber. The service was rebranded from Fios to Frontier Fiber.",
      },
    },
    {
      "@type": "Question",
      name: "What are Frontier Fios plans and prices in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The former Frontier Fios service is now sold as Frontier Fiber. Plans include: Fiber 500 (500/500 Mbps) at $34.99/mo, Fiber 1 Gig (1,000/1,000 Mbps) at $49.99/mo, Fiber 2 Gig at $64.99/mo, Fiber 5 Gig at $89.99/mo, and Fiber 7 Gig at $109.99/mo. All plans include a free eero router, unlimited data, and no annual contract.",
      },
    },
    {
      "@type": "Question",
      name: "Is Frontier Fios still available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Fios brand is no longer used — the service is now called Frontier Fiber. The same fiber network that powered Fios is still available in former Fios service areas, now under Frontier's management with updated plans and lower prices.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check Frontier Fios availability at my address?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can check Frontier Fiber availability at your address using our availability checker. Enter your ZIP code to see which plans and speeds are available at your location.",
      },
    },
    {
      "@type": "Question",
      name: "Are Frontier Fios prices lower than Verizon Fios was?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frontier's entry-level plan (500 Mbps for $34.99/mo) is significantly cheaper than Verizon Fios was. Verizon Fios 300 Mbps was $49.99/mo. Frontier gives you more speed at a lower price, plus speeds up to 7 Gbps that Fios never offered.",
      },
    },
    {
      "@type": "Question",
      name: "Does Frontier Fios have contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Unlike Verizon Fios which often required 1-2 year contracts, all Frontier Fiber plans are month-to-month with no annual contract and no early termination fees.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fastest Frontier Fios speed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The former Fios network now runs Frontier's speeds up to 7 Gbps (7,000 Mbps) — over 7x faster than Verizon Fios ever offered. Plans include 500 Mbps, 1 Gig, 2 Gig, 5 Gig, and 7 Gig.",
      },
    },
  ],
}

const plans = [
  { name: "Fiber 500", speed: "500/500 Mbps", price: "$34.99", router: "eero Wi-Fi 6", visa: "$50", highlight: false },
  { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "$49.99", router: "eero Pro 6E", visa: "$100", highlight: true },
  { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "$64.99", router: "eero Pro 6E", visa: "$150", highlight: false },
  { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "$89.99", router: "eero Max 7", visa: "$200", highlight: false },
  { name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "$109.99", router: "2x eero Max 7", visa: "$200", highlight: false },
]

const fiosVsFrontier = [
  { feature: "Max Speed", fios: "940 Mbps", frontier: "7,000 Mbps", winner: "frontier" },
  { feature: "Entry Price", fios: "$49.99/mo (300 Mbps)", frontier: "$34.99/mo (500 Mbps)", winner: "frontier" },
  { feature: "Upload Speed", fios: "Symmetrical", frontier: "Symmetrical", winner: "tie" },
  { feature: "Router", fios: "$15/mo rental fee", frontier: "Free eero (yours to keep)", winner: "frontier" },
  { feature: "Data Cap", fios: "None", frontier: "None", winner: "tie" },
  { feature: "Contract", fios: "1-2 year options", frontier: "No contract ever", winner: "frontier" },
  { feature: "Installation", fios: "$99–$149", frontier: "Free", winner: "frontier" },
  { feature: "Wi-Fi Standard", fios: "Wi-Fi 5/6", frontier: "Wi-Fi 6/6E/7", winner: "frontier" },
  { feature: "Reward Card", fios: "None", frontier: "Up to $200 Visa", winner: "frontier" },
]

const fiosStates = [
  { state: "Florida", cities: ["Tampa", "Fort Lauderdale", "Orlando area", "Sarasota", "Lakeland"] },
  { state: "California", cities: ["Los Angeles", "Sacramento area", "Santa Barbara", "Long Beach", "Oxnard"] },
  { state: "Texas", cities: ["Dallas/Fort Worth", "San Angelo", "Denton", "Fort Worth suburbs"] },
  { state: "Connecticut", cities: ["New Haven", "Bridgeport", "Norwalk", "Stamford", "Hartford area"] },
  { state: "Indiana", cities: ["Fort Wayne", "Indianapolis suburbs"] },
  { state: "North Carolina", cities: ["Charlotte", "Raleigh area"] },
  { state: "New York", cities: ["Rochester", "Syracuse area"] },
]

export default function FiosPage() {
  return (
    <div className="bg-white text-[#333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Frontier Fios" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3C] via-[#12305e] to-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 mb-8">
            <span className="text-white/50 line-through text-sm">Verizon Fios</span>
            <ArrowRightLeft className="h-4 w-4 text-[#64ffda]" />
            <span className="text-[#64ffda] font-bold text-sm">Frontier Fiber</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Frontier Fios Plans & Pricing
            <span className="block text-[#00b7c3] mt-2">Now Faster. Now Cheaper.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            The Fios fiber network is now <strong className="text-white">Frontier Fiber</strong> — the same physical lines, upgraded to speeds up to 7 Gig, at prices starting at <strong className="text-white">$34.99/mo</strong>. No annual contracts. Free installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
              See Current Plans <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
            <Link
              href="/check-availability"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold h-14 px-8 rounded-xl text-base border border-white/20 transition-colors"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-4">
            Current Frontier Fios Plans & Prices
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            All plans include unlimited data, no contracts, free installation, and a free eero router.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="text-left py-4 px-5 font-bold rounded-tl-2xl">Plan</th>
                  <th className="text-center py-4 px-5 font-bold">Speed</th>
                  <th className="text-center py-4 px-5 font-bold">Price/mo</th>
                  <th className="text-center py-4 px-5 font-bold">Router</th>
                  <th className="text-center py-4 px-5 font-bold rounded-tr-2xl">Visa Card</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${plan.highlight ? "bg-[#00b7c3]/5" : "hover:bg-[#f8f9fb]"}`}>
                    <td className="py-4 px-5 font-bold text-[#0A1E3C]">
                      {plan.highlight && <span className="inline-block bg-[#DA202C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mr-2">Popular</span>}
                      {plan.name}
                    </td>
                    <td className="py-4 px-5 text-center text-gray-700">{plan.speed}</td>
                    <td className="py-4 px-5 text-center font-black text-[#0A1E3C]">{plan.price}</td>
                    <td className="py-4 px-5 text-center text-gray-600">{plan.router}</td>
                    <td className="py-4 px-5 text-center font-semibold text-[#DA202C]">{plan.visa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">Prices with Auto Pay & paperless billing. New customers only for Visa Reward Card.</p>
          <div className="flex justify-center mt-6">
            <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-12 px-8 rounded-xl text-base shadow-lg">
              Order Now <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>

      {/* Fios vs Frontier */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-4">
            Verizon Fios vs Frontier Fiber: What Changed?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Frontier acquired the Fios network and upgraded everything — faster speeds, lower prices, and no router rental fees.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="text-left py-4 px-5 font-bold rounded-tl-2xl">Feature</th>
                  <th className="text-center py-4 px-5 font-bold text-white/60">Verizon Fios (old)</th>
                  <th className="text-center py-4 px-5 font-bold text-[#00b7c3] rounded-tr-2xl">Frontier Fiber (now)</th>
                </tr>
              </thead>
              <tbody>
                {fiosVsFrontier.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#f8f9fb]">
                    <td className="py-4 px-5 font-medium text-[#0A1E3C]">{row.feature}</td>
                    <td className={`py-4 px-5 text-center ${row.winner === "fios" ? "font-semibold text-[#00b7c3]" : "text-gray-500"}`}>{row.fios}</td>
                    <td className={`py-4 px-5 text-center ${row.winner === "frontier" ? "font-bold text-[#00b7c3]" : "text-gray-600"}`}>
                      {row.winner === "frontier" && <Star className="h-3.5 w-3.5 text-[#DA202C] inline mr-1 fill-current" />}
                      {row.frontier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">
            4 Reasons Frontier Fiber Beats Old Fios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <DollarSign className="h-6 w-6" />, title: "Lower Starting Price", desc: "Frontier Fiber 500 starts at $34.99/mo — about 30% less than Verizon Fios 300 Mbps was at $49.99/mo, and you get nearly double the speed." },
              { icon: <Zap className="h-6 w-6" />, title: "7x Faster Max Speed", desc: "Verizon Fios topped out at 940 Mbps. Frontier now offers 7,000 Mbps (7 Gig) on the same fiber infrastructure — over 7 times faster." },
              { icon: <Wifi className="h-6 w-6" />, title: "Free Router (No Rental)", desc: "Fios charged $15/mo to rent a router. Frontier gives you a free eero Wi-Fi 6/6E/7 router that's yours to keep — saving $180/year." },
              { icon: <Shield className="h-6 w-6" />, title: "No Annual Contract", desc: "Verizon Fios often required 1-2 year contracts. Frontier is 100% month-to-month — cancel or change plans anytime with no early termination fee." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 flex gap-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-xl flex items-center justify-center text-[#00b7c3] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1E3C] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability by state */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-4">
            Frontier Fios Availability by State
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Former Fios service areas now served by Frontier Fiber. Coverage continues expanding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fiosStates.map((item, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-xl p-5 border border-gray-100">
                <h3 className="font-black text-[#0A1E3C] mb-3 text-sm">{item.state}</h3>
                <ul className="space-y-1">
                  {item.cities.map((city, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-3.5 w-3.5 text-[#00b7c3] flex-shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Coverage varies by address.{" "}
            <Link href="/check-availability" className="text-[#0A1E3C] font-bold underline hover:text-[#DA202C]">
              Check your specific address →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">
            Frontier Fios Questions Answered
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 group">
                <summary className="p-5 font-bold text-[#0A1E3C] cursor-pointer hover:text-[#00b7c3] transition-colors list-none flex items-center justify-between text-sm md:text-base">
                  {item.name}
                  <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0A1E3C] text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Get Frontier Fiber — The New Fios
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Check availability at your address. Plans from $34.99/mo with free installation, free eero router, and a Visa Reward Card up to $200.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
              Order Frontier Fiber <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
            <Link
              href="/verizon-to-frontier"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold h-14 px-8 rounded-xl text-base border border-white/20 transition-colors"
            >
              Full Verizon→Frontier Story <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
