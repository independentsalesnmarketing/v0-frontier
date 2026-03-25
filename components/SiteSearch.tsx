"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search, X, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

interface SearchItem {
  title: string
  description: string
  href: string
  tag: string
}

// Static service page entries included in the search index
const servicePages: SearchItem[] = [
  { title: "Fiber 500 – Internet Plans", description: "500/500 Mbps symmetrical fiber, no contracts, unlimited data.", href: "/internet", tag: "Plans" },
  { title: "Fiber 1 Gig – Internet Plans", description: "1,000/1,000 Mbps fiber internet for busy households.", href: "/internet", tag: "Plans" },
  { title: "Fiber 2 Gig – Internet Plans", description: "2 Gig symmetrical fiber — power dozens of devices at once.", href: "/internet", tag: "Plans" },
  { title: "Fiber 5 Gig – Internet Plans", description: "5 Gig fiber internet — the fastest residential plan available.", href: "/internet", tag: "Plans" },
  { title: "Internet + TV Bundles", description: "Bundle Frontier Fiber with TV services and save every month.", href: "/bundles", tag: "Bundles" },
  { title: "Business Fiber Internet", description: "Dedicated fiber for small and mid-size businesses.", href: "/business", tag: "Business" },
  { title: "Check Availability", description: "See if Frontier Fiber is available at your address.", href: "/check-availability", tag: "Coverage" },
  { title: "Coverage Map", description: "Browse Frontier Fiber coverage by state and city.", href: "/coverage", tag: "Coverage" },
  { title: "Internet Speed Test", description: "Test your current internet speeds instantly.", href: "/internet-speed-test", tag: "Tools" },
  { title: "Current Deals & Promotions", description: "Limited-time Frontier Fiber deals and Visa reward card offers.", href: "/deals", tag: "Deals" },
  { title: "Customer Reviews", description: "Real Frontier customer reviews — rated 4.8 / 5.", href: "/reviews", tag: "Reviews" },
  { title: "WiFi Solutions", description: "Whole-home WiFi coverage with free eero routers.", href: "/wifi", tag: "WiFi" },
  { title: "Home Phone Service", description: "Combine fiber internet with reliable home phone.", href: "/home-phone", tag: "Phone" },
  { title: "Existing Customer Support", description: "Manage your plan, upgrade speeds, or get support.", href: "/existing-customers", tag: "Support" },
  { title: "New Customer Offers", description: "Exclusive deals for new Frontier Fiber customers.", href: "/new-customer", tag: "Deals" },
  { title: "Verizon to Frontier", description: "Former Verizon Fios customer? Learn what changed.", href: "/verizon-to-frontier", tag: "Info" },
]

// Merge blog posts into the search index
const searchIndex: SearchItem[] = [
  ...servicePages,
  ...blogPosts.map((post) => ({
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    tag: post.category,
  })),
]

function scoreMatch(item: SearchItem, query: string): number {
  const q = query.toLowerCase()
  const title = item.title.toLowerCase()
  const desc = item.description.toLowerCase()
  const tag = item.tag.toLowerCase()
  if (title === q) return 100
  if (title.startsWith(q)) return 80
  if (title.includes(q)) return 60
  if (desc.includes(q)) return 40
  if (tag.includes(q)) return 20
  // Multi-word: all words present in title
  const words = q.split(/\s+/).filter(Boolean)
  if (words.length > 1 && words.every((w) => title.includes(w))) return 50
  if (words.length > 1 && words.every((w) => title.includes(w) || desc.includes(w))) return 30
  return 0
}

export default function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const trackSearchQuery = useCallback((rawQuery: string, selectedHref?: string) => {
    const queryValue = rawQuery.trim()
    if (queryValue.length < 2) return
    void fetch("/api/search-queries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: queryValue, selectedHref }),
      keepalive: true,
    }).catch(() => {
      // Non-blocking telemetry; intentionally ignore failures.
    })
  }, [])

  const results = query.trim().length >= 2
    ? searchIndex
        .map((item) => ({ item, score: scoreMatch(item, query.trim()) }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 7)
        .map(({ item }) => item)
    : []

  const openSearch = () => {
    setOpen(true)
    setQuery("")
    setActiveIndex(-1)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const closeSearch = useCallback(() => {
    setOpen(false)
    setQuery("")
    setActiveIndex(-1)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeSearch()
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open, closeSearch])

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") { closeSearch(); return }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, -1))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (activeIndex >= 0 && results[activeIndex]) {
        trackSearchQuery(query, results[activeIndex].href)
        router.push(results[activeIndex].href)
        closeSearch()
      } else if (results[0]) {
        trackSearchQuery(query, results[0].href)
        router.push(results[0].href)
        closeSearch()
      }
    }
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={openSearch}
        aria-label="Search plans, guides, and coverage areas"
        className="flex items-center justify-center w-9 h-9 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
      >
        <Search className="w-4 h-4" />
      </button>

      {/* Dropdown overlay */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-[360px] sm:w-[440px] bg-[#0A1E3C] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-50"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          {/* Input row */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
            <Search className="w-4 h-4 text-white/40 shrink-0" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActiveIndex(-1) }}
              onKeyDown={onKeyDown}
              placeholder="Search plans, guides, cities…"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="flex-1 bg-transparent text-white placeholder-white/30 text-sm outline-none"
              aria-label="Search site"
              aria-autocomplete="list"
              aria-controls="site-search-results"
              aria-activedescendant={activeIndex >= 0 ? `search-result-${activeIndex}` : undefined}
            />
            <button onClick={closeSearch} aria-label="Close search" className="text-white/30 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results list */}
          {results.length > 0 && (
            <ul id="site-search-results" role="listbox" className="divide-y divide-white/5 max-h-[400px] overflow-y-auto">
              {results.map((item, i) => (
                <li
                  key={item.href + item.title}
                  id={`search-result-${i}`}
                  role="option"
                  aria-selected={i === activeIndex}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      trackSearchQuery(query, item.href)
                      closeSearch()
                    }}
                    className={`flex items-start gap-3 px-4 py-3 transition-colors group ${
                      i === activeIndex ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate leading-snug">{item.title}</p>
                      <p className="text-white/40 text-xs mt-0.5 line-clamp-1 leading-snug">{item.description}</p>
                    </div>
                    <span className="shrink-0 inline-block text-[10px] font-bold uppercase tracking-wider text-[#00B7C3] border border-[#00B7C3]/30 rounded-full px-2 py-0.5 mt-0.5">
                      {item.tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="px-4 py-6 text-center text-white/40 text-sm">
              No results for <span className="text-white/70">&ldquo;{query}&rdquo;</span>
            </div>
          )}

          {query.trim().length < 2 && (
            <div className="px-4 py-4">
              <p className="text-white/30 text-xs mb-3 uppercase tracking-wider font-semibold">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Internet Plans", href: "/internet" },
                  { label: "Check Availability", href: "/check-availability" },
                  { label: "Current Deals", href: "/deals" },
                  { label: "Speed Test", href: "/internet-speed-test" },
                  { label: "Reviews", href: "/reviews" },
                  { label: "Blog", href: "/blog" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeSearch}
                    className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 transition-colors"
                  >
                    {label}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
