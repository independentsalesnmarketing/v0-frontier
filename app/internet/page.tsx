import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Router, PenTool as Tool, CreditCard, Infinity, FileText, BookOpen, Gift, DollarSign, Zap, CheckCircle, Star, ArrowRight, MapPin, Check, Shield, Clock, Wifi, ChevronRight, Users, Monitor, Gamepad2, Home } from "lucide-react"
import { PageOrderButton, FaqAccordion, ContentTabs } from "@/components/PageInteractions"
import Breadcrumbs from "@/components/Breadcrumbs"
import SeoFreshnessNote from "@/components/SeoFreshnessNote"
import { coreBrandKeywords, plansPricingKeywords, speedTierKeywords, availabilityKeywords } from "@/lib/seo-keywords"
import KeyFacts from "@/components/KeyFacts"
import RelatedServices from "@/components/RelatedServices"
import { UrgencyCountdown } from "@/components/UrgencyCountdown"

export const metadata: Metadata = {
  title: "Frontier Internet Plans & Packages 2026 | Fiber from $29.99/mo",
  description: "Compare Frontier Communications fiber internet plans — 500 Mbps to 7 Gig. Unlimited data, no contracts, free eero router, and free installation. Order online today.",
  alternates: { canonical: "/internet" },
  openGraph: {
    title: "Frontier Internet Plans & Packages 2026 | Fiber from $29.99/mo",
    description: "Compare Frontier Communications fiber internet plans — 500 Mbps to 7 Gig. Unlimited data, no contracts, free eero router, and free installation. Order online today.",
    images: [
      {
        url: "/images/og-frontier-internet.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Fiber Internet Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiber Internet Plans from $29.99/mo | Frontier Deals",
    description: "Compare Frontier fiber internet plans from 500 Mbps to 7 Gbps. Unlimited data, no contracts, free installation.",
    images: ["/images/og-frontier-internet.jpg"],
  },
  keywords: [
    ...coreBrandKeywords,
    ...plansPricingKeywords,
    ...speedTierKeywords,
    ...availabilityKeywords,
    "fiber internet speed",
    "7 gbps internet",
    "symmetrical internet",
    "unlimited data internet",
    "no contract internet",
    "fiber optic plans",
    "high speed internet deals",
    "frontier fiber internet 2026",
    "best fiber internet provider",
    "fiber internet near me",
  ],
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Frontier Fiber Internet",
  description: "High-speed fiber internet with symmetrical speeds up to 7 Gbps, unlimited data, and no contracts.",
  image: "https://frontier-deals.com/images/og-frontier-internet.jpg",
  brand: { "@type": "Brand", name: "Frontier Communications" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "29.99",
    highPrice: "109.99",
    offerCount: "5",
    url: "https://frontier-deals.com/internet",
    availability: "https://schema.org/InStock",
  },
}

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Frontier Fiber different from cable internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier Fiber uses fiber optic technology that transmits data via light signals through glass fibers, while cable internet uses copper coaxial cables. This fundamental difference allows Frontier Fiber to deliver symmetrical upload and download speeds (equally fast in both directions), greater reliability, lower latency, and higher bandwidth capacity. Unlike cable internet, Frontier Fiber doesn't slow down during peak usage times and offers speeds up to 7 Gbps.",
      },
    },
    {
      "@type": "Question",
      name: "Is Frontier Fiber available in my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier is rapidly expanding its fiber network across 29 states. To check if Frontier Fiber is available at your address, use our availability checker on the website or call our customer service. If fiber isn't yet available in your area, you can sign up to be notified when service becomes available.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need special equipment for Frontier Fiber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, fiber internet requires an Optical Network Terminal (ONT) to convert light signals to electrical signals your devices can use. Frontier provides and installs this equipment at no additional cost. We also include a premium Amazon eero router with all our plans, with the specific model depending on your chosen speed tier. The eero router provides whole-home Wi-Fi coverage and is easy to set up and manage through a mobile app.",
      },
    },
    {
      "@type": "Question",
      name: "Are there data caps on Frontier Fiber plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, all Frontier Fiber plans come with unlimited data. You can stream, game, video conference, and download as much as you want without worrying about data caps, overage charges, or throttling. This is a significant advantage compared to many cable internet providers who impose monthly data limits.",
      },
    },
  ],
}

export default function InternetPlans() {
  return (
    <div className="bg-white text-[#333333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
      <Breadcrumbs items={[{ label: "Internet", href: "/internet" }]} />

      {/* Sticky Urgency Bar */}
      <div className="bg-[#0A1E3C] text-white py-4 px-4">
        <div className="container mx-auto max-w-7xl flex items-center justify-center gap-4 text-sm">
          <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0A1E3C] text-xs font-black px-3 py-1.5 rounded uppercase tracking-wide flex-shrink-0 shadow-md">Deal</span>
          <UrgencyCountdown />
        </div>
      </div>

      {/* Minimal Header + Plans Immediately */}
      <section id="plans" className="bg-[#f8f9fb] pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Compact Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-[#0A1E3C] mb-2 text-balance">
              Frontier Fiber Internet Plans
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
              Unlimited data. No contracts. Free router & installation.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <SeoFreshnessNote />
            <KeyFacts
              title="Frontier Fiber Internet — Quick Facts"
              facts={[
                { label: "Speed Range", value: "500 Mbps to 7 Gbps symmetrical" },
                { label: "Starting Price", value: "$29.99/mo with AutoPay" },
                { label: "Data Policy", value: "Unlimited — no caps or throttling" },
                { label: "Contract", value: "None required — cancel anytime" },
                { label: "Installation", value: "Free professional in-home setup" },
                { label: "Router", value: "Free eero Wi-Fi 6/6E/7 included" },
              ]}
            />
          </div>
          {/* ===== FEATURED PLANS: 1 Gig & 2 Gig ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {/* Fiber 1 Gig — Best Value */}
            <div id="fiber-1-gig" className="bg-white border-2 border-[#00b7c3] rounded-2xl flex flex-col relative overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="bg-[#00b7c3] text-white text-center py-2 px-4 text-xs font-black tracking-wide">
                BEST VALUE
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h2 className="text-3xl font-black text-[#0A1E3C] mb-1">Fiber 1 Gig</h2>
                  <p className="text-sm text-gray-500">1,000/1,000 Mbps symmetrical</p>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <p className="text-xs text-gray-400 line-through">$59.99/mo</p>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-sm font-bold text-[#0A1E3C]">$</span>
                    <span className="text-5xl font-black text-[#0A1E3C] leading-none">49</span>
                    <span className="text-xl font-black text-[#0A1E3C]">.99</span>
                    <span className="text-sm text-gray-500 ml-1">/mo</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">w/ Auto Pay &amp; paperless billing</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">The sweet spot for most households. Stream 4K on every screen, game lag-free, and work from home all at the same time.</p>
                <div className="space-y-2.5 mb-5 flex-grow">
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" /><span className="text-sm text-gray-700">5-10 devices simultaneously</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" /><span className="text-sm text-gray-700">eero Pro 6E router included</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" /><span className="text-sm text-gray-700">Unlimited data</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" /><span className="text-sm text-gray-700">Free installation</span></div>
                  <div className="flex items-center gap-2 bg-[#DA202C]/5 px-3 py-2 rounded-lg">
                    <Gift className="h-4 w-4 text-[#DA202C] flex-shrink-0" /><span className="text-xs font-bold text-[#0A1E3C]">$100 Visa® Reward Card</span>
                  </div>
                </div>
                <PageOrderButton className="w-full bg-[#00b7c3] hover:bg-[#00a0b0] text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md" planName="fiber-1-gig">
                  Get Best Value Plan
                </PageOrderButton>
              </div>
            </div>

            {/* Fiber 2 Gig — Most Popular */}
            <div id="fiber-2-gig" className="bg-white border-2 border-[#DA202C] rounded-2xl flex flex-col relative overflow-hidden shadow-lg hover:shadow-xl transition-all ring-1 ring-[#DA202C]/20">
              <div className="bg-gradient-to-r from-[#DA202C] to-[#b71c1c] text-white text-center py-2 px-4 text-xs font-black tracking-wide flex items-center justify-center gap-2">
                <Star className="h-3.5 w-3.5 fill-white" />
                MOST POPULAR
                <Star className="h-3.5 w-3.5 fill-white" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h2 className="text-3xl font-black text-[#0A1E3C] mb-1">Fiber 2 Gig</h2>
                  <p className="text-sm text-gray-500">2,000/2,000 Mbps symmetrical</p>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <p className="text-xs text-gray-400 line-through">$74.99/mo</p>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-sm font-bold text-[#0A1E3C]">$</span>
                    <span className="text-5xl font-black text-[#0A1E3C] leading-none">64</span>
                    <span className="text-xl font-black text-[#0A1E3C]">.99</span>
                    <span className="text-sm text-gray-500 ml-1">/mo</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">w/ Auto Pay &amp; paperless billing</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">Built for large households, 4K/8K streaming, competitive gaming, and smart homes with dozens of connected devices.</p>
                <div className="space-y-2.5 mb-5 flex-grow">
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" /><span className="text-sm text-gray-700">30-50+ devices simultaneously</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" /><span className="text-sm text-gray-700">eero Pro 6E router included</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" /><span className="text-sm text-gray-700">Unlimited data</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00b7c3] flex-shrink-0" /><span className="text-sm text-gray-700">Free installation</span></div>
                  <div className="flex items-center gap-2 bg-[#DA202C]/5 px-3 py-2 rounded-lg">
                    <Gift className="h-4 w-4 text-[#DA202C] flex-shrink-0" /><span className="text-xs font-bold text-[#0A1E3C]">$150 Visa® Reward Card</span>
                  </div>
                </div>
                <PageOrderButton className="w-full bg-gradient-to-r from-[#DA202C] to-[#b71c1c] hover:from-[#b71c1c] hover:to-[#92120e] text-white font-bold py-3 rounded-xl text-sm transition-all shadow-lg" planName="fiber-2-gig">
                  Get Most Popular Plan
                </PageOrderButton>
              </div>
            </div>
          </div>

          {/* ===== STARTER: Fiber 500 ===== */}
          <div className="max-w-4xl mx-auto mb-6">
            <div id="fiber-500" className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 hover:shadow-md transition-all">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-black text-[#0A1E3C]">Fiber 500</h3>
                <p className="text-xs text-gray-500">500/500 Mbps symmetrical</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 line-through">$39.99/mo</p>
                <div className="flex items-baseline gap-0.5 justify-center">
                  <span className="text-sm font-bold text-[#0A1E3C]">$</span>
                  <span className="text-3xl font-black text-[#0A1E3C] leading-none">29</span>
                  <span className="text-base font-black text-[#0A1E3C]">.99</span>
                  <span className="text-sm text-gray-500 ml-1">/mo</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-[#00b7c3]" />2-4 people</span>
                <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-[#00b7c3]" />eero Wi-Fi 6</span>
                <span className="flex items-center gap-1"><Gift className="h-3.5 w-3.5 text-[#DA202C]" />$50 Visa® Card</span>
              </div>
              <PageOrderButton className="bg-[#0A1E3C] hover:bg-[#162d52] text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-all whitespace-nowrap" planName="fiber-500">
                Select Plan
              </PageOrderButton>
            </div>
          </div>

          {/* ===== PREMIUM TIER: 5 Gig & 7 Gig ===== */}
          <div className="max-w-4xl mx-auto mt-10 mb-6">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 bg-[#0A1E3C]/5 text-[#0A1E3C] text-xs font-black px-4 py-2 rounded-full uppercase tracking-wide">
                <Zap className="h-3.5 w-3.5" /> Premium Multi-Gig Plans
              </span>
              <p className="text-sm text-gray-500 mt-2">For power users, content creators, and future-proof performance</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* 5 Gig */}
              <div id="fiber-5-gig" className="bg-gradient-to-br from-[#0A1E3C] to-[#1D3461] rounded-2xl p-6 text-white flex flex-col hover:shadow-xl transition-all">
                <div className="mb-4">
                  <h3 className="text-2xl font-black mb-1">Fiber 5 Gig</h3>
                  <p className="text-xs text-white/50">5,000/5,000 Mbps symmetrical</p>
                </div>
                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="text-xs text-white/40 line-through">$99.99/mo</p>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-sm font-bold">$</span>
                    <span className="text-4xl font-black leading-none">89</span>
                    <span className="text-lg font-black">.99</span>
                    <span className="text-sm text-white/60 ml-1">/mo</span>
                  </div>
                </div>
                <div className="space-y-2 mb-5 flex-grow">
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#64ffda] flex-shrink-0" /><span className="text-sm text-white/80">eero Max 7 (Wi-Fi 7)</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#64ffda] flex-shrink-0" /><span className="text-sm text-white/80">$200 Visa® Reward Card</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#64ffda] flex-shrink-0" /><span className="text-sm text-white/80">Ideal for content creators</span></div>
                </div>
                <PageOrderButton className="w-full bg-white text-[#0A1E3C] font-bold py-3 rounded-xl text-sm hover:bg-gray-100 transition-all" planName="fiber-5-gig">
                  Select 5 Gig
                </PageOrderButton>
              </div>
              {/* 7 Gig */}
              <div id="fiber-7-gig" className="bg-gradient-to-br from-[#0A1E3C] to-[#1D3461] rounded-2xl p-6 text-white flex flex-col relative hover:shadow-xl transition-all">
                <span className="absolute top-4 right-4 bg-[#DA202C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">New</span>
                <div className="mb-4">
                  <h3 className="text-2xl font-black mb-1">Fiber 7 Gig</h3>
                  <p className="text-xs text-white/50">7,000/7,000 Mbps symmetrical</p>
                </div>
                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="text-xs text-white/40 line-through">$154.99/mo</p>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-sm font-bold">$</span>
                    <span className="text-4xl font-black leading-none">109</span>
                    <span className="text-lg font-black">.99</span>
                    <span className="text-sm text-white/60 ml-1">/mo</span>
                  </div>
                </div>
                <div className="space-y-2 mb-5 flex-grow">
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#64ffda] flex-shrink-0" /><span className="text-sm text-white/80">2x eero Max 7 (Wi-Fi 7)</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#64ffda] flex-shrink-0" /><span className="text-sm text-white/80">$200 Visa® Reward Card</span></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#64ffda] flex-shrink-0" /><span className="text-sm text-white/80">Maximum performance</span></div>
                </div>
                <PageOrderButton className="w-full bg-white text-[#0A1E3C] font-bold py-3 rounded-xl text-sm hover:bg-gray-100 transition-all" planName="fiber-7-gig">
                  Select 7 Gig
                </PageOrderButton>
              </div>
            </div>
          </div>

          {/* All Plans Include */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-[#00b7c3]" />
              <span>No contracts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wifi className="h-4 w-4 text-[#00b7c3]" />
              <span>Free router included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tool className="h-4 w-4 text-[#00b7c3]" />
              <span>Free installation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Infinity className="h-4 w-4 text-[#00b7c3]" />
              <span>Unlimited data</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#00b7c3]" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-[#0A1E3C] text-white py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-black">4.8<span className="text-lg">/5</span></p>
              <div className="flex justify-center gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-[#da202c] fill-[#da202c]" />
                ))}
              </div>
              <p className="text-white/60 text-xs">Customer Rating</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">500K+</p>
              <p className="text-white/60 text-xs mt-2">Fiber Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">99.9%</p>
              <p className="text-white/60 text-xs mt-2">Network Uptime</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">29</p>
              <p className="text-white/60 text-xs mt-2">States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For - Quick Visual Section */}
      <section className="py-14 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-10">
            Fiber Internet Built for How You Live
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] transition-colors">
              <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Monitor className="h-6 w-6 text-[#00b7c3]" />
              </div>
              <h3 className="font-bold text-sm text-[#0A1E3C] mb-1">Remote Work</h3>
              <p className="text-xs text-gray-500">Crystal-clear video calls, fast uploads</p>
            </div>
            <div className="text-center p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] transition-colors">
              <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gamepad2 className="h-6 w-6 text-[#00b7c3]" />
              </div>
              <h3 className="font-bold text-sm text-[#0A1E3C] mb-1">Gaming</h3>
              <p className="text-xs text-gray-500">{'<'}10ms latency, zero lag</p>
            </div>
            <div className="text-center p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] transition-colors">
              <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-[#00b7c3]" />
              </div>
              <h3 className="font-bold text-sm text-[#0A1E3C] mb-1">Families</h3>
              <p className="text-xs text-gray-500">Everyone online at once</p>
            </div>
            <div className="text-center p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] transition-colors">
              <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Home className="h-6 w-6 text-[#00b7c3]" />
              </div>
              <h3 className="font-bold text-sm text-[#0A1E3C] mb-1">Smart Homes</h3>
              <p className="text-xs text-gray-500">30+ devices, no slowdowns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-14 bg-[#f8f9fb] px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10 text-[#0A1E3C]">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Switching to Frontier Fiber was the best decision for our family. We can all stream, game, and work simultaneously without any slowdowns.",
                name: "Michael T.",
                plan: "Fiber 2 Gig Customer",
              },
              {
                quote: "As someone who works from home, the symmetrical speeds have been a game-changer. Video conferences are crystal clear, and uploads take seconds.",
                name: "Sarah K.",
                plan: "Fiber 1 Gig Customer",
              },
              {
                quote: "Zero outages in six months. Speeds are consistently fast even during peak hours. The included eero router covers our entire home.",
                name: "David L.",
                plan: "Fiber 5 Gig Customer",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-[#da202c] fill-[#da202c]" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed italic">
                  {`"${testimonial.quote}"`}
                </p>
                <div>
                  <p className="font-bold text-sm text-[#0A1E3C]">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.plan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Tabs Section - SEO Focused */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ContentTabs tabs={[
            { label: "Overview", id: "overview", content: (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1E3C]">
                Frontier Fiber Internet: The Ultimate Connection
              </h2>
              <p className="text-lg mb-6">
                Frontier Fiber Internet delivers symmetrical speeds up to 7 Gbps through advanced fiber optic
                technology. Unlike traditional cable or DSL connections, fiber optic internet transmits data using light
                signals through thin glass fibers, resulting in faster, more reliable internet service.
              </p>

              <div className="bg-[#F5F7FA] p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-[#0A1E3C]">Key Benefits of Frontier Fiber Internet</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Symmetrical Speeds:</strong> Equal upload and download speeds, unlike cable internet which
                      typically offers much slower upload speeds.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Unlimited Data:</strong> No data caps or throttling, so you can stream, game, and download
                      as much as you want.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Reliability:</strong> Fiber optic cables are less susceptible to interference and weather
                      conditions, providing a more stable connection.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Low Latency:</strong> Experience minimal delay in data transmission, crucial for online
                      gaming, video conferencing, and real-time applications.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Future-Proof:</strong> Fiber technology is designed to accommodate increasing bandwidth
                      demands for years to come.
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#0A1E3C]">Who Benefits Most from Frontier Fiber?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Remote Workers</h4>
                  <p>
                    With symmetrical speeds, you can upload large files and participate in video conferences without
                    interruption. Our Fiber 1 Gig plan or higher is ideal for professionals working from home.{" "}
                    <Link href="/blog/work-from-home-internet-guide" className="text-[#00b7c3] hover:underline font-medium">Read our remote work guide →</Link>
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Gamers</h4>
                  <p>
                    Low latency and high-speed connections ensure minimal lag and faster download times for game
                    updates. Our Fiber 2 Gig plan provides the performance serious gamers demand.{" "}
                    <Link href="/blog/gaming-internet-guide" className="text-[#00b7c3] hover:underline font-medium">Read our gaming guide →</Link>
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Streaming Enthusiasts</h4>
                  <p>
                    Stream 4K and even 8K content without buffering on multiple devices simultaneously. Our Fiber 500
                    plan and above support high-quality streaming throughout your home.{" "}
                    <Link href="/blog/streaming-internet-requirements" className="text-[#00b7c3] hover:underline font-medium">Streaming speed requirements →</Link>
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Smart Homes</h4>
                  <p>
                    Connect dozens of smart devices with bandwidth to spare. Our Fiber 1 Gig and higher plans provide
                    the capacity needed for the modern connected home.{" "}
                    <Link href="/blog/smart-home-internet-guide" className="text-[#00b7c3] hover:underline font-medium">Smart home internet guide →</Link>
                  </p>
                </div>
              </div>
            </div>
          ) },
            { label: "Fiber vs Cable", id: "comparison", content: (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1E3C]">
                Fiber vs Cable Internet: The Frontier Advantage
              </h2>
              <p className="text-lg mb-6">
                When comparing Frontier Fiber to traditional cable internet, the differences in performance,
                reliability, and value become clear. Fiber technology represents the next evolution in internet
                connectivity, offering significant advantages over older copper-based systems.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0A1E3C] text-white">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-center">Frontier Fiber</th>
                      <th className="p-4 text-center">Cable Internet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium">Max Download Speed</td>
                      <td className="p-4 text-center bg-[#f8f9fa]">
                        <span className="font-bold text-[#DA202C]">Up to 7 Gbps</span>
                      </td>
                      <td className="p-4 text-center">Up to 1.2 Gbps</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium">Upload Speed</td>
                      <td className="p-4 text-center bg-[#f8f9fa]">
                        <span className="font-bold text-[#DA202C]">Symmetrical (Up to 7 Gbps)</span>
                      </td>
                      <td className="p-4 text-center">Asymmetrical (Up to 35 Mbps)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium">Data Caps</td>
                      <td className="p-4 text-center bg-[#f8f9fa]">
                        <span className="font-bold text-[#00B7C3]">No Data Caps</span>
                      </td>
                      <td className="p-4 text-center">Often 1.2 TB/month</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium">Reliability</td>
                      <td className="p-4 text-center bg-[#f8f9fa]">
                        <span className="font-bold text-[#00B7C3]">Excellent (99.9% uptime)</span>
                      </td>
                      <td className="p-4 text-center">Good (98.5% uptime)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium">Latency</td>
                      <td className="p-4 text-center bg-[#f8f9fa]">
                        <span className="font-bold text-[#00B7C3]">Very Low (10-15ms)</span>
                      </td>
                      <td className="p-4 text-center">Moderate (25-75ms)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Bandwidth Sharing</td>
                      <td className="p-4 text-center bg-[#f8f9fa]">
                        <span className="font-bold text-[#00B7C3]">Minimal Impact</span>
                      </td>
                      <td className="p-4 text-center">Significant during peak hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[#F5F7FA] p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-[#0A1E3C]">The Upload Speed Advantage</h3>
                <p className="mb-4">
                  One of the most significant advantages of Frontier Fiber is symmetrical upload speeds. While cable
                  internet typically offers upload speeds that are just a fraction of download speeds, Frontier Fiber
                  provides equal upload and download speeds. Learn more in our guide to{" "}
                  <Link href="/blog/symmetrical-vs-asymmetrical-speeds" className="text-[#00b7c3] hover:underline font-medium">symmetrical vs asymmetrical speeds</Link>.
                </p>
                <p>This symmetrical connection is increasingly important for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Video conferencing and virtual meetings</li>
                  <li>Uploading large files to cloud storage</li>
                  <li>Live streaming content</li>
                  <li>Online gaming</li>
                  <li>Remote desktop applications</li>
                  <li>Smart home device communications</li>
                </ul>
              </div>
            </div>
          ) },
            { label: "Fiber Technology", id: "technology", content: (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1E3C]">Understanding Fiber Optic Technology</h2>
              <p className="text-lg mb-6">
                Frontier Fiber Internet utilizes cutting-edge fiber optic technology to deliver unprecedented internet
                speeds and reliability. Unlike traditional copper-based internet connections, fiber optic cables
                transmit data using pulses of light, resulting in significantly faster speeds and more reliable service.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#F5F7FA] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1E3C]">How Fiber Works</h3>
                  <p className="mb-4">
                    Fiber optic cables contain thin strands of glass or plastic fibers that transmit data as pulses of
                    light. This light-based data transmission allows for:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Near speed-of-light data transmission</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Minimal signal degradation over long distances</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Immunity to electromagnetic interference</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Greater bandwidth capacity</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F5F7FA] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1E3C]">{"Frontier's"} Fiber Network</h3>
                  <p className="mb-4">
                    Frontier is rapidly expanding its fiber network across the United States, bringing the benefits of
                    fiber technology to more communities:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Expanding to 10 million locations by 2026</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Currently available in 29 states</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Continuous network upgrades to support higher speeds</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00B7C3] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fiber-to-the-home (FTTH) architecture for optimal performance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#0A1E3C]">Wi-Fi Technology</h3>
              <p className="mb-6">
                Frontier pairs its fiber internet with cutting-edge Wi-Fi technology to ensure the fastest speeds reach
                all your devices:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Wi-Fi 6E</h4>
                  <p>
                    Included with our Fiber 500, 1 Gig, and 2 Gig plans, Wi-Fi 6E technology offers improved
                    performance in congested areas and supports more connected devices.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Wi-Fi 7</h4>
                  <p>
                    Our Fiber 5 Gig and 7 Gig plans include cutting-edge Wi-Fi 7 technology, offering multi-link
                    operation, 320MHz channels, and up to 46 Gbps theoretical speeds.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Amazon eero</h4>
                  <p>
                    All Frontier Fiber plans include premium Amazon eero devices that provide whole-home coverage, easy
                    setup, and automatic updates for optimal performance.
                  </p>
                </div>
              </div>
            </div>
          ) },
          ]} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f8f9fb]" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E3C]">Frequently Asked Questions</h2>
          <FaqAccordion faqs={[
            {
              question: "What makes Frontier Fiber different from cable internet?",
              answer: "Frontier Fiber uses fiber optic technology that transmits data via light signals through glass fibers, while cable internet uses copper coaxial cables. This fundamental difference allows Frontier Fiber to deliver symmetrical upload and download speeds (equally fast in both directions), greater reliability, lower latency, and higher bandwidth capacity. Unlike cable internet, Frontier Fiber doesn't slow down during peak usage times and offers speeds up to 7 Gbps.",
            },
            {
              question: "Is Frontier Fiber available in my area?",
              answer: "Frontier is rapidly expanding its fiber network across 29 states. To check if Frontier Fiber is available at your address, use our availability checker on the website or call our customer service. If fiber isn't yet available in your area, you can sign up to be notified when service becomes available.",
            },
            {
              question: "Do I need special equipment for Frontier Fiber?",
              answer: "Yes, fiber internet requires an Optical Network Terminal (ONT) to convert light signals to electrical signals your devices can use. Frontier provides and installs this equipment at no additional cost. We also include a premium Amazon eero router with all our plans, with the specific model depending on your chosen speed tier. The eero router provides whole-home Wi-Fi coverage and is easy to set up and manage through a mobile app.",
            },
            {
              question: "Are there data caps on Frontier Fiber plans?",
              answer: "No, all Frontier Fiber plans come with unlimited data. You can stream, game, video conference, and download as much as you want without worrying about data caps, overage charges, or throttling. This is a significant advantage compared to many cable internet providers who impose monthly data limits.",
            },
            {
              question: "What is the installation process like?",
              answer: "Frontier provides professional installation for all fiber internet services. Our technicians will install the Optical Network Terminal (ONT) at your home, connect it to our fiber network, and set up your Wi-Fi router. They'll also ensure everything is working properly and answer any questions you might have. The typical installation takes 2-3 hours, and we offer flexible scheduling to accommodate your needs.",
            },
            {
              question: "Can I keep my current email address when switching to Frontier?",
              answer: "Yes, you can continue using your current email address when you switch to Frontier. If your email is provided by your current internet service provider, we recommend transitioning to a provider-neutral email service like Gmail, Outlook, or Yahoo before canceling your old service to ensure uninterrupted access to your emails.",
            },
          ]} />
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-16 bg-gradient-to-r from-[#0A1E3C] to-[#1D3461] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Check Frontier Fiber Availability</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Frontier Fiber is expanding rapidly. Enter your address to see if service is available in your area.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Find Frontier Fiber Near You</h3>
                <p className="mb-6">
                  Enter your address to check if Frontier Fiber Optic service is available in your area.
                </p>
                <PageOrderButton
                  className="w-full bg-[#DA202C] hover:bg-[#B71C1C] text-white font-semibold"
                >
                  Check Availability
                </PageOrderButton>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Major Service Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#DA202C] mr-2" />
                    <span>California</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#DA202C] mr-2" />
                    <span>Florida</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#DA202C] mr-2" />
                    <span>Texas</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#DA202C] mr-2" />
                    <span>Connecticut</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#DA202C] mr-2" />
                    <span>And 20+ more states</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Links Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0A1E3C] mb-2">How Fiber Internet Compares</h2>
            <p className="text-gray-600">Wondering how fiber stacks up against other internet types? Read our detailed comparisons.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              href="/compare/fiber-vs-cable"
              className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-md transition-all bg-white"
            >
              <h3 className="font-bold text-[#0A1E3C] mb-1">Fiber vs Cable</h3>
              <p className="text-sm text-gray-600">See why fiber is faster and more reliable.</p>
            </Link>
            <Link
              href="/compare/fiber-vs-cable-vs-dsl"
              className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-md transition-all bg-white"
            >
              <h3 className="font-bold text-[#0A1E3C] mb-1">Fiber vs Cable vs DSL</h3>
              <p className="text-sm text-gray-600">Complete comparison of all three technologies.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Helpful Resources — Internal Linking for SEO */}
      <section className="py-14 bg-white px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-3">Helpful Internet Resources</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">Explore our guides to make the most of your internet connection.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/blog/how-much-internet-speed-do-i-need" className="group block p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] hover:shadow-md transition-all">
              <h3 className="font-bold text-[#0A1E3C] mb-1 group-hover:text-[#00b7c3] transition-colors">How Much Speed Do I Need?</h3>
              <p className="text-sm text-gray-500">Find the right plan for your household size and habits.</p>
            </Link>
            <Link href="/blog/what-is-fiber-internet" className="group block p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] hover:shadow-md transition-all">
              <h3 className="font-bold text-[#0A1E3C] mb-1 group-hover:text-[#00b7c3] transition-colors">What Is Fiber Internet?</h3>
              <p className="text-sm text-gray-500">A plain-English explainer of fiber optic technology.</p>
            </Link>
            <Link href="/blog/symmetrical-vs-asymmetrical-speeds" className="group block p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] hover:shadow-md transition-all">
              <h3 className="font-bold text-[#0A1E3C] mb-1 group-hover:text-[#00b7c3] transition-colors">Upload vs Download Speed</h3>
              <p className="text-sm text-gray-500">Why symmetrical internet speeds matter more than ever.</p>
            </Link>
            <Link href="/blog/multi-gig-internet-worth-it" className="group block p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] hover:shadow-md transition-all">
              <h3 className="font-bold text-[#0A1E3C] mb-1 group-hover:text-[#00b7c3] transition-colors">Is Multi-Gig Internet Worth It?</h3>
              <p className="text-sm text-gray-500">Who actually needs 2 Gig or 5 Gig speeds.</p>
            </Link>
            <Link href="/internet-speed-test" className="group block p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] hover:shadow-md transition-all">
              <h3 className="font-bold text-[#0A1E3C] mb-1 group-hover:text-[#00b7c3] transition-colors">Test Your Internet Speed</h3>
              <p className="text-sm text-gray-500">Run a free speed test and see how your connection performs.</p>
            </Link>
            <Link href="/blog/home-network-setup-guide" className="group block p-5 rounded-xl border border-gray-100 hover:border-[#00b7c3] hover:shadow-md transition-all">
              <h3 className="font-bold text-[#0A1E3C] mb-1 group-hover:text-[#00b7c3] transition-colors">Home Network Setup Guide</h3>
              <p className="text-sm text-gray-500">Router placement, Ethernet, and mesh Wi-Fi tips.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-12 bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0A1E3C] mb-3">Want to see exact pricing?</h2>
          <p className="text-gray-700 mb-4">View our complete pricing breakdown, plan features, and promotional offers.</p>
          <Button
            asChild
            className="bg-[#00b7c3] hover:bg-[#00a0b0] text-white font-semibold px-6 py-2"
          >
            <Link href="/internet/pricing">View Full Pricing & Plans</Link>
          </Button>
        </div>
      </section>

      <RelatedServices currentPath="/internet" />

      {/* Why Frontier Fiber is Worth It - SEO Content */}
      <section className="py-16 bg-gradient-to-br from-[#0A1E3C] to-[#1D3461] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Why Choose Frontier Fiber Internet
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* True Symmetrical Speeds */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-[#00b7c3] rounded-full flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-[#0A1E3C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Symmetrical Upload & Download Speeds</h3>
              <p className="text-white/80 leading-relaxed">
                Unlike cable internet with slow upload speeds, Frontier Fiber delivers equal upload and download speeds. Perfect for video calls, cloud storage, content creators, and anyone who needs to send large files quickly.
              </p>
            </div>

            {/* No Data Caps Ever */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-[#00b7c3] rounded-full flex items-center justify-center mb-4">
                <Infinity className="h-7 w-7 text-[#0A1E3C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Truly Unlimited Data</h3>
              <p className="text-white/80 leading-relaxed">
                Stream 4K movies, download massive game updates, backup your entire photo library to the cloud – all without worrying about data caps, overage fees, or throttling. Most cable providers limit you to 1.2TB per month.
              </p>
            </div>

            {/* Low Latency Gaming */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-[#00b7c3] rounded-full flex items-center justify-center mb-4">
                <Gamepad2 className="h-7 w-7 text-[#0A1E3C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ultra-Low Latency for Gaming</h3>
              <p className="text-white/80 leading-relaxed">
                Experience sub-10ms latency with fiber optic technology. Competitive gamers need every millisecond advantage, and Frontier Fiber delivers consistently low ping times that cable and DSL {"can't"} match.
              </p>
            </div>

            {/* Premium Equipment Included */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-[#00b7c3] rounded-full flex items-center justify-center mb-4">
                <Router className="h-7 w-7 text-[#0A1E3C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Amazon eero Router Included</h3>
              <p className="text-white/80 leading-relaxed">
                Every plan includes a high-end Amazon eero router with Wi-Fi 6E or Wi-Fi 7 technology (worth up to $600). Enjoy whole-home coverage with mesh networking, parental controls, and automatic security updates.
              </p>
            </div>

            {/* No Contracts Flexibility */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-[#00b7c3] rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-[#0A1E3C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Contracts, No Commitments</h3>
              <p className="text-white/80 leading-relaxed">
                Cancel anytime without early termination fees or penalties. We {"don't"} lock you into multi-year contracts because we know you'll love the service. Your promotional pricing is guaranteed for 12 months.
              </p>
            </div>

            {/* Future-Proof Technology */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-[#00b7c3] rounded-full flex items-center justify-center mb-4">
                <Star className="h-7 w-7 text-[#0A1E3C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Future-Proof Fiber Technology</h3>
              <p className="text-white/80 leading-relaxed">
                Fiber optic infrastructure is built to last decades and can support even faster speeds as technology advances. While cable networks struggle with bandwidth, fiber has virtually unlimited capacity for future upgrades.
              </p>
            </div>
          </div>

          {/* Final Stat Bar */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-lg text-white/90 mb-2">
              Join over <span className="font-black text-2xl text-[#00b7c3]">500,000</span> satisfied Frontier Fiber customers
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#da202c] fill-[#da202c]" />
              ))}
              <span className="ml-2 font-bold text-lg">4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
