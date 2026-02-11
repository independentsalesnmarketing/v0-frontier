import type { Metadata } from "next"
import { frontierCoverage } from "@/lib/coverage-data"
import Template2 from "@/app/coverage/[state]/[city]/template2"
import Template5 from "@/app/coverage/[state]/[city]/template5"
import { selectTemplate } from "@/lib/template-selector"

// Make this route fully dynamic by removing any static generation
export const dynamic = "force-dynamic"

interface LocationPageProps {
  params: {
    location: string
  }
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  // Default metadata
  const defaultMetadata = {
    title: "Frontier Fiber Internet | Fast & Reliable",
    description:
      "Get high-speed Frontier Fiber Internet. Enjoy symmetrical speeds, unlimited data, and reliable connectivity for your home or business.",
  }

  // Check if params is defined
  if (!params || typeof params.location !== "string") {
    return defaultMetadata
  }

  try {
    const { cityName, stateName } = extractCityAndState(params.location)

    if (!cityName || !stateName) {
      return {
        title: "Frontier Fiber Internet | Location Not Found",
        description: "The requested location could not be found in our service area.",
      }
    }

    return {
      title: `Frontier Fiber Internet in ${cityName}, ${stateName} | Fast & Reliable`,
      description: `Get high-speed Frontier Fiber Internet in ${cityName}, ${stateName}. Enjoy symmetrical speeds, unlimited data, and reliable connectivity for your home or business.`,
      openGraph: {
        title: `Frontier Fiber Internet in ${cityName}, ${stateName}`,
        description: `Get high-speed Frontier Fiber Internet in ${cityName}, ${stateName}. Enjoy symmetrical speeds, unlimited data, and reliable connectivity.`,
        url: `https://frontier-deals.com/fiber-internet-in-${params.location}`,
        siteName: "Frontier Communications",
        images: [
          {
            url: `/api/og?title=${encodeURIComponent(`Frontier Fiber Internet in ${cityName}, ${stateName}`)}`,
            width: 1200,
            height: 630,
            alt: `Frontier Fiber Internet in ${cityName}, ${stateName}`,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return defaultMetadata
  }
}

function extractCityAndState(location: string): { cityName: string | null; stateName: string | null } {
  try {
    // Check if location is defined
    if (typeof location !== "string" || !location) {
      return { cityName: null, stateName: null }
    }

    // The location format is expected to be "city-name-state-name"
    const parts = location.split("-")

    if (parts.length < 2) {
      return { cityName: null, stateName: null }
    }

    // Find all states in our coverage data
    const allStates = Object.keys(frontierCoverage)

    // Try to find the state in the URL by checking different combinations
    // Start from the end and work backwards
    for (let i = parts.length - 1; i >= 0; i--) {
      // Try to match state names of different lengths
      for (let j = 1; j <= Math.min(5, parts.length - i); j++) {
        const possibleState = parts.slice(i, i + j).join(" ")

        // Check if this matches any state in our data
        const matchedState = allStates.find((state) => state.toLowerCase() === possibleState.toLowerCase())

        if (matchedState) {
          // We found a state match, so the city is everything before it
          const cityParts = parts.slice(0, i)
          if (cityParts.length === 0) {
            continue // Skip if no city parts
          }

          const cityName = cityParts
            .join(" ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")

          // Format the state name properly
          const stateName = matchedState

          // Verify the city exists in this state
          const citiesInState = frontierCoverage[stateName] || []
          const cityExists = citiesInState.some((city) => city.toLowerCase() === cityName.toLowerCase())

          if (cityExists) {
            return {
              cityName,
              stateName,
            }
          }
        }
      }
    }

    return { cityName: null, stateName: null }
  } catch (error) {
    console.error("Error extracting city and state:", error)
    return { cityName: null, stateName: null }
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  // Default error component
  const ErrorComponent = () => (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Location Not Found</h1>
      <p>We couldn't find information about Frontier services in this location.</p>
    </div>
  )

  // Check if params is defined
  if (!params || typeof params.location !== "string") {
    return <ErrorComponent />
  }

  try {
    const { cityName, stateName } = extractCityAndState(params.location)

    // If we couldn't extract a valid city and state, return a custom error page
    if (!cityName || !stateName) {
      return <ErrorComponent />
    }

    // Select the template based on the city name
    const templateToUse = selectTemplate(cityName, stateName)

    // Default values for fiber and maxSpeed
    const fiber = true
    const maxSpeed = 5000

    // Render the selected template
    return templateToUse === "template2" ? (
      <Template2 cityName={cityName} stateName={stateName} fiber={fiber} maxSpeed={maxSpeed} />
    ) : (
      <Template5
        cityName={cityName}
        stateName={stateName}
        fiber={fiber}
        maxSpeed={maxSpeed}
        population={getPopulationEstimate(cityName, stateName)}
      />
    )
  } catch (error) {
    console.error("Error in LocationPage:", error)
    return <ErrorComponent />
  }
}

// Helper function to estimate population based on city name
function getPopulationEstimate(cityName: string, stateName: string): number {
  try {
    // Create a deterministic but seemingly random population based on city name
    const hash = cityName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return 10000 + (hash % 90000) // Population between 10,000 and 100,000
  } catch (error) {
    console.error("Error estimating population:", error)
    return 50000 // Default fallback
  }
}
