import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Check, Wifi, Shield, PlaySquare, Zap } from "lucide-react"
import Link from "next/link"
import { PageOrderButton, ContentTabs } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Frontier TV & Internet Bundles | Cable TV Alternative",
  description: "Explore Frontier TV and internet bundle packages. Get fiber internet with Netflix, YouTube TV, and premium streaming included. No contracts required.",
  alternates: { canonical: "/tv-and-bundles" },
}

const bundles = [
  {
    name: "Fiber 500 + Netflix",
    internetSpeed: "500/500 Mbps",
    internetPrice: 29.99,
    netflixPrice: 7.99,
    totalPrice: 37.98,
    features: [
      "500 Mbps symmetrical internet",
      "Netflix Standard with ads subscription",
      "Frontier Provided eero Router included",
      "Wi-Fi Security",
      "Whole-Home Wi-Fi",
    ],
  },
  {
    name: "Fiber 1 Gig + Netflix",
    internetSpeed: "1000/1000 Mbps",
    internetPrice: 49.99,
    netflixPrice: 7.99,
    totalPrice: 57.98,
    features: [
      "1 Gbps symmetrical internet",
      "Netflix Standard with ads subscription",
      "Frontier Provided eero Router included",
      "Wi-Fi Security",
      "Whole-Home Wi-Fi",
    ],
    bestValue: true,
  },
  {
    name: "Fiber 2 Gig + Netflix",
    internetSpeed: "2000/2000 Mbps",
    internetPrice: 64.99,
    netflixPrice: 7.99,
    totalPrice: 72.98,
    features: [
      "2 Gbps symmetrical internet",
      "Netflix Standard with ads subscription",
      "Frontier Provided eero Router included",
      "Wi-Fi Security",
      "Whole-Home Wi-Fi",
    ],
  },
  {
    name: "Fiber 5 Gig + Netflix",
    internetSpeed: "5000/5000 Mbps",
    internetPrice: 89.99,
    netflixPrice: 7.99,
    totalPrice: 97.98,
    features: [
      "5 Gbps symmetrical internet",
      "Netflix Standard with ads subscription",
      "Frontier Provided eero Router included",
      "Wi-Fi Security",
      "Whole-Home Wi-Fi",
    ],
  },
]

const additionalOptions = [
  {
    name: "Whole-Home Wi-Fi Plus",
    price: 30.0,
    description: "Enhanced whole-home Wi-Fi coverage with advanced features",
  },
  { name: "Whole-Home Wi-Fi", price: 10.0, description: "Extend Wi-Fi coverage throughout your home" },
  { name: "Wi-Fi Security Plus", price: 10.0, description: "Advanced security features for your home network" },
  { name: "Wi-Fi Security", price: 5.0, description: "Basic security features for your home network" },
]

function BundleCard({ bundle }: { bundle: typeof bundles[number] }) {
  return (
    <div
      className={`border ${
        bundle.bestValue ? "border-[#DA202C]" : "border-gray-300"
      } rounded-lg p-6 flex flex-col bg-white shadow-md relative`}
    >
      {bundle.bestValue && (
        <div className="absolute top-0 right-0 bg-[#DA202C] text-white py-1 px-4 text-sm font-bold rounded-tl-lg">
          Best Value
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-[#0A1E3C]">{bundle.name}</h3>
      <p className="text-4xl font-bold mb-2 text-[#DA202C]">
        ${bundle.totalPrice.toFixed(2)}
        <span className="text-sm font-normal text-gray-500">/mo</span>
      </p>
      <p className="text-sm text-gray-600 mb-4">
        Internet: ${bundle.internetPrice}/mo | Netflix: ${bundle.netflixPrice}/mo
      </p>
      <ul className="mb-8 flex-grow">
        {bundle.features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2 text-gray-700">
            <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
            {feature}
          </li>
        ))}
      </ul>
      <PageOrderButton planName={bundle.name} className="w-full bg-[#DA202C] hover:bg-[#b71c1c] text-white">
        Order Now
      </PageOrderButton>
    </div>
  )
}

function AdditionalOptionCard({ option }: { option: { name: string; price: number; description: string } }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
      <h4 className="text-lg font-semibold mb-2 text-[#0A1E3C]">{option.name}</h4>
      <p className="text-[#DA202C] font-bold mb-2">+${option.price.toFixed(2)}/mo</p>
      <p className="text-sm text-gray-600">{option.description}</p>
    </div>
  )
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Frontier TV & Netflix Bundle",
  description: "Experience the best of streaming entertainment with Frontier Fiber Internet and Netflix bundled together.",
  image: "https://frontier-deals.com/android-chrome-192x192.png",
  brand: { "@type": "Brand", name: "Frontier Communications" },
  offers: { "@type": "AggregateOffer", lowPrice: "37.98", highPrice: "97.98", priceCurrency: "USD", offerCount: "4" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", bestRating: "5", worstRating: "1", ratingCount: "3421" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What comes with the Frontier Netflix bundle?", acceptedAnswer: { "@type": "Answer", text: "The Frontier Netflix bundle includes Netflix Standard with Ads subscription and can be combined with any Frontier Fiber Internet plan." } },
    { "@type": "Question", name: "Can I upgrade my Netflix plan with Frontier?", acceptedAnswer: { "@type": "Answer", text: "Yes, you can upgrade to Netflix Standard (ad-free) or Netflix Premium for an additional monthly fee." } },
    { "@type": "Question", name: "How is Netflix billed with Frontier?", acceptedAnswer: { "@type": "Answer", text: "Your Netflix subscription will be conveniently included on your monthly Frontier bill." } },
    { "@type": "Question", name: "Do I need Frontier Internet to get Netflix through Frontier?", acceptedAnswer: { "@type": "Answer", text: "Yes, the Netflix bundle is available to Frontier Internet customers." } },
  ],
}

export default function TVAndBundles() {
  return (
    <div className="bg-white text-[#0A1E3C]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            'url("/images/home-internet-service-netflix-bundle-dltq7wh7puel9q38lkug-1.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3C]/80 to-[#0A1E3C]/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-[#00B7C3] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            PREMIUM ENTERTAINMENT
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frontier Internet & Netflix Bundles</h1>
          <p className="text-xl mb-8 text-white">
            Combine Frontier Fiber Internet with Netflix for the ultimate entertainment package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton size="lg" className="bg-[#DA202C] hover:bg-[#b71c1c] text-white">
              Order Now
            </PageOrderButton>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <a href="#pricing">View Plans</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#0A1E3C]">Why Choose Netflix with Frontier?</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Combine the power of Frontier Fiber with Netflix's premium content for the ultimate entertainment
            experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <Zap className="w-12 h-12 mx-auto mb-4 text-[#DA202C]" />
              <h3 className="text-xl font-semibold mb-2 text-[#0A1E3C]">Vast Content Library</h3>
              <p className="text-gray-700">
                Access thousands of movies, TV shows, documentaries, and Netflix Originals on demand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <Wifi className="w-12 h-12 mx-auto mb-4 text-[#00B7C3]" />
              <h3 className="text-xl font-semibold mb-2 text-[#0A1E3C]">Buffer-Free Streaming</h3>
              <p className="text-gray-700">
                Frontier's fiber internet ensures smooth streaming without interruptions, even in 4K quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#0A1E3C]" />
              <h3 className="text-xl font-semibold mb-2 text-[#0A1E3C]">Enhanced Security</h3>
              <p className="text-gray-700">Stream with peace of mind with included Wi-Fi security features.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E3C]">Our Popular Bundles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <BundleCard key={index} bundle={bundle} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E3C]">Netflix & Pro Wi-Fi Bundle</h2>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <PlaySquare className="w-16 h-16 mx-auto mb-4 text-[#DA202C]" />
            <h3 className="text-2xl font-bold mb-4 text-[#0A1E3C]">Netflix Standard with ads</h3>
            <p className="text-xl mb-6 text-gray-700">
              Enjoy unlimited ad-supported movies, TV shows, and mobile games with Netflix Standard with ads.
            </p>
            <ul className="text-left max-w-md mx-auto mb-8">
              <li className="flex items-center mb-2 text-gray-700">
                <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                Full HD (1080p) available
              </li>
              <li className="flex items-center mb-2 text-gray-700">
                <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                Wi-Fi Security included
              </li>
              <li className="flex items-center mb-2 text-gray-700">
                <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                Whole-Home Wi-Fi included
              </li>
            </ul>
            <p className="text-2xl font-bold mb-4 text-[#DA202C]">
              $30.00<span className="text-sm font-normal text-gray-500">/mo</span>
            </p>
            <PageOrderButton
              size="lg"
              className="bg-[#DA202C] hover:bg-[#b71c1c] text-white"
              planName="netflix-bundle"
            >
              Add to Your Plan
            </PageOrderButton>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E3C]">Additional Wi-Fi Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalOptions.map((option, index) => (
              <AdditionalOptionCard key={index} option={option} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1E3C] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features of Netflix with Frontier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1d3461] p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <PlaySquare className="w-6 h-6 mr-2 text-[#00B7C3]" />
                Streaming Experience
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  Thousands of movies and TV shows
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  Full HD (1080p) streaming quality
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  Limited ad interruptions
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  New movies and shows added regularly
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  Award-winning Netflix Originals
                </li>
              </ul>
            </div>
            <div className="bg-[#1d3461] p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Wifi className="w-6 h-6 mr-2 text-[#00B7C3]" />
                Internet Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  Symmetrical upload and download speeds
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  No data caps or throttling
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  99.9% network reliability
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  Premium eero router included
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00B7C3]" />
                  Professional installation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4 text-[#0A1E3C]">Content Tabs</h2>
              <ContentTabs tabs={[
                { label: "Overview", id: "overview", content: (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0A1E3C]">The Ultimate Streaming Experience</h3>
                  <p className="text-gray-700 mb-4">
                    Netflix with Frontier combines the best of both worlds: lightning-fast fiber internet and premium
                    streaming content. This partnership ensures you get the most out of your entertainment experience
                    with buffer-free streaming, even in 4K quality.
                  </p>
                  <p className="text-gray-700">
                    With Netflix's vast library of content and Frontier's reliable fiber network, you'll have access to
                    thousands of movies, TV shows, documentaries, and award-winning Netflix Originals, all streaming
                    smoothly without interruption.
                  </p>
                </div>
              ) },
              { label: "Streaming Comparison", id: "comparison", content: (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0A1E3C]">How Netflix Compares</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-[#f5f7fa]">
                          <th className="border border-gray-200 px-4 py-2 text-left text-[#0A1E3C]">Feature</th>
                          <th className="border border-gray-200 px-4 py-2 text-center text-[#0A1E3C]">Netflix</th>
                          <th className="border border-gray-200 px-4 py-2 text-center text-[#0A1E3C]">Hulu</th>
                          <th className="border border-gray-200 px-4 py-2 text-center text-[#0A1E3C]">Disney+</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 text-gray-700">Starting Price</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">$7.99/mo</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">$7.99/mo</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">$7.99/mo</td>
                        </tr>
                        <tr className="bg-[#f5f7fa]">
                          <td className="border border-gray-200 px-4 py-2 text-gray-700">Content Library Size</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Extensive</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Large</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Moderate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 text-gray-700">Original Content</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Extensive</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Moderate</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Limited</td>
                        </tr>
                        <tr className="bg-[#f5f7fa]">
                          <td className="border border-gray-200 px-4 py-2 text-gray-700">4K Streaming</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Yes (Premium)</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Limited</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-gray-700">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) },
              { label: "Technology", id: "technology", content: (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Streaming Technology</h3>
                  <p className="text-gray-700 mb-4">
                    Netflix utilizes adaptive streaming technology that automatically adjusts video quality based on
                    your internet connection. With Frontier Fiber, you'll consistently get the highest quality possible.
                  </p>
                  <p className="text-gray-700">
                    Frontier's fiber-optic network delivers symmetrical speeds, meaning your upload speeds match your
                    download speeds. This is particularly beneficial for households with multiple streaming devices or
                    when you're video conferencing while others are streaming.
                  </p>
                </div>
              ) },
              ]} />
            </div>

            <div className="md:w-1/2">
              <div className="bg-[#f5f7fa] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#0A1E3C]">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold mb-2 text-[#0A1E3C]">What comes with the Frontier Netflix bundle?</h4>
                    <p className="text-gray-700">
                      The Frontier Netflix bundle includes Netflix Standard with Ads subscription and can be combined
                      with any Frontier Fiber Internet plan. You'll get access to thousands of movies and TV shows in
                      Full HD (1080p) quality, with the ability to watch on 2 supported devices simultaneously.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold mb-2 text-[#0A1E3C]">Can I upgrade my Netflix plan with Frontier?</h4>
                    <p className="text-gray-700">
                      Yes, you can upgrade to Netflix Standard (ad-free) or Netflix Premium for an additional monthly
                      fee. Contact Frontier customer service to upgrade your Netflix subscription.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold mb-2 text-[#0A1E3C]">How is Netflix billed with Frontier?</h4>
                    <p className="text-gray-700">
                      Your Netflix subscription will be conveniently included on your monthly Frontier bill. This
                      single-bill approach simplifies your entertainment expenses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#0A1E3C]">
                      Do I need Frontier Internet to get Netflix through Frontier?
                    </h4>
                    <p className="text-gray-700">
                      Yes, the Netflix bundle is available to Frontier Internet customers. For the best streaming
                      experience, we recommend pairing Netflix with Frontier Fiber Internet for buffer-free viewing even
                      in 4K.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1E3C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Entertainment Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get Netflix with Frontier today and enjoy the best in on-demand streaming with the reliability of fiber
            internet!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PageOrderButton size="lg" className="bg-[#DA202C] hover:bg-[#b71c1c] text-white">
            Order Now
          </PageOrderButton>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/internet">Explore Internet Plans</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-300">No contracts for Netflix service. Internet service terms apply.</p>
        </div>
      </section>

    </div>
  )
}
