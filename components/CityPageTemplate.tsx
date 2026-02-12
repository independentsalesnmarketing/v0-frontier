import Link from "next/link"
import {
  CheckCircle2,
  Wifi,
  Shield,
  Zap,
  MapPin,
  Phone,
  ChevronRight,
  Star,
  Users,
  Building2,
  Clock,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react"
import { getStateInitials } from "@/lib/utils"
import { getMajorCityData } from "@/lib/major-city-data"
import { frontierCoverage } from "@/lib/coverage-data"
import Breadcrumbs from "@/components/Breadcrumbs"

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

/** Get other cities in the same state for internal linking (max 6) */
function getNearbyCities(cityName: string, stateName: string): string[] {
  const cities = frontierCoverage[stateName] || []
  return cities.filter((c) => c !== cityName).slice(0, 6)
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
}

export default function CityPageTemplate({ cityName, stateName }: CityPageTemplateProps) {
  const stateAbbr = getStateInitials(stateName)
  const majorData = getMajorCityData(cityName, stateName)
  const [competitor1, competitor2] = majorData?.localCompetitors || getCompetitors(stateName)
  const neighborhoods = majorData?.neighborhoodsServed || []
  const nearbyCities = getNearbyCities(cityName, stateName)
  const siblingCities = (frontierCoverage[stateName] || [])
    .filter((c) => c.toLowerCase() !== cityName.toLowerCase())
    .sort()

  const intro = majorData?.intro
    || `Frontier Fiber delivers dedicated fiber-optic internet to homes across ${cityName}, ${stateAbbr}. Unlike shared cable connections that slow down during peak hours, fiber gives you a line of your own with symmetrical upload and download speeds up to 5 Gig. No data caps, no contracts, and free professional installation.`

  const whyFiber = majorData?.whyFiber
    || `Cable internet in ${cityName} shares bandwidth across your neighborhood, which means slower speeds when everyone logs on in the evening. Frontier Fiber gives each household a dedicated line, so your speeds stay consistent whether it's 2 PM or prime time.`

  return (
  <main className="min-h-screen bg-white">
  <Breadcrumbs items={[
    { label: "Coverage", href: "/coverage" },
    { label: stateName, href: `/coverage#${stateName.toLowerCase().replace(/\s+/g, "-")}` },
    { label: `${cityName}, ${stateAbbr}` },
  ]} />
  {/* Hero */}
      <section className="bg-[#0a1e3c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-[#da202c]" />
              <span className="text-sm font-medium">{cityName}, {stateAbbr}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Frontier Fiber Internet in {cityName}, {stateName}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              {majorData?.tagline || `Fast, reliable fiber internet for ${cityName} homes and businesses.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="inline-flex items-center justify-center bg-[#da202c] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Check Availability
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
              <a
                href="tel:+18009218101"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (800) 921-8101
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats bar */}
      <section className="py-10 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "5 Gig", label: "Max Speed" },
              { value: "$29.99", label: "Starting Price" },
              { value: "$0", label: "Installation" },
              { value: "None", label: "Data Caps" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#da202c] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-6">
              What Frontier Fiber Means for {cityName}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{intro}</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
            Plans Available in {cityName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every plan includes free professional installation, no data caps, and no annual contracts.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Fiber 500 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#0a1e3c]">Fiber 500</h3>
                <div className="flex items-baseline justify-center mt-2">
                  <span className="text-4xl font-bold text-[#da202c]">$29</span>
                  <span className="text-gray-500 ml-1">.99/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">500 Mbps upload and download</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Great for 1-3 people streaming and browsing",
                  "Free professional installation",
                  "No data caps or throttling",
                  "WiFi router included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/order"
                className="block w-full text-center bg-[#0a1e3c] hover:bg-[#1d3461] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Fiber 1 Gig -- Featured */}
            <div className="bg-white rounded-xl p-8 shadow-md border-2 border-[#da202c] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#da202c] text-white text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#0a1e3c]">Fiber 1 Gig</h3>
                <div className="flex items-baseline justify-center mt-2">
                  <span className="text-4xl font-bold text-[#da202c]">$49</span>
                  <span className="text-gray-500 ml-1">.99/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">1 Gbps upload and download</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Ideal for families and home offices",
                  "Free professional installation",
                  "No contracts required",
                  "WiFi router included",
                  "$100 Visa reward card",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/order"
                className="block w-full text-center bg-[#da202c] hover:bg-[#b71c1c] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Fiber 2 Gig */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#0a1e3c]">Fiber 2 Gig</h3>
                <div className="flex items-baseline justify-center mt-2">
                  <span className="text-4xl font-bold text-[#da202c]">$69</span>
                  <span className="text-gray-500 ml-1">.99/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">2 Gbps upload and download</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Built for power users and large households",
                  "Free professional installation",
                  "Premium WiFi router",
                  "No data caps",
                  "$200 Visa reward card",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/order"
                className="block w-full text-center bg-[#0a1e3c] hover:bg-[#1d3461] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fiber Over Cable */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
              Why {cityName} Residents Are Switching to Fiber
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {whyFiber}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Symmetrical Speeds",
                  description: `Upload as fast as you download. Critical for ${cityName} professionals on video calls, cloud backups, and content creation.`,
                },
                {
                  icon: Shield,
                  title: "Dedicated Line",
                  description: "Your fiber line isn't shared with neighbors. No peak-hour slowdowns, no congestion, just consistent speed.",
                },
                {
                  icon: Award,
                  title: "Future-Proof Infrastructure",
                  description: `As ${cityName} grows, fiber scales with it. The same line that delivers 2 Gig today can deliver 10 Gig tomorrow.`,
                },
              ].map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 bg-[#da202c]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-[#da202c]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a1e3c] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Provider Comparison */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
            How Frontier Compares in {cityName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Side-by-side comparison based on publicly available plan details for {cityName}, {stateAbbr}.
          </p>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-500 font-medium text-sm">Feature</th>
                  <th className="text-center py-4 px-4 text-[#da202c] font-bold">Frontier Fiber</th>
                  <th className="text-center py-4 px-4 text-gray-600 font-medium">{competitor1}</th>
                  <th className="text-center py-4 px-4 text-gray-600 font-medium">{competitor2}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Max Speed", frontier: "5,000 Mbps", c1: "Up to 1 Gbps", c2: "Up to 940 Mbps" },
                  { feature: "Upload Speed", frontier: "5,000 Mbps", c1: "Up to 35 Mbps", c2: "Up to 35 Mbps" },
                  { feature: "Data Caps", frontier: "None", c1: "1.2 TB/month", c2: "1 TB/month" },
                  { feature: "Contract", frontier: "None required", c1: "1-year typical", c2: "2-year typical" },
                  { feature: "Installation", frontier: "FREE", c1: "$99", c2: "$75" },
                  { feature: "Equipment Fee", frontier: "Included", c1: "$14/mo", c2: "$10/mo" },
                ].map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="py-3 px-4 text-sm text-gray-600">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-sm font-semibold text-[#0a1e3c]">{row.frontier}</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-500">{row.c1}</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-500">{row.c2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-12 text-center">
            Built for How {cityName} Lives Online
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Families",
                description: `Stream, game, and video-call simultaneously. With no data caps, ${cityName} families can use the internet without worrying about limits.`,
              },
              {
                icon: Building2,
                title: "Home Offices",
                description: `Symmetrical speeds mean your Zoom calls stay clear and file uploads finish fast -- even when the rest of the household is online.`,
              },
              {
                icon: Wifi,
                title: "Smart Homes",
                description: `Security cameras, thermostats, doorbells, speakers -- modern homes run on bandwidth. Fiber handles 20+ devices without breaking a sweat.`,
              },
            ].map((profile) => (
              <div key={profile.title} className="bg-[#f5f7fa] rounded-xl p-8">
                <profile.icon className="w-8 h-8 text-[#da202c] mb-4" />
                <h3 className="text-lg font-semibold text-[#0a1e3c] mb-3">{profile.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage & Neighborhoods (only if we have real neighborhood data) */}
      {neighborhoods.length > 0 && (
        <section className="py-16 bg-[#0a1e3c] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Neighborhoods We Serve in {cityName}
              </h2>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                Frontier Fiber is actively expanding across {cityName}. Check your specific address for availability.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {neighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="bg-white/10 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
                  >
                    <MapPin className="w-3 h-3" />
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-12 text-center">
            Frequently Asked Questions About Frontier in {cityName}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: `Is Frontier Fiber available at my address in ${cityName}?`,
                a: `Frontier Fiber is expanding across ${cityName}. The fastest way to check your specific address is to use our online availability checker or call (800) 921-8101. Our local team can confirm service status in minutes.`,
              },
              {
                q: "What makes fiber different from cable internet?",
                a: "Fiber uses light signals through glass strands instead of electrical signals through copper. This means faster speeds, lower latency, and a dedicated connection that doesn't slow down when your neighbors are online. Upload speeds match download speeds, which cable cannot offer.",
              },
              {
                q: `How long does installation take in ${cityName}?`,
                a: `Typical installation takes 2-4 hours depending on your home's configuration. A Frontier technician handles everything from running the fiber line to setting up your router and ensuring your devices are connected. Installation is free on all plans.`,
              },
              {
                q: "Are there any contracts or hidden fees?",
                a: "No. Frontier Fiber plans are month-to-month with no annual contracts. The price you see is the price you pay -- there are no hidden equipment fees, data overage charges, or surprise price increases during your first year.",
              },
              {
                q: `How does Frontier compare to ${competitor1} and ${competitor2} in ${cityName}?`,
                a: `Frontier Fiber offers symmetrical speeds (same upload and download), no data caps, no contracts, and free installation. Most cable providers in ${cityName} have data caps, require contracts, and offer upload speeds that are a fraction of their download speeds.`,
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#0a1e3c] mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities internal linking */}
      {nearbyCities.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-[#0a1e3c] mb-6 text-center">
                Frontier Fiber in Nearby {stateName} Cities
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {nearbyCities.map((city) => (
                  <Link
                    key={city}
                    href={`/fiber-internet-in/${slugify(city)}/${slugify(stateName)}`}
                    className="bg-[#f5f7fa] hover:bg-[#e8ecf1] text-[#0a1e3c] px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    {city}, {stateAbbr}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#da202c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready for Frontier Fiber in {cityName}?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Free installation, no contracts, no data caps. Plans start at $29.99/mo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-white text-[#da202c] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Order Now
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
            <a
              href="tel:+18009218101"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (800) 921-8101
            </a>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      {/* Nearby Cities - Internal Link Mesh */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0a1e3c] mb-6">
            Frontier Fiber in Other {stateName} Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {siblingCities.map((sibling) => (
              <Link
                key={sibling}
                href={`/fiber-internet-in/${slugify(sibling)}/${slugify(stateName)}`}
                className="text-sm text-gray-600 hover:text-[#da202c] hover:bg-white px-3 py-2 rounded-lg transition-colors"
              >
                {sibling}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/coverage"
              className="inline-flex items-center text-sm font-medium text-[#da202c] hover:text-[#b71c1c] transition-colors"
            >
              View all Frontier coverage areas
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `Frontier Fiber Internet in ${cityName}, ${stateName}`,
            description: `Frontier Fiber Internet plans available in ${cityName}, ${stateAbbr}. Speeds up to 5 Gig, free installation, no data caps.`,
            url: `https://frontier-deals.com/fiber-internet-in/${slugify(cityName)}/${slugify(stateName)}`,
            mainEntity: {
              "@type": "Product",
              name: "Frontier Fiber Internet",
              image: "https://frontier-deals.com/android-chrome-192x192.png",
              description: `High-speed fiber internet available in ${cityName}, ${stateAbbr} with speeds up to 5 Gbps`,
              brand: { "@type": "Brand", name: "Frontier Communications" },
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "29.99",
                highPrice: "69.99",
                priceCurrency: "USD",
                offerCount: 3,
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
          }),
        }}
      />
    </main>
  )
}
