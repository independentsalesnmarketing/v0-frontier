/**
 * Resolves the user's approximate location via free IP geo APIs — no API key,
 * no browser permission prompt. Tries three providers in order, each with a
 * 3.5-second AbortController timeout before falling through to the next.
 * Returns "City, State" (or just whichever piece is available), or "" on failure.
 */
export async function resolveIpGeoLocation(): Promise<string> {
  type GeoFetcher = () => Promise<string>

  const fetchers: GeoFetcher[] = [
    async () => {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 3500)
      try {
        const res = await fetch("https://ipwho.is/?fields=success,city,region", {
          signal: ctrl.signal,
        })
        const json = await res.json()
        if (json.success && (json.city || json.region)) {
          return [json.city, json.region].filter(Boolean).join(", ")
        }
        return ""
      } finally {
        clearTimeout(timer)
      }
    },
    async () => {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 3500)
      try {
        const res = await fetch("https://ipapi.co/json/", { signal: ctrl.signal })
        const json = await res.json()
        if (json.city || json.region) {
          return [json.city, json.region].filter(Boolean).join(", ")
        }
        return ""
      } finally {
        clearTimeout(timer)
      }
    },
    async () => {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 3500)
      try {
        const res = await fetch("https://get.geojs.io/v1/ip/geo.json", {
          signal: ctrl.signal,
        })
        const json = await res.json()
        if (json.city || json.region) {
          return [json.city, json.region].filter(Boolean).join(", ")
        }
        return ""
      } finally {
        clearTimeout(timer)
      }
    },
  ]

  for (const fetcher of fetchers) {
    try {
      const result = await fetcher()
      if (result) return result
    } catch {
      // fall through to next provider
    }
  }
  return ""
}
