import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { frontierCoverage } from "@/lib/coverage-data"
import Template2 from "@/app/coverage/[state]/[city]/template2"
import Template5 from "@/app/coverage/[state]/[city]/template5"
import { selectTemplate } from "@/lib/template-selector"

interface LocationPageProps {
  params: {
    location: string
  }
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { cityName, stateName } = extractCityAndState(params.location)

  if (!cityName || !stateName) {
    return {
      title: "Frontier Fiber Internet | Page Not Found",
      description: "The requested location could not be found.",
    }
  }

  return {
    title: `Frontier Fiber Internet in ${cityName}, ${stateName} | Fast & Reliable`,
    description: `Get high-speed Frontier Fiber Internet in ${cityName}, ${stateName}. Enjoy symmetrical speeds, unlimited data, and reliable connectivity for your home or business.`,
    openGraph: {
      title: `Frontier Fiber Internet in ${cityName}, ${stateName}`,
      description: `Get high-speed Frontier Fiber Internet in ${cityName}, ${stateName}. Enjoy symmetrical speeds, unlimited data, and reliable connectivity.`,
      url: `https://frontier-deals.com/locations/${params.location}`,
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
}

function extractCityAndState(location: string): { cityName: string | null; stateName: string | null } {
  try {
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
  try {
    const { cityName, stateName } = extractCityAndState(params.location)

    // If we couldn't extract a valid city and state, return 404
    if (!cityName || !stateName) {
      notFound()
    }

    // Select the template based on the city name
    const templateToUse = selectTemplate(cityName, stateName)

    // Render the selected template
    return templateToUse === "template2" ? (
      <Template2 cityName={cityName} stateName={stateName} />
    ) : (
      <Template5 cityName={cityName} stateName={stateName} />
    )
  } catch (error) {
    console.error("Error in LocationPage:", error)
    notFound()
  }
}
