"use client"

import type React from "react"

import { useState, useRef } from "react"
import {
  X,
  ChevronRight,
  ChevronLeft,
  User,
  Mail,
  Phone,
  Calendar,
  Home,
  MapPin,
  Loader2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useMediaQuery } from "@/hooks/use-mobile"

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
  preSelectedPlan?: string
  orderType: "residential" | "business"
}

export function OrderForm({ isOpen, onClose, preSelectedPlan, orderType }: OrderFormProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    aptUnit: "",
    city: "",
    state: "",
    zipCode: "",
    movedLastYear: false,
    previousAddress: "",
    previousCity: "",
    previousState: "",
    previousZipCode: "",
    internetPlan: preSelectedPlan ? preSelectedPlan.toLowerCase().replace(" ", "") : "",
    phoneService: false,
    netflixBundle: false,
    wholeHomeWiFi: "none" as "none" | "standard",
    totalShield: false,
    unbreakableWiFi: false,
    identityProtection: false,
    premiumTechPro: false,
    wifiSecurity: "none",
    digitalVoice: "no",
    showValueAddedServices: false,
    showDigitalVoice: false,
  })

  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Form submission started")

    try {
      // Create a hidden form to submit to Google Apps Script
      const form = document.createElement("form")
      form.method = "POST"
      form.action =
        "https://script.google.com/macros/s/AKfycbyWQRdA-mfqRnkCWmGDlgyzeI6SOu7P-EeA8Ypt61dIME7gZELySKtRw_s_Wf6HVJCX/exec"

      // Format data to match the expected structure in the Google Apps Script
      const dataToSend = {
        order: orderType === "residential" ? "Residential" : "Business",
        firstName: formData.firstName,
        lastName: formData.lastName,
        serviceAddress: `${formData.address}${formData.aptUnit ? `, ${formData.aptUnit}` : ""}, ${formData.city}, ${formData.state}`,
        zipCode: formData.zipCode,
        phoneNumber: formData.phone,
        email: formData.email,
        dateOfBirth: formData.dateOfBirth,
        lastFourSSN: "", // Not collected in our form
        preferredInstallDate: "", // Not collected in our form
        preferredInstallTime: "", // Not collected in our form
        promoCode: "", // Not collected in our form
        addPhoneService: formData.phoneService ? "Yes" : "No",
        // Additional fields for our form
        internetPlan: formData.internetPlan,
        netflixBundle: formData.netflixBundle ? "Yes" : "No",
        wholeHomeWiFi: formData.wholeHomeWiFi,
        movedLastYear: formData.movedLastYear ? "Yes" : "No",
        previousAddress: formData.movedLastYear ? formData.previousAddress : "",
        previousCity: formData.movedLastYear ? formData.previousCity : "",
        previousState: formData.movedLastYear ? formData.previousState : "",
        previousZipCode: formData.movedLastYear ? formData.previousZipCode : "",
        totalShield: formData.totalShield ? "Yes" : "No",
        unbreakableWiFi: formData.unbreakableWiFi ? "Yes" : "No",
        identityProtection: formData.identityProtection ? "Yes" : "No",
        premiumTechPro: formData.premiumTechPro ? "Yes" : "No",
        wifiSecurity: formData.wifiSecurity,
        digitalVoice: formData.digitalVoice,
      }

      // Add a hidden input for the JSON data
      const hiddenField = document.createElement("input")
      hiddenField.type = "hidden"
      hiddenField.name = "data"
      hiddenField.value = JSON.stringify(dataToSend)
      form.appendChild(hiddenField)

      // Create a hidden iframe to prevent page navigation
      const iframe = document.createElement("iframe")
      iframe.name = "hidden_iframe"
      iframe.style.display = "none"
      document.body.appendChild(iframe)
      form.target = "hidden_iframe"

      // Add the form to the document and submit it
      document.body.appendChild(form)
      form.submit()
      console.log("Form submitted to Google Apps Script")

      // Always show thank you message after a fixed delay
      setTimeout(() => {
        console.log("Showing thank you message")
        setIsSubmitting(false)
        setShowThankYou(true)

        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          address: "",
          aptUnit: "",
          city: "",
          state: "",
          zipCode: "",
          movedLastYear: false,
          previousAddress: "",
          previousCity: "",
          previousState: "",
          previousZipCode: "",
          internetPlan: preSelectedPlan ? preSelectedPlan.toLowerCase().replace(" ", "") : "",
          phoneService: false,
          netflixBundle: false,
          wholeHomeWiFi: "none",
          totalShield: false,
          unbreakableWiFi: false,
          identityProtection: false,
          premiumTechPro: false,
          wifiSecurity: "none",
          digitalVoice: "no",
          showValueAddedServices: false,
          showDigitalVoice: false,
        })
        setStep(1)

        // Close the thank you message after 5 seconds
        setTimeout(() => {
          console.log("Closing thank you message")
          setShowThankYou(false)
          onClose()

          // Clean up the form and iframe
          if (document.body.contains(form)) {
            document.body.removeChild(form)
          }
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe)
          }
        }, 5000)
      }, 2000) // Show thank you message after 2 seconds
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      alert("There was an error submitting your order. Please try again.")
    }
  }

  // Update the nextStep function to ensure smooth scrolling
  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStep((prev) => Math.min(prev + 1, 3))
    // Scroll to top when changing steps with smooth behavior
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Update the prevStep function similarly
  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStep((prev) => Math.max(prev - 1, 1))
    // Scroll to top when changing steps with smooth behavior
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (!isOpen) return null

  // Thank you message overlay
  if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
        <div className="bg-[#1d3461] rounded-lg p-6 md:p-8 w-full max-w-md text-center text-white border border-[#2a4580] shadow-xl">
          <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mx-auto mb-3 md:mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-base md:text-lg mb-3 md:mb-4">Your order has been submitted successfully.</p>
          <p className="text-sm md:text-base text-gray-300">We will contact you shortly to confirm the details.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50 overflow-y-auto p-2 md:p-4">
      <div className="bg-[#1d3461] rounded-lg w-full max-w-2xl text-white border border-[#2a4580] shadow-xl relative my-4 md:my-10">
        <Button
          variant="ghost"
          size={isMobile ? "default" : "icon"}
          onClick={onClose}
          className="absolute right-2 top-2 z-20 text-white hover:bg-[#1d3461]/50 rounded-full bg-[#1d3461] border border-[#2a4580] p-2 md:p-2"
        >
          <X className="h-5 w-5 md:h-6 md:w-6" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Progress Indicator */}
        <div className="pt-12 md:pt-10 px-3 md:px-5 pb-3 md:pb-5 border-b border-[#2a4580]">
          <div className="flex items-center justify-between">
            <div className={`flex flex-col items-center ${step >= 1 ? "text-[#00b7c3]" : "text-gray-500"}`}>
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-[#00b7c3]/20 text-[#00b7c3]" : "bg-gray-700 text-gray-500"
                } font-bold text-sm md:text-base`}
              >
                1
              </div>
              <span className="text-xs md:text-sm mt-1 text-gray-300">Address</span>
            </div>
            <div className={`flex-1 h-1 mx-1 md:mx-2 ${step >= 2 ? "bg-[#00b7c3]" : "bg-gray-700"}`}></div>
            <div className={`flex flex-col items-center ${step >= 2 ? "text-[#00b7c3]" : "text-gray-500"}`}>
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-[#00b7c3]/20 text-[#00b7c3]" : "bg-gray-700 text-gray-500"
                } font-bold text-sm md:text-base`}
              >
                2
              </div>
              <span className="text-xs md:text-sm mt-1 text-gray-300">Plan</span>
            </div>
            <div className={`flex-1 h-1 mx-1 md:mx-2 ${step >= 3 ? "bg-[#00b7c3]" : "bg-gray-700"}`}></div>
            <div className={`flex flex-col items-center ${step >= 3 ? "text-[#00b7c3]" : "text-gray-500"}`}>
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-[#00b7c3]/20 text-[#00b7c3]" : "bg-gray-700 text-gray-500"
                } font-bold text-sm md:text-base`}
              >
                3
              </div>
              <span className="text-xs md:text-sm mt-1 text-gray-300">Personal Info</span>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="p-4 md:p-6">
          {step === 1 && (
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Address Information</h3>
              <div>
                <Label htmlFor="address" className="text-gray-300 text-sm md:text-base">
                  Street Address
                </Label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="pl-9 bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                    placeholder="123 Main St"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="aptUnit" className="text-gray-300 text-sm md:text-base">
                  Apt/Unit (optional)
                </Label>
                <Input
                  id="aptUnit"
                  name="aptUnit"
                  value={formData.aptUnit}
                  onChange={handleChange}
                  placeholder="Apt 4B"
                  className="bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <Label htmlFor="city" className="text-gray-300 text-sm md:text-base">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="New York"
                    className="bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-gray-300 text-sm md:text-base">
                    State
                  </Label>
                  <Select
                    name="state"
                    value={formData.state}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, state: value }))}
                  >
                    <SelectTrigger className="bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a1e3c] border-[#2a4580] text-white max-h-[40vh]">
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      <SelectItem value="AZ">Arizona</SelectItem>
                      <SelectItem value="AR">Arkansas</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="CO">Colorado</SelectItem>
                      <SelectItem value="CT">Connecticut</SelectItem>
                      <SelectItem value="DE">Delaware</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                      <SelectItem value="GA">Georgia</SelectItem>
                      <SelectItem value="HI">Hawaii</SelectItem>
                      <SelectItem value="ID">Idaho</SelectItem>
                      <SelectItem value="IL">Illinois</SelectItem>
                      <SelectItem value="IN">Indiana</SelectItem>
                      <SelectItem value="IA">Iowa</SelectItem>
                      <SelectItem value="KS">Kansas</SelectItem>
                      <SelectItem value="KY">Kentucky</SelectItem>
                      <SelectItem value="LA">Louisiana</SelectItem>
                      <SelectItem value="ME">Maine</SelectItem>
                      <SelectItem value="MD">Maryland</SelectItem>
                      <SelectItem value="MA">Massachusetts</SelectItem>
                      <SelectItem value="MI">Michigan</SelectItem>
                      <SelectItem value="MN">Minnesota</SelectItem>
                      <SelectItem value="MS">Mississippi</SelectItem>
                      <SelectItem value="MO">Missouri</SelectItem>
                      <SelectItem value="MT">Montana</SelectItem>
                      <SelectItem value="NE">Nebraska</SelectItem>
                      <SelectItem value="NV">Nevada</SelectItem>
                      <SelectItem value="NH">New Hampshire</SelectItem>
                      <SelectItem value="NJ">New Jersey</SelectItem>
                      <SelectItem value="NM">New Mexico</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="NC">North Carolina</SelectItem>
                      <SelectItem value="ND">North Dakota</SelectItem>
                      <SelectItem value="OH">Ohio</SelectItem>
                      <SelectItem value="OK">Oklahoma</SelectItem>
                      <SelectItem value="OR">Oregon</SelectItem>
                      <SelectItem value="PA">Pennsylvania</SelectItem>
                      <SelectItem value="RI">Rhode Island</SelectItem>
                      <SelectItem value="SC">South Carolina</SelectItem>
                      <SelectItem value="SD">South Dakota</SelectItem>
                      <SelectItem value="TN">Tennessee</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      <SelectItem value="UT">Utah</SelectItem>
                      <SelectItem value="VT">Vermont</SelectItem>
                      <SelectItem value="VA">Virginia</SelectItem>
                      <SelectItem value="WA">Washington</SelectItem>
                      <SelectItem value="WV">West Virginia</SelectItem>
                      <SelectItem value="WI">Wisconsin</SelectItem>
                      <SelectItem value="WY">Wyoming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="zipCode" className="text-gray-300 text-sm md:text-base">
                  ZIP Code
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="pl-9 bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                    placeholder="12345"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <Checkbox
                  id="movedLastYear"
                  checked={formData.movedLastYear}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, movedLastYear: checked as boolean }))}
                  className="border-[#2a4580] data-[state=checked]:bg-[#da202c] data-[state=checked]:border-[#da202c]"
                />
                <Label htmlFor="movedLastYear" className="text-gray-300 text-sm md:text-base">
                  I have moved in the last year
                </Label>
              </div>
              {formData.movedLastYear && (
                <div className="space-y-3 bg-[#0a1e3c]/50 p-3 md:p-4 rounded-lg mt-3 md:mt-4 border border-[#2a4580]">
                  <h4 className="font-semibold text-white text-sm md:text-base">Previous Address</h4>
                  <Input
                    id="previousAddress"
                    name="previousAddress"
                    value={formData.previousAddress}
                    onChange={handleChange}
                    placeholder="Previous Address"
                    className="bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                  />
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <Input
                      id="previousCity"
                      name="previousCity"
                      value={formData.previousCity}
                      onChange={handleChange}
                      placeholder="Previous City"
                      className="bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                    />
                    <Input
                      id="previousState"
                      name="previousState"
                      value={formData.previousState}
                      onChange={handleChange}
                      placeholder="Previous State"
                      className="bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                    />
                  </div>
                  <Input
                    id="previousZipCode"
                    name="previousZipCode"
                    value={formData.previousZipCode}
                    onChange={handleChange}
                    placeholder="Previous ZIP Code"
                    className="bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                  />
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Choose Your Internet Plan</h3>
              <div className="space-y-3 md:space-y-4">
                {isMobile ? (
                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="mobilePlanSelect" className="text-white text-sm md:text-base">
                      Select Your Plan
                    </Label>
                    <Select
                      value={formData.internetPlan}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, internetPlan: value }))}
                    >
                      <SelectTrigger className="bg-[#0a1e3c] border-[#2a4580] text-white w-full text-sm md:text-base h-9 md:h-10">
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a1e3c] border-[#2a4580] text-white">
                        <SelectItem value="fiber200">
                          <div className="flex justify-between items-center w-full">
                            <span>Fiber 200 (200/200 Mbps)</span>
                            <span className="text-[#00b7c3] font-bold">$29.99/mo</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="fiber500">
                          <div className="flex justify-between items-center w-full">
                            <span>Fiber 500 (500/500 Mbps)</span>
                            <span className="text-[#00b7c3] font-bold">$39.99/mo</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="fiber1gig">
                          <div className="flex justify-between items-center w-full">
                            <span>Fiber 1 Gig (1000/1000 Mbps)</span>
                            <span className="text-[#00b7c3] font-bold">$49.99/mo</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="fiber2gig">
                          <div className="flex justify-between items-center w-full">
                            <span>Fiber 2 Gig (2000/2000 Mbps)</span>
                            <span className="text-[#00b7c3] font-bold">$64.99/mo</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="fiber5gig">
                          <div className="flex justify-between items-center w-full">
                            <span>Fiber 5 Gig (5000/5000 Mbps)</span>
                            <span className="text-[#00b7c3] font-bold">$99.99/mo</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="fiber7gig">
                          <div className="flex justify-between items-center w-full">
                            <span>Fiber 7 Gig (7000/7000 Mbps)</span>
                            <span className="text-[#00b7c3] font-bold">$109.99/mo</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {formData.internetPlan && (
                      <div className="mt-3 p-3 md:p-4 bg-[#0a1e3c]/70 border border-[#2a4580] rounded-lg">
                        <div className="text-base md:text-lg font-semibold text-white">
                          Selected Plan: {formData.internetPlan.replace("fiber", "Fiber ").replace("gig", " Gig")}
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-[#00b7c3] mt-1">
                          $
                          {{
                            fiber200: "29.99",
                            fiber500: "39.99",
                            fiber1gig: "49.99",
                            fiber2gig: "64.99",
                            fiber5gig: "99.99",
                            fiber7gig: "109.99",
                          }[formData.internetPlan] || "0.00"}
                          /mo
                        </div>
                        <div className="text-xs md:text-sm text-gray-400 mt-1">
                          {{
                            fiber200: "200/200 Mbps",
                            fiber500: "500/500 Mbps",
                            fiber1gig: "1000/1000 Mbps",
                            fiber2gig: "2000/2000 Mbps",
                            fiber5gig: "5000/5000 Mbps",
                            fiber7gig: "7000/7000 Mbps",
                          }[formData.internetPlan] || ""}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <RadioGroup
                    value={formData.internetPlan}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, internetPlan: value }))}
                    className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-3"
                  >
                    {[
                      { id: "fiber200", name: "Fiber 200", speed: "200/200 Mbps", price: 29.99 },
                      { id: "fiber500", name: "Fiber 500", speed: "500/500 Mbps", price: 39.99 },
                      { id: "fiber1gig", name: "Fiber 1 Gig", speed: "1000/1000 Mbps", price: 49.99 },
                      { id: "fiber2gig", name: "Fiber 2 Gig", speed: "2000/2000 Mbps", price: 64.99 },
                      { id: "fiber5gig", name: "Fiber 5 Gig", speed: "5000/5000 Mbps", price: 99.99 },
                      { id: "fiber7gig", name: "Fiber 7 Gig", speed: "7000/7000 Mbps", price: 109.99 },
                    ].map((plan) => (
                      <div key={plan.id} className="relative">
                        <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                        <Label
                          htmlFor={plan.id}
                          className="flex flex-col h-full p-3 md:p-4 border rounded-lg bg-[#0a1e3c] border-[#2a4580] peer-data-[state=checked]:border-[#00b7c3] peer-data-[state=checked]:bg-[#00b7c3]/10 hover:bg-[#152a4d] hover:border-[#3a5590] transition-all cursor-pointer"
                        >
                          <span className="text-base md:text-lg font-semibold text-white">{plan.name}</span>
                          <span className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{plan.speed}</span>
                          <span className="text-lg md:text-2xl font-bold text-[#00b7c3]">
                            ${plan.price}
                            <span className="text-xs md:text-sm font-normal">/mo</span>
                          </span>
                          <span className="absolute top-2 right-2 md:top-3 md:right-3 text-[#00b7c3] opacity-0 peer-data-[state=checked]:opacity-100">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
                          </span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </div>

              <Separator className="my-4 md:my-6 bg-[#2a4580]" />

              <div className="space-y-3 md:space-y-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-[#0a1e3c] border border-[#2a4580] rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, showValueAddedServices: !prev.showValueAddedServices }))
                      }
                      className="w-full flex justify-between items-center p-3 text-left focus:outline-none"
                    >
                      <h4 className="font-semibold text-white text-sm md:text-base">Value Added Services</h4>
                      <span className="text-white">
                        {formData.showValueAddedServices ? (
                          <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />
                        ) : (
                          <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                        )}
                      </span>
                    </button>

                    {formData.showValueAddedServices && (
                      <div className="p-3 border-t border-[#2a4580] space-y-3">
                        {/* Total Shield */}
                        <div className="relative group">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="totalShield"
                              checked={formData.totalShield}
                              onCheckedChange={(checked) =>
                                setFormData((prev) => ({ ...prev, totalShield: checked as boolean }))
                              }
                              className="border-white data-[state=checked]:bg-[#00b7c3] data-[state=checked]:border-[#00b7c3] h-4 w-4 md:h-5 md:w-5"
                            />
                            <div>
                              <Label
                                htmlFor="totalShield"
                                className="text-gray-300 flex items-center text-xs md:text-sm"
                              >
                                Total Shield
                                <span className="ml-1 text-[#00b7c3]">$10.00/mo</span>
                                <span className="ml-1 md:ml-2 text-gray-400 text-xs cursor-help">ⓘ</span>
                              </Label>
                            </div>
                          </div>
                          <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-2 md:p-3 rounded-md shadow-lg w-64 md:w-72 text-xs text-gray-300 right-0 mt-1">
                            <p className="font-semibold mb-1">Total Shield</p>
                            <p>
                              Award-Winning Internet Security that protects your devices and connections. Protects up to
                              10 computing and mobile devices. Can be shared with family and friends.
                            </p>
                            <p className="mt-1">
                              Includes Multi-Device Security, VPN, Family Rules, and Secure by Frontier app.
                            </p>
                          </div>
                        </div>

                        {/* Unbreakable Wi-Fi */}
                        <div className="relative group">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="unbreakableWiFi"
                              checked={formData.unbreakableWiFi}
                              onCheckedChange={(checked) =>
                                setFormData((prev) => ({ ...prev, unbreakableWiFi: checked as boolean }))
                              }
                              className="border-white data-[state=checked]:bg-[#00b7c3] data-[state=checked]:border-[#00b7c3] h-4 w-4 md:h-5 md:w-5"
                            />
                            <div>
                              <Label
                                htmlFor="unbreakableWiFi"
                                className="text-gray-300 flex items-center text-xs md:text-sm"
                              >
                                Unbreakable Wi-Fi
                                <span className="ml-1 text-green-500">$0.00/mo for 1 month</span>
                                <span className="ml-1 md:ml-2 text-gray-400 text-xs cursor-help">ⓘ</span>
                              </Label>
                            </div>
                          </div>
                          <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-2 md:p-3 rounded-md shadow-lg w-64 md:w-72 text-xs text-gray-300 right-0 mt-1">
                            <p className="font-semibold mb-1">Unbreakable Wi-Fi - $25.00/mo after first month</p>
                            <p>
                              Keeps your internet connection online during unexpected Frontier Fiber network outages.
                              Automatically switches to cellular backup when an outage is detected.
                            </p>
                            <p className="mt-1">Compatible with eero equipment with optional battery pack available.</p>
                          </div>
                        </div>

                        {/* Identity Protection */}
                        <div className="relative group">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="identityProtection"
                              checked={formData.identityProtection}
                              onCheckedChange={(checked) =>
                                setFormData((prev) => ({ ...prev, identityProtection: checked as boolean }))
                              }
                              className="border-white data-[state=checked]:bg-[#00b7c3] data-[state=checked]:border-[#00b7c3] h-4 w-4 md:h-5 md:w-5"
                            />
                            <div>
                              <Label
                                htmlFor="identityProtection"
                                className="text-gray-300 flex items-center text-xs md:text-sm"
                              >
                                Identity Protection
                                <span className="ml-1 text-[#00b7c3]">$10.00/mo</span>
                                <span className="ml-1 md:ml-2 text-gray-400 text-xs cursor-help">ⓘ</span>
                              </Label>
                            </div>
                          </div>
                          <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-2 md:p-3 rounded-md shadow-lg w-64 md:w-72 text-xs text-gray-300 right-0 mt-1">
                            <p className="font-semibold mb-1">Identity Protection</p>
                            <p>
                              Credit and personal information monitoring from an industry leader. Includes 3-Bureau
                              Credit Monitoring, Cyber Agent dark web scanning, and $1M Identity Theft Insurance.
                            </p>
                          </div>
                        </div>

                        {/* My Premium Tech Pro */}
                        <div className="relative group">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="premiumTechPro"
                              checked={formData.premiumTechPro}
                              onCheckedChange={(checked) =>
                                setFormData((prev) => ({ ...prev, premiumTechPro: checked as boolean }))
                              }
                              className="border-white data-[state=checked]:bg-[#00b7c3] data-[state=checked]:border-[#00b7c3] h-4 w-4 md:h-5 md:w-5"
                            />
                            <div>
                              <Label
                                htmlFor="premiumTechPro"
                                className="text-gray-300 flex items-center text-xs md:text-sm"
                              >
                                My Premium Tech Pro
                                <span className="ml-1 text-[#00b7c3]">$10.00/mo</span>
                                <span className="ml-1 md:ml-2 text-gray-400 text-xs cursor-help">ⓘ</span>
                              </Label>
                            </div>
                          </div>
                          <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-2 md:p-3 rounded-md shadow-lg w-64 md:w-72 text-xs text-gray-300 right-0 mt-1">
                            <p className="font-semibold mb-1">My Premium Tech Pro</p>
                            <p>
                              Unlimited phone-based support for all your communications, smart device, Internet, and
                              entertainment technology needs.
                            </p>
                            <p className="mt-1">
                              Available 7AM – Midnight ET, 365 days a year. Includes Smartphone video support.
                            </p>
                          </div>
                        </div>

                        {/* Wi-Fi Security Options */}
                        <div className="relative group">
                          <div className="flex items-center space-x-2">
                            <RadioGroup
                              value={formData.wifiSecurity}
                              onValueChange={(value) => setFormData((prev) => ({ ...prev, wifiSecurity: value }))}
                              className="space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="plus"
                                  id="wifiSecurityPlus"
                                  className="border-white text-[#00b7c3] h-3 w-3 md:h-4 md:w-4"
                                />
                                <div>
                                  <Label
                                    htmlFor="wifiSecurityPlus"
                                    className="text-gray-300 flex items-center text-xs md:text-sm"
                                  >
                                    Wi-Fi Security Plus
                                    <span className="ml-1 text-[#00b7c3]">$10.00/mo</span>
                                    <span className="ml-1 md:ml-2 text-gray-400 text-xs cursor-help">ⓘ</span>
                                  </Label>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="basic"
                                  id="wifiSecurityBasic"
                                  className="border-white text-[#00b7c3] h-3 w-3 md:h-4 md:w-4"
                                />
                                <div>
                                  <Label
                                    htmlFor="wifiSecurityBasic"
                                    className="text-gray-300 flex items-center text-xs md:text-sm"
                                  >
                                    Wi-Fi Security
                                    <span className="ml-1 text-[#00b7c3]">$5.00/mo</span>
                                    <span className="ml-1 md:ml-2 text-gray-400 text-xs cursor-help">ⓘ</span>
                                  </Label>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="none"
                                  id="wifiSecurityNone"
                                  className="border-white text-[#00b7c3] h-3 w-3 md:h-4 md:w-4"
                                />
                                <div>
                                  <Label htmlFor="wifiSecurityNone" className="text-gray-300 text-xs md:text-sm">
                                    No Wi-Fi Security
                                  </Label>
                                </div>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-2 md:p-3 rounded-md shadow-lg w-64 md:w-72 text-xs text-gray-300 right-0 mt-1">
                            <p className="font-semibold mb-1">Wi-Fi Security Options</p>
                            <p>
                              <strong>Wi-Fi Security Plus ($10.00/mo):</strong> Security software to help protect
                              devices everywhere with up to 3 devices. Includes VPN, password manager, and advanced
                              parental controls.
                            </p>
                            <p className="mt-1">
                              <strong>Wi-Fi Security ($5.00/mo):</strong> Defends your home network from online threats
                              with Wi-Fi controls, parental controls and ad-free browsing.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Unlimited Digital Voice Dropdown */}
                  <div className="bg-[#0a1e3c] border border-[#2a4580] rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, showDigitalVoice: !prev.showDigitalVoice }))}
                      className="w-full flex justify-between items-center p-3 text-left focus:outline-none"
                    >
                      <div className="font-semibold text-white text-sm md:text-base">Unlimited Digital Voice</div>
                      <span className="text-white">
                        {formData.showDigitalVoice ? (
                          <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />
                        ) : (
                          <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                        )}
                      </span>
                    </button>

                    {formData.showDigitalVoice && (
                      <div className="p-3 border-t border-[#2a4580] space-y-3">
                        <div className="relative group">
                          <RadioGroup
                            value={formData.digitalVoice}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, digitalVoice: value }))}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="yes"
                                id="digitalVoiceYes"
                                className="border-white text-[#00b7c3] h-3 w-3 md:h-4 md:w-4"
                              />
                              <Label htmlFor="digitalVoiceYes" className="text-gray-300 text-xs md:text-sm">
                                Yes, I want Unlimited Digital Voice
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="no"
                                id="digitalVoiceNo"
                                className="border-white text-[#00b7c3] h-3 w-3 md:h-4 md:w-4"
                              />
                              <Label htmlFor="digitalVoiceNo" className="text-gray-300 text-xs md:text-sm">
                                No, I don't want Unlimited Digital Voice at this time
                              </Label>
                            </div>
                          </RadioGroup>
                          <div className="mt-2 text-xs text-gray-400">
                            <p>
                              Per month for 12 months, $50.00 onwards. High quality home phone service over your
                              internet connection using your existing phones. Unlimited calling within the U.S., Canada
                              and Mexico, plus many popular features.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300 text-sm md:text-base">
                    First Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="pl-9 bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300 text-sm md:text-base">
                    Last Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="pl-9 bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300 text-sm md:text-base">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-9 bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-300 text-sm md:text-base">
                  Phone
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-9 bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="dateOfBirth" className="text-gray-300 text-sm md:text-base">
                  Date of Birth
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="pl-9 bg-[#0a1e3c] border-[#2a4580] text-white text-sm md:text-base h-9 md:h-10"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6 md:mt-8">
            {step > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex items-center bg-transparent border-[#2a4580] text-white hover:bg-[#152a4d] hover:text-white text-xs md:text-sm h-8 md:h-10"
              >
                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-[#da202c] hover:bg-[#b71c1c] ml-auto flex items-center text-xs md:text-sm h-8 md:h-10"
              >
                Next
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-[#da202c] hover:bg-[#b71c1c] ml-auto text-xs md:text-sm h-8 md:h-10"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Order"
                )}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
