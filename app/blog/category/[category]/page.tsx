import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs"

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
}

function deSlugify(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

const allCategories = Array.from(new Set(blogPosts.map((p) => p.category)))
const categorySlugs = allCategories.map(slugify)

interface Props { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  return categorySlugs.map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const categoryName = allCategories.find((c) => slugify(c) === slug)
  if (!categoryName) return {}
  return {
    title: `${categoryName} Articles — Frontier Internet Blog | Frontier Deals`,
    description: `Browse all ${categoryName} articles on the Frontier Deals blog. Expert guides, tips, and reviews about ${categoryName.toLowerCase()}.`,
    alternates: { canonical: `/blog/category/${slug}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params
  const categoryName = allCategories.find((c) => slugify(c) === slug)
  if (!categoryName) notFound()

  const posts = blogPosts
    .filter((p) => p.category === categoryName)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())

  return (
    <>
      <Breadcrumbs items={[
        { label: "Blog", href: "/blog" },
        { label: categoryName },
      ]} />

      <section className="bg-[#0A1E3C] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-2">{categoryName}</h1>
          <p className="text-white/60">{posts.length} article{posts.length !== 1 ? "s" : ""}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-[#f5f7fa] hover:bg-gray-100 rounded-xl p-6 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-[#0A1E3C] mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-500 line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                      <span>•</span>
                      <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                  </div>
                  {post.featured && (
                    <span className="bg-[#DA202C] text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">
                      Featured
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-lg font-bold text-[#0A1E3C] mb-4">Browse Other Categories</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {allCategories.filter((c) => c !== categoryName).map((c) => (
              <Link
                key={c}
                href={`/blog/category/${slugify(c)}`}
                className="bg-white hover:bg-gray-100 text-[#0A1E3C] px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
          <Link href="/blog" className="inline-block mt-4 text-[#DA202C] hover:underline text-sm font-medium">
            ← View all articles
          </Link>
        </div>
      </section>
    </>
  )
}
