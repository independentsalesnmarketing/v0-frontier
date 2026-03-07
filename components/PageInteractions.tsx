"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { OrderForm } from "@/components/OrderForm"

export function PageOrderButton({
  children,
  className,
  planName,
  size,
  defaultDigitalVoice,
}: {
  children: React.ReactNode
  className?: string
  planName?: string
  size?: "lg" | "default" | "sm"
  defaultDigitalVoice?: boolean
}) {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)

  return (
    <>
      <Button
        size={size}
        className={className}
        onClick={() => setIsOrderFormOpen(true)}
      >
        {children}
      </Button>
      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        preSelectedPlan={planName}
        orderType="residential"
        defaultDigitalVoice={defaultDigitalVoice}
      />
    </>
  )
}

export function FaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleFaq(index)}
            aria-expanded={openFaq === index}
          >
            <h3 className="text-lg font-medium text-[#0A1E3C]">{faq.question}</h3>
            <svg
              className={`h-5 w-5 text-[#DA202C] transition-transform ${openFaq === index ? "rotate-90" : ""}`}
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
          <div className={`overflow-hidden transition-all ${openFaq === index ? "max-h-96 p-4" : "max-h-0"}`}>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ContentTabs({
  tabs,
}: {
  tabs: { label: string; id: string; content: React.ReactNode }[]
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

  return (
    <>
      <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-lg font-medium mx-2 mb-0 border-b-2 transition-all ${
              activeTab === tab.id
                ? "border-[#DA202C] text-[#DA202C]"
                : "border-transparent text-gray-600 hover:text-[#0A1E3C]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
          {tab.content}
        </div>
      ))}
    </>
  )
}
