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
  Home,
} from "lucide-react"
import { generateEnhancedCityContent } from "@/lib/enhanced-city-content"
import { getCityLocalExpertise } from "@/lib/local-expertise"
import { getStateInitials } from "@/lib/utils"

interface Template5Props {
  cityName: string
  stateName: string
  fiber?: boolean
  maxSpeed?: number
  population?: number
}

export default function Template5({
  cityName,
  stateName,
  fiber = true,
  maxSpeed = 5000,
  population,
}: Template5Props) {
  const content = generateEnhancedCityContent(cityName, stateName, fiber, maxSpeed, population)
  const expertise = getCityLocalExpertise(cityName, stateName, fiber)
  const stateInitials = getStateInitials(stateName)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1e3c] via-[#1d3461] to-[#0a1e3c] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#da202c] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#00b7c3] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#da202c] rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">{content.promoBanner}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {fiber ? "Fiber" : "High-Speed"} Internet in{" "}
              <span className="text-[#da202c]">{cityName}</span>, {stateInitials}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl text-pretty">
              {content.overviewIntro}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg">
              {content.internetStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/order"
                className="inline-flex items-center justify-center bg-[#da202c] hover:bg-[#b71c1c] text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg"
              >
                Check Availability
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
              <a
                href="tel:+18009218101"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (800) 921-8101
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
            Why {cityName} Chooses Frontier {fiber ? "Fiber" : "Internet"}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover the advantages that make Frontier the preferred internet provider in {cityName}.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.keyBenefits.map((benefit, index) => {
              const icons = [Zap, Globe, Shield, Users, Award, Home]
              const Icon = icons[index % icons.length]
              return (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-[#f5f7fa] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#da202c]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#da202c]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1e3c] mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About the City */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-[#da202c]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c]">
                About {cityName}, {stateInitials}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">{content.cityIntro}</p>

            {/* Usage Stats */}
            <div className="grid grid-cols-3 gap-6">
              {content.usageStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-2xl font-bold text-[#da202c]">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
            Plans Available in {cityName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            All plans include free installation, no data caps, and no long-term contracts.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Fiber 500 */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <span className="text-sm font-medium text-[#da202c] bg-[#da202c]/10 px-3 py-1 rounded-full">
                  Starter
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1e3c] mb-1">Fiber 500</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#0a1e3c]">$29</span>
                <span className="text-gray-500">.99/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">500 Mbps upload & download</p>
              <ul className="space-y-3 mb-8">
                {["Free installation", "No data caps", "No contracts", "WiFi router included"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
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

            {/* Fiber 1 Gig */}
            <div className="rounded-2xl border-2 border-[#da202c] p-8 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#da202c] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Best Value
                </span>
              </div>
              <div className="mb-6">
                <span className="text-sm font-medium text-[#da202c] bg-[#da202c]/10 px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1e3c] mb-1">Fiber 1 Gig</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#0a1e3c]">$49</span>
                <span className="text-gray-500">.99/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">1 Gbps upload & download</p>
              <ul className="space-y-3 mb-8">
                {["Free installation", "No data caps", "No contracts", "WiFi router included", "$100 reward card"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <Link
                href="/order"
                className="block w-full text-center bg-[#da202c] hover:bg-[#b71c1c] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Fiber 2 Gig */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <span className="text-sm font-medium text-[#da202c] bg-[#da202c]/10 px-3 py-1 rounded-full">
                  Premium
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1e3c] mb-1">Fiber 2 Gig</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#0a1e3c]">$69</span>
                <span className="text-gray-500">.99/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">2 Gbps upload & download</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free installation",
                  "No data caps",
                  "No contracts",
                  "Premium WiFi router",
                  "$200 reward card",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
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

      {/* Coverage & Neighborhoods */}
      <section className="py-16 bg-[#0a1e3c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Coverage in {cityName}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {content.coverageAreas}
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {content.neighborhoods.map((neighborhood, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
                >
                  <MapPin className="w-3 h-3" />
                  {neighborhood}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6">
                <TrendingUp className="w-6 h-6 text-[#da202c] mb-3" />
                <h3 className="font-semibold text-lg mb-3">Expansion Plans</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{content.futureExpansion}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <Users className="w-6 h-6 text-[#00b7c3] mb-3" />
                <h3 className="font-semibold text-lg mb-3">Community Impact</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{content.communityImpact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
            How Frontier Compares in {cityName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">{content.comparisonIntro}</p>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-500 font-medium text-sm">Feature</th>
                  <th className="text-center py-4 px-4 text-[#da202c] font-bold">Frontier Fiber</th>
                  <th className="text-center py-4 px-4 text-gray-600 font-medium">{content.competitor1}</th>
                  <th className="text-center py-4 px-4 text-gray-600 font-medium">{content.competitor2}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-600">Max Speed</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-[#0a1e3c]">Up to {maxSpeed} Mbps</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor1Speed}</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor2Speed}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-600">Data Caps</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-green-600">None</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor1DataCap}</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor2DataCap}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-600">Contract</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-green-600">None required</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor1Contract}</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor2Contract}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-600">Installation</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-green-600">FREE</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor1Installation}</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor2Installation}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-600">Equipment Fee</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-green-600">Included</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor1Equipment}</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-500">{content.competitor2Equipment}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Business Spotlights */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
            {cityName} Businesses on Frontier
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">{content.businessSolutions}</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.businessSpotlights.map((biz, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <Building2 className="w-8 h-8 text-[#da202c] mb-4" />
                <h3 className="font-bold text-[#0a1e3c] text-lg mb-3">{biz.type}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{biz.description}</p>
                <div className="flex flex-wrap gap-2">
                  {biz.tags.map((tag, i) => (
                    <span key={i} className="bg-[#f5f7fa] text-gray-600 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Trends */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-12 text-center">
            Internet Usage Trends in {cityName}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.usageTrends.map((trend, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-[#0a1e3c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-[#0a1e3c] mb-2">{trend.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-12 text-center">
            What {cityName} Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {expertise.customerTestimonials.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0a1e3c] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#0a1e3c]">{review.name}</div>
                    <div className="text-xs text-gray-500">
                      {review.neighborhood} - {review.plan}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-12 text-center">
            Frequently Asked Questions About Frontier in {cityName}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {content.faqs.map((faq, index) => (
              <details key={index} className="group bg-[#f5f7fa] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#0a1e3c] hover:bg-gray-100 transition-colors">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0a1e3c] mb-6 text-center">
            {cityName} Internet Fun Facts
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {content.funFacts.map((fact, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-sm text-gray-600 shadow-sm flex gap-3">
                <Star className="w-4 h-4 text-[#da202c] shrink-0 mt-0.5" />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#da202c] to-[#b71c1c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Frontier {fiber ? "Fiber" : "Internet"} in {cityName} Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of {cityName} residents already enjoying fast, reliable Frontier internet.
            Plans start at just $29.99/mo with free installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-white text-[#da202c] font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Order Online
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
            <a
              href="tel:+18009218101"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              (800) 921-8101
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
