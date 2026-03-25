import type { MetadataRoute } from "next"
import { frontierCoverage } from "@/lib/coverage-data"
import { blogPosts } from "@/lib/blog-data"
import { getAllCompetitorSlugs } from "@/lib/competitor-data"

const BASE_URL = "https://frontier-deals.com"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Static pages that actually exist in the app
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/internet`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/internet/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/tv-netflix`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/tv-and-bundles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/bundles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/home-phone`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/wifi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/internet-speed-test`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/coverage`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/order`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/business`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/business/internet`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/business/phone`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/business/managed-services`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/business/dedicated-internet`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/compare/fiber-vs-cable`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/compare/fiber-vs-cable-vs-dsl`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // New pages
    { url: `${BASE_URL}/deals`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/new-customer`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/check-availability`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fios`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/mobile`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vantage`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]

  // Competitor comparison pages
  const competitorPages: MetadataRoute.Sitemap = getAllCompetitorSlugs().map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Speed-tier plan pages
  const speedTierSlugs = ["fiber-500", "fiber-1-gig", "fiber-2-gig", "fiber-5-gig", "fiber-7-gig"]
  const speedTierPages: MetadataRoute.Sitemap = speedTierSlugs.map((slug) => ({
    url: `${BASE_URL}/internet/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Use-case pages
  const useCaseSlugs = ["gaming", "streaming", "work-from-home", "smart-home", "large-families", "seniors", "existing-customers", "rural", "single-person", "multiple-devices"]
  const useCasePages: MetadataRoute.Sitemap = useCaseSlugs.map((slug) => ({
    url: `${BASE_URL}/internet-for/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // State landing pages
  const statePages: MetadataRoute.Sitemap = Object.keys(frontierCoverage).map((state) => ({
    url: `${BASE_URL}/internet-in/${slugify(state)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Blog posts from registry
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updateDate || post.publishDate,
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.7 : 0.6,
  }))

  // Blog category hubs
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/blog/category/${slugify(cat)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }))

  // City pages - canonical format: /fiber-internet-in/[city]/[state]
  const cityPages: MetadataRoute.Sitemap = []
  for (const [state, cities] of Object.entries(frontierCoverage)) {
    const stateSlug = slugify(state)
    for (const city of cities) {
      const citySlug = slugify(city)
      cityPages.push({
        url: `${BASE_URL}/fiber-internet-in/${citySlug}/${stateSlug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      })
    }
  }

  // Internet speed guide pages
  const speedGuideSlugs = ["25", "50", "100", "150", "200", "250", "300", "400", "500", "600", "1000", "2000", "5000"]
  const speedGuidePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/internet-speeds`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    ...speedGuideSlugs.map((s) => ({
      url: `${BASE_URL}/internet-speeds/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]

  // Verizon to Frontier page
  const additionalPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/verizon-to-frontier`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/existing-customers`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/internet/espanol`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ]

  return [...staticPages, ...competitorPages, ...speedTierPages, ...useCasePages, ...statePages, ...blogPages, ...categoryPages, ...cityPages, ...speedGuidePages, ...additionalPages]
}
