import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Fiber vs Cable Internet: Speed, Cost & Reliability Comparison",
  description:
    "Compare fiber optic and cable internet. See the differences in speeds, reliability, latency, data caps, and pricing. Learn why fiber beats cable for modern internet needs.",
  alternates: { canonical: "/compare/fiber-vs-cable" },
}

export default function FiberVsCable() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs
        items={[
          { label: "Internet", href: "/internet" },
          { label: "Fiber vs Cable" },
        ]}
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A1E3C]">
            Fiber vs Cable Internet: Which is Better?
          </h1>
          <p className="text-xl text-gray-600">
            An in-depth comparison of fiber optic and cable internet to help you choose the right option for your home.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Fiber Internet</h2>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Speeds up to 7 Gbps</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Symmetrical upload and download</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>10-20ms latency</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>No data caps</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>99.9% uptime</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Consistent speeds 24/7</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-orange-300 rounded-lg p-6 bg-orange-50">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Cable Internet</h2>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Speeds up to 1.2 Gbps</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Asymmetrical speeds (slow upload)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>30-50ms latency</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Often 500GB-1.2TB data caps</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span>98.5% uptime</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Slows during peak hours</span>
              </li>
            </ul>
          </div>
        </div>

        <section className="bg-gradient-to-r from-[#0A1E3C] to-[#1a3a5c] text-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-lg text-white/90">
            Fiber internet is the clear winner for performance, reliability, and future-proofing. While cable is cheaper
            upfront, fiber's unlimited data, consistent speeds, and low latency make it the better value over time. If
            fiber is available in your area, it's worth the investment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#0A1E3C]">Detailed Comparison</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0A1E3C] mb-2">Download Speeds</h3>
              <p className="text-gray-700">
                Fiber offers up to 7 Gbps vs cable's 1.2 Gbps. For streaming 4K video (which needs 25 Mbps), both work,
                but fiber has more headroom for multiple users and devices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A1E3C] mb-2">Upload Speeds</h3>
              <p className="text-gray-700">
                This is where fiber shines. Fiber uploads at the same speed as downloads (symmetrical), while cable
                maxes out at 100 Mbps upload. For video conferencing and content creators, fiber is essential.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A1E3C] mb-2">Latency (Gaming)</h3>
              <p className="text-gray-700">
                Fiber's 10-20ms latency beats cable's 30-50ms. For competitive gaming and real-time applications,
                fiber's lower latency gives you the edge.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A1E3C] mb-2">Data Caps & Overage Fees</h3>
              <p className="text-gray-700">
                Frontier Fiber has unlimited data with no overage fees. Many cable providers cap you at 500GB-1.2TB,
                charging $10-50 per extra 50GB. If you stream a lot, fiber saves money even at the same price.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A1E3C] mb-2">Price Comparison</h3>
              <p className="text-gray-700">
                Fiber starts at $34.99/month vs cable at $35-50. But when you factor in cable's data cap overage fees
                and equipment rental, fiber ends up cheaper. Plus, Frontier includes equipment and installation at no
                extra cost.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#0A1E3C] mb-4">Ready to Switch to Fiber?</h2>
          <p className="text-gray-700 mb-6">
            Experience the difference fiber internet makes. Check if Frontier Fiber is available in your area and start
            enjoying blazing-fast, reliable internet today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <PageOrderButton className="bg-[#00b7c3] hover:bg-[#00a0b0] text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2">
              Check Availability <ArrowRight className="w-4 h-4" />
            </PageOrderButton>
            <Button
              asChild
              variant="outline"
              className="border-[#0A1E3C] text-[#0A1E3C] hover:bg-[#0A1E3C] hover:text-white bg-transparent"
            >
              <Link href="/internet/pricing">See Our Pricing</Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#0A1E3C]">Related Comparisons</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/compare/fiber-vs-cable-vs-dsl"
              className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-bold text-[#0A1E3C] mb-2">Fiber vs Cable vs DSL</h3>
              <p className="text-sm text-gray-600">
                Compare all three major internet technologies in one detailed breakdown.
              </p>
            </Link>
            <Link
              href="/blog/fiber-vs-cable"
              className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-bold text-[#0A1E3C] mb-2">In-Depth Fiber vs Cable Article</h3>
              <p className="text-sm text-gray-600">Read our comprehensive blog post on the technical differences.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
