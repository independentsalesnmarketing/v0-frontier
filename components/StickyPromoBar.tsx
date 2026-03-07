"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"
import { OrderForm } from "@/components/OrderForm"
import { OrderTypePopup } from "@/components/OrderTypePopup"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"

export function StickyPromoBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isOrderTypePopupOpen, setIsOrderTypePopupOpen] = useState(false)
  const [isResidentialOrderFormOpen, setIsResidentialOrderFormOpen] = useState(false)
  const [isBusinessOrderFormOpen, setIsBusinessOrderFormOpen] = useState(false)

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#0066cc] to-[#0052a3] py-3 px-4 shadow-lg">
        <div className="container mx-auto max-w-7xl flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm md:text-base font-bold truncate">
              🎁 FREE Installation + No Deposit
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              size="sm"
              className="bg-white hover:bg-gray-100 text-[#0066cc] font-bold text-xs md:text-sm py-1 px-3 md:px-4"
              onClick={() => setIsOrderTypePopupOpen(true)}
            >
              Order Now
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 p-1"
              aria-label="Close promo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <OrderTypePopup
        isOpen={isOrderTypePopupOpen}
        onClose={() => setIsOrderTypePopupOpen(false)}
        onSelectResidential={() => {
          setIsOrderTypePopupOpen(false)
          setIsResidentialOrderFormOpen(true)
        }}
        onSelectBusiness={() => {
          setIsOrderTypePopupOpen(false)
          setIsBusinessOrderFormOpen(true)
        }}
      />
      <OrderForm
        isOpen={isResidentialOrderFormOpen}
        onClose={() => setIsResidentialOrderFormOpen(false)}
        orderType="residential"
      />
      <BusinessOrderForm isOpen={isBusinessOrderFormOpen} onClose={() => setIsBusinessOrderFormOpen(false)} />
    </>
  )
}
