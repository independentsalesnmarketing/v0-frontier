"use client"

import { Zap, CheckCircle } from "lucide-react"

export function MoneyBackGuarantee() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-t-4 border-b-4 border-blue-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-100">
              <Zap className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Lightning-Fast Fiber Internet
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Experience symmetrical speeds up to 7 Gbps with unlimited data, no deposit, and no long-term contracts. Perfect for streaming, gaming, working from home, and smart homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center justify-center sm:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-800 font-medium">Unlimited Data - No Caps</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-800 font-medium">FREE Professional Installation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
