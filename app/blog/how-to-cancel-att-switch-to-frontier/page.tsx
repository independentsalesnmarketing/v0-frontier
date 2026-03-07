import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, AlertTriangle, Clock, DollarSign, FileText, Phone, Wifi } from "lucide-react"
import AuthorBio from "@/components/AuthorBio"
import ContentMeta from "@/components/ContentMeta"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "How to Cancel AT&T Internet & Switch to Frontier Fiber | Frontier Deals",
  description: "Step-by-step guide to canceling AT&T internet and switching to Frontier Fiber. Covers timing, equipment returns, avoiding early termination fees, and what to expect.",
  alternates: { canonical: "/blog/how-to-cancel-att-switch-to-frontier" },
  openGraph: { title: "Cancel AT&T & Switch to Frontier Fiber", description: "Complete switching guide with timing tips and fee avoidance strategies.", type: "article", publishedTime: "2026-02-25T08:00:00Z" },
}

export default function Page() {
  const howToSchema = {
    "@context": "https://schema.org", "@type": "HowTo",
    name: "How to Cancel AT&T Internet and Switch to Frontier Fiber",
    description: "Step-by-step guide to switching from AT&T to Frontier Fiber without losing service.",
    step: [
      { "@type": "HowToStep", name: "Check Frontier availability", text: "Verify Frontier Fiber is available at your address before canceling AT&T." },
      { "@type": "HowToStep", name: "Order Frontier Fiber", text: "Place your Frontier order and schedule installation before canceling AT&T." },
      { "@type": "HowToStep", name: "Check AT&T contract status", text: "Log into att.com/myatt to check if you're in a contract and what the ETF would be." },
      { "@type": "HowToStep", name: "Schedule overlap", text: "Keep both services active for 1-2 days to avoid any gap in connectivity." },
      { "@type": "HowToStep", name: "Cancel AT&T", text: "Call AT&T at 800-288-2020 or cancel online. Request a final bill and return instructions." },
      { "@type": "HowToStep", name: "Return equipment", text: "Return AT&T equipment within 21 days to avoid unreturned equipment charges ($150+)." },
    ],
    totalTime: "P7D",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Cancel AT&T & Switch to Frontier" }]} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How to Cancel AT&amp;T Internet &amp; Switch to Frontier Fiber</h1>
          <ContentMeta publishDate="2026-02-25" updateDate="2026-03-06" readTime={8} categories={["Getting Started"]} factChecked={true} factChecker="Technical Review Team" author="Marcus Chen" pageSlug="/blog/how-to-cancel-att-switch-to-frontier" />

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <p className="text-green-800 font-semibold">Why Customers Switch</p>
            <p className="text-green-700">Frontier Fiber 1 Gig costs $49.99/mo with no data caps, no contracts, and a free router. AT&amp;T Fiber 1 Gig is $55/mo. Both offer symmetrical speeds, but Frontier gives you $100 back with a Visa reward card and free installation.</p>
          </div>

          <h2>Before You Cancel: The Checklist</h2>
          <div className="not-prose space-y-3 my-8">
            {[
              { text: "Confirm Frontier Fiber is available at your address", link: "/check-availability" },
              { text: "Check your AT&T contract status (att.com/myatt → Account → Service details)" },
              { text: "Note your AT&T billing cycle end date" },
              { text: "Save any AT&T email addresses you want to keep" },
              { text: "Order Frontier BEFORE canceling AT&T" },
            ].map(({ text, link }, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="w-6 h-6 rounded-full bg-[#0A1E3C] text-white text-sm flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <span className="text-gray-700">{text} {link && <Link href={link} className="text-[#DA202C] font-semibold">→ Check now</Link>}</span>
              </div>
            ))}
          </div>

          <h2>Step 1: Order Frontier Fiber</h2>
          <p>Always order your new service <strong>before</strong> canceling the old one. This ensures you have zero downtime. Frontier installation typically takes 3-7 days to schedule.</p>
          <p>When you order Frontier, you&apos;ll get:</p>
          <ul>
            <li>Free professional installation</li>
            <li>Free eero Wi-Fi router (yours to keep)</li>
            <li>$50-$200 Visa reward card (depends on plan)</li>
            <li>12-month price lock with no contract</li>
          </ul>

          <h2>Step 2: Check Your AT&amp;T Contract</h2>
          <p>Log into your AT&amp;T account to check:</p>
          <ul>
            <li><strong>Contract status:</strong> Are you in a 1-2 year term? Most AT&amp;T Fiber plans are now no-contract, but older plans may have a commitment.</li>
            <li><strong>Early termination fee (ETF):</strong> If you are in a contract, the ETF is typically $180 minus $15 for each month you&apos;ve completed. After 12 months, the ETF is $0.</li>
            <li><strong>Equipment:</strong> You&apos;ll need to return the AT&amp;T gateway/router within 21 days of cancellation.</li>
          </ul>

          <h2>Step 3: Schedule the Overlap</h2>
          <p>Keep AT&amp;T active until Frontier is installed and working. Ideal timeline:</p>
          <ul>
            <li><strong>Day 1:</strong> Order Frontier Fiber</li>
            <li><strong>Day 3-7:</strong> Frontier installation</li>
            <li><strong>Day 7-8:</strong> Verify Frontier is working correctly on all devices</li>
            <li><strong>Day 8:</strong> Cancel AT&amp;T</li>
          </ul>
          <p>You&apos;ll pay for 1-2 days of overlap on both services, but this is worth it to avoid any gap in internet access.</p>

          <h2>Step 4: Cancel AT&amp;T</h2>
          <p>AT&amp;T does not allow online cancellation for most internet services. You&apos;ll need to call or visit a store:</p>
          <ul>
            <li><strong>Phone:</strong> Call 800-288-2020 (have your account number ready)</li>
            <li><strong>Store:</strong> Visit any AT&amp;T retail store with a photo ID</li>
            <li><strong>Retention offers:</strong> AT&amp;T will likely offer discounts to keep you. Decide in advance if any offer would change your mind.</li>
          </ul>
          <p><strong>Request a confirmation email</strong> and ask for your final bill date. Pro-rated credits should apply for unused days.</p>

          <h2>Step 5: Return AT&amp;T Equipment</h2>
          <p>AT&amp;T requires equipment return within <strong>21 days</strong> of cancellation. Unreturned equipment charges can be $150-$300.</p>
          <ul>
            <li>You&apos;ll receive a prepaid return label via email or mail</li>
            <li>Ship via UPS (AT&amp;T&apos;s preferred carrier) and <strong>keep the tracking number</strong></li>
            <li>Take a photo of the equipment and shipping label for your records</li>
            <li>You can also return at any UPS Store for free</li>
          </ul>

          <h2>AT&amp;T vs Frontier: Quick Comparison</h2>
          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#0A1E3C] text-white"><th className="p-3 text-left">Feature</th><th className="p-3 text-center">AT&amp;T Fiber</th><th className="p-3 text-center text-[#64ffda]">Frontier Fiber</th></tr></thead>
              <tbody>
                {[
                  ["1 Gig Price", "$55/mo", "$49.99/mo ✅"],
                  ["Max Speed", "5 Gbps", "7 Gbps ✅"],
                  ["Data Caps", "None", "None"],
                  ["Router", "Free (Wi-Fi 6)", "Free eero (Wi-Fi 6/7) ✅"],
                  ["Installation", "Free", "Free"],
                  ["Contract", "None", "None"],
                  ["Visa Reward Card", "Up to $150", "Up to $200 ✅"],
                ].map(([feature, att, frontier], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium">{feature}</td>
                    <td className="p-3 text-center">{att}</td>
                    <td className="p-3 text-center font-semibold">{frontier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="not-prose bg-[#0A1E3C] text-white rounded-xl p-8 my-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Switch?</h3>
            <p className="text-white/70 mb-6">Check if Frontier Fiber is available at your address and start saving.</p>
            <Link href="/check-availability" className="inline-flex items-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors">
              Check Availability <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <h2>More Switching Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-cancel-xfinity-switch-to-frontier">How to Cancel Xfinity &amp; Switch to Frontier</Link></li>
            <li><Link href="/blog/how-to-cancel-spectrum-switch-to-frontier">How to Cancel Spectrum &amp; Switch to Frontier</Link></li>
            <li><Link href="/blog/switching-internet-providers">General Guide: How to Switch Internet Providers</Link></li>
          </ul>

          <AuthorBio
            name="Marcus Chen"
            role="Internet Technology Analyst"
            bio="Marcus specializes in broadband technology, ISP comparisons, and speed optimization. Former ISP network engineer."
            image=""
            credentials={["CompTIA Network+", "B.S. Computer Science"]}
          />
        </article>
      </main>
    </>
  )
}
