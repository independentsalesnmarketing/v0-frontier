import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, XCircle, ArrowRight, Phone } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"
import { competitors, getCompetitorBySlug, getAllCompetitorSlugs } from "@/lib/competitor-data"

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllCompetitorSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const comp = getCompetitorBySlug(slug)
  if (!comp) return {}
  return {
    title: `Frontier vs ${comp.shortName}: Honest Comparison (2026) | Frontier Deals`,
    description: `Compare Frontier Fiber and ${comp.name}. Side-by-side look at speeds, pricing, data caps, contracts, and reliability. See why Frontier wins.`,
    alternates: { canonical: `/compare/${slug}` },
    openGraph: {
      title: `Frontier vs ${comp.shortName}: Which Internet Provider Is Better?`,
      description: `Side-by-side comparison of Frontier Fiber and ${comp.name}. Compare speeds, pricing, reliability, and more.`,
      type: "website",
    },
  }
}

const frontierData = {
  maxDownload: "Up to 7 Gbps",
  maxUpload: "Up to 7 Gbps",
  dataCaps: "None — unlimited",
  contract: "None",
  installation: "Free",
  equipment: "Free eero router",
  startingPrice: "$29.99/mo",
  reliability: "99.9% uptime",
  technology: "Fiber (XGS-PON)",
}

export default async function CompetitorPage({ params }: Props) {
  const { slug } = await params
  const comp = getCompetitorBySlug(slug)
  if (!comp) notFound()

  const comparisonRows = [
    { label: "Technology", frontier: frontierData.technology, competitor: comp.technology },
    { label: "Max Download", frontier: frontierData.maxDownload, competitor: comp.maxDownload },
    { label: "Max Upload", frontier: frontierData.maxUpload, competitor: comp.maxUpload },
    { label: "Data Caps", frontier: frontierData.dataCaps, competitor: comp.dataCaps },
    { label: "Contract Required", frontier: frontierData.contract, competitor: comp.contract },
    { label: "Installation Cost", frontier: frontierData.installation, competitor: comp.installation },
    { label: "Equipment", frontier: frontierData.equipment, competitor: comp.equipment },
    { label: "Starting Price", frontier: frontierData.startingPrice, competitor: comp.startingPrice },
    { label: "Reliability", frontier: frontierData.reliability, competitor: comp.reliability },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is Frontier better than ${comp.shortName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Frontier Fiber offers symmetrical speeds up to 7 Gbps, no data caps, no contracts, and free installation starting at $29.99/mo. ${comp.competitorWeakness}`,
        },
      },
      {
        "@type": "Question",
        name: `How do Frontier and ${comp.shortName} compare on price?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Frontier Fiber starts at $29.99/mo with Auto Pay, while ${comp.shortName} starts at ${comp.startingPrice}. Frontier also includes a free eero router, while ${comp.shortName} charges ${comp.equipment}.`,
        },
      },
      {
        "@type": "Question",
        name: `Does ${comp.shortName} have data caps?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${comp.shortName}'s data cap policy: ${comp.dataCaps}. Frontier Fiber has no data caps on any plan — unlimited data is standard.`,
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[
        { label: "Compare", href: "/compare/fiber-vs-cable" },
        { label: `Frontier vs ${comp.shortName}` },
      ]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            Frontier Fiber vs. {comp.shortName}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            An honest, side-by-side comparison to help you choose the right internet provider. Updated March 2026.
          </p>
          <PageOrderButton className="inline-flex items-center justify-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-12 px-8 rounded-xl">
            Switch to Frontier
            <ArrowRight className="ml-2 h-4 w-4" />
          </PageOrderButton>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left py-4 px-5 text-gray-500 font-medium text-sm w-1/3">Feature</th>
                  <th className="text-center py-4 px-5 w-1/3">
                    <span className="inline-block bg-[#DA202C] text-white text-xs font-bold px-4 py-1.5 rounded-full">Frontier Fiber</span>
                  </th>
                  <th className="text-center py-4 px-5 text-gray-600 font-medium w-1/3">{comp.shortName}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                    <td className="py-4 px-5 text-sm font-medium text-gray-600">{row.label}</td>
                    <td className="py-4 px-5 text-center text-sm font-semibold text-[#0A1E3C]">{row.frontier}</td>
                    <td className="py-4 px-5 text-center text-sm text-gray-500">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Frontier Wins */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] mb-8 text-center">
              Why Frontier Beats {comp.shortName}
            </h2>
            <div className="space-y-4">
              {comp.whyFrontierWins.map((reason) => (
                <div key={reason} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Weakness */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#0A1E3C] mb-4">The Bottom Line on {comp.shortName}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{comp.competitorWeakness}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-black text-[#0A1E3C] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#0A1E3C] mb-2">Is Frontier better than {comp.shortName}?</h3>
              <p className="text-gray-600 text-sm">Frontier Fiber offers symmetrical speeds up to 7 Gbps, no data caps, no contracts, and free installation starting at $29.99/mo. {comp.competitorWeakness}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#0A1E3C] mb-2">How do Frontier and {comp.shortName} compare on price?</h3>
              <p className="text-gray-600 text-sm">Frontier starts at $29.99/mo with Auto Pay. {comp.shortName} starts at {comp.startingPrice}. Frontier includes a free eero router; {comp.shortName} charges {comp.equipment}.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#0A1E3C] mb-2">Does {comp.shortName} have data caps?</h3>
              <p className="text-gray-600 text-sm">{comp.shortName} data cap policy: {comp.dataCaps}. Frontier Fiber has no data caps on any plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Comparisons */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0A1E3C] mb-6 text-center">More Frontier Comparisons</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {Object.values(competitors).filter((c) => c.slug !== slug).map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="bg-gray-50 hover:bg-gray-100 text-[#0A1E3C] px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Frontier vs {c.shortName}
              </Link>
            ))}
            <Link href="/compare/fiber-vs-cable" className="bg-gray-50 hover:bg-gray-100 text-[#0A1E3C] px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Fiber vs Cable
            </Link>
            <Link href="/compare/fiber-vs-cable-vs-dsl" className="bg-gray-50 hover:bg-gray-100 text-[#0A1E3C] px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Fiber vs Cable vs DSL
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#DA202C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Switch from {comp.shortName}?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Get Frontier Fiber starting at $29.99/mo with free installation, a free eero router, and no data caps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton className="inline-flex items-center justify-center bg-white text-[#DA202C] font-bold h-14 px-10 rounded-xl text-lg hover:bg-gray-100">
              Order Frontier Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>
    </>
  )
}
