"use client"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[700px] overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-family-internet.jpg"
          alt="Family enjoying Frontier Fiber internet at home"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "60% center" }}
          priority
          quality={85}
        />
        {/* Gradient overlay - darker on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3C]/95 via-[#0A1E3C]/75 to-[#0A1E3C]/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-20 md:pt-24 pb-12 md:pb-20">
          <div className="max-w-2xl">
            {/* Eye-catching promo badge */}
            <div className="inline-block bg-[#0066cc] text-white px-4 py-2 rounded-full text-sm font-bold mb-4 md:mb-6">
              SAVE UP TO 50% - OFFER ENDS SOON
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6 text-white tracking-tight">
              LIGHTNING-FAST <span className="text-[#64ffda]">FRONTIER</span> INTERNET
            </h1>

            {/* Benefit-focused subheading */}
            <h2 className="text-sm sm:text-base md:text-lg text-white/90 mb-2 md:mb-3 font-light leading-relaxed max-w-xl">
              <span className="text-[#64ffda] font-bold">Blazing-fast fiber starting at just $29.99/mo</span> — with speeds up to 7 Gbps. No deposit, no contracts, unlimited data.
            </h2>
            <p className="text-xs md:text-sm text-white/80 mb-8 md:mb-10">
              Join 100,000+ happy Frontier customers switching from cable and DSL.
            </p>

            {/* Strong CTA with urgency */}
            <div className="mb-6 md:mb-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#64ffda] hover:bg-[#4de8cc] text-[#0A1E3C] text-base md:text-lg py-4 md:py-6 px-8 rounded-lg font-bold"
              >
                <Link href="/order">Get Started - FREE Installation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 text-base md:text-lg py-4 md:py-6 px-6 bg-transparent"
              >
                <Link href="/internet">View All Plans</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base mb-6">
              <div className="flex items-center">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-[#64ffda] mr-2 flex-shrink-0" />
                <span className="text-white/90">FREE Professional Installation</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-[#64ffda] mr-2 flex-shrink-0" />
                <span className="text-white/90">No Deposit Required</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-[#64ffda] mr-2 flex-shrink-0" />
                <span className="text-white/90">No Contracts - Cancel Anytime</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-[#64ffda] mr-2 flex-shrink-0" />
                <span className="text-white/90">Unlimited Data + Free Router</span>
              </div>
            </div>

            {/* Social proof */}
            <p className="text-xs text-white/70 font-medium">
              ⭐ 4.8 out of 5 stars from 5,000+ verified customers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
