import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Gift, ArrowRight, Shield, Wifi, Zap, Star, Phone, Users, Clock } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Frontier New Customer Deals 2026 | Fiber Internet from $29.99/mo",
  description:
    "Exclusive Frontier new customer deals: fiber internet from $29.99/mo, free installation, free eero WiFi router, and Visa reward cards up to $200. Switch to Frontier today.",
  alternates: { canonical: "/new-customer" },
  openGraph: {
    title: "Frontier New Customer Deals 2026 — Fiber from $29.99/mo",
    description: "Switch to Frontier Fiber and save. Plans from $29.99/mo, free installation, and Visa reward cards for new customers.",
    type: "website",
  },
  keywords: [
    "frontier new customer",
    "frontier new customer deals",
    "frontier new customer offers",
    "switch to frontier",
    "frontier sign up",
    "frontier first time customer",
    "frontier internet new service",
    "frontier internet new customer",
    "frontier communications new customer",
    "frontier communications new service",
    "frontier new service",
    "get frontier internet",
    "frontier new customer deals",
    "frontier internet specials",
    "frontier internet deals for new customers",
    "frontier internet promotions",
    "frontier internet discounts",
    "frontier internet offers",
    "frontier visa reward card",
    "frontier new haven",
    "frontier internet sales",
    "frontier internet special offers",
    "frontier internet promo",
  ],
}

const steps = [
  { step: "1", title: "Check Availability", description: "Enter your ZIP code to confirm Frontier Fiber is available at your address." },
  { step: "2", title: "Choose Your Plan", description: "Pick the speed tier that fits your household — from 500 Mbps to 5 Gig." },
  { step: "3", title: "Schedule Install", description: "Choose a convenient date. A Frontier technician handles everything for free." },
  { step: "4", title: "Get Connected", description: "Enjoy lightning-fast fiber internet with no data caps and no contracts." },
]

const newCustomerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What do new Frontier customers get?", acceptedAnswer: { "@type": "Answer", text: "New Frontier Fiber customers get free professional installation, a free eero WiFi router, unlimited data with no caps, no annual contracts, and a Visa® Reward Card worth $50–$200 depending on the plan selected." } },
    { "@type": "Question", name: "Is there a credit check for Frontier?", acceptedAnswer: { "@type": "Answer", text: "Frontier may run a soft credit check during signup. This does not affect your credit score. Most customers are approved quickly." } },
    { "@type": "Question", name: "How long does Frontier installation take?", acceptedAnswer: { "@type": "Answer", text: "A new Frontier Fiber installation typically takes 2-3 hours. A technician handles everything, including running the fiber line and setting up your router." } },
    { "@type": "Question", name: "Can I switch from another provider without losing internet?", acceptedAnswer: { "@type": "Answer", text: "Yes. We recommend scheduling your Frontier installation before canceling your current provider so there's no gap in service. Overlap by a day or two to be safe." } },
  ],
}

export default function NewCustomerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newCustomerFaqSchema) }} />
      <Breadcrumbs items={[{ label: "New Customer Offers" }]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#DA202C]/10 blur-[130px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#64ffda]/10 border border-[#64ffda]/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-[#64ffda]" />
              <span className="text-sm font-bold text-[#64ffda] uppercase tracking-wide">New Customer Exclusive</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Welcome to
              <br />
              <span className="text-[#64ffda]">Faster Internet</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Switching to Frontier Fiber is simple. Get symmetrical speeds up to 7 Gig, free installation, a free eero router, and a Visa® reward card — all with no contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PageOrderButton className="inline-flex items-center justify-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg cta-pulse shadow-xl">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </PageOrderButton>
              <Link href="/deals" className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 font-bold h-14 px-8 rounded-xl bg-transparent">
                View All Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0A1E3C] text-center mb-4">What New Customers Get</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Every Frontier Fiber plan comes loaded with value — no hidden fees, no surprises.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Wifi className="h-6 w-6" />, label: "Free eero Router" },
              { icon: <Shield className="h-6 w-6" />, label: "Free Installation" },
              { icon: <Zap className="h-6 w-6" />, label: "Unlimited Data" },
              { icon: <Clock className="h-6 w-6" />, label: "No Contracts" },
              { icon: <Gift className="h-6 w-6" />, label: "Visa® Reward Card" },
              { icon: <Users className="h-6 w-6" />, label: "24/7 Support" },
            ].map(({ icon, label }) => (
              <div key={label} className="text-center p-4 rounded-xl bg-gray-50">
                <div className="w-12 h-12 rounded-full bg-[#DA202C]/10 text-[#DA202C] flex items-center justify-center mx-auto mb-3">{icon}</div>
                <p className="text-sm font-semibold text-[#0A1E3C]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-[#04111f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-4">Choose Your Plan</h2>
          <p className="text-white/50 text-center mb-12">Pick the speed that fits your household.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Fiber 500", speed: "500/500 Mbps", price: "29.99", reward: "$50 Visa® Card", key: "fiber-500", best: "1-3 people" },
              { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "49.99", reward: "$100 Visa® Card", key: "fiber-1-gig", best: "3-5 people" },
              { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "64.99", reward: "$150 Visa® Card", key: "fiber-2-gig", best: "5-8+ people", popular: true },
              { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "89.99", reward: "$200 Visa® Card", key: "fiber-5-gig", best: "Power users" },
            ].map((plan) => (
              <div key={plan.key} className={`rounded-2xl p-6 flex flex-col border ${plan.popular ? "bg-[#0A1E3C] border-[#DA202C]/60 ring-1 ring-[#DA202C]/30" : "bg-white/5 border-white/10"}`}>
                {plan.popular && <span className="text-xs font-bold text-[#DA202C] uppercase tracking-widest mb-2">Most Popular</span>}
                <h3 className="text-lg font-black text-white">{plan.name}</h3>
                <p className="text-sm text-white/45 mb-3">{plan.speed}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black text-white">${plan.price.split(".")[0]}</span>
                  <span className="text-white/60">.{plan.price.split(".")[1]}/mo</span>
                </div>
                <p className="text-xs text-white/35 mb-4">Best for {plan.best}</p>
                <div className="flex items-center gap-2 text-xs text-[#64ffda] mb-4">
                  <Gift className="h-3.5 w-3.5" />{plan.reward}
                </div>
                <PageOrderButton planName={plan.key} className={`w-full rounded-xl h-11 font-bold text-sm mt-auto ${plan.popular ? "bg-[#DA202C] hover:bg-[#b71c1c] text-white" : "bg-white/10 hover:bg-white/15 text-white border border-white/15"}`}>
                  Sign Up Now
                </PageOrderButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0A1E3C] text-center mb-12">Getting Started Is Easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#DA202C] text-white font-black text-lg flex items-center justify-center mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-[#0A1E3C] mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switching CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-[#0A1E3C] mb-4">Switching Providers? We Make It Simple.</h2>
            <p className="text-gray-600 mb-8">
              No need to coordinate with your old provider. Just sign up with Frontier, schedule your installation, and cancel your old service after you&apos;re connected. We handle everything on our end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PageOrderButton className="inline-flex items-center justify-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-12 px-8 rounded-xl">
                Switch to Frontier
                <ArrowRight className="ml-2 h-4 w-4" />
              </PageOrderButton>
              <Link href="/blog/switching-internet-providers" className="inline-flex items-center justify-center border border-gray-300 text-[#0A1E3C] font-medium h-12 px-8 rounded-xl hover:bg-gray-100">
                Read Our Switching Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-[#0A1E3C] text-center mb-12">New Customer FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "What do new Frontier customers get?", a: "Free installation, a free eero WiFi router, unlimited data, no contracts, and a Visa® Reward Card worth $50–$200 depending on your plan." },
              { q: "Is there a credit check?", a: "Frontier may run a soft credit check during signup. This does not affect your credit score and most customers are approved quickly." },
              { q: "How long does installation take?", a: "A new Frontier Fiber installation typically takes 2-3 hours. A technician handles everything from running the fiber line to setting up your router." },
              { q: "Can I switch without losing internet?", a: "Yes. Schedule your Frontier installation before canceling your current provider to avoid any gap in service. Overlap by a day or two." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0A1E3C] mb-2">{q}</h3>
                <p className="text-gray-600 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0A1E3C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Join Frontier?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Order online in minutes. Free installation, no contracts, and Visa® reward cards for new customers.</p>
          <PageOrderButton className="inline-flex items-center justify-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg cta-pulse shadow-xl">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>
    </>
  )
}
