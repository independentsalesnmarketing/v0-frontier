import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Tv, Star, Wifi, Shield, Smartphone, ChevronRight, Zap } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Frontier Vantage 2026 | Streaming TV + Fiber Internet | No Cable Box",
  description: "Frontier Vantage is Frontier's streaming TV service for fiber internet customers. Access live TV, on-demand content, and premium channels — no cable box required. Bundled with Frontier Fiber for one simple bill.",
  alternates: { canonical: "/vantage" },
  keywords: [
    "frontier vantage", "vantage by frontier", "frontier tv service",
    "frontier streaming tv", "frontier tv and internet", "frontier cable tv",
    "frontier tv internet bundles", "frontier tv and internet packages",
  ],
  openGraph: {
    title: "Frontier Vantage Streaming TV | Live TV + Fiber Internet",
    description: "Stream 150+ live channels, on-demand movies, and cloud DVR — all bundled with Frontier Fiber. No cable box. No annual contract.",
    type: "website",
  },
}

const channels = [
  "ABC", "CBS", "NBC", "Fox", "CNN", "ESPN", "MSNBC", "Fox News",
  "HGTV", "Food Network", "Discovery", "TLC", "TNT", "TBS",
  "Disney Channel", "Cartoon Network", "Nickelodeon", "Comedy Central",
  "Bravo", "Lifetime", "Hallmark", "AMC", "BBC America", "Oxygen",
]

const plans = [
  {
    name: "Vantage Core",
    channelCount: "75+",
    price: "20",
    dvr: "50 hours cloud DVR",
    streams: "2 simultaneous streams",
    features: [
      "75+ live TV channels",
      "Local ABC, CBS, NBC, Fox",
      "50 hours cloud DVR",
      "2 streams at once",
      "ESPN & sports networks",
      "No cable box required",
    ],
    badge: null,
  },
  {
    name: "Vantage Plus",
    channelCount: "150+",
    price: "35",
    dvr: "Unlimited cloud DVR",
    streams: "Unlimited streams",
    features: [
      "150+ live TV channels",
      "Everything in Core",
      "Unlimited cloud DVR",
      "Unlimited simultaneous streams",
      "HBO Max, Peacock included",
      "4K streaming on select content",
    ],
    badge: "Most Popular",
  },
]

const benefits = [
  {
    icon: <Tv className="h-6 w-6" />,
    title: "No Cable Box Needed",
    desc: "Watch on your Smart TV, phone, tablet, laptop, or streaming stick. No hardware to rent. Just download the Vantage app.",
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Optimized for Frontier Fiber",
    desc: "Vantage is built to deliver the best streaming quality over Frontier Fiber's fast symmetrical connection. Zero buffering at 4K.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "No Annual Contract",
    desc: "Add or remove Vantage from your Frontier plan month-to-month. No contracts, no cancellation fees, ever.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Unlimited Cloud DVR",
    desc: "Record everything you want without worrying about storage limits. Watch your recordings on any device, anywhere.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Watch Anywhere",
    desc: "The Vantage app is available on iOS, Android, Roku, Fire TV, Apple TV, and any web browser. Your TV goes where you go.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "One Bill, One Provider",
    desc: "Combine Frontier Fiber internet with Vantage TV for one simple monthly bill. No juggling multiple company logins or payments.",
  },
]

const compareRows = [
  { feature: "Live TV Channels", vantage: "75–150+", cable: "150–200", streaming: "50–100" },
  { feature: "Cloud DVR", vantage: "Unlimited", cable: "Limited or $5+/mo extra", streaming: "Varies (often limited)" },
  { feature: "Cable Box Required", vantage: "No", cable: "Yes ($10–15/mo rental)", streaming: "No" },
  { feature: "Contract", vantage: "None", cable: "Usually 1–2 years", streaming: "None" },
  { feature: "Local Channels", vantage: "Yes", cable: "Yes", streaming: "Depends on market" },
  { feature: "4K Streaming", vantage: "Select content", cable: "Limited", streaming: "Yes (on premium plans)" },
  { feature: "Price (base tier)", vantage: "$20/mo add-on", cable: "$60–100/mo", streaming: "$15–35/mo" },
]

const faqData = [
  {
    q: "What is Frontier Vantage?",
    a: "Frontier Vantage is a streaming TV service from Frontier Communications available as an add-on to your Frontier Fiber internet plan. It delivers live TV, on-demand content, and a cloud DVR through an app — no cable box required.",
  },
  {
    q: "Do I need Frontier Fiber to get Vantage?",
    a: "Yes. Frontier Vantage is available as an add-on for Frontier Fiber internet customers. It's optimized to deliver the best quality over Frontier's symmetrical fiber connection.",
  },
  {
    q: "Can I watch Vantage on multiple TVs?",
    a: "Yes. The Vantage Plus plan supports unlimited simultaneous streams, so every TV, phone, or tablet in your home can watch different channels at the same time.",
  },
  {
    q: "Does Vantage include local channels?",
    a: "Yes. Vantage includes local broadcast channels (ABC, CBS, NBC, Fox, PBS) in markets where available. Coverage may vary by service area.",
  },
  {
    q: "How does the cloud DVR work?",
    a: "Vantage's cloud DVR lets you record any live channel and store recordings in the cloud — not on a physical box. Access your recordings on any device. Vantage Core includes 50 hours; Vantage Plus includes unlimited DVR storage.",
  },
  {
    q: "What devices is the Vantage app available on?",
    a: "Vantage supports iOS, Android, Roku, Amazon Fire TV, Apple TV, Google Chromecast, and any modern web browser. If it can stream Netflix, it can stream Vantage.",
  },
  {
    q: "Is there a Vantage free trial?",
    a: "Availability of free trial periods varies. Contact us when ordering Frontier Fiber + Vantage to ask about current promotional trial offers.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function VantagePage() {
  return (
    <div className="bg-white text-[#333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Frontier Vantage" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3C] via-[#12305e] to-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#00b7c3]/20 text-[#00b7c3] rounded-full px-4 py-2 mb-6 text-sm font-bold">
            <Tv className="h-4 w-4" />
            Vantage by Frontier
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Frontier Vantage Streaming TV
            <span className="block text-[#00b7c3] mt-2">Live TV Without the Cable Box.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            150+ live channels, unlimited cloud DVR, and on-demand content — all bundled with your Frontier Fiber plan. No cable box. No annual contract. Starting at <strong className="text-white">$20/mo</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
              Get Vantage + Fiber <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
            <Link
              href="/tv-and-bundles"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold h-14 px-8 rounded-xl text-base border border-white/20 transition-colors"
            >
              View All TV Options
            </Link>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-4">Vantage TV Plans</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Add Vantage to any Frontier Fiber plan. Both tiers are month-to-month with no installation fees.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 relative bg-white ${plan.badge ? "border-[#DA202C] shadow-xl" : "border-gray-200"}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DA202C] text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-lg font-black text-[#0A1E3C]">{plan.name}</h3>
                  <span className="bg-[#0A1E3C]/10 text-[#0A1E3C] text-xs font-bold px-2 py-1 rounded-full">{plan.channelCount} Channels</span>
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-black text-[#0A1E3C]">${plan.price}</span>
                  <span className="text-sm text-gray-500 mb-2">/mo add-on</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <PageOrderButton
                  className={`w-full font-bold py-3 rounded-xl text-sm ${plan.badge ? "bg-[#DA202C] hover:bg-[#b71c1c] text-white" : "bg-[#0A1E3C] hover:bg-[#12305e] text-white"}`}
                >
                  Add {plan.name}
                </PageOrderButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">Why Vantage Beats Traditional Cable TV</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-xl flex items-center justify-center text-[#00b7c3] mb-4">
                  {b.icon}
                </div>
                <h3 className="font-bold text-[#0A1E3C] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel List */}
      <section className="py-16 px-4 bg-[#0A1E3C] text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-4">Top Channels Included</h2>
          <p className="text-center text-white/60 mb-10 text-sm">Partial channel listing. Full channel lineup varies by plan and market.</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {channels.map((ch, i) => (
              <span key={i} className="bg-white/10 text-white/80 text-sm font-medium px-3 py-1.5 rounded-full border border-white/10">
                {ch}
              </span>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-8">+ 100+ more channels depending on your plan and service area.</p>
        </div>
      </section>

      {/* Compare */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">
            Vantage vs. Cable vs. Other Streaming
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="text-left py-4 px-5 font-bold rounded-tl-2xl">Feature</th>
                  <th className="text-center py-4 px-5 font-bold text-[#00b7c3]">Vantage</th>
                  <th className="text-center py-4 px-5 font-bold">Cable TV</th>
                  <th className="text-center py-4 px-5 font-bold rounded-tr-2xl">Other Streaming</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#f8f9fb]">
                    <td className="py-4 px-5 font-medium text-[#0A1E3C]">{row.feature}</td>
                    <td className="py-4 px-5 text-center text-[#00b7c3] font-semibold">{row.vantage}</td>
                    <td className="py-4 px-5 text-center text-gray-600">{row.cable}</td>
                    <td className="py-4 px-5 text-center text-gray-600">{row.streaming}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">Frontier Vantage FAQ</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-[#f8f9fb] rounded-xl border border-gray-100 group">
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
      <section className="py-16 px-4 bg-[#f8f9fb] border-t border-gray-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] mb-4">
            Add Vantage to Your Frontier Fiber Plan
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get the complete home connectivity package — fast fiber internet plus live streaming TV — with one provider, one bill, and no contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
              Order Fiber + Vantage <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
            <Link
              href="/bundles"
              className="inline-flex items-center gap-2 bg-[#0A1E3C] hover:bg-[#12305e] text-white font-bold h-14 px-8 rounded-xl text-base transition-colors"
            >
              View All Bundles <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
