export interface BlogPost {
  slug: string
  title: string
  description: string
  publishDate: string
  updateDate?: string
  readTime: number
  category: string
  author: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "fiber-vs-cable",
    title: "Fiber vs Cable Internet: A Comprehensive Comparison",
    description:
      "Compare fiber and cable internet technologies, speeds, reliability, and costs. Learn why fiber optic internet offers superior performance for modern homes.",
    publishDate: "2025-03-15",
    updateDate: "2025-03-20",
    readTime: 8,
    category: "Internet Technology",
    author: "Sarah Johnson",
    featured: true,
  },
  {
    slug: "what-is-fiber-internet",
    title: "What Is Fiber Internet? A Plain-English Explainer",
    description:
      "How fiber optic internet actually works, why it's faster than cable or DSL, and what you need to know before signing up for a fiber plan.",
    publishDate: "2025-04-02",
    readTime: 6,
    category: "Internet Technology",
    author: "Sarah Johnson",
  },
  {
    slug: "how-much-internet-speed-do-i-need",
    title: "How Much Internet Speed Do I Actually Need?",
    description:
      "A practical guide to choosing the right internet speed for your household based on how many people and devices are online simultaneously.",
    publishDate: "2025-04-18",
    readTime: 7,
    category: "Buying Guide",
    author: "Marcus Chen",
    featured: true,
  },
  {
    slug: "work-from-home-internet-guide",
    title: "The Remote Worker's Guide to Home Internet",
    description:
      "Why upload speed matters more than download for video calls, what speeds you need for VPN and cloud tools, and how to set up a reliable home office connection.",
    publishDate: "2025-05-05",
    readTime: 9,
    category: "Home Office",
    author: "Sarah Johnson",
  },
  {
    slug: "streaming-internet-requirements",
    title: "Internet Speeds for Streaming: Netflix, YouTube, and Beyond",
    description:
      "How much bandwidth 4K streaming really uses, why buffering happens, and how many simultaneous streams your internet plan can handle.",
    publishDate: "2025-05-22",
    readTime: 6,
    category: "Streaming",
    author: "Marcus Chen",
  },
  {
    slug: "gaming-internet-guide",
    title: "Online Gaming Internet Guide: Speed, Latency, and Lag Explained",
    description:
      "Why latency matters more than download speed for gaming, how to reduce ping, and what internet plan gamers should choose.",
    publishDate: "2025-06-10",
    readTime: 8,
    category: "Gaming",
    author: "Sarah Johnson",
  },
  {
    slug: "smart-home-internet-guide",
    title: "How Many Smart Devices Can Your Internet Handle?",
    description:
      "From Ring doorbells to smart thermostats, every device uses bandwidth. Here's how to make sure your internet can keep up with your smart home.",
    publishDate: "2025-06-28",
    readTime: 7,
    category: "Smart Home",
    author: "Marcus Chen",
  },
  {
    slug: "what-to-expect-internet-installation",
    title: "What to Expect During Fiber Internet Installation",
    description:
      "A step-by-step walkthrough of the Frontier Fiber installation process, from scheduling to setup, so you know exactly what happens on installation day.",
    publishDate: "2025-07-15",
    readTime: 5,
    category: "Getting Started",
    author: "Sarah Johnson",
  },
  {
    slug: "symmetrical-vs-asymmetrical-speeds",
    title: "Upload vs Download Speed: Why Symmetrical Internet Matters",
    description:
      "Most cable plans give you fast downloads but slow uploads. Learn why symmetrical fiber speeds are essential for video calls, cloud backups, and content creation.",
    publishDate: "2025-08-01",
    readTime: 6,
    category: "Internet Technology",
    author: "Marcus Chen",
    featured: true,
  },
  {
    slug: "wifi-dead-zones-fix",
    title: "How to Fix WiFi Dead Zones in Your Home",
    description:
      "Practical tips for eliminating weak spots in your home WiFi coverage, from router placement to mesh systems and ethernet backhaul.",
    publishDate: "2025-08-18",
    readTime: 7,
    category: "WiFi Tips",
    author: "Sarah Johnson",
  },
  {
    slug: "internet-speed-test-explained",
    title: "Internet Speed Tests: What Your Results Actually Mean",
    description:
      "How to run an accurate speed test, what download, upload, latency, and jitter numbers mean, and when your results indicate a problem.",
    publishDate: "2025-09-05",
    readTime: 6,
    category: "Internet Technology",
    author: "Marcus Chen",
  },
  {
    slug: "data-caps-explained",
    title: "What Are Data Caps and Why Do ISPs Have Them?",
    description:
      "How data caps work, how much data your household actually uses, and why Frontier Fiber doesn't cap your data.",
    publishDate: "2025-09-22",
    readTime: 5,
    category: "Buying Guide",
    author: "Sarah Johnson",
  },
  {
    slug: "switching-internet-providers",
    title: "How to Switch Internet Providers Without Losing Service",
    description:
      "A step-by-step guide to switching ISPs smoothly, including overlapping service dates, equipment returns, cancellation tips, and how to avoid early termination fees.",
    publishDate: "2025-10-10",
    readTime: 7,
    category: "Getting Started",
    author: "Marcus Chen",
  },
  {
    slug: "multi-gig-internet-worth-it",
    title: "Is Multi-Gig Internet Worth It? Who Actually Needs 2 Gig or 5 Gig Speeds",
    description:
      "Multi-gig internet plans are now available to homes. Here's who actually benefits from 2 Gig or 5 Gig speeds, and who's better off with a standard gig plan.",
    publishDate: "2025-10-28",
    readTime: 8,
    category: "Internet Technology",
    author: "Sarah Johnson",
    featured: true,
  },
  {
    slug: "fiber-internet-availability-guide",
    title: "Fiber Internet Availability: How to Check If Your Address Is Covered",
    description:
      "Learn how to check fiber internet availability at your address, understand why coverage varies by neighborhood, and what to do if fiber isn't available yet.",
    publishDate: "2025-11-12",
    readTime: 6,
    category: "Getting Started",
    author: "Marcus Chen",
  },
  {
    slug: "internet-tv-bundle-save-money",
    title: "Is Bundling Internet and TV Still Worth It in 2025?",
    description:
      "Traditional cable bundles used to be the only way to save. Here's how modern fiber internet plus streaming compares to legacy bundles on price and flexibility.",
    publishDate: "2025-11-30",
    readTime: 7,
    category: "Buying Guide",
    author: "Sarah Johnson",
  },
  {
    slug: "home-network-setup-guide",
    title: "Home Network Setup Guide: Router Placement, Ethernet, and Mesh WiFi",
    description:
      "Get the most out of your internet plan by setting up your home network properly. Covers optimal router placement, when to use Ethernet, and mesh WiFi systems.",
    publishDate: "2025-12-15",
    readTime: 9,
    category: "WiFi Tips",
    author: "Marcus Chen",
  },
  {
    slug: "home-internet-security-tips",
    title: "10 Home Internet Security Tips Every Family Should Follow",
    description:
      "Protect your home network from hackers and malware with these straightforward security practices. No tech degree required.",
    publishDate: "2026-01-08",
    readTime: 8,
    category: "Security",
    author: "Sarah Johnson",
  },
  {
    slug: "rural-internet-options",
    title: "Rural Internet Options in 2025: Fiber, Fixed Wireless, Satellite, and More",
    description:
      "If you live outside a major metro area, your internet options are different. Here's an honest comparison of every rural internet technology available today.",
    publishDate: "2026-01-25",
    readTime: 9,
    category: "Buying Guide",
    author: "Marcus Chen",
  },
  {
    slug: "best-internet-for-large-families",
    title: "Best Internet for Large Families: How to Keep Everyone Connected",
    description:
      "When 5+ people share one internet connection, bandwidth battles are real. Here's how to choose the right plan and set up your network for a busy household.",
    publishDate: "2026-02-05",
    readTime: 7,
    category: "Buying Guide",
    author: "Sarah Johnson",
  },
]
