import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Headphones, FileQuestion, Wifi, Settings, Phone, Shield } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Frontier Support Center | Help & Troubleshooting",
  description: "Get help with your Frontier internet, TV, or phone service. Access troubleshooting guides, FAQs, account support, and contact our customer service team.",
  alternates: { canonical: "/support" },
}

export default function Support() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Support", href: "/support" }]} />
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            'url("/images/mexican-customer-service-rep-in-call-center-yf3sjiypv5cb2fn1st0j-2.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frontier Support Center</h1>
          <p className="text-xl mb-8">We're here to help you with any questions or issues you may have.</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 text-[#0a192f] text-center">
          <h2 className="text-3xl font-bold mb-12">How Can We Help You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 flex flex-col items-center text-center">
              <Headphones className="w-12 h-12 text-[#e10600] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
              <p className="mb-8">Get in touch with our customer support team for personalized assistance.</p>
              <Button asChild className="bg-[#e10600] hover:bg-[#ff6b6b] text-white w-full">
                <a href="https://frontier.com/contact-us" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>
            <div className="border rounded-lg p-6 flex flex-col items-center text-center">
              <FileQuestion className="w-12 h-12 text-[#e10600] mb-4" />
              <h3 className="text-2xl font-bold mb-4">FAQ</h3>
              <p className="mb-8">Find answers to commonly asked questions about our services and billing.</p>
              <Button asChild className="bg-[#e10600] hover:bg-[#ff6b6b] text-white w-full">
                <Link href="/support/faq">View FAQ</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 flex flex-col items-center text-center">
              <Wifi className="w-12 h-12 text-[#e10600] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Internet Troubleshooting</h3>
              <p className="mb-8">Resolve common internet connectivity issues with our step-by-step guides.</p>
              <Button asChild className="bg-[#e10600] hover:bg-[#ff6b6b] text-white w-full">
                <a
                  href="https://frontier.com/support/internet-troubleshooting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Troubleshoot
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a192f]">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Support Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 flex items-center">
              <Settings className="w-12 h-12 text-[#64ffda] mr-6" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#0a192f]">24/7 Technical Support</h3>
                <p className="text-[#0a192f]">
                  Our expert technicians are available round the clock to assist you with any technical issues.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-center">
              <Shield className="w-12 h-12 text-[#64ffda] mr-6" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#0a192f]">Network Status</h3>
                <p className="text-[#0a192f]">
                  Stay informed about any ongoing network issues or maintenance in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 text-[#0a192f]">
          <h2 className="text-3xl font-bold text-center mb-12">Support by Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 flex flex-col items-center text-center">
              <Wifi className="w-12 h-12 text-[#e10600] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Internet Support</h3>
              <p className="mb-8">Get help with your Frontier Fiber or DSL internet service.</p>
              <Button asChild className="bg-[#e10600] hover:bg-[#ff6b6b] text-white w-full">
                <a href="https://frontier.com/support/internet" target="_blank" rel="noopener noreferrer">
                  Internet Support
                </a>
              </Button>
            </div>
            <div className="border rounded-lg p-6 flex flex-col items-center text-center">
              <Phone className="w-12 h-12 text-[#e10600] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Phone Support</h3>
              <p className="mb-8">Get assistance with your Digital Unlimited Voice service.</p>
              <Button asChild className="bg-[#e10600] hover:bg-[#ff6b6b] text-white w-full">
                <a href="https://frontier.com/support/phone" target="_blank" rel="noopener noreferrer">
                  Phone Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a192f]">
        <div className="container mx-auto px-4 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <p className="text-xl mb-8">Find answers to common questions about our services and support.</p>
          <Button asChild size="lg" className="bg-[#e10600] hover:bg-[#ff6b6b] text-white">
            <a href="https://frontier.com/support" target="_blank" rel="noopener noreferrer">
              View FAQ
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-[#e10600] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Additional Help?</h2>
          <p className="text-xl mb-8">Our support team is available 24/7 to assist you with any issues or questions.</p>
          <Button size="lg" variant="secondary" asChild className="bg-[#e10600] hover:bg-[#ff6b6b] text-white">
            <a href="https://frontier.com/contact-us" target="_blank" rel="noopener noreferrer">
              Contact Support
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
