import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Frontier Internet Blog | Guides, Tips & Industry News",
  description: "Read expert guides on fiber internet, home networking, streaming tips, and more. Stay informed about internet technology and get the most from your Frontier service.",
  alternates: { canonical: "/blog" },
}

export default function BlogIndexPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const recent = blogPosts.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      {/* Hero */}
      <section className="bg-[#0a1e3c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Internet Guides & Resources
            </h1>
            <p className="text-lg text-gray-300 text-pretty">
              Practical advice to help you choose, set up, and get the most from your home internet.
              No jargon, no fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0a1e3c] mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-[#0a1e3c] to-[#1d3461] flex items-center justify-center px-6">
                    <span className="text-white/80 text-sm font-medium text-center">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1e3c] mb-2 group-hover:text-[#da202c] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#da202c] text-sm font-medium mt-4">
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
          <h2 className="text-2xl font-bold text-[#0a1e3c] mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-5 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-16 h-16 rounded-lg bg-[#da202c]/10 flex items-center justify-center">
                  <Tag className="w-6 h-6 text-[#da202c]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span>{post.category}</span>
                    <span>{post.readTime} min read</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="font-bold text-[#0a1e3c] mb-1 group-hover:text-[#da202c] transition-colors truncate">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
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
          <p className="text-lg mb-6 opacity-90">Plans start at $29.99/mo with free installation and no contracts.</p>
          <Link
            href="/order"
            className="inline-flex items-center justify-center bg-white text-[#da202c] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Check Availability
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}
