import Link from "next/link"
import type { Metadata } from "next"
import ContentMeta from "@/components/ContentMeta"

export const metadata: Metadata = {
  title: "What to Expect During Fiber Internet Installation | Frontier",
  description: "A step-by-step walkthrough of the Frontier Fiber installation process, from scheduling to setup, so you know exactly what happens on installation day.",
  alternates: { canonical: "https://frontier-deals.com/blog/what-to-expect-internet-installation" },
}

export default function InstallationGuidePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What to Expect During Fiber Internet Installation</h1>
        <ContentMeta publishDate="2025-07-15" readTime={5} categories={["Getting Started"]} factChecked={true} factChecker="Technical Review Team" />

        <p className="text-lg text-gray-700 leading-relaxed">Signing up is the easy part. Here is a detailed walkthrough of what happens on installation day so there are no surprises.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Before Installation Day</h2>
        <p>After you place your order, Frontier schedules a 4-hour installation window (morning or afternoon). You will receive a confirmation with the date, time window, and your technician's name. Someone 18 or older needs to be home during the installation.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Exterior Work (30-60 minutes)</h2>
        <p>The technician starts outside your home. If fiber has not been run to your house yet, they will connect your home to the fiber line that runs along the street or utility poles. This involves running a thin fiber cable from the street-side connection point to an attachment on the exterior of your home. In most cases, no digging is required -- the cable follows existing utility paths.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Interior Setup (30-60 minutes)</h2>
        <p>The technician runs a fiber cable from the exterior attachment point to a location inside your home. They install a small device called an Optical Network Terminal (ONT), about the size of a paperback book, usually near where the fiber enters the house. The ONT converts optical signals into electrical signals your router can use.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Router Configuration (15-30 minutes)</h2>
        <p>The technician connects your WiFi router to the ONT via Ethernet cable, configures your network, and sets up your WiFi name and password. They will test the connection and walk through your home to check WiFi signal strength in key areas.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Device Connection and Testing</h2>
        <p>Before leaving, the technician helps connect your primary devices and runs a speed test to verify you are getting the speeds your plan provides. They will show you how to manage your WiFi settings and answer any questions.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Questions</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Will it damage my walls?</strong> The technician drills a small hole (about the width of a pencil) to run the fiber cable inside. They seal it when finished.</li>
          <li><strong>Can I choose where the router goes?</strong> Yes. Discuss preferred placement with your technician. Central locations work best for WiFi coverage.</li>
          <li><strong>Do I need to be home the whole time?</strong> Yes, someone 18 or older must be present throughout the installation.</li>
          <li><strong>Is there a cost?</strong> Installation is free on all Frontier Fiber plans.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bottom Line</h2>
        <p>Fiber installation typically takes 2-4 hours and is handled entirely by a Frontier technician at no cost. The most important thing you can do is choose a central location for your router to maximize WiFi coverage throughout your home.</p>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-xl font-bold mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li><Link href="/blog/what-is-fiber-internet" className="text-blue-600 hover:underline">What Is Fiber Internet? A Plain-English Explainer</Link></li>
            <li><Link href="/blog/wifi-dead-zones-fix" className="text-blue-600 hover:underline">How to Fix WiFi Dead Zones in Your Home</Link></li>
          </ul>
        </div>
      </article>
    </main>
  )
}
