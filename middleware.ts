import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /coverage/[state]/[city] -> /fiber-internet-in/[city]/[state] (301)
  const coverageMatch = pathname.match(/^\/coverage\/([^/]+)\/([^/]+)$/)
  if (coverageMatch) {
    const [, state, city] = coverageMatch
    return NextResponse.redirect(
      new URL(`/fiber-internet-in/${city}/${state}`, request.url),
      301
    )
  }

  // Redirect /fiber-internet-in-[city]-[state] -> /fiber-internet-in/[city]/[state] (301)
  if (pathname.startsWith("/fiber-internet-in-") && !pathname.startsWith("/fiber-internet-in/")) {
    const location = pathname.replace("/fiber-internet-in-", "")
    const parts = location.split("-")
    if (parts.length >= 2) {
      const state = parts.pop()
      const city = parts.join("-")
      if (city && state) {
        return NextResponse.redirect(
          new URL(`/fiber-internet-in/${city}/${state}`, request.url),
          301
        )
      }
    }
  }

  // Redirect /tv-and-bundles -> /bundles (301)
  if (pathname === "/tv-and-bundles") {
    return NextResponse.redirect(new URL("/bundles", request.url), 301)
  }

  // Redirect dead plan pages
  if (pathname === "/internet/pricing" || pathname === "/internet/fiber-200") {
    return NextResponse.redirect(new URL("/internet", request.url), 301)
  }

  // Redirect /support -> /internet (301) — not an official support channel
  if (pathname === "/support" || pathname === "/support/faq") {
    return NextResponse.redirect(new URL("/internet", request.url), 301)
  }

  // Redirect /locations/[location] -> /fiber-internet-in/[city]/[state] (301)
  const locationsMatch = pathname.match(/^\/locations\/([^/]+)$/)
  if (locationsMatch) {
    const location = locationsMatch[1]
    const parts = location.split("-")
    if (parts.length >= 2) {
      const state = parts.pop()
      const city = parts.join("-")
      if (city && state) {
        return NextResponse.redirect(
          new URL(`/fiber-internet-in/${city}/${state}`, request.url),
          301
        )
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/fiber-internet-in-:path*",
    "/coverage/:state/:city",
    "/locations/:path*",
    "/tv-and-bundles",
    "/support",
    "/support/faq",
    "/internet/pricing",
    "/internet/fiber-200",
  ],
}
