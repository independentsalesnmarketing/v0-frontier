import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Frontier Existing Customer Deals 2026 | Upgrade & Save",
  description: "Already a Frontier customer? Get exclusive upgrade deals — faster speeds, better routers, and no fees to switch plans. Frontier internet deals for existing customers from $34.99/mo.",
  alternates: { canonical: "/existing-customers" },
  keywords: [
    "frontier internet deals for existing customers",
    "frontier internet plans for existing customers",
    "frontier upgrade internet",
    "frontier internet upgrade",
    "upgrade frontier internet",
    "frontier existing customer deals",
    "frontier new customer deals",
    "frontier plans and pricing",
    "frontier specials",
  ],
  openGraph: {
    title: "Frontier Existing Customer Deals 2026 | Upgrade Your Plan",
    description: "Exclusive upgrade deals for Frontier customers. Faster speeds, better routers, same low price.",
    type: "website",
  },
}

import { ArrowRight, Check, Zap, Shield, Wifi, Star, RefreshCw, TrendingUp, Gift, ChevronRight } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

const upgradeReasons = [
  { icon: <TrendingUp className="h-6 w-6" />, title: "More Devices, More Speed", desc: "Added a smart TV, Ring camera, or work laptop? Your bandwidth needs have probably grown since you signed up." },
  { icon: <Zap className="h-6 w-6" />, title: "Multi-Gig is More Affordable", desc: "Frontier has dropped prices on 2 Gig and 5 Gig plans—you may be able to double your speed for just $15-25/mo more." },
  { icon: <Wifi className="h-6 w-6" />, title: "Free Router Upgrade", desc: "Higher-tier plans include the latest eero Pro 6E or eero Max 7 (Wi-Fi 7) routers at no extra cost." },
  { icon: <Shield className="h-6 w-6" />, title: "No Contract Lock-in", desc: "Frontier plans are month-to-month. Upgrade today, and if you don't love it, switch back anytime." },
]

const upgradePaths = [
  { from: "Fiber 500", to: "Fiber 1 Gig", fromPrice: "$34.99", toPrice: "$49.99", savings: "2x speed for $15/mo more", badge: "Most Popular Upgrade", router: "eero Pro 6E included" },
  { from: "Fiber 1 Gig", to: "Fiber 2 Gig", fromPrice: "$49.99", toPrice: "$64.99", savings: "2x speed for $15/mo more", badge: "Best Value Jump", router: "eero Pro 6E included" },
  { from: "Fiber 2 Gig", to: "Fiber 5 Gig", fromPrice: "$64.99", toPrice: "$89.99", savings: "2.5x speed + Wi-Fi 7", badge: "Power User Upgrade", router: "eero Max 7 (Wi-Fi 7)" },
]

const faqData = [
  { q: "How do I upgrade my Frontier plan?", a: "Contact us through the order form on this page and select your desired plan. We'll handle the upgrade with no service interruption, no new contract, and no installation fee for most upgrades." },
  { q: "Will upgrading require a new router?", a: "If you're moving to a higher tier, you may receive an upgraded eero router at no additional cost. For example, upgrading to 5 Gig or 7 Gig includes the eero Max 7 with Wi-Fi 7 support." },
  { q: "Is there a fee to change my plan?", a: "No. Frontier has no upgrade fees or early termination fees since all plans are month-to-month with no contracts." },
  { q: "Can I downgrade if the new speed is more than I need?", a: "Yes. Frontier plans are completely flexible. You can downgrade at any time with no penalty." },
  { q: "Will I keep my current price lock?", a: "When you upgrade, you'll move to the current pricing for your new plan. However, Frontier's prices include a 12-month price guarantee with Auto Pay, so your new rate is locked in." },
]

export default function ExistingCustomersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(({ q, a }) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  return (
    <div className="bg-white text-[#333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Existing Customers" }]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#DA202C]/20 text-[#DA202C] rounded-full px-4 py-2 mb-6 text-sm font-bold">
            <Star className="h-4 w-4 fill-current" />
            Exclusive for Current Customers
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            Already a Frontier Customer?
            <span className="block text-[#00b7c3] mt-2">Upgrade & Save More.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Your Frontier Fiber plan has no contract — which means you can upgrade to faster speeds, get a better router, and unlock new perks anytime with zero hassle.
          </p>
          <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
            Explore Upgrade Options <ArrowRight className="h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>

      {/* Why Upgrade */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">Why Upgrade Your Plan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upgradeReasons.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 flex gap-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-xl flex items-center justify-center text-[#00b7c3] flex-shrink-0">{r.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0A1E3C] mb-1">{r.title}</h3>
                  <p className="text-sm text-gray-600">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Paths */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-4">Popular Upgrade Paths</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">See exactly how much more speed you get and what it costs. No surprises.</p>
          <div className="space-y-6">
            {upgradePaths.map((path, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <span className="inline-block bg-[#00b7c3]/10 text-[#00b7c3] text-xs font-bold px-3 py-1 rounded-full mb-3">{path.badge}</span>
                    <div className="flex items-center gap-3 mb-2">
                      <div>
                        <p className="text-sm text-gray-500">Current Plan</p>
                        <p className="text-xl font-black text-[#0A1E3C]">{path.from}</p>
                        <p className="text-sm text-gray-500">{path.fromPrice}/mo</p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-[#DA202C] flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Upgrade To</p>
                        <p className="text-xl font-black text-[#DA202C]">{path.to}</p>
                        <p className="text-sm text-gray-500">{path.toPrice}/mo</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="inline-flex items-center gap-1 text-xs text-gray-600"><Check className="h-3.5 w-3.5 text-[#00b7c3]" />{path.savings}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-600"><Wifi className="h-3.5 w-3.5 text-[#00b7c3]" />{path.router}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-600"><Shield className="h-3.5 w-3.5 text-[#00b7c3]" />No contract</span>
                    </div>
                  </div>
                  <PageOrderButton className="bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-xl text-sm whitespace-nowrap">
                    Upgrade Now
                  </PageOrderButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Plans Quick View */}
      <section className="py-16 px-4 bg-[#0A1E3C] text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12">All Frontier Fiber Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 font-bold">Plan</th>
                  <th className="text-center py-3 px-4 font-bold">Speed</th>
                  <th className="text-center py-3 px-4 font-bold">Price</th>
                  <th className="text-center py-3 px-4 font-bold">Router</th>
                  <th className="text-center py-3 px-4 font-bold">Visa Card</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Fiber 500", speed: "500/500 Mbps", price: "$34.99", router: "eero Wi-Fi 6", visa: "$50" },
                  { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "$49.99", router: "eero Pro 6E", visa: "$100" },
                  { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "$64.99", router: "eero Pro 6E", visa: "$150" },
                  { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "$89.99", router: "eero Max 7", visa: "$200" },
                  { name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "$109.99", router: "2x eero Max 7", visa: "$200" },
                ].map((p, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4 px-4 font-bold">{p.name}</td>
                    <td className="py-4 px-4 text-center text-white/80">{p.speed}</td>
                    <td className="py-4 px-4 text-center font-bold text-[#00b7c3]">{p.price}/mo</td>
                    <td className="py-4 px-4 text-center text-white/80">{p.router}</td>
                    <td className="py-4 px-4 text-center text-[#DA202C] font-bold">{p.visa}</td>
                    <td className="py-4 px-4 text-right">
                      <PageOrderButton className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg text-xs">
                        Select
                      </PageOrderButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-white/50 text-xs mt-6">Prices with Auto Pay & paperless billing. All plans include unlimited data, no contracts, and free installation.</p>
        </div>
      </section>

      {/* Manage Your Account */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">Manage Your Frontier Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Pay Your Bill", desc: "View your statement, set up Auto Pay, and manage your billing preferences.", icon: <RefreshCw className="h-6 w-6" />, href: "https://frontier.com/login" },
              { title: "Check Your Speed", desc: "Run a speed test to make sure you're getting the full speed of your plan.", icon: <Zap className="h-6 w-6" />, href: "/internet-speed-test" },
              { title: "View All Plans", desc: "Compare every Frontier Fiber plan to find the one that fits your needs.", icon: <Gift className="h-6 w-6" />, href: "/internet" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-[#f8f9fb] rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-[#00b7c3] transition-all group">
                <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-xl flex items-center justify-center text-[#00b7c3] mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#0A1E3C] mb-2 group-hover:text-[#00b7c3] transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <span className="text-[#00b7c3] text-sm font-bold flex items-center gap-1">
                  Go <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">Existing Customer FAQ</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 group">
                <summary className="p-5 font-bold text-[#0A1E3C] cursor-pointer hover:text-[#00b7c3] transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#DA202C] text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to Upgrade?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">No fees, no contracts, no hassle. Just faster internet — usually activated within 24 hours.</p>
          <PageOrderButton className="inline-flex items-center gap-2 bg-white text-[#DA202C] hover:bg-gray-100 font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
            Upgrade My Plan <ArrowRight className="h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>

      {/* Cross Links */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/internet" className="text-[#00b7c3] hover:underline font-medium">All Internet Plans</Link>
            <Link href="/internet/pricing" className="text-[#00b7c3] hover:underline font-medium">Pricing Details</Link>
            <Link href="/deals" className="text-[#00b7c3] hover:underline font-medium">Current Deals</Link>
            <Link href="/internet-speed-test" className="text-[#00b7c3] hover:underline font-medium">Speed Test</Link>
            <Link href="/wifi" className="text-[#00b7c3] hover:underline font-medium">Wi-Fi & Routers</Link>
            <Link href="/coverage" className="text-[#00b7c3] hover:underline font-medium">Coverage Map</Link>
            <Link href="/bundles" className="text-[#00b7c3] hover:underline font-medium">Bundle Deals</Link>
            <Link href="/reviews" className="text-[#00b7c3] hover:underline font-medium">Customer Reviews</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
