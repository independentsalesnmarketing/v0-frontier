import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Zap, Tv, Gamepad2, Briefcase, Home, Users, Download, Upload, Activity } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton, FaqAccordion } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Frontier Internet Speed Guide 2026 | How Much Speed Do You Need?",
  description: "Find the right Frontier internet speed for streaming, gaming, WFH, and smart homes. Speed recommendations from 25 Mbps to 7 Gig with plan comparisons and expert tips.",
  alternates: { canonical: "/internet-speeds" },
  openGraph: {
    title: "Frontier Internet Speed Guide 2026 — How Much Speed Do You Need?",
    description: "Expert speed recommendations for every activity. Find the right Frontier Fiber plan for your household.",
    type: "website",
  },
  keywords: [
    "internet speed guide",
    "how much internet speed do i need",
    "internet speed for streaming",
    "internet speed for gaming",
    "mbps meaning",
    "download speed vs upload speed",
    "internet speed recommendations",
    "frontier internet speeds",
    "frontier speed plans",
    "frontier fiber speeds",
    "frontier internet speed options",
    "100 mbps internet",
    "300 mbps internet",
    "500 mbps internet",
    "500 mbps internet speed",
    "1000 mbps",
    "1000mbps internet speed",
    "gigabit internet",
    "internet speed for netflix",
    "internet speed for multiple devices",
    "good internet speed mbps",
    "internet speeds chart",
    "recommended internet speed",
    "recommended home internet speed",
    "best speed for home internet",
    "internet speed requirements",
    "internet speed needed",
    "25 mbps internet speed",
    "50 mbps internet speed",
    "75 mbps internet speed",
    "150 mbps internet speed",
    "200 mbps internet",
    "symmetrical internet speeds",
    "fiber optic internet speeds",
    "mbps internet speed",
    "what is a good internet speed",
    "typical internet speed",
  ],
}

const faqData = [
  { q: "What is a good internet speed?", a: "For most households, 200-500 Mbps is good. Families with 4+ people, gamers, or remote workers should consider 500 Mbps to 1 Gig. Power users and large smart homes benefit from 2 Gig or higher." },
  { q: "What does Mbps mean?", a: "Mbps stands for Megabits per second — it measures how quickly data transfers over your connection. 1 Gbps = 1,000 Mbps. Higher Mbps means faster downloads, smoother streaming, and less buffering." },
  { q: "What's the difference between download and upload speed?", a: "Download speed affects how fast you receive data (streaming, web browsing, downloads). Upload speed affects how fast you send data (video calls, uploading files, live streaming). Frontier Fiber offers symmetrical speeds — upload matches download." },
  { q: "Why is my internet slower than what I'm paying for?", a: "Wi-Fi is typically slower than your plan's wired speed due to distance from router, walls, interference, and device limitations. Use ethernet for a true speed test. Frontier's eero mesh routers help minimize Wi-Fi loss." },
  { q: "Do I need faster internet for 4K streaming?", a: "A single 4K stream needs about 25 Mbps. But most households stream on multiple devices simultaneously — multiply 25 Mbps by the number of screens, then add bandwidth for other activities." },
  { q: "Is fiber faster than cable?", a: "Yes. Fiber offers faster max speeds (up to 7 Gbps vs ~1.2 Gbps for cable), symmetrical uploads, lower latency, and more consistent performance. Fiber doesn't slow down during peak hours like cable." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(({ q, a }) => ({
    "@type": "Question", name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

const speedTiers = [
  { speed: "25 Mbps", label: "Basic", color: "bg-yellow-100 text-yellow-800", activities: ["Email & browsing", "SD streaming (1 device)", "Light social media"], household: "1 person, minimal use" },
  { speed: "100 Mbps", label: "Moderate", color: "bg-blue-100 text-blue-800", activities: ["HD streaming (2-3 devices)", "Video calls", "Online school"], household: "2-3 people, light use" },
  { speed: "300 Mbps", label: "Fast", color: "bg-green-100 text-green-800", activities: ["4K streaming (2 TVs)", "Online gaming", "Working from home"], household: "3-4 people, mixed use" },
  { speed: "500 Mbps", label: "Very Fast", color: "bg-teal-100 text-teal-800", activities: ["4K on every TV", "Competitive gaming", "Smart home (20+ devices)"], household: "4-5 people, active use" },
  { speed: "1 Gbps", label: "Gigabit", color: "bg-purple-100 text-purple-800", activities: ["Everything simultaneously", "Large file downloads", "Content creation"], household: "5+ people, heavy use" },
  { speed: "2-7 Gbps", label: "Multi-Gig", color: "bg-red-100 text-red-800", activities: ["Home servers & NAS", "8K video editing", "50+ connected devices"], household: "Power users, large families" },
]

const activitySpeeds = [
  { activity: "Email & web browsing", min: "5 Mbps", recommended: "50 Mbps", icon: <Activity className="h-5 w-5" /> },
  { activity: "Social media & video calls", min: "10 Mbps", recommended: "100 Mbps", icon: <Users className="h-5 w-5" /> },
  { activity: "HD streaming (Netflix, Hulu)", min: "5 Mbps", recommended: "25 Mbps", icon: <Tv className="h-5 w-5" /> },
  { activity: "4K streaming", min: "25 Mbps", recommended: "50 Mbps", icon: <Tv className="h-5 w-5" /> },
  { activity: "Online gaming", min: "25 Mbps", recommended: "100 Mbps", icon: <Gamepad2 className="h-5 w-5" /> },
  { activity: "Game downloads (100GB)", min: "100 Mbps", recommended: "500 Mbps", icon: <Download className="h-5 w-5" /> },
  { activity: "Video calls (Zoom/Teams)", min: "10 Mbps", recommended: "100 Mbps", icon: <Briefcase className="h-5 w-5" /> },
  { activity: "Working from home (VPN)", min: "50 Mbps", recommended: "200 Mbps", icon: <Briefcase className="h-5 w-5" /> },
  { activity: "Smart home (20+ devices)", min: "100 Mbps", recommended: "500 Mbps", icon: <Home className="h-5 w-5" /> },
  { activity: "Content creation & uploads", min: "100 Mbps", recommended: "1 Gbps", icon: <Upload className="h-5 w-5" /> },
]

export default function InternetSpeedsPage() {
  return (
    <div className="bg-white text-[#333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Internet Plans", href: "/internet" }, { label: "Speed Guide" }]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="inline-block bg-[#00b7c3] text-white text-xs font-black px-4 py-2 rounded-full mb-6 uppercase tracking-wide">Speed Guide</span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            How Much Internet Speed Do You Need?
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Stop guessing. Use our expert guide to find the right speed tier for your household based on what you actually do online.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1"><Download className="h-4 w-4" /> Download Speed = receiving data</span>
            <span className="flex items-center gap-1"><Upload className="h-4 w-4" /> Upload Speed = sending data</span>
            <span className="flex items-center gap-1"><Activity className="h-4 w-4" /> Latency = response time</span>
          </div>
        </div>
      </section>

      {/* Speed by Activity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-4">Speed by Activity</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Per-device recommendations. Multiply by the number of people in your household doing these activities simultaneously.</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="p-4 text-left font-semibold">Activity</th>
                  <th className="p-4 text-center font-semibold">Minimum</th>
                  <th className="p-4 text-center font-semibold">Recommended</th>
                </tr>
              </thead>
              <tbody>
                {activitySpeeds.map(({ activity, min, recommended, icon }, i) => (
                  <tr key={activity} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700 flex items-center gap-2"><span className="text-[#0A1E3C]">{icon}</span> {activity}</td>
                    <td className="p-4 text-center text-gray-500">{min}</td>
                    <td className="p-4 text-center font-semibold text-[#0A1E3C]">{recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Speed Tiers Explained */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-10">Speed Tiers Explained</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speedTiers.map(({ speed, label, color, activities, household }) => (
              <div key={speed} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-[#0A1E3C]" />
                  <div>
                    <h3 className="font-bold text-[#0A1E3C] text-lg">{speed}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color}`}>{label}</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-4">
                  {activities.map((a) => (
                    <li key={a} className="text-sm text-gray-600 flex items-center gap-1">
                      <span className="text-green-500">✓</span> {a}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 border-t pt-3">{household}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frontier Plans Mapped */}
      <section className="py-16 bg-[#0A1E3C] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-4">Frontier Fiber Plans by Speed</h2>
          <p className="text-center text-white/60 mb-12 max-w-xl mx-auto">Every plan includes symmetrical speeds, unlimited data, free installation, and a free eero router.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Fiber 500", speed: "500/500 Mbps", price: "29.99", best: false, label: "Great starter plan" },
              { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "49.99", best: true, label: "Most popular" },
              { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "64.99", best: false, label: "Power households" },
              { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "89.99", best: false, label: "Wi-Fi 7 included" },
              { name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "109.99", best: false, label: "Fastest available" },
            ].map((plan) => (
              <Link key={plan.name} href={`/internet/${plan.name.toLowerCase().replace(/\s+/g, "-")}`} className={`rounded-2xl p-6 block transition-transform hover:scale-105 ${plan.best ? "bg-[#DA202C]" : "bg-white/10 hover:bg-white/15"}`}>
                <p className="text-xs text-white/60 mb-1">{plan.label}</p>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-white/60 text-sm">{plan.speed}</p>
                <p className="text-2xl font-black mt-2">${plan.price}<span className="text-sm font-normal text-white/50">/mo</span></p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <PageOrderButton className="bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg">
              Order the Right Plan <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-[#0A1E3C] text-center mb-6">Deep-Dive Speed Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/how-much-internet-speed-do-i-need" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-[#0A1E3C]">How Much Speed Do I Need?</span>
              <p className="text-sm text-gray-500 mt-1">Personalized recommendations</p>
            </Link>
            <Link href="/blog/streaming-internet-requirements" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-[#0A1E3C]">Speeds for Streaming</span>
              <p className="text-sm text-gray-500 mt-1">Netflix, 4K, multi-screen</p>
            </Link>
            <Link href="/blog/gaming-internet-guide" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-[#0A1E3C]">Gaming Internet Guide</span>
              <p className="text-sm text-gray-500 mt-1">Latency, ping, and speed</p>
            </Link>
            <Link href="/internet-for/gaming" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-[#0A1E3C]">Internet for Gaming</span>
              <p className="text-sm text-gray-500 mt-1">Best plan for gamers</p>
            </Link>
            <Link href="/internet-for/streaming" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-[#0A1E3C]">Internet for Streaming</span>
              <p className="text-sm text-gray-500 mt-1">Buffer-free 4K plans</p>
            </Link>
            <Link href="/internet-for/work-from-home" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="font-semibold text-[#0A1E3C]">Internet for WFH</span>
              <p className="text-sm text-gray-500 mt-1">VPN, Zoom, cloud apps</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-10">Speed FAQ</h2>
          <FaqAccordion faqs={faqData.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#DA202C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Found Your Speed?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">All Frontier Fiber plans include unlimited data, free installation, and a free eero router. No contracts.</p>
          <PageOrderButton className="bg-white text-[#DA202C] font-bold h-14 px-10 rounded-xl text-lg hover:bg-gray-100">
            Order Now <ArrowRight className="ml-2 h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>
    </div>
  )
}
