import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, ArrowRight, Gift, Users, Gamepad2, Monitor, Home, Briefcase, Wifi } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

const plans: Record<string, {
  name: string; speed: string; price: string; wasPrice: string; reward: string;
  router: string; idealFor: string; planKey: string; maxDevices: string;
  bestFor: string[]; features: string[]; useCases: { icon: React.ReactNode; title: string; desc: string }[];
}> = {
  "fiber-500": {
    name: "Fiber 500", speed: "500/500 Mbps", price: "34.99", wasPrice: "39.99", reward: "$50 Visa® Reward Card",
    router: "eero Wi-Fi 6", idealFor: "small families", planKey: "fiber-500", maxDevices: "10-15",
    bestFor: ["Small families (2-4 people)", "HD and some 4K streaming", "Video calls and light gaming", "Work from home basics"],
    features: ["500 Mbps symmetrical speeds", "Free eero Wi-Fi 6 router", "Free professional installation", "Unlimited data — no caps", "No annual contracts", "Auto Pay discount included"],
    useCases: [
      { icon: <Monitor className="h-6 w-6" />, title: "Multi-Stream", desc: "Stream on 3-4 screens at once in HD without issues." },
      { icon: <Briefcase className="h-6 w-6" />, title: "Home Office", desc: "Solid for Zoom calls, email, and everyday work tasks." },
      { icon: <Wifi className="h-6 w-6" />, title: "Connected Home", desc: "Run 10+ smart devices alongside streaming and browsing." },
    ],
  },
  "fiber-1-gig": {
    name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "49.99", wasPrice: "59.99", reward: "$100 Visa® Reward Card",
    router: "eero Pro 6", idealFor: "active families and remote workers", planKey: "fiber-1-gig", maxDevices: "20+",
    bestFor: ["Active families (3-5 people)", "4K streaming on multiple TVs", "Serious remote work with large files", "Online gaming"],
    features: ["1 Gbps symmetrical speeds", "Free eero Pro 6 router", "Free professional installation", "Unlimited data — no caps", "No annual contracts", "$100 Visa® Reward Card"],
    useCases: [
      { icon: <Gamepad2 className="h-6 w-6" />, title: "Gaming", desc: "Low latency for competitive online gaming and fast game downloads." },
      { icon: <Briefcase className="h-6 w-6" />, title: "Remote Work", desc: "VPN, cloud storage, video conferencing — all running smooth." },
      { icon: <Monitor className="h-6 w-6" />, title: "4K Streaming", desc: "Multiple 4K streams on different TVs at the same time." },
    ],
  },
  "fiber-2-gig": {
    name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "64.99", wasPrice: "74.99", reward: "$150 Visa® Reward Card",
    router: "eero Pro 6E", idealFor: "large families and smart homes", planKey: "fiber-2-gig", maxDevices: "40+",
    bestFor: ["Large families (5-8 people)", "4K/8K streaming everywhere", "Competitive gaming + streaming", "Content creation and uploads"],
    features: ["2 Gbps symmetrical speeds", "Free eero Pro 6E router", "Free professional installation", "Unlimited data — no caps", "No annual contracts", "$150 Visa® Reward Card"],
    useCases: [
      { icon: <Users className="h-6 w-6" />, title: "Whole Family", desc: "Everyone online at once — gaming, streaming, video calls, homework." },
      { icon: <Monitor className="h-6 w-6" />, title: "Content Creation", desc: "Upload large video files in minutes instead of hours." },
      { icon: <Home className="h-6 w-6" />, title: "Full Smart Home", desc: "Cameras, locks, lights, speakers — dozens of devices, zero lag." },
    ],
  },
  "fiber-5-gig": {
    name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "89.99", wasPrice: "99.99", reward: "$200 Visa® Reward Card",
    router: "eero Max 7", idealFor: "power users and tech enthusiasts", planKey: "fiber-5-gig", maxDevices: "75+",
    bestFor: ["Power users and tech enthusiasts", "Professional content creation", "Home data servers and NAS", "Large household with many gamers"],
    features: ["5 Gbps symmetrical speeds", "Free eero Max 7 (Wi-Fi 7) router", "Free professional installation", "Unlimited data — no caps", "No annual contracts", "$200 Visa® Reward Card"],
    useCases: [
      { icon: <Gamepad2 className="h-6 w-6" />, title: "Pro Gaming", desc: "Near-zero lag. Download a 100GB game in under 3 minutes." },
      { icon: <Briefcase className="h-6 w-6" />, title: "Pro Creative", desc: "Edit and render 4K/8K video. Upload to cloud instantly." },
      { icon: <Home className="h-6 w-6" />, title: "Home Server", desc: "Run NAS, Plex, security DVR — all at full speed." },
    ],
  },
  "fiber-7-gig": {
    name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "109.99", wasPrice: "119.99", reward: "$200 Visa® Reward Card",
    router: "eero Max 7", idealFor: "the ultimate home network", planKey: "fiber-7-gig", maxDevices: "100+",
    bestFor: ["Absolute fastest speed available", "Multi-user pro workstations", "Enterprise-grade home networks", "Future-proof infrastructure"],
    features: ["7 Gbps symmetrical speeds", "Free eero Max 7 (Wi-Fi 7) router", "Free professional installation", "Unlimited data — no caps", "No annual contracts", "$200 Visa® Reward Card"],
    useCases: [
      { icon: <Gamepad2 className="h-6 w-6" />, title: "No Limits", desc: "The fastest residential internet in America. Period." },
      { icon: <Briefcase className="h-6 w-6" />, title: "Home Office HQ", desc: "Multiple people running heavy workloads, simultaneously." },
      { icon: <Monitor className="h-6 w-6" />, title: "8K Ready", desc: "Stream 8K content on multiple screens without breaking a sweat." },
    ],
  },
}

const slugs = Object.keys(plans)

interface Props { params: Promise<{ plan: string }> }

export async function generateStaticParams() {
  return slugs.map((plan) => ({ plan }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { plan: planSlug } = await params
  const plan = plans[planSlug]
  if (!plan) return {}
  return {
    title: `Frontier ${plan.name} Plan: ${plan.speed} for $${plan.price}/mo | Frontier Deals`,
    description: `Frontier ${plan.name} delivers ${plan.speed} symmetrical speeds for $${plan.price}/mo. Ideal for ${plan.idealFor}. Includes ${plan.router}, unlimited data, and ${plan.reward}.`,
    alternates: { canonical: `/internet/${planSlug}` },
    openGraph: {
      title: `Frontier ${plan.name}: ${plan.speed} — $${plan.price}/mo`,
      description: `${plan.speed} symmetrical fiber internet ideal for ${plan.idealFor}. Free installation, no contracts.`,
      type: "website",
    },
  }
}

export default async function SpeedTierPage({ params }: Props) {
  const { plan: planSlug } = await params
  const plan = plans[planSlug]
  if (!plan) notFound()

  const otherPlans = slugs.filter((s) => s !== planSlug)

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Frontier ${plan.name} Internet`,
    description: `${plan.speed} symmetrical fiber internet. ${plan.router} included. Ideal for ${plan.idealFor}.`,
    brand: { "@type": "Brand", name: "Frontier" },
    offers: {
      "@type": "Offer",
      price: plan.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      seller: { "@type": "Organization", name: "Frontier Communications" },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Breadcrumbs items={[
        { label: "Internet Plans", href: "/internet" },
        { label: plan.name },
      ]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-4">Frontier {plan.name}</h1>
            <p className="text-xl text-white/60 mb-2">{plan.speed} — Symmetrical Upload & Download</p>
            <div className="flex items-baseline justify-center gap-2 my-6">
              <span className="text-5xl md:text-6xl font-black text-white">${plan.price.split(".")[0]}</span>
              <span className="text-2xl font-bold text-white/60">.{plan.price.split(".")[1]}</span>
              <span className="text-white/40">/mo</span>
              <span className="text-white/30 line-through ml-2">${plan.wasPrice}</span>
            </div>
            <p className="text-sm text-white/40 mb-6">with Auto Pay & paperless billing</p>
            <div className="flex items-center justify-center gap-2 text-[#64ffda] text-sm font-semibold mb-8">
              <Gift className="h-4 w-4" /> {plan.reward}
            </div>
            <PageOrderButton planName={plan.planKey} className="bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg cta-pulse shadow-xl">
              Order {plan.name} Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-[#0A1E3C] mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#0A1E3C] mb-6">Best For</h2>
              <ul className="space-y-3">
                {plan.bestFor.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#DA202C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500">
                  <strong className="text-[#0A1E3C]">Recommended devices:</strong> Up to {plan.maxDevices} connected simultaneously
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {plan.useCases.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-[#DA202C]/10 text-[#DA202C] flex items-center justify-center mx-auto mb-4">{icon}</div>
                <h3 className="font-bold text-[#0A1E3C] mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Plans */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0A1E3C] mb-6 text-center">Explore Other Plans</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {otherPlans.map((s) => (
              <Link key={s} href={`/internet/${s}`} className="bg-gray-50 hover:bg-gray-100 text-[#0A1E3C] px-4 py-2 rounded-full text-sm font-medium transition-colors">
                {plans[s].name} — ${plans[s].price}/mo
              </Link>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/internet" className="text-[#DA202C] hover:underline font-medium text-sm">Compare all plans →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#DA202C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Get {plan.name} Today</h2>
          <p className="text-lg text-white/80 mb-8">{plan.speed} for just ${plan.price}/mo. Free installation, no contracts.</p>
          <PageOrderButton planName={plan.planKey} className="bg-white text-[#DA202C] font-bold h-14 px-10 rounded-xl text-lg hover:bg-gray-100">
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>
    </>
  )
}
