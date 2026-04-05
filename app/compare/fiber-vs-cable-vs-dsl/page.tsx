import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle2, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Fiber vs Cable vs DSL Internet: Complete Comparison | Frontier",
  description:
    "Compare fiber optic, cable, and DSL internet technologies. See speed, reliability, cost, and performance differences. Learn why fiber is superior for streaming, gaming, and working from home.",
  alternates: { canonical: "/compare/fiber-vs-cable-vs-dsl" },
  openGraph: {
    title: "Fiber vs Cable vs DSL: Which Internet Type is Best?",
    description:
      "Side-by-side comparison of fiber optic, cable, and DSL internet. Speed, reliability, latency, and pricing comparison.",
    type: "website",
  },
}

const comparisonData = [
  {
    metric: "Download Speed",
    fiber: "Up to 7 Gbps",
    cable: "Up to 1.2 Gbps",
    dsl: "Up to 25 Mbps",
    winner: "fiber",
  },
  {
    metric: "Upload Speed",
    fiber: "Up to 7 Gbps (symmetrical)",
    cable: "20-100 Mbps (asymmetrical)",
    dsl: "1-10 Mbps (asymmetrical)",
    winner: "fiber",
  },
  {
    metric: "Latency (Ping)",
    fiber: "10-20ms",
    cable: "30-50ms",
    dsl: "50-80ms",
    winner: "fiber",
  },
  {
    metric: "Reliability / Uptime",
    fiber: "99.9%",
    cable: "98.5%",
    dsl: "95%",
    winner: "fiber",
  },
  {
    metric: "Data Caps",
    fiber: "Unlimited",
    cable: "Often 500GB-1.2TB",
    dsl: "Often limited",
    winner: "fiber",
  },
  {
    metric: "Installation Cost",
    fiber: "$99-$300",
    cable: "$50-$150",
    dsl: "$50-$100",
    winner: "cable",
  },
  {
    metric: "Monthly Cost (Base)",
    fiber: "$34.99-$109.99",
    cable: "$35-$90",
    dsl: "$20-$60",
    winner: "dsl",
  },
  {
    metric: "Availability",
    fiber: "29 states (expanding)",
    cable: "Most areas",
    dsl: "Very widespread",
    winner: "dsl",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is fiber internet really faster than cable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, fiber internet is significantly faster than cable. Fiber reaches speeds up to 7 Gbps while cable maxes out around 1.2 Gbps. More importantly, fiber offers symmetrical speeds (same download and upload), while cable is asymmetrical (much slower uploads). For video conferencing, streaming, and gaming, fiber's consistent, symmetrical speeds are superior.",
      },
    },
    {
      "@type": "Question",
      name: "Why is DSL becoming obsolete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DSL (Digital Subscriber Line) is becoming obsolete because it uses older copper telephone lines with inherent speed limitations. Maximum speeds are typically 25-100 Mbps, which is inadequate for modern needs like 4K streaming, video conferencing, and gaming. As fiber expands, DSL is being phased out by most providers.",
      },
    },
    {
      "@type": "Question",
      name: "Is fiber internet worth the installation cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, fiber's higher installation cost is worth it when you consider the performance, reliability, and long-term value. Fiber's unlimited data, lower latency, and 99.9% uptime prevent the frustration and extra costs of cable's data caps and peak-hour slowdowns. Over 2-3 years, you typically break even.",
      },
    },
  ],
}

export default function FiberVsCableVsDSL() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs
        items={[
          { label: "Internet", href: "/internet" },
          { label: "Fiber vs Cable vs DSL" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A1E3C]">
            Fiber vs Cable vs DSL: Which Internet Is Best?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparing fiber optic, cable, and DSL internet technologies. See the differences in speed, reliability,
            cost, and performance to make the best choice for your home.
          </p>
        </header>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#0A1E3C] mb-6">Complete Technology Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-blue-300">
                    <th className="pb-4 font-semibold text-gray-700">Metric</th>
                    <th className="pb-4 font-semibold text-blue-600">Fiber Optic</th>
                    <th className="pb-4 font-semibold text-orange-600">Cable</th>
                    <th className="pb-4 font-semibold text-gray-600">DSL</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b ${
                        idx % 2 === 0 ? "bg-white" : "bg-blue-50/30"
                      } hover:bg-blue-50 transition-colors`}
                    >
                      <td className="py-4 font-semibold text-gray-800">{row.metric}</td>
                      <td className={`py-4 ${row.winner === "fiber" ? "font-bold text-blue-600" : ""}`}>
                        {row.fiber}
                        {row.winner === "fiber" && (
                          <CheckCircle2 className="w-4 h-4 inline ml-2 text-green-500" />
                        )}
                      </td>
                      <td className={`py-4 ${row.winner === "cable" ? "font-bold text-orange-600" : ""}`}>
                        {row.cable}
                        {row.winner === "cable" && (
                          <CheckCircle2 className="w-4 h-4 inline ml-2 text-green-500" />
                        )}
                      </td>
                      <td className={`py-4 ${row.winner === "dsl" ? "font-bold text-gray-700" : ""}`}>
                        {row.dsl}
                        {row.winner === "dsl" && (
                          <CheckCircle2 className="w-4 h-4 inline ml-2 text-green-500" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50/50">
              <Zap className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-[#0A1E3C] mb-3">Fiber Internet</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span> Fastest speeds (up to 7 Gbps)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span> Symmetrical upload/download
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span> Lowest latency (10-20ms)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span> No data caps
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span> 99.9% uptime
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span> Limited availability
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">Best for: Gamers, streamers, WFH professionals</p>
            </div>

            <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50/50">
              <Zap className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-xl font-bold text-[#0A1E3C] mb-3">Cable Internet</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">✓</span> Fast speeds (up to 1.2 Gbps)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">✓</span> Widely available
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">✓</span> Lower installation cost
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span> Asymmetrical speeds
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span> Often has data caps
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span> Peak-hour slowdowns
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">Best for: Light to moderate internet use</p>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50/50">
              <Zap className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-xl font-bold text-[#0A1E3C] mb-3">DSL Internet</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 font-bold mr-2">✓</span> Widely available
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 font-bold mr-2">✓</span> Cheapest option
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span> Slow speeds (up to 25 Mbps)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span> Distance-dependent
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span> High latency
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span> Slower upload speeds
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">Best for: Basic browsing only</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#0A1E3C]">Why Fiber Wins</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#0A1E3C] mb-1">Future-Proof Technology</h3>
                <p className="text-gray-700 text-sm">
                  Fiber's infrastructure can support faster speeds as technology improves. Cable and DSL have physical
                  limits that prevent meaningful upgrades.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#0A1E3C] mb-1">Consistent Performance</h3>
                <p className="text-gray-700 text-sm">
                  Unlike cable (which slows down during peak hours) and DSL (which degrades with distance), fiber
                  delivers consistent speeds 24/7.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#0A1E3C] mb-1">No Hidden Costs</h3>
                <p className="text-gray-700 text-sm">
                  Frontier Fiber has no data caps, overage charges, or equipment rental fees (equipment is included).
                  Cable often charges extra for everything.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#0A1E3C] to-[#1a3a5c] text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready for Premium Internet?</h2>
          <p className="text-lg text-white/90 mb-6">
            Frontier Fiber brings next-generation internet to your home. Check availability in your area today and
            experience the difference fiber makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <PageOrderButton className="bg-[#00b7c3] hover:bg-[#00a0b0] text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2">
              Get Frontier Fiber <ArrowRight className="w-4 h-4" />
            </PageOrderButton>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/internet">View All Internet Plans</Link>
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#0A1E3C]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I upgrade from cable or DSL to fiber later?",
                a: "Yes. If Frontier Fiber isn't available in your area yet, you can check back or sign up for notifications. When fiber becomes available, you can switch to get significantly faster speeds with no equipment costs.",
              },
              {
                q: "Will fiber internet work during power outages?",
                a: "No. Fiber requires power to operate, like cable and DSL. During outages, you'll need a cellular hotspot or mobile backup internet. Our fiber service is more reliable during normal conditions with 99.9% uptime.",
              },
              {
                q: "Is fiber internet safe?",
                a: "Yes, fiber is secure. Light signals are immune to electromagnetic interference unlike copper cables. Frontier Fiber includes free security features and advanced encryption.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 cursor-pointer group"
              >
                <summary className="flex items-center gap-3 font-semibold text-[#0A1E3C]">
                  <span className="group-open:hidden">▶</span>
                  <span className="hidden group-open:inline">▼</span>
                  {item.q}
                </summary>
                <p className="mt-4 text-gray-700 pl-6">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
