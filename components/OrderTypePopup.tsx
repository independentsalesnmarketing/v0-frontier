"use client"

import { X, Home, Building2, Wifi, Phone, Tv, CheckCircle2, Headphones, Zap, Shield } from "lucide-react"

interface OrderTypePopupProps {
  isOpen: boolean
  onClose: () => void
  onSelectResidential: () => void
  onSelectBusiness: () => void
}

const residentialFeatures = [
  { icon: Wifi, text: "Fiber speeds up to 7 Gig" },
  { icon: Tv, text: "Netflix & streaming bundles" },
  { icon: Phone, text: "Home phone available" },
]

const businessFeatures = [
  { icon: Zap, text: "Dedicated business fiber" },
  { icon: Shield, text: "99.9% uptime SLA" },
  { icon: Headphones, text: "Priority business support" },
]

export function OrderTypePopup({ isOpen, onClose, onSelectResidential, onSelectBusiness }: OrderTypePopupProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#0A1E3C] px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-[#DA202C] text-xs font-semibold uppercase tracking-widest mb-0.5">Get Started</p>
            <h2 className="text-white text-xl font-bold leading-tight">Who are you ordering for?</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cards */}
        <div className="p-5 grid grid-cols-2 gap-4">
          {/* Residential Card */}
          <button
            onClick={onSelectResidential}
            className="group relative flex flex-col items-start text-left rounded-xl border-2 border-gray-100 hover:border-[#DA202C] bg-gray-50 hover:bg-red-50 p-5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DA202C] focus:ring-offset-2"
          >
            <div className="bg-[#DA202C]/10 group-hover:bg-[#DA202C]/20 rounded-xl p-3 mb-4 transition-colors">
              <Home className="h-7 w-7 text-[#DA202C]" />
            </div>
            <h3 className="text-[#0A1E3C] text-base font-bold mb-1">Residential</h3>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">Home internet, TV & phone service</p>
            <ul className="space-y-2 w-full">
              {residentialFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-xs text-gray-600">
                  <Icon className="h-3.5 w-3.5 text-[#DA202C] shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 w-full bg-[#DA202C] group-hover:bg-[#B71C1C] text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-colors">
              Select Residential
            </div>
          </button>

          {/* Business Card */}
          <button
            onClick={onSelectBusiness}
            className="group relative flex flex-col items-start text-left rounded-xl border-2 border-gray-100 hover:border-[#0A1E3C] bg-gray-50 hover:bg-slate-50 p-5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0A1E3C] focus:ring-offset-2"
          >
            <div className="bg-[#0A1E3C]/10 group-hover:bg-[#0A1E3C]/20 rounded-xl p-3 mb-4 transition-colors">
              <Building2 className="h-7 w-7 text-[#0A1E3C]" />
            </div>
            <h3 className="text-[#0A1E3C] text-base font-bold mb-1">Business</h3>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">Internet & phone for your business</p>
            <ul className="space-y-2 w-full">
              {businessFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-xs text-gray-600">
                  <Icon className="h-3.5 w-3.5 text-[#0A1E3C] shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 w-full bg-[#0A1E3C] group-hover:bg-[#162d57] text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-colors">
              Select Business
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="px-5 pb-5">
          <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-4 py-2.5">
            <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
            <p className="text-xs text-green-800">
              <strong>No commitment required.</strong> Get a quote in under 2 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
