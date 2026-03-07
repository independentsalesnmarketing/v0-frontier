import type { Metadata } from "next"
import Link from "next/link"
import { Check, Mail, MapPin, Shield, Award, Users, Star } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "About Us | Frontier Deals — Authorized Frontier Retailer",
  description:
    "Frontier Deals is an authorized retailer of Frontier Communications fiber internet services. We help customers compare plans, check availability, and order Frontier service — with dedicated support.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Frontier Deals — Authorized Frontier Retailer",
    description:
      "We are an authorized Frontier retailer helping customers find the right fiber internet plan. Not affiliated with Frontier Communications parent company.",
  },
}

const retailerSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://frontier-deals.com/#organization",
  name: "Frontier Deals",
  url: "https://frontier-deals.com",
  logo: "https://frontier-deals.com/android-chrome-192x192.png",
  description:
    "Authorized retailer of Frontier Communications fiber internet services. We help residential and business customers compare plans, check availability, and order service.",
  email: "support@frontier-deals.com",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English", "Spanish"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "21:00",
    },
  },
  sameAs: ["https://frontier-deals.com"],
}

const TEAM = [
  {
    name: "Sarah Johnson",
    role: "Senior Technology Writer",
    bio: "Sarah has 15+ years in telecommunications and consumer technology. She writes in-depth guides on fiber internet, home networking, and broadband policy for frontier-deals.com readers.",
    credentials: ["Certified Network Professional", "M.S. Telecommunications", "Technical Writing Fellow"],
  },
  {
    name: "Marcus Chen",
    role: "Internet Technology Analyst",
    bio: "Marcus specializes in broadband technology analysis, ISP comparisons, and speed optimization. His work helps readers make informed decisions when switching or upgrading their internet service.",
    credentials: ["CompTIA Network+", "B.S. Computer Science", "Former ISP Network Engineer"],
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(retailerSchema) }}
      />
      <div className="bg-white min-h-screen">
        <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

        {/* Hero */}
        <section className="bg-[#0A1E3C] text-white py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#DA202C]/20 border border-[#DA202C]/40 text-[#DA202C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-3.5 h-3.5" /> Authorized Retailer
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
              About Frontier Deals
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              We are an independent authorized retailer of Frontier Communications services —
              not Frontier Communications itself. Our job is to help you find the right
              Frontier fiber plan, verify availability at your address, and get you connected.
            </p>
          </div>
        </section>

        {/* What is an Authorized Retailer */}
        <section className="py-16 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-black text-[#0A1E3C] mb-6">What Is an Authorized Retailer?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Frontier Communications authorizes select independent businesses to sell Frontier
                  services on their behalf. As an authorized retailer, we can offer the same plans,
                  pricing, and promotions available directly from Frontier — with added local support
                  and a smoother ordering experience.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Think of us the way you think of an authorized Apple retailer or a Verizon Premium
                  Retailer — same products, same service, with a dedicated team to answer your questions
                  and guide you through the process.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-[#0A1E3C] text-lg mb-2">What You Get Through Us</h3>
                {[
                  "Same Frontier plans and pricing",
                  "Same professional installation",
                  "Free availability check at your address",
                  "Plain-English plan comparison",
                  "Dedicated online support",
                  "Help with first-time setup questions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#DA202C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-black text-[#0A1E3C] mb-10">Why Customers Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Award className="w-6 h-6 text-[#DA202C]" />,
                  title: "Authorized & Verified",
                  desc: "We are an officially authorized Frontier retailer. Every order goes through Frontier's official systems — the same as ordering directly.",
                },
                {
                  icon: <Users className="w-6 h-6 text-[#DA202C]" />,
                  title: "Dedicated Sales Support",
                  desc: "Our team is available 8 AM–9 PM every day to answer questions, compare plans, and help you choose the right service for your household.",
                },
                {
                  icon: <Star className="w-6 h-6 text-[#DA202C]" />,
                  title: "Unbiased Plan Guidance",
                  desc: "We'll tell you honestly which plan fits your usage — even if it's the cheaper option. Our goal is a customer who's happy long-term, not just at signup.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-11 h-11 bg-[#DA202C]/10 rounded-xl flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <h3 className="font-bold text-[#0A1E3C] mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Team — E-E-A-T */}
        <section className="py-16 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-black text-[#0A1E3C] mb-3">Our Editorial Team</h2>
            <p className="text-gray-500 mb-10">
              Our guides and comparisons are written by independent technology experts — not marketing
              copywriters. Every article is reviewed for accuracy before publication.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {TEAM.map(({ name, role, bio, credentials }) => (
                <div key={name} className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DA202C] to-[#0A1E3C] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-bold text-[#0A1E3C]">{name}</p>
                      <p className="text-[#DA202C] text-sm font-medium">{role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {credentials.map((c) => (
                      <span key={c} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="py-16 bg-[#0A1E3C]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-black text-white mb-4">Full Disclosure</h2>
            <p className="text-white/65 leading-relaxed max-w-2xl mx-auto mb-8 text-sm">
              frontier-deals.com is operated by an independent authorized retailer of Frontier
              Communications services. We are <strong className="text-white">not</strong> Frontier
              Communications or any of its affiliates or subsidiaries. Frontier, the Frontier logo, and
              all related marks are trademarks of Frontier Communications Parent Inc. Pricing shown
              reflects current Frontier promotions and may change. Service availability varies by address.
              Authorized retailer status does not imply exclusive arrangement with Frontier.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
              <Link
                href="/internet"
                className="flex items-center justify-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold px-8 py-3 rounded-xl transition-colors"
              >
                View Internet Plans
              </Link>
              <a
                href="https://frontier.com/helpcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4" /> Get Support
              </a>
            </div>
          </div>
        </section>

        {/* Services CTA */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-[#0A1E3C] mb-6">Explore Frontier Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: "/internet", label: "Fiber Internet", sub: "From $29.99/mo" },
                { href: "/bundles", label: "Bundles", sub: "Internet + Phone" },
                { href: "/business", label: "Business", sub: "Dedicated fiber" },
                { href: "/coverage", label: "Coverage Map", sub: "19+ states" },
              ].map(({ href, label, sub }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#DA202C]/30 hover:shadow-sm transition-all"
                >
                  <p className="font-bold text-[#0A1E3C] text-sm">{label}</p>
                  <p className="text-gray-500 text-xs mt-1">{sub}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
