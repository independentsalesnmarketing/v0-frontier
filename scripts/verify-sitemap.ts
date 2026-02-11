import fs from "fs"
import { frontierCoverage } from "../lib/frontier-coverage-data"

function verifySitemap() {
  // Count total cities
  let totalCities = 0
  const states = Object.keys(frontierCoverage)

  // Expected city counts by state
  const expectedCityCounts = {
    Arizona: 5,
    California: 112,
    Connecticut: 39,
    Florida: 45,
    Georgia: 1,
    Illinois: 5,
    Indiana: 9,
    Iowa: 1,
    Minnesota: 18,
    Nebraska: 1,
    Nevada: 1,
    "New York": 99,
    "North Carolina": 3,
    Ohio: 13,
    Pennsylvania: 6,
    "South Carolina": 2,
    Tennessee: 1,
    Texas: 36,
    "West Virginia": 4,
  }

  // Verify city counts in data match expected counts
  for (const state of states) {
    const cities = frontierCoverage[state]
    const expectedCount = expectedCityCounts[state as keyof typeof expectedCityCounts] || 0

    if (cities.length !== expectedCount) {
      console.error(`Error: State ${state} has ${cities.length} cities in data but expected ${expectedCount}`)
    }

    totalCities += cities.length
  }

  // Read the sitemap file
  const sitemap = fs.readFileSync("public/sitemap.xml", "utf-8")

  // Count URLs in the sitemap
  const urlMatches = sitemap.match(/<url>/g)
  const urlCount = urlMatches ? urlMatches.length : 0

  // Count city-specific URLs
  const coverageUrlCount = (sitemap.match(/\/coverage\/[a-z-]+\/[a-z-]+<\/loc>/g) || []).length
  const fiberUrlCount = (sitemap.match(/\/fiber-internet-in\/[a-z-]+\/[a-z-]+<\/loc>/g) || []).length

  console.log("Sitemap Verification Results:")
  console.log("----------------------------")
  console.log(`Total cities in data: ${totalCities}`)
  console.log(`Expected city URLs: ${totalCities * 2} (${totalCities} cities × 2 formats)`)
  console.log(`Total URLs in sitemap: ${urlCount}`)
  console.log(`Coverage format URLs: ${coverageUrlCount}`)
  console.log(`Fiber format URLs: ${fiberUrlCount}`)
  console.log(`City-specific URLs: ${coverageUrlCount + fiberUrlCount}`)
  console.log(`Main + State URLs: ${urlCount - (coverageUrlCount + fiberUrlCount)}`)

  // Verify all cities are included
  const missingCities = []
  states.forEach((state) => {
    const stateSlug = state.toLowerCase().replace(/\s+/g, "-")
    const cities = frontierCoverage[state]

    cities.forEach((city) => {
      const citySlug = city.toLowerCase().replace(/\s+/g, "-")

      // Check coverage format
      if (!sitemap.includes(`/coverage/${stateSlug}/${citySlug}</loc>`)) {
        missingCities.push(`/coverage/${stateSlug}/${citySlug}`)
      }

      // Check fiber format
      if (!sitemap.includes(`/fiber-internet-in/${citySlug}/${stateSlug}</loc>`)) {
        missingCities.push(`/fiber-internet-in/${citySlug}/${stateSlug}`)
      }
    })
  })

  if (missingCities.length > 0) {
    console.log(`WARNING: ${missingCities.length} city URLs are missing from the sitemap!`)
    console.log("First 5 missing URLs:", missingCities.slice(0, 5))
  } else {
    console.log("SUCCESS: All city URLs are included in the sitemap!")
  }
}

verifySitemap()
