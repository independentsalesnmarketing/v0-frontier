/**
 * Hand-written city data for major metro areas.
 * Gives Google genuinely unique content for our highest-traffic pages.
 */

export interface MajorCityInfo {
  tagline: string
  intro: string
  neighborhoodsServed: string[]
  population: number
  localCompetitors: [string, string]
  whyFiber: string
}

export const majorCityData: Record<string, MajorCityInfo> = {
  "Los Angeles__California": {
    tagline: "Fiber-fast internet for the entertainment capital",
    intro:
      "From Hollywood studios uploading dailies to Koreatown families streaming in three languages, LA demands bandwidth that cable cannot deliver. Frontier Fiber brings symmetrical multi-gig speeds to neighborhoods across the city, so your upload is just as fast as your download -- no matter how many devices are connected.",
    neighborhoodsServed: [
      "Hollywood",
      "Silver Lake",
      "Eagle Rock",
      "Koreatown",
      "Mar Vista",
      "Westchester",
      "Playa del Rey",
      "El Sereno",
      "Highland Park",
    ],
    population: 3900000,
    localCompetitors: ["Spectrum", "AT&T"],
    whyFiber:
      "LA's creative economy runs on uploads. Whether you're a YouTuber in Silver Lake or an architect in Pasadena, symmetrical fiber means your work reaches clients and audiences without the bottleneck of cable's lopsided speeds.",
  },
  "Dallas__Texas": {
    tagline: "Big speeds for Big D",
    intro:
      "Dallas is a city that moves fast -- and your internet should keep up. Frontier Fiber delivers dedicated fiber-optic lines to homes across Dallas, from the Arts District to Far North Dallas, giving families and remote workers the speed and reliability they need without data caps or contracts.",
    neighborhoodsServed: [
      "Uptown",
      "Deep Ellum",
      "Lake Highlands",
      "Oak Lawn",
      "Preston Hollow",
      "Far North Dallas",
      "Bishop Arts District",
      "Lakewood",
    ],
    population: 1340000,
    localCompetitors: ["AT&T", "Spectrum"],
    whyFiber:
      "With Dallas ranking among the top cities for remote work, a dedicated fiber line means your Zoom calls stay crisp and your VPN stays connected -- even when the rest of the household is streaming and gaming.",
  },
  "Tampa__Florida": {
    tagline: "Reliable fiber for Florida's Gulf Coast hub",
    intro:
      "Tampa Bay's growth has outpaced its legacy cable infrastructure. Frontier Fiber brings a dedicated line to your home -- not a shared neighborhood node -- so speeds stay consistent whether it's a quiet Tuesday morning or Super Bowl Sunday. No contracts, no data caps, and free professional installation.",
    neighborhoodsServed: [
      "South Tampa",
      "Seminole Heights",
      "Westchase",
      "New Tampa",
      "Channelside",
      "Hyde Park",
      "Carrollwood",
      "Town 'n' Country",
    ],
    population: 404636,
    localCompetitors: ["Spectrum", "Xfinity"],
    whyFiber:
      "Florida storms can knock out cable and DSL. Fiber-optic lines are immune to electromagnetic interference and far more resilient to weather, giving Tampa residents a more reliable connection year-round.",
  },
  "New York City__New York": {
    tagline: "Multi-gig fiber for the city that never sleeps",
    intro:
      "New York apartments and brownstones deserve more than decades-old coaxial. Frontier Fiber delivers symmetrical speeds up to 7 Gig over a dedicated line to your unit -- so your upload is as fast as your download, and your neighbors' Netflix binge doesn't slow your Zoom call.",
    neighborhoodsServed: [
      "Brooklyn Heights",
      "Astoria",
      "Park Slope",
      "Upper West Side",
      "Williamsburg",
      "Flushing",
      "Harlem",
      "Staten Island",
    ],
    population: 8300000,
    localCompetitors: ["Spectrum", "Verizon Fios"],
    whyFiber:
      "In a city where 40% of professionals work from home at least part-time, symmetrical fiber isn't a luxury -- it's infrastructure. No shared bandwidth means consistent speeds at 8 AM or 8 PM.",
  },
  "San Francisco__California": {
    tagline: "Fiber built for the Bay Area's tech culture",
    intro:
      "San Francisco pioneered the remote-work revolution, and now its residents need internet that can keep up. Frontier Fiber delivers dedicated, symmetrical speeds to homes from the Sunset to SoMa, ensuring uploads are as fast as downloads for the engineers, designers, and founders who call SF home.",
    neighborhoodsServed: [
      "Sunset District",
      "SoMa",
      "Mission District",
      "Noe Valley",
      "Richmond District",
      "Haight-Ashbury",
      "Marina District",
      "Potrero Hill",
    ],
    population: 874961,
    localCompetitors: ["Xfinity", "AT&T"],
    whyFiber:
      "With the average SF household running 20+ connected devices, shared cable bandwidth creates peak-hour slowdowns. Dedicated fiber eliminates that problem entirely.",
  },
  "Houston__Texas": {
    tagline: "Space City speeds for Texas-sized households",
    intro:
      "Houston sprawls, and so do its internet needs. From Montrose bungalows to Katy-area family homes, Frontier Fiber delivers a dedicated fiber line to your door with symmetrical speeds up to 7 Gig. No data caps means your smart home, home office, and streaming setup all run full speed, all the time.",
    neighborhoodsServed: [
      "Montrose",
      "The Heights",
      "River Oaks",
      "Midtown",
      "Memorial",
      "Sugar Land",
      "Pearland",
      "Clear Lake",
    ],
    population: 2300000,
    localCompetitors: ["AT&T", "Xfinity"],
    whyFiber:
      "Houston's notorious humidity and thunderstorms wreak havoc on copper-based internet. Fiber-optic cables are immune to electromagnetic interference and deliver consistent speeds regardless of the weather.",
  },
  "Phoenix__Arizona": {
    tagline: "Desert-proof fiber for the Valley of the Sun",
    intro:
      "Phoenix summers push air conditioning and internet to their limits. While cable networks slow down as temperatures rise and neighborhoods hit peak usage, Frontier Fiber uses light-based signals that are unaffected by heat. Dedicated lines mean your speed is your speed -- not shared with your block.",
    neighborhoodsServed: [
      "Arcadia",
      "Downtown Phoenix",
      "North Scottsdale",
      "Chandler",
      "Gilbert",
      "Tempe",
      "Mesa",
      "Ahwatukee",
    ],
    population: 1680000,
    localCompetitors: ["Cox", "CenturyLink"],
    whyFiber:
      "Arizona's explosive population growth means cable nodes are increasingly congested. A dedicated fiber line bypasses that shared infrastructure entirely, keeping speeds consistent as the Valley grows.",
  },
  "Orlando__Florida": {
    tagline: "Theme-park fun, fiber-fast internet at home",
    intro:
      "Orlando is more than theme parks -- it's a fast-growing tech and healthcare hub where working from home is the norm, not the exception. Frontier Fiber gives Orlando residents a dedicated internet line with symmetrical speeds, free installation, and zero data caps or contracts.",
    neighborhoodsServed: [
      "College Park",
      "Winter Park",
      "Dr. Phillips",
      "Lake Nona",
      "Baldwin Park",
      "Altamonte Springs",
      "Windermere",
      "Celebration",
    ],
    population: 320000,
    localCompetitors: ["Spectrum", "AT&T"],
    whyFiber:
      "Orlando's rapid development means many neighborhoods were built with cable infrastructure that's already at capacity. Frontier's new fiber network is built for the next 20 years of growth.",
  },
  "Charlotte__North Carolina": {
    tagline: "Banking-grade fiber for the Queen City",
    intro:
      "Charlotte is America's second-largest banking center and a booming tech corridor. Whether you're on a trading-floor video call from your SouthPark home office or streaming in NoDa, Frontier Fiber delivers the symmetrical, low-latency connection that Charlotte's professionals depend on.",
    neighborhoodsServed: [
      "SouthPark",
      "NoDa",
      "Dilworth",
      "South End",
      "Ballantyne",
      "Plaza Midwood",
      "Myers Park",
      "University City",
    ],
    population: 897720,
    localCompetitors: ["Spectrum", "AT&T"],
    whyFiber:
      "Charlotte's finance sector requires low-latency, high-reliability connections. Fiber's dedicated line architecture delivers exactly that, with none of the peak-hour congestion that plagues shared cable networks.",
  },
  "San Angelo__Texas": {
    tagline: "Fast fiber for the heart of West Texas",
    intro:
      "San Angelo is growing fast, and so are its internet needs. Whether you're working remotely from the Concho River district or streaming Friday-night football highlights, Frontier Fiber delivers symmetrical speeds that West Texas cable providers simply cannot match. No data caps, no throttling -- just reliable fiber to your door.",
    neighborhoodsServed: [
      "Downtown",
      "Lake Nasworthy",
      "Bentwood",
      "Southland",
      "Rio Vista",
      "College Hills",
      "Santa Rita",
      "Bluffs",
    ],
    population: 101612,
    localCompetitors: ["Suddenlink", "AT&T"],
    whyFiber:
      "West Texas summers push families indoors, and cable networks in San Angelo often buckle under shared-node congestion. Frontier's dedicated fiber line gives every household its own bandwidth -- no slowdowns at peak hours.",
  },
  "Fort Wayne__Indiana": {
    tagline: "Fiber-powered internet for Indiana's second city",
    intro:
      "Fort Wayne's thriving tech corridor and growing remote workforce demand more than legacy DSL or overloaded cable. Frontier Fiber connects neighborhoods across Allen County with true symmetrical speeds, making uploads just as fast as downloads -- ideal for video calls, cloud backups, and game streaming.",
    neighborhoodsServed: [
      "Downtown",
      "Aboite",
      "Southwest",
      "North Highlands",
      "Georgetown",
      "Waynedale",
      "New Haven",
      "Huntertown",
    ],
    population: 263886,
    localCompetitors: ["Xfinity", "Spectrum"],
    whyFiber:
      "Fort Wayne's cold winters mean heavy indoor media consumption. Fiber's dedicated architecture prevents the speed dips cable subscribers experience when everyone on the block is streaming at once.",
  },
  "Denton__Texas": {
    tagline: "College-town speeds without college-town lag",
    intro:
      "Home to UNT and TWU, Denton is packed with students, creators, and young professionals who depend on fast internet. Frontier Fiber gives Denton households and apartments symmetrical gig speeds with no data caps -- perfect for dorms gone remote, Twitch streams, and group study sessions.",
    neighborhoodsServed: [
      "Downtown Square",
      "Robson Ranch",
      "Rayzor Ranch",
      "Corinth",
      "Argyle",
      "Highland Village",
      "Lantana",
      "Lake Dallas",
    ],
    population: 148146,
    localCompetitors: ["Spectrum", "AT&T Fiber"],
    whyFiber:
      "Two major universities plus a booming creative scene mean Denton's cable infrastructure is stretched thin. Fiber gives every user a dedicated line, so your speed never drops during finals week or Friday-night gaming marathons.",
  },
  "New Haven__Connecticut": {
    tagline: "Ivy-league internet for the Elm City",
    intro:
      "New Haven is a city of research labs, startups, and world-class pizza shops that all need one thing: fast, reliable internet. Frontier Fiber delivers symmetrical multi-gig speeds across Greater New Haven, from Wooster Square to East Rock, with no data caps and no annual contracts required.",
    neighborhoodsServed: [
      "East Rock",
      "Wooster Square",
      "Westville",
      "Fair Haven",
      "Edgewood",
      "Prospect Hill",
      "Amity",
      "Hamden Border",
    ],
    population: 134023,
    localCompetitors: ["Xfinity", "Optimum"],
    whyFiber:
      "New Haven's dense housing and tech-forward population create peak-hour congestion on shared cable networks. A dedicated fiber connection eliminates that bottleneck entirely, keeping speeds consistent 24/7.",
  },
  "Norwalk__Connecticut": {
    tagline: "Commuter-fast fiber for coastal Connecticut",
    intro:
      "Norwalk's mix of NYC commuters, maritime businesses, and growing creative studios demand serious bandwidth. Frontier Fiber serves neighborhoods from SoNo to Cranbury with symmetrical speeds that make working from home feel faster than the office -- and keep the whole family streaming without a hitch.",
    neighborhoodsServed: [
      "SoNo (South Norwalk)",
      "Rowayton",
      "Cranbury",
      "Silvermine",
      "East Norwalk",
      "West Norwalk",
      "Broad River",
      "Wolfpit",
    ],
    population: 91184,
    localCompetitors: ["Xfinity", "Optimum"],
    whyFiber:
      "Coastal Connecticut's aging cable infrastructure struggles during nor'easters and summer storms. Fiber's glass-core technology is immune to electromagnetic interference and delivers reliable speeds year-round.",
  },
  "Minneapolis__Minnesota": {
    tagline: "Fiber that performs in every Minnesota season",
    intro:
      "Minneapolis winters mean months of indoor living -- and heavy internet use. Frontier Fiber delivers consistent speeds whether it's -20 outside or a perfect summer evening on Lake Calhoun. Dedicated fiber lines are impervious to temperature fluctuations and electromagnetic interference from ice storms.",
    neighborhoodsServed: [
      "Uptown",
      "Northeast",
      "Downtown",
      "Linden Hills",
      "Whittier",
      "Longfellow",
      "North Loop",
      "St. Louis Park",
    ],
    population: 429954,
    localCompetitors: ["Xfinity", "CenturyLink"],
    whyFiber:
      "Minnesota's long winters push internet usage to its peak. A dedicated fiber line means your speed stays constant even when every household on the block is streaming, gaming, and video-calling simultaneously.",
  },
}

export function getMajorCityData(cityName: string, stateName: string): MajorCityInfo | null {
  return majorCityData[`${cityName}__${stateName}`] || null
}
