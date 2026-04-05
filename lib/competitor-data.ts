export interface CompetitorData {
  slug: string
  name: string
  shortName: string
  maxDownload: string
  maxUpload: string
  dataCaps: string
  contract: string
  installation: string
  equipment: string
  startingPrice: string
  reliability: string
  technology: string
  whyFrontierWins: string[]
  competitorWeakness: string
}

export const competitors: Record<string, CompetitorData> = {
  "frontier-vs-xfinity": {
    slug: "frontier-vs-xfinity",
    name: "Xfinity (Comcast)",
    shortName: "Xfinity",
    maxDownload: "Up to 2 Gbps",
    maxUpload: "Up to 200 Mbps",
    dataCaps: "1.2 TB/month",
    contract: "1-year typical",
    installation: "$100",
    equipment: "$14/mo rental",
    startingPrice: "$35/mo",
    reliability: "~98.5% uptime",
    technology: "Cable (HFC)",
    whyFrontierWins: [
      "Symmetrical upload and download speeds — Xfinity upload maxes at 200 Mbps",
      "No data caps ever — Xfinity has a 1.2 TB cap with $10/50 GB overage fees",
      "No contracts — Xfinity often locks you into 1-2 year agreements",
      "Free installation — Xfinity charges up to $100",
      "Free eero router — Xfinity charges $14/mo for equipment rental",
    ],
    competitorWeakness: "Xfinity's cable technology shares bandwidth with your neighbors, causing slowdowns during peak evening hours. Their upload speeds are a fraction of download speeds, which hurts video calls and cloud backups.",
  },
  "frontier-vs-att": {
    slug: "frontier-vs-att",
    name: "AT&T Fiber",
    shortName: "AT&T",
    maxDownload: "Up to 7 Gbps",
    maxUpload: "Up to 7 Gbps",
    dataCaps: "None (fiber plans)",
    contract: "None",
    installation: "Free",
    equipment: "$10/mo gateway",
    startingPrice: "$55/mo",
    reliability: "~99.5% uptime",
    technology: "Fiber (GPON/XGS-PON)",
    whyFrontierWins: [
      "Lower starting price — Frontier starts at $34.99/mo vs AT&T at $55/mo",
      "Free equipment — AT&T charges a $10/mo gateway fee",
      "Visa reward cards up to $200 — AT&T offers lower reward amounts",
      "Broader plan selection — 6 tiers from 200 Mbps to 7 Gig",
      "Better Wi-Fi hardware — Free eero router vs AT&T's proprietary gateway",
    ],
    competitorWeakness: "AT&T Fiber is a solid product, but their pricing starts significantly higher at $55/mo and they charge a mandatory $10/mo equipment fee. Frontier delivers comparable fiber performance at a lower total cost.",
  },
  "frontier-vs-spectrum": {
    slug: "frontier-vs-spectrum",
    name: "Spectrum (Charter)",
    shortName: "Spectrum",
    maxDownload: "Up to 1 Gbps",
    maxUpload: "Up to 35 Mbps",
    dataCaps: "None",
    contract: "None",
    installation: "$59.99",
    equipment: "$5/mo router",
    startingPrice: "$49.99/mo",
    reliability: "~98% uptime",
    technology: "Cable (DOCSIS 3.1)",
    whyFrontierWins: [
      "Symmetrical speeds — Spectrum upload maxes at 35 Mbps, Frontier matches download",
      "Higher max speeds — 5 Gig vs Spectrum's 1 Gbps ceiling",
      "Lower introductory price — $34.99/mo vs $49.99/mo",
      "Free installation — Spectrum charges $59.99",
      "Superior WiFi hardware — Free eero vs Spectrum's basic router",
    ],
    competitorWeakness: "Spectrum relies on cable technology that maxes out at 1 Gbps download and only 35 Mbps upload. In an era of video conferencing and cloud computing, those upload speeds are a serious limitation.",
  },
  "frontier-vs-verizon-fios": {
    slug: "frontier-vs-verizon-fios",
    name: "Verizon Fios",
    shortName: "Verizon Fios",
    maxDownload: "Up to 2.3 Gbps",
    maxUpload: "Up to 2.3 Gbps",
    dataCaps: "None",
    contract: "None",
    installation: "Free",
    equipment: "$15/mo router",
    startingPrice: "$49.99/mo",
    reliability: "~99.5% uptime",
    technology: "Fiber (GPON)",
    whyFrontierWins: [
      "Lower starting price — $34.99/mo vs Fios at $49.99/mo",
      "Higher max speed — 5 Gig vs Fios 2.3 Gig",
      "Free router included — Fios charges $15/mo for their router",
      "Visa reward cards — Frontier offers up to $200 for new customers",
      "Broader geographic reach — Frontier covers 19+ states vs Fios in ~9",
    ],
    competitorWeakness: "Verizon Fios offers good fiber service, but at a higher price point. Their equipment fee alone adds $180/year, and their max speed is 2.3 Gbps compared to Frontier's 5 Gbps.",
  },
  "frontier-vs-tmobile-home-internet": {
    slug: "frontier-vs-tmobile-home-internet",
    name: "T-Mobile 5G Home Internet",
    shortName: "T-Mobile",
    maxDownload: "33-245 Mbps (typical)",
    maxUpload: "6-23 Mbps (typical)",
    dataCaps: "Deprioritized after congestion",
    contract: "None",
    installation: "Self-install",
    equipment: "Included",
    startingPrice: "$50/mo",
    reliability: "~95% uptime",
    technology: "5G Fixed Wireless",
    whyFrontierWins: [
      "Consistent speeds — T-Mobile 5G speeds fluctuate wildly based on tower congestion",
      "Much higher speeds — 5 Gig vs T-Mobile's typical 33-245 Mbps",
      "Lower latency — Fiber delivers 10-20ms vs 5G's 30-60ms",
      "Symmetrical uploads — T-Mobile's upload speeds are abysmal at 6-23 Mbps",
      "True unlimited data — T-Mobile deprioritizes during congestion",
    ],
    competitorWeakness: "T-Mobile 5G Home Internet uses wireless tower connections that can't match fiber's consistency or speed. Speeds vary dramatically by location, time of day, and tower load. It's a decent stopgap, but not a replacement for fiber.",
  },
  "frontier-vs-google-fiber": {
    slug: "frontier-vs-google-fiber",
    name: "Google Fiber",
    shortName: "Google Fiber",
    maxDownload: "Up to 8 Gbps",
    maxUpload: "Up to 8 Gbps",
    dataCaps: "None",
    contract: "None",
    installation: "Free",
    equipment: "Included",
    startingPrice: "$70/mo",
    reliability: "~99.5% uptime",
    technology: "Fiber (XGS-PON)",
    whyFrontierWins: [
      "Lower starting price — $34.99/mo vs Google Fiber at $70/mo",
      "More plan options — 6 tiers vs Google's 2-3 options",
      "Much broader availability — 19+ states vs Google's ~10 metro areas",
      "Free eero router — premium mesh WiFi hardware included",
      "Visa reward cards up to $200 for new customers",
    ],
    competitorWeakness: "Google Fiber is excellent but extremely limited in availability and expensive. Their cheapest plan starts at $70/mo and they only serve a handful of metro areas. Frontier delivers fiber in 19+ states starting at half the price.",
  },
  "frontier-vs-cox": {
    slug: "frontier-vs-cox",
    name: "Cox Communications",
    shortName: "Cox",
    maxDownload: "Up to 2 Gbps",
    maxUpload: "Up to 100 Mbps",
    dataCaps: "1.25 TB/month",
    contract: "1-2 year typical",
    installation: "$100",
    equipment: "$13/mo rental",
    startingPrice: "$49.99/mo",
    reliability: "~98% uptime",
    technology: "Cable (DOCSIS 3.1)",
    whyFrontierWins: [
      "Symmetrical speeds — Cox upload maxes at 100 Mbps, Frontier matches download",
      "No data caps — Cox has 1.25 TB cap with $10/50 GB overage fees",
      "No contracts — Cox typically requires 1-2 year agreements",
      "Lower starting price — $34.99/mo vs $49.99/mo",
      "Free equipment — Cox charges $13/mo for router rental",
    ],
    competitorWeakness: "Cox relies on aging cable infrastructure with data caps, contracts, and severely limited upload speeds. Their 1.25 TB data cap can cost heavy users an extra $40-50/month in overage charges.",
  },
}

export function getCompetitorBySlug(slug: string): CompetitorData | undefined {
  return competitors[slug]
}

export function getAllCompetitorSlugs(): string[] {
  return Object.keys(competitors)
}
