// This file provides city-specific expertise data for Frontier Communications
// It contains information about local insights, challenges, solutions, and testimonials

interface LocalExpertise {
  servingSince: string
  localInsight: string
  popularAreas: string[]
  testimonials: string[]
  zipCodes: string[]
  challenges: string[]
  solutions: string[]
  expansionTimeframe: string
  expertComparison: string
  expertQuote: string
  expertName: string
  planRecommendation: string
  recommendedPlan: string
  neighborhoodAdoption: string
  customerTestimonials: {
    name: string
    neighborhood: string
    rating: number
    comment: string
    plan: string
    customerSince: string
  }[]
  localEvents: {
    month: string
    day: string
    title: string
    description: string
    location: string
  }[]
  installationPhotos: {
    location: string
    description: string
  }[]
  expertInitials: string
  expertTitle: string
}

// Generate local expertise data based on city and state
export function getCityLocalExpertise(cityName: string, stateName: string, hasFiber: boolean): LocalExpertise {
  // Create a deterministic but varied hash based on city name
  let hash = 0
  for (let i = 0; i < cityName.length; i++) {
    hash = (hash << 5) - hash + cityName.charCodeAt(i)
    hash = hash & hash // Convert to 32bit integer
  }
  hash = Math.abs(hash)

  // Generate a service start year between 2010 and 2020
  const startYear = 2010 + (hash % 10)

  // Generate ZIP codes based on city name
  const zipCodes = []
  const zipBase = 10000 + (hash % 90000)
  for (let i = 0; i < 5; i++) {
    zipCodes.push(String(zipBase + i))
  }

  // Generate popular areas based on city name
  const areas = [
    "Downtown",
    "Westside",
    "Northgate",
    "Eastview",
    "Southpark",
    "Riverfront",
    "Lakeside",
    "Highland",
    "Midtown",
    "University District",
    "Old Town",
    "Harbor View",
    "Parkside",
    "Greenfield",
    "Sunset Hills",
  ]

  const popularAreas: string[] = []
  for (let i = 0; i < 4; i++) {
    popularAreas.push(areas[(hash + i) % areas.length])
  }

  // Generate testimonials
  const testimonialTemplates = [
    "We've been helping families in AREA switch to Frontier Fiber since last year. The difference in streaming quality is night and day!",
    "Just last month, we connected over 20 homes in the AREA neighborhood to our fiber network. Residents are loving the symmetrical speeds.",
    "The AREA community has been one of our fastest-growing areas for fiber adoption. Nearly 70% of eligible homes have already made the switch.",
    "We recently completed a major fiber expansion in AREA, bringing gigabit speeds to over 500 homes that previously had limited options.",
  ]

  const testimonials = testimonialTemplates.map((t) => t.replace("AREA", popularAreas[hash % popularAreas.length]))

  // Generate local challenges
  const challengeTemplates = [
    `Many ${cityName} residents were stuck with outdated DSL connections before Frontier expanded here`,
    `The ${popularAreas[0]} area had particularly unreliable service during peak hours with previous providers`,
    `New construction in ${popularAreas[1]} initially lacked proper internet infrastructure`,
    `Many apartment buildings in ${cityName} had exclusive contracts with cable providers, limiting resident choices`,
    `Rural areas just outside ${cityName} had very limited connectivity options`,
  ]

  const challenges = []
  for (let i = 0; i < 3; i++) {
    challenges.push(challengeTemplates[(hash + i) % challengeTemplates.length])
  }

  // Generate solutions
  const solutionTemplates = [
    `We've installed dedicated fiber lines to ensure consistent speeds even during peak usage times`,
    `Our local technicians are specifically trained on ${cityName}'s unique infrastructure challenges`,
    `We've partnered with property managers to bring fiber directly to apartment buildings`,
    `Our network is built with redundancy to maintain connectivity during ${stateName}'s weather events`,
    `We offer specialized installation options for historic homes common in ${cityName}`,
  ]

  const solutions = []
  for (let i = 0; i < 3; i++) {
    solutions.push(solutionTemplates[(hash + i) % solutionTemplates.length])
  }

  // Generate customer testimonials
  const customerNames = [
    "Michael Johnson",
    "Jennifer Smith",
    "David Williams",
    "Sarah Brown",
    "Robert Jones",
    "Lisa Garcia",
    "James Miller",
    "Emily Davis",
    "Thomas Wilson",
    "Jessica Martinez",
  ]

  const testimonialComments = [
    `After switching to Frontier Fiber, my work-from-home setup has been flawless. Video calls are crystal clear, and I can upload large files in seconds.`,
    `We were tired of buffering during movie nights. Since getting Frontier, our whole family can stream, game, and video chat simultaneously without issues.`,
    `As a gamer, the low latency and consistent speeds have made a huge difference. No more lag during critical moments!`,
    `Working remotely with two kids doing online schoolwork was impossible with our old provider. Frontier's reliability has been a game-changer for our family.`,
    `I run a small business from home and depend on reliable internet. Frontier has exceeded my expectations with consistent speeds and excellent uptime.`,
  ]

  const customerTestimonials = []
  for (let i = 0; i < 3; i++) {
    const yearSince = 2020 + ((hash + i) % 3)
    customerTestimonials.push({
      name: customerNames[(hash + i) % customerNames.length],
      neighborhood: popularAreas[i % popularAreas.length],
      rating: 4 + (i % 2),
      comment: testimonialComments[(hash + i) % testimonialComments.length],
      plan: hasFiber
        ? ["Fiber 500", "Fiber 1 Gig", "Fiber 2 Gig"][i % 3]
        : ["Internet 100", "Internet 200", "Internet 500"][i % 3],
      customerSince: yearSince.toString(),
    })
  }

  // Generate local events
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const eventTitles = [
    `Frontier Tech Workshop`,
    `Internet Safety Seminar`,
    `Fiber Installation Open House`,
    `Community Gaming Tournament`,
    `Digital Literacy Workshop`,
    `Smart Home Demonstration`,
  ]

  const eventDescriptions = [
    `Learn how to optimize your home network and get the most from your Frontier service.`,
    `Free workshop on protecting your family online and securing your home network.`,
    `Meet our local technicians and see a live fiber installation demonstration.`,
    `Sponsored by Frontier - test your skills on our ultra-low latency connection.`,
    `Free training for seniors and beginners on essential digital skills.`,
    `See the latest smart home technology powered by Frontier Fiber.`,
  ]

  const eventLocations = [
    `${cityName} Community Center`,
    `${cityName} Public Library`,
    `Frontier Store - ${popularAreas[0]} Location`,
    `${popularAreas[1]} Recreation Center`,
    `${cityName} Tech Hub`,
  ]

  const localEvents = []
  for (let i = 0; i < 3; i++) {
    const monthIndex = (new Date().getMonth() + i) % 12
    const day = 5 + ((hash + i) % 25)

    localEvents.push({
      month: months[monthIndex],
      day: day.toString(),
      title: eventTitles[(hash + i) % eventTitles.length],
      description: eventDescriptions[(hash + i) % eventDescriptions.length],
      location: eventLocations[(hash + i) % eventLocations.length],
    })
  }

  // Generate installation photos
  const photoDescriptions = [
    `Fiber installation completed same-day`,
    `Outdoor fiber terminal serving multiple homes`,
    `Indoor equipment setup with Wi-Fi optimization`,
    `Fiber line installation to historic building`,
    `New development pre-wired with fiber`,
  ]

  const installationPhotos = []
  for (let i = 0; i < 3; i++) {
    installationPhotos.push({
      location: `${popularAreas[i % popularAreas.length]}`,
      description: photoDescriptions[(hash + i) % photoDescriptions.length],
    })
  }

  // Generate expert initials and title
  const expertInitials = `${["A", "J", "M", "T", "C"][hash % 5]}. ${["R", "S", "W", "B", "G"][hash % 5]}.`
  const expertTitles = [
    "Senior Network Engineer",
    "Lead Technician",
    "Fiber Deployment Specialist",
    "Customer Service Manager",
    "Community Liaison",
  ]
  const expertTitle = expertTitles[hash % expertTitles.length]

  // Return the complete local expertise object
  return {
    servingSince: startYear.toString(),
    localInsight: `Our team has been providing ${hasFiber ? "fiber" : "internet"} service to ${cityName} residents since ${startYear}. We've developed specialized installation techniques for the unique housing styles in this area, and our local technicians are familiar with every neighborhood's specific infrastructure.`,
    popularAreas,
    testimonials,
    zipCodes,
    challenges,
    solutions,
    expansionTimeframe: `${3 + (hash % 6)} months`,
    expertComparison: `Based on our extensive experience in ${cityName}, Frontier consistently outperforms other providers in reliability, especially during peak usage hours. While cable providers in the area struggle with congestion between 7-10pm, our dedicated fiber lines maintain consistent speeds regardless of how many neighbors are online.`,
    expertQuote: `${cityName} residents particularly value our symmetrical upload and download speeds, which are essential for the many professionals working from home in the ${popularAreas[0]} and ${popularAreas[1]} neighborhoods.`,
    expertName: `${["Alex", "Jamie", "Jordan", "Taylor", "Casey"][hash % 5]} ${["Rodriguez", "Smith", "Johnson", "Williams", "Brown"][hash % 5]}`,
    planRecommendation: `Based on internet usage patterns in ${cityName}, most households need at least 500 Mbps to support multiple streaming devices, work-from-home setups, and smart home technology. Families in the ${popularAreas[0]} neighborhood typically choose our Fiber 1 Gig plan for optimal performance.`,
    recommendedPlan: hasFiber ? "Fiber 1 Gig" : "Internet 500",
    neighborhoodAdoption: `${60 + (hash % 30)}%`,
    customerTestimonials,
    localEvents,
    installationPhotos,
    expertInitials,
    expertTitle,
  }
}
