"use client"
import { Button } from "@/components/ui/button"
import { Check, Phone, Globe, Headphones, Settings } from "lucide-react"
import { useState } from "react"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"

export default function BusinessPhone() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  const openOrderForm = (plan: string) => {
    setSelectedPlan(plan)
    setIsOrderFormOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-[#0a192f] text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ff6b6b]">Frontier Business Phone</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#1d2d50] p-6 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Crystal-Clear Voice Quality</h3>
                <p>Experience HD voice quality for all your business calls.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Globe className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Unlimited Nationwide Calling</h3>
                <p>Make unlimited calls across the US and to select international destinations.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Headphones className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Advanced Call Features</h3>
                <p>Enjoy features like call forwarding, voicemail-to-email, and auto-attendant.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Settings className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Scalable Solutions</h3>
                <p>Easily add lines or upgrade your plan as your business grows.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-[#1d2d50] p-6 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Frontier Business Phone?</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>Reliable service with 99.9% uptime guarantee</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>Flexible plans to fit businesses of all sizes</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>Integration with Frontier Business Internet for optimal performance</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>24/7 dedicated business support</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-[#64ffda]" />
              <span>Easy setup and management through online portal</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Ready to Upgrade Your Business Communications?</h2>
        <p className="mb-8">Choose a Frontier Business Phone plan that fits your company's needs.</p>
        <Button
          asChild
          size="lg"
          className="bg-[#e10600] hover:bg-[#ff6b6b] text-white"
          onClick={() => openOrderForm("Business Voice")}
        >
          Get Business Phone
        </Button>
      </div>

      <div className="bg-[#f8f9fa] p-8 rounded-lg text-[#0a192f]">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Can I keep my current business phone number?</h3>
            <p>Yes, in most cases you can transfer your existing business phone number to Frontier.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need special phones for Frontier Business Phone service?</h3>
            <p>
              Frontier offers a range of compatible IP phones, but many existing phone systems can work with our
              service. Our team can assess your needs during setup.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Is international calling included?</h3>
            <p>
              Unlimited calling to select international destinations is included in some plans. Additional international
              calling packages are available for businesses with global needs.
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
