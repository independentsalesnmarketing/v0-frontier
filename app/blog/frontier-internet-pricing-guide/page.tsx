import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, DollarSign, ChevronRight, Star, Shield, Wifi, Gift, AlertTriangle, TrendingDown, Calculator } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Frontier Internet Pricing Guide 2026: Every Plan, Every Cost",
  description: "Complete Frontier Fiber pricing breakdown. Every plan from $29.99-$109.99/mo with real costs, fees, what's included free, and money-saving tips. No hidden fees.",
  alternates: { canonical: "/blog/frontier-internet-pricing-guide" },
  openGraph: { title: "Frontier Internet Pricing Guide 2026", description: "Full pricing breakdown for every Frontier Fiber plan. Real costs, free perks, and how to save." },
  keywords: ["frontier internet pricing", "frontier fiber cost", "frontier internet price", "how much is frontier internet", "frontier internet plans cost", "frontier monthly cost"],
}

export default function PricingGuidePage() {
  return (
    <article className="bg-white text-[#333]">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Pricing Guide" }]} />
      <section className="bg-[#0A1E3C] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <span>Buying Guide</span><span>•</span><span>12 min read</span><span>•</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Frontier Internet Pricing Guide 2026
            <span className="block text-[#00b7c3] mt-2">Every Plan. Every Cost. No Surprises.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">The complete, transparent pricing breakdown for every Frontier Fiber plan — including what&apos;s included free, potential fees, and how to lock in the lowest price.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Quick Price Table */}
          <div className="bg-[#f8f9fb] rounded-2xl p-6 md:p-8 border border-gray-100 mb-10">
            <h2 className="text-xl font-black text-[#0A1E3C] mb-4 flex items-center gap-2"><Calculator className="h-5 w-5 text-[#00b7c3]" /> Quick Price Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#0A1E3C]">
                    <th className="text-left py-3 px-3 font-bold text-[#0A1E3C]">Plan</th>
                    <th className="text-center py-3 px-3 font-bold text-[#0A1E3C]">Speed</th>
                    <th className="text-center py-3 px-3 font-bold text-[#0A1E3C]">Monthly</th>
                    <th className="text-center py-3 px-3 font-bold text-[#0A1E3C]">Annual Cost</th>
                    <th className="text-center py-3 px-3 font-bold text-[#0A1E3C]">Cost/Mbps</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { plan: "Fiber 500", speed: "500 Mbps", monthly: "$29.99", annual: "$359.88", perMbps: "$0.060" },
                    { plan: "Fiber 1 Gig", speed: "1,000 Mbps", monthly: "$49.99", annual: "$599.88", perMbps: "$0.050", best: true },
                    { plan: "Fiber 2 Gig", speed: "2,000 Mbps", monthly: "$64.99", annual: "$779.88", perMbps: "$0.032", best: true },
                    { plan: "Fiber 5 Gig", speed: "5,000 Mbps", monthly: "$89.99", annual: "$1,079.88", perMbps: "$0.018" },
                    { plan: "Fiber 7 Gig", speed: "7,000 Mbps", monthly: "$109.99", annual: "$1,319.88", perMbps: "$0.016" },
                  ].map((p, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${p.best ? "bg-[#00b7c3]/5" : ""}`}>
                      <td className="py-3 px-3 font-bold text-[#0A1E3C]">{p.plan} {p.best && <span className="text-[10px] bg-[#00b7c3] text-white px-1.5 py-0.5 rounded ml-1">Best Value</span>}</td>
                      <td className="py-3 px-3 text-center text-gray-600">{p.speed}</td>
                      <td className="py-3 px-3 text-center font-bold text-[#DA202C]">{p.monthly}</td>
                      <td className="py-3 px-3 text-center text-gray-600">{p.annual}</td>
                      <td className="py-3 px-3 text-center font-mono text-[#00b7c3]">{p.perMbps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">Prices with Auto Pay & paperless billing. All prices include free installation, free eero router, and unlimited data.</p>
          </div>

          <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">What&apos;s Included Free With Every Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { item: "Free Professional Installation", desc: "Normally $75-100 at other ISPs. Frontier includes it free — a technician handles everything.", icon: "🔧" },
              { item: "Free eero Wi-Fi Router", desc: "Worth $100-300. Yours to keep, not a rental. Model varies by plan tier.", icon: "📶" },
              { item: "Unlimited Data", desc: "No data caps, no throttling, no overage charges. Ever. Stream and download freely.", icon: "♾️" },
              { item: "Visa® Reward Card", desc: "$50-$200 depending on plan. Sent 8-10 weeks after service activation.", icon: "💳" },
              { item: "No Annual Contract", desc: "Month-to-month. Cancel or change plans anytime with zero penalty fees.", icon: "📋" },
              { item: "12-Month Price Lock", desc: "Your rate is guaranteed for 12 months when you enroll in Auto Pay.", icon: "🔒" },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-xl p-5 border border-gray-100 flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-sm text-[#0A1E3C]">{item.item}</h3>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">Potential Additional Costs</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#0A1E3C] mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-yellow-600" />Transparency Note</h3>
            <p className="text-sm text-gray-700 mb-4">Frontier is more transparent than most ISPs, but there are a few things to know:</p>
            <ul className="space-y-2">
              {[
                "Taxes & fees: Typically $3-8/mo depending on your state and local taxes.",
                "Auto Pay discount: Prices shown require Auto Pay enrollment. Without it, add ~$5/mo.",
                "Additional eero units: If you want extra mesh points, they're $10/mo each or buy your own.",
                "Static IP (business): Available for $19.99/mo add-on.",
              ].map((note, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">Detailed Plan Breakdown</h2>
          {[
            { name: "Fiber 500", speed: "500/500 Mbps", price: "$29.99/mo", router: "eero Wi-Fi 6", visa: "$50", ideal: "1-3 people. Streaming, browsing, video calls." },
            { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "$49.99/mo", router: "eero Pro 6E", visa: "$100", ideal: "3-6 people. Gaming, WFH, 4K streaming on multiple screens." },
            { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "$64.99/mo", router: "eero Pro 6E", visa: "$150", ideal: "5-10 people. Large families, smart homes, content creators." },
            { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "$89.99/mo", router: "eero Max 7 (Wi-Fi 7)", visa: "$200", ideal: "Power users, home servers, 8K streaming, future-proofing." },
            { name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "$109.99/mo", router: "2x eero Max 7 (Wi-Fi 7)", visa: "$200", ideal: "Maximum performance. Large homes, content creation studios." },
          ].map((plan, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 mb-4 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-black text-[#0A1E3C]">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.speed} symmetrical</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-2xl font-black text-[#DA202C]">{plan.price}</p>
                  <p className="text-xs text-gray-400">w/ Auto Pay</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <span className="flex items-center gap-1"><Wifi className="h-3.5 w-3.5 text-[#00b7c3]" />{plan.router}</span>
                <span className="flex items-center gap-1"><Gift className="h-3.5 w-3.5 text-[#DA202C]" />{plan.visa} Visa card</span>
                <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#00b7c3]" />No contract</span>
                <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-[#00b7c3]" />Free install</span>
              </div>
              <p className="mt-3 text-sm text-gray-600"><strong>Ideal for:</strong> {plan.ideal}</p>
            </div>
          ))}

          <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">Money-Saving Tips</h2>
          <div className="space-y-3 mb-8">
            {[
              "Enroll in Auto Pay immediately — it saves $5/mo and locks your price for 12 months.",
              "Don't overpay for speed you won't use. Most households are perfectly served by Fiber 500 or 1 Gig.",
              "The cost-per-Mbps drops dramatically at 2 Gig — it's the best value for larger households.",
              "Claim your Visa reward card — it's essentially 1-5 months of free service depending on your plan.",
              "Skip the bundle unless you specifically need home phone. Internet-only is the best deal.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 bg-[#f8f9fb] rounded-lg p-4 border border-gray-100">
                <DollarSign className="h-5 w-5 text-[#00b7c3] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{tip}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">How Frontier Compares on Price</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="text-left py-3 px-4 rounded-tl-lg">Provider</th>
                  <th className="text-center py-3 px-4">500 Mbps</th>
                  <th className="text-center py-3 px-4">1 Gig</th>
                  <th className="text-center py-3 px-4">Data Caps</th>
                  <th className="text-center py-3 px-4 rounded-tr-lg">Contract</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Frontier Fiber", "$29.99", "$49.99", "None", "None", true],
                  ["Xfinity", "$55-65", "$75-80", "1.2 TB", "1-2 years"],
                  ["AT&T Fiber", "$55", "$80", "None", "None"],
                  ["Spectrum", "$49.99", "$79.99", "None", "None"],
                  ["Verizon Fios", "$49.99", "$79.99", "None", "None"],
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${(row as unknown[])[5] ? "bg-[#00b7c3]/5 font-bold" : ""}`}>
                    {(row as string[]).slice(0, 5).map((cell, j) => (
                      <td key={j} className={`py-3 px-4 ${j === 0 ? "text-left font-medium text-[#0A1E3C]" : "text-center"} ${(row as unknown[])[5] && j > 0 ? "text-[#00b7c3]" : "text-gray-600"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="bg-[#DA202C] rounded-2xl p-8 md:p-12 text-white text-center mt-12">
            <h2 className="text-2xl font-black mb-4">See Your Exact Price</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">Pricing may vary slightly by location. Check availability at your address for your exact monthly cost.</p>
            <PageOrderButton className="inline-flex items-center gap-2 bg-white text-[#DA202C] hover:bg-gray-100 font-bold h-12 px-8 rounded-xl text-base shadow-lg">
              Check My Price <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
          </div>

          {/* Related */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="font-bold text-[#0A1E3C] mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/internet/pricing" className="text-sm text-[#00b7c3] hover:underline font-medium">Full Pricing Page →</Link>
              <Link href="/deals" className="text-sm text-[#00b7c3] hover:underline font-medium">Current Deals & Promotions →</Link>
              <Link href="/blog/frontier-internet-review-2025" className="text-sm text-[#00b7c3] hover:underline font-medium">Frontier Internet Review →</Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
