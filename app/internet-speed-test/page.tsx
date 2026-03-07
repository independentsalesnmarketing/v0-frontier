import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Gauge, Wifi, Zap, ExternalLink } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { SpeedTestTool } from "@/components/SpeedTestTool"

export const metadata: Metadata = {
  title: "Internet Speed Test | Check Your Connection | Frontier Deals",
  description: "Test your internet speed with trusted tools and see how Frontier Fiber compares. Symmetrical speeds from 500 Mbps to 7 Gig with no data caps.",
  alternates: { canonical: "/internet-speed-test" },
  openGraph: {
    title: "Internet Speed Test — Check Your Connection Speed",
    description: "Test your current internet speed and discover if Frontier Fiber can deliver faster, more reliable performance.",
    type: "website",
  },
}

const speedTests = [
  { name: "Fast.com by Netflix", url: "https://fast.com", desc: "Quick, minimal speed test powered by Netflix." },
  { name: "Speedtest by Ookla", url: "https://www.speedtest.net", desc: "The industry standard for internet speed testing." },
  { name: "Cloudflare Speed Test", url: "https://speed.cloudflare.com", desc: "Detailed test with latency, jitter, and download/upload metrics." },
]

export default function InternetSpeedTestPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Internet Speed Test" }]} />

      <section className="bg-[#0A1E3C] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="w-16 h-16 rounded-full bg-[#DA202C]/20 text-[#DA202C] flex items-center justify-center mx-auto mb-6">
            <Gauge className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Internet Speed Test</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Test your current internet speed instantly, then see how Frontier Fiber stacks up.
          </p>
          <SpeedTestTool />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-black text-[#0A1E3C] mb-8 text-center">Alternative Speed Tests</h2>
          <div className="grid gap-4">
            {speedTests.map((test) => (
              <a
                key={test.name}
                href={test.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-[#00b7c3] hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="font-bold text-[#0A1E3C] group-hover:text-[#00b7c3] transition-colors">{test.name}</h3>
                  <p className="text-sm text-gray-500">{test.desc}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#00b7c3] flex-shrink-0 ml-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            For the most accurate results, use a wired connection, close other apps, and run the test multiple times.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-[#0A1E3C] mb-8 text-center">How Frontier Fiber Compares</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Zap className="h-8 w-8 text-[#DA202C] mx-auto mb-3" />
              <h3 className="font-bold text-[#0A1E3C] mb-2">Symmetrical Speeds</h3>
              <p className="text-sm text-gray-500">Upload matches download — unlike cable where upload is a fraction of download speed.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Wifi className="h-8 w-8 text-[#00b7c3] mx-auto mb-3" />
              <h3 className="font-bold text-[#0A1E3C] mb-2">No Data Caps</h3>
              <p className="text-sm text-gray-500">Unlimited data on every plan. No throttling, no overage charges, no surprises.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Gauge className="h-8 w-8 text-[#64ffda] mx-auto mb-3" />
              <h3 className="font-bold text-[#0A1E3C] mb-2">Up to 7 Gbps</h3>
              <p className="text-sm text-gray-500">Plans from 500 Mbps to 7 Gig. The fastest residential internet available.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/internet" className="inline-flex items-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors">
              View Frontier Fiber Plans <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-black text-[#0A1E3C] mb-6">Understanding Your Speed Test Results</h2>
          <div className="prose prose-gray max-w-none">
            <h3>Download Speed</h3>
            <p>How fast data travels from the internet to your device. Affects streaming, web browsing, and file downloads. Netflix 4K requires about 25 Mbps per stream.</p>
            <h3>Upload Speed</h3>
            <p>How fast data travels from your device to the internet. Critical for video calls, cloud backups, and streaming to Twitch or YouTube. With cable internet, upload is typically 5-10x slower than download. With Frontier Fiber, upload equals download.</p>
            <h3>Latency (Ping)</h3>
            <p>The time it takes for data to make a round trip. Lower is better — especially for gaming and video calls. Fiber typically delivers 5-15ms latency vs 15-40ms for cable.</p>
          </div>
        </div>
      </section>
    </>
  )
}
