"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, MapPin } from "lucide-react"
import { frontierCoverage } from "@/lib/coverage-data"

export default function CityStateAccordion() {
  const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>({})

  const toggleState = (stateId: string) => {
    setExpandedStates((prev) => ({
      ...prev,
      [stateId]: !prev[stateId],
    }))
  }

  return (
    <div className="space-y-2">
      {Object.entries(frontierCoverage)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([stateName, cities], stateIndex) => {
          const stateId = `state-${stateIndex}`
          const panelId = `panel-${stateIndex}`
          const isExpanded = !!expandedStates[stateId]

          return (
            <div key={stateId} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleState(stateId)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                data-state-header
                data-state-id={stateId}
              >
                <h3 className="text-lg font-medium text-[#0A1E3C] flex items-center">
                  <MapPin className="h-5 w-5 text-[#e10600] mr-2" />
                  {stateName}
                  <span className="ml-2 text-sm text-gray-500">({cities.length} cities)</span>
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-[#e10600] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              <div
                id={panelId}
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  maxHeight: isExpanded ? "1000px" : "0",
                  padding: isExpanded ? "16px" : "0",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {cities.sort().map((cityName, cityIndex) => {
                    // Format the URL path: fiber-internet-in/city-name/state-name
                    const citySlug = cityName.toLowerCase().replace(/\s+/g, "-")
                    const stateSlug = stateName.toLowerCase().replace(/\s+/g, "-")
                    const urlPath = `/fiber-internet-in/${citySlug}/${stateSlug}`

                    return (
                      <div
                        key={`${stateId}-city-${cityIndex}`}
                        data-city-name={cityName.toLowerCase()}
                        data-state-id={stateId}
                        className="text-[#0A1E3C] hover:text-[#e10600]"
                      >
                        <Link href={urlPath} className="flex items-center py-1 px-2 rounded hover:bg-gray-50 group">
                          <span className="text-sm group-hover:underline">{cityName}</span>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
