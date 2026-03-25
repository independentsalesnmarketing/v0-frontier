"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OrderForm } from "@/components/OrderForm"
import { OrderTypePopup } from "@/components/OrderTypePopup"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"
import SiteSearch from "@/components/SiteSearch"

const navLinks = [
  { href: "/internet", label: "Internet Plans" },
  { href: "/deals", label: "Deals" },
  { href: "/bundles", label: "Bundles" },
  { href: "/check-availability", label: "Check Availability" },
  { href: "/blog", label: "Blog" },
  { href: "/business", label: "Business" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOrderTypePopupOpen, setIsOrderTypePopupOpen] = useState(false)
  const [isResidentialOrderFormOpen, setIsResidentialOrderFormOpen] = useState(false)
  const [isBusinessOrderFormOpen, setIsBusinessOrderFormOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  // Scroll detection for header background
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const openOrderTypePopup = () => {
    setIsMenuOpen(false)
    setIsOrderTypePopupOpen(true)
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Main nav bar — glass at top, red when scrolled */}
      <div className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#e10600] shadow-[0_2px_24px_rgba(0,0,0,0.3)]"
          : "bg-[#0A1E3C]/70 backdrop-blur-md border-b border-white/10"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/frontier-logo-design.png"
                alt="Frontier Deals logo — authorized retailer of Frontier Communications fiber internet plans, offering residential and business internet service across 25+ US states with no-contract, symmetrical fiber speeds from 500 Mbps to 7 Gig."
                width={110}
                height={36}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <SiteSearch />
              <Button
                onClick={openOrderTypePopup}
                size="sm"
                className="bg-white text-[#e10600] hover:bg-gray-100 font-bold text-sm px-5 cta-pulse"
              >
                Order Online
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 bottom-0 bg-[#0A1E3C] z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {/* Mobile search */}
            <div className="mb-4">
              <SiteSearch />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-white/10 my-4" />

            <Button
              className="bg-[#DA202C] text-white hover:bg-[#B71C1C] border-0 w-full mt-2 py-6 text-base font-bold"
              onClick={openOrderTypePopup}
            >
              Order Online
            </Button>
          </nav>
        </div>
      )}

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
    </header>
  )
}
