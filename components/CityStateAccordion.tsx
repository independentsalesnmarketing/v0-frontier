"use client"

import { useState } from "react"
import Link from "next/link"
import { frontierCoverage } from "@/lib/coverage-data"

export function CityStateAccordion() {
  const [expandedState, setExpandedState] = useState<string | null>(null)

  const toggleState = (state: string) => {
    if (expandedState === state) {
      setExpandedState(null)
    } else {
      setExpandedState(state)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-2">
        {Object.entries(frontierCoverage).map(([state, cities]) => (
          <div key={state} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleState(state)}
              aria-expanded={expandedState === state}
            >
              <span className="font-medium text-gray-900">{state}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  expandedState === state ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedState === state && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {cities.map((city) => (
                    <div key={city}>
                      <Link
                        href={`/coverage/${state.toLowerCase().replace(/\s+/g, "-")}/${city.toLowerCase().replace(/\s+/g, "-")}?template=2`}
                        className="text-blue-600 hover:underline"
                      >
                        {city}
                      </Link>
                      <span className="mx-1 text-gray-400">|</span>
                      <Link
                        href={`/fiber-internet-in/${city.toLowerCase().replace(/\s+/g, "-")}/${state.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-green-600 hover:underline text-sm"
                      >
                        Fiber
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
