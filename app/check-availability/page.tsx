import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowRight, Phone, CheckCircle2, Wifi, Shield, Zap } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"
import { ZipCodeCheck } from "@/components/ZipCodeCheck"
import { frontierCoverage } from "@/lib/coverage-data"

export const metadata: Metadata = {
  title: "Check Frontier Fiber Availability | Is Frontier in My Area?",
  description:
    "Check if Frontier Fiber Internet is available at your address. Enter your ZIP code to see plans and pricing in your area. Service in 19+ states and 400+ cities.",
  alternates: { canonical: "/check-availability" },
  openGraph: {
    title: "Check Frontier Fiber Availability in Your Area",
    description: "Enter your ZIP code to check Frontier Fiber availability. 19+ states, 400+ cities.",
    type: "website",
  },
  keywords: [
    "frontier availability",
    "frontier internet near me",
    "is frontier available in my area",
    "frontier fiber availability",
    "frontier coverage check",
    "frontier zip code check",
    "frontier internet availability",
  ],
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
}

const availabilityFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I check if Frontier is available at my address?", acceptedAnswer: { "@type": "Answer", text: "Enter your ZIP code on our availability checker at the top of this page. You'll instantly see which Frontier Fiber plans and speeds are available at your address." } },
    { "@type": "Question", name: "What states does Frontier cover?", acceptedAnswer: { "@type": "Answer", text: "Frontier provides fiber internet service in 19+ states including Texas, California, Florida, Connecticut, New York, Ohio, Indiana, and more. Coverage varies by city and neighborhood." } },
    { "@type": "Question", name: "What if Frontier isn't available at my address yet?", acceptedAnswer: { "@type": "Answer", text: "Frontier is actively expanding its fiber network. You can sign up for availability notifications to be alerted when fiber reaches your area. In the meantime, check if other Frontier services are available." } },
    { "@type": "Question", name: "How fast is Frontier Fiber?", acceptedAnswer: { "@type": "Answer", text: "Frontier Fiber offers symmetrical speeds from 500 Mbps up to 7 Gbps, depending on your area. All plans include unlimited data, no contracts, and a free eero router." } },
  ],
}

export default function CheckAvailabilityPage() {
  const totalCities = Object.values(frontierCoverage).reduce((sum, cities) => sum + cities.length, 0)
  const stateCount = Object.keys(frontierCoverage).length

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(availabilityFaqSchema) }} />
      <Breadcrumbs items={[{ label: "Check Availability" }]} />

      {/* Hero with ZIP checker */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Is Frontier Fiber Available
              <br />
              <span className="text-[#64ffda]">at Your Address?</span>
            </h1>
            <p className="text-lg text-white/70 mb-10">
              Enter your ZIP code below to check if Frontier Fiber Internet is available in your area.
            </p>
            <div className="max-w-md mx-auto">
              <ZipCodeCheck />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-10 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-5 bg-white rounded-xl shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#DA202C]">{stateCount}</div>
              <div className="text-sm text-gray-600">States</div>
            </div>
            <div className="text-center p-5 bg-white rounded-xl shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#DA202C]">{totalCities}+</div>
              <div className="text-sm text-gray-600">Cities</div>
            </div>
            <div className="text-center p-5 bg-white rounded-xl shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#DA202C]">Growing</div>
              <div className="text-sm text-gray-600">Monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-12">
            What Frontier Fiber Includes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Zap className="h-7 w-7 text-[#DA202C]" />, title: "Symmetrical Speeds", desc: "Upload and download at the same speed — from 500 Mbps to 5 Gig." },
              { icon: <Shield className="h-7 w-7 text-[#DA202C]" />, title: "No Caps, No Contracts", desc: "Unlimited data with no overage fees. Month-to-month, cancel anytime." },
              { icon: <Wifi className="h-7 w-7 text-[#DA202C]" />, title: "Free Router & Install", desc: "Free eero Wi-Fi 6 router and professional in-home installation." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#DA202C]/10 flex items-center justify-center mx-auto mb-4">{icon}</div>
                <h3 className="font-bold text-[#0A1E3C] mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by State */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-4">
            Browse Coverage by State
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Click a state to see all available cities and local plan details.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {Object.entries(frontierCoverage).sort(([a], [b]) => a.localeCompare(b)).map(([state, cities]) => (
              <Link
                key={state}
                href={`/internet-in/${slugify(state)}`}
                className="flex items-center justify-between bg-white hover:bg-[#DA202C]/5 border border-gray-200 hover:border-[#DA202C]/30 rounded-lg px-4 py-3 transition-colors"
              >
                <span className="text-sm font-medium text-[#0A1E3C]">{state}</span>
                <span className="text-xs text-gray-400">{cities.length} cities</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-[#0A1E3C] text-center mb-12">Availability FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "How do I check if Frontier is available at my address?", a: "Enter your ZIP code on our availability checker at the top of this page. You'll instantly see which Frontier Fiber plans and speeds are available at your address." },
              { q: "What states does Frontier cover?", a: "Frontier provides fiber internet service in 19+ states including Texas, California, Florida, Connecticut, New York, Ohio, Indiana, and more." },
              { q: "What if Frontier isn't available at my address yet?", a: "Frontier is actively expanding its fiber network. You can sign up for availability notifications to be alerted when fiber reaches your area." },
              { q: "How fast is Frontier Fiber?", a: "Frontier Fiber offers symmetrical speeds from 500 Mbps up to 7 Gbps. All plans include unlimited data, no contracts, and a free eero router." },
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
      <section className="py-16 bg-[#0A1E3C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Get Connected?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Frontier Fiber plans start at $29.99/mo. Free installation, no contracts, unlimited data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton planName="fiber-2-gig" className="inline-flex items-center justify-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg">
              Order Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>
    </>
  )
}
