"use client"
import { Button } from "@/components/ui/button"
import { Check, Wifi, Shield, Zap, Users } from "lucide-react"
import { useState } from "react"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"

export default function BusinessInternet() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  const openOrderForm = (plan: string) => {
    setSelectedPlan(plan)
    setIsOrderFormOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-[#0a192f] text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ff6b6b]">Frontier Business Internet</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#1d2d50] p-6 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Wifi className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">High-Speed Fiber Internet</h3>
                <p>Get blazing-fast speeds up to 7 Gbps for seamless business operations.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Shield className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Enhanced Security</h3>
                <p>Protect your business with advanced security features and optional managed services.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Zap className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">99.99% Uptime Guarantee</h3>
                <p>Ensure your business stays connected with our reliable network.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Scalable Solutions</h3>
                <p>Easily upgrade your plan as your business grows and needs change.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-[#1d2d50] p-6 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Frontier Business Internet?</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>Dedicated business support 24/7/365</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>No data caps or throttling</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>Static IP addresses available</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>Bundling options with voice and managed services</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>Flexible contract terms</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Ready to Supercharge Your Business?</h2>
        <p className="mb-8">Choose the perfect Frontier Business Internet plan for your company today.</p>
        <Button
          asChild
          size="lg"
          className="bg-[#e10600] hover:bg-[#ff6b6b] text-white"
          onClick={() => openOrderForm("Business Fiber 1 Gig")}
        >
          Get Business Internet
        </Button>
      </div>

      <div className="bg-[#f8f9fa] p-8 rounded-lg text-[#0a192f]">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What speeds are available for business internet?</h3>
            <p>
              Frontier offers business internet speeds ranging from 500 Mbps to 5 Gbps, depending on your location and
              needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Is there a difference between residential and business internet?</h3>
            <p>
              Yes, business internet typically offers features like static IP addresses, enhanced security, and
              dedicated support that are crucial for business operations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I bundle business internet with other services?</h3>
            <p>
              Frontier offers bundling options that include business phone, managed IT services, and more to create a
              comprehensive solution for your business.
            </p>
          </div>
        </div>
      </div>
      <BusinessOrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        preSelectedPlan={selectedPlan}
      />
    </div>
  )
}
