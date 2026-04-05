import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Calendar, Tag, RefreshCw } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getResolvedMonthlyUpdatedDate } from "@/lib/seo-dates"

export const metadata: Metadata = {
  title: "Frontier Internet Blog | Guides, Tips & Industry News",
  description: "Read expert guides on fiber internet, home networking, streaming tips, and more. Stay informed about internet technology and get the most from your Frontier service.",
  alternates: { canonical: "/blog" },
}

const categoryColors: Record<string, string> = {
  "Internet Technology": "bg-blue-100 text-blue-800",
  "Buying Guide": "bg-green-100 text-green-800",
  "WiFi Tips": "bg-purple-100 text-purple-800",
  "Getting Started": "bg-orange-100 text-orange-800",
  "Home Office": "bg-teal-100 text-teal-800",
  Streaming: "bg-pink-100 text-pink-800",
  Gaming: "bg-indigo-100 text-indigo-800",
  "Smart Home": "bg-yellow-100 text-yellow-800",
  Review: "bg-red-100 text-red-800",
  Security: "bg-gray-100 text-gray-800",
}

export default function BlogIndexPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const recent = blogPosts.filter((p) => !p.featured)

  const formatDate = (post: (typeof blogPosts)[0]) => {
    const d = post.updateDate ? getResolvedMonthlyUpdatedDate(post.updateDate) : post.publishDate
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      {/* Hero */}
      <section className="bg-[#0a1e3c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#00b7c3] text-sm font-semibold tracking-wider uppercase mb-3">Expert Guides & Resources</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Internet Guides & Resources
            </h1>
            <p className="text-lg text-gray-300 text-pretty">
              Practical advice to help you choose, set up, and get the most from your home internet.
              No jargon, no fluff.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {Object.entries(categoryColors).slice(0, 6).map(([cat, cls]) => (
                <span key={cat} className={`${cls} text-xs font-medium px-3 py-1 rounded-full`}>{cat}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#da202c] rounded-full" />
              <h2 className="text-2xl font-bold text-[#0a1e3c]">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <div className="h-44 bg-gradient-to-br from-[#0a1e3c] to-[#1d3461] flex flex-col items-center justify-center px-6 relative">
                    <span className={`absolute top-4 left-4 text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-800"}`}>
                      {post.category}
                    </span>
                    <span className="text-white/60 text-xs">{post.readTime} min read</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      {post.updateDate ? (
                        <span className="flex items-center gap-1 text-green-600 font-medium">
                          <RefreshCw className="w-3 h-3" />
                          Updated {formatDate(post)}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post)}
                        </span>
                      )}
                      <span className="text-gray-300">|</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1e3c] mb-2 group-hover:text-[#da202c] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#da202c] text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#0a1e3c] rounded-full" />
            <h2 className="text-2xl font-bold text-[#0a1e3c]">All Articles</h2>
            <span className="text-sm text-gray-500 ml-2">({blogPosts.length} guides)</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-5 bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div className="shrink-0 w-14 h-14 rounded-lg bg-[#0a1e3c]/5 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-[#0a1e3c]/40" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span className={`px-2 py-0.5 rounded-full font-medium ${categoryColors[post.category] || "bg-gray-100 text-gray-800"}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-400">{post.readTime} min</span>
                    {post.updateDate && (
                      <span className="text-green-600 flex items-center gap-0.5">
                        <RefreshCw className="w-3 h-3" /> Updated
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#0a1e3c] mb-1 group-hover:text-[#da202c] transition-colors text-sm leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#da202c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to try Frontier Fiber?</h2>
          <p className="text-lg mb-6 opacity-90">Plans start at $34.99/mo with free installation and no contracts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/internet"
              className="inline-flex items-center justify-center bg-white text-[#da202c] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Plans
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/check-availability"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
