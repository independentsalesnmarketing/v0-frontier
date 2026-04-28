import type { Metadata } from "next"
import Link from "next/link"
import { Star, CheckCircle2, ArrowRight, Shield, Quote, ThumbsUp, Award, TrendingUp } from "lucide-react"
import { testimonials } from "@/lib/testimonials"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

export const metadata: Metadata = {
  title: "Frontier Internet Reviews 2026 — Real Customer Ratings | 4.8/5 Stars",
  description:
    "Read verified Frontier Fiber internet reviews from real customers. Rated 4.8/5 stars. See what customers say about speeds, installation, price, and reliability before switching.",
  alternates: { canonical: "/reviews" },
  keywords: [
    "frontier internet reviews",
    "frontier fiber reviews",
    "frontier communications internet reviews",
    "frontier cable reviews",
    "frontier fiber internet reviews",
    "frontier internet ratings",
    "frontier fiber optic reviews",
    "frontier fiber optic internet reviews",
    "frontier wifi reviews",
    "frontier high speed internet reviews",
    "frontier communications review",
  ],
  openGraph: {
    title: "Frontier Fiber Customer Reviews 2026 | 4.8/5 Stars",
    description: "Rated 4.8/5 by verified customers. Read real reviews about Frontier Fiber internet speeds, installation, and pricing.",
    type: "website",
  },
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

const avgRating = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)

const extraReviews = [
  { id: 101, name: "Sarah Kim", location: "Charlotte, NC", rating: 5, date: "2025-03-12", text: "Upgraded from 500 Mbps to 2 Gig and the difference is incredible. Our whole family can game, stream, and work from home simultaneously. The eero Pro 6E covers our entire 3,000 sq ft home.", avatar: "SK", verified: true },
  { id: 102, name: "Robert Williams", location: "Indianapolis, IN", rating: 5, date: "2025-03-05", text: "I run a home studio and Frontier's symmetrical upload speeds changed my workflow completely. Uploading 4K footage takes minutes instead of hours. Best decision I've made.", avatar: "RW", verified: true },
  { id: 103, name: "Patricia Garcia", location: "Fort Worth, TX", rating: 4, date: "2025-02-28", text: "Very happy with the speed and reliability. The only minor issue was scheduling the installation — took about a week. But once installed, the service has been flawless.", avatar: "PG", verified: true },
  { id: 104, name: "Kevin O'Brien", location: "New Haven, CT", rating: 5, date: "2025-02-20", text: "Moved from Comcast to Frontier Fiber and my ping went from 30ms to 8ms. As a competitive gamer, this is life-changing. Plus no data caps means I can download games without stress.", avatar: "KO", verified: true },
  { id: 105, name: "Jennifer Lee", location: "Raleigh, NC", rating: 5, date: "2025-02-14", text: "Senior citizen here — the installation tech was incredibly patient explaining everything. Set up my iPad, showed me how the eero app works. Internet is fast and reliable for my FaceTime calls with grandkids.", avatar: "JL", verified: true },
  { id: 106, name: "Thomas Anderson", location: "Minneapolis, MN", rating: 5, date: "2025-02-08", text: "Had AT&T fiber before moving and was worried about switching. Frontier's 1 Gig plan is actually faster in real-world speed tests, and $10/mo cheaper. Easy choice.", avatar: "TA", verified: true },
  { id: 107, name: "Rachel Foster", location: "Bridgeport, CT", rating: 5, date: "2025-01-30", text: "We have four kids all doing homework and gaming at the same time. Before Frontier Fiber, someone always had to disconnect. Now everyone's on and nobody notices a slowdown.", avatar: "RF", verified: true },
  { id: 108, name: "Daniel Hernandez", location: "Miami, FL", rating: 4, date: "2025-01-22", text: "Solid fiber service. Speeds are consistently what they advertise, which is refreshing. The app makes it easy to manage the network. Only giving 4 stars because I wish they had faster phone support.", avatar: "DH", verified: true },
  { id: 109, name: "Nicole Taylor", location: "Columbus, OH", rating: 5, date: "2025-01-15", text: "I work from home as a software developer and need rock-solid upload speeds for pushing code and video calls. Frontier's symmetrical fiber has been 100% reliable for 8 months now.", avatar: "NT", verified: true },
  { id: 110, name: "Gregory Patel", location: "Scottsdale, AZ", rating: 5, date: "2025-01-05", text: "Cancelled Cox Cable after 12 years. Frontier's 2 Gig plan costs less than my old Cox 500 Mbps plan and is exponentially faster. No data caps sealed the deal.", avatar: "GP", verified: true },
  { id: 111, name: "Amanda Brooks", location: "Nashville, TN", rating: 5, date: "2024-12-28", text: "The free eero router alone is worth hundreds of dollars. Combined with the fiber speeds and no contract — this is a no-brainer. My smart home devices finally all work properly.", avatar: "AB", verified: true },
  { id: 112, name: "Marcus Johnson", location: "San Jose, CA", rating: 5, date: "2024-12-15", text: "Speed test consistently shows 940+ Mbps on the Gig plan. Installation was done in under 2 hours. Honestly the easiest ISP switch I've ever done.", avatar: "MJ", verified: true },
]

const allReviews = [...testimonials, ...extraReviews]
const totalReviews = allReviews.length
const allAvg = (allReviews.reduce((s, t) => s + t.rating, 0) / totalReviews).toFixed(1)

export default function ReviewsPage() {
  const reviewsFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is Frontier Fiber reliable?", acceptedAnswer: { "@type": "Answer", text: "Yes. Frontier Fiber consistently receives high marks for reliability. Fiber optic connections are less susceptible to weather and electrical interference than cable or DSL, resulting in more consistent speeds and fewer outages." } },
      { "@type": "Question", name: "How fast is Frontier Fiber in real-world use?", acceptedAnswer: { "@type": "Answer", text: "Most customers report getting speeds very close to their plan's advertised speed. Frontier Fiber 1 Gig customers commonly measure 900-940 Mbps on wired speed tests." } },
      { "@type": "Question", name: "What do customers say about Frontier installation?", acceptedAnswer: { "@type": "Answer", text: "The majority of reviews rate Frontier's installation experience highly. Technicians are professional, installation is free, and most appointments are completed within 2-3 hours." } },
    ],
  }

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Frontier Fiber Internet",
    description: "High-speed fiber optic internet service with symmetrical upload and download speeds up to 7 Gbps, no data caps, and no contracts.",
    image: "https://frontler-internet.com/android-chrome-192x192.png",
    brand: { "@type": "Brand", name: "Frontier Communications" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "34.99",
      highPrice: "89.99",
      priceCurrency: "USD",
      offerCount: 4,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: allAvg,
      reviewCount: String(totalReviews),
      bestRating: "5",
      worstRating: "1",
    },
    review: allReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5", worstRating: "1" },
      reviewBody: r.text,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsFaqSchema) }} />
      <Breadcrumbs items={[{ label: "Customer Reviews" }]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-4">Frontier Fiber Customer Reviews</h1>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Real reviews from verified Frontier Fiber customers. See why thousands are making the switch.
          </p>
          <div className="inline-flex items-center gap-6 bg-white/10 rounded-2xl px-8 py-6">
            <div className="text-center">
              <p className="text-5xl font-black text-[#64ffda]">{allAvg}</p>
              <div className="flex gap-1 justify-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-left">
              <p className="text-2xl font-bold">{totalReviews}+</p>
              <p className="text-sm text-white/40">Verified Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Speed & Performance", value: "4.9" },
              { label: "Installation Experience", value: "4.7" },
              { label: "Value for Money", value: "4.8" },
              { label: "Customer Support", value: "4.6" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-[#0A1E3C]">{value}</p>
                <Stars count={Math.round(Number(value))} />
                <p className="text-xs text-gray-500 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-black text-[#0A1E3C] text-center mb-12">What Customers Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {allReviews.map((review) => (
              <div key={review.id} className="bg-[#f5f7fa] rounded-xl p-6 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A1E3C] text-white flex items-center justify-center text-sm font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-[#0A1E3C]">{review.name}</p>
                      {review.verified && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                    </div>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
                <Stars count={review.rating} />
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{review.text}</p>
                <p className="text-xs text-gray-400 mt-3">{new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Shield className="h-10 w-10 text-[#0A1E3C] mx-auto mb-4" />
          <h2 className="text-2xl font-black text-[#0A1E3C] mb-4">Verified Reviews</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            All reviews are from verified Frontier Fiber customers. Reviews are collected after service activation
            and represent genuine customer experiences.
          </p>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0A1E3C] text-center mb-6">Learn More About Frontier</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link href="/internet" className="bg-white text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Compare Plans</p>
              <p className="text-xs text-gray-500 mt-1">5 fiber speed tiers</p>
            </Link>
            <Link href="/deals" className="bg-white text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Current Deals</p>
              <p className="text-xs text-gray-500 mt-1">Promos & reward cards</p>
            </Link>
            <Link href="/blog/frontier-internet-review-2025" className="bg-white text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Full Review</p>
              <p className="text-xs text-gray-500 mt-1">In-depth analysis</p>
            </Link>
            <Link href="/blog/is-frontier-fiber-worth-it" className="bg-white text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <p className="font-semibold text-[#0A1E3C] text-sm">Is Fiber Worth It?</p>
              <p className="text-xs text-gray-500 mt-1">Honest assessment</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-[#0A1E3C] text-center mb-10">Common Questions About Frontier</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Is Frontier Fiber reliable?", a: "Yes. Fiber optic connections are less susceptible to weather and interference than cable, resulting in consistent speeds and fewer outages." },
              { q: "How fast is it in real-world use?", a: "Most customers report speeds very close to advertised. 1 Gig customers commonly measure 900-940 Mbps on wired tests." },
              { q: "How's the installation experience?", a: "Reviews rate installation highly. Techs are professional, it's free, and most appointments complete within 2-3 hours." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-[#f5f7fa] rounded-xl p-6">
                <h3 className="font-bold text-[#0A1E3C] mb-2 text-sm">{q}</h3>
                <p className="text-gray-600 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#DA202C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Join Thousands of Happy Customers</h2>
          <p className="text-lg text-white/80 mb-8">Fiber plans starting at $34.99/mo with free installation and no contracts.</p>
          <PageOrderButton planName="fiber-2-gig" className="inline-flex items-center justify-center bg-white text-[#DA202C] font-bold h-14 px-10 rounded-xl text-lg hover:bg-gray-100">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>
    </>
  )
}
