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
} from "lucide-react"
import { generateCitySpecificContent } from "@/lib/city-content-generator"
import { getCityLocalExpertise } from "@/lib/local-expertise"
import { getStateInitials } from "@/lib/utils"

interface Template2Props {
  cityName: string
  stateName: string
  fiber?: boolean
  maxSpeed?: number
}

export default function Template2({ cityName, stateName, fiber = true, maxSpeed = 5000 }: Template2Props) {
  const content = generateCitySpecificContent(cityName, stateName)
  const expertise = getCityLocalExpertise(cityName, stateName, fiber)
  const stateInitials = getStateInitials(stateName)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a1e3c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-[#da202c]" />
              <span className="text-sm font-medium">
                {cityName}, {stateInitials}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Frontier Fiber Internet in {cityName}, {stateName}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              {content.introduction}
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

      {/* Quick Stats */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.quickStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#da202c] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Frontier */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
              Why {cityName} Residents Choose Frontier Fiber
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">{content.whyChooseFrontier}</p>

            <div className="grid md:grid-cols-3 gap-8">
              {content.benefits.map((benefit, index) => {
                const icons = [Zap, Shield, Award]
                const Icon = icons[index % icons.length]
                return (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 bg-[#da202c]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#da202c]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0a1e3c] mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-4 text-center">
            Internet Plans for {cityName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your household. All plans include free installation and no data caps.
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
                <p className="text-sm text-gray-500 mt-2">500 Mbps symmetrical speeds</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Best for: {content.planRecommendations.fiber500}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Free professional installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>No data caps or throttling</span>
                </li>
              </ul>
              <Link
                href="/order"
                className="block w-full text-center bg-[#0a1e3c] hover:bg-[#1d3461] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Fiber 1 Gig - Featured */}
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
                <p className="text-sm text-gray-500 mt-2">1 Gbps symmetrical speeds</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Best for: {content.planRecommendations.fiber1Gig}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Free professional installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>No contracts required</span>
                </li>
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
                <p className="text-sm text-gray-500 mt-2">2 Gbps symmetrical speeds</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Best for: {content.planRecommendations.fiber2Gig}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Free professional installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>$200 Visa reward card</span>
                </li>
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

      {/* Internet Usage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-12 text-center">
            How {cityName} Uses Frontier Fiber
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.internetUsage.map((usage, index) => {
              const icons = [Users, Building2, Wifi]
              const Icon = icons[index % icons.length]
              return (
                <div key={index} className="bg-[#f5f7fa] rounded-xl p-8">
                  <Icon className="w-8 h-8 text-[#da202c] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0a1e3c] mb-3">{usage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{usage.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-[#0a1e3c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frontier&apos;s Network in {cityName}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">Coverage</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{content.infrastructure.coverage}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">Technology</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{content.infrastructure.technology}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">Expansion Plans</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{content.infrastructure.expansionPlans}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">Community Impact</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{content.infrastructure.communityImpact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-8 text-center">
              Local Expertise in {cityName}
            </h2>
            <div className="bg-[#f5f7fa] rounded-xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#da202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {expertise.expertInitials}
                </div>
                <div>
                  <div className="font-semibold text-[#0a1e3c]">{expertise.expertName}</div>
                  <div className="text-sm text-gray-500">{expertise.expertTitle}</div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">&ldquo;{expertise.expertQuote}&rdquo;</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#0a1e3c] mb-3">Popular Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.popularAreas.map((area, index) => (
                    <span key={index} className="bg-[#f5f7fa] text-gray-700 px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0a1e3c] mb-3">Serving Since</h3>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#da202c]" />
                  <span className="text-gray-600">Since {expertise.servingSince}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {content.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#0a1e3c] mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e3c] mb-8 text-center">
              Key Benefits for {cityName} Residents
            </h2>
            <ul className="space-y-4">
              {content.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0a1e3c] mb-6 text-center">
            Fun Internet Facts About {cityName}
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {content.funFacts.map((fact, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-sm text-gray-600 shadow-sm">
                <Star className="w-4 h-4 text-[#da202c] mb-2" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#da202c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Frontier Fiber in {cityName}?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {content.finalCta.specialOffer}
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
    </main>
  )
}
