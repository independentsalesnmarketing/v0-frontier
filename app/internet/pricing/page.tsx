"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, ChevronUp, Star, Shield, Wifi, Clock, Award } from "lucide-react"
import { OrderForm } from "@/components/OrderForm"
import { PlanComparisonTable } from "@/components/PlanComparisonTable"
import { ZipCodeCheck } from "@/components/ZipCodeCheck"

export default function PricingPage() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("fiber-1-gig")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [expandedPlanDetails, setExpandedPlanDetails] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("residential")

  const openOrderForm = (plan: string) => {
    setSelectedPlan(plan)
    setIsOrderFormOpen(true)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const togglePlanDetails = (plan: string) => {
    setExpandedPlanDetails(expandedPlanDetails === plan ? null : plan)
  }

  // Calculate savings for each plan
  const calculateSavings = (regularPrice: number, discountedPrice: number) => {
    return ((regularPrice - discountedPrice) * 12).toFixed(0)
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0a192f] to-[#1d3461]">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#ff003c] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              FREE INSTALLATION
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#7eecde] block mb-2">FRONTIER FIBER</span>
              <span className="text-white">INTERNET PLANS & PRICING</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Experience lightning-fast symmetrical speeds with unlimited data, no annual commitment, and a free Wi-Fi
              router included with every plan.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-[#1d3461]/70 px-4 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-[#7eecde] mr-2" />
                <span className="text-white/90">No Data Caps</span>
              </div>
              <div className="flex items-center bg-[#1d3461]/70 px-4 py-2 rounded-lg">
                <Wifi className="h-5 w-5 text-[#7eecde] mr-2" />
                <span className="text-white/90">Free Wi-Fi Router</span>
              </div>
              <div className="flex items-center bg-[#1d3461]/70 px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5 text-[#7eecde] mr-2" />
                <span className="text-white/90">No Annual Commitment</span>
              </div>
              <div className="flex items-center bg-[#1d3461]/70 px-4 py-2 rounded-lg">
                <Award className="h-5 w-5 text-[#7eecde] mr-2" />
                <span className="text-white/90">Price Guaranteed for 1 Year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Tabs */}
      <section className="bg-[#1d3461] py-6 sticky top-0 z-20 border-t border-b border-[#2d4471]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-3 text-lg font-medium rounded-lg transition-all ${
                activeTab === "residential"
                  ? "bg-[#ff003c] text-white"
                  : "bg-[#0a192f] text-white/80 hover:bg-[#0a192f]/70"
              }`}
            >
              Residential Plans
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 py-3 text-lg font-medium rounded-lg transition-all ${
                activeTab === "business"
                  ? "bg-[#ff003c] text-white"
                  : "bg-[#0a192f] text-white/80 hover:bg-[#0a192f]/70"
              }`}
            >
              Business Plans
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a192f] to-[#1d3461]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {activeTab === "residential" ? "Frontier Fiber Internet Plans" : "Frontier Business Fiber Plans"}
            </h2>
            <p className="text-lg text-white/80">
              {activeTab === "residential"
                ? "Experience lightning-fast speeds with our fiber internet plans. All plans include unlimited data, no annual commitment, and a free Wi-Fi router."
                : "Power your business with dedicated fiber connections. All business plans include 24/7 priority support, 99.9% uptime guarantee, and static IP options."}
            </p>
          </div>

          {activeTab === "residential" ? (
            <>
              {/* First Row of Plans - Residential */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Fiber 200 Plan */}
                <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-lg border border-[#2d4471] transition-shadow hover:shadow-xl">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Fiber 200</h3>
                    <p className="text-[#7eecde] mb-4">200/200 Mbps</p>

                    <div className="flex items-baseline mb-1">
                      <span className="text-white text-2xl font-medium">$</span>
                      <span className="text-white text-7xl font-bold">29</span>
                      <div className="flex flex-col ml-1">
                        <span className="text-white text-xl font-bold">99</span>
                        <span className="text-[#7eecde] text-sm line-through">$39.99</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                    <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(39.99, 29.99)}/year</p>

                    <Button
                      className="w-full bg-[#00b7c3] hover:bg-[#00a0aa] text-white font-bold py-3 rounded-md mb-6"
                      onClick={() => openOrderForm("fiber-200")}
                    >
                      SELECT PLAN
                    </Button>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Great for browsing, video calls, and light streaming</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white">Amazon eero Pro 6E router included</span>
                          <sup>[1]</sup>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Consistent pricing for 12 months</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <button
                        className="text-[#7eecde] font-medium flex items-center"
                        onClick={() => togglePlanDetails("fiber-200")}
                        aria-expanded={expandedPlanDetails === "fiber-200"}
                      >
                        More plan details
                        {expandedPlanDetails === "fiber-200" ? (
                          <ChevronUp className="h-5 w-5 ml-1" />
                        ) : (
                          <ChevronDown className="h-5 w-5 ml-1" />
                        )}
                      </button>

                      {expandedPlanDetails === "fiber-200" && (
                        <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                          <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li>• 200 Mbps symmetrical download and upload speeds</li>
                            <li>• Unlimited data with no caps or overage fees</li>
                            <li>• Free Amazon eero Pro 6E router included</li>
                            <li>• No annual commitment required</li>
                            <li>• Professional installation included</li>
                            <li>• 24/7 technical support</li>
                            <li>• 99.9% uptime guarantee</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Fiber 500 Plan */}
                <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-lg border border-[#2d4471] transition-shadow hover:shadow-xl">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Fiber 500</h3>
                    <p className="text-[#7eecde] mb-4">500/500 Mbps</p>

                    <div className="flex items-baseline mb-1">
                      <span className="text-white text-2xl font-medium">$</span>
                      <span className="text-white text-7xl font-bold">39</span>
                      <div className="flex flex-col ml-1">
                        <span className="text-white text-xl font-bold">99</span>
                        <span className="text-[#7eecde] text-sm line-through">$54.99</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                    <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(54.99, 39.99)}/year</p>

                    <Button
                      className="w-full bg-[#00b7c3] hover:bg-[#00a0aa] text-white font-bold py-3 rounded-md mb-6"
                      onClick={() => openOrderForm("fiber-500")}
                    >
                      SELECT PLAN
                    </Button>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Supports multiple users and devices</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white">Amazon eero Pro 7 router included</span>
                          <sup>[1]</sup>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Upload speeds 5x faster than cable</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <button
                        className="text-[#7eecde] font-medium flex items-center"
                        onClick={() => togglePlanDetails("fiber-500")}
                        aria-expanded={expandedPlanDetails === "fiber-500"}
                      >
                        More plan details
                        {expandedPlanDetails === "fiber-500" ? (
                          <ChevronUp className="h-5 w-5 ml-1" />
                        ) : (
                          <ChevronDown className="h-5 w-5 ml-1" />
                        )}
                      </button>

                      {expandedPlanDetails === "fiber-500" && (
                        <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                          <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li>• 500 Mbps symmetrical download and upload speeds</li>
                            <li>• Unlimited data with no caps or overage fees</li>
                            <li>• Free Amazon eero Pro 7 router included</li>
                            <li>• No annual commitment required</li>
                            <li>• Professional installation included</li>
                            <li>• 24/7 technical support</li>
                            <li>• 99.9% uptime guarantee</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Fiber 1 Gig Plan - HIGHLIGHTED */}
                <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-xl border-2 border-[#ff003c] transition-shadow hover:shadow-2xl relative transform scale-105 z-10">
                  <div className="bg-[#ff003c] text-white py-2 px-4 text-center font-bold">MOST POPULAR</div>
                  <div className="absolute top-14 right-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-[#ffcc00] fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Fiber 1 Gig</h3>
                    <p className="text-[#7eecde] mb-4">1000/1000 Mbps</p>

                    <div className="flex items-baseline mb-1">
                      <span className="text-white text-2xl font-medium">$</span>
                      <span className="text-white text-7xl font-bold">49</span>
                      <div className="flex flex-col ml-1">
                        <span className="text-white text-xl font-bold">99</span>
                        <span className="text-[#7eecde] text-sm line-through">$74.99</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                    <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(74.99, 49.99)}/year</p>

                    <Button
                      className="w-full bg-[#ff003c] hover:bg-[#d10033] text-white font-bold py-3 rounded-md mb-6"
                      onClick={() => openOrderForm("fiber-1-gig")}
                    >
                      SELECT PLAN
                    </Button>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white font-medium">Ideal for smart homes with dozens of devices</span>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white">Amazon eero Pro 7 router included</span>
                          <sup>[1]</sup>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Upload speeds 10x faster than cable</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <button
                        className="text-[#7eecde] font-medium flex items-center"
                        onClick={() => togglePlanDetails("fiber-1-gig")}
                        aria-expanded={expandedPlanDetails === "fiber-1-gig"}
                      >
                        More plan details
                        {expandedPlanDetails === "fiber-1-gig" ? (
                          <ChevronUp className="h-5 w-5 ml-1" />
                        ) : (
                          <ChevronDown className="h-5 w-5 ml-1" />
                        )}
                      </button>

                      {expandedPlanDetails === "fiber-1-gig" && (
                        <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                          <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li>• 1000 Mbps symmetrical download and upload speeds</li>
                            <li>• Unlimited data with no caps or overage fees</li>
                            <li>• Free Amazon eero Pro 7 router included</li>
                            <li>• No annual commitment required</li>
                            <li>• Professional installation included</li>
                            <li>• 24/7 technical support</li>
                            <li>• 99.9% uptime guarantee</li>
                            <li>• Perfect for smart homes with multiple devices</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row of Plans - Residential */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Fiber 2 Gig Plan */}
                <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-lg border border-[#2d4471] transition-shadow hover:shadow-xl relative">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Fiber 2 Gig</h3>
                    <p className="text-[#7eecde] mb-4">2000/2000 Mbps</p>

                    <div className="flex items-baseline mb-1">
                      <span className="text-white text-2xl font-medium">$</span>
                      <span className="text-white text-7xl font-bold">64</span>
                      <div className="flex flex-col ml-1">
                        <span className="text-white text-xl font-bold">99</span>
                        <span className="text-[#7eecde] text-sm line-through">$109.99</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                    <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(109.99, 64.99)}/year</p>

                    <Button
                      className="w-full bg-[#00b7c3] hover:bg-[#00a0aa] text-white font-bold py-3 rounded-md mb-6"
                      onClick={() => openOrderForm("fiber-2-gig")}
                    >
                      SELECT PLAN
                    </Button>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Ultra-fast speeds for large smart homes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white">Amazon eero Pro 7 router included</span>
                          <sup>[1]</sup>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Upload speeds up to 10x faster than cable</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <button
                        className="text-[#7eecde] font-medium flex items-center"
                        onClick={() => togglePlanDetails("fiber-2-gig")}
                        aria-expanded={expandedPlanDetails === "fiber-2-gig"}
                      >
                        More plan details
                        {expandedPlanDetails === "fiber-2-gig" ? (
                          <ChevronUp className="h-5 w-5 ml-1" />
                        ) : (
                          <ChevronDown className="h-5 w-5 ml-1" />
                        )}
                      </button>

                      {expandedPlanDetails === "fiber-2-gig" && (
                        <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                          <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li>• 2000 Mbps symmetrical download and upload speeds</li>
                            <li>• Unlimited data with no caps or overage fees</li>
                            <li>• Free Amazon eero Pro 7 router included</li>
                            <li>• No annual commitment required</li>
                            <li>• Professional installation included</li>
                            <li>• 24/7 technical support</li>
                            <li>• 99.9% uptime guarantee</li>
                            <li>• Ideal for power users and large households</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Fiber 5 Gig Plan */}
                <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-lg border border-[#2d4471] transition-shadow hover:shadow-xl relative">
                  <div className="bg-[#00b7c3] text-white py-1 px-3 absolute right-0 top-0 font-medium">New!</div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Fiber 5 Gig</h3>
                    <p className="text-[#7eecde] mb-4">5000/5000 Mbps</p>

                    <div className="flex items-baseline mb-1">
                      <span className="text-white text-2xl font-medium">$</span>
                      <span className="text-white text-7xl font-bold">99</span>
                      <div className="flex flex-col ml-1">
                        <span className="text-white text-xl font-bold">99</span>
                        <span className="text-[#7eecde] text-sm line-through">$139.99</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                    <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(139.99, 99.99)}/year</p>

                    <Button
                      className="w-full bg-[#00b7c3] hover:bg-[#00a0aa] text-white font-bold py-3 rounded-md mb-6"
                      onClick={() => openOrderForm("fiber-5-gig")}
                    >
                      SELECT PLAN
                    </Button>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white">Wi-Fi 7</span>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white">Amazon eero Max 7 router included</span>
                          <sup>[1]</sup>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Upload speeds up to 25x faster than cable</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">$200 Visa® Reward Card</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <button
                        className="text-[#7eecde] font-medium flex items-center"
                        onClick={() => togglePlanDetails("fiber-5-gig")}
                        aria-expanded={expandedPlanDetails === "fiber-5-gig"}
                      >
                        More plan details
                        {expandedPlanDetails === "fiber-5-gig" ? (
                          <ChevronUp className="h-5 w-5 ml-1" />
                        ) : (
                          <ChevronDown className="h-5 w-5 ml-1" />
                        )}
                      </button>

                      {expandedPlanDetails === "fiber-5-gig" && (
                        <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                          <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li>• 5000 Mbps symmetrical download and upload speeds</li>
                            <li>• Unlimited data with no caps or overage fees</li>
                            <li>• Free Amazon eero Max 7 router included</li>
                            <li>• Wi-Fi 7 technology for ultimate wireless performance</li>
                            <li>• No annual commitment required</li>
                            <li>• Professional installation included</li>
                            <li>• 24/7 priority technical support</li>
                            <li>• 99.9% uptime guarantee</li>
                            <li>• $200 Visa® Reward Card</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Fiber 7 Gig Plan */}
                <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-lg border border-[#2d4471] transition-shadow hover:shadow-xl relative">
                  <div className="bg-[#ff003c] text-white py-1 px-3 absolute right-0 top-0 font-bold">NEW!</div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Fiber 7 Gig</h3>
                    <p className="text-[#7eecde] mb-4">7000/7000 Mbps</p>

                    <div className="flex items-baseline mb-1">
                      <span className="text-white text-2xl font-medium">$</span>
                      <span className="text-white text-7xl font-bold">109</span>
                      <div className="flex flex-col ml-1">
                        <span className="text-white text-xl font-bold">99</span>
                        <span className="text-[#7eecde] text-sm line-through">$309.99</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                    <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(309.99, 109.99)}/year</p>

                    <Button
                      className="w-full bg-[#00b7c3] hover:bg-[#00a0aa] text-white font-bold py-3 rounded-md mb-6"
                      onClick={() => openOrderForm("fiber-7-gig")}
                    >
                      SELECT PLAN
                    </Button>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white">Cutting-edge Wi-Fi 7 for ultimate performance</span>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">
                          <span className="text-white">Includes 2 Amazon eero Max 7 devices</span>
                          <sup>[1]</sup>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">Upload speeds up to 35x faster than cable</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <button
                        className="text-[#7eecde] font-medium flex items-center"
                        onClick={() => togglePlanDetails("fiber-7-gig")}
                        aria-expanded={expandedPlanDetails === "fiber-7-gig"}
                      >
                        More plan details
                        {expandedPlanDetails === "fiber-7-gig" ? (
                          <ChevronUp className="h-5 w-5 ml-1" />
                        ) : (
                          <ChevronDown className="h-5 w-5 ml-1" />
                        )}
                      </button>

                      {expandedPlanDetails === "fiber-7-gig" && (
                        <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                          <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li>• 7000 Mbps symmetrical download and upload speeds</li>
                            <li>• Unlimited data with no caps or overage fees</li>
                            <li>• Two Amazon eero Max 7 routers included</li>
                            <li>• Wi-Fi 7 technology with mesh network coverage</li>
                            <li>• No annual commitment required</li>
                            <li>• Professional installation included</li>
                            <li>• 24/7 priority technical support</li>
                            <li>• 99.9% uptime guarantee</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Business Plans Section - Update to match /business page
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Business Fiber 500M Plan */}
              <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-lg border border-[#2d4471] transition-shadow hover:shadow-xl">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">Business Fiber 500M</h3>
                  <p className="text-[#7eecde] mb-4">500/500 Mbps</p>

                  <div className="flex items-baseline mb-1">
                    <span className="text-white text-2xl font-medium">$</span>
                    <span className="text-white text-7xl font-bold">69</span>
                    <div className="flex flex-col ml-1">
                      <span className="text-white text-xl font-bold">99</span>
                      <span className="text-[#7eecde] text-sm line-through">$84.99</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                  <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(84.99, 69.99)}/year</p>

                  <Button
                    className="w-full bg-[#00b7c3] hover:bg-[#00a0aa] text-white font-bold py-3 rounded-md mb-6"
                    onClick={() => openOrderForm("business-fiber-500m")}
                  >
                    SELECT PLAN
                  </Button>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Ideal for small businesses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">
                        <span className="text-white">99.9% network reliability</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">$100 Visa® Reward Card</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <button
                      className="text-[#7eecde] font-medium flex items-center"
                      onClick={() => togglePlanDetails("business-fiber-500m")}
                      aria-expanded={expandedPlanDetails === "business-fiber-500m"}
                    >
                      More plan details
                      {expandedPlanDetails === "business-fiber-500m" ? (
                        <ChevronUp className="h-5 w-5 ml-1" />
                      ) : (
                        <ChevronDown className="h-5 w-5 ml-1" />
                      )}
                    </button>

                    {expandedPlanDetails === "business-fiber-500m" && (
                      <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                        <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                        <ul className="space-y-2 text-white/80 text-sm">
                          <li>• 500 Mbps symmetrical download and upload speeds</li>
                          <li>• Unlimited data with no caps or overage fees</li>
                          <li>• Business router included</li>
                          <li>• 99.9% network reliability</li>
                          <li>• 24/7 business support</li>
                          <li>• Static IP available (+$19.99/mo)</li>
                          <li>• Professional installation included</li>
                          <li>• Ideal for small businesses (1-10 employees)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Business Fiber 1 Gig Plan - HIGHLIGHTED */}
              <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-xl border-2 border-[#ff003c] transition-shadow hover:shadow-2xl relative transform scale-105 z-10">
                <div className="bg-[#ff003c] text-white py-2 px-4 text-center font-bold">MOST POPULAR</div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">Business Fiber 1 Gig</h3>
                  <p className="text-[#7eecde] mb-4">1000/1000 Mbps</p>

                  <div className="flex items-baseline mb-1">
                    <span className="text-white text-2xl font-medium">$</span>
                    <span className="text-white text-7xl font-bold">94</span>
                    <div className="flex flex-col ml-1">
                      <span className="text-white text-xl font-bold">99</span>
                      <span className="text-[#7eecde] text-sm line-through">$109.99</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                  <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(109.99, 94.99)}/year</p>

                  <Button
                    className="w-full bg-[#ff003c] hover:bg-[#d10033] text-white font-bold py-3 rounded-md mb-6"
                    onClick={() => openOrderForm("business-fiber-1-gig")}
                  >
                    SELECT PLAN
                  </Button>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">
                        <span className="text-white font-medium">Perfect for medium-sized businesses</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">
                        <span className="text-white">99.9% network reliability</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">$200 Visa® Reward Card</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <button
                      className="text-[#7eecde] font-medium flex items-center"
                      onClick={() => togglePlanDetails("business-fiber-1-gig")}
                      aria-expanded={expandedPlanDetails === "business-fiber-1-gig"}
                    >
                      More plan details
                      {expandedPlanDetails === "business-fiber-1-gig" ? (
                        <ChevronUp className="h-5 w-5 ml-1" />
                      ) : (
                        <ChevronDown className="h-5 w-5 ml-1" />
                      )}
                    </button>

                    {expandedPlanDetails === "business-fiber-1-gig" && (
                      <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                        <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                        <ul className="space-y-2 text-white/80 text-sm">
                          <li>• 1000 Mbps symmetrical download and upload speeds</li>
                          <li>• Unlimited data with no caps or overage fees</li>
                          <li>• Business router included</li>
                          <li>• 99.9% network reliability</li>
                          <li>• 24/7 priority business support</li>
                          <li>• Static IP available (+$19.99/mo)</li>
                          <li>• $200 Visa® Reward Card for new business customers</li>
                          <li>• Professional installation included</li>
                          <li>• Perfect for medium-sized businesses (10-50 employees)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Business Fiber 2 Gig Plan */}
              <div className="bg-gradient-to-b from-[#1d3461] to-[#0a192f] rounded-xl overflow-hidden shadow-lg border border-[#2d4471] transition-shadow hover:shadow-xl relative">
                <div className="bg-[#00b7c3] text-white py-1 px-3 absolute right-0 top-0 font-medium">Best Value</div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">Business Fiber 2 Gig</h3>
                  <p className="text-[#7eecde] mb-4">2000/2000 Mbps</p>

                  <div className="flex items-baseline mb-1">
                    <span className="text-white text-2xl font-medium">$</span>
                    <span className="text-white text-7xl font-bold">129</span>
                    <div className="flex flex-col ml-1">
                      <span className="text-white text-xl font-bold">99</span>
                      <span className="text-[#7eecde] text-sm line-through">$144.99</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-2">per month with Auto Pay</p>
                  <p className="text-[#ff003c] font-medium mb-6">Save ${calculateSavings(144.99, 129.99)}/year</p>

                  <Button
                    className="w-full bg-[#00b7c3] hover:bg-[#00a0aa] text-white font-bold py-3 rounded-md mb-6"
                    onClick={() => openOrderForm("business-fiber-2-gig")}
                  >
                    SELECT PLAN
                  </Button>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">
                        <span className="text-white">Ideal for large businesses</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">
                        <span className="text-white">1 Static IP included</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7eecde] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">$300 Visa® Reward Card</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <button
                      className="text-[#7eecde] font-medium flex items-center"
                      onClick={() => togglePlanDetails("business-fiber-2-gig")}
                      aria-expanded={expandedPlanDetails === "business-fiber-2-gig"}
                    >
                      More plan details
                      {expandedPlanDetails === "business-fiber-2-gig" ? (
                        <ChevronUp className="h-5 w-5 ml-1" />
                      ) : (
                        <ChevronDown className="h-5 w-5 ml-1" />
                      )}
                    </button>

                    {expandedPlanDetails === "business-fiber-2-gig" && (
                      <div className="mt-4 bg-[#0a192f] p-4 rounded-lg border border-[#2d4471]">
                        <h4 className="font-bold text-white mb-2">Plan Details:</h4>
                        <ul className="space-y-2 text-white/80 text-sm">
                          <li>• 2000 Mbps symmetrical download and upload speeds</li>
                          <li>• Unlimited data with no caps or overage fees</li>
                          <li>• Advanced business router included</li>
                          <li>• 99.9% network reliability</li>
                          <li>• 24/7 priority business support</li>
                          <li>• 1 Static IP included</li>
                          <li>• $300 Visa® Reward Card</li>
                          <li>• Professional installation included</li>
                          <li>• Ideal for large businesses (50-100 employees)</li>
                          <li>• Premium SLA</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Plan Comparison Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Compare Frontier Fiber Internet Plans</h3>
            <PlanComparisonTable className="bg-[#1d3461] rounded-lg overflow-hidden" />
          </div>

          {/* Why Choose Frontier Fiber */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose Frontier Fiber Internet?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1d3461] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-[#7eecde] mr-2" />
                  Symmetrical Speeds
                </h4>
                <p className="text-white/80">
                  Unlike cable internet that offers faster download than upload speeds, Frontier Fiber provides the same
                  blazing-fast speed in both directions. This means you can upload large files, video conference, and
                  stream content just as quickly as you download.
                </p>
              </div>

              <div className="bg-[#1d3461] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Wifi className="h-6 w-6 text-[#7eecde] mr-2" />
                  Premium Wi-Fi Equipment
                </h4>
                <p className="text-white/80">
                  Every Frontier Fiber plan includes a premium Wi-Fi router at no additional cost. Our higher-tier plans
                  include the latest Wi-Fi 7 technology with the Amazon eero Max 7, providing whole-home coverage and
                  support for dozens of connected devices.
                </p>
              </div>

              <div className="bg-[#1d3461] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-[#7eecde] mr-2" />
                  No Data Caps
                </h4>
                <p className="text-white/80">
                  Stream, game, video conference, and download as much as you want without worrying about data caps or
                  overage charges. All Frontier Fiber plans come with truly unlimited data, unlike many cable providers
                  who impose monthly limits.
                </p>
              </div>

              <div className="bg-[#1d3461] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Award className="h-6 w-6 text-[#7eecde] mr-2" />
                  No Annual Commitment
                </h4>
                <p className="text-white/80">
                  Frontier Fiber plans don't require long-term contracts. We're confident you'll love our service, so we
  don't lock you in. We're confident in our service quality with 99.9% uptime reliability and award-winning customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-[#1d3461] to-[#0a192f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is fiber internet and how is it different from cable?",
                answer:
                  "Fiber internet uses fiber-optic cables to transmit data using light signals, resulting in faster speeds and more reliable connections than traditional copper-based cable internet. Frontier Fiber offers symmetrical upload and download speeds, meaning you can upload large files just as quickly as you download them. Unlike cable, fiber maintains consistent speeds even during peak usage times and is less susceptible to interference or weather-related outages.",
              },
              {
                question: "Do I need special equipment for Frontier Fiber?",
                answer:
                  "Yes, fiber internet requires an Optical Network Terminal (ONT) to convert light signals to electrical signals. Frontier will install this equipment during your installation appointment at no additional cost. We also provide a free Wi-Fi router with all plans to ensure you get the best possible Wi-Fi coverage throughout your home. Higher-tier plans include premium Wi-Fi 7 routers for ultimate performance.",
              },
              {
                question: "Are there data caps on Frontier Fiber plans?",
                answer:
                  "No, all Frontier Fiber plans come with unlimited data. You can stream, game, video conference, and download as much as you want without worrying about data caps or overage charges. This is a key advantage of Frontier Fiber compared to many cable internet providers who impose monthly data limits.",
              },
              {
                question: "What happens after the 12-month promotional pricing?",
                answer:
                  "After the 12-month promotional period, your plan will convert to the then-current regular price. We will notify you before any price changes take effect. You can always contact our customer service team to explore current offers or adjust your plan if needed.",
              },
              {
                question: "Is professional installation required?",
                answer:
                  "Yes, professional installation is required for Frontier Fiber Internet. Our technicians will install the necessary equipment, ensure your connection is working properly, and help set up your Wi-Fi network. The good news is that installation is currently included at no additional cost as part of our special promotion.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-[#1d3461] rounded-lg overflow-hidden border border-[#2d4471] transition-all ${
                  expandedFaq === index ? "shadow-lg" : ""
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-[#2d4471] transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaq === index}
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#7eecde] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#7eecde] flex-shrink-0" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all ${expandedFaq === index ? "max-h-96 p-4" : "max-h-0"}`}>
                  <p className="text-white/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-[#ff003c] hover:bg-[#d10033] text-white">
              <Link href="/support/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Check Availability Section */}
      <section className="py-16 bg-[#0a192f]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Check Frontier Fiber Availability In Your Area</h2>
            <p className="text-lg text-white/80 mb-8">
              Frontier is rapidly expanding its fiber network. Enter your address or ZIP code to see if Frontier Fiber
              is available at your location.
            </p>

            <ZipCodeCheck />
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-[#0a192f] border-t border-[#2d4471]">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-bold mb-4 text-white">Legal Disclaimer</h3>
          <div className="text-sm text-white/70 space-y-2">
            <p>
              <sup>[1]</sup> Amazon eero device(s) provided to new Frontier Fiber Internet customers and is/are yours to
              keep. Model varies by plan.
            </p>
            <p>
              <sup>[2]</sup> Based on comparison of Frontier Fiber 500 Mbps upload speed to Xfinity cable 100 Mbps
              upload speed.
            </p>
            <p>
              <sup>[3]</sup> $200 Visa® Reward Card offer available to new Frontier Fiber Internet customers who order
              Fiber 1 Gig service. Allow 8-10 weeks for delivery after service activation.
            </p>
            <p>
              <sup>[4]</sup> Based on comparison of Frontier Fiber 1 Gig upload speed to Xfinity cable 100 Mbps upload
              speed.
            </p>
            <p>
              <sup>[5]</sup> Based on comparison of Frontier Fiber 2 Gig upload speed to Xfinity cable 100 Mbps upload
              speed.
            </p>
            <p className="mt-4">
              Prices shown require enrollment in Auto Pay. Taxes, fees, and other charges apply. Subject to
              availability. Cannot be combined with other offers. Other restrictions, terms, and conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form Modal */}
      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        preSelectedPlan={selectedPlan}
        orderType={activeTab === "residential" ? "residential" : "business"}
      />
    </div>
  )
}
