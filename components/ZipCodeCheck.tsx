"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2, Wifi, Zap, X } from "lucide-react"
import Link from "next/link"

export function ZipCodeCheck() {
  const [zipCode, setZipCode] = useState("")
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAvailable(true)
    setShowModal(true)
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = "" }
    }
  }, [showModal])

  return (
    <>
      <div className="mt-8 w-full">
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
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" />

          {/* Modal */}
          <div
            className="relative bg-gradient-to-br from-[#0A1E3C] via-[#0f2d5e] to-[#0A1E3C] rounded-2xl p-8 md:p-10 max-w-lg w-full shadow-2xl border border-white/10 animate-in zoom-in-95 slide-in-from-bottom-4 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Animated checkmark */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#64ffda]/20 flex items-center justify-center animate-in zoom-in duration-500 delay-200">
                  <CheckCircle2 className="w-12 h-12 text-[#64ffda] animate-in zoom-in duration-300 delay-500" />
                </div>
                {/* Pulse ring */}
                <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-[#64ffda]/40 animate-ping" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
                Great News!
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Wifi className="w-5 h-5 text-[#64ffda]" />
                <p className="text-[#64ffda] font-semibold text-lg">
                  Frontier Fiber is available in your area!
                </p>
              </div>
              <p className="text-white/70 text-base mb-8 animate-in fade-in duration-500 delay-500">
                View our plans to get started with lightning-fast internet today.
              </p>

              {/* Plan highlights */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Zap, label: "Up to 7 Gig" },
                  { icon: Wifi, label: "Free Router" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/5 rounded-lg p-3 border border-white/10">
                    <Icon className="w-4 h-4 text-[#64ffda]" />
                    <span className="text-white/90 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="w-full bg-[#da202c] hover:bg-[#b71c1c] text-white text-lg py-6 rounded-xl font-bold shadow-lg shadow-red-900/30 transition-all hover:scale-[1.02]"
              >
                <Link href="/internet">
                  View Plans & Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
