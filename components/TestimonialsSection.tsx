import { Star } from "lucide-react"
import { testimonials } from "@/lib/testimonials"

export function TestimonialsSection() {
  const aggregateRating = {
    ratingValue: testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length,
    reviewCount: testimonials.length,
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Customer Testimonials - Frontier Fiber Internet",
    description: "Real customer reviews and testimonials for Frontier Fiber Internet services",
    url: "https://frontier-deals.com/#testimonials",
    isPartOf: {
      "@id": "https://frontier-deals.com/#website",
    },
    mainEntity: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue.toFixed(1),
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mb-4">
            Trusted by Thousands of Customers
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">
              {aggregateRating.ratingValue.toFixed(1)} out of 5 ({aggregateRating.reviewCount} reviews)
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real customers, real feedback. See why people across the country are switching to Frontier Fiber.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1E3C]">{review.name}</h3>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
                {review.verified && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                    Verified
                  </span>
                )}
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm mb-3 line-clamp-3">{review.text}</p>

              <p className="text-xs text-gray-500">
                {new Date(review.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Your experience matters. Share your Frontier Fiber story and help others make the right choice.
          </p>
          <button className="bg-[#da202c] hover:bg-[#b71c1c] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  )
}
