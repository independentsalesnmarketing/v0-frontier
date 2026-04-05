"use client"

import type React from "react"
import { useState } from "react"
import { createPortal } from "react-dom"
import {
  X,
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
  Shield,
  Clock,
  Wifi,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const PLANS: Record<string, { name: string; speed: string; price: string }> = {
  "fiber-500": { name: "Fiber 500", speed: "500/500 Mbps", price: "$34.99/mo" },
  "fiber-1-gig": { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "$49.99/mo" },
  "fiber-2-gig": { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "$64.99/mo" },
  "fiber-5-gig": { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "$89.99/mo" },
  "fiber-7-gig": { name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "$109.99/mo" },
  fiber500: { name: "Fiber 500", speed: "500/500 Mbps", price: "$34.99/mo" },
  fiber1gig: { name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "$49.99/mo" },
  fiber2gig: { name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "$64.99/mo" },
  fiber5gig: { name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "$89.99/mo" },
  fiber7gig: { name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "$109.99/mo" },
}

const PLAN_OPTIONS = [
  { key: "fiber-500", name: "Fiber 500", speed: "500/500 Mbps", price: "$34.99/mo" },
  { key: "fiber-1-gig", name: "Fiber 1 Gig", speed: "1,000/1,000 Mbps", price: "$49.99/mo" },
  { key: "fiber-2-gig", name: "Fiber 2 Gig", speed: "2,000/2,000 Mbps", price: "$64.99/mo" },
  { key: "fiber-5-gig", name: "Fiber 5 Gig", speed: "5,000/5,000 Mbps", price: "$89.99/mo" },
  { key: "fiber-7-gig", name: "Fiber 7 Gig", speed: "7,000/7,000 Mbps", price: "$109.99/mo" },
]

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
  preSelectedPlan?: string
  orderType: "residential" | "business"
  defaultDigitalVoice?: boolean
}

export function OrderForm({ isOpen, onClose, preSelectedPlan, orderType, defaultDigitalVoice }: OrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [showAddOns, setShowAddOns] = useState(false)

  const [selectedPlanKey, setSelectedPlanKey] = useState<string | null>(preSelectedPlan || null)
  const plan = selectedPlanKey ? (PLANS[selectedPlanKey] || PLANS[selectedPlanKey.toLowerCase().replace(/\s+/g, "")]) : null

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    zipCode: "",
    preferredInstallDate: "",
    preferredInstallTime: "",
    digitalVoice: defaultDigitalVoice ? "yes" : "no",
    totalShield: false,
    unbreakableWiFi: false,
    identityProtection: false,
    premiumTechPro: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = document.createElement("form")
      form.method = "POST"
      form.action =
        "https://script.google.com/macros/s/AKfycbx6QqdUuVmjmqshF7yw6Erac1UGhkY59ajw7Ho9VeumwqagWAvMnirhXLD3bVExYqJW/exec"

      const dataToSend = {
        order: orderType === "residential" ? "Residential" : "Business",
        firstName: formData.firstName,
        lastName: formData.lastName,
        serviceAddress: formData.address,
        zipCode: formData.zipCode,
        phoneNumber: formData.phone,
        email: formData.email,
        dateOfBirth: formData.dateOfBirth,
        preferredInstallDate: formData.preferredInstallDate,
        preferredInstallTime: formData.preferredInstallTime,
        internetPlan: plan?.name || preSelectedPlan || "",
        digitalVoice: formData.digitalVoice,
        totalShield: formData.totalShield ? "Yes" : "No",
        unbreakableWiFi: formData.unbreakableWiFi ? "Yes" : "No",
        identityProtection: formData.identityProtection ? "Yes" : "No",
        premiumTechPro: formData.premiumTechPro ? "Yes" : "No",
      }

      const hiddenField = document.createElement("input")
      hiddenField.type = "hidden"
      hiddenField.name = "data"
      hiddenField.value = JSON.stringify(dataToSend)
      form.appendChild(hiddenField)

      const iframe = document.createElement("iframe")
      iframe.name = "hidden_iframe"
      iframe.style.display = "none"
      document.body.appendChild(iframe)
      form.target = "hidden_iframe"
      document.body.appendChild(form)
      form.submit()

      setTimeout(() => {
        setIsSubmitting(false)
        setShowThankYou(true)
        setFormData({
          firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "",
          address: "", zipCode: "", preferredInstallDate: "", preferredInstallTime: "",
          digitalVoice: "no", totalShield: false, unbreakableWiFi: false,
          identityProtection: false, premiumTechPro: false,
        })
        setSelectedPlanKey(preSelectedPlan || null)
        setTimeout(() => {
          setShowThankYou(false)
          onClose()
          if (document.body.contains(form)) document.body.removeChild(form)
          if (document.body.contains(iframe)) document.body.removeChild(iframe)
        }, 5000)
      }, 2000)
    } catch {
      setIsSubmitting(false)
      alert("There was an error submitting your order. Please try again.")
    }
  }

  if (!isOpen) return null

  if (showThankYou) {
    return createPortal(
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#0A1E3C] mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-2">Your order has been submitted successfully.</p>
          <p className="text-sm text-gray-400">We will contact you shortly to confirm the details.</p>
        </div>
      </div>,
      document.body,
    )
  }

  return createPortal(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start z-50 overflow-y-auto">
      <div className="w-full max-w-3xl my-6 mx-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Header with plan info */}
          <div className="bg-[#0A1E3C] px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
                {orderType === "residential" ? "Residential" : "Business"} Order
              </p>
              {plan ? (
                <div className="flex items-baseline gap-3 mt-1 flex-wrap">
                  <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                  <span className="text-sm text-white/50">{plan.speed}</span>
                  <span className="text-lg font-bold text-[#64ffda]">{plan.price}</span>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-bold text-white mt-1">Order Frontier Fiber</h2>
                  <p className="text-white/40 text-xs mt-0.5">Select a plan below to get started</p>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors rounded-full p-1.5 hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">

            {/* Plan Selection (when no plan pre-selected) */}
            {!preSelectedPlan && (
              <>
                <fieldset>
                  <legend className="text-sm font-bold text-[#0A1E3C] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-[#DA202C]" />
                    Select Your Plan
                  </legend>
                  <div className="grid gap-2">
                    {PLAN_OPTIONS.map((p) => (
                      <button
                        key={p.key}
                        type="button"
                        onClick={() => setSelectedPlanKey(p.key)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all ${
                          selectedPlanKey === p.key
                            ? "border-[#DA202C] bg-[#DA202C]/5 ring-1 ring-[#DA202C]/30"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <div>
                          <span className="font-bold text-[#0A1E3C]">{p.name}</span>
                          <span className="text-gray-400 text-sm ml-2">{p.speed}</span>
                        </div>
                        <span className={`font-bold text-sm ${selectedPlanKey === p.key ? "text-[#DA202C]" : "text-[#0A1E3C]"}`}>{p.price}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
                <hr className="border-gray-100" />
              </>
            )}

            {/* Personal Info */}
            <fieldset>
              <legend className="text-sm font-bold text-[#0A1E3C] uppercase tracking-wider mb-4 flex items-center gap-2">
                <User className="h-4 w-4 text-[#DA202C]" />
                Personal Information
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-600 text-sm">First Name *</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className="mt-1.5 h-11 border-gray-200 focus:border-[#0A1E3C] focus:ring-[#0A1E3C]" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-600 text-sm">Last Name *</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" className="mt-1.5 h-11 border-gray-200 focus:border-[#0A1E3C] focus:ring-[#0A1E3C]" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-600 text-sm">Email *</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="pl-10 h-11 border-gray-200 focus:border-[#0A1E3C] focus:ring-[#0A1E3C]" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-600 text-sm">Phone *</Label>
                  <div className="relative mt-1.5">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="(555) 123-4567" className="pl-10 h-11 border-gray-200 focus:border-[#0A1E3C] focus:ring-[#0A1E3C]" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="dateOfBirth" className="text-gray-600 text-sm">Date of Birth *</Label>
                  <div className="relative mt-1.5">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} required className="pl-10 h-11 border-gray-200 focus:border-[#0A1E3C] focus:ring-[#0A1E3C]" />
                  </div>
                </div>
              </div>
            </fieldset>

            <hr className="border-gray-100" />

            {/* Service Address */}
            <fieldset>
              <legend className="text-sm font-bold text-[#0A1E3C] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Home className="h-4 w-4 text-[#DA202C]" />
                Service Address
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <Label htmlFor="address" className="text-gray-600 text-sm">Full Service Address *</Label>
                  <div className="relative mt-1.5">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="123 Main St, Apt 4B, City, State" className="pl-10 h-11 border-gray-200 focus:border-[#0A1E3C] focus:ring-[#0A1E3C]" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="zipCode" className="text-gray-600 text-sm">ZIP Code *</Label>
                  <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required placeholder="12345" maxLength={5} pattern="[0-9]{5}" className="mt-1.5 h-11 border-gray-200 focus:border-[#0A1E3C] focus:ring-[#0A1E3C]" />
                </div>
              </div>
            </fieldset>

            <hr className="border-gray-100" />

            {/* Installation Preferences */}
            <fieldset>
              <legend className="text-sm font-bold text-[#0A1E3C] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#DA202C]" />
                Installation Preferences
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredInstallDate" className="text-gray-600 text-sm">Preferred Install Date</Label>
                  <Input id="preferredInstallDate" name="preferredInstallDate" type="date" value={formData.preferredInstallDate} onChange={handleChange} className="mt-1.5 h-11 border-gray-200 focus:border-[#0A1E3C] focus:ring-[#0A1E3C]" />
                </div>
                <div>
                  <Label htmlFor="preferredInstallTime" className="text-gray-600 text-sm">Preferred Install Time</Label>
                  <Select value={formData.preferredInstallTime} onValueChange={(v) => setFormData((p) => ({ ...p, preferredInstallTime: v }))}>
                    <SelectTrigger className="mt-1.5 h-11 border-gray-200">
                      <SelectValue placeholder="Select a time window" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8 AM – 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM – 4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4 PM – 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </fieldset>

            <hr className="border-gray-100" />

            {/* Value-Added Services */}
            <div>
              <button
                type="button"
                onClick={() => setShowAddOns(!showAddOns)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-sm font-bold text-[#0A1E3C] uppercase tracking-wider flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#DA202C]" />
                  Add-On Services &amp; Phone
                </span>
                {showAddOns
                  ? <ChevronUp className="h-4 w-4 text-gray-400" />
                  : <ChevronDown className="h-4 w-4 text-gray-400" />}
              </button>

              {showAddOns && (
                <div className="mt-4 space-y-4 bg-gray-50 rounded-xl p-5">
                  {/* Phone Service */}
                  <div>
                    <Label className="text-gray-700 text-sm font-semibold">Unlimited Digital Voice</Label>
                    <Select value={formData.digitalVoice} onValueChange={(v) => setFormData((p) => ({ ...p, digitalVoice: v }))}>
                      <SelectTrigger className="mt-1.5 h-11 border-gray-200 bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No phone service</SelectItem>
                        <SelectItem value="yes">Add Unlimited Digital Voice — $25/mo</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-400 mt-1">Unlimited calling within the U.S., Canada, and Mexico.</p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Checkbox id="totalShield" checked={formData.totalShield} onCheckedChange={(c) => setFormData((p) => ({ ...p, totalShield: c as boolean }))} />
                        <Label htmlFor="totalShield" className="text-sm text-gray-700 cursor-pointer">Total Shield</Label>
                      </div>
                      <span className="text-sm font-medium text-[#0A1E3C]">$10/mo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Checkbox id="unbreakableWiFi" checked={formData.unbreakableWiFi} onCheckedChange={(c) => setFormData((p) => ({ ...p, unbreakableWiFi: c as boolean }))} />
                        <Label htmlFor="unbreakableWiFi" className="text-sm text-gray-700 cursor-pointer">Unbreakable Wi-Fi</Label>
                      </div>
                      <span className="text-sm font-medium text-green-600">Free 1st mo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Checkbox id="identityProtection" checked={formData.identityProtection} onCheckedChange={(c) => setFormData((p) => ({ ...p, identityProtection: c as boolean }))} />
                        <Label htmlFor="identityProtection" className="text-sm text-gray-700 cursor-pointer">Identity Protection</Label>
                      </div>
                      <span className="text-sm font-medium text-[#0A1E3C]">$10/mo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Checkbox id="premiumTechPro" checked={formData.premiumTechPro} onCheckedChange={(c) => setFormData((p) => ({ ...p, premiumTechPro: c as boolean }))} />
                        <Label htmlFor="premiumTechPro" className="text-sm text-gray-700 cursor-pointer">My Premium Tech Pro</Label>
                      </div>
                      <span className="text-sm font-medium text-[#0A1E3C]">$10/mo</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-13 text-base rounded-xl shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting Order...
                </>
              ) : (
                "Submit Order"
              )}
            </Button>

            <p className="text-center text-xs text-gray-400 leading-relaxed">
              By submitting this form, you agree to our{" "}
              <a href="/terms" className="underline hover:text-[#0A1E3C]">Terms of Service</a> and{" "}
              <a href="/privacy" className="underline hover:text-[#0A1E3C]">Privacy Policy</a>, and you consent to be contacted by an authorized Frontier representative by phone, email, or text message at the number and address provided above for the purpose of completing your service order. Message and data rates may apply. You may opt out at any time.
            </p>

          </form>
        </div>
      </div>
    </div>,
    document.body,
  )
}
