import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"
import AuthorBio from "@/components/AuthorBio"
import ContentMeta from "@/components/ContentMeta"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "How to Cancel Xfinity & Switch to Frontier Fiber: Step-by-Step Guide | Frontier Deals",
  description: "Complete guide to canceling Xfinity (Comcast) and switching to Frontier Fiber. Covers timing, equipment returns, avoiding ETFs, and ensuring no service gap.",
  alternates: { canonical: "/blog/how-to-cancel-xfinity-switch-to-frontier" },
  openGraph: { title: "How to Cancel Xfinity & Switch to Frontier", description: "Step-by-step guide to ditching Xfinity and getting Frontier Fiber.", type: "article", publishedTime: "2025-08-15T08:00:00Z" },
}

export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "HowTo", name: "How to Switch from Xfinity to Frontier Fiber", step: [
    { "@type": "HowToStep", name: "Check Frontier availability", text: "Verify fiber coverage at your address" },
    { "@type": "HowToStep", name: "Order Frontier", text: "Place your Frontier Fiber order and schedule installation" },
    { "@type": "HowToStep", name: "Get installed", text: "Frontier technician installs fiber at your home" },
    { "@type": "HowToStep", name: "Cancel Xfinity", text: "Call Xfinity to cancel after Frontier is working" },
    { "@type": "HowToStep", name: "Return equipment", text: "Return Xfinity equipment to avoid charges" },
  ] }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Cancel Xfinity, Switch to Frontier" }]} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How to Cancel Xfinity &amp; Switch to Frontier Fiber</h1>
          <ContentMeta publishDate="2025-08-15" updateDate="2026-03-06" readTime={8} categories={["Getting Started", "Buying Guide"]} factChecked={true} factChecker="Technical Review Team" author="Marcus Chen" pageSlug="/blog/how-to-cancel-xfinity-switch-to-frontier" />

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-yellow-800">Key Rule: Order Frontier FIRST, Cancel Xfinity SECOND</p>
                <p className="text-yellow-700 text-sm mt-1">Never cancel Xfinity before Frontier is installed and working. Overlap your service by a few days to avoid any internet gap.</p>
              </div>
            </div>
          </div>

          <h2>Why People Are Switching</h2>
          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#0A1E3C] text-white"><th className="p-3 text-left">Feature</th><th className="p-3 text-center">Xfinity (Cable)</th><th className="p-3 text-center">Frontier (Fiber)</th></tr></thead>
              <tbody>
                {[["1 Gig price", "$80/mo", "$49.99/mo"], ["Upload speed", "35 Mbps", "1,000 Mbps"], ["Data cap", "1.2 TB/mo", "Unlimited"], ["Router", "$14/mo rental", "Free (included)"], ["Contract", "1-2 year", "No contract"]].map(([f, x, fr], i) => (
                  <tr key={f} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-3 font-semibold">{f}</td><td className="p-3 text-center text-red-500">{x}</td><td className="p-3 text-center text-green-600 font-bold">{fr}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Step-by-Step Switching Guide</h2>

          <h3>Step 1: Check Frontier Availability</h3>
          <p>Before anything, confirm Frontier Fiber is available at your address. Use the <Link href="/check-availability">availability checker</Link> on our site or call to verify.</p>

          <h3>Step 2: Review Your Xfinity Agreement</h3>
          <p>Log into your Xfinity account and check for:</p>
          <ul>
            <li><strong>Early Termination Fee (ETF):</strong> If you&apos;re in a contract, there may be an ETF (typically $10/mo for remaining months). Sometimes waiting until the contract ends saves money.</li>
            <li><strong>Billing cycle:</strong> Note when your current billing period ends. Cancel early and you may still be charged for the full month.</li>
            <li><strong>Bundled services:</strong> If you have TV or phone bundled, plan for alternatives.</li>
          </ul>

          <h3>Step 3: Order Frontier Fiber</h3>
          <p>Place your Frontier order and schedule installation. Pick an installation date that allows 2-3 days of overlap with your Xfinity service. This ensures you never go without internet.</p>

          <h3>Step 4: Get Frontier Installed</h3>
          <p>On installation day, the Frontier technician will install your fiber connection and eero router. Test everything — browse the web, stream a video, run a speed test. Make sure everything works before proceeding.</p>

          <h3>Step 5: Cancel Xfinity</h3>
          <p>Once Frontier is working, call Xfinity to cancel:</p>
          <ul>
            <li><strong>Call:</strong> 1-800-XFINITY (1-800-934-6489)</li>
            <li><strong>Say:</strong> &quot;I&apos;d like to cancel my service.&quot; Be direct.</li>
            <li><strong>Expect retention offers:</strong> They will try to keep you. A common tactic is offering a &quot;loyalty rate.&quot; If you&apos;ve decided to switch, stay firm.</li>
            <li><strong>Get confirmation:</strong> Ask for a cancellation confirmation number and email. This is your proof.</li>
            <li><strong>Note your final bill date.</strong></li>
          </ul>

          <h3>Step 6: Return Xfinity Equipment</h3>
          <p>You have 14 days to return equipment (modem, router, cable boxes). Options:</p>
          <div className="not-prose space-y-3 my-6">
            {["Drop off at an Xfinity Store (fastest, get receipt)", "Ship via UPS (Xfinity provides prepaid label)", "Schedule a UPS pickup from your home"].map(item => (
              <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{item}</span></div>
            ))}
          </div>
          <p><strong>Important:</strong> Keep your return receipt. Xfinity has been known to charge unreturned equipment fees — sometimes months later. Your receipt is your defense.</p>

          <h2>What About Your Xfinity Email?</h2>
          <p>If you use an @comcast.net or @xfinity.com email, you&apos;ll lose access after cancellation. Before canceling:</p>
          <ol>
            <li>Switch to a free email provider (Gmail, Outlook, etc.)</li>
            <li>Update your email address on banking, shopping, and other accounts</li>
            <li>Forward important emails to your new address</li>
          </ol>

          <h2>What If You Have an ETF?</h2>
          <p>If Xfinity charges an early termination fee, do the math. Even with a $200 ETF, switching to Frontier often saves money within a few months due to the $30+/mo price difference and $14/mo equipment savings. Plus, Frontier sign-up bonuses (up to $200 Visa card) can offset the ETF.</p>

          <div className="not-prose bg-[#0A1E3C] text-white rounded-xl p-6 my-8 text-center">
            <p className="text-xl font-black mb-2">Ready to Ditch Xfinity?</p>
            <p className="text-white/60 mb-4">Frontier Fiber: faster speeds, lower price, no contracts.</p>
            <Link href="/compare/frontier-vs-xfinity" className="inline-block bg-[#DA202C] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#b71c1c]">Compare Frontier vs Xfinity →</Link>
          </div>

          <AuthorBio
            name="Marcus Chen"
            role="Senior Technology Analyst"
            bio="Marcus has been covering internet technology and telecommunications for over a decade. He specializes in fiber optic networks, WiFi technology, and helping consumers make informed decisions about their internet service."
            image=""
            credentials={["CompTIA Network+", "BS in Computer Science"]}
          />
        </article>
      </main>
    </>
  )
}
