"use client"

import type React from "react"

import { useState, useRef } from "react"
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Home,
  Calendar,
  Mail,
  MapPin,
  Phone,
  User,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function OrderPageClient() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
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
    internetPlan: "",
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

  const formRef = useRef<HTMLDivElement>(null)

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
        "https://script.google.com/macros/s/AKfycbw90YQbzaXHUL8HeOuARdVrNToq37J03Dmbn-U4G3cpPngkRBMLPnBgvDdEZQPPXcqD/exec"

      // Format data to match the expected structure in the Google Apps Script
      const dataToSend = {
        order: "Residential",
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

        // Reset form
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
          internetPlan: "",
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

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStep((prev) => Math.min(prev + 1, 3))
    // Scroll to top when changing steps
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStep((prev) => Math.max(prev - 1, 1))
    // Scroll to top when changing steps
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1e3c]">
      {/* Thank you message overlay */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#1d3461] rounded-lg p-8 max-w-md text-center text-white border border-[#2a4580] shadow-xl">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-lg mb-4">Your order has been submitted successfully.</p>
            <p className="text-gray-300">We will contact you shortly to confirm the details.</p>
          </div>
        </div>
      )}

      {/* Hero Section with Form Directly Below */}
      <section className="relative py-16 bg-gradient-to-b from-[#0a1e3c] to-[#1d3461]">
        <div className="absolute inset-0 opacity-10 bg-[url('/interconnected-nodes.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-block bg-[#00b7c3] rounded-full px-4 py-1 text-white text-sm font-medium mb-6">
              Limited Time Offer: Free Installation
            </div>
          </div>

          {/* Form Section - Directly Below Hero */}
          <div className="max-w-4xl mx-auto">
            <div ref={formRef} className="bg-[#1d3461] rounded-xl shadow-2xl overflow-hidden border border-[#2a4580]">
              <div className="bg-gradient-to-r from-[#da202c] to-[#b71c1c] p-5 text-white">
                <h2 className="text-2xl font-bold">Order Frontier Fiber</h2>
                <p className="text-white/90 text-sm">Complete the form below to get started with Frontier service</p>
              </div>

              {/* Progress Indicator */}
              <div className="p-5 border-b border-[#2a4580]">
                <div className="flex items-center justify-between">
                  <div className={`flex flex-col items-center ${step >= 1 ? "text-[#00b7c3]" : "text-gray-500"}`}>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= 1 ? "bg-[#00b7c3]/20 text-[#00b7c3]" : "bg-gray-700 text-gray-500"
                      } font-bold`}
                    >
                      1
                    </div>
                    <span className="text-sm mt-1 text-gray-300">Address</span>
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-[#00b7c3]" : "bg-gray-700"}`}></div>
                  <div className={`flex flex-col items-center ${step >= 2 ? "text-[#00b7c3]" : "text-gray-500"}`}>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= 2 ? "bg-[#00b7c3]/20 text-[#00b7c3]" : "bg-gray-700 text-gray-500"
                      } font-bold`}
                    >
                      2
                    </div>
                    <span className="text-sm mt-1 text-gray-300">Plan</span>
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-[#00b7c3]" : "bg-gray-700"}`}></div>
                  <div className={`flex flex-col items-center ${step >= 3 ? "text-[#00b7c3]" : "text-gray-500"}`}>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= 3 ? "bg-[#00b7c3]/20 text-[#00b7c3]" : "bg-gray-700 text-gray-500"
                      } font-bold`}
                    >
                      3
                    </div>
                    <span className="text-sm mt-1 text-gray-300">Personal Info</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 text-white">Address Information</h3>
                    <div>
                      <Label htmlFor="address" className="text-gray-300">
                        Street Address
                      </Label>
                      <div className="relative">
                        <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="pl-10 bg-[#0a1e3c] border-[#2a4580] text-white"
                          placeholder="123 Main St"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="aptUnit" className="text-gray-300">
                        Apt/Unit (optional)
                      </Label>
                      <Input
                        id="aptUnit"
                        name="aptUnit"
                        value={formData.aptUnit}
                        onChange={handleChange}
                        placeholder="Apt 4B"
                        className="bg-[#0a1e3c] border-[#2a4580] text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-gray-300">
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="New York"
                          className="bg-[#0a1e3c] border-[#2a4580] text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-gray-300">
                          State
                        </Label>
                        <Select
                          name="state"
                          value={formData.state}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, state: value }))}
                        >
                          <SelectTrigger className="bg-[#0a1e3c] border-[#2a4580] text-white">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0a1e3c] border-[#2a4580] text-white">
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
                      <Label htmlFor="zipCode" className="text-gray-300">
                        ZIP Code
                      </Label>
                      <div className="relative">
                        <MapPin
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                          className="pl-10 bg-[#0a1e3c] border-[#2a4580] text-white"
                          placeholder="12345"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="movedLastYear"
                        checked={formData.movedLastYear}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, movedLastYear: checked as boolean }))
                        }
                        className="border-[#2a4580] data-[state=checked]:bg-[#da202c] data-[state=checked]:border-[#da202c]"
                      />
                      <Label htmlFor="movedLastYear" className="text-gray-300">
                        I have moved in the last year
                      </Label>
                    </div>
                    {formData.movedLastYear && (
                      <div className="space-y-4 bg-[#0a1e3c]/50 p-4 rounded-lg mt-4 border border-[#2a4580]">
                        <h4 className="font-semibold text-white">Previous Address</h4>
                        <Input
                          id="previousAddress"
                          name="previousAddress"
                          value={formData.previousAddress}
                          onChange={handleChange}
                          placeholder="Previous Address"
                          className="bg-[#0a1e3c] border-[#2a4580] text-white"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            id="previousCity"
                            name="previousCity"
                            value={formData.previousCity}
                            onChange={handleChange}
                            placeholder="Previous City"
                            className="bg-[#0a1e3c] border-[#2a4580] text-white"
                          />
                          <Input
                            id="previousState"
                            name="previousState"
                            value={formData.previousState}
                            onChange={handleChange}
                            placeholder="Previous State"
                            className="bg-[#0a1e3c] border-[#2a4580] text-white"
                          />
                        </div>
                        <Input
                          id="previousZipCode"
                          name="previousZipCode"
                          value={formData.previousZipCode}
                          onChange={handleChange}
                          placeholder="Previous ZIP Code"
                          className="bg-[#0a1e3c] border-[#2a4580] text-white"
                        />
                      </div>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Choose Your Internet Plan</h3>
                    <div className="space-y-4">
                      {isMobile ? (
                        <div className="space-y-2">
                          <Label htmlFor="mobilePlanSelect" className="text-white">
                            Select Your Plan
                          </Label>
                          <Select
                            value={formData.internetPlan}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, internetPlan: value }))}
                          >
                            <SelectTrigger className="bg-[#0a1e3c] border-[#2a4580] text-white w-full">
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
                            <div className="mt-4 p-4 bg-[#0a1e3c]/70 border border-[#2a4580] rounded-lg">
                              <div className="text-lg font-semibold text-white">
                                Selected Plan: {formData.internetPlan.replace("fiber", "Fiber ").replace("gig", " Gig")}
                              </div>
                              <div className="text-2xl font-bold text-[#00b7c3] mt-1">
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
                              <div className="text-sm text-gray-400 mt-1">
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
                          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
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
                                className="flex flex-col h-full p-4 border rounded-lg bg-[#0a1e3c] border-[#2a4580] peer-data-[state=checked]:border-[#00b7c3] peer-data-[state=checked]:bg-[#00b7c3]/10 hover:bg-[#152a4d] hover:border-[#3a5590] transition-all cursor-pointer"
                              >
                                <span className="text-lg font-semibold text-white">{plan.name}</span>
                                <span className="text-sm text-gray-400 mb-2">{plan.speed}</span>
                                <span className="text-2xl font-bold text-[#00b7c3]">
                                  ${plan.price}
                                  <span className="text-sm font-normal">/mo</span>
                                </span>
                                <span className="absolute top-3 right-3 text-[#00b7c3] opacity-0 peer-data-[state=checked]:opacity-100">
                                  <CheckCircle className="h-5 w-5" />
                                </span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    </div>

                    <Separator className="my-6 bg-[#2a4580]" />

                    <div className="space-y-4">
                      <div className="space-y-4">
                        <div className="bg-[#0a1e3c] border border-[#2a4580] rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, showValueAddedServices: !prev.showValueAddedServices }))
                            }
                            className="w-full flex justify-between items-center p-3 text-left focus:outline-none"
                          >
                            <h4 className="font-semibold text-white">Value Added Services</h4>
                            <span className="text-white">
                              {formData.showValueAddedServices ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
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
                                    className="border-white data-[state=checked]:bg-[#00b7c3] data-[state=checked]:border-[#00b7c3]"
                                  />
                                  <div>
                                    <Label htmlFor="totalShield" className="text-gray-300 flex items-center">
                                      Total Shield
                                      <span className="ml-1 text-[#00b7c3]">$10.00/mo</span>
                                      <span className="ml-2 text-gray-400 text-sm cursor-help">ⓘ</span>
                                    </Label>
                                  </div>
                                </div>
                                <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-3 rounded-md shadow-lg w-72 text-xs text-gray-300 right-0 mt-1">
                                  <p className="font-semibold mb-1">Total Shield</p>
                                  <p>
                                    Award-Winning Internet Security that protects your devices and connections. Protects
                                    up to 10 computing and mobile devices. Can be shared with family and friends.
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
                                    className="border-white data-[state=checked]:bg-[#00b7c3] data-[state=checked]:border-[#00b7c3]"
                                  />
                                  <div>
                                    <Label htmlFor="unbreakableWiFi" className="text-gray-300 flex items-center">
                                      Unbreakable Wi-Fi
                                      <span className="ml-1 text-green-500">$0.00/mo for 1 month</span>
                                      <span className="ml-2 text-gray-400 text-sm cursor-help">ⓘ</span>
                                    </Label>
                                  </div>
                                </div>
                                <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-3 rounded-md shadow-lg w-72 text-xs text-gray-300 right-0 mt-1">
                                  <p className="font-semibold mb-1">Unbreakable Wi-Fi - $25.00/mo after first month</p>
                                  <p>
                                    Keeps your internet connection online during unexpected Frontier Fiber network
                                    outages. Automatically switches to cellular backup when an outage is detected.
                                  </p>
                                  <p className="mt-1">
                                    Compatible with eero equipment with optional battery pack available.
                                  </p>
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
                                    className="border-white data-[state=checked]:bg-[#00b7c3] data-[state=checked]:border-[#00b7c3]"
                                  />
                                  <div>
                                    <Label htmlFor="identityProtection" className="text-gray-300 flex items-center">
                                      Identity Protection
                                      <span className="ml-1 text-[#00b7c3]">$10.00/mo</span>
                                      <span className="ml-2 text-gray-400 text-sm cursor-help">ⓘ</span>
                                    </Label>
                                  </div>
                                </div>
                                <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-3 rounded-md shadow-lg w-72 text-xs text-gray-300 right-0 mt-1">
                                  <p className="font-semibold mb-1">Identity Protection</p>
                                  <p>
                                    Credit and personal information monitoring from an industry leader. Includes
                                    3-Bureau Credit Monitoring, Cyber Agent dark web scanning, and $1M Identity Theft
                                    Insurance.
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
                                    className="border-white data-[state=checked]:bg-[#00b7c3] data-[state=checked]:border-[#00b7c3]"
                                  />
                                  <div>
                                    <Label htmlFor="premiumTechPro" className="text-gray-300 flex items-center">
                                      My Premium Tech Pro
                                      <span className="ml-1 text-[#00b7c3]">$10.00/mo</span>
                                      <span className="ml-2 text-gray-400 text-sm cursor-help">ⓘ</span>
                                    </Label>
                                  </div>
                                </div>
                                <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-3 rounded-md shadow-lg w-72 text-xs text-gray-300 right-0 mt-1">
                                  <p className="font-semibold mb-1">My Premium Tech Pro</p>
                                  <p>
                                    Unlimited phone-based support for all your communications, smart device, Internet,
                                    and entertainment technology needs.
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
                                        className="border-white text-[#00b7c3]"
                                      />
                                      <div>
                                        <Label htmlFor="wifiSecurityPlus" className="text-gray-300 flex items-center">
                                          Wi-Fi Security Plus
                                          <span className="ml-1 text-[#00b7c3]">$10.00/mo</span>
                                          <span className="ml-2 text-gray-400 text-sm cursor-help">ⓘ</span>
                                        </Label>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem
                                        value="basic"
                                        id="wifiSecurityBasic"
                                        className="border-white text-[#00b7c3]"
                                      />
                                      <div>
                                        <Label htmlFor="wifiSecurityBasic" className="text-gray-300 flex items-center">
                                          Wi-Fi Security
                                          <span className="ml-1 text-[#00b7c3]">$5.00/mo</span>
                                          <span className="ml-2 text-gray-400 text-sm cursor-help">ⓘ</span>
                                        </Label>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem
                                        value="none"
                                        id="wifiSecurityNone"
                                        className="border-white text-[#00b7c3]"
                                      />
                                      <div>
                                        <Label htmlFor="wifiSecurityNone" className="text-gray-300">
                                          No Wi-Fi Security
                                        </Label>
                                      </div>
                                    </div>
                                  </RadioGroup>
                                </div>
                                <div className="absolute z-50 invisible group-hover:visible bg-[#0a1e3c] border border-[#2a4580] p-3 rounded-md shadow-lg w-72 text-xs text-gray-300 right-0 mt-1">
                                  <p className="font-semibold mb-1">Wi-Fi Security Options</p>
                                  <p>
                                    <strong>Wi-Fi Security Plus ($10.00/mo):</strong> Security software to help protect
                                    devices everywhere with up to 3 devices. Includes VPN, password manager, and
                                    advanced parental controls.
                                  </p>
                                  <p className="mt-1">
                                    <strong>Wi-Fi Security ($5.00/mo):</strong> Defends your home network from online
                                    threats with Wi-Fi controls, parental controls and ad-free browsing.
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
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, showDigitalVoice: !prev.showDigitalVoice }))
                            }
                            className="w-full flex justify-between items-center p-3 text-left focus:outline-none"
                          >
                            <div className="font-semibold text-white">Unlimited Digital Voice</div>
                            <span className="text-white">
                              {formData.showDigitalVoice ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
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
                                      className="border-white text-[#00b7c3]"
                                    />
                                    <Label htmlFor="digitalVoiceYes" className="text-gray-300">
                                      Yes, I want Unlimited Digital Voice
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="no"
                                      id="digitalVoiceNo"
                                      className="border-white text-[#00b7c3]"
                                    />
                                    <Label htmlFor="digitalVoiceNo" className="text-gray-300">
                                      No, I don't want Unlimited Digital Voice at this time
                                    </Label>
                                  </div>
                                </RadioGroup>
                                <div className="mt-2 text-xs text-gray-400">
                                  <p>
                                    Per month for 12 months, $50.00 onwards. High quality home phone service over your
                                    internet connection using your existing phones. Unlimited calling within the U.S.,
                                    Canada and Mexico, plus many popular features.
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
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 text-white">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-300">
                          First Name
                        </Label>
                        <div className="relative">
                          <User
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="pl-10 bg-[#0a1e3c] border-[#2a4580] text-white"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-300">
                          Last Name
                        </Label>
                        <div className="relative">
                          <User
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="pl-10 bg-[#0a1e3c] border-[#2a4580] text-white"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10 bg-[#0a1e3c] border-[#2a4580] text-white"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">
                        Phone
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="pl-10 bg-[#0a1e3c] border-[#2a4580] text-white"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-gray-300">
                        Date of Birth
                      </Label>
                      <div className="relative">
                        <Calendar
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                          className="pl-10 bg-[#0a1e3c] border-[#2a4580] text-white"
                        />
                      </div>
                    </div>

                    <div className="mt-6 bg-[#0a1e3c]/50 p-4 rounded-lg border border-[#2a4580]">
                      <h4 className="font-semibold mb-2 text-white">Order Summary</h4>
                      <div className="space-y-2 text-sm">
                        {formData.internetPlan && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">
                              {formData.internetPlan.replace("fiber", "Fiber ").replace("gig", " Gig")}
                            </span>
                            <span className="text-white">
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
                            </span>
                          </div>
                        )}
                        {formData.phoneService && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Phone Service</span>
                            <span className="text-white">$25.00/mo</span>
                          </div>
                        )}
                        {formData.wholeHomeWiFi === "standard" && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Whole-Home Wi-Fi</span>
                            <span className="text-white">$10.00/mo</span>
                          </div>
                        )}
                        {formData.netflixBundle && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Netflix & Pro Wi-Fi Bundle</span>
                            <span className="text-white">$30.00/mo</span>
                          </div>
                        )}
                        {formData.totalShield && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Total Shield</span>
                            <span className="text-white">$10.00/mo</span>
                          </div>
                        )}
                        {formData.unbreakableWiFi && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Unbreakable Wi-Fi</span>
                            <span className="text-white">$0.00/mo (first month)</span>
                          </div>
                        )}
                        {formData.identityProtection && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Identity Protection</span>
                            <span className="text-white">$10.00/mo</span>
                          </div>
                        )}
                        {formData.premiumTechPro && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">My Premium Tech Pro</span>
                            <span className="text-white">$10.00/mo</span>
                          </div>
                        )}
                        {formData.wifiSecurity === "plus" && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Wi-Fi Security Plus</span>
                            <span className="text-white">$10.00/mo</span>
                          </div>
                        )}
                        {formData.wifiSecurity === "basic" && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Wi-Fi Security</span>
                            <span className="text-white">$5.00/mo</span>
                          </div>
                        )}
                        {formData.digitalVoice === "yes" && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Unlimited Digital Voice</span>
                            <span className="text-white">$25.00/mo</span>
                          </div>
                        )}
                        <Separator className="my-2 bg-[#2a4580]" />
                        <div className="flex justify-between font-bold">
                          <span className="text-white">Estimated Monthly Total*</span>
                          <span className="text-green-500">
                            $
                            {(
                              (formData.internetPlan
                                ? Number.parseFloat(
                                    {
                                      fiber200: "29.99",
                                      fiber500: "39.99",
                                      fiber1gig: "49.99",
                                      fiber2gig: "64.99",
                                      fiber5gig: "99.99",
                                      fiber7gig: "109.99",
                                    }[formData.internetPlan] || "0",
                                  )
                                : 0) +
                              (formData.phoneService ? 25 : 0) +
                              (formData.wholeHomeWiFi === "standard" ? 10 : 0) +
                              (formData.netflixBundle ? 30 : 0) +
                              (formData.totalShield ? 10 : 0) +
                              (formData.unbreakableWiFi ? 0 : 0) + // First month free
                              (formData.identityProtection ? 10 : 0) +
                              (formData.premiumTechPro ? 10 : 0) +
                              (formData.wifiSecurity === "plus" ? 10 : 0) +
                              (formData.wifiSecurity === "basic" ? 5 : 0) +
                              (formData.digitalVoice === "yes" ? 25 : 0)
                            ).toFixed(2)}
                            /mo
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">* Plus taxes and surcharges</div>
                        <div className="flex justify-between font-bold mt-4 pt-2 border-t border-[#2a4580]">
                          <span className="text-white">Due Today</span>
                          <span className="text-green-500">$0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="flex items-center bg-transparent border-[#2a4580] text-white hover:bg-[#152a4d] hover:text-white"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#da202c] hover:bg-[#b71c1c] ml-auto flex items-center"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-[#da202c] hover:bg-[#b71c1c] ml-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0a1e3c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#1d3461] p-6 rounded-lg border border-[#2a4580]">
              <h3 className="text-xl font-semibold mb-2 text-white">How soon can I get Frontier Fiber installed?</h3>
              <p className="text-gray-300">
                Most installations can be scheduled within 3-5 business days. After submitting your order, our team will
                contact you to set up the most convenient installation time.
              </p>
            </div>
            <div className="bg-[#1d3461] p-6 rounded-lg border border-[#2a4580]">
              <h3 className="text-xl font-semibold mb-2 text-white">Are there any hidden fees?</h3>
              <p className="text-gray-300">
                No. We pride ourselves on transparent pricing. The monthly cost shown in your order summary is what
                you'll pay (plus applicable taxes). There are no equipment rental fees or data caps.
              </p>
            </div>
            <div className="bg-[#1d3461] p-6 rounded-lg border border-[#2a4580]">
              <h3 className="text-xl font-semibold mb-2 text-white">Can I bring my own router?</h3>
              <p className="text-gray-300">
                Yes, you can use your own compatible router. However, for the best experience, we recommend using our
                advanced Wi-Fi router that's included at no additional cost with your service.
              </p>
            </div>
            <div className="bg-[#1d3461] p-6 rounded-lg border border-[#2a4580]">
              <h3 className="text-xl font-semibold mb-2 text-white">Do I need to be home for installation?</h3>
              <p className="text-gray-300">
                Yes, an adult (18 or older) needs to be present during installation. Our technician will need access to
                both the outside and inside of your home to complete the installation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
