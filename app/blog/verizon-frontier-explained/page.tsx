import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, HelpCircle, ChevronRight, Shield, DollarSign, TrendingDown, AlertCircle, Zap } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"
import { getCurrentMonthYear } from "@/lib/seo-dates"

export const metadata: Metadata = {
  title: "Is Verizon Fios Now Frontier? The Full Story (2026)",
  description: "Verizon sold its Fios network to Frontier Communications. Here's what changed, what stayed the same, and what it means for your service, pricing, and equipment.",
  alternates: { canonical: "/blog/verizon-frontier-explained" },
  openGraph: { title: "Is Verizon Fios Now Frontier? What You Need to Know", description: "The complete guide to the Verizon-to-Frontier transition: what changed, what didn't, and how it affects your internet service." },
  keywords: ["is verizon fios now frontier", "verizon to frontier", "frontier fios", "verizon frontier acquisition", "frontier communications verizon", "did verizon sell fios", "frontier vs verizon fios"],
}

export default function VerizonFrontierExplainedPage() {
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is Verizon Fios now Frontier?", acceptedAnswer: { "@type": "Answer", text: "Yes, in certain states. Verizon sold its Fios fiber network in several states to Frontier Communications. If you were a Verizon Fios customer in those states, your service is now provided by Frontier under the Frontier Fiber brand." } },
      { "@type": "Question", name: "Did my Fios service change when Frontier took over?", acceptedAnswer: { "@type": "Answer", text: "The underlying fiber infrastructure remained the same. Frontier has since upgraded the network with faster speeds (up to 7 Gbps), new eero routers, and simplified no-contract pricing." } },
      { "@type": "Question", name: "Is Frontier Fiber as good as Verizon Fios?", acceptedAnswer: { "@type": "Answer", text: "Frontier Fiber now offers faster maximum speeds (7 Gbps vs Fios's 2 Gbps), simpler pricing with no contracts, free eero routers, and unlimited data on all plans." } },
    ],
  }

  return (
    <article className="bg-white text-[#333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Verizon Frontier Explained" }]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <span>Internet Technology</span><span>•</span><span>10 min read</span><span>•</span><span>Updated {getCurrentMonthYear()}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Is Verizon Fios Now Frontier?<br />
            <span className="text-[#00b7c3]">The Complete Story</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">Everything you need to know about the Verizon-to-Frontier transition, what changed for customers, and why Frontier Fiber is now even better than the old Fios.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">The Short Answer</h2>
            <div className="bg-[#00b7c3]/5 border-l-4 border-[#00b7c3] p-6 rounded-r-xl mb-8">
              <p className="text-base leading-relaxed"><strong>Yes — in certain states, Verizon Fios is now Frontier Fiber.</strong> Verizon sold its fiber-optic (Fios) network in multiple states to Frontier Communications. The original Fios infrastructure is still there — same fiber cables, same technology — but the service is now branded, managed, and improved by Frontier.</p>
            </div>

            <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">What Happened: The Timeline</h2>
            <div className="space-y-4 mb-8">
              {[
                { year: "2016", event: "Verizon sells its wireline operations in California, Florida, and Texas to Frontier Communications for $10.54 billion." },
                { year: "2020", event: "Frontier files for Chapter 11 bankruptcy and undergoes restructuring to reduce debt." },
                { year: "2021", event: "Frontier emerges from bankruptcy with $10 billion less debt and a new management team focused on fiber expansion." },
                { year: "2023-2025", event: "Frontier invests billions in upgrading the network — adding multi-gig speeds, eero routers, and expanding fiber coverage to millions of new addresses." },
                { year: "2026", event: "Frontier Fiber now offers speeds up to 7 Gbps with plans starting at $34.99/mo — faster and more affordable than the old Fios service." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="bg-[#0A1E3C] text-white text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0">{item.year}</span>
                  <p className="text-sm text-gray-700">{item.event}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">Frontier Fiber vs Old Verizon Fios</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0A1E3C] text-white">
                    <th className="text-left py-3 px-4 rounded-tl-lg">Feature</th>
                    <th className="text-center py-3 px-4">Old Verizon Fios</th>
                    <th className="text-center py-3 px-4 rounded-tr-lg bg-[#00b7c3]">Frontier Fiber (2026)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Max Speed", "Up to 2 Gbps", "Up to 7 Gbps"],
                    ["Starting Price", "$49.99/mo", "$34.99/mo"],
                    ["Contracts", "1-2 year contracts", "No contracts"],
                    ["Data Caps", "Unlimited", "Unlimited"],
                    ["Router", "Verizon router rental", "Free eero (yours to keep)"],
                    ["Installation", "Up to $99", "Free"],
                    ["Reward Cards", "Limited offers", "$50-$200 Visa cards"],
                  ].map(([feature, fios, frontier], i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-[#0A1E3C]">{feature}</td>
                      <td className="py-3 px-4 text-center text-gray-500">{fios}</td>
                      <td className="py-3 px-4 text-center font-bold text-[#00b7c3] bg-[#00b7c3]/5">{frontier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">Which States Were Affected?</h2>
            <p className="text-base text-gray-700 mb-4">The Verizon-to-Frontier transition primarily affected customers in:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              {["California", "Texas", "Florida", "Indiana", "Oregon", "Washington", "West Virginia", "Wisconsin", "Illinois", "Ohio", "Connecticut", "South Carolina"].map((state, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#f8f9fb] rounded-lg p-3">
                  <Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" />
                  <Link href={`/internet-in/${state.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-[#0A1E3C] hover:text-[#00b7c3] font-medium">{state}</Link>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">What This Means for You</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-[#f8f9fb] rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0A1E3C] mb-2 flex items-center gap-2"><TrendingDown className="h-5 w-5 text-[#00b7c3]" />Lower Prices</h3>
                <p className="text-sm text-gray-600">Frontier&apos;s aggressive pricing starts at $34.99/mo — significantly lower than what most Fios customers were paying. No annual contracts mean you can shop plans freely.</p>
              </div>
              <div className="bg-[#f8f9fb] rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0A1E3C] mb-2 flex items-center gap-2"><Zap className="h-5 w-5 text-[#00b7c3]" />Faster Speeds</h3>
                <p className="text-sm text-gray-600">Frontier now offers 5 Gig and 7 Gig plans — speeds Verizon Fios never reached. The same fiber lines now deliver up to 3.5x more speed.</p>
              </div>
              <div className="bg-[#f8f9fb] rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0A1E3C] mb-2 flex items-center gap-2"><Shield className="h-5 w-5 text-[#00b7c3]" />Better Equipment</h3>
                <p className="text-sm text-gray-600">Instead of renting a Verizon router, Frontier includes a free eero router (yours to keep) with every plan. Higher tiers include eero Max 7 with Wi-Fi 7.</p>
              </div>
            </div>

            <h2 className="text-2xl font-black text-[#0A1E3C] mt-10 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "Is Verizon Fios now Frontier?", a: "Yes, in states where Verizon sold its wireline network. The fiber infrastructure is the same, but the service is now branded and managed by Frontier Communications." },
                { q: "Did my Fios service change when Frontier took over?", a: "The underlying fiber technology remained the same. Frontier has upgraded the network with faster speeds (up to 7 Gbps), new eero routers, simplified no-contract pricing, and free installation." },
                { q: "Is Frontier Fiber as good as Verizon Fios?", a: "Frontier Fiber now exceeds what Fios offered — faster max speeds (7 Gbps vs 2 Gbps), lower starting prices ($34.99 vs $49.99), free routers instead of rental fees, and no contracts." },
                { q: "Can I switch from Verizon Fios to Frontier?", a: "If you're in a Frontier service area, you already have Frontier. If you're in a Verizon Fios area (Northeast), Frontier offers separate fiber service — check availability at your address." },
                { q: "Do I need new equipment?", a: "When you sign up for or upgrade a Frontier Fiber plan, you'll receive a new eero router at no cost. The fiber ONT (wall unit) may be reused or replaced depending on your speed tier." },
              ].map((faq, i) => (
                <details key={i} className="bg-[#f8f9fb] rounded-xl border border-gray-100 group">
                  <summary className="p-5 font-bold text-[#0A1E3C] cursor-pointer hover:text-[#00b7c3] transition-colors list-none flex items-center justify-between">
                    {faq.q}
                    <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0A1E3C] rounded-2xl p-8 md:p-12 text-white text-center mt-12">
            <h2 className="text-2xl font-black mb-4">Ready to Experience the New Frontier Fiber?</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Plans from $34.99/mo with no contracts, free installation, and free eero router. See what&apos;s available at your address.</p>
            <PageOrderButton className="inline-flex items-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-12 px-8 rounded-xl text-base shadow-lg">
              Check Availability <ArrowRight className="h-5 w-5" />
            </PageOrderButton>
          </div>

          {/* Related */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="font-bold text-[#0A1E3C] mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/compare/frontier-vs-verizon-fios" className="text-sm text-[#00b7c3] hover:underline font-medium">Frontier vs Verizon Fios →</Link>
              <Link href="/blog/frontier-internet-review-2025" className="text-sm text-[#00b7c3] hover:underline font-medium">Frontier Internet Review 2026 →</Link>
              <Link href="/blog/switching-internet-providers" className="text-sm text-[#00b7c3] hover:underline font-medium">How to Switch ISPs →</Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
