import { frontierCoverage } from "../lib/frontier-coverage-data"
import fs from "fs"
import { parseStringPromise } from "xml2js"

async function verifySitemapCities() {
  // Read the sitemap file
  const sitemapContent = fs.readFileSync("public/sitemap.xml", "utf-8")

  // Parse the XML
  const result = await parseStringPromise(sitemapContent)
  const urls = result.urlset.url.map((url: any) => url.loc[0])

  // Count expected cities
  const expectedCityCounts: Record<string, number> = {
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

  // Verify each state's cities
  let allCitiesIncluded = true

  for (const state in frontierCoverage) {
    const stateSlug = state.toLowerCase().replace(/\s+/g, "-")
    const cities = frontierCoverage[state]
    const expectedCount = expectedCityCounts[state] || 0

    if (cities.length !== expectedCount) {
      console.error(`Error: State ${state} has ${cities.length} cities in data but expected ${expectedCount}`)
      allCitiesIncluded = false
    }

    // Check each city
    for (const city of cities) {
      const citySlug = city.toLowerCase().replace(/\s+/g, "-")

      // Check fiber-internet-in format
      const fiberUrl = `https://frontler-internet.com/fiber-internet-in/${citySlug}/${stateSlug}`
      if (!urls.includes(fiberUrl)) {
        console.error(`Missing URL: ${fiberUrl}`)
        allCitiesIncluded = false
      }

      // Check coverage format
      const coverageUrl = `https://frontler-internet.com/coverage/${stateSlug}/${citySlug}`
      if (!urls.includes(coverageUrl)) {
        console.error(`Missing URL: ${coverageUrl}`)
        allCitiesIncluded = false
      }

      // Check hyphenated format
      const hyphenatedUrl = `https://frontler-internet.com/fiber-internet-in-${citySlug}-${stateSlug}`
      if (!urls.includes(hyphenatedUrl)) {
        console.error(`Missing URL: ${hyphenatedUrl}`)
        allCitiesIncluded = false
      }

      // Check locations format
      const locationsUrl = `https://frontler-internet.com/locations/${citySlug}-${stateSlug}`
      if (!urls.includes(locationsUrl)) {
        console.error(`Missing URL: ${locationsUrl}`)
        allCitiesIncluded = false
      }
    }
  }

  if (allCitiesIncluded) {
    console.log("✅ All cities are correctly included in the sitemap!")

    // Count total cities
    let totalCities = 0
    for (const state in frontierCoverage) {
      totalCities += frontierCoverage[state].length
    }

    console.log(`Total cities: ${totalCities}`)
    console.log(`Total city URLs: ${totalCities * 4}`)

    // Count by state
    for (const state in frontierCoverage) {
      console.log(`${state}: ${frontierCoverage[state].length} cities`)
    }
  } else {
    console.error("❌ Some cities are missing from the sitemap!")
  }
}

verifySitemapCities().catch(console.error)
