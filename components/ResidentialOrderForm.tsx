"use client"

import type React from "react"
import { useState } from "react"
import {
  X,
  CheckCircle,
  Home,
  Calendar,
  Mail,
  MapPin,
  Phone,
  User,
  Loader2,
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

interface ResidentialOrderFormProps {
  isOpen: boolean
  onClose: () => void
  preSelectedPlan?: string
}

export function ResidentialOrderForm({ isOpen, onClose, preSelectedPlan }: ResidentialOrderFormProps) {
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
    internetPlan: preSelectedPlan || "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format data for Google Apps Script
      const dataToSend = {
        order: "Residential",
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        serviceAddress: `${formData.address}${formData.aptUnit ? `, ${formData.aptUnit}` : ""}, ${formData.city}, ${formData.state}`,
        zipCode: formData.zipCode,
        movedLastYear: formData.movedLastYear ? "Yes" : "No",
        previousAddress: formData.movedLastYear ? formData.previousAddress : "",
        previousCity: formData.movedLastYear ? formData.previousCity : "",
        previousState: formData.movedLastYear ? formData.previousState : "",
        previousZipCode: formData.movedLastYear ? formData.previousZipCode : "",
        internetPlan: formData.internetPlan,
        digitalVoice: formData.digitalVoice,
        addPhoneService: formData.phoneService ? "Yes" : "No",
        netflixBundle: formData.netflixBundle ? "Yes" : "No",
        wholeHomeWiFi: formData.wholeHomeWiFi,
        totalShield: formData.totalShield ? "Yes" : "No",
        unbreakableWiFi: formData.unbreakableWiFi ? "Yes" : "No",
        identityProtection: formData.identityProtection ? "Yes" : "No",
        premiumTechPro: formData.premiumTechPro ? "Yes" : "No",
        wifiSecurity: formData.wifiSecurity,
      }

      console.log("Sending data:", dataToSend)

      // Create form data for submission
      const formDataToSend = new FormData()
      formDataToSend.append("data", JSON.stringify(dataToSend))

      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyWQRdA-mfqRnkCWmGDlgyzeI6SOu7P-EeA8Ypt61dIME7gZELySKtRw_s_Wf6HVJCX/exec"

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formDataToSend,
      })

      const responseText = await response.text()
      console.log("Response:", responseText)

      if (response.ok) {
        // Show thank you message
        setIsSubmitting(false)
        setShowThankYou(true)

        // Close the thank you message after 3 seconds
        setTimeout(() => {
          setShowThankYou(false)
          onClose()
        }, 3000)
      } else {
        throw new Error(`HTTP ${response.status}: ${responseText}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      alert("There was an error submitting your form. Please try again.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 overflow-y-auto">
      <div className="bg-[#1d3461] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#2a4580] shadow-2xl">
        {showThankYou ? (
          <div className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">Thank You!</h2>
            <p className="text-lg mb-4 text-white">Your order has been submitted successfully.</p>
            <p className="text-gray-300">We will contact you shortly to confirm the details.</p>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-[#da202c] to-[#b71c1c] p-5 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold">Order Frontier Fiber</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-[#b71c1c]/20">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4 text-white">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
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
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
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
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
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
              </div>

              <Separator className="bg-[#2a4580]" />

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
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
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
              </div>

              <Separator className="bg-[#2a4580]" />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4 text-white">Choose Your Internet Plan</h3>
                <RadioGroup
                  value={formData.internetPlan}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, internetPlan: value }))}
                  className="grid gap-4 grid-cols-1 md:grid-cols-2"
                >
                  {[
                    { id: "fiber200", name: "Fiber 200", speed: "200/200 Mbps", price: 29.99 },
                    { id: "fiber500", name: "Fiber 500", speed: "500/500 Mbps", price: 39.99 },
                    { id: "fiber1gig", name: "Fiber 1 Gig", speed: "1000/1000 Mbps", price: 49.99 },
                    { id: "fiber2gig", name: "Fiber 2 Gig", speed: "2000/2000 Mbps", price: 64.99 },
                    { id: "fiber5gig", name: "Fiber 5 Gig", speed: "5000/5000 Mbps", price: 99.99 },
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
              </div>

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
                          </Label>
                        </div>
                      </div>

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
                          </Label>
                        </div>
                      </div>

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
                          </Label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-[#0a1e3c] border border-[#2a4580] rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, showDigitalVoice: !prev.showDigitalVoice }))}
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
                      <RadioGroup
                        value={formData.digitalVoice}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, digitalVoice: value }))}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="digitalVoiceYes" className="border-white text-[#00b7c3]" />
                          <Label htmlFor="digitalVoiceYes" className="text-gray-300">
                            Yes, I want Unlimited Digital Voice
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="digitalVoiceNo" className="border-white text-[#00b7c3]" />
                          <Label htmlFor="digitalVoiceNo" className="text-gray-300">
                            No, I don't want Unlimited Digital Voice at this time
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
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
                        }[formData.internetPlan] || "0.00"}
                        /mo
                      </span>
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
                              }[formData.internetPlan] || "0",
                            )
                          : 0) +
                        (formData.totalShield ? 10 : 0) +
                        (formData.unbreakableWiFi ? 0 : 0) +
                        (formData.identityProtection ? 10 : 0) +
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

              <Button type="submit" className="w-full bg-[#da202c] hover:bg-[#b71c1c]" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Order"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
