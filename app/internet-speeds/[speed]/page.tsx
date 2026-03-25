import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Wifi, Zap, MonitorPlay, Gamepad2, Video, Users } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { notFound } from "next/navigation"

const speedData: Record<string, {
  speed: number
  title: string
  description: string
  idealFor: string[]
  notIdealFor: string[]
  plan: { name: string; price: string; href: string }
  householdSize: string
  devices: string
  activities: { name: string; works: boolean; note: string }[]
  comparison: string
}> = {
  "25": {
    speed: 25, title: "25 Mbps Internet",
    description: "25 Mbps is the FCC's minimum definition of broadband internet. It's sufficient for basic browsing, email, and streaming on 1-2 devices at a time.",
    idealFor: ["1-2 person households", "Basic web browsing & email", "SD/HD streaming on one device", "Social media & light use"],
    notIdealFor: ["Multiple simultaneous streamers", "Online gaming", "Working from home with video calls", "Large file downloads"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "1-2 people", devices: "2-3 devices",
    activities: [
      { name: "Web browsing", works: true, note: "Fast page loads" },
      { name: "Email", works: true, note: "No issues" },
      { name: "HD streaming (1 device)", works: true, note: "Requires 5 Mbps" },
      { name: "4K streaming", works: false, note: "Requires 25 Mbps per stream — no headroom" },
      { name: "Video calls (Zoom)", works: true, note: "Requires 3.8 Mbps up/down" },
      { name: "Online gaming", works: false, note: "Playable but high ping during other activity" },
      { name: "Large downloads", works: false, note: "1 GB takes ~5 minutes" },
    ],
    comparison: "25 Mbps is the absolute minimum for modern internet use. While it technically qualifies as broadband, most households will find it limiting. Frontier doesn't offer a 25 Mbps plan because their entry-level Fiber 500 plan at $29.99/mo delivers 20x the speed for an exceptional value.",
  },
  "50": {
    speed: 50, title: "50 Mbps Internet",

    description: "50 Mbps handles most basic internet tasks comfortably and can support 2-3 simultaneous HD streams. A step up from minimum broadband.",
    idealFor: ["2-3 person households", "HD streaming on multiple devices", "Video calls", "Casual online gaming"],
    notIdealFor: ["4K streaming on multiple devices", "Competitive gaming", "Large households", "Regular large downloads"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "2-3 people", devices: "5-8 devices",
    activities: [
      { name: "Web browsing", works: true, note: "Very fast" },
      { name: "HD streaming (2-3 devices)", works: true, note: "Comfortable" },
      { name: "4K streaming (1 device)", works: true, note: "Requires 25 Mbps" },
      { name: "Video calls", works: true, note: "Smooth on HD" },
      { name: "Online gaming", works: true, note: "Good for casual play" },
      { name: "Large downloads", works: false, note: "1 GB takes ~2.5 minutes" },
      { name: "Working from home", works: true, note: "Fine for 1 remote worker" },
    ],
    comparison: "50 Mbps is workable for small households but leaves little headroom. As more devices connect and streaming quality increases, you'll feel the squeeze. Frontier Fiber 500 at $29.99/mo gives you 10x the bandwidth for rock-solid performance.",
  },
  "100": {
    speed: 100, title: "100 Mbps Internet",
    description: "100 Mbps is the sweet spot for small households. It supports multiple HD streams, video calls, and gaming simultaneously without slowdowns.",
    idealFor: ["2-4 person households", "Multiple HD streams at once", "Working from home", "Online gaming"],
    notIdealFor: ["Large families (5+)", "Multiple 4K streams", "Content creation & large uploads", "Running a home server"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "2-4 people", devices: "8-12 devices",
    activities: [
      { name: "4K streaming (1-2 devices)", works: true, note: "Smooth playback" },
      { name: "HD streaming (4+ devices)", works: true, note: "No issues" },
      { name: "Video calls (multiple)", works: true, note: "HD quality" },
      { name: "Online gaming", works: true, note: "Low ping, consistent" },
      { name: "Working from home", works: true, note: "Great for 1-2 remote workers" },
      { name: "Smart home devices", works: true, note: "Handles 10+ devices" },
      { name: "Large downloads", works: true, note: "1 GB in ~80 seconds" },
    ],
    comparison: "100 Mbps is solid for everyday use but prices are often high from cable providers for this tier. Frontier doesn't offer a 100 Mbps plan — instead, they start at 500 Mbps for just $29.99/mo, giving you 5x the speed at a competitive price.",
  },
  "150": {
    speed: 150, title: "150 Mbps Internet",
    description: "150 Mbps is a comfortable mid-range speed that handles most household needs: multiple HD streams, video calls, gaming, and everyday browsing — all at once.",
    idealFor: ["2-4 person households", "Multiple HD streams simultaneously", "Working from home (1-2 people)", "Online gaming + streaming at once"],
    notIdealFor: ["Large families with 4K on every screen", "Content creators with heavy uploads", "4K streaming on 4+ devices at once"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "2-4 people", devices: "8-15 devices",
    activities: [
      { name: "HD streaming (3-4 devices)", works: true, note: "Plenty of headroom" },
      { name: "4K streaming (2 devices)", works: true, note: "50 Mbps per 4K stream" },
      { name: "Video calls (Zoom/Teams)", works: true, note: "HD quality, no lag" },
      { name: "Online gaming", works: true, note: "Low latency on fiber" },
      { name: "Smart home devices", works: true, note: "Handles 15+ IoT devices" },
      { name: "Cloud backups", works: true, note: "Fast symmetrical upload on fiber" },
      { name: "Large downloads", works: true, note: "1 GB in ~55 seconds" },
    ],
    comparison: "150 Mbps plans from cable providers typically cost $55-75/mo. With Frontier, you get Fiber 500 — more than 3x the speed — for just $29.99/mo. If you're paying for 150 Mbps cable, switching to Frontier saves you $25-45/mo while tripling your speed.",
  },
  "200": {
    speed: 200, title: "200 Mbps Internet",
    description: "200 Mbps provides comfortable headroom for medium households. Multiple 4K streams, gaming, and work-from-home use all run smoothly at this speed.",
    idealFor: ["3-5 person households", "Multiple 4K streams", "2+ remote workers", "Gaming while streaming"],
    notIdealFor: ["Very large families (7+)", "Professional content creation", "Running business-grade services"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "3-5 people", devices: "12-20 devices",
    activities: [
      { name: "4K streaming (3+ devices)", works: true, note: "Plenty of bandwidth" },
      { name: "Competitive gaming", works: true, note: "Low latency on fiber" },
      { name: "Multiple video calls", works: true, note: "HD/4K quality" },
      { name: "Smart home + security cameras", works: true, note: "Easily handles 20+ devices" },
      { name: "Cloud backups", works: true, note: "Fast uploads on fiber" },
      { name: "Large file downloads", works: true, note: "1 GB in ~40 seconds" },
      { name: "VPN for work", works: true, note: "No noticeable slowdown" },
    ],
    comparison: "200 Mbps is a popular tier from cable providers, often priced $55-70/mo. With Frontier, you skip 200 Mbps entirely and jump to 500 Mbps for only $29.99/mo — more than double the speed for less money.",
  },
  "250": {
    speed: 250, title: "250 Mbps Internet",
    description: "250 Mbps is a solid choice for medium households. You can stream 4K on multiple TVs, game online, and run a home office simultaneously without any slowdowns.",
    idealFor: ["3-5 person households", "Multiple 4K streams", "Gaming + streaming simultaneously", "1-2 work-from-home users"],
    notIdealFor: ["Very large families (7+)", "Professional video uploaders", "Home servers"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "3-5 people", devices: "15-20 devices",
    activities: [
      { name: "4K streaming (3 devices)", works: true, note: "Smooth on all screens" },
      { name: "Competitive gaming", works: true, note: "Low latency, minimal jitter" },
      { name: "Work from home (2 people)", works: true, note: "Video calls + VPN, no issues" },
      { name: "Smart home (25+ devices)", works: true, note: "Plenty of bandwidth" },
      { name: "Game downloads (50 GB)", works: true, note: "~27 minutes" },
      { name: "Cloud video backup", works: true, note: "Fast on symmetrical fiber" },
      { name: "Security camera feeds", works: true, note: "Multiple 1080p feeds" },
    ],
    comparison: "250 Mbps plans run $60-80/mo on cable. Frontier's Fiber 500 gives you twice the speed for only $29.99/mo — and unlike cable, you get 250 Mbps upload too, not just download.",
  },
  "300": {
    speed: 300, title: "300 Mbps Internet",
    description: "300 Mbps handles busy households with ease. Stream, game, work, and connect dozens of smart devices — all at the same time.",
    idealFor: ["Medium households (4-6 people)", "Gamers + streamers simultaneously", "Multiple remote workers", "Smart home enthusiasts"],
    notIdealFor: ["Professional 4K video editing", "Running servers"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "4-6 people", devices: "15-25 devices",
    activities: [
      { name: "Everything at 200 Mbps", works: true, note: "Plus more headroom" },
      { name: "4K streaming (4+ devices)", works: true, note: "Smooth" },
      { name: "Game downloads (50+ GB)", works: true, note: "~22 minutes" },
      { name: "Cloud photo/video backup", works: true, note: "Fast with fiber upload" },
      { name: "Multiple VPN connections", works: true, note: "No congestion" },
      { name: "Ring/Nest camera feeds", works: true, note: "Multiple HD feeds" },
      { name: "Security system", works: true, note: "Always-on, reliable" },
    ],
    comparison: "300 Mbps plans from cable providers run $65-85/mo. Frontier Fiber 500 gives you 67% more speed at $29.99/mo. And unlike cable, Frontier's upload speed matches the download — 500 Mbps both ways.",
  },
  "400": {
    speed: 400, title: "400 Mbps Internet",
    description: "400 Mbps delivers fast, reliable connectivity for active households. Large families, power users, and multi-device homes will find 400 Mbps handles everything comfortably.",
    idealFor: ["Large households (4-6 people)", "Multiple 4K streams + gaming", "2-3 remote workers", "30+ connected devices"],
    notIdealFor: ["Multi-gig speeds for professionals", "Business-grade use cases"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "4-6 people", devices: "25-35 devices",
    activities: [
      { name: "4K streaming (4-5 devices)", works: true, note: "No buffering" },
      { name: "Competitive gaming", works: true, note: "Ultra-low fiber latency" },
      { name: "Multiple home offices", works: true, note: "2-3 WFH users easily" },
      { name: "Large game downloads", works: true, note: "100 GB in ~34 minutes" },
      { name: "Security cameras (8+)", works: true, note: "All feeds live and recording" },
      { name: "Cloud backup (large library)", works: true, note: "Fast symmetric upload" },
      { name: "VR/AR streaming", works: true, note: "Enough bandwidth for VR" },
    ],
    comparison: "400 Mbps cable plans cost $70-90/mo. Frontier's Fiber 500 at $29.99/mo gives you 25% more speed and 10x the upload bandwidth — cable's 400 Mbps download typically pairs with only 20-40 Mbps upload.",
  },
  "500": {
    speed: 500, title: "500 Mbps Internet",
    description: "500 Mbps is Frontier's entry-level fiber plan and delivers blazing-fast speeds for the whole household. With symmetrical 500/500 Mbps, you get massive upload speed too.",
    idealFor: ["Households of any size", "Power users & gamers", "3+ remote workers", "Content creators", "Smart homes with 30+ devices"],
    notIdealFor: ["Only if you need multi-gig speeds"],
    plan: { name: "Frontier Fiber 500", price: "$29.99/mo", href: "/internet" },
    householdSize: "Any size", devices: "30+ devices",
    activities: [
      { name: "Everything", works: true, note: "No speed limitations for any household" },
      { name: "Multiple 4K/8K streams", works: true, note: "Abundant bandwidth" },
      { name: "Competitive gaming", works: true, note: "Ultra-low latency on fiber" },
      { name: "4K video calls", works: true, note: "Crystal clear" },
      { name: "Live streaming to Twitch/YouTube", works: true, note: "500 Mbps upload!" },
      { name: "Full device backup to cloud", works: true, note: "~13 minutes per 50 GB" },
      { name: "50 GB game download", works: true, note: "~13 minutes" },
    ],
    comparison: "This is Frontier's best-value plan. At $29.99/mo with 500/500 Mbps symmetrical speeds, no data caps, and a free eero router, it beats nearly every competitor on both speed and price. Cable providers charge $70-100/mo for similar download speeds — with a fraction of the upload.",
  },
  "600": {
    speed: 600, title: "600 Mbps Internet",
    description: "600 Mbps is a fast connection that comfortably handles large families, power users, and multi-gig downloads. Whether you're streaming 8K, gaming, or running a home office, 600 Mbps delivers.",
    idealFor: ["Large families (5-7 people)", "Power gamers & streamers", "3+ remote workers", "Heavy downloaders & content creators"],
    notIdealFor: ["Budget-focused households (Fiber 500 is better value)"],
    plan: { name: "Frontier Fiber 1 Gig", price: "$49.99/mo", href: "/internet" },
    householdSize: "5-7 people", devices: "35-50 devices",
    activities: [
      { name: "4K/8K streaming (5+ devices)", works: true, note: "All at once, no issues" },
      { name: "Competitive gaming", works: true, note: "Fiber-grade low latency" },
      { name: "3+ home offices", works: true, note: "Video calls + VPN, all smooth" },
      { name: "100 GB game download", works: true, note: "~22 minutes" },
      { name: "4K video upload", works: true, note: "600 Mbps symmetrical upload" },
      { name: "NAS backup (1 TB)", works: true, note: "~3.7 hours" },
      { name: "Home server hosting", works: true, note: "Plenty of upstream for serving" },
    ],
    comparison: "600 Mbps cable service is rare and typically costs $80-100/mo. Frontier's Fiber 1 Gig at $49.99/mo gives you 67% more speed — and unlike cable, 600 Mbps upload as well. If a cable provider is quoting you 600 Mbps, Frontier Fiber is almost certainly the better value.",
  },
  "1000": {
    speed: 1000, title: "1 Gig (1,000 Mbps) Internet",
    description: "1 Gig is the gold standard for home internet. With 1,000/1,000 Mbps symmetrical speeds, nothing slows you down — ever.",
    idealFor: ["Large families (5+)", "Serious gamers & streamers", "Home offices", "Content creators & video editors", "Smart homes with 50+ devices"],
    notIdealFor: ["Budget-conscious minimal users (Fiber 500 is better value)"],
    plan: { name: "Frontier Fiber 1 Gig", price: "$49.99/mo", href: "/internet" },
    householdSize: "5+ people", devices: "50+ devices",
    activities: [
      { name: "Literally everything", works: true, note: "Overkill for most tasks — in the best way" },
      { name: "8K streaming", works: true, note: "Future-proof" },
      { name: "4K live streaming + gaming + calls", works: true, note: "All at once, no sweat" },
      { name: "50 GB game download", works: true, note: "~7 minutes" },
      { name: "Upload 4K video to YouTube", works: true, note: "Fast export & upload" },
      { name: "Multiple home offices", works: true, note: "3+ remote workers, no issues" },
      { name: "Full home NAS backup", works: true, note: "1 TB in ~2.5 hours" },
    ],
    comparison: "Frontier's 1 Gig plan at $49.99/mo competes with AT&T Fiber ($55/mo), Xfinity ($70/mo), and Spectrum ($90/mo). You get symmetrical 1,000/1,000 Mbps vs cable's typical 1,000/35 Mbps — a 28x upload advantage.",
  },
  "2000": {
    speed: 2000, title: "2 Gig (2,000 Mbps) Internet",
    description: "2 Gig delivers the fastest residential speeds available from Frontier. With 2,000/2,000 Mbps, this is for power users who want zero compromises.",
    idealFor: ["Tech enthusiasts", "Professional content creators", "Large families with extreme usage", "Home servers & NAS", "Future-proofing your connection"],
    notIdealFor: ["Most households (1 Gig is plenty)"],
    plan: { name: "Frontier Fiber 2 Gig", price: "$64.99/mo", href: "/internet" },
    householdSize: "Any (power users)", devices: "Unlimited",
    activities: [
      { name: "Everything at 1 Gig — doubled", works: true, note: "No bottleneck exists" },
      { name: "4K video editing over network", works: true, note: "Real-time scrubbing" },
      { name: "Multiple simultaneous large transfers", works: true, note: "2 Gbps aggregate" },
      { name: "Game downloads (100 GB)", works: true, note: "~7 minutes" },
      { name: "Home lab / server hosting", works: true, note: "2 Gbps upload" },
      { name: "Multiple VR/AR experiences", works: true, note: "Ultra-low latency" },
      { name: "Full home backup (5 TB)", works: true, note: "~6 hours" },
    ],
    comparison: "At $64.99/mo, Frontier's 2 Gig plan is the most affordable multi-gig option. AT&T's 2 Gig is $110/mo and Xfinity's is $120/mo. Plus, Frontier gives you symmetrical upload — 2,000 Mbps up vs cable's 100 Mbps up.",
  },
  "5000": {
    speed: 5000, title: "5 Gig (5,000 Mbps) Internet",
    description: "5 Gig is Frontier's fastest residential plan — perfect for early adopters and users who want the ultimate in home connectivity.",
    idealFor: ["Early tech adopters", "Professional studios", "Extreme power users", "Future-proofing for 5+ years"],
    notIdealFor: ["Most residential users", "Budget-focused buyers"],
    plan: { name: "Frontier Fiber 5 Gig", price: "$89.99/mo", href: "/internet" },
    householdSize: "Any (enthusiasts)", devices: "Unlimited",
    activities: [
      { name: "Any internet activity", works: true, note: "Speed is never the bottleneck" },
      { name: "Multiple 8K streams + gaming + VR", works: true, note: "Simultaneously" },
      { name: "Professional video production", works: true, note: "Upload raw 4K/8K footage fast" },
      { name: "100 GB game download", works: true, note: "Under 3 minutes" },
      { name: "Full NAS sync", works: true, note: "10 TB in ~4.5 hours" },
      { name: "Local network speed (with 10G hardware)", works: true, note: "Near-LAN speeds" },
      { name: "Home data center", works: true, note: "5 Gbps symmetrical" },
    ],
    comparison: "5 Gig is available in limited Frontier markets, making it one of the fastest residential options in the US. At $89.99/mo with symmetrical speeds, it's futureproof for the next decade of internet use.",
  },
  "7000": {
    speed: 7000, title: "7 Gig (7,000 Mbps) Internet",
    description: "7 Gig is Frontier's absolute fastest residential plan — the pinnacle of home internet for those who demand maximum performance.",
    idealFor: ["Ultimate power users", "Professional content studios", "Smart home enthusiasts with 100+ devices", "Anyone who wants the fastest available speed"],
    notIdealFor: ["Budget-focused households", "Light internet users"],
    plan: { name: "Frontier Fiber 7 Gig", price: "$109.99/mo", href: "/internet" },
    householdSize: "Any (enthusiasts)", devices: "Unlimited",
    activities: [
      { name: "Any internet activity", works: true, note: "Speed is never the bottleneck" },
      { name: "Multiple 8K streams + gaming + VR simultaneously", works: true, note: "Effortlessly" },
      { name: "Professional 8K video production & upload", works: true, note: "7 Gbps symmetrical upload" },
      { name: "100 GB game download", works: true, note: "Under 2 minutes" },
      { name: "Full NAS sync (10 TB)", works: true, note: "~3.2 hours" },
      { name: "Local network speed (with 10G hardware)", works: true, note: "Near-LAN speeds" },
      { name: "Home data center / server hosting", works: true, note: "7 Gbps symmetrical" },
    ],
    comparison: "At $109.99/mo, Frontier's 7 Gig plan is the fastest residential internet available in the US. No other major ISP offers 7 Gbps symmetrical speeds to residential customers at this price point.",
  },
}

export async function generateStaticParams() {
  return Object.keys(speedData).map(speed => ({ speed }))
}

export async function generateMetadata({ params }: { params: Promise<{ speed: string }> }): Promise<Metadata> {
  const { speed } = await params
  const data = speedData[speed]
  if (!data) return {}
  return {
    title: `${data.title} — Is It Fast Enough? | Frontier Deals`,
    description: data.description,
    alternates: { canonical: `/internet-speeds/${speed}` },
    openGraph: { title: `${data.title}: Speed Guide`, description: data.description },
  }
}

export default async function Page({ params }: { params: Promise<{ speed: string }> }) {
  const { speed } = await params
  const data = speedData[speed]
  if (!data) notFound()

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: `Is ${data.speed} Mbps fast enough for streaming?`, acceptedAnswer: { "@type": "Answer", text: data.speed >= 100 ? `Yes, ${data.speed} Mbps is more than enough for streaming, including 4K content on multiple devices simultaneously.` : `${data.speed} Mbps can handle basic HD streaming but may struggle with 4K or multiple streams at once.` } },
      { "@type": "Question", name: `Is ${data.speed} Mbps good for gaming?`, acceptedAnswer: { "@type": "Answer", text: data.speed >= 100 ? `Yes, ${data.speed} Mbps is great for gaming. Online gaming only requires 10-25 Mbps, but extra bandwidth helps with game downloads and concurrent use.` : `${data.speed} Mbps can handle online gaming, but you may experience slowdowns if others are using the connection at the same time.` } },
      { "@type": "Question", name: `How many devices can ${data.speed} Mbps support?`, acceptedAnswer: { "@type": "Answer", text: `${data.speed} Mbps can comfortably support ${data.devices}. Each HD stream uses about 5 Mbps and each 4K stream uses about 25 Mbps.` } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Internet Speeds", href: "/internet-speeds" }, { label: `${data.speed >= 1000 ? `${data.speed / 1000} Gig` : `${data.speed} Mbps`}` }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3C] via-[#12305e] to-[#0A1E3C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <span className="inline-block bg-white/10 text-sm font-semibold px-4 py-1 rounded-full mb-4">Speed Guide</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{data.description}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 rounded-xl p-4 min-w-[140px]">
              <p className="text-sm text-white/60">Household Size</p>
              <p className="text-xl font-bold">{data.householdSize}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 min-w-[140px]">
              <p className="text-sm text-white/60">Connected Devices</p>
              <p className="text-xl font-bold">{data.devices}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 min-w-[140px]">
              <p className="text-sm text-white/60">Best Frontier Plan</p>
              <p className="text-xl font-bold">{data.plan.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">What Can You Do with {data.speed >= 1000 ? `${data.speed / 1000} Gig` : `${data.speed} Mbps`}?</h2>
          <div className="space-y-3">
            {data.activities.map(({ name, works, note }, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-lg border ${works ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${works ? "bg-green-500 text-white" : "bg-red-400 text-white"}`}>
                  {works ? <Check className="h-5 w-5" /> : <span className="text-lg">✕</span>}
                </span>
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-gray-600">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For / Not Ideal For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-green-200">
            <h3 className="text-xl font-bold text-green-700 mb-4">✅ Ideal For</h3>
            <ul className="space-y-2">
              {data.idealFor.map((item, i) => <li key={i} className="flex items-center gap-2 text-gray-700"><Check className="h-4 w-4 text-green-500 flex-shrink-0" /> {item}</li>)}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-red-200">
            <h3 className="text-xl font-bold text-red-600 mb-4">⚠️ Consider Faster</h3>
            <ul className="space-y-2">
              {data.notIdealFor.map((item, i) => <li key={i} className="flex items-center gap-2 text-gray-700"><span className="text-red-400 flex-shrink-0">→</span> {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Take */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Recommendation</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{data.comparison}</p>
          <div className="bg-gradient-to-r from-[#0A1E3C] to-[#12305e] text-white rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/60 text-sm">Recommended Plan</p>
                <p className="text-2xl font-bold">{data.plan.name}</p>
                <p className="text-3xl font-bold text-[#64ffda]">{data.plan.price}</p>
                <p className="text-white/60 text-sm mt-1">No contract • No data caps • Free router</p>
              </div>
              <Link href={data.plan.href} className="inline-flex items-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors cta-pulse">
                View Plan Details <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Other Speeds */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">Browse Other Speed Guides</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {Object.keys(speedData).filter(s => s !== speed).map(s => {
              const spd = parseInt(s)
              return (
                <Link key={s} href={`/internet-speeds/${s}`} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#DA202C] hover:shadow-md transition-all">
                  <p className="font-bold text-lg">{spd >= 1000 ? `${spd / 1000}G` : s}</p>
                  <p className="text-xs text-gray-500">Mbps</p>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/internet-speeds" className="text-[#DA202C] font-semibold hover:underline">← Back to Speed Guide Hub</Link>
          </div>
        </div>
      </section>
    </>
  )
}
