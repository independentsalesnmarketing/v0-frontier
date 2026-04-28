/** Canonical author profiles used across blog posts for E-E-A-T signals */
export interface Author {
  name: string
  role: string
  bio: string
  /** Schema.org Person URL — points to the about page anchor */
  url: string
  /** External profile URLs for sameAs knowledge graph anchoring */
  sameAs?: string[]
  credentials: string[]
}

export const AUTHORS: Record<string, Author> = {
  "Sarah Johnson": {
    name: "Sarah Johnson",
    role: "Senior Technology Writer",
    bio: "Sarah has 15+ years in telecommunications and consumer technology. She writes in-depth guides on fiber internet, home networking, and broadband policy.",
    url: "https://frontler-internet.com/about#sarah-johnson",
    sameAs: ["https://www.linkedin.com/in/sarah-johnson-mv/"],
    credentials: ["Certified Network Professional", "M.S. Telecommunications", "Technical Writing Fellow"],
  },
  "Marcus Chen": {
    name: "Marcus Chen",
    role: "Internet Technology Analyst",
    bio: "Marcus specializes in broadband technology, ISP comparisons, and speed optimization. Former ISP network engineer.",
    url: "https://frontler-internet.com/about#marcus-chen",
    sameAs: ["https://www.linkedin.com/in/marcus-chan-/"],
    credentials: ["CompTIA Network+", "B.S. Computer Science", "Former ISP Network Engineer"],
  },
}
