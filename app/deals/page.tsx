import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Gift, ArrowRight, Clock, Shield, Wifi, Zap, Star, Phone } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"
import SeoFreshnessNote from "@/components/SeoFreshnessNote"
import KeyFacts from "@/components/KeyFacts"

export const metadata: Metadata = {
  title: "Frontier Internet Deals 2026 | Fiber from $29.99/mo — Save Today",
  description:
    "Current Frontier internet deals: fiber plans from $29.99/mo, free installation, free eero router, and Visa reward cards up to $200. Limited-time promotions for new customers.",
  alternates: { canonical: "/deals" },
  openGraph: {
    title: "Frontier Internet Deals 2026 — Fiber from $29.99/mo",
    description:
      "Save on Frontier Fiber internet. Plans from $29.99/mo with free installation, free router, and Visa reward cards.",
    type: "website",
  },
  keywords: [
    "frontier deals",
    "frontier internet deals",
    "frontier promotions",
    "frontier specials 2026",
    "frontier fiber deals",
    "frontier discount",
    "frontier internet offers",
    "frontier new customer deals",
    "frontier internet discounts",
    "frontier internet specials",
    "frontier high speed internet deals",
    "frontier internet deals for new customers",
    "frontier internet deals for existing customers",
    "frontier new customer offers",
    "frontier cable deals",
    "frontier internet promotions",
    "frontier internet special offers",
    "frontier communications deals",
    "frontier communications internet deals",
    "frontier visa reward card",
    "frontier fiber cost",
    "frontier internet prices",
    "frontier internet rates",
    "frontier plans and pricing",
  ],
}

const dealsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does Frontier require a contract?", acceptedAnswer: { "@type": "Answer", text: "No. All Frontier Fiber plans are contract-free. You can cancel anytime without early termination fees." } },
    { "@type": "Question", name: "How do I get the Visa® Reward Card?", acceptedAnswer: { "@type": "Answer", text: "After ordering Frontier Fiber through an authorized retailer, you'll receive your Visa® Reward Card by mail within 6-8 weeks of activation. The card amount depends on your chosen plan." } },
    { "@type": "Question", name: "Is installation really free?", acceptedAnswer: { "@type": "Answer", text: "Yes. Professional installation is included at no extra charge on all Frontier Fiber plans. A technician will come to your home and set everything up." } },
    { "@type": "Question", name: "Can I keep my current phone number if I switch?", acceptedAnswer: { "@type": "Answer", text: "Yes. Frontier supports number porting, so you can keep your existing phone number when you add Digital Voice service to your plan." } },
  ],
}

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Frontier Fiber Internet Deals — March 2026",
  description: "Current promotional offers for Frontier Fiber Internet through an authorized retailer.",
  url: "https://frontier-deals.com/deals",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "Offer",
      name: "Fiber 500 Deal",
      description: "500/500 Mbps fiber internet with $50 Visa Reward Card",
      price: "29.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-04-30",
    },
    {
      "@type": "Offer",
      name: "Fiber 1 Gig Deal",
      description: "1,000/1,000 Mbps fiber internet with $100 Visa Reward Card",
      price: "49.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-04-30",
    },
    {
      "@type": "Offer",
      name: "Fiber 2 Gig Deal",
      description: "2,000/2,000 Mbps fiber internet with $150 Visa Reward Card",
      price: "64.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-04-30",
    },
    {
      "@type": "Offer",
      name: "Fiber 5 Gig Deal",
      description: "5,000/5,000 Mbps fiber internet with $200 Visa Reward Card",
      price: "89.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-04-30",
    },
  ],
}

const deals = [
  {
    name: "Fiber 500",
    speed: "500/500 Mbps",
    price: "29.99",
    wasPrice: "39.99",
    reward: "$50 Visa® Reward Card",
    features: ["Best for 2–4 people", "Stream HD on several devices", "Free eero Wi-Fi 6 router", "Unlimited data"],
    planKey: "fiber-500",
    popular: false,
  },
  {
    name: "Fiber 1 Gig",
    speed: "1,000/1,000 Mbps",
    price: "49.99",
    wasPrice: "59.99",
    reward: "$100 Visa® Reward Card",
    features: ["Smart homes with many devices", "4K streaming & gaming", "Work from home without lag", "Free eero Pro router"],
    planKey: "fiber-1-gig",
    popular: false,
  },
  {
    name: "Fiber 2 Gig",
    speed: "2,000/2,000 Mbps",
    price: "64.99",
    wasPrice: "74.99",
    reward: "$150 Visa® Reward Card",
    features: ["Ultra-fast for large smart homes", "Ideal for gaming & 4K/8K", "Power dozens of devices", "Free eero Pro 6E router"],
    planKey: "fiber-2-gig",
    popular: true,
  },
  {
    name: "Fiber 5 Gig",
    speed: "5,000/5,000 Mbps",
    price: "89.99",
    wasPrice: "99.99",
    reward: "$200 Visa® Reward Card",
    features: ["Our fastest available speed", "Power hundreds of devices", "Max performance for power users", "Free eero Max 7 router"],
    planKey: "fiber-5-gig",
    popular: false,
  },
]

export default function DealsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dealsFaqSchema) }} />

      <Breadcrumbs items={[{ label: "Deals & Promotions" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3C] via-[#0A1E3C] to-[#DA202C]/20 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#DA202C]/20 border border-[#DA202C]/40 rounded-full px-4 py-1.5 mb-6">
            <Gift className="w-4 h-4 text-[#DA202C]" />
            <span className="text-sm font-bold text-white uppercase tracking-wide">Limited-Time Offers</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Frontier Fiber Deals
            <br />
            <span className="text-[#64ffda]">March 2026</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Save on fiber internet with exclusive promotions. Free installation, free router, Visa® reward cards, and prices starting at just $29.99/mo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Free Installation", "No Contracts", "Visa® Reward Cards", "Free WiFi Router"].map((perk) => (
              <div key={perk} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <CheckCircle2 className="w-4 h-4 text-[#64ffda]" />
                <span className="text-sm font-medium text-white/90">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freshness + Key Facts */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 space-y-4 max-w-4xl">
          <SeoFreshnessNote />
          <KeyFacts
            title="Frontier Fiber Deals — March 2026"
            facts={[
              { label: "Promotional Period", value: "March 2026 — limited time" },
              { label: "Visa Reward Card Range", value: "$50 (500 Mbps) to $200 (5 Gig)" },
              { label: "Installation Fee", value: "$0 — included on all plans" },
              { label: "Starting Price", value: "$29.99/mo with AutoPay" },
              { label: "Contract Required", value: "No — cancel anytime" },
              { label: "Router", value: "Free eero Wi-Fi router on every plan" },
            ]}
          />
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-20 bg-[#04111f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-4">Current Promotions</h2>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            All deals include Auto Pay pricing, unlimited data, free professional installation, and a free Wi-Fi 6 router.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {deals.map((deal) => (
              <div
                key={deal.planKey}
                className={`rounded-2xl overflow-hidden flex flex-col border transition-transform hover:-translate-y-1 ${
                  deal.popular
                    ? "bg-[#0A1E3C] border-[#DA202C]/70 shadow-2xl ring-1 ring-[#DA202C]/40 scale-[1.03]"
                    : "bg-white/5 backdrop-blur border-white/10"
                }`}
              >
                <div className={`text-center py-2.5 text-xs font-bold uppercase tracking-widest ${
                  deal.popular ? "bg-[#DA202C] text-white" : "bg-white/5 text-white/40"
                }`}>
                  {deal.popular ? "Best Deal" : "Save $" + (parseFloat(deal.wasPrice) - parseFloat(deal.price)).toFixed(0) + "/mo"}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-white">{deal.name}</h3>
                  <p className="text-sm text-white/45 mb-4">{deal.speed}</p>
                  <div className="mb-1 flex items-end gap-2">
                    <div className="flex items-start leading-none">
                      <span className="text-lg font-bold text-white/70 mt-1.5">$</span>
                      <span className="text-4xl font-black text-white">{deal.price.split(".")[0]}</span>
                      <span className="text-lg font-bold text-white/70 mt-1.5">.{deal.price.split(".")[1]}</span>
                    </div>
                    <span className="text-sm text-white/35 line-through mb-1.5">${deal.wasPrice}</span>
                  </div>
                  <p className="text-xs text-white/35 mb-6">/mo with Auto Pay</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {deal.features.map((f) => (
                      <li key={f} className="flex items-start text-sm">
                        <CheckCircle2 className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${deal.popular ? "text-[#DA202C]" : "text-[#64ffda]"}`} />
                        <span className="text-white/70">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <PageOrderButton planName={deal.planKey} className={`w-full rounded-xl h-11 font-bold text-sm ${
                    deal.popular
                      ? "bg-[#DA202C] hover:bg-[#b71c1c] text-white shadow-lg"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
                  }`}>
                    Claim This Deal
                  </PageOrderButton>
                </div>
                <div className={`flex items-center gap-2 px-5 py-3 text-xs font-semibold border-t ${
                  deal.popular ? "border-[#DA202C]/30 text-[#ffcdd2] bg-[#DA202C]/10" : "border-white/8 text-[#64ffda] bg-white/5"
                }`}>
                  <Gift className="h-3.5 w-3.5 flex-shrink-0" />
                  {deal.reward}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Perks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0A1E3C] text-center mb-12">Every Deal Includes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Wifi className="h-7 w-7 text-[#DA202C]" />, title: "Free eero Router", body: "Premium Wi-Fi 6 router included at no extra cost." },
              { icon: <Shield className="h-7 w-7 text-[#DA202C]" />, title: "Free Installation", body: "Professional in-home setup — $0 installation fee." },
              { icon: <Zap className="h-7 w-7 text-[#DA202C]" />, title: "Unlimited Data", body: "No data caps, no throttling, no overage charges." },
              { icon: <Clock className="h-7 w-7 text-[#DA202C]" />, title: "No Contracts", body: "Month-to-month service. Cancel anytime." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#DA202C]/10 flex items-center justify-center mx-auto mb-4">{icon}</div>
                <h3 className="font-bold text-sm text-[#0A1E3C] mb-1.5">{title}</h3>
                <p className="text-xs text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fine Print */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 max-w-3xl mx-auto">
            Prices shown reflect Auto Pay &amp; paperless billing discount. Visa® Reward Card mailed after 90 days of active service.
            Standard rates apply after promotional period. All plans include unlimited data, no contracts, and free standard installation.
            frontier-deals.com is an authorized retailer — not affiliated with Frontier Communications parent company.
          </p>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0A1E3C] text-center mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link href="/internet" className="text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Compare Plans</p>
              <p className="text-xs text-gray-500 mt-1">See all 5 fiber plans</p>
            </Link>
            <Link href="/reviews" className="text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Customer Reviews</p>
              <p className="text-xs text-gray-500 mt-1">Rated 4.8/5 stars</p>
            </Link>
            <Link href="/coverage" className="text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Coverage Map</p>
              <p className="text-xs text-gray-500 mt-1">Check your address</p>
            </Link>
            <Link href="/blog" className="text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Internet Guides</p>
              <p className="text-xs text-gray-500 mt-1">Tips & comparisons</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-[#0A1E3C] text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "Does Frontier require a contract?", a: "No. All Frontier Fiber plans are contract-free. You can cancel anytime without early termination fees." },
              { q: "How do I get the Visa® Reward Card?", a: "After ordering Frontier Fiber through an authorized retailer, you'll receive your Visa® Reward Card by mail within 6-8 weeks of activation. The card amount depends on your chosen plan." },
              { q: "Is installation really free?", a: "Yes. Professional installation is included at no extra charge on all Frontier Fiber plans. A technician will come to your home and set everything up." },
              { q: "Can I keep my current phone number if I switch?", a: "Yes. Frontier supports number porting, so you can keep your existing phone number when you add Digital Voice service to your plan." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0A1E3C] mb-2">{q}</h3>
                <p className="text-gray-600 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#DA202C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Don&apos;t Miss These Deals</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Order now through your authorized Frontier retailer and lock in these promotional prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center justify-center bg-white text-[#DA202C] font-bold h-14 px-10 rounded-xl text-lg hover:bg-gray-100 transition-colors">
              Order Online Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>
    </>
  )
}
