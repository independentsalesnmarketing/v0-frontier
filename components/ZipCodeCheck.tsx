"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ZipCodeCheck() {
  const [zipCode, setZipCode] = useState("")
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would check the availability with an API
    // For this example, we'll simulate a check and always return true
    setIsAvailable(true)
  }

  return (
    <div className="mt-8 w-full">
      {isAvailable === null ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <Input
            type="text"
            placeholder="Enter your ZIP code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="bg-white text-gray-800 text-lg py-6 px-4 rounded-lg flex-grow"
            maxLength={5}
            pattern="[0-9]{5}"
            title="Please enter a valid 5-digit ZIP code"
            aria-label="Enter your ZIP code to check service availability"
          />
          <Button
            type="submit"
            size="lg"
            className="bg-[#64ffda] hover:bg-[#4fd1b9] text-[#0A1E3C] text-lg py-6 px-8 rounded-lg whitespace-nowrap font-bold"
          >
            Check Availability
            <ArrowRight className="ml-2" />
          </Button>
        </form>
      ) : (
        <div className="text-center max-w-xl">
          <p className="text-xl mb-4 text-[#64ffda]">Great news! Service is available in your area.</p>
          <Button asChild size="lg" className="bg-[#e10600] hover:bg-[#c10500] text-white text-lg py-6 px-8 rounded-lg">
            <Link href="/internet">View Plans</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
