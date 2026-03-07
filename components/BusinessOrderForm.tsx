"use client"

import React from "react"

import { useState, useRef } from "react"
import { X, ChevronRight, ChevronLeft, Building, User, Mail, Phone, Hash, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BusinessOrderFormProps {
  isOpen: boolean
  onClose: () => void
  preSelectedPlan?: string
}

export function BusinessOrderForm({ isOpen, onClose, preSelectedPlan }: BusinessOrderFormProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    federalTaxId: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    internetPlan: preSelectedPlan || "",
    voipService: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format data exactly as expected by the Google Apps Script
      const dataToSend = {
        order: "Business",
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.mobileNumber, // Use phoneNumber as the field name
        email: formData.email,
        serviceAddress: `${formData.address}, ${formData.city}, ${formData.state}`,
        zipCode: formData.zipCode,
        companyName: formData.companyName,
        businessType: formData.businessType,
        federalTaxId: formData.federalTaxId,
        internetPlan: formData.internetPlan,
        voipService: formData.voipService || "No",
      }

      // Use the same Google Apps Script URL that works with the residential form
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbx4TS3QR-ZEgYcTrK7DQ5Ab2YN4Tfeh-Ah9hrlmr8e3GsEzsuhUkRI8M7fUMl2Wfo04/exec"

      // Create a hidden iframe if it doesn't exist
      if (!iframeRef.current) {
        const iframe = document.createElement("iframe")
        iframe.name = "hidden_business_iframe"
        iframe.style.display = "none"
        document.body.appendChild(iframe)
        iframeRef.current = iframe
      }

      // Create a form element
      const form = document.createElement("form")
      form.method = "POST"
      form.action = scriptUrl
      form.target = "hidden_business_iframe" // Target the hidden iframe
      form.style.display = "none"

      // Add the data as a hidden field
      const hiddenField = document.createElement("input")
      hiddenField.type = "hidden"
      hiddenField.name = "data"
      hiddenField.value = JSON.stringify(dataToSend)
      form.appendChild(hiddenField)

      // Add the form to the document and submit it
      document.body.appendChild(form)
      form.submit()

      setTimeout(() => {
        setIsSubmitting(false)
        setShowThankYou(true)

        // Reset form data
        setFormData({
          companyName: "",
          businessType: "",
          firstName: "",
          lastName: "",
          mobileNumber: "",
          email: "",
          federalTaxId: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          internetPlan: preSelectedPlan || "",
          voipService: "",
        })
        setStep(1)

        // Remove the form from the document
        if (document.body.contains(form)) {
          document.body.removeChild(form)
        }

        setTimeout(() => {
          setShowThankYou(false)
          onClose()
        }, 5000)
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      alert("There was an error submitting your order. Please try again.")
    }
  }

  // Clean up the iframe when component unmounts
  React.useEffect(() => {
    return () => {
      if (iframeRef.current && document.body.contains(iframeRef.current)) {
        document.body.removeChild(iframeRef.current)
      }
    }
  }, [])

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStep((prev) => Math.max(prev - 1, 1))
  }

  if (!isOpen) return null

  // Thank you message overlay
  if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-[#1d3461] rounded-lg p-8 max-w-md text-center text-white border border-[#2a4580] shadow-xl">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-lg mb-4">Your business order has been submitted successfully.</p>
          <p className="text-gray-300">We will contact you shortly to confirm the details.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-2xl text-white">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Business Order Form</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-gray-200">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`w-1/3 h-2 rounded-full ${s <= step ? "bg-red-600" : "bg-gray-700"}`} />
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Company Information</h3>
                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white pl-10"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Select
                    name="businessType"
                    value={formData.businessType}
                    onValueChange={(value) => handleSelectChange("businessType", value)}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                      <SelectItem value="Partnership">Partnership</SelectItem>
                      <SelectItem value="Limited Liability Company (LLC)">Limited Liability Company (LLC)</SelectItem>
                      <SelectItem value="Corporation">Corporation</SelectItem>
                      <SelectItem value="Nonprofit Organization">Nonprofit Organization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="federalTaxId">Federal Tax ID (EIN) *</Label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="federalTaxId"
                      name="federalTaxId"
                      value={formData.federalTaxId}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white pl-10"
                      placeholder="XX-XXXXXXX"
                    />
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Primary Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white pl-10"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white pl-10"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="mobileNumber">Mobile Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white pl-10"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white pl-10"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Business Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="123 Business St"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Select
                      name="state"
                      value={formData.state}
                      onValueChange={(value) => handleSelectChange("state", value)}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
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
                  <Label htmlFor="zipCode">ZIP Code *</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="12345"
                  />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Choose Your Business Internet Plan</h3>
                <div className="md:hidden">
                  <Select
                    name="internetPlan"
                    value={formData.internetPlan}
                    onValueChange={(value) => handleSelectChange("internetPlan", value)}
                  >
                    <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select your plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Business Fiber 500M">
                        Business Fiber 500M (500/500 Mbps) - $69.99/mo
                      </SelectItem>
                      <SelectItem value="Business Fiber 1 Gig">
                        Business Fiber 1 Gig (1000/1000 Mbps) - $94.99/mo
                      </SelectItem>
                      <SelectItem value="Business Fiber 2 Gig">
                        Business Fiber 2 Gig (2000/2000 Mbps) - $129.99/mo
                      </SelectItem>
                      <SelectItem value="Business Fiber 5 Gig">
                        Business Fiber 5 Gig (5000/5000 Mbps) - $179.99/mo
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Business Fiber 500M", speed: "500/500 Mbps", price: 69.99 },
                    { name: "Business Fiber 1 Gig", speed: "1000/1000 Mbps", price: 94.99 },
                    { name: "Business Fiber 2 Gig", speed: "2000/2000 Mbps", price: 129.99 },
                    { name: "Business Fiber 5 Gig", speed: "5000/5000 Mbps", price: 179.99 },
                  ].map((plan) => (
                    <div
                      key={plan.name}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        formData.internetPlan === plan.name
                          ? "border-red-600 bg-red-600 bg-opacity-10"
                          : "border-gray-700 hover:border-gray-500"
                      }`}
                      onClick={() => handleSelectChange("internetPlan", plan.name)}
                    >
                      <h4 className="font-semibold text-lg mb-2">{plan.name}</h4>
                      <p className="text-sm text-gray-400 mb-2">{plan.speed}</p>
                      <p className="text-2xl font-bold">
                        ${plan.price}
                        <span className="text-sm font-normal">/mo</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 mt-6">
                  <h4 className="font-semibold">Add Voice over Internet Protocol (VoIP) Service</h4>
                  <Select
                    name="voipService"
                    value={formData.voipService}
                    onValueChange={(value) => handleSelectChange("voipService", value)}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select VoIP service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smartVoice">Smart Voice (FTR router required) - $19.99/mo</SelectItem>
                      <SelectItem value="businessVoice">
                        Frontier Business Voice (no router required) - $19.99/mo
                      </SelectItem>
                      <SelectItem value="noVoip">No VoIP service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button type="button" onClick={prevStep} className="bg-gray-700 text-white hover:bg-gray-600">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button type="button" onClick={nextStep} className="bg-red-600 text-white hover:bg-red-700 ml-auto">
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-red-600 text-white hover:bg-red-700 ml-auto"
                  disabled={isSubmitting}
                >
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
            <p className="text-xs text-gray-500 leading-relaxed mt-4">
              By submitting this form, you agree to our{" "}
              <a href="/terms" className="underline hover:text-gray-700">Terms of Service</a> and{" "}
              <a href="/privacy" className="underline hover:text-gray-700">Privacy Policy</a>, and you consent to be contacted by an authorized Frontier representative by phone, email, or text message at the contact information provided for the purpose of completing your business service order. Message and data rates may apply.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
