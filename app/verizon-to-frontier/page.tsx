import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ArrowRightLeft, Shield, Zap, Wifi, Clock, HelpCircle } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton, FaqAccordion } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Verizon Fios Is Now Frontier Fiber | What Changed & What Didn't",
  description: "Verizon sold its Fios network to Frontier Communications. Learn what changed, what stayed the same, and why Frontier Fiber is faster and cheaper than Fios ever was.",
  alternates: { canonical: "/verizon-to-frontier" },
  openGraph: {
    title: "Verizon Fios → Frontier Fiber: Everything You Need to Know",
    description: "Your Fios network is now Frontier Fiber. Same fiber lines, better plans, lower prices. Here's the full story.",
    type: "article",
  },
  keywords: [
    "verizon frontier",
    "fios frontier",
    "frontier is verizon",
    "verizon fios now frontier",
    "did verizon sell to frontier",
    "frontier verizon merger",
    "frontier fios",
    "verizon fios frontier",
    "frontier fios internet",
    "frontier communications fios",
    "frontier fios plans",
    "frontier fios pricing",
    "frontier fios internet plans",
    "frontier fios availability",
    "frontier fios deals",
    "verizon frontier internet",
    "frontier fios cost",
    "frontier fios rates",
    "frontier fios florida",
    "frontier fios tampa",
    "frontier fios los angeles",
    "frontier and verizon",
    "verizon frontier communications",
    "fios tampa",
    "frontier communications fios internet",
    "frontier fios specials",
    "frontier fios packages",
  ],
}

const faqData = [
  { q: "Is Frontier the same as Verizon Fios?", a: "Frontier acquired Verizon's Fios fiber network in several states. The same physical fiber lines are used, but Frontier now operates the service with different plans, pricing, and equipment. Frontier has since invested billions upgrading the network." },
  { q: "Did my Fios service change when Frontier took over?", a: "The underlying fiber infrastructure stayed the same, but Frontier introduced new plan tiers (up to 7 Gig), lower prices, free eero routers, and eliminated many of the fees Verizon charged." },
  { q: "Is Frontier Fiber faster than Verizon Fios was?", a: "Yes. Verizon Fios maxed out at 940 Mbps in most areas. Frontier now offers speeds up to 7 Gbps — over 7x faster — on the same fiber infrastructure." },
  { q: "Do I still need my old Fios router?", a: "No. Frontier provides a free eero Wi-Fi router with every plan. You can return or recycle your old Fios Quantum Gateway. The eero system typically provides better Wi-Fi coverage." },
  { q: "Are Frontier's prices lower than Fios?", a: "Generally yes. Frontier Fiber 500 starts at $29.99/mo, while Verizon Fios 300 Mbps was $49.99/mo. You get more speed for less money with Frontier." },
  { q: "Can I keep my email address?", a: "If you had a Verizon email, Frontier maintained email forwarding during the transition. For current customers, Frontier offers guidance on migrating to a free email provider like Gmail." },
  { q: "Does Frontier have contracts like Verizon?", a: "No. All Frontier Fiber plans are contract-free with no early termination fees. You can cancel or change plans at any time." },
  { q: "What states did this transition affect?", a: "Frontier acquired Verizon's wireline operations in California, Texas, Florida, and several other states including Connecticut, Indiana, Oregon, and Washington." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(({ q, a }) => ({
    "@type": "Question", name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

const timeline = [
  { year: "2015", title: "Acquisition Announced", desc: "Verizon agrees to sell its wireline operations in CA, TX, FL, and other states to Frontier Communications for $10.5 billion." },
  { year: "2016", title: "Transition Begins", desc: "Frontier takes over operations. Customers keep the same fiber connections — the switch happens on the backend." },
  { year: "2020", title: "Restructuring", desc: "Frontier files for Chapter 11 bankruptcy, restructures $10B+ in debt, and commits to a fiber-first strategy." },
  { year: "2021", title: "Emergence & Investment", desc: "Frontier emerges from restructuring. Announces $10 billion fiber expansion plan to reach 10 million homes." },
  { year: "2023", title: "Network Upgrades", desc: "Multi-gig speeds (2 Gig, 5 Gig) roll out. New eero routers replace aging equipment." },
  { year: "2025", title: "7 Gig Launch", desc: "Frontier launches 7 Gbps residential plans — the fastest widely available home internet in the US." },
]

const comparisons = [
  { feature: "Max Speed", fios: "940 Mbps", frontier: "7,000 Mbps", winner: "frontier" },
  { feature: "Lowest Price", fios: "$49.99/mo (300 Mbps)", frontier: "$29.99/mo (500 Mbps)", winner: "frontier" },
  { feature: "Upload Speed", fios: "Symmetrical", frontier: "Symmetrical", winner: "tie" },
  { feature: "Router", fios: "$15/mo rental", frontier: "Free eero (yours to keep)", winner: "frontier" },
  { feature: "Data Caps", fios: "None", frontier: "None", winner: "tie" },
  { feature: "Contract", fios: "1-2 year options", frontier: "No contract ever", winner: "frontier" },
  { feature: "Installation", fios: "$99-$149", frontier: "Free", winner: "frontier" },
  { feature: "Wi-Fi Technology", fios: "Wi-Fi 5/6", frontier: "Wi-Fi 6/6E/7", winner: "frontier" },
]

export default function VerizonToFrontierPage() {
  return (
    <div className="bg-white text-[#333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Verizon to Frontier" }]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 mb-8">
            <span className="text-white/50 line-through">Verizon Fios</span>
            <ArrowRightLeft className="h-5 w-5 text-[#64ffda]" />
            <span className="text-[#64ffda] font-bold">Frontier Fiber</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Verizon Fios Is Now Frontier Fiber
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Same fiber lines. Faster speeds. Lower prices. Better equipment. Here&apos;s everything that changed when Frontier took over Verizon&apos;s fiber network — and why most customers are better off.
          </p>
          <PageOrderButton className="bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl cta-pulse">
            See Frontier Plans <ArrowRight className="ml-2 h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>

      {/* What Stayed / What Changed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-12">What Changed &amp; What Stayed the Same</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" /> What Stayed the Same
              </h3>
              <ul className="space-y-3 text-green-900">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600" />Same fiber optic lines to your home</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600" />Symmetrical upload and download speeds</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600" />Unlimited data with no caps</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600" />99.9% network reliability</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600" />Same service address and connections</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6" /> What Got Better
              </h3>
              <ul className="space-y-3 text-blue-900">
                <li className="flex items-start gap-2"><Zap className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />Max speed: 940 Mbps → <strong>7,000 Mbps</strong></li>
                <li className="flex items-start gap-2"><Zap className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />Lowest price: $49.99 → <strong>$29.99/mo</strong></li>
                <li className="flex items-start gap-2"><Zap className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />Router: $15/mo rental → <strong>Free eero (yours to keep)</strong></li>
                <li className="flex items-start gap-2"><Zap className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />Installation: $99-$149 → <strong>Free</strong></li>
                <li className="flex items-start gap-2"><Zap className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />Contract: 1-2 year options → <strong>No contract</strong></li>
                <li className="flex items-start gap-2"><Zap className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />Wi-Fi: Wi-Fi 5/6 → <strong>Wi-Fi 6E / Wi-Fi 7</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Side by Side Comparison */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-10">Fios vs Frontier Fiber: Head to Head</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold text-white/60">Verizon Fios</th>
                  <th className="p-4 text-center font-semibold text-[#64ffda]">Frontier Fiber</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(({ feature, fios, frontier, winner }, i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-medium text-[#0A1E3C]">{feature}</td>
                    <td className={`p-4 text-center ${winner === "fios" ? "text-green-600 font-semibold" : "text-gray-500"}`}>{fios}</td>
                    <td className={`p-4 text-center ${winner === "frontier" ? "text-green-600 font-semibold" : winner === "tie" ? "text-gray-700" : "text-gray-500"}`}>{frontier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-12">The Full Timeline</h2>
          <div className="space-y-0">
            {timeline.map(({ year, title, desc }, i) => (
              <div key={year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0A1E3C] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{year}</div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 my-1" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-bold text-[#0A1E3C] text-lg">{title}</h3>
                  <p className="text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Plans */}
      <section className="py-16 bg-[#0A1E3C] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-4">Current Frontier Fiber Plans</h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">The network that used to be Fios — now with more speed tiers and lower prices.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Fiber 500", speed: "500/500 Mbps", price: "29.99", best: false },
              { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "49.99", best: true },
              { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "64.99", best: false },
              { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "89.99", best: false },
              { name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "109.99", best: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 ${plan.best ? "bg-[#DA202C] ring-2 ring-[#DA202C]/50" : "bg-white/10"}`}>
                {plan.best && <span className="text-xs font-bold uppercase tracking-wide text-white/80 block mb-2">Most Popular</span>}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-white/60 text-sm mb-3">{plan.speed}</p>
                <p className="text-3xl font-black">${plan.price}<span className="text-sm font-normal text-white/50">/mo</span></p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <PageOrderButton className="bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg">
              Check Availability <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-10">Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqData.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      {/* Cross Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-[#0A1E3C] text-center mb-6">Learn More</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/internet" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-center">
              <span className="font-semibold text-[#0A1E3C]">Compare All Plans</span>
              <p className="text-sm text-gray-500 mt-1">See every Frontier Fiber plan</p>
            </Link>
            <Link href="/check-availability" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-center">
              <span className="font-semibold text-[#0A1E3C]">Check Your Address</span>
              <p className="text-sm text-gray-500 mt-1">See if Frontier serves your area</p>
            </Link>
            <Link href="/blog/switching-internet-providers" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-center">
              <span className="font-semibold text-[#0A1E3C]">Switching Guide</span>
              <p className="text-sm text-gray-500 mt-1">How to switch providers smoothly</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#DA202C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Your Fiber Network Got an Upgrade</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Same reliable fiber. Faster speeds. Lower prices. No contracts. See what Frontier Fiber can do for you.</p>
          <PageOrderButton className="bg-white text-[#DA202C] font-bold h-14 px-10 rounded-xl text-lg hover:bg-gray-100">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>
    </div>
  )
}
