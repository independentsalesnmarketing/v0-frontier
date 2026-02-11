import fs from "fs"
import { frontierCoverage } from "../lib/frontier-coverage-data"

function generateSitemap() {
  const urls = []

  // Add main pages
  const mainPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/internet", priority: "0.8", changefreq: "weekly" },
    { url: "/internet/pricing", priority: "0.8", changefreq: "weekly" },
    { url: "/tv-netflix", priority: "0.8", changefreq: "weekly" },
    { url: "/home-phone", priority: "0.8", changefreq: "weekly" },
    { url: "/tv-and-bundles", priority: "0.8", changefreq: "weekly" },
    { url: "/bundles", priority: "0.8", changefreq: "weekly" },
    { url: "/business", priority: "0.8", changefreq: "weekly" },
    { url: "/support", priority: "0.7", changefreq: "weekly" },
    { url: "/about", priority: "0.6", changefreq: "monthly" },
    { url: "/contact", priority: "0.6", changefreq: "monthly" },
    { url: "/wifi", priority: "0.7", changefreq: "weekly" },
    { url: "/internet-speed-test", priority: "0.6", changefreq: "monthly" },
    { url: "/business/internet", priority: "0.7", changefreq: "weekly" },
    { url: "/business/phone", priority: "0.7", changefreq: "weekly" },
    { url: "/business/managed-services", priority: "0.7", changefreq: "weekly" },
    { url: "/support/faq", priority: "0.7", changefreq: "weekly" },
    { url: "/terms", priority: "0.5", changefreq: "monthly" },
    { url: "/privacy", priority: "0.5", changefreq: "monthly" },
    { url: "/order", priority: "0.8", changefreq: "weekly" },
    { url: "/coverage", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/fiber-vs-cable", priority: "0.6", changefreq: "monthly" },
    { url: "/fiber-internet", priority: "0.8", changefreq: "weekly" },
    { url: "/blog", priority: "0.7", changefreq: "weekly" },
  ]

  for (const page of mainPages) {
    urls.push(`  <url>
    <loc>https://frontier-deals.com${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
  }

  // Add state coverage pages
  const states = Object.keys(frontierCoverage)
  for (const state of states) {
    const stateSlug = state.toLowerCase().replace(/\s+/g, "-")

    urls.push(`  <url>
    <loc>https://frontier-deals.com/coverage/${stateSlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)
  }

  // Add city pages in two formats, listing them consecutively for each city
  let cityCount = 0
  for (const state of states) {
    const stateSlug = state.toLowerCase().replace(/\s+/g, "-")
    const cities = frontierCoverage[state]
    cityCount += cities.length

    for (const city of cities) {
      const citySlug = city.toLowerCase().replace(/\s+/g, "-")

      // For each city, list both formats consecutively
      // Format 1: /fiber-internet-in/[city]/[state]
      urls.push(`  <url>
    <loc>https://frontier-deals.com/fiber-internet-in/${citySlug}/${stateSlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)

      // Format 2: /coverage/[state]/[city]
      urls.push(`  <url>
    <loc>https://frontier-deals.com/coverage/${stateSlug}/${citySlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)
    }
  }

  // Generate the final sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`

  console.log(`Generated sitemap with ${urls.length} URLs:`)
  console.log(`- ${mainPages.length} main pages`)
  console.log(`- ${states.length} state pages`)
  console.log(`- ${cityCount} cities × 2 formats = ${cityCount * 2} city URLs`)

  return sitemap
}

// Write the sitemap to a file
const sitemap = generateSitemap()
fs.writeFileSync("public/sitemap.xml", sitemap)
console.log("Sitemap generated successfully!")
