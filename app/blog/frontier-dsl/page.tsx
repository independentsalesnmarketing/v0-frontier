import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, X, ChevronRight, Zap, AlertTriangle } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import AuthorBio from "@/components/AuthorBio"
import { getCurrentMonthYear } from "@/lib/seo-dates"

export const metadata: Metadata = {
  title: "Frontier DSL Plans & Internet: What You Need to Know in 2026",
  description: "Frontier DSL internet is being phased out in favor of fiber. Learn about Frontier DSL plans, speeds, and how to upgrade to Frontier Fiber for faster service at the same price.",
  alternates: { canonical: "/blog/frontier-dsl" },
  keywords: [
    "frontier dsl",
    "frontier dsl plans",
    "frontier dsl internet",
    "frontier dsl internet plans",
    "frontier dsl speed",
    "frontier communications dsl",
    "frontier dsl vs fiber",
    "frontier dsl to fiber upgrade",
    "frontier dsl availability",
    "frontier dsl pricing",
    "frontier copper internet",
    "is frontier dsl available in my area",
  ],
  openGraph: {
    title: "Frontier DSL Plans & Speeds 2026 — Upgrade to Fiber?",
    description: "Everything you need to know about Frontier DSL internet — speeds, plans, pricing, and how to upgrade to Frontier Fiber at a better price.",
    type: "article",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Frontier DSL Plans & Internet: What You Need to Know in 2026",
  description: "A complete guide to Frontier DSL internet — speeds, plans, and whether it's time to upgrade to Frontier Fiber.",
  datePublished: "2025-10-01",
  dateModified: "2026-01-15",
  author: { "@type": "Person", name: "Marcus Chen" },
  publisher: { "@type": "Organization", name: "Frontier Deals", logo: { "@type": "ImageObject", url: "https://frontier-deals.com/images/logo.png" } },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Frontier still offer DSL internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier still provides DSL (copper-based) internet in some areas where fiber hasn't yet been deployed, but Frontier is actively migrating customers to fiber and has committed to shutting down its legacy copper DSL network by 2025-2026. If fiber is available at your address, you can upgrade today.",
      },
    },
    {
      "@type": "Question",
      name: "What is Frontier DSL internet speed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier DSL speeds typically range from 6 Mbps to 115 Mbps download, with upload speeds of 1–15 Mbps. Actual speeds vary heavily based on your distance from the central office (CO). Frontier Fiber, by contrast, delivers identical upload and download speeds from 500 Mbps to 7 Gbps.",
      },
    },
    {
      "@type": "Question",
      name: "What are Frontier DSL plans and prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier DSL plans are generally priced from $27–$50/mo depending on speed tier and location. However, Frontier Fiber 500 Mbps is available for $29.99/mo in most areas — more speed for the same or less money than DSL. If fiber isn't yet at your address, Frontier will notify you when it becomes available.",
      },
    },
    {
      "@type": "Question",
      name: "How do I upgrade from Frontier DSL to fiber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To upgrade from Frontier DSL to Frontier Fiber: (1) Check if fiber is available at your address using our availability checker. (2) Select a fiber plan. (3) Schedule a professional installation appointment (free of charge). (4) A technician will run fiber to your home and set up a new eero Wi-Fi router. The whole process typically takes 2–4 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is Frontier DSL being discontinued?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frontier has committed to fully transitioning from its legacy copper DSL network to fiber. Frontier received billions in federal BEAD funding specifically to expand fiber and retire copper. Most customers can already upgrade to fiber. If DSL is your only option today, Frontier will contact you when fiber reaches your address.",
      },
    },
    {
      "@type": "Question",
      name: "How much faster is Frontier Fiber than Frontier DSL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier Fiber is dramatically faster than Frontier DSL. DSL delivers 6–115 Mbps download with 1–15 Mbps upload. Frontier Fiber 500 delivers 500/500 Mbps — roughly 4–80x faster download and 30–500x faster upload. Fiber also has much lower latency (1–5 ms vs 20–40 ms for DSL), which is critical for gaming and video calls.",
      },
    },
  ],
}

const dslVsFiber = [
  { label: "Technology", dsl: "Copper telephone wires", fiber: "Fiber optic cables" },
  { label: "Max Download", dsl: "6–115 Mbps", fiber: "Up to 7,000 Mbps" },
  { label: "Max Upload", dsl: "1–15 Mbps", fiber: "Up to 7,000 Mbps" },
  { label: "Latency", dsl: "20–40 ms", fiber: "1–5 ms" },
  { label: "Speed consistency", dsl: "Varies by distance to CO", fiber: "Consistent regardless of distance" },
  { label: "Entry price", dsl: "~$30–50/mo", fiber: "From $29.99/mo" },
  { label: "Data cap", dsl: "Sometimes capped", fiber: "Unlimited" },
  { label: "Upload/download symmetry", dsl: "Heavily asymmetric", fiber: "100% symmetrical" },
  { label: "Future-proof", dsl: "Being retired", fiber: "Decades of lifespan" },
]

const upgradeSteps = [
  { step: "1", title: "Check fiber availability", desc: "Enter your address to confirm fiber is available. Over 70% of former DSL customers can already upgrade." },
  { step: "2", title: "Choose a fiber plan", desc: "Pick Fiber 500 ($29.99/mo), Fiber 1 Gig ($49.99/mo), or faster. All include unlimited data and no contracts." },
  { step: "3", title: "Schedule installation", desc: "Pick a 2-hour window that works for you. A Frontier technician runs fiber to your home at no charge." },
  { step: "4", title: "Get your eero router", desc: "The tech sets up your new eero Wi-Fi 6/6E router — yours to keep, no rental fee." },
  { step: "5", title: "Start saving", desc: "Enjoy speeds 4–80x faster for the same or lower monthly price. Earn up to $100 Visa Reward Card." },
]

export default function FrontierDslPage() {
  return (
    <div className="bg-white text-[#333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Frontier DSL Internet" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3C] to-[#12305e] text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-[#DA202C] text-white text-xs font-bold px-3 py-1 rounded-full">Guide</span>
            <span className="text-white/50 text-xs">Updated {getCurrentMonthYear()}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            Frontier DSL Internet: Plans, Speeds & Why It's Time to Upgrade
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Frontier DSL is being retired in favor of fiber. Here's everything on Frontier DSL plans and speeds — plus how to get fiber speeds for the same price.
          </p>
          <div className="mt-8 flex items-center gap-3 bg-[#DA202C]/20 border border-[#DA202C]/30 rounded-xl px-5 py-4">
            <AlertTriangle className="h-5 w-5 text-[#DA202C] flex-shrink-0" />
            <p className="text-sm text-white/80">
              <strong className="text-white">DSL retirement notice:</strong> Frontier is discontinuing copper DSL service. If fiber is available at your address, you can switch today — often at a lower price.{" "}
              <Link href="/check-availability" className="text-[#00b7c3] font-bold hover:underline">Check your address →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">

          {/* What is Frontier DSL */}
          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#0A1E3C] mb-4">What Is Frontier DSL Internet?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Frontier DSL (Digital Subscriber Line) is copper wire–based internet service that uses the same telephone lines running to most American homes. Frontier has provided DSL internet for decades — it was the company's primary technology before it began its massive fiber buildout.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              DSL works by splitting your existing phone line: voice calls travel at low frequencies while internet data travels at higher frequencies. This means DSL doesn't occupy your phone line even when you're online.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The fundamental limitation of DSL is physics: the speed you get degrades with distance from Frontier's central office (CO). A customer 1,000 feet from the CO might get 100 Mbps; a customer 2 miles away might get 12 Mbps from the exact same plan.
            </p>
          </section>

          {/* DSL Speeds */}
          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#0A1E3C] mb-4">Frontier DSL Speed & Plans</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Frontier currently offers or previously offered these DSL tiers (actual availability varies by address):
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
              <table className="w-full text-sm bg-white">
                <thead className="bg-[#0A1E3C] text-white">
                  <tr>
                    <th className="text-left py-3 px-4 font-bold rounded-tl-xl">DSL Tier</th>
                    <th className="text-center py-3 px-4 font-bold">Download</th>
                    <th className="text-center py-3 px-4 font-bold">Upload</th>
                    <th className="text-center py-3 px-4 font-bold rounded-tr-xl">Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: "Basic DSL", dl: "6 Mbps", ul: "1 Mbps", for: "1 person light browsing" },
                    { tier: "DSL 25", dl: "25 Mbps", ul: "3 Mbps", for: "1–2 users, basic streaming" },
                    { tier: "DSL 50", dl: "50 Mbps", ul: "5 Mbps", for: "2–3 users, HD video" },
                    { tier: "DSL 115", dl: "115 Mbps", ul: "15 Mbps", for: "3–4 users, close to CO only" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-[#f8f9fb]">
                      <td className="py-3 px-4 font-medium text-[#0A1E3C]">{row.tier}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.dl}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.ul}</td>
                      <td className="py-3 px-4 text-center text-gray-500 text-xs">{row.for}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900">
                  <strong>Important:</strong> Frontier DSL speeds shown are maximums at optimal conditions. Real-world speeds depend heavily on your distance from the central office and line quality. Many customers receive speeds well below the advertised tier.
                </div>
              </div>
            </div>
          </section>

          {/* DSL vs Fiber comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#0A1E3C] mb-4">Frontier DSL vs Frontier Fiber: Side-by-Side</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If fiber is available at your address, the upgrade decision is straightforward. Here's why:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm bg-white">
                <thead className="bg-[#0A1E3C] text-white">
                  <tr>
                    <th className="text-left py-3 px-4 font-bold rounded-tl-xl">Feature</th>
                    <th className="text-center py-3 px-4 font-bold text-white/60">Frontier DSL</th>
                    <th className="text-center py-3 px-4 font-bold text-[#00b7c3] rounded-tr-xl">Frontier Fiber</th>
                  </tr>
                </thead>
                <tbody>
                  {dslVsFiber.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-[#f8f9fb]">
                      <td className="py-3 px-4 font-medium text-[#0A1E3C]">{row.label}</td>
                      <td className="py-3 px-4 text-center text-gray-500">{row.dsl}</td>
                      <td className="py-3 px-4 text-center text-[#00b7c3] font-semibold">{row.fiber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Is Frontier DSL being discontinued */}
          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#0A1E3C] mb-4">Is Frontier DSL Being Discontinued?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yes. Frontier has publicly committed to retiring its legacy copper DSL infrastructure as it completes its fiber buildout. This is part of a broader, federally-supported transition — Frontier received $5 billion in federal BEAD funding specifically to build fiber to underserved communities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What this means for DSL customers:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "If fiber is available at your address, now is a good time to switch — prices are lower than DSL in most cases",
                "If fiber isn't available yet, Frontier will notify you when it reaches your address",
                "DSL service will continue until fiber reaches each area, then copper is retired",
                "There's no penalty or cost to upgrade from DSL to fiber",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* How to upgrade */}
          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#0A1E3C] mb-6">How to Upgrade from Frontier DSL to Fiber</h2>
            <div className="space-y-4">
              {upgradeSteps.map((step, i) => (
                <div key={i} className="flex gap-4 bg-[#f8f9fb] rounded-xl p-5 border border-gray-100">
                  <div className="w-10 h-10 bg-[#0A1E3C] text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1E3C] mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/check-availability"
                className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-12 px-8 rounded-xl text-sm shadow-lg transition-colors"
              >
                Check If Fiber Is Available at Your Address <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#0A1E3C] mb-8">Frontier DSL FAQ</h2>
            <div className="space-y-3">
              {faqSchema.mainEntity.map((item, i) => (
                <details key={i} className="bg-[#f8f9fb] rounded-xl border border-gray-100 group">
                  <summary className="p-5 font-bold text-[#0A1E3C] cursor-pointer hover:text-[#00b7c3] transition-colors list-none flex items-center justify-between text-sm md:text-base">
                    {item.name}
                    <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom comparison widget */}
          <section className="mb-12 bg-gradient-to-br from-[#0A1E3C] to-[#12305e] rounded-2xl p-8 text-white">
            <h2 className="text-xl font-black mb-2">Ready to Ditch DSL?</h2>
            <p className="text-white/70 text-sm mb-6">
              Most former DSL customers save money AND get 10–80x more speed when they switch to Frontier Fiber.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-white/10 rounded-xl p-4">
                <p className="text-white/40 text-xs font-bold uppercase mb-1.5">Your current DSL</p>
                <div className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-400" />
                  <span className="text-sm">Up to 115 Mbps download</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <X className="h-4 w-4 text-red-400" />
                  <span className="text-sm">Up to 15 Mbps upload</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <X className="h-4 w-4 text-red-400" />
                  <span className="text-sm">Being discontinued</span>
                </div>
              </div>
              <div className="border border-[#00b7c3]/30 bg-[#00b7c3]/10 rounded-xl p-4">
                <p className="text-[#00b7c3] text-xs font-bold uppercase mb-1.5">Frontier Fiber 500</p>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#00b7c3]" />
                  <span className="text-sm font-bold">500 Mbps download</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Zap className="h-4 w-4 text-[#00b7c3]" />
                  <span className="text-sm font-bold">500 Mbps upload</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Check className="h-4 w-4 text-[#00b7c3]" />
                  <span className="text-sm font-bold text-[#00b7c3]">Only $29.99/mo</span>
                </div>
              </div>
            </div>
            <Link
              href="/check-availability"
              className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-12 px-8 rounded-xl text-sm shadow-lg transition-colors"
            >
              Check Fiber Availability <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          <AuthorBio
              name="Marcus Chen"
              role="Internet Technology Analyst"
              bio="Marcus specializes in broadband technology, ISP comparisons, and speed optimization. Former ISP network engineer."
              image=""
              credentials={["CompTIA Network+", "B.S. Computer Science"]}
            />
        </div>
      </article>
    </div>
  )
}
