// Enhanced city content generator with extensive, keyword-rich content
// This creates unique, city-specific content to improve SEO and drive conversions

interface KeyBenefit {
  title: string
  description: string
}

interface InternetStat {
  title: string
  value: string
  description: string
}

interface UserProfile {
  title: string
  description: string
}

interface UsageStat {
  value: string
  label: string
}

interface CommunityInitiative {
  title: string
  description: string
}

interface WhyChooseReason {
  title: string
  description: string
}

interface BusinessSpotlight {
  type: string
  description: string
  tags: string[]
}

interface UsageTrend {
  title: string
  description: string
}

interface SpeedRecommendation {
  activity: string
  speed: string
  plan: string
}

interface FAQ {
  question: string
  answer: string
}

interface EnhancedCityContent {
  heroTagline: string
  promoBanner: string
  overviewIntro: string
  keyBenefits: KeyBenefit[]
  internetStats: InternetStat[]
  userProfiles: UserProfile[]
  cityIntro: string
  usagePatterns: string
  usageStats: UsageStat[]
  infrastructure: string
  coverageAreas: string
  neighborhoods: string[]
  futureExpansion: string
  communityImpact: string
  communityInitiatives: CommunityInitiative[]
  comparisonIntro: string
  competitor1: string
  competitor2: string
  competitor1Speed: string
  competitor2Speed: string
  competitor1Upload: string
  competitor2Upload: string
  competitor1Price: string
  competitor2Price: string
  competitor1DataCap: string
  competitor2DataCap: string
  competitor1Contract: string
  competitor2Contract: string
  competitor1Installation: string
  competitor2Installation: string
  competitor1Equipment: string
  competitor2Equipment: string
  whyChooseFrontier: WhyChooseReason[]
  businessSpotlights: BusinessSpotlight[]
  businessSolutions: string
  internetUsage: string[]
  usageTrends: UsageTrend[]
  speedNeeds: string
  speedRecommendations: SpeedRecommendation[]
  funFacts: string[]
  faqs: FAQ[]
  nearbyCities: string[]
}

// Helper function to get a deterministic but seemingly random number based on city name
function getNumberFromCityName(cityName: string, min: number, max: number): number {
  const hash = cityName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
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
  const seed = cityName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)

  for (let i = 0; i < count && availableItems.length > 0; i++) {
    const index = (seed + i * 17) % availableItems.length
    result.push(availableItems[index])
    availableItems.splice(index, 1)
  }

  return result
}

export function generateEnhancedCityContent(
  cityName: string,
  stateName: string,
  fiber: boolean,
  maxSpeed: number,
  population?: number, // Make population optional
): EnhancedCityContent {
  // Set a default population if undefined
  const cityPopulation = population || getNumberFromCityName(`${cityName}-population`, 10000, 100000)

  // Generate a founding year between 1800 and 1950
  const foundingYear = getNumberFromCityName(`${cityName}-founding`, 1800, 1950)

  // Generate internet adoption year between 1995 and 2005
  const internetAdoptionYear = getNumberFromCityName(`${cityName}-internet`, 1995, 2005)

  // Generate fiber introduction year between 2015 and 2022
  const fiberIntroductionYear = getNumberFromCityName(`${cityName}-fiber`, 2015, 2022)

  // Generate current user percentage
  const userPercentage = getNumberFromCityName(`${cityName}-users`, 35, 85)

  // Generate coverage percentage
  const coveragePercentage = getNumberFromCityName(`${cityName}-coverage`, 75, 98)

  // Generate expansion timeline in months
  const expansionMonths = getNumberFromCityName(`${cityName}-expansion`, 6, 24)

  // Generate average household size
  const avgHouseholdSize = (getNumberFromCityName(`${cityName}-household`, 24, 42) / 10).toFixed(1)

  // Generate average devices per household
  const avgDevices = getNumberFromCityName(`${cityName}-devices`, 8, 22)

  // Generate average monthly data usage
  const avgDataUsage = getNumberFromCityName(`${cityName}-data`, 350, 950)

  // Generate peak usage hours
  const peakHourStart = getNumberFromCityName(`${cityName}-peak-start`, 18, 20)
  const peakHourEnd = peakHourStart + 3

  // Generate competitors based on state
  const competitors = {
    California: ["Spectrum", "AT&T", "Xfinity", "Cox"],
    Texas: ["AT&T", "Spectrum", "Xfinity", "Grande"],
    Florida: ["Xfinity", "Spectrum", "AT&T", "Cox"],
    "New York": ["Spectrum", "Optimum", "Verizon", "RCN"],
    default: ["Spectrum", "Xfinity", "AT&T", "Cox"],
  }

  const stateCompetitors = competitors[stateName as keyof typeof competitors] || competitors.default
  const competitor1 = stateCompetitors[0]
  const competitor2 = stateCompetitors[1]

  // Possible internet activities
  const internetActivities = [
    "streaming 4K movies and TV shows",
    "competitive online gaming",
    "video conferencing and remote work",
    "running smart home devices",
    "online education and virtual classrooms",
    "cloud gaming services",
    "uploading large files and content creation",
    "telemedicine and virtual healthcare",
    "social media and video sharing",
    "cryptocurrency mining and blockchain",
    "virtual reality and augmented reality",
    "home security and surveillance systems",
  ]

  // Select 3 activities for this city
  const cityActivities = selectMultipleBasedOnCity(cityName, internetActivities, 3)

  // Possible business types
  const businessTypes = [
    "Local Café & Bakery",
    "Tech Startup",
    "Medical Practice",
    "Law Firm",
    "Real Estate Agency",
    "Retail Store",
    "Restaurant & Catering",
    "Fitness Studio",
    "Marketing Agency",
    "Accounting Firm",
    "Manufacturing Company",
    "Architecture & Design Firm",
    "Photography Studio",
    "Veterinary Clinic",
    "Auto Repair Shop",
    "Dental Practice",
  ]

  // Select 2 business types for this city
  const cityBusinessTypes = selectMultipleBasedOnCity(cityName, businessTypes, 2)

  // Possible neighborhoods
  const neighborhoodPrefixes = [
    "North",
    "South",
    "East",
    "West",
    "Central",
    "Downtown",
    "Uptown",
    "Old",
    "New",
    "Historic",
  ]
  const neighborhoodSuffixes = [
    "District",
    "Heights",
    "Park",
    "Village",
    "Square",
    "Hills",
    "Gardens",
    "Estates",
    "Crossing",
    "Landing",
  ]

  // Generate 4-6 unique neighborhood names
  const neighborhoodCount = getNumberFromCityName(`${cityName}-neighborhoods-count`, 4, 6)
  const neighborhoods: string[] = []

  for (let i = 0; i < neighborhoodCount; i++) {
    const prefix =
      neighborhoodPrefixes[
        getNumberFromCityName(`${cityName}-neighborhood-${i}-prefix`, 0, neighborhoodPrefixes.length - 1)
      ]
    const suffix =
      neighborhoodSuffixes[
        getNumberFromCityName(`${cityName}-neighborhood-${i}-suffix`, 0, neighborhoodSuffixes.length - 1)
      ]
    neighborhoods.push(`${prefix} ${suffix}`)
  }

  // Add cityName to one of the neighborhoods
  const cityNeighborhoodIndex = getNumberFromCityName(`${cityName}-city-neighborhood`, 0, neighborhoods.length - 1)
  neighborhoods[cityNeighborhoodIndex] =
    `${cityName} ${neighborhoodSuffixes[getNumberFromCityName(`${cityName}-city-suffix`, 0, neighborhoodSuffixes.length - 1)]}`

  // Generate nearby cities (5-8)
  const nearbyCityCount = getNumberFromCityName(`${cityName}-nearby-count`, 5, 8)
  const citySuffixes = [
    "ville",
    "ton",
    "burg",
    "field",
    "wood",
    "ford",
    "port",
    "land",
    "view",
    "side",
    "haven",
    "dale",
    "boro",
  ]
  const cityPrefixes = [
    "Spring",
    "Oak",
    "River",
    "Lake",
    "Green",
    "Fair",
    "West",
    "East",
    "North",
    "South",
    "Mill",
    "Pine",
    "Cedar",
  ]

  const nearbyCities: string[] = []
  for (let i = 0; i < nearbyCityCount; i++) {
    const prefix = cityPrefixes[getNumberFromCityName(`${cityName}-nearby-${i}-prefix`, 0, cityPrefixes.length - 1)]
    const suffix = citySuffixes[getNumberFromCityName(`${cityName}-nearby-${i}-suffix`, 0, citySuffixes.length - 1)]
    nearbyCities.push(`${prefix}${suffix}`)
  }

  // Generate fun facts
  const funFacts = [
    `${cityName} residents download an average of ${avgDataUsage} GB of data per month, which is ${getNumberFromCityName(`${cityName}-comparison`, 10, 30)}% ${getNumberFromCityName(`${cityName}-comparison-dir`, 0, 1) === 0 ? "higher" : "lower"} than the national average.`,
    `The first fiber optic cable in ${cityName} was installed in ${fiberIntroductionYear}, and since then, internet speeds have increased by over ${getNumberFromCityName(`${cityName}-speed-increase`, 1000, 5000)}%.`,
    `During peak hours (${peakHourStart}PM-${peakHourEnd}PM), ${cityName} residents collectively stream approximately ${getNumberFromCityName(`${cityName}-streaming`, 10, 50)}TB of video content daily.`,
    `${cityName} homes have an average of ${avgDevices} connected devices per household, a number that's expected to grow to ${avgDevices + getNumberFromCityName(`${cityName}-device-growth`, 5, 15)} by ${new Date().getFullYear() + 3}.`,
    `According to our data, ${getNumberFromCityName(`${cityName}-wfh`, 20, 45)}% of ${cityName} residents work from home at least part-time, making reliable internet essential for the local economy.`,
  ]

  // Select 3 unique fun facts
  const selectedFunFacts = selectMultipleBasedOnCity(`${cityName}-facts`, funFacts, 3)

  // Generate city-specific content
  return {
    heroTagline: fiber ? `Exclusive ${cityName} Fiber Offer` : `Fast Internet for ${cityName} Residents`,

    promoBanner: fiber
      ? `Limited Time ${cityName} Offer: Get Frontier Fiber with FREE installation and a $100 reward card!`
      : `${cityName} Special: Get Frontier Internet with FREE installation and no term contracts!`,

    overviewIntro: fiber
      ? `Frontier Fiber delivers lightning-fast internet to ${cityName} homes and businesses through advanced fiber optic technology. Unlike traditional cable or DSL connections, our fiber network transmits data using light signals through thin glass fibers, resulting in symmetrical speeds up to ${maxSpeed} Mbps and unparalleled reliability for ${cityName} residents.`
      : `Frontier Internet provides reliable high-speed connections to ${cityName} homes and businesses. With speeds up to ${maxSpeed} Mbps, our service delivers consistent performance for streaming, gaming, working from home, and all your online activities throughout ${cityName}.`,

    keyBenefits: [
      {
        title: "Symmetrical Speeds",
        description: fiber
          ? `Equal upload and download speeds up to ${maxSpeed} Mbps, perfect for video conferencing, cloud backups, and content creation in ${cityName}`
          : `Fast download speeds up to ${maxSpeed} Mbps with reliable upload capabilities for ${cityName} residents`,
      },
      {
        title: "Unlimited Data",
        description: `No data caps or throttling, so ${cityName} residents can stream, game, and download as much as they want without restrictions`,
      },
      {
        title: "Reliability",
        description: fiber
          ? `Fiber optic cables are less susceptible to interference and weather conditions, providing ${cityName} with a more stable connection even during peak usage times`
          : `Our network is built for reliability, giving ${cityName} residents consistent performance they can count on`,
      },
      {
        title: "Local Support",
        description: `${cityName} customers have access to local technical support and customer service representatives who understand the specific needs of the community`,
      },
      {
        title: "No Contracts",
        description: `Flexible plans with no long-term commitments required for ${cityName} residents`,
      },
    ],

    internetStats: [
      {
        title: "Maximum Download Speed",
        value: fiber ? `${maxSpeed} Mbps` : `${maxSpeed} Mbps`,
        description: fiber ? "Symmetrical fiber speeds" : "Fast download speeds",
      },
      {
        title: "Maximum Upload Speed",
        value: fiber ? `${maxSpeed} Mbps` : "20 Mbps",
        description: fiber ? "Equal to download speed" : "For video calls and uploads",
      },
      {
        title: `${cityName} Coverage`,
        value: `${coveragePercentage}%`,
        description: `Of ${cityName} homes serviceable`,
      },
    ],

    userProfiles: [
      {
        title: "Remote Workers",
        description: `With ${getNumberFromCityName(`${cityName}-wfh`, 20, 45)}% of ${cityName} residents working from home at least part-time, our ${fiber ? "symmetrical fiber speeds" : "reliable internet"} ensures smooth video conferencing and fast file transfers.`,
      },
      {
        title: "Gamers",
        description: `${cityName}'s gaming community benefits from our ${fiber ? "ultra-low latency fiber connection" : "consistent, low-latency connection"}, providing a competitive edge with minimal lag and quick download times.`,
      },
      {
        title: "Streaming Enthusiasts",
        description: `Families in ${cityName} can stream 4K content on multiple devices simultaneously without buffering, thanks to our ${fiber ? "high-capacity fiber network" : "high-speed internet service"}.`,
      },
      {
        title: "Smart Homes",
        description: `${cityName} residents with smart home devices enjoy seamless connectivity for security systems, thermostats, lighting, and entertainment with our ${fiber ? "fiber internet" : "reliable internet"} service.`,
      },
    ],

    cityIntro: `Founded in ${foundingYear}, ${cityName} has grown into a vibrant community of approximately ${cityPopulation.toLocaleString()} residents with increasingly sophisticated connectivity needs. Since ${internetAdoptionYear}, when high-speed internet first became widely available in ${cityName}, residents have relied on fast, reliable connections for work, education, entertainment, and staying connected with loved ones. ${fiber ? `Frontier introduced fiber internet to ${cityName} in ${fiberIntroductionYear}, revolutionizing how the community experiences the digital world.` : `Frontier continues to invest in ${cityName}'s digital infrastructure to provide residents with the best possible internet experience.`}`,

    usagePatterns: `${cityName} residents demonstrate unique internet usage patterns that reflect the community's lifestyle and priorities. With an average household size of ${avgHouseholdSize} people and ${avgDevices} connected devices per home, ${cityName} families require robust internet solutions that can handle multiple simultaneous users. Peak usage occurs between ${peakHourStart}PM and ${peakHourEnd}PM on weekdays, when residents return home from work and school to stream content, play online games, and connect with friends and family.`,

    usageStats: [
      {
        value: `${avgDevices}`,
        label: "Avg. Connected Devices per Home",
      },
      {
        value: `${avgDataUsage} GB`,
        label: "Monthly Data Usage per Household",
      },
      {
        value: `${userPercentage}%`,
        label: `${cityName} Residents Using Streaming Services`,
      },
    ],

    infrastructure: `${fiber ? `Frontier's fiber network in ${cityName} uses state-of-the-art fiber optic technology, delivering internet service through hair-thin glass fibers that transmit data via pulses of light. This advanced infrastructure enables speeds up to ${maxSpeed} Mbps with symmetrical upload and download capabilities, a significant advantage over traditional copper-based networks.` : `Frontier's network in ${cityName} utilizes advanced technology to deliver reliable high-speed internet service. Our infrastructure supports speeds up to ${maxSpeed} Mbps, providing consistent performance for streaming, gaming, and everyday internet use.`} We continue to invest in ${cityName}'s digital infrastructure, with ongoing upgrades and expansion to meet the community's growing connectivity needs.`,

    coverageAreas: `Frontier ${fiber ? "Fiber" : "Internet"} is currently available to ${coveragePercentage}% of homes and businesses in ${cityName}. Our service covers most major neighborhoods, including ${neighborhoods.slice(0, 3).join(", ")}, and ${neighborhoods.slice(3).join(", ")}. Coverage is particularly strong in ${neighborhoods[0]} and ${neighborhoods[1]}, where we've recently completed network upgrades to enhance performance and reliability.`,

    neighborhoods: neighborhoods,

    futureExpansion: `We're actively expanding our ${fiber ? "fiber" : "high-speed internet"} footprint in ${cityName}, with plans to reach ${Math.min(coveragePercentage + 10, 100)}% coverage within the next ${expansionMonths} months. Construction is currently underway in ${neighborhoods[neighborhoods.length - 1]} and will soon begin in ${neighborhoods[neighborhoods.length - 2]}. This expansion will bring ${fiber ? "fiber internet" : "improved internet service"} to approximately ${getNumberFromCityName(`${cityName}-new-homes`, 500, 5000).toLocaleString()} additional ${cityName} homes and businesses.`,

    communityImpact: `Frontier is deeply committed to ${cityName}'s digital future. Our investment in local infrastructure has helped bridge the digital divide, support economic development, and enhance quality of life for residents. By providing fast, reliable internet service, we're enabling remote work opportunities, supporting distance learning, and helping local businesses compete in the digital marketplace.`,

    communityInitiatives: [
      {
        title: "Digital Literacy Programs",
        description: `Free workshops for ${cityName} seniors and students to develop essential online skills`,
      },
      {
        title: "Affordable Connectivity Program",
        description: `Partnering with local organizations to provide discounted internet service to eligible ${cityName} residents`,
      },
      {
        title: `${cityName} Public Wi-Fi`,
        description: "Supporting free Wi-Fi access in public spaces throughout the community",
      },
      {
        title: "Local Business Digital Transformation",
        description: `Helping ${cityName} businesses establish and enhance their online presence`,
      },
    ],

    comparisonIntro: `When comparing internet providers in ${cityName}, it's important to consider factors beyond just the advertised speed. Reliability, actual performance during peak hours, customer service, and value all play crucial roles in your internet experience. Here's how Frontier ${fiber ? "Fiber" : "Internet"} compares to other providers serving ${cityName}:`,

    competitor1,
    competitor2,

    competitor1Speed: fiber ? "Up to 1 Gbps" : "Up to 400 Mbps",
    competitor2Speed: fiber ? "Up to 940 Mbps" : "Up to 100 Mbps",

    competitor1Upload: fiber ? "Up to 35 Mbps" : "Up to 20 Mbps",
    competitor2Upload: fiber ? "Up to 35 Mbps" : "Up to 10 Mbps",

    competitor1Price: "$49.99/mo",
    competitor2Price: "$39.99/mo",

    competitor1DataCap: "1.2 TB/month",
    competitor2DataCap: "1 TB/month",

    competitor1Contract: "1-year required",
    competitor2Contract: "2-year required",

    competitor1Installation: "$99",
    competitor2Installation: "$75",

    competitor1Equipment: "$14/mo",
    competitor2Equipment: "$10/mo",

    whyChooseFrontier: [
      {
        title: `Superior Performance in ${cityName}`,
        description: fiber
          ? `Our fiber network delivers consistent speeds even during peak usage hours in ${cityName}, unlike cable providers whose performance can degrade when many neighbors are online simultaneously.`
          : `Our network is engineered to maintain consistent performance throughout ${cityName}, even during high-demand periods.`,
      },
      {
        title: "No Hidden Fees",
        description: `${cityName} residents appreciate our transparent pricing with no surprise charges, data overage fees, or hidden costs.`,
      },
      {
        title: "Local Expertise",
        description: `Our technicians and customer service representatives understand ${cityName}'s unique infrastructure and needs, providing personalized support you won't get from national call centers.`,
      },
      {
        title: "Future-Proof Technology",
        description: fiber
          ? `Our fiber network in ${cityName} is built to accommodate increasing bandwidth demands for years to come, ensuring your connection remains fast and reliable as technology evolves.`
          : `We continually invest in our ${cityName} network to keep pace with evolving technology and increasing bandwidth demands.`,
      },
    ],

    businessSpotlights: [
      {
        type: cityBusinessTypes[0],
        description: `This popular ${cityName} business relies on Frontier ${fiber ? "Fiber" : "Internet"} to process transactions, manage inventory, and provide free Wi-Fi to customers. ${fiber ? "With symmetrical speeds, their point-of-sale system never lags during peak hours, and they can quickly upload daily specials to social media." : "Their reliable connection ensures smooth operations even during their busiest hours."}`,
        tags: ["Point-of-Sale", "Customer Wi-Fi", "Inventory Management"],
      },
      {
        type: cityBusinessTypes[1],
        description: `With multiple team members uploading and downloading large files simultaneously, this growing ${cityName} business depends on ${fiber ? "Frontier Fiber's symmetrical speeds" : "Frontier's reliable internet"} to maintain productivity. ${fiber ? "Video conferencing with clients is crystal clear, and cloud backups complete quickly without disrupting other work." : "Their connection supports multiple users and applications running simultaneously."}`,
        tags: ["Cloud Computing", "Video Conferencing", "File Sharing"],
      },
    ],

    businessSolutions: `Frontier offers tailored internet solutions for ${cityName} businesses of all sizes. From small retail shops to large corporate offices, our ${fiber ? "fiber" : "business internet"} plans provide the speed, reliability, and support businesses need to thrive in today's digital economy. With dedicated business support, static IP options, and enhanced security features, we help ${cityName} businesses stay connected, productive, and competitive.`,

    internetUsage: cityActivities,

    usageTrends: [
      {
        title: "Remote Work & Education",
        description: `${getNumberFromCityName(`${cityName}-wfh`, 20, 45)}% of ${cityName} residents now work or study from home at least part-time, creating demand for reliable connections that support video conferencing, file sharing, and virtual collaboration tools.`,
      },
      {
        title: "Streaming & Entertainment",
        description: `${cityName} households stream an average of ${getNumberFromCityName(`${cityName}-streaming-hours`, 4, 8)} hours of content daily across multiple services, with peak usage between ${peakHourStart}PM and ${peakHourEnd}PM when families gather for entertainment.`,
      },
      {
        title: "Smart Home Growth",
        description: `The number of connected devices in ${cityName} homes has increased by ${getNumberFromCityName(`${cityName}-device-growth`, 30, 70)}% in the last three years, with smart speakers, security systems, and entertainment devices leading the trend.`,
      },
    ],

    speedNeeds: `Different online activities in ${cityName} require different internet speeds for optimal performance. While basic web browsing and email might only need 5-10 Mbps, activities like 4K streaming, competitive gaming, and video conferencing demand much more bandwidth. For households with multiple users and devices, higher speeds become essential to prevent buffering, lag, and connection issues.`,

    speedRecommendations: [
      {
        activity: "Basic browsing & email",
        speed: "5-10 Mbps",
        plan: fiber ? "Fiber 500" : "Internet 200",
      },
      {
        activity: "HD video streaming",
        speed: "15-25 Mbps per stream",
        plan: fiber ? "Fiber 500" : "Internet 200",
      },
      {
        activity: "4K video streaming",
        speed: "25-35 Mbps per stream",
        plan: fiber ? "Fiber 500" : "Internet 500",
      },
      {
        activity: "Online gaming",
        speed: "25-50 Mbps",
        plan: fiber ? "Fiber 500" : "Internet 500",
      },
      {
        activity: "Video conferencing",
        speed: "10-20 Mbps",
        plan: fiber ? "Fiber 500" : "Internet 200",
      },
      {
        activity: "Multiple users & devices (3-5)",
        speed: "100-200 Mbps",
        plan: fiber ? "Fiber 500" : "Internet 500",
      },
      {
        activity: "Smart home with many devices",
        speed: "200+ Mbps",
        plan: fiber ? "Fiber 1 Gig" : "Internet 500",
      },
      {
        activity: "Work from home with large file transfers",
        speed: "300+ Mbps with good upload",
        plan: fiber ? "Fiber 1 Gig" : "Internet 500",
      },
    ],

    funFacts: selectedFunFacts,

    faqs: [
      {
        question: `Is Frontier ${fiber ? "Fiber" : "Internet"} available at my address in ${cityName}?`,
        answer: `Frontier ${fiber ? "Fiber" : "Internet"} is available to ${coveragePercentage}% of homes in ${cityName}. To check if your specific address is serviceable, use our availability checker or call our local ${cityName} team. Our service is particularly strong in the ${neighborhoods[0]} and ${neighborhoods[1]} areas, with expansion underway in other neighborhoods.`,
      },
      {
        question: `How does Frontier compare to ${competitor1} in ${cityName}?`,
        answer: `Unlike ${competitor1}, Frontier offers ${fiber ? "symmetrical upload and download speeds" : "consistent performance"}, no data caps, free installation, and no required contracts. ${fiber ? `Our fiber technology provides more reliable service than ${competitor1}'s cable infrastructure, especially during peak usage times in ${cityName}.` : `Our service is designed to provide reliable performance throughout ${cityName}, even during high-demand periods.`}`,
      },
      {
        question: `What internet speed do I need in ${cityName}?`,
        answer: `The ideal internet speed for your ${cityName} home depends on your online activities and number of connected devices. For a household of ${avgHouseholdSize} people with typical usage (streaming, browsing, video calls), we recommend at least ${fiber ? "500 Mbps" : "200 Mbps"}. Larger households with heavy gaming, 4K streaming, or work-from-home needs should consider our ${fiber ? "1 Gig or 2 Gig" : "500 Mbps"} plans.`,
      },
      {
        question: `How long does installation take in ${cityName}?`,
        answer: `Typical installation in ${cityName} takes 2-3 hours, depending on your home's configuration. Our local technicians will set up your equipment, ensure everything is working properly, and show you how to get the most from your connection. We offer flexible scheduling to accommodate your needs.`,
      },
      {
        question: `Are there any special offers for ${cityName} residents?`,
        answer: `Yes! ${cityName} residents can currently take advantage of free professional installation (a $100 value), and new customers may qualify for additional promotions like bill credits or reward cards. Check our current offers for details.`,
      },
      {
        question: `When will Frontier ${fiber ? "Fiber" : "Internet"} be available in my ${cityName} neighborhood?`,
        answer: `We're actively expanding our network throughout ${cityName}. If service isn't yet available at your address, you can sign up for notifications to be alerted when it becomes available in your neighborhood. Our expansion plan aims to reach ${Math.min(coveragePercentage + 10, 100)}% of ${cityName} within ${expansionMonths} months.`,
      },
    ],

    nearbyCities: nearbyCities,
  }
}
