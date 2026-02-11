"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MapPin, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AvailabilityToolbar() {
  const router = useRouter()
  const [zipCode, setZipCode] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!zipCode) return

    setIsChecking(true)

    // Simulate API call to check availability
    setTimeout(() => {
      setIsChecking(false)
      setIsAvailable(true) // For demo purposes, always return true
      setShowPopup(true) // Show the popup after checking
    }, 1500)
  }

  const handleViewPlans = () => {
    setShowPopup(false)
    router.push("/internet")
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="bg-[#0A1E3C] py-2 fixed top-[55px] md:top-[59px] left-0 right-0 w-full z-40 shadow-[0_1px_0_0_#0A1E3C,0_-1px_0_0_#0A1E3C]">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSubmit} className="flex items-center justify-center md:justify-between">
          <div className="flex items-center text-white mr-4">
            <MapPin className="h-5 w-5 text-[#64ffda] mr-2" />
            <span className="text-sm font-medium hidden sm:inline">Check Availability:</span>
          </div>

          <div className="flex flex-1 max-w-xs md:max-w-md">
            <Input
              type="text"
              placeholder="Enter ZIP Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="pl-4 pr-4 py-2 bg-white text-[#0A1E3C] border-0 placeholder:text-gray-500 focus:ring-2 focus:ring-[#64ffda] rounded-l-md text-base w-full"
              maxLength={5}
              pattern="[0-9]{5}"
              title="Please enter a valid 5-digit ZIP code"
            />
            <Button
              type="submit"
              disabled={isChecking || !zipCode || zipCode.length !== 5}
              className="bg-[#64ffda] hover:bg-[#4fd1b9] text-[#0A1E3C] font-bold rounded-r-md"
            >
              {isChecking ? "Checking..." : "Check"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="hidden md:block ml-4">
            <a href="#coverage-areas" className="text-sm text-[#64ffda] font-medium hover:underline flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              View all cities
            </a>
          </div>
        </form>

        {isAvailable !== null && !showPopup && (
          <div className={`mt-2 text-sm text-center ${isAvailable ? "text-[#64ffda]" : "text-red-400"}`}>
            {isAvailable
              ? "Great news! Frontier Fiber is available at your ZIP code."
              : "Sorry, Frontier Fiber isn't available in this area yet."}
          </div>
        )}
      </div>

      {/* Availability Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
            <CheckCircle className="h-16 w-16 text-[#64ffda] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#0A1E3C] mb-2">Great News!</h3>
            <p className="text-gray-700 mb-6">
              Frontier Fiber is available in your area! View our plans to get started with lightning-fast internet
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleViewPlans} className="bg-[#e10600] hover:bg-[#c10500] text-white font-medium">
                View Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={closePopup} className="border-gray-300 text-gray-700 bg-transparent">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
