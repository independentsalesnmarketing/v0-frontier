import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Clock, Wrench, Home, Phone } from "lucide-react"
import AuthorBio from "@/components/AuthorBio"
import ContentMeta from "@/components/ContentMeta"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Frontier Fiber Installation Guide 2026: What to Expect Step by Step | Frontier Deals",
  description: "Complete guide to Frontier Fiber installation. What happens before, during, and after the technician visit. Timeline, preparation tips, and what's included.",
  alternates: { canonical: "/blog/frontier-installation-guide-2025" },
  openGraph: { title: "Frontier Fiber Installation Guide 2026", description: "Step-by-step walkthrough of what happens during Frontier Fiber installation.", type: "article", publishedTime: "2025-08-05T08:00:00Z" },
}

export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "HowTo", name: "How Frontier Fiber Installation Works", step: [
    { "@type": "HowToStep", name: "Schedule", text: "Book your installation appointment online or by phone" },
    { "@type": "HowToStep", name: "Preparation", text: "Clear access to where the fiber ONT will be installed" },
    { "@type": "HowToStep", name: "Installation", text: "Technician runs fiber to your home and sets up equipment" },
    { "@type": "HowToStep", name: "Testing", text: "Speed test and device connection verification" },
  ] }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Installation Guide 2026" }]} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Frontier Fiber Installation Guide 2026: What to Expect</h1>
          <ContentMeta publishDate="2025-08-05" updateDate="2026-03-04" readTime={8} categories={["Getting Started"]} factChecked={true} factChecker="Technical Review Team" author="Sarah Johnson" pageSlug="/blog/frontier-installation-guide-2025" />

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h2 className="text-xl font-semibold mb-3">Quick Facts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Installation is <strong>free</strong> on all Frontier Fiber plans</li>
              <li>New fiber runs take 2-3 hours; upgrades take ~1 hour</li>
              <li>A technician handles everything — you don&apos;t need to set up anything</li>
              <li>Someone 18+ must be home during the installation window</li>
            </ul>
          </div>

          <h2>Before Installation Day</h2>
          <h3>Step 1: Place Your Order</h3>
          <p>After ordering online or by phone, you&apos;ll receive a confirmation email with your installation date and time window (typically a 4-hour window). Most areas can schedule installation within 3-7 days of ordering.</p>

          <h3>Step 2: Prepare Your Home</h3>
          <div className="not-prose space-y-3 my-6">
            {[
              "Clear access to the exterior of your home where the fiber line will enter (usually near your existing utility connections)",
              "Clear access to the area where you want the router placed (ideally a central location)",
              "If you have pets, secure them in a separate room during the visit",
              "Know your Wi-Fi network name and password preferences",
              "Have your photo ID ready (the technician may verify your identity)",
            ].map(item => (
              <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{item}</span></div>
            ))}
          </div>

          <h2>Installation Day: Step by Step</h2>
          <div className="not-prose space-y-6 my-8">
            {[
              { step: 1, title: "Exterior Fiber Run", time: "30-60 min", desc: "The technician runs a fiber optic cable from the nearest distribution point to your home. This may involve attaching the cable along your roofline or burying it underground. The cable terminates at an ONT (Optical Network Terminal) — a small box mounted on the exterior or interior of your home." },
              { step: 2, title: "Interior Wiring", time: "20-30 min", desc: "A short ethernet cable runs from the ONT to where your router will be placed. The technician will work with you to find the best route — typically through an existing utility penetration." },
              { step: 3, title: "Router Setup", time: "15-20 min", desc: "The technician installs and configures your eero router, sets your Wi-Fi network name and password, and ensures it's connected to the fiber ONT properly." },
              { step: 4, title: "Speed Test & Verification", time: "10-15 min", desc: "A speed test is run to verify you're getting the speeds your plan promises. The technician will also help connect a device or two to demonstrate the connection is working." },
              { step: 5, title: "Walkthrough & Cleanup", time: "5-10 min", desc: "The technician explains the equipment, shows you the eero app, answers any questions, and cleans up all work areas." },
            ].map(({ step, title, time, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DA202C] text-white flex items-center justify-center flex-shrink-0 font-bold">{step}</div>
                <div>
                  <div className="flex items-center gap-3"><p className="font-bold text-[#0A1E3C] text-lg">{title}</p><span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{time}</span></div>
                  <p className="text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>After Installation</h2>
          <h3>Download the eero App</h3>
          <p>The eero app (iOS/Android) lets you manage your network, see connected devices, run speed tests, set up parental controls, and create guest networks. It&apos;s the command center for your home Wi-Fi.</p>

          <h3>Connect Your Devices</h3>
          <p>Connect your phones, tablets, laptops, smart TVs, and game consoles to the new Wi-Fi network. For gaming consoles and desktop PCs, consider using ethernet cables for the best performance.</p>

          <h3>Return Old ISP Equipment</h3>
          <p>If you&apos;re switching from another provider, return their equipment promptly to avoid unreturned equipment charges. Most ISPs give you 30 days to return gear.</p>

          <h2>Frequently Asked Questions</h2>
          <h3>Does someone need to be home?</h3>
          <p>Yes. Someone 18 or older must be present during the entire installation. The technician needs access to both the exterior and interior of your home.</p>

          <h3>Will there be any drilling?</h3>
          <p>Possibly. The technician may need to drill a small hole to route the fiber cable from the exterior to the interior. They&apos;ll discuss this with you before proceeding and seal the hole when done.</p>

          <h3>Can I choose where the router goes?</h3>
          <p>Yes, within reason. The router should be within about 50 feet of the ONT (connected via ethernet). The technician will help find the best central location for optimal Wi-Fi coverage.</p>

          <h3>What if I need to reschedule?</h3>
          <p>You can reschedule your installation at any time by calling Frontier or through your online account. There&apos;s no fee for rescheduling.</p>

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
