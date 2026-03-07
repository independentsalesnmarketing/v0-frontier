import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, AlertCircle } from "lucide-react"
import AuthorBio from "@/components/AuthorBio"
import ContentMeta from "@/components/ContentMeta"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "How to Cancel Spectrum & Switch to Frontier Fiber: Complete Guide | Frontier Deals",
  description: "Step-by-step guide to canceling Spectrum internet and switching to Frontier Fiber. Covers equipment returns, billing, timing, and avoiding service interruption.",
  alternates: { canonical: "/blog/how-to-cancel-spectrum-switch-to-frontier" },
  openGraph: { title: "How to Cancel Spectrum & Switch to Frontier Fiber", description: "Complete switching guide: Spectrum to Frontier Fiber.", type: "article", publishedTime: "2025-08-25T08:00:00Z" },
}

export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "HowTo", name: "How to Switch from Spectrum to Frontier Fiber", step: [
    { "@type": "HowToStep", name: "Check availability", text: "Verify Frontier Fiber is available at your address" },
    { "@type": "HowToStep", name: "Order Frontier", text: "Schedule Frontier installation" },
    { "@type": "HowToStep", name: "Cancel Spectrum", text: "Call Spectrum after Frontier is active" },
    { "@type": "HowToStep", name: "Return equipment", text: "Return Spectrum equipment within 15 days" },
  ] }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Cancel Spectrum, Switch to Frontier" }]} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How to Cancel Spectrum &amp; Switch to Frontier Fiber</h1>
          <ContentMeta publishDate="2025-08-25" updateDate="2026-03-08" readTime={7} categories={["Getting Started", "Buying Guide"]} factChecked={true} factChecker="Technical Review Team" author="Sarah Johnson" pageSlug="/blog/how-to-cancel-spectrum-switch-to-frontier" />

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-8">
            <p className="font-bold text-green-800 mb-2">Good News: Spectrum Has No Contracts</p>
            <p className="text-green-700 text-sm">Unlike Xfinity, Spectrum doesn&apos;t require contracts on most residential plans. That means no early termination fees — you can cancel anytime without penalty.</p>
          </div>

          <h2>Frontier vs Spectrum: Why Switch?</h2>
          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#0A1E3C] text-white"><th className="p-3 text-left">Feature</th><th className="p-3 text-center">Spectrum (Cable)</th><th className="p-3 text-center">Frontier (Fiber)</th></tr></thead>
              <tbody>
                {[["1 Gig price", "$89.99/mo", "$49.99/mo"], ["Upload speed (1 Gig)", "35 Mbps", "1,000 Mbps"], ["Technology", "Cable (DOCSIS 3.1)", "Fiber (GPON/XGS-PON)"], ["Data cap", "None", "None"], ["Router", "$5/mo rental", "Free (eero included)"], ["Contract", "No contract", "No contract"]].map(([f, s, fr], i) => (
                  <tr key={f} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-3 font-semibold">{f}</td><td className="p-3 text-center">{s}</td><td className="p-3 text-center text-green-600 font-bold">{fr}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The biggest difference: <strong>upload speed</strong>. Spectrum&apos;s 1 Gig plan gives you 35 Mbps upload. Frontier&apos;s gives you 1,000 Mbps. That&apos;s a 28x difference that matters for video calls, cloud backups, and content creation.</p>

          <h2>Step-by-Step Guide</h2>

          <h3>Step 1: Confirm Frontier Availability</h3>
          <p>Check if Frontier Fiber covers your address via our <Link href="/check-availability">availability checker</Link>. Frontier fiber is expanding rapidly, but coverage varies by neighborhood.</p>

          <h3>Step 2: Order Frontier &amp; Schedule Installation</h3>
          <p>Order your preferred plan and pick an installation date. We strongly recommend keeping Spectrum active during the transition — a few days of overlap costs a few dollars but guarantees uninterrupted service.</p>

          <h3>Step 3: Cancel Spectrum (After Frontier Is Live)</h3>
          <p>Once Frontier is installed and confirmed working, cancel Spectrum:</p>
          <ul>
            <li><strong>Call:</strong> 1-833-267-6094 (Spectrum retention/cancellation)</li>
            <li><strong>What to say:</strong> &quot;I&apos;d like to disconnect my internet service.&quot;</li>
            <li><strong>Expect offers:</strong> Spectrum&apos;s retention team will offer discounted rates. Their &quot;best&quot; loyalty price is usually still more than Frontier.</li>
            <li><strong>Get a confirmation number</strong> in writing (ask for email confirmation)</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-yellow-800">Billing Note</p>
                <p className="text-yellow-700 text-sm mt-1">Spectrum doesn&apos;t prorate cancellations. If you cancel mid-cycle, you&apos;ll still be charged for the full month. Time your cancellation near the end of your billing cycle to save money.</p>
              </div>
            </div>
          </div>

          <h3>Step 4: Return Spectrum Equipment</h3>
          <p>Return all Spectrum equipment within 15 days of cancellation:</p>
          <div className="not-prose space-y-3 my-6">
            {["Visit a Spectrum store with your equipment (router, modem, cable boxes)", "Ship via UPS — Spectrum provides a prepaid shipping label", "Get and save your return receipt — Spectrum may claim equipment wasn't returned"].map(item => (
              <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{item}</span></div>
            ))}
          </div>

          <h2>What About the Spectrum Email?</h2>
          <p>If you use a Spectrum/Charter email address, migrate to a free provider like Gmail before canceling. Update important accounts with your new email address.</p>

          <h2>Savings Over Time</h2>
          <p>Switching from Spectrum 1 Gig ($89.99/mo + $5/mo router) to Frontier 1 Gig ($49.99/mo, router included) saves:</p>
          <ul>
            <li><strong>$45/mo</strong> ($40 price difference + $5 router fee)</li>
            <li><strong>$540/year</strong></li>
            <li><strong>$1,080 over 2 years</strong></li>
          </ul>
          <p>Plus you get 28x faster upload speeds and better equipment.</p>

          <div className="not-prose bg-[#0A1E3C] text-white rounded-xl p-6 my-8 text-center">
            <p className="text-xl font-black mb-2">Save $540/Year by Switching</p>
            <p className="text-white/60 mb-4">Faster speeds, better equipment, lower price.</p>
            <Link href="/compare/frontier-vs-spectrum" className="inline-block bg-[#DA202C] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#b71c1c]">Compare Frontier vs Spectrum →</Link>
          </div>

          <AuthorBio
            name="Sarah Johnson"
            role="Senior Technology Writer"
            bio="Sarah has over 15 years of experience in telecommunications and networking technology. She specializes in translating complex technical concepts into accessible information for consumers and businesses."
            image=""
            credentials={["Certified Network Professional", "MS in Telecommunications"]}
          />
        </article>
      </main>
    </>
  )
}
