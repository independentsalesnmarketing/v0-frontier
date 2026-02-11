"use client"
import { Button } from "@/components/ui/button"
import { Shield, Cloud, Monitor, HardDrive } from "lucide-react"
import { useState } from "react"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"

export default function ManagedServices() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  const openOrderForm = (plan: string) => {
    setSelectedPlan(plan)
    setIsOrderFormOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-[#0a192f] text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ff6b6b]">Frontier Managed Services</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#1d2d50] p-6 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4">Our Managed Services</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Shield className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Managed Security</h3>
                <p>Protect your business with advanced threat detection and prevention.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Cloud className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Cloud Services</h3>
                <p>Scalable cloud solutions for storage, backup, and application hosting.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Monitor className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Network Monitoring</h3>
                <p>24/7 monitoring and management of your network infrastructure.</p>
              </div>
            </li>
            <li className="flex items-start">
              <HardDrive className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Data Backup & Recovery</h3>
                <p>Ensure business continuity with robust backup and recovery solutions.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-[#1d2d50] p-6 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Frontier Managed Services</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#64ffda] rounded-full mr-2"></span>
              <span>Reduce IT costs and complexity</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#64ffda] rounded-full mr-2"></span>
              <span>Improve operational efficiency</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#64ffda] rounded-full mr-2"></span>
              <span>Access to expert IT professionals</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#64ffda] rounded-full mr-2"></span>
              <span>Stay focused on your core business</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#64ffda] rounded-full mr-2"></span>
              <span>Scalable solutions that grow with your business</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Ready to Optimize Your IT Infrastructure?</h2>
        <p className="mb-8">
          Let Frontier's expert team manage your technology so you can focus on growing your business.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#e10600] hover:bg-[#ff6b6b] text-white"
          onClick={() => openOrderForm("Managed Services")}
        >
          Get Managed Services
        </Button>
      </div>

      <div className="bg-[#f8f9fa] p-8 rounded-lg text-[#0a192f]">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What size businesses can benefit from Frontier Managed Services?</h3>
            <p>
              Our managed services are scalable and can benefit businesses of all sizes, from small startups to large
              enterprises.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How quickly can Frontier implement managed services for my business?</h3>
            <p>
              Implementation timelines vary depending on the services required and the complexity of your current
              infrastructure. Our team works efficiently to minimize disruption to your business operations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I customize the managed services package for my specific needs?</h3>
            <p>
              We offer flexible solutions that can be tailored to meet your unique business requirements and IT goals.
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
