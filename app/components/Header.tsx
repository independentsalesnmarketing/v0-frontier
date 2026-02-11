"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OrderForm } from "@/components/OrderForm"
import { OrderTypePopup } from "@/components/OrderTypePopup"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"
// import AvailabilityToolbar from "./AvailabilityToolbar" // Removed

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOrderTypePopupOpen, setIsOrderTypePopupOpen] = useState(false)
  const [isResidentialOrderFormOpen, setIsResidentialOrderFormOpen] = useState(false)
  const [isBusinessOrderFormOpen, setIsBusinessOrderFormOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openOrderTypePopup = () => {
    setIsOrderTypePopupOpen(true)
  }

  const closeOrderTypePopup = () => {
    setIsOrderTypePopupOpen(false)
  }

  const openResidentialOrderForm = () => {
    setIsOrderTypePopupOpen(false)
    setIsResidentialOrderFormOpen(true)
  }

  const openBusinessOrderForm = () => {
    setIsOrderTypePopupOpen(false)
    setIsBusinessOrderFormOpen(true)
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="bg-[#e10600] transition-all duration-300 w-full py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center text-white">
              <Image
                src="/images/frontier-logo-design.png"
                alt="Frontier Logo"
                width={120}
                height={40}
                className="mr-2"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/internet" className="text-white hover:text-[#0A1E3C] transition-colors font-medium">
                Internet
              </Link>
              <Link href="/tv-netflix" className="text-white hover:text-[#0A1E3C] transition-colors font-medium">
                TV
              </Link>
              <Link href="/home-phone" className="text-white hover:text-[#0A1E3C] transition-colors font-medium">
                Home Phone
              </Link>
              <Link href="/coverage" className="text-white hover:text-[#0A1E3C] transition-colors font-medium">
                Coverage
              </Link>
              <Link href="/business" className="text-white hover:text-[#0A1E3C] transition-colors font-medium">
                Business
              </Link>
              <Link href="/blog" className="text-white hover:text-[#0A1E3C] transition-colors font-medium">
                Blog
              </Link>
              <Link href="/support" className="text-white hover:text-[#0A1E3C] transition-colors font-medium">
                Support
              </Link>
            </nav>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* <AvailabilityToolbar /> // Removed */}

      {isMenuOpen && (
        <div className="md:hidden bg-[#0A1E3C] py-3 border-t border-[#1D3461] fixed top-[60px] left-0 right-0 w-full z-40">
          <div className="container mx-auto px-4 mb-4">
            <Image
              src="/images/frontier-logo-design.png"
              alt="Frontier Logo"
              width={120}
              height={40}
              className="w-28"
            />
          </div>
          <nav className="container mx-auto px-4 flex flex-col space-y-6">
            <Link href="/internet" className="text-white hover:text-[#DA202C] transition-colors">
              Internet
            </Link>
            <Link href="/tv-netflix" className="text-white hover:text-[#DA202C] transition-colors">
              TV
            </Link>
            <Link href="/home-phone" className="text-white hover:text-[#DA202C] transition-colors">
              Home Phone
            </Link>
            <Link href="/coverage" className="text-white hover:text-[#DA202C] transition-colors">
              Coverage
            </Link>
            <Link href="/business" className="text-white hover:text-[#DA202C] transition-colors">
              Business
            </Link>
            <Link href="/blog" className="text-white hover:text-[#DA202C] transition-colors">
              Blog
            </Link>
            <Link href="/support" className="text-white hover:text-[#DA202C] transition-colors">
              Support
            </Link>
            <Button
              variant="outline"
              className="bg-[#DA202C] text-white hover:bg-[#B71C1C] hover:text-white border-0 w-full"
              onClick={openOrderTypePopup}
            >
              Order Now
            </Button>
          </nav>
        </div>
      )}

      <OrderTypePopup
        isOpen={isOrderTypePopupOpen}
        onClose={closeOrderTypePopup}
        onSelectResidential={openResidentialOrderForm}
        onSelectBusiness={openBusinessOrderForm}
      />
      <OrderForm
        isOpen={isResidentialOrderFormOpen}
        onClose={() => setIsResidentialOrderFormOpen(false)}
        orderType="residential"
      />
      <BusinessOrderForm isOpen={isBusinessOrderFormOpen} onClose={() => setIsBusinessOrderFormOpen(false)} />
    </header>
  )
}
