import type { Metadata } from "next"
import { frontierCoverage } from "@/lib/coverage-data"
import Template2 from "@/app/coverage/[state]/[city]/template2"
import Template5 from "@/app/coverage/[state]/[city]/template5"
import { selectTemplate } from "@/lib/template-selector"

// Make this route fully dynamic by removing any static generation
export const dynamic = "force-dynamic"

interface LocationPageProps {
  params: {
    city: string
    state: string
  }
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  // Default metadata
  const defaultMetadata = {
    title: "Frontier Fiber Internet | Fast & Reliable",
    description:
      "Get high-speed Frontier Fiber Internet. Enjoy symmetrical speeds, unlimited data, and reliable connectivity for your home or business.",
  }

  // Check if params is defined and has the required properties
  if (!params || typeof params.city !== "string" || typeof params.state !== "string") {
    return defaultMetadata
  }

  try {
    const { city, state } = params

    // Convert hyphenated names to proper format
    const cityName = city
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")

    const stateName = state
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")

    // Verify this city/state combination exists in our data
    const citiesInState = frontierCoverage[stateName] || []
    const cityExists = citiesInState.some((c) => c.toLowerCase() === cityName.toLowerCase())

    if (!cityExists) {
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
        url: `https://frontier-deals.com/fiber-internet-in-${city}-${state}`,
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

export default function LocationPage({ params }: LocationPageProps) {
  // Default error component
  const ErrorComponent = () => (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Location Not Found</h1>
      <p>We couldn't find information about Frontier services in this location.</p>
    </div>
  )

  // Check if params is defined and has the required properties
  if (!params || typeof params.city !== "string" || typeof params.state !== "string") {
    return <ErrorComponent />
  }

  try {
    const { city, state } = params

    // Convert hyphenated names to proper format
    const cityName = city
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")

    const stateName = state
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")

    // Verify this city/state combination exists in our data
    const citiesInState = frontierCoverage[stateName] || []
    const cityExists = citiesInState.some((c) => c.toLowerCase() === cityName.toLowerCase())

    if (!cityExists) {
      return <ErrorComponent />
    }

    // Select the template based on the city name
    const templateToUse = selectTemplate(cityName, stateName)

    // Default values for fiber and maxSpeed
    const fiber = true
    const maxSpeed = 5000

    // Render the selected template with all required props
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
