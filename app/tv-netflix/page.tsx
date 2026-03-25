import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Check, Smartphone, Cloud, Tv, Wifi, Users, Star } from "lucide-react"
import Link from "next/link"
import { PageOrderButton, ContentTabs } from "@/components/PageInteractions"
import Breadcrumbs from "@/components/Breadcrumbs"
import RelatedServices from "@/components/RelatedServices"

export const metadata: Metadata = {
  title: "Frontier TV + Netflix Bundle 2026 | Stream & Save from $29.99/mo",
  description: "Bundle Frontier Fiber with Netflix and YouTube TV — unlimited data, no buffering, one simple bill. Plans from $29.99/mo with no contract required.",
  alternates: { canonical: "/tv-netflix" },
  openGraph: {
    title: "Frontier TV & Netflix Bundles | Stream More, Save More",
    description: "Get Frontier fiber internet bundled with Netflix, YouTube TV, and more. Enjoy fast streaming with no buffering.",
    images: [
      {
        url: "/images/og-frontier-tv-netflix.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier TV and Netflix Streaming Bundles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier TV & Netflix Bundles | Stream More, Save More",
    description: "Get Frontier fiber internet bundled with Netflix, YouTube TV, and more. Enjoy fast streaming with no buffering.",
    images: ["/images/og-frontier-tv-netflix.jpg"],
  },
  keywords: [
    "frontier netflix bundle",
    "streaming bundle",
    "frontier tv service",
    "netflix fiber internet",
    "4k streaming",
    "youtube tv frontier",
    "entertainment bundle",
    "streaming internet bundle",
    "buffer free streaming",
    "frontier streaming deals"
  ],
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Frontier TV & Netflix Bundle",
  description: "Experience the best of streaming entertainment with Frontier Fiber Internet and Netflix bundled together.",
  image: "https://frontier-deals.com/android-chrome-192x192.png",
  brand: { "@type": "Brand", name: "Frontier Communications" },
  offers: { "@type": "Offer", price: "30.00", priceCurrency: "USD", availability: "https://schema.org/InStock" },
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
    { "@type": "Question", name: "What internet speed do I need for Netflix?", acceptedAnswer: { "@type": "Answer", text: "Netflix recommends at least 5 Mbps for HD streaming and 15 Mbps for 4K/Ultra HD streaming. All Frontier Fiber plans exceed these requirements." } },
  ],
}

export default function Netflix() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "TV & Netflix", href: "/tv-netflix" }]} />

      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            'url("/images/black-family-enjoying-tv-b1grq8kcf45bbgp02h4f-2.png")',
        }}
      >
        <div className="absolute inset-0 bg-[#0a1e3c]/80" /> {/* Dark navy overlay using Frontier colors */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-[#00b7c3] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            PREMIUM ENTERTAINMENT
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Netflix with Frontier</h1>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Experience buffer-free streaming with the perfect combination of Frontier's lightning-fast fiber internet
            and Netflix's vast entertainment library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton size="lg" className="bg-[#da202c] hover:bg-[#b71c1c] text-white">
              Get Netflix Bundle
            </PageOrderButton>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <a href="#pricing">View Plans</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Netflix with Frontier?</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Combine the power of Frontier Fiber with Netflix's premium content for the ultimate entertainment
            experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-[#da202c]" />
              <h3 className="text-xl font-semibold mb-2">Vast Content Library</h3>
              <p className="text-gray-700">
                Access thousands of movies, TV shows, documentaries, and Netflix Originals on demand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <Wifi className="w-12 h-12 mx-auto mb-4 text-[#00b7c3]" />
              <h3 className="text-xl font-semibold mb-2">Buffer-Free Streaming</h3>
              <p className="text-gray-700">
                Frontier's fiber internet ensures smooth streaming without interruptions, even in 4K quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-[#0a1e3c]" />
              <h3 className="text-xl font-semibold mb-2">Watch Anywhere</h3>
              <p className="text-gray-700">Stream on your TV, computer, tablet, or smartphone at home or on the go.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <span className="inline-block bg-[#00b7c3] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                FRONTIER ADVANTAGE
              </span>
              <h2 className="text-3xl font-bold mb-4">The Perfect Streaming Experience</h2>
              <p className="text-gray-700 mb-6">
                Frontier Fiber Internet delivers the speed and reliability needed for the best Netflix streaming
                experience. With symmetrical upload and download speeds, you'll never experience buffering or quality
                drops, even when multiple devices are streaming simultaneously.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-[#da202c] mt-1 flex-shrink-0" />
                  <span>Symmetrical speeds up to 7 Gig for multiple 4K streams</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-[#da202c] mt-1 flex-shrink-0" />
                  <span>No data caps or throttling, stream as much as you want</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-[#da202c] mt-1 flex-shrink-0" />
                  <span>Single bill convenience for both services</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-[#da202c] mt-1 flex-shrink-0" />
                  <span>24/7 technical support for both internet and Netflix</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div
                  className="rounded-lg shadow-lg bg-gradient-to-br from-[#0A1E3C] to-[#1a3a5c] flex items-center justify-center"
                  style={{ height: 400, width: "100%" }}
                  aria-label="Family enjoying Netflix on multiple devices with Frontier Fiber"
                >
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-white/20 mb-2">FRONTIER</div>
                    <div className="text-2xl font-semibold text-[#E50914]">+ Netflix</div>
                    <p className="text-white/60 mt-3 text-sm">Stream on every screen in your home</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#da202c] text-white p-3 rounded-lg shadow-lg">
                  <Star className="w-6 h-6" />
                  <span className="font-bold text-xl">4.7/5</span>
                  <p className="text-sm">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1e3c] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features of Netflix with Frontier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1d3461] p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Tv className="w-6 h-6 mr-2 text-[#00b7c3]" />
                Streaming Experience
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Thousands of movies and TV shows
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Full HD (1080p) streaming quality
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Limited ad interruptions
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  New movies and shows added regularly
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Award-winning Netflix Originals
                </li>
              </ul>
            </div>
            <div className="bg-[#1d3461] p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-[#00b7c3]" />
                Account Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Watch on 2 supported devices at a time
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Create up to 5 different profiles
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Personalized recommendations
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Parental controls for family-friendly viewing
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-[#00b7c3]" />
                  Download shows to watch offline
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Netflix Plans with Frontier</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Choose the perfect Netflix plan to complement your Frontier Fiber Internet service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Netflix Standard with Ads</h3>
                <p className="text-4xl font-bold mb-4 text-[#da202c]">
                  $7.99<span className="text-xl font-normal text-gray-600">/mo</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Full HD (1080p) streaming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Watch on 2 devices at once</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Limited ad interruptions</span>
                  </li>
                </ul>
                <PageOrderButton className="w-full bg-[#da202c] hover:bg-[#b71c1c] text-white">
                  Choose Plan
                </PageOrderButton>
              </div>
            </div>

            <div className="bg-white border-2 border-[#00b7c3] rounded-lg overflow-hidden shadow-lg relative">
              <div className="bg-[#00b7c3] text-white text-center py-2 font-semibold">MOST POPULAR</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Netflix Standard</h3>
                <p className="text-4xl font-bold mb-4 text-[#da202c]">
                  $17.99<span className="text-xl font-normal text-gray-600">/mo</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Full HD (1080p) streaming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Watch on 2 devices at once</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Ad-free viewing experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Download on 2 devices</span>
                  </li>
                </ul>
                <PageOrderButton className="w-full bg-[#00b7c3] hover:bg-[#0097a3] text-white">
                  Choose Plan
                </PageOrderButton>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Netflix Premium</h3>
                <p className="text-4xl font-bold mb-4 text-[#da202c]">
                  $24.99<span className="text-xl font-normal text-gray-600">/mo</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Ultra HD (4K) and HDR streaming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Watch on 4 devices at once</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Ad-free viewing experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Download on 6 devices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00b7c3] mt-1 flex-shrink-0" />
                    <span>Netflix spatial audio</span>
                  </li>
                </ul>
                <PageOrderButton className="w-full bg-[#da202c] hover:bg-[#b71c1c] text-white">
                  Choose Plan
                </PageOrderButton>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#f5f7fa] p-6 rounded-lg max-w-5xl mx-auto">
            <p className="text-center font-semibold">
              Bundle with Frontier Fiber Internet for the best streaming experience!
            </p>
            <div className="flex justify-center mt-4">
              <Button className="bg-[#0a1e3c] hover:bg-[#1d3461] text-white">
                <Link href="/internet">View Internet Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#da202c]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Since switching to Frontier Fiber, our Netflix streaming has been flawless. No more buffering during
                family movie nights, even with multiple devices connected."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#0a1e3c] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MJ
                </div>
                <div>
                  <p className="font-semibold">Michael Johnson</p>
                  <p className="text-sm text-gray-600">Frontier Customer - 2 years</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#da202c]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The convenience of having Netflix bundled with my Frontier bill is great. Plus, the streaming quality
                is amazing with their fiber internet. 4K content looks incredible!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#00b7c3] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SL
                </div>
                <div>
                  <p className="font-semibold">Sarah Lopez</p>
                  <p className="text-sm text-gray-600">Frontier Customer - 1 year</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#da202c]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As someone who works from home and streams Netflix during breaks, Frontier's reliable connection has
                been a game-changer. The bundle pricing saves me money each month too."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#da202c] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  DW
                </div>
                <div>
                  <p className="font-semibold">David Wilson</p>
                  <p className="text-sm text-gray-600">Frontier Customer - 3 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Content Tabs</h2>
              <ContentTabs tabs={[
                { label: "Overview", id: "overview", content: (
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Ultimate Streaming Experience</h3>
                  <p className="text-gray-700 mb-4">
                    Netflix with Frontier combines the best of both worlds: lightning-fast fiber internet and premium
                    streaming content. This partnership ensures you get the most out of your entertainment experience
                    with buffer-free streaming, even in 4K quality.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With Netflix's vast library of content and Frontier's reliable fiber network, you'll have access to
                    thousands of movies, TV shows, documentaries, and award-winning Netflix Originals, all streaming
                    smoothly without interruption.
                  </p>
                  <p className="text-gray-700">
                    The bundle also offers the convenience of a single bill for both services, making it easier to
                    manage your entertainment expenses while potentially saving money compared to purchasing the
                    services separately.
                  </p>
                </div>
              ) },
              { label: "Streaming Comparison", id: "comparison", content: (
                <div>
                  <h3 className="text-xl font-semibold mb-3">How Netflix Compares</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-[#f5f7fa]">
                          <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                          <th className="border border-gray-200 px-4 py-2 text-center">Netflix</th>
                          <th className="border border-gray-200 px-4 py-2 text-center">Hulu</th>
                          <th className="border border-gray-200 px-4 py-2 text-center">Disney+</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2">Starting Price</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">$7.99/mo</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">$7.99/mo</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">$7.99/mo</td>
                        </tr>
                        <tr className="bg-[#f5f7fa]">
                          <td className="border border-gray-200 px-4 py-2">Content Library Size</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Extensive</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Large</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Moderate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2">Original Content</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Extensive</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Moderate</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Limited</td>
                        </tr>
                        <tr className="bg-[#f5f7fa]">
                          <td className="border border-gray-200 px-4 py-2">4K Streaming</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Yes (Premium)</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Limited</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2">Offline Downloads</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Yes</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Yes (No ads plan)</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mt-4">
                    Netflix stands out with its extensive library of original content and wide variety of genres. When
                    paired with Frontier Fiber Internet, you'll experience the best possible streaming quality without
                    buffering or interruptions.
                  </p>
                </div>
              ) },
              { label: "Technology", id: "technology", content: (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Streaming Technology</h3>
                  <p className="text-gray-700 mb-4">
                    Netflix utilizes adaptive streaming technology that automatically adjusts video quality based on
                    your internet connection. With Frontier Fiber, you'll consistently get the highest quality possible.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Frontier's fiber-optic network delivers symmetrical speeds, meaning your upload speeds match your
                    download speeds. This is particularly beneficial for households with multiple streaming devices or
                    when you're video conferencing while others are streaming.
                  </p>
                  <p className="text-gray-700">
                    For the best 4K streaming experience, Netflix recommends at least 15 Mbps of bandwidth. Even
                    Frontier's base fiber plan offers over 30 times that speed, ensuring flawless 4K streaming even with
                    multiple devices connected.
                  </p>
                </div>
              ) },
              ]} />
            </div>

            <div className="md:w-1/2">
              <div className="bg-[#f5f7fa] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold mb-2">What comes with the Frontier Netflix bundle?</h4>
                    <p className="text-gray-700">
                      The Frontier Netflix bundle includes Netflix Standard with Ads subscription and can be combined
                      with any Frontier Fiber Internet plan. You'll get access to thousands of movies and TV shows in
                      Full HD (1080p) quality, with the ability to watch on 2 supported devices simultaneously.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold mb-2">Can I upgrade my Netflix plan with Frontier?</h4>
                    <p className="text-gray-700">
                      Yes, you can upgrade to Netflix Standard (ad-free) or Netflix Premium for an additional monthly
                      fee. Contact Frontier customer service to upgrade your Netflix subscription.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold mb-2">How is Netflix billed with Frontier?</h4>
                    <p className="text-gray-700">
                      Your Netflix subscription will be conveniently included on your monthly Frontier bill. This
                      single-bill approach simplifies your entertainment expenses.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold mb-2">Do I need Frontier Internet to get Netflix through Frontier?</h4>
                    <p className="text-gray-700">
                      Yes, the Netflix bundle is available to Frontier Internet customers. For the best streaming
                      experience, we recommend pairing Netflix with Frontier Fiber Internet for buffer-free viewing even
                      in 4K.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What internet speed do I need for Netflix?</h4>
                    <p className="text-gray-700">
                      Netflix recommends at least 5 Mbps for HD streaming and 15 Mbps for 4K/Ultra HD streaming. All
                      Frontier Fiber Internet plans exceed these requirements, with our base plan starting at 500 Mbps,
                      ensuring smooth streaming even with multiple devices connected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/tv-netflix" />

      <section className="py-16 bg-[#0a1e3c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Entertainment Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get Netflix with Frontier today and enjoy the best in on-demand streaming with the reliability of fiber
            internet!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton size="lg" className="bg-[#da202c] hover:bg-[#b71c1c] text-white">
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
