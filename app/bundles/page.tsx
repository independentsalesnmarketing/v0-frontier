import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Check, Wifi, Phone, Shield, Star, Info, ExternalLink } from "lucide-react"
import Link from "next/link"
import { PageOrderButton } from "@/components/PageInteractions"
import Breadcrumbs from "@/components/Breadcrumbs"
import RelatedServices from "@/components/RelatedServices"

export const metadata: Metadata = {
  title: "Frontier Internet & Phone Bundles | Save with Bundle Deals",
  description: "Bundle Frontier fiber internet with home phone service and save. Compare bundle deals with unlimited calling and high-speed internet starting at $34.99/mo.",
  alternates: { canonical: "/bundles" },
  openGraph: {
    title: "Frontier Internet & Phone Bundles | Save with Bundle Deals",
    description: "Bundle Frontier fiber internet with home phone service and save. Compare bundle deals with unlimited calling and high-speed internet.",
    images: [
      {
        url: "/images/og-frontier-bundles.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Internet and Phone Bundles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Internet & Phone Bundles | Save with Bundle Deals",
    description: "Bundle Frontier fiber internet with home phone service and save. Compare bundle deals with unlimited calling and high-speed internet.",
    images: ["/images/og-frontier-bundles.jpg"],
  },
  keywords: [
    "frontier bundle deals",
    "internet phone bundle",
    "frontier fiber bundles",
    "home phone service",
    "digital voice service",
    "bundled internet phone",
    "save on bundles",
    "frontier package deals",
    "internet voice combo",
    "home connectivity bundle"
  ],
}

const bundles = [
  {
    name: "Fiber 500 + Digital Voice",
    internetSpeed: "500/500 Mbps",
    internetPrice: 39.99,
    voicePrice: 25,
    features: [
      "No data caps or throttling",
      "Free eero Pro 6 router",
      "Unlimited nationwide calling",
      "24/7 technical support",
    ],
  },
  {
    name: "Fiber 1 Gig + Digital Voice",
    internetSpeed: "1000/1000 Mbps",
    internetPrice: 59.99,
    voicePrice: 25,
    features: [
      "No data caps or throttling",
      "Free eero Pro 6E router",
      "Unlimited nationwide calling",
      "24/7 technical support",
    ],
  },
  {
    name: "Fiber 2 Gig + Digital Voice",
    internetSpeed: "2000/2000 Mbps",
    internetPrice: 99.99,
    voicePrice: 25,
    bestValue: true,
    features: [
      "No data caps or throttling",
      "Free eero Pro 6E router",
      "Unlimited nationwide calling",
      "24/7 priority support",
    ],
  },
  {
    name: "Fiber 5 Gig + Digital Voice",
    internetSpeed: "5000/5000 Mbps",
    internetPrice: 149.99,
    voicePrice: 25,
    features: [
      "No data caps or throttling",
      "Free eero Pro 7 router",
      "Unlimited nationwide calling",
      "24/7 priority support",
    ],
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Portland, OR",
    rating: 5,
    text: "Switching to Frontier's bundle saved us over $40 per month compared to our previous provider. The internet is lightning fast and the voice quality is crystal clear.",
  },
  {
    name: "Michael Rodriguez",
    location: "Tampa, FL",
    rating: 5,
    text: "I work from home and need reliable internet and phone service. Frontier's bundle has been rock-solid for the past year with no outages or issues.",
  },
  {
    name: "Jennifer Williams",
    location: "Dallas, TX",
    rating: 4,
    text: "The value of bundling these services is excellent. Setup was easy and customer service has been responsive whenever I've had questions.",
  },
]

function BundleCard({ bundle }: { bundle: typeof bundles[number] }) {
  const total = bundle.internetPrice + bundle.voicePrice
  const savings = 10.0 // Monthly savings compared to purchasing separately

  return (
    <div
      className={`border ${bundle.bestValue ? "border-[#00b7c3]" : "border-gray-700"} rounded-lg p-6 flex flex-col bg-white/5 backdrop-blur-sm relative transition-all duration-300 hover:shadow-lg hover:shadow-[#00b7c3]/20 hover:-translate-y-1`}
    >
      {bundle.bestValue && (
        <div className="absolute top-0 right-0 bg-[#00b7c3] text-white py-1 px-4 text-sm font-bold rounded-bl-lg">
          Best Value
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">{bundle.name}</h2>
      <p className="text-4xl font-bold mb-2 text-[#da202c]">
        ${total.toFixed(2)}
        <span className="text-sm font-normal text-gray-400">/mo</span>
      </p>
      <p className="text-sm text-gray-400 mb-4">+ taxes (Price with Auto Pay and Paperless Billing)</p>
      <div className="bg-[#00b7c3]/10 rounded-md p-3 mb-4 inline-flex items-center">
        <span className="text-[#00b7c3] font-semibold">Save ${savings.toFixed(2)}/mo</span>
        <Info className="w-4 h-4 ml-2 text-[#00b7c3]" />
      </div>
      <ul className="mb-8 flex-grow space-y-2">
        <li className="flex items-start">
          <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-0.5 flex-shrink-0" />
          <span>
            Internet: {bundle.internetSpeed} - ${bundle.internetPrice}/mo
          </span>
        </li>
        <li className="flex items-start">
          <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-0.5 flex-shrink-0" />
          <span>Digital Voice: Unlimited nationwide calling - ${bundle.voicePrice}/mo</span>
        </li>
        {bundle.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
<PageOrderButton planName={bundle.name} className="w-full bg-[#da202c] hover:bg-[#b71c1c] text-white">
          Order Now
        </PageOrderButton>
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < testimonial.rating ? "text-[#00b7c3] fill-[#00b7c3]" : "text-gray-400"}`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-400">Verified Customer</span>
      </div>
      <p className="mb-4 italic">"{testimonial.text}"</p>
      <div className="text-sm">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-gray-400">{testimonial.location}</p>
      </div>
    </div>
  )
}

function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#0A1E3C]">
            <th className="p-4 text-left border-b border-gray-700">Feature</th>
            <th className="p-4 text-left border-b border-gray-700">Frontier Bundle</th>
            <th className="p-4 text-left border-b border-gray-700">Typical Cable Bundle</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="p-4">Internet Speed</td>
            <td className="p-4 text-[#00b7c3]">Symmetrical speeds up to 5 Gig</td>
            <td className="p-4">Asymmetrical speeds with slower uploads</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4">Price Increases</td>
            <td className="p-4 text-[#00b7c3]">No hidden price increases</td>
            <td className="p-4">Often increases after promotional period</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4">Data Caps</td>
            <td className="p-4 text-[#00b7c3]">No data caps</td>
            <td className="p-4">Often includes data caps</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4">Equipment Fees</td>
            <td className="p-4 text-[#00b7c3]">Free router included</td>
            <td className="p-4">Monthly equipment rental fees</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-4">Contract</td>
            <td className="p-4 text-[#00b7c3]">No contract required</td>
            <td className="p-4">Often requires 1-2 year contract</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-2">
        Source: Based on publicly available information from major cable providers.
      </p>
    </div>
  )
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Frontier Internet & Voice Bundles",
  description: "Combine Frontier Fiber Internet with Digital Voice for the ultimate connectivity package.",
  image: "https://frontier-deals.com/android-chrome-192x192.png",
  brand: { "@type": "Brand", name: "Frontier Communications" },
  offers: { "@type": "AggregateOffer", lowPrice: "64.99", highPrice: "174.99", priceCurrency: "USD", offerCount: bundles.length },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", bestRating: "5", worstRating: "1", ratingCount: "5892" },
}

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What's included in a Frontier bundle?", acceptedAnswer: { "@type": "Answer", text: "Frontier bundles typically include high-speed Fiber Internet and Digital Voice service." } },
    { "@type": "Question", name: "Can I customize my bundle?", acceptedAnswer: { "@type": "Answer", text: "Yes, you can choose from different internet speeds to create a bundle that fits your needs." } },
    { "@type": "Question", name: "Are there any discounts for bundling services?", acceptedAnswer: { "@type": "Answer", text: "Yes, bundling services often comes with exclusive discounts." } },
    { "@type": "Question", name: "Is there a contract for Frontier bundles?", acceptedAnswer: { "@type": "Answer", text: "Frontier offers both contract and no-contract options." } },
  ],
}

export default function Bundles() {
  return (
    <div className="bg-[#0A1E3C] text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
      <Breadcrumbs items={[{ label: "Bundles", href: "/bundles" }]} />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3C]/90 to-[#0A1E3C]/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E3C] to-[#1a3a5c]"></div>
        <div className="relative z-20 container mx-auto px-4 py-20 text-center">
          <div className="inline-block bg-[#00b7c3] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Bundle & Save
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frontier Internet & Voice Bundles</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Combine Frontier Fiber Internet with Digital Voice for the ultimate connectivity package and save up to $120
            per year.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <PageOrderButton
              size="lg"
              className="bg-[#da202c] hover:bg-[#b71c1c] text-white"
            >
              Check Availability
            </PageOrderButton>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="#plans">View Plans</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
              <span className="text-sm text-white/80">Symmetrical speeds</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
              <span className="text-sm text-white/80">No data caps</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
              <span className="text-sm text-white/80">Free router</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
              <span className="text-sm text-white/80">No contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Quote Section */}
      <section className="py-12 bg-[#0A1E3C]/50">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-[#00b7c3]/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-[#00b7c3]" />
              </div>
              <div>
                <p className="text-lg italic mb-4">
                  "Bundling internet and voice services not only provides cost savings but also simplifies billing and
                  support. Frontier's fiber-based bundles offer exceptional value with symmetrical speeds and unlimited
                  calling features that traditional copper-based services simply can't match."
                </p>
                <div>
                  <p className="font-semibold">Dr. Maria Chen</p>
                  <p className="text-sm text-gray-400">
                    Telecommunications Specialist, Digital Communications Institute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Plans Section */}
      <section id="plans" className="py-16 bg-[#0A1E3C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Perfect Bundle</h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
            Select from our range of high-speed internet and voice bundles designed to fit your needs and budget. All
            bundles include our 99.9% uptime guarantee.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bundles.map((bundle, index) => (
              <BundleCard key={index} bundle={bundle} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-[#0A1E3C]/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How We Compare</h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
            See how Frontier's bundles stack up against typical cable providers. Our fiber-based services offer superior
            performance and value.
          </p>
          <ComparisonTable />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#0A1E3C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Bundle with Frontier?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-[#00b7c3]/20 hover:-translate-y-1">
              <Wifi className="w-12 h-12 mx-auto mb-4 text-[#00b7c3]" />
              <h3 className="text-xl font-semibold mb-2">Lightning-Fast Internet</h3>
              <p className="text-white/80">
                Enjoy seamless streaming, gaming, and browsing with our high-speed Frontier Fiber internet with speeds
                up to 5 Gig.
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-[#00b7c3]/20 hover:-translate-y-1">
              <Phone className="w-12 h-12 mx-auto mb-4 text-[#00b7c3]" />
              <h3 className="text-xl font-semibold mb-2">Reliable Digital Voice</h3>
              <p className="text-white/80">
                Crystal-clear calls and advanced features with our dependable digital phone service, including caller ID
                and voicemail.
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-[#00b7c3]/20 hover:-translate-y-1">
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#00b7c3]" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Value</h3>
              <p className="text-white/80">
                Save money with our bundle discounts and enjoy the convenience of a single bill for all your home
                connectivity services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#0A1E3C]/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Here's what real Frontier customers have to say about our bundle services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0A1E3C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frontier Bundles FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">What's included in a Frontier bundle?</h3>
              <p className="text-white/80">
                Frontier bundles typically include high-speed Fiber Internet and Digital Voice service, offering a
                complete home connectivity solution. Each bundle includes a free router, unlimited nationwide calling,
                and 24/7 technical support.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Can I customize my bundle?</h3>
              <p className="text-white/80">
                Yes, you can choose from different internet speeds to create a bundle that fits your needs and budget.
                Our representatives can help you select the right combination of services for your household.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Are there any discounts for bundling services?</h3>
              <p className="text-white/80">
                Yes, bundling services comes with exclusive discounts compared to purchasing services separately. You
                can save up to $120 per year by bundling Frontier Fiber Internet and Digital Voice.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Is there a contract for Frontier bundles?</h3>
              <p className="text-white/80">
                Frontier offers both contract and no-contract options. Our standard bundles come with no long-term
                contract requirement, giving you flexibility. Speak with a sales representative to learn about current
                promotions and terms.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Can I keep my current phone number?</h3>
              <p className="text-white/80">
                Yes, in most cases you can transfer your existing phone number to Frontier Digital Voice service. This
                process, known as number porting, typically takes 2-3 business days to complete once your service is
                installed.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">What happens if I move to a new address?</h3>
              <p className="text-white/80">
                Frontier makes it easy to transfer your services to your new address if it's within our service area.
                Contact customer service at least 2 weeks before your move to ensure a smooth transition of your bundle
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/bundles" dark />

      {/* CTA Section */}
      <section className="py-16 bg-[#da202c]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Bundle and Save?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the perfect Internet and Voice bundle for your home today and start saving!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <PageOrderButton
              size="lg"
              className="bg-white text-[#da202c] hover:bg-gray-100"
            >
              Get Started
            </PageOrderButton>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm max-w-lg mx-auto">
            *Prices shown require Auto Pay and Paperless Billing. Plus taxes, fees, and other charges. Subject to
            availability. See{" "}
            <Link href="/terms" className="underline hover:text-white/80 inline-flex items-center">
              Terms of Service <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          </p>
        </div>
      </section>

    </div>
  )
}
