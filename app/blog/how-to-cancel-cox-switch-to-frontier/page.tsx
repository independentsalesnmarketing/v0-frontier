import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, AlertTriangle, Clock, DollarSign } from "lucide-react"
import AuthorBio from "@/components/AuthorBio"
import ContentMeta from "@/components/ContentMeta"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "How to Cancel Cox Internet & Switch to Frontier Fiber | Frontier Deals",
  description: "Cancel Cox and switch to Frontier Fiber in 6 easy steps. Covers contract buyout, equipment return, scheduling overlap, and avoiding downtime.",
  alternates: { canonical: "/blog/how-to-cancel-cox-switch-to-frontier" },
  openGraph: { title: "Cancel Cox & Switch to Frontier Fiber", description: "Step-by-step guide to switching from Cox cable to Frontier Fiber.", type: "article", publishedTime: "2026-02-26T08:00:00Z" },
}

export default function Page() {
  const howToSchema = {
    "@context": "https://schema.org", "@type": "HowTo",
    name: "How to Cancel Cox Internet and Switch to Frontier Fiber",
    description: "Complete guide to switching from Cox cable internet to Frontier Fiber.",
    step: [
      { "@type": "HowToStep", name: "Check Frontier availability", text: "Verify Frontier Fiber is available at your address." },
      { "@type": "HowToStep", name: "Order Frontier Fiber", text: "Place your Frontier order and schedule installation." },
      { "@type": "HowToStep", name: "Check Cox contract status", text: "Log into cox.com to check your contract and early termination fee." },
      { "@type": "HowToStep", name: "Schedule overlap", text: "Keep both services active for 1-2 days." },
      { "@type": "HowToStep", name: "Cancel Cox", text: "Call Cox or visit a Cox store to cancel your service." },
      { "@type": "HowToStep", name: "Return equipment", text: "Return Cox equipment within 10 days to avoid unreturned equipment fees." },
    ],
    totalTime: "P7D",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Cancel Cox & Switch to Frontier" }]} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How to Cancel Cox Internet &amp; Switch to Frontier Fiber</h1>
          <ContentMeta publishDate="2026-02-26" updateDate="2026-03-06" readTime={7} categories={["Getting Started"]} factChecked={true} factChecker="Technical Review Team" author="Sarah Johnson" pageSlug="/blog/how-to-cancel-cox-switch-to-frontier" />

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <p className="text-green-800 font-semibold">Why Customers Switch</p>
            <p className="text-green-700">Cox&apos;s Gigablast plan costs $99.99/mo with 35 Mbps upload and a 1.25 TB data cap. Frontier Fiber 1 Gig is $49.99/mo with 1,000 Mbps upload, no data caps, and a free router. That&apos;s $600/year in savings.</p>
          </div>

          <h2>Cox vs Frontier: Why Switch?</h2>
          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#0A1E3C] text-white"><th className="p-3 text-left">Feature</th><th className="p-3 text-center">Cox Gigablast</th><th className="p-3 text-center text-[#64ffda]">Frontier 1 Gig</th></tr></thead>
              <tbody>
                {[
                  ["Download Speed", "1,000 Mbps", "1,000 Mbps"],
                  ["Upload Speed", "35 Mbps ❌", "1,000 Mbps ✅"],
                  ["Price", "$99.99/mo ❌", "$49.99/mo ✅"],
                  ["Data Cap", "1.25 TB ❌", "Unlimited ✅"],
                  ["Contract", "1-2 years ❌", "None ✅"],
                  ["Router", "$13/mo rental ❌", "Free eero ✅"],
                  ["Installation", "$100 ❌", "Free ✅"],
                ].map(([feature, cox, frontier], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium">{feature}</td>
                    <td className="p-3 text-center">{cox}</td>
                    <td className="p-3 text-center font-semibold">{frontier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Step-by-Step Switching Guide</h2>

          <h3>1. Check Frontier Availability</h3>
          <p>Before doing anything, confirm Frontier Fiber serves your address. Cox and Frontier overlap in several markets including Arizona, Louisiana, Virginia, and parts of Florida.</p>

          <h3>2. Order Frontier Fiber</h3>
          <p>Place your order online and schedule installation. Keep your Cox service active until Frontier is installed. During installation, a Frontier technician will:</p>
          <ul>
            <li>Install the fiber terminal (ONT) if not already present</li>
            <li>Set up your free eero Wi-Fi router</li>
            <li>Test your connection and ensure everything works</li>
          </ul>

          <h3>3. Check Your Cox Contract</h3>
          <p>Log into your Cox account to check:</p>
          <ul>
            <li><strong>Contract status:</strong> Many Cox plans require a 1 or 2-year commitment</li>
            <li><strong>Early termination fee:</strong> Typically $10/month for each remaining month in your contract (e.g., 6 months left = $60 ETF)</li>
            <li><strong>Billing cycle:</strong> Cancel near the end of your billing cycle to avoid paying for unused days (Cox doesn&apos;t prorate final bills in most areas)</li>
          </ul>

          <h3>4. Cancel Cox</h3>
          <p>Cox offers these cancellation methods:</p>
          <ul>
            <li><strong>Phone:</strong> Call 1-800-234-3993</li>
            <li><strong>In-store:</strong> Visit a Cox Solutions Store with your photo ID</li>
            <li><strong>Online:</strong> Some markets allow cancellation via the Cox app or website</li>
          </ul>
          <p>Be prepared for retention offers. Cox may offer temporary discounts to keep you — decide in advance if any discount would change your mind.</p>

          <h3>5. Return Equipment</h3>
          <p>Return all Cox equipment <strong>within 10 business days</strong> to avoid unreturned equipment fees of $200-$400:</p>
          <ul>
            <li>Return at any Cox Solutions Store (get a receipt!)</li>
            <li>Ship via UPS with the prepaid label Cox provides</li>
            <li><strong>Document everything:</strong> Photo the equipment, keep tracking numbers, save the return receipt</li>
          </ul>

          <h3>6. Verify Final Bill</h3>
          <p>Review your final Cox bill for accuracy. Dispute any charges for: unreturned equipment (if you have proof of return), service dates after cancellation, or incorrect early termination fees.</p>

          <div className="not-prose bg-[#0A1E3C] text-white rounded-xl p-8 my-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Save $600+/Year vs. Cox</h3>
            <p className="text-white/70 mb-6">Frontier Fiber 1 Gig: faster upload, no data caps, half the price.</p>
            <Link href="/check-availability" className="inline-flex items-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors">
              Check Frontier Availability <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <h2>More Switching Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-cancel-xfinity-switch-to-frontier">How to Cancel Xfinity &amp; Switch to Frontier</Link></li>
            <li><Link href="/blog/how-to-cancel-spectrum-switch-to-frontier">How to Cancel Spectrum &amp; Switch to Frontier</Link></li>
            <li><Link href="/blog/how-to-cancel-att-switch-to-frontier">How to Cancel AT&amp;T &amp; Switch to Frontier</Link></li>
            <li><Link href="/blog/switching-internet-providers">General Guide: How to Switch Providers</Link></li>
          </ul>

          <AuthorBio
            name="Sarah Johnson"
            role="Senior Technology Writer"
            bio="Sarah has 15+ years in telecommunications and consumer technology. She writes in-depth guides on fiber internet, home networking, and broadband policy."
            image=""
            credentials={["Certified Network Professional", "M.S. Telecommunications"]}
          />
        </article>
      </main>
    </>
  )
}
