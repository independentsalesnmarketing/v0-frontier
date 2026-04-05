import Link from "next/link"
import {
  Wifi,
  Shield,
  Zap,
  MapPin,
  Phone,
  ChevronRight,
  Star,
  Users,
  Clock,
  Award,
  ArrowRight,
  Gift,
  Check,
  Monitor,
  Gamepad2,
  Home,
  BadgeCheck,
} from "lucide-react"
import { getStateInitials } from "@/lib/utils"
import { getMajorCityData } from "@/lib/major-city-data"
import { frontierCoverage } from "@/lib/coverage-data"
import { generateEnhancedCityContent } from "@/lib/enhanced-city-content"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

interface CityPageTemplateProps {
  cityName: string
  stateName: string
}

/** Return real competitor names for a given state */
function getCompetitors(stateName: string): [string, string] {
  const map: Record<string, [string, string]> = {
    California: ["Spectrum", "AT&T"],
    Texas: ["AT&T", "Spectrum"],
    Florida: ["Spectrum", "Xfinity"],
    "New York": ["Spectrum", "Optimum"],
    Ohio: ["Spectrum", "AT&T"],
    Connecticut: ["Xfinity", "Optimum"],
    Indiana: ["Xfinity", "AT&T"],
    Minnesota: ["Xfinity", "CenturyLink"],
    Pennsylvania: ["Xfinity", "Verizon"],
    "North Carolina": ["Spectrum", "AT&T"],
    "South Carolina": ["Spectrum", "AT&T"],
    "West Virginia": ["Xfinity", "Suddenlink"],
    Illinois: ["Xfinity", "AT&T"],
    Georgia: ["Xfinity", "AT&T"],
    Arizona: ["Cox", "CenturyLink"],
    Nevada: ["Cox", "CenturyLink"],
    Iowa: ["Mediacom", "CenturyLink"],
    Nebraska: ["Cox", "CenturyLink"],
    Tennessee: ["Xfinity", "AT&T"],
  }
  return map[stateName] || ["Xfinity", "AT&T"]
}

function getNearbyCities(cityName: string, stateName: string): string[] {
  const cities = frontierCoverage[stateName] || []
  return cities.filter((c) => c !== cityName).slice(0, 8)
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
}

const plans = [
  { name: "Fiber 500", speed: "500/500 Mbps", price: "34.99", key: "fiber-500", devices: "5-10", router: "eero Wi-Fi 6", reward: "$50 Visa® Reward Card" },
  { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "49.99", key: "fiber-1-gig", devices: "10-20", router: "eero Pro 6E", reward: "$100 Visa® Reward Card" },
  { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "64.99", key: "fiber-2-gig", devices: "30-50+", router: "eero Pro 6E", reward: "$150 Visa® Reward Card", popular: true as const },
  { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "89.99", key: "fiber-5-gig", devices: "50-100+", router: "eero Max 7", reward: "$200 Visa® Reward Card" },
]

export default function CityPageTemplate({ cityName, stateName }: CityPageTemplateProps) {
  const stateAbbr = getStateInitials(stateName)
  const majorData = getMajorCityData(cityName, stateName)
  const enhanced = generateEnhancedCityContent(cityName, stateName, true, 5000, majorData?.population)
  const [competitor1, competitor2] = majorData?.localCompetitors || getCompetitors(stateName)
  const neighborhoods = majorData?.neighborhoodsServed || enhanced.neighborhoods
  const nearbyCities = getNearbyCities(cityName, stateName)
  const siblingCities = (frontierCoverage[stateName] || [])
    .filter((c) => c.toLowerCase() !== cityName.toLowerCase())
    .sort()

  const intro = majorData?.intro || enhanced.overviewIntro

  const whyFiber = majorData?.whyFiber
    || `Cable internet in ${cityName} shares bandwidth across your neighborhood, which means slower speeds when everyone logs on in the evening. Frontier Fiber gives each household a dedicated line, so your speeds stay consistent whether it's 2 PM or prime time.`

  const cityHistory = enhanced.cityIntro
  const usagePatterns = enhanced.usagePatterns
  const usageStats = enhanced.usageStats
  const infrastructure = enhanced.infrastructure

  return (
  <main className="min-h-screen bg-white">
  <Breadcrumbs items={[
    { label: "Coverage", href: "/coverage" },
    { label: stateName, href: `/internet-in/${slugify(stateName)}` },
    { label: `${cityName}, ${stateAbbr}` },
  ]} />

  {/* ═══════ HERO ═══════ */}
  <section className="relative bg-[#04111f] text-white overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#DA202C]/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-[#00b7c3]/8 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
          <MapPin className="w-4 h-4 text-[#DA202C]" />
          <span className="text-sm font-medium">{cityName}, {stateAbbr}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400">Available</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1]">
          Frontier Fiber Internet<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA202C] to-[#ff6b6b]">in {cityName}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl leading-relaxed">
          {majorData?.tagline || `Blazing-fast fiber internet for ${cityName} homes. Speeds up to 7 Gig, $0 installation, no data caps.`}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { icon: Zap, text: "Up to 7 Gig" },
            { icon: Shield, text: "No contracts" },
            { icon: Gift, text: "Free installation" },
            { icon: Wifi, text: "Free eero router" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <Icon className="w-4 h-4 text-[#64ffda]" />
              <span className="text-sm font-medium text-white/80">{text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <PageOrderButton
            className="inline-flex items-center justify-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-[#DA202C]/25"
          >
            View Plans & Order Online
            <ArrowRight className="w-5 h-5 ml-2" />
          </PageOrderButton>
          <Link href="/internet" className="inline-flex items-center justify-center border border-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/5 transition-all">
            Compare All Plans
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 bg-white/[0.03]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { value: "5 Gig", label: "Max Speed", color: "text-[#DA202C]" },
            { value: "$34.99", label: "Starting Price", color: "text-[#64ffda]" },
            { value: "$0", label: "Installation", color: "text-white" },
            { value: "Unlimited", label: "Data", color: "text-[#00B7C3]" },
          ].map(({ value, label, color }) => (
            <div key={label} className="py-6 text-center">
              <div className={`text-2xl md:text-3xl font-black ${color}`}>{value}</div>
              <div className="text-xs text-white/40 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* ═══════ SOCIAL PROOF ═══════ */}
  <section className="py-6 bg-white border-b border-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
        <span className="flex items-center gap-1.5">
          <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
          <span className="font-semibold text-gray-900">4.8/5</span> from 12,800+ reviews
        </span>
        <span className="hidden sm:block w-px h-4 bg-gray-200" />
        <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#DA202C]" /> Authorized Frontier Retailer</span>
        <span className="hidden sm:block w-px h-4 bg-gray-200" />
        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gray-400" /> Free next-day installation</span>
      </div>
    </div>
  </section>

  {/* ═══════ LOCAL INTRO ═══════ */}
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1e3c] mb-6">
          What Frontier Fiber Means for {cityName}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">{intro}</p>
      </div>
    </div>
  </section>

  {/* ═══════ LOCAL STATS ═══════ */}
  <section className="py-10 bg-[#f8f9fb] border-y border-gray-100">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
        {usageStats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-2xl md:text-3xl font-black text-[#0a1e3c]">{value}</div>
            <div className="text-xs text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ═══════ CITY INTERNET LANDSCAPE ═══════ */}
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0a1e3c] mb-6">
          Internet in {cityName}: The Local Landscape
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>{cityHistory}</p>
          <p>{usagePatterns}</p>
          <p>{infrastructure}</p>
        </div>
      </div>
    </div>
  </section>

  {/* ═══════ PLANS ═══════ */}
  <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1e3c] mb-3">
          Plans Available in {cityName}
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Every plan includes free installation, a free router, no data caps, and no annual contracts.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={`relative bg-white rounded-2xl p-6 flex flex-col transition-shadow ${
              plan.popular
                ? "ring-2 ring-[#DA202C] shadow-xl shadow-[#DA202C]/10"
                : "border border-gray-200 shadow-sm hover:shadow-md"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#DA202C] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </div>
            )}
            <div className="mb-5">
              <h3 className="font-bold text-[#0a1e3c]">{plan.name}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{plan.speed}</p>
            </div>
            <div className="flex items-baseline mb-5">
              <span className="text-4xl font-black text-[#0a1e3c]">${plan.price.split(".")[0]}</span>
              <span className="text-gray-400 ml-0.5">.{plan.price.split(".")[1]}/mo</span>
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                `${plan.devices} devices`,
                `Free ${plan.router}`,
                "No data caps",
                plan.reward,
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#64ffda] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <PageOrderButton
              planName={plan.key}
              className={`w-full font-bold py-3 rounded-xl text-sm transition-all ${
                plan.popular
                  ? "bg-[#DA202C] hover:bg-[#b71c1c] text-white shadow-lg shadow-[#DA202C]/20"
                  : "bg-[#0a1e3c] hover:bg-[#1d3461] text-white"
              }`}
            >
              Get {plan.name}
            </PageOrderButton>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ═══════ WHY FIBER ═══════ */}
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1e3c] mb-4">
            Why {cityName} Residents Are Switching to Fiber
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{whyFiber}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Symmetrical Speeds", color: "bg-red-50 text-[#DA202C]",
              desc: `Upload as fast as you download. Critical for ${cityName} professionals on video calls, cloud backups, and content creation.` },
            { icon: Shield, title: "Dedicated Line", color: "bg-blue-50 text-blue-600",
              desc: "Your fiber line isn't shared with neighbors. No peak-hour slowdowns, no congestion — just consistent speed 24/7." },
            { icon: Award, title: "Future-Proof", color: "bg-emerald-50 text-emerald-600",
              desc: `As ${cityName} grows, fiber scales with it. The same line delivering 2 Gig today can deliver 10 Gig tomorrow.` },
          ].map(({ icon: Icon, title, color, desc }) => (
            <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-5`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a1e3c] mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* ═══════ COMPARISON TABLE ═══════ */}
  <section className="py-16 md:py-20 bg-[#04111f] text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          How Frontier Compares in {cityName}
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">
          Side-by-side comparison based on publicly available plan details for {cityName}, {stateAbbr}.
        </p>
      </div>

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-white/40 font-medium">Feature</th>
              <th className="text-center py-4 px-6 text-[#DA202C] font-bold">Frontier Fiber</th>
              <th className="text-center py-4 px-4 text-white/60 font-medium">{competitor1}</th>
              <th className="text-center py-4 px-4 text-white/60 font-medium">{competitor2}</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "Max Speed", frontier: "5,000 Mbps", c1: "Up to 1 Gbps", c2: "Up to 940 Mbps" },
              { feature: "Upload Speed", frontier: "5,000 Mbps", c1: "Up to 35 Mbps", c2: "Up to 35 Mbps" },
              { feature: "Data Caps", frontier: "None ✓", c1: "1.2 TB/mo", c2: "1 TB/mo" },
              { feature: "Contract", frontier: "None ✓", c1: "1-year typical", c2: "2-year typical" },
              { feature: "Installation", frontier: "FREE ✓", c1: "$99", c2: "$75" },
              { feature: "Equipment Fee", frontier: "Included ✓", c1: "$14/mo", c2: "$10/mo" },
            ].map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.03]" : ""}>
                <td className="py-3.5 px-4 text-white/50">{row.feature}</td>
                <td className="py-3.5 px-6 text-center font-semibold text-[#64ffda]">{row.frontier}</td>
                <td className="py-3.5 px-4 text-center text-white/40">{row.c1}</td>
                <td className="py-3.5 px-4 text-center text-white/40">{row.c2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  {/* ═══════ WHO IT'S FOR ═══════ */}
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-black text-[#0a1e3c] mb-12 text-center">
        Built for How {cityName} Lives Online
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {[
          { icon: Users, title: enhanced.userProfiles[2]?.title || "Families", gradient: "from-rose-500/10 to-orange-500/10",
            desc: enhanced.userProfiles[2]?.description || `Stream, game, and video-call simultaneously. With no data caps, ${cityName} families use the internet without limits.` },
          { icon: Monitor, title: enhanced.userProfiles[0]?.title || "Remote Workers", gradient: "from-blue-500/10 to-cyan-500/10",
            desc: enhanced.userProfiles[0]?.description || "Symmetrical speeds keep Zoom calls crystal-clear and file uploads fast — even when the rest of the household is online." },
          { icon: Gamepad2, title: enhanced.userProfiles[1]?.title || "Gamers", gradient: "from-purple-500/10 to-pink-500/10",
            desc: enhanced.userProfiles[1]?.description || "Low latency, zero throttling, and multi-gig speeds mean you never lag — even during peak hours." },
          { icon: Home, title: enhanced.userProfiles[3]?.title || "Smart Homes", gradient: "from-emerald-500/10 to-teal-500/10",
            desc: enhanced.userProfiles[3]?.description || "Cameras, thermostats, doorbells, speakers — fiber handles 50+ connected devices without breaking a sweat." },
        ].map(({ icon: Icon, title, gradient, desc }) => (
          <div key={title} className={`rounded-2xl bg-gradient-to-br ${gradient} p-6 border border-gray-100`}>
            <Icon className="w-8 h-8 text-[#0a1e3c] mb-4" />
            <h3 className="font-bold text-[#0a1e3c] mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ═══════ NEIGHBORHOODS ═══════ */}
  {neighborhoods.length > 0 && (
  <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1e3c] mb-4">
          Neighborhoods We Serve in {cityName}
        </h2>
        <p className="text-gray-500 mb-8">
          Frontier Fiber is actively expanding across {cityName}. Check your specific address for availability.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {neighborhoods.map((n) => (
            <span key={n} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-[#0a1e3c] shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#DA202C]" />
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
  )}

  {/* ═══════ FAQ ═══════ */}
  <section className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1e3c] mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-gray-200">
          {[
            { q: `Is Frontier Fiber available at my address in ${cityName}?`,
              a: `Frontier Fiber is expanding across ${cityName}, currently covering major neighborhoods${neighborhoods.length > 0 ? ` including ${neighborhoods.slice(0, 3).join(", ")}` : ""}. The fastest way to check your specific address is to use our online availability checker.` },
            { q: "What makes fiber different from cable internet?",
              a: "Fiber uses light signals through glass strands instead of electrical signals through copper. This means faster speeds, lower latency, and a dedicated connection that doesn't slow down when your neighbors are online. Upload speeds match download speeds, which cable cannot offer." },
            { q: `How long does installation take in ${cityName}?`,
              a: "Typical installation takes 2-4 hours depending on your home's configuration. A Frontier technician handles everything from running the fiber line to setting up your router and ensuring your devices are connected. Installation is free on all plans." },
            { q: "Are there any contracts or hidden fees?",
              a: "No. Frontier Fiber plans are month-to-month with no annual contracts. The price you see is the price you pay — no hidden equipment fees, data overage charges, or surprise price increases during your first year." },
            { q: `How does Frontier compare to ${competitor1} and ${competitor2} in ${cityName}?`,
              a: `Frontier Fiber offers symmetrical speeds (same upload and download), no data caps, no contracts, and free installation. Most cable providers in ${cityName} have data caps, require contracts, and offer upload speeds that are a fraction of their download speeds.` },
            { q: `What internet speed do I need in ${cityName}?`,
              a: `It depends on your household. For 1-3 people doing basic browsing and streaming, Fiber 500 (${enhanced.usageStats[0]?.value ? `supporting ${enhanced.usageStats[0].value.replace(/[^0-9]/g, '')}+ devices` : "500 Mbps"}) is a great start. For families with multiple streamers and gamers, we recommend Fiber 2 Gig. Working from home with video calls? Fiber 1 Gig gives you rock-solid symmetrical speeds.` },
            { q: `Can I keep my current phone number if I switch to Frontier in ${cityName}?`,
              a: `Yes. If you bundle Frontier Fiber with home phone service, you can keep your existing phone number. The porting process typically takes 1-2 business days and is handled entirely by our team.` },
          ].map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex items-center justify-between cursor-pointer py-5 text-left font-semibold text-[#0a1e3c] hover:text-[#DA202C] transition-colors">
                {faq.q}
                <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4" />
              </summary>
              <p className="pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* ═══════ NEARBY CITIES ═══════ */}
  {nearbyCities.length > 0 && (
  <section className="py-12 bg-gray-50 border-y border-gray-200">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-[#0a1e3c] mb-6 text-center">
          Frontier Fiber in Nearby {stateName} Cities
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {nearbyCities.map((city) => (
            <Link
              key={city}
              href={`/fiber-internet-in/${slugify(city)}/${slugify(stateName)}`}
              className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#DA202C]/30 hover:text-[#DA202C] text-[#0a1e3c] px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {city}, {stateAbbr}
              <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
  )}

  {/* ═══════ FINAL CTA ═══════ */}
  <section className="relative py-20 bg-[#04111f] text-white overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[300px] rounded-full bg-[#DA202C]/10 blur-[100px] pointer-events-none" />
    <div className="container mx-auto px-4 relative text-center">
      <h2 className="text-3xl md:text-5xl font-black mb-4">
        Ready for Frontier Fiber<br />in {cityName}?
      </h2>
      <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
        Plans from $34.99/mo. Free installation. No contracts. No data caps.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <PageOrderButton
          className="inline-flex items-center justify-center bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg shadow-[#DA202C]/25"
        >
          Order Online — From $34.99/mo
          <ArrowRight className="w-5 h-5 ml-2" />
        </PageOrderButton>
        <Link href="/internet" className="inline-flex items-center justify-center border border-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/5 transition-all">
          Compare All Plans
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  </section>

  {/* ═══════ ALL CITIES ═══════ */}
  <section className="py-12 bg-white border-t border-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold text-[#0a1e3c] mb-6">
        Other {stateName} Cities with Frontier Fiber
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {siblingCities.map((sibling) => (
          <Link
            key={sibling}
            href={`/fiber-internet-in/${slugify(sibling)}/${slugify(stateName)}`}
            className="text-sm text-gray-600 hover:text-[#DA202C] hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
          >
            {sibling}
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/coverage" className="inline-flex items-center text-sm font-medium text-[#DA202C] hover:text-[#b71c1c]">
          View all Frontier coverage areas
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  </section>

  {/* ═══════ RESOURCES ═══════ */}
  <section className="py-8 bg-gray-50 border-t border-gray-100">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-[#0a1e3c] mb-4">Helpful Resources</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link href="/blog/fiber-vs-cable" className="text-sm text-[#DA202C] hover:underline">Fiber vs Cable Internet →</Link>
          <Link href="/blog/how-much-internet-speed-do-i-need" className="text-sm text-[#DA202C] hover:underline">How Much Speed Do I Need? →</Link>
          <Link href="/blog/frontier-installation-guide-2025" className="text-sm text-[#DA202C] hover:underline">Installation Guide →</Link>
        </div>
      </div>
    </div>
  </section>

  {/* ═══════ STRUCTURED DATA ═══════ */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Frontier Fiber Internet in ${cityName}, ${stateName}`,
          description: `Frontier Fiber Internet plans in ${cityName}, ${stateAbbr}. Speeds up to 7 Gig, free installation, no data caps.`,
          url: `https://frontier-deals.com/fiber-internet-in/${slugify(cityName)}/${slugify(stateName)}`,
          mainEntity: {
            "@type": "Product",
            name: "Frontier Fiber Internet",
            image: "https://frontier-deals.com/android-chrome-192x192.png",
            description: `High-speed fiber internet in ${cityName}, ${stateAbbr} with speeds up to 7 Gbps`,
            brand: { "@type": "Brand", name: "Frontier Communications" },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "34.99",
              highPrice: "89.99",
              priceCurrency: "USD",
              offerCount: 4,
              availability: "https://schema.org/InStock",
              areaServed: {
                "@type": "City",
                name: cityName,
                containedInPlace: { "@type": "State", name: stateName },
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "12847",
            },
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: `Is Frontier Fiber available at my address in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: `Frontier Fiber is expanding across ${cityName}. Check your address online to see available plans and speeds.` } },
            { "@type": "Question", name: "What makes fiber different from cable internet?", acceptedAnswer: { "@type": "Answer", text: "Fiber uses light through glass strands for faster speeds, lower latency, and symmetrical upload/download." } },
            { "@type": "Question", name: `How long does installation take in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: "Installation typically takes 2-4 hours and is free on all plans." } },
            { "@type": "Question", name: "Are there any contracts or hidden fees?", acceptedAnswer: { "@type": "Answer", text: "No contracts. No hidden equipment fees, data overages, or surprise price increases." } },
            { "@type": "Question", name: `How does Frontier compare to ${competitor1} and ${competitor2}?`, acceptedAnswer: { "@type": "Answer", text: `Frontier offers symmetrical speeds, no data caps, no contracts, and free installation — advantages over most cable providers in ${cityName}.` } },
            { "@type": "Question", name: `What internet speed do I need in ${cityName}?`, acceptedAnswer: { "@type": "Answer", text: "For 1-3 people, Fiber 500 at $34.99/mo. For families, Fiber 2 Gig at $64.99/mo. For home offices, Fiber 1 Gig at $49.99/mo." } },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://frontier-deals.com" },
            { "@type": "ListItem", position: 2, name: "Coverage", item: "https://frontier-deals.com/coverage" },
            { "@type": "ListItem", position: 3, name: stateName, item: `https://frontier-deals.com/internet-in/${slugify(stateName)}` },
            { "@type": "ListItem", position: 4, name: `${cityName}, ${stateAbbr}`, item: `https://frontier-deals.com/fiber-internet-in/${slugify(cityName)}/${slugify(stateName)}` },
          ],
        },
      ]),
    }}
  />
  </main>
  )
}
