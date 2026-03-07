"use client"

import React, { useState } from "react"
import Link from "next/link"
import { OrderForm } from "@/components/OrderForm"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"
import { OrderTypePopup } from "@/components/OrderTypePopup"

export function OrderCTAButton({
  children,
  className,
  style,
  size,
  asChild,
  href,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  size?: "lg" | "default" | "sm"
  asChild?: boolean
  href?: string
}) {
  const [isOrderTypePopupOpen, setIsOrderTypePopupOpen] = useState(false)
  const [isResidentialOrderFormOpen, setIsResidentialOrderFormOpen] = useState(false)
  const [isBusinessOrderFormOpen, setIsBusinessOrderFormOpen] = useState(false)

  // If href is provided, render as a link instead
  if (href) {
    return (
      <Link href={href}>
        <button className={className} style={style}>
          {children}
        </button>
      </Link>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsOrderTypePopupOpen(true)}
        className={className}
        style={style}
      >
        {children}
      </button>
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

export function ResidentialOrderButton({
  children,
  className,
  planName,
}: {
  children: React.ReactNode
  className?: string
  planName?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>
      <OrderForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        preSelectedPlan={planName}
        orderType="residential"
      />
    </>
  )
}

export function ServiceTabs({ residentialContent, businessContent }: {
  residentialContent: React.ReactNode
  businessContent: React.ReactNode
}) {
  const [activeTab, setActiveTab] = useState("residential")

  return (
    <>
      <div className="flex flex-wrap justify-center mb-8">
        <button
          onClick={() => setActiveTab("residential")}
          className={`px-6 py-3 text-lg font-medium rounded-md mx-2 mb-2 transition-all ${
            activeTab === "residential"
              ? "bg-[#0A1E3C] text-white shadow-lg"
              : "bg-white text-[#0A1E3C] hover:bg-gray-100"
          }`}
          aria-label="View residential services"
        >
          Residential
        </button>
        <button
          onClick={() => setActiveTab("business")}
          className={`px-6 py-3 text-lg font-medium rounded-md mx-2 mb-2 transition-all ${
            activeTab === "business"
              ? "bg-[#0A1E3C] text-white shadow-lg"
              : "bg-white text-[#0A1E3C] hover:bg-gray-100"
          }`}
          aria-label="View business services"
        >
          Business
        </button>
      </div>
      {activeTab === "residential" ? residentialContent : businessContent}
    </>
  )
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-[#0A1E3C]">{question}</h3>
        <svg
          className={`h-5 w-5 text-[#e10600] transition-transform ${isOpen ? "rotate-90" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all ${isOpen ? "max-h-96 p-4" : "max-h-0"}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}
