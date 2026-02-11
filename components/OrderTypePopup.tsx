"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OrderTypePopupProps {
  isOpen: boolean
  onClose: () => void
  onSelectResidential: () => void
  onSelectBusiness: () => void
}

export function OrderTypePopup({ isOpen, onClose, onSelectResidential, onSelectBusiness }: OrderTypePopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-300">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-gray-900 shadow-2xl transform transition-all duration-300 border-t-4 border-[#DA202C]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#0A1E3C]">Select Order Type</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <p className="text-gray-600 mb-6">Choose the type of service you're interested in ordering.</p>

        <div className="space-y-4">
          <Button
            onClick={onSelectResidential}
            className="w-full bg-[#DA202C] text-white hover:bg-[#B71C1C] transition-colors duration-200 py-6 text-lg font-medium rounded-md shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Residential
          </Button>

          <Button
            onClick={onSelectBusiness}
            className="w-full bg-[#00B7C3] text-white hover:bg-[#009DAA] transition-colors duration-200 py-6 text-lg font-medium rounded-md shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm2 5h2v2H9v-2z"
                clipRule="evenodd"
              />
            </svg>
            Business
          </Button>
        </div>
      </div>
    </div>
  )
}
