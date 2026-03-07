// This function generates unique, city-specific content to avoid duplicate content issues
// and provide valuable information to users while improving SEO

import { hashString } from "@/lib/utils"

interface QuickStat {
  value: string
  label: string
}

interface Benefit {
  title: string
  description: string
}

interface InternetUsage {
  title: string
  description: string
}

interface PlanRecommendations {
  fiber500: string
  fiber1Gig: string
  fiber2Gig: string
}

interface Infrastructure {
  coverage: string
  technology: string
  expansionPlans: string
  communityImpact: string
}

interface BusinessSpotlight {
  type: string
  description: string
  tags: string[]
}

interface FAQ {
  question: string
  answer: string
}

interface FinalCta {
  userCount: string
  specialOffer: string
}

interface CityContent {
  introduction: string
  quickStats: QuickStat[]
  keyPoints: string[]
  whyChooseFrontier: string
  benefits: Benefit[]
  internetUsage: InternetUsage[]
  planRecommendations: PlanRecommendations
  infrastructure: Infrastructure
  businessSpotlight: BusinessSpotlight[]
  funFacts: string[]
  faqs: FAQ[]
  finalCta: FinalCta
}

// Helper function to get a deterministic but seemingly random number based on city name
function getNumberFromCityName(cityName: string, min: number, max: number): number {
  const hash = hashString(cityName)
  return min + (hash % (max - min + 1))
}

// Helper function to select an item from an array based on city name
function selectBasedOnCity<T>(cityName: string, items: T[]): T {
  const index = getNumberFromCityName(cityName, 0, items.length - 1)
  return items[index]
}

// Helper function to select multiple unique items from an array based on city name
function selectMultipleBasedOnCity<T>(cityName: string, items: T[], count: number): T[] {
  const result: T[] = []
  const availableItems = [...items]

  for (let i = 0; i < count && availableItems.length > 0; i++) {
    const index = getNumberFromCityName(`${cityName}-${i}`, 0, availableItems.length - 1)
    result.push(availableItems[index])
    availableItems.splice(index, 1)
  }

  return result
}

export function generateCitySpecificContent(cityName: string, stateName: string): CityContent {
  // Generate a founding year between 1850 and 1950
  const foundingYear = getNumberFromCityName(cityName, 1850, 1950)

  // Generate internet adoption year between 1995 and 2005
  const internetAdoptionYear = getNumberFromCityName(`${cityName}-internet`, 1995, 2005)

  // Generate fiber introduction year between 2015 and 2022
  const fiberIntroductionYear = getNumberFromCityName(`${cityName}-fiber`, 2015, 2022)

  // Generate current user count (as a string with commas)
  const userCount = (getNumberFromCityName(`${cityName}-users`, 5, 50) * 1000).toLocaleString()

  // Generate coverage percentage
  const coveragePercentage = getNumberFromCityName(`${cityName}-coverage`, 75, 98)

  // Generate expansion timeline in months
  const expansionMonths = getNumberFromCityName(`${cityName}-expansion`, 6, 24)

  // Possible internet activities
  const internetActivities = [
    "video streaming",
    "online gaming",
    "remote work",
    "video conferencing",
    "cloud computing",
    "smart home automation",
    "online education",
    "telemedicine",
    "social media",
    "content creation",
    "e-commerce",
    "cryptocurrency mining",
  ]

  // Select 3 activities for this city
  const cityActivities = selectMultipleBasedOnCity(cityName, internetActivities, 3)

  // Possible business types
  const businessTypes = [
    "Local Café",
    "Tech Startup",
    "Medical Practice",
    "Law Firm",
    "Real Estate Agency",
    "Retail Store",
    "Restaurant",
    "Fitness Studio",
    "Marketing Agency",
    "Accounting Firm",
    "Manufacturing Company",
    "Architecture Firm",
  ]

  // Select 2 business types for this city
  const cityBusinessTypes = selectMultipleBasedOnCity(cityName, businessTypes, 2)

  // Generate business descriptions
  const businessDescriptions = [
    `This ${cityName} business leverages Frontier Fiber's reliable connection to process transactions, manage inventory, and provide free Wi-Fi to customers. The symmetrical speeds ensure their point-of-sale system never lags during peak hours.`,
    `With multiple team members uploading and downloading large files simultaneously, this ${cityName} business relies on Frontier Fiber's symmetrical speeds to maintain productivity. Video conferencing with clients is now seamless.`,
  ]

  // Generate fun facts
  const funFacts = [
    `${cityName} residents download an average of ${getNumberFromCityName(cityName, 200, 500)} GB of data per month, which is ${getNumberFromCityName(`${cityName}-comparison`, 10, 30)}% higher than the national average.`,
    `The first fiber optic cable in ${cityName} was installed in ${fiberIntroductionYear}, and since then, internet speeds have increased by over ${getNumberFromCityName(`${cityName}-speed-increase`, 1000, 5000)}%.`,
    `During peak hours (7-10 PM), ${cityName} residents collectively stream approximately ${getNumberFromCityName(`${cityName}-streaming`, 10, 50)}TB of video content daily.`,
  ]

  // Generate city-specific content
  return {
    introduction: `Founded in ${foundingYear}, ${cityName} has evolved into a vibrant community with modern connectivity needs. Since ${internetAdoptionYear}, when high-speed internet first became available here, residents have increasingly relied on fast, reliable connections for work, education, and entertainment. Frontier introduced fiber internet to ${cityName} in ${fiberIntroductionYear}, transforming how the community connects.`,

    quickStats: [
      { value: `${coveragePercentage}%`, label: "Fiber Coverage" },
      { value: userCount, label: "Connected Users" },
      { value: `${fiberIntroductionYear}`, label: "Fiber Since" },
      { value: "5 Gig", label: "Top Speed" },
    ],

    keyPoints: [
      `Frontier Fiber is available to ${coveragePercentage}% of homes and businesses in ${cityName}`,
      `Plans range from 500 Mbps to 5 Gig to meet diverse needs`,
      `Free professional installation with every plan`,
      `No data caps or throttling for unlimited usage`,
      `Local technicians based in the ${cityName} area`,
    ],

    whyChooseFrontier: `${cityName} residents choose Frontier Fiber for its reliability, speed, and exceptional customer service. Unlike cable or DSL providers, our 100% fiber network delivers symmetrical speeds, meaning you get the same fast upload and download capabilities - essential for ${cityActivities.join(", ")}.`,

    benefits: [
      {
        title: "Lightning-Fast Speeds",
        description: `With up to 7 Gig symmetrical speeds, ${cityName} residents enjoy buffer-free streaming, lag-free gaming, and seamless video calls.`,
      },
      {
        title: "Unmatched Reliability",
        description: `Our dedicated fiber lines ensure consistent performance even during peak usage times in ${cityName}.`,
      },
      {
        title: "Future-Proof Technology",
        description: `As ${cityName} grows, our fiber network scales to meet increasing demands without compromising performance.`,
      },
    ],

    internetUsage: [
      {
        title: "Residential Usage",
        description: `${cityName} homes use Frontier Fiber for ${cityActivities[0]}, ${cityActivities[1]}, and ${cityActivities[2]}. Families particularly value the ability to connect multiple devices simultaneously without slowdowns.`,
      },
      {
        title: "Business Applications",
        description: `Local businesses in ${cityName} rely on our fiber network for reliable point-of-sale systems, cloud computing, and providing guest Wi-Fi. The symmetrical speeds are especially valuable for uploading large files and video conferencing.`,
      },
      {
        title: "Community Impact",
        description: `Frontier Fiber has enabled ${cityName} to attract remote workers, support digital education initiatives, and bridge the digital divide. Our investment in local infrastructure supports economic growth and quality of life.`,
      },
    ],

    planRecommendations: {
      fiber500: `small households in ${cityName} with basic streaming and browsing needs`,
      fiber1Gig: `${cityName} families with multiple devices streaming, gaming, and working from home`,
      fiber2Gig: `power users in ${cityName} who need the ultimate performance for work and entertainment`,
    },

    infrastructure: {
      coverage: `Frontier's fiber network currently covers ${coveragePercentage}% of ${cityName}, with service available in most neighborhoods including ${selectMultipleBasedOnCity(`${cityName}-neighborhoods`, ["downtown", "north side", "south side", "east side", "west side", "central district", "historic district"], 2).join(" and ")}.`,

      technology: `Our network in ${cityName} uses the latest fiber optic technology, delivering light-speed internet through hair-thin glass fibers. This dedicated line to your home ensures consistent speeds regardless of neighborhood congestion.`,

      expansionPlans: `We're actively expanding our fiber footprint in ${cityName}, with plans to reach ${Math.min(coveragePercentage + 10, 100)}% coverage within the next ${expansionMonths} months. Construction is currently underway in several neighborhoods.`,

      communityImpact: `Our investment in ${cityName}'s digital infrastructure has helped attract new businesses, support remote workers, and enhance educational opportunities. We're proud to be part of the community's digital future.`,
    },

    businessSpotlight: [
      {
        type: cityBusinessTypes[0],
        description: businessDescriptions[0],
        tags: ["Customer Wi-Fi", "Point-of-Sale", "Cloud Backup"],
      },
      {
        type: cityBusinessTypes[1],
        description: businessDescriptions[1],
        tags: ["Video Conferencing", "File Sharing", "Remote Work"],
      },
    ],

    funFacts: funFacts,

    faqs: [
      {
        question: `Is Frontier Fiber available at my address in ${cityName}?`,
        answer: `Frontier Fiber is available to ${coveragePercentage}% of homes in ${cityName}. To check if your specific address is serviceable, use our availability checker on the website.`,
      },
      {
        question: `How does Frontier Fiber compare to other internet providers in ${cityName}?`,
        answer: `Frontier Fiber offers several advantages over other ${cityName} providers: symmetrical speeds (same upload and download), dedicated lines (not shared with neighbors), no data caps, and free professional installation. Our fiber technology provides more reliable service than cable or DSL alternatives available in ${cityName}.`,
      },
      {
        question: `How long does installation take in ${cityName}?`,
        answer: `Typical installation in ${cityName} takes 2-3 hours, depending on your home's configuration. Our local technicians will set up your equipment, ensure everything is working properly, and show you how to get the most from your connection.`,
      },
      {
        question: `Are there any special offers for ${cityName} residents?`,
        answer: `Yes! ${cityName} residents can currently take advantage of free professional installation (a $100 value), and new customers may qualify for additional promotions like bill credits or reward cards. Check our current offers for details.`,
      },
      {
        question: `When will Frontier Fiber be available in my ${cityName} neighborhood?`,
        answer: `We're actively expanding our network throughout ${cityName}. If fiber isn't yet available at your address, you can sign up for notifications to be alerted when service becomes available in your neighborhood. Our expansion plan aims to reach ${Math.min(coveragePercentage + 10, 100)}% of ${cityName} within ${expansionMonths} months.`,
      },
    ],

    finalCta: {
      userCount,
      specialOffer: `Limited Time Offer for ${cityName} Residents: Free Professional Installation ($100 value) and No Term Contract Required. Satisfaction Guaranteed.`,
    },
  }
}
