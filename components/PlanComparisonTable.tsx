"use client"
import { Check, Minus } from "lucide-react"

type PlanFeature = {
  name: string
  fiber200?: boolean | string
  fiber500: boolean | string
  fiber1Gig: boolean | string
  fiber2Gig: boolean | string
  fiber5Gig: boolean | string
  fiber7Gig?: boolean | string
  fiber8Gig?: boolean | string
}

type PlanComparisonTableProps = {
  className?: string
}

export function PlanComparisonTable({ className }: PlanComparisonTableProps) {
  const features: PlanFeature[] = [
    {
      name: "Download Speed",
      fiber200: "200 Mbps",
      fiber500: "500 Mbps",
      fiber1Gig: "1 Gbps",
      fiber2Gig: "2 Gbps",
      fiber5Gig: "5 Gbps",
      fiber7Gig: "7 Gbps",
    },
    {
      name: "Upload Speed",
      fiber200: "200 Mbps",
      fiber500: "500 Mbps",
      fiber1Gig: "1 Gbps",
      fiber2Gig: "2 Gbps",
      fiber5Gig: "5 Gbps",
      fiber7Gig: "7 Gbps",
    },
    {
      name: "Unlimited Data",
      fiber200: true,
      fiber500: true,
      fiber1Gig: true,
      fiber2Gig: true,
      fiber5Gig: true,
      fiber7Gig: true,
    },
    {
      name: "Wi-Fi Router",
      fiber200: "eero Pro 6E",
      fiber500: "eero Pro 7",
      fiber1Gig: "eero Pro 7",
      fiber2Gig: "eero Pro 7",
      fiber5Gig: "eero Max 7",
      fiber7Gig: "2x eero Max 7",
    },
    {
      name: "Wi-Fi Technology",
      fiber200: "Wi-Fi 6E",
      fiber500: "Wi-Fi 6E",
      fiber1Gig: "Wi-Fi 6E",
      fiber2Gig: "Wi-Fi 6E",
      fiber5Gig: "Wi-Fi 7",
      fiber7Gig: "Wi-Fi 7 Mesh",
    },
    {
      name: "Ideal For",
      fiber200: "Light streaming",
      fiber500: "Multiple users",
      fiber1Gig: "Smart homes",
      fiber2Gig: "Large homes",
      fiber5Gig: "Power users",
      fiber7Gig: "Ultimate performance",
    },
    {
      name: "Reward Card",
      fiber200: false,
      fiber500: false,
      fiber1Gig: false,
      fiber2Gig: false,
      fiber5Gig: "$200",
      fiber7Gig: false,
    },
  ]

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#0a192f]">
            <th className="px-4 py-3 text-left text-white">Features</th>
            <th className="px-4 py-3 text-center text-white">Fiber 200</th>
            <th className="px-4 py-3 text-center text-white">Fiber 500</th>
            <th className="px-4 py-3 text-center text-white bg-[#ff003c]">Fiber 1 Gig</th>
            <th className="px-4 py-3 text-center text-white">Fiber 2 Gig</th>
            <th className="px-4 py-3 text-center text-white">Fiber 5 Gig</th>
            <th className="px-4 py-3 text-center text-white">Fiber 7 Gig</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-[#1d3461]" : "bg-[#0a192f]"}>
              <td className="px-4 py-3 font-medium text-white">{feature.name}</td>
              <td className="px-4 py-3 text-center text-white/90">
                {typeof feature.fiber200 === "boolean" ? (
                  feature.fiber200 ? (
                    <Check className="h-5 w-5 text-[#7eecde] mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                  )
                ) : (
                  <span>{feature.fiber200}</span>
                )}
              </td>
              <td className="px-4 py-3 text-center text-white/90">
                {typeof feature.fiber500 === "boolean" ? (
                  feature.fiber500 ? (
                    <Check className="h-5 w-5 text-[#7eecde] mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                  )
                ) : (
                  <span>{feature.fiber500}</span>
                )}
              </td>
              <td className="px-4 py-3 text-center text-white/90 bg-[#ff003c]/20">
                {typeof feature.fiber1Gig === "boolean" ? (
                  feature.fiber1Gig ? (
                    <Check className="h-5 w-5 text-[#7eecde] mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                  )
                ) : (
                  <span className="font-medium">{feature.fiber1Gig}</span>
                )}
              </td>
              <td className="px-4 py-3 text-center text-white/90">
                {typeof feature.fiber2Gig === "boolean" ? (
                  feature.fiber2Gig ? (
                    <Check className="h-5 w-5 text-[#7eecde] mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                  )
                ) : (
                  <span>{feature.fiber2Gig}</span>
                )}
              </td>
              <td className="px-4 py-3 text-center text-white/90">
                {typeof feature.fiber5Gig === "boolean" ? (
                  feature.fiber5Gig ? (
                    <Check className="h-5 w-5 text-[#7eecde] mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                  )
                ) : (
                  <span>{feature.fiber5Gig}</span>
                )}
              </td>
              <td className="px-4 py-3 text-center text-white/90">
                {typeof feature.fiber7Gig === "boolean" ? (
                  feature.fiber7Gig ? (
                    <Check className="h-5 w-5 text-[#7eecde] mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                  )
                ) : (
                  <span>{feature.fiber7Gig}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
