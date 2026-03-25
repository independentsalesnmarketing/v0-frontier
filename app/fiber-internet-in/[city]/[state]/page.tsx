import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { frontierCoverage } from "@/lib/coverage-data"
import { getStateInitials } from "@/lib/utils"
import CityPageTemplate from "@/components/CityPageTemplate"

interface LocationPageProps {
  params: Promise<{
    city: string
    state: string
  }>
}

function parseName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

function cityExists(cityName: string, stateName: string): boolean {
  const citiesInState = frontierCoverage[stateName] || []
  return citiesInState.some((c) => c.toLowerCase() === cityName.toLowerCase())
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
}

export async function generateStaticParams() {
  const params = []
  for (const [state, cities] of Object.entries(frontierCoverage)) {
    for (const city of cities as string[]) {
      params.push({ city: slugify(city), state: slugify(state) })
    }
  }
  return params
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city, state } = await params
  const cityName = parseName(city)
  const stateName = parseName(state)

  if (!cityExists(cityName, stateName)) {
    return {
      title: "Frontier Fiber Internet | Page Not Found",
      description: "The requested location could not be found.",
    }
  }

  const stateAbbr = getStateInitials(stateName)
  const title = `Frontier Fiber Internet in ${cityName}, ${stateAbbr} | Plans from $29.99/mo`
  const description = `Get Frontier Fiber Internet in ${cityName}, ${stateName}. Plans starting at $29.99/mo with speeds up to 7 Gig, free installation, no data caps, and no contracts. Check availability today.`

  return {
    title,
    description,
    alternates: { canonical: `https://frontier-deals.com/fiber-internet-in/${city}/${state}` },
    openGraph: {
      title,
      description,
      url: `https://frontier-deals.com/fiber-internet-in/${city}/${state}`,
      siteName: "Frontier Deals",
      locale: "en_US",
      type: "website",
    },
    keywords: [
      `frontier internet ${cityName.toLowerCase()}`,
      `frontier fiber ${cityName.toLowerCase()}`,
      `internet providers ${cityName.toLowerCase()}`,
      `fiber internet ${cityName.toLowerCase()} ${stateAbbr.toLowerCase()}`,
      `frontier ${cityName.toLowerCase()} plans`,
      `best internet ${cityName.toLowerCase()}`,
      `frontier internet ${stateName.toLowerCase()}`,
    ],
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { city, state } = await params
  const cityName = parseName(city)
  const stateName = parseName(state)

  if (!cityExists(cityName, stateName)) {
    notFound()
  }

  return <CityPageTemplate cityName={cityName} stateName={stateName} />
}
