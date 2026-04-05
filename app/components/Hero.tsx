"use client"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[480px] md:min-h-[560px] overflow-hidden">
      {/* Background */}
      <figure className="absolute inset-0 z-0">
        <Image
          src="/images/hero-family-internet.jpg"
          alt="A happy family of four seated together on a living room couch, streaming video and browsing the internet on laptops and tablets, representing the seamless whole-home connectivity delivered by Frontier Fiber high-speed internet with symmetrical upload and download speeds, no data caps, and a free Wi-Fi 6 router included with every plan."
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "60% center" }}
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04111f] via-[#0A1E3C]/90 to-[#0A1E3C]/40" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#DA202C]/10 blur-[130px] pointer-events-none" />
        <figcaption className="absolute bottom-3 right-4 text-[11px] text-white/55 bg-[#04111f]/50 border border-white/10 rounded-md px-2 py-1">
          Family household using Frontier Fiber for streaming, video calls, and multi-device Wi-Fi.
        </figcaption>
      </figure>

      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-12 md:pt-20 pb-12 md:pb-20 max-w-2xl">

          {/* Retailer badge */}
          <div className="inline-flex items-center gap-2 glass border border-white/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse" />
            <span className="text-xs font-semibold text-[#64ffda] tracking-wide uppercase">
              Authorized Frontier Retailer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] mb-5 tracking-tight">
            <span className="text-white">Fiber Internet</span>
            <br />
            <span className="gradient-text">from $34.99/mo</span>
          </h1>

          <p className="hero-description text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
            Symmetrical speeds up to 7 Gig. No data caps, no contracts, free
            installation — order today through your authorized Frontier retailer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-[#DA202C] hover:bg-[#b71c1c] text-white text-base h-14 px-9 rounded-xl font-bold cta-pulse shadow-xl"
            >
              <Link href="/internet">
                View Plans &amp; Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2">
            {["Free Installation", "No Contracts", "Unlimited Data", "Free WiFi Router"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 glass border border-white/15 rounded-full px-3 py-1.5"
                >
                  <Check className="h-3.5 w-3.5 text-[#64ffda] flex-shrink-0" />
                  <span className="text-white/85 text-xs font-medium">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
