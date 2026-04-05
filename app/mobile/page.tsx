import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Smartphone, Wifi, Shield, Zap, Star, Users, Phone, Globe } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Frontier Mobile Phone Service — Cell Plans Bundled With Fiber",
  description: "Frontier Mobile brings wireless service to your Frontier Fiber account. Unlimited talk, text & data on a nationwide 5G/4G LTE network. Starting at $25/line/mo when bundled with Frontier Fiber internet.",
  alternates: { canonical: "/mobile" },
  keywords: [
    "frontier mobile phone service", "frontier cell phone service", "frontier cell service",
    "frontier cellular service", "frontier cell phone", "frontier mobile",
    "frontier wireless service", "frontier phone plans", "frontier mobile plans",
  ],
  openGraph: {
    title: "Frontier Mobile Phone Service | Wireless + Fiber Bundle",
    description: "Add Frontier Mobile to your fiber plan. Unlimited nationwide 5G coverage, no annual contracts, and bundled savings when paired with Frontier Fiber.",
    type: "website",
  },
}

const plans = [
  {
    name: "Frontier Mobile Unlimited",
    price: "25",
    lines: "per line/mo with Fiber",
    features: [
      "Unlimited talk & text",
      "Unlimited 5G/4G LTE data",
      "Wi-Fi calling included",
      "Mobile hotspot (15 GB/mo)",
      "No annual contract",
      "Works with your current phone",
    ],
    badge: null,
    highlight: false,
  },
  {
    name: "Frontier Mobile Unlimited Plus",
    price: "35",
    lines: "per line/mo with Fiber",
    features: [
      "Everything in Unlimited",
      "50 GB premium mobile hotspot",
      "International texting (35+ countries)",
      "HD video streaming",
      "Advanced spam call protection",
      "Priority network access",
    ],
    badge: "Best Value",
    highlight: true,
  },
]

const reasons = [
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Fiber + Mobile Bundle Savings",
    desc: "When you bundle Frontier Mobile with any Frontier Fiber plan, you unlock discounted rates not available to standalone customers.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Nationwide 5G Coverage",
    desc: "Frontier Mobile operates on a major nationwide 5G/4G LTE network covering 99% of Americans — wherever you go, you're covered.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "No Annual Contract",
    desc: "Like all Frontier services, Frontier Mobile has no annual contract. Pay month-to-month and cancel or change plans anytime.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Bring Your Own Device",
    desc: "Keep your current iPhone or Android phone. Frontier Mobile is compatible with most unlocked devices. Check BYOD compatibility online.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Wi-Fi Calling on Fiber",
    desc: "When you're home, your mobile calls route over your Frontier Fiber connection — crystal-clear call quality, no dead spots.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Multi-Line Family Savings",
    desc: "Add multiple lines for your family and save more per line. Bundle with Frontier Fiber for the best household value.",
  },
]

const faqData = [
  {
    q: "What network does Frontier Mobile use?",
    a: "Frontier Mobile uses a major nationwide 5G/4G LTE network that covers 99% of Americans, including broad rural coverage.",
  },
  {
    q: "Do I need Frontier Fiber to get Frontier Mobile?",
    a: "The bundled pricing shown is for Frontier Fiber internet customers. The discounted mobile rates apply when you have an active Frontier Fiber plan at the same service address.",
  },
  {
    q: "Can I keep my current phone number?",
    a: "Yes. You can port your existing mobile number to Frontier Mobile at no charge. The process typically takes 1-3 business days.",
  },
  {
    q: "Can I bring my own phone?",
    a: "Yes. Most unlocked GSM-compatible smartphones work with Frontier Mobile. You can check device compatibility at checkout, and Frontier also sells new and refurbished phones.",
  },
  {
    q: "Does Frontier Mobile have a data cap?",
    a: "Frontier Mobile Unlimited plans include unlimited data with no hard cap. During periods of network congestion, customers who have used over 30 GB in a billing cycle may experience reduced speeds temporarily.",
  },
  {
    q: "Is there a mobile hotspot included?",
    a: "Yes. The Unlimited plan includes 15 GB of high-speed mobile hotspot data per month. The Unlimited Plus plan includes 50 GB.",
  },
  {
    q: "What happens to my mobile plan if I cancel Frontier Fiber?",
    a: "If you cancel your Frontier Fiber internet, your mobile plan rate will adjust to the standalone mobile pricing. We recommend contacting us before making any changes to understand your options.",
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Frontier Mobile Phone Service",
  description: "Unlimited 5G/4G LTE mobile phone service bundled with Frontier Fiber internet. Starting at $25/line/month.",
  brand: { "@type": "Brand", name: "Frontier Communications" },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "25.00",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    url: "https://frontier-deals.com/mobile",
  },
}

export default function MobilePage() {
  return (
    <div className="bg-white text-[#333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Breadcrumbs items={[{ label: "Frontier Mobile" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3C] via-[#12305e] to-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#DA202C]/20 text-[#DA202C] rounded-full px-4 py-2 mb-6 text-sm font-bold">
            <Smartphone className="h-4 w-4" />
            Frontier Mobile
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Frontier Mobile Phone Service
            <span className="block text-[#00b7c3] mt-2">Wireless + Fiber. One Bill.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Unlimited nationwide 5G coverage starting at <strong className="text-white">$25/line/mo</strong> when bundled with Frontier Fiber. No annual contracts. Bring your own phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
              Get Frontier Mobile <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
            <Link
              href="/internet"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold h-14 px-8 rounded-xl text-base border border-white/20 transition-colors"
            >
              View Fiber Plans
            </Link>
          </div>
          <p className="text-xs text-white/40 mt-6">Mobile bundled pricing available with any active Frontier Fiber internet plan.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-4">Frontier Mobile Plans</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Both plans require an active Frontier Fiber internet subscription to receive the bundled rate.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 relative ${plan.highlight ? "border-[#DA202C] bg-white shadow-xl" : "border-gray-200 bg-white"}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DA202C] text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-lg font-black text-[#0A1E3C] mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-black text-[#0A1E3C]">${plan.price}</span>
                  <span className="text-sm text-gray-500 mb-2">/{plan.lines}</span>
                </div>
                <ul className="space-y-2 mt-6 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <PageOrderButton
                  className={`w-full font-bold py-3 rounded-xl text-sm ${plan.highlight ? "bg-[#DA202C] hover:bg-[#b71c1c] text-white" : "bg-[#0A1E3C] hover:bg-[#12305e] text-white"}`}
                >
                  Select {plan.name}
                </PageOrderButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Frontier Mobile */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-4">
            Why Frontier Mobile?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            One provider for your home internet and mobile service means simplified billing, bundled savings, and seamless connectivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-xl flex items-center justify-center text-[#00b7c3] mb-4">
                  {r.icon}
                </div>
                <h3 className="font-bold text-[#0A1E3C] mb-2">{r.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Banner */}
      <section className="py-16 px-4 bg-[#0A1E3C] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Star className="h-10 w-10 text-[#00b7c3] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-black mb-4">Bundle & Save More</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Frontier Fiber 500 starts at $34.99/mo. Add Frontier Mobile for $25/line/mo. Together, that&apos;s whole-home fiber plus unlimited 5G wireless — for less than most standalone phone bills alone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-[#00b7c3]">$34.99</p>
              <p className="text-sm text-white/60">Fiber 500/mo</p>
            </div>
            <div className="flex items-center justify-center text-2xl font-bold text-white/40">+</div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-[#DA202C]">$25</p>
              <p className="text-sm text-white/60">Mobile/line/mo</p>
            </div>
          </div>
          <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
            Start My Bundle <ArrowRight className="h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">
            Frontier Mobile FAQ
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 group">
                <summary className="p-5 font-bold text-[#0A1E3C] cursor-pointer hover:text-[#00b7c3] transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <Phone className="h-4 w-4 text-gray-400 group-open:text-[#00b7c3] transition-colors flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] mb-4">
            Ready to Add Frontier Mobile?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Check availability at your address and get started with Frontier Fiber + Mobile today. No annual contracts, free to check.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl">
              Check Availability <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
            <Link
              href="/home-phone"
              className="inline-flex items-center gap-2 bg-[#0A1E3C] hover:bg-[#12305e] text-white font-bold h-14 px-8 rounded-xl text-base transition-colors"
            >
              View Home Phone Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
