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
  ],
}
