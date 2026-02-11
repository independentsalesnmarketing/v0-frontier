import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier TV & Netflix | Ultimate Entertainment Bundle",
  description:
    "Combine Frontier Fiber with Netflix for the ultimate streaming experience. Enjoy thousands of shows and movies with crystal-clear picture quality and no buffering.",
  alternates: { canonical: "/tv-netflix" },
}

export default function TVNetflixLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
