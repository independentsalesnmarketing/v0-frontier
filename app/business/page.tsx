"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Check,
  Zap,
  Wifi,
  Shield,
  Gift,
  FileText,
  Phone,
  Cloud,
  MessageSquare,
  BarChart4,
  Smartphone,
  Server,
  ChevronRight,
  Building2,
  Globe,
  Clock,
  Star,
  ChevronDown,
  Store,
  Stethoscope,
  Briefcase,
  School,
  Building,
} from "lucide-react"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BusinessSolutions() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")
  const [activeTab, setActiveTab] = useState("retail")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openOrderForm = (plan: string) => {
    setSelectedPlan(plan)
    setIsOrderFormOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToPlans = () => {
    const plansSection = document.getElementById("business-plans")
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-[#0A1E3C] text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage:
            'url("/images/hero-family-internet.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-[#0A1E3C]/80" /> {/* Dark overlay with brand navy */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frontier Business Solutions
              <span className="block mt-2 text-[#00B7C3]">Built for What's Next</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              Empower your business with enterprise-grade fiber internet, advanced communication tools, and technology
              solutions designed for today's digital workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#DA202C] hover:bg-[#c41c27] text-white border-none"
                onClick={() => openOrderForm("Business Fiber")}
              >
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                onClick={scrollToPlans}
              >
                View Business Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Advantages */}
      <section className="py-16 bg-white text-[#0A1E3C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Frontier Business?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses that trust Frontier for their critical connectivity and communication needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-[#00B7C3]/10 p-4 rounded-full mb-4">
                <Clock className="w-10 h-10 text-[#00B7C3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">99.9% Uptime Guarantee</h3>
              <p className="text-gray-600">
                Our fiber network is built for reliability, ensuring your business stays connected when it matters most.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-[#00B7C3]/10 p-4 rounded-full mb-4">
                <Building2 className="w-10 h-10 text-[#00B7C3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dedicated Business Support</h3>
              <p className="text-gray-600">
                Access 24/7 priority support from specialists who understand business connectivity needs.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-[#00B7C3]/10 p-4 rounded-full mb-4">
                <Globe className="w-10 h-10 text-[#00B7C3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                From small businesses to enterprises, our solutions grow with your needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Business Customers Say</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover why businesses choose Frontier for their critical connectivity needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0A1E3C] p-8 rounded-lg border border-gray-800">
              <div className="flex mb-4 text-[#00B7C3]">
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Since switching to Frontier Business Fiber, our productivity has increased dramatically. The reliable
                connection and blazing-fast speeds have transformed how we operate."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00B7C3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <p className="font-semibold">Jennifer Davis</p>
                  <p className="text-sm text-gray-400">CEO, Meridian Technologies</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A1E3C] p-8 rounded-lg border border-gray-800">
              <div className="flex mb-4 text-[#00B7C3]">
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The dedicated support team at Frontier understands our business needs. When we needed to scale quickly,
                they provided solutions that grew with us."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00B7C3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RM
                </div>
                <div>
                  <p className="font-semibold">Robert Martinez</p>
                  <p className="text-sm text-gray-400">Operations Director, Highland Retail</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A1E3C] p-8 rounded-lg border border-gray-800">
              <div className="flex mb-4 text-[#00B7C3]">
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Frontier's business solutions package saved us money while providing better service. Their VoIP
                integration with our existing systems was seamless."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00B7C3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SJ
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">IT Manager, Cascade Medical Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Internet Plans */}
      <section id="business-plans" className="py-16 bg-[#0A1E3C] scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Business Internet Plans</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              High-performance fiber internet solutions designed for business operations of any scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-[#0A1E3C]">Business Fiber 500M</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#DA202C]">$69.99</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="line-through">$84.99</span> per month for 12 months
                </p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">500/500 Mbps symmetrical speeds</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">Ideal for small businesses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">99.9% network reliability</span>
                  </li>
                  <li className="flex items-start">
                    <Gift className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">$100 Visa® Reward Card</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-[#DA202C] hover:bg-[#c41c27] text-white"
                  onClick={() => openOrderForm("Business Fiber 500M")}
                >
                  Order Now
                </Button>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-[#0A1E3C]">Business Fiber 1 Gig</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#DA202C]">$94.99</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="line-through">$109.99</span> per month for 12 months
                </p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">1000/1000 Mbps symmetrical speeds</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">Perfect for medium-sized businesses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">99.9% network reliability</span>
                  </li>
                  <li className="flex items-start">
                    <Gift className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">$200 Visa® Reward Card</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-[#DA202C] hover:bg-[#c41c27] text-white"
                  onClick={() => openOrderForm("Business Fiber 1 Gig")}
                >
                  Order Now
                </Button>
              </div>
            </div>

            {/* Plan 3 - Best Value */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px] border-2 border-[#DA202C] relative">
              <div className="absolute top-0 right-0 bg-[#DA202C] text-white py-1 px-4 text-sm font-bold">
                Best Value
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-[#0A1E3C]">Business Fiber 2 Gig</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#DA202C]">$129.99</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="line-through">$144.99</span> per month for 12 months
                </p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">2000/2000 Mbps symmetrical speeds</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">Ideal for large businesses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">99.9% network reliability</span>
                  </li>
                  <li className="flex items-start">
                    <Gift className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">$300 Visa® Reward Card</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-[#DA202C] hover:bg-[#c41c27] text-white"
                  onClick={() => openOrderForm("Business Fiber 2 Gig")}
                >
                  Order Now
                </Button>
              </div>
            </div>

            {/* Plan 4 - New */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px] relative">
              <div className="absolute top-0 right-0 bg-[#00B7C3] text-white py-1 px-4 text-sm font-bold">New!</div>
              <div className="bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-[#0A1E3C]">Business Fiber 5 Gig</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#DA202C]">$179.99</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="line-through">$194.99</span> per month for 12 months
                </p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">5000/5000 Mbps symmetrical speeds</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">Ultimate performance for enterprises</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">99.9% network reliability</span>
                  </li>
                  <li className="flex items-start">
                    <Gift className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A1E3C]">$500 Visa® Reward Card</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-[#DA202C] hover:bg-[#c41c27] text-white"
                  onClick={() => openOrderForm("Business Fiber 5 Gig")}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>

          {/* Plan Comparison Table */}
          <div className="mt-16 overflow-hidden rounded-lg bg-white">
            <h3 className="p-6 text-xl font-bold text-[#0A1E3C]">Business Fiber Plan Comparison</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-bold text-[#0A1E3C]">Features</TableHead>
                    <TableHead className="font-bold text-[#0A1E3C]">Business 500M</TableHead>
                    <TableHead className="font-bold text-[#0A1E3C]">Business 1 Gig</TableHead>
                    <TableHead className="font-bold text-[#0A1E3C]">Business 2 Gig</TableHead>
                    <TableHead className="font-bold text-[#0A1E3C]">Business 5 Gig</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1E3C]">Download Speed</TableCell>
                    <TableCell className="text-[#0A1E3C]">500 Mbps</TableCell>
                    <TableCell className="text-[#0A1E3C]">1000 Mbps</TableCell>
                    <TableCell className="text-[#0A1E3C]">2000 Mbps</TableCell>
                    <TableCell className="text-[#0A1E3C]">5000 Mbps</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1E3C]">Upload Speed</TableCell>
                    <TableCell className="text-[#0A1E3C]">500 Mbps</TableCell>
                    <TableCell className="text-[#0A1E3C]">1000 Mbps</TableCell>
                    <TableCell className="text-[#0A1E3C]">2000 Mbps</TableCell>
                    <TableCell className="text-[#0A1E3C]">5000 Mbps</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1E3C]">Ideal For</TableCell>
                    <TableCell className="text-[#0A1E3C]">Small businesses (1-10 employees)</TableCell>
                    <TableCell className="text-[#0A1E3C]">Medium businesses (10-50 employees)</TableCell>
                    <TableCell className="text-[#0A1E3C]">Large businesses (50-100 employees)</TableCell>
                    <TableCell className="text-[#0A1E3C]">Enterprise (100+ employees)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1E3C]">Static IP</TableCell>
                    <TableCell className="text-[#0A1E3C]">Available (+$19.99/mo)</TableCell>
                    <TableCell className="text-[#0A1E3C]">Available (+$19.99/mo)</TableCell>
                    <TableCell className="text-[#0A1E3C]">1 Included</TableCell>
                    <TableCell className="text-[#0A1E3C]">5 Included</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1E3C]">Router</TableCell>
                    <TableCell className="text-[#0A1E3C]">Business router included</TableCell>
                    <TableCell className="text-[#0A1E3C]">Business router included</TableCell>
                    <TableCell className="text-[#0A1E3C]">Advanced business router included</TableCell>
                    <TableCell className="text-[#0A1E3C]">Enterprise-grade router included</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1E3C]">Visa® Reward Card</TableCell>
                    <TableCell className="text-[#0A1E3C]">$100</TableCell>
                    <TableCell className="text-[#0A1E3C]">$200</TableCell>
                    <TableCell className="text-[#0A1E3C]">$300</TableCell>
                    <TableCell className="text-[#0A1E3C]">$500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1E3C]">Service Level Agreement</TableCell>
                    <TableCell className="text-[#0A1E3C]">Basic SLA</TableCell>
                    <TableCell className="text-[#0A1E3C]">Enhanced SLA</TableCell>
                    <TableCell className="text-[#0A1E3C]">Premium SLA</TableCell>
                    <TableCell className="text-[#0A1E3C]">Enterprise SLA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1E3C]">Price</TableCell>
                    <TableCell className="font-bold text-[#DA202C]">$69.99/mo</TableCell>
                    <TableCell className="font-bold text-[#DA202C]">$94.99/mo</TableCell>
                    <TableCell className="font-bold text-[#DA202C]">$129.99/mo</TableCell>
                    <TableCell className="font-bold text-[#DA202C]">$179.99/mo</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white text-[#0A1E3C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored connectivity solutions designed for the unique needs of your industry.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-4 mb-8 space-x-2">
            <button
              className={`px-6 py-3 rounded-full whitespace-nowrap ${
                activeTab === "retail" ? "bg-[#0A1E3C] text-white" : "bg-gray-100 text-[#0A1E3C] hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("retail")}
            >
              Retail
            </button>
            <button
              className={`px-6 py-3 rounded-full whitespace-nowrap ${
                activeTab === "healthcare" ? "bg-[#0A1E3C] text-white" : "bg-gray-100 text-[#0A1E3C] hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("healthcare")}
            >
              Healthcare
            </button>
            <button
              className={`px-6 py-3 rounded-full whitespace-nowrap ${
                activeTab === "finance" ? "bg-[#0A1E3C] text-white" : "bg-gray-100 text-[#0A1E3C] hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("finance")}
            >
              Finance
            </button>
            <button
              className={`px-6 py-3 rounded-full whitespace-nowrap ${
                activeTab === "education" ? "bg-[#0A1E3C] text-white" : "bg-gray-100 text-[#0A1E3C] hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`px-6 py-3 rounded-full whitespace-nowrap ${
                activeTab === "hospitality" ? "bg-[#0A1E3C] text-white" : "bg-gray-100 text-[#0A1E3C] hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("hospitality")}
            >
              Hospitality
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            {activeTab === "retail" && (
              <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <Store className="w-24 h-24 text-[#00B7C3] mb-4" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Retail Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Frontier provides reliable connectivity for point-of-sale systems, inventory management, and digital
                    signage to enhance the customer experience and streamline operations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Secure payment processing with reliable connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Real-time inventory management and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Support for in-store Wi-Fi and customer engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "healthcare" && (
              <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <Stethoscope className="w-24 h-24 text-[#00B7C3] mb-4" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Healthcare Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Secure, HIPAA-compliant connectivity solutions for healthcare providers, enabling telemedicine,
                    electronic health records, and advanced imaging with 99.9% reliability.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Secure, HIPAA-compliant data transfer</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">High-speed connectivity for medical imaging</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Reliable telemedicine and remote patient monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "finance" && (
              <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <Briefcase className="w-24 h-24 text-[#00B7C3] mb-4" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Finance Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Ultra-secure, low-latency connectivity for financial institutions, supporting real-time
                    transactions, trading platforms, and regulatory compliance requirements.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Enhanced security for financial transactions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Low-latency connections for trading platforms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Reliable data backup and disaster recovery</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <School className="w-24 h-24 text-[#00B7C3] mb-4" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Education Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    High-capacity internet solutions for schools and universities, supporting digital learning,
                    administration systems, and campus-wide connectivity needs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Campus-wide Wi-Fi and connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Support for distance learning and virtual classrooms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Advanced administrative and learning management systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "hospitality" && (
              <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <Building className="w-24 h-24 text-[#00B7C3] mb-4" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Hospitality Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive connectivity solutions for hotels, resorts, and restaurants, enhancing guest
                    experiences while supporting operational efficiency.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">High-performance guest Wi-Fi networks</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Support for property management systems</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A1E3C]">Secure point-of-sale and payment processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-16 bg-[#0A1E3C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Business Solutions</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Beyond internet, Frontier offers a comprehensive suite of business technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Wifi className="w-12 h-12 mb-6 text-[#00B7C3]" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Business Internet</h3>
              <p className="text-gray-600 mb-4">
                High-speed fiber internet with no data caps or throttling. Perfect for businesses of all sizes.
              </p>
              <Link
                href="/business/internet"
                className="inline-flex items-center text-[#DA202C] font-medium hover:underline"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Phone className="w-12 h-12 mb-6 text-[#00B7C3]" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Business Phone</h3>
              <p className="text-gray-600 mb-4">
                Reliable voice solutions with advanced features to keep your business connected.
              </p>
              <Link
                href="/business/phone"
                className="inline-flex items-center text-[#DA202C] font-medium hover:underline"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Cloud className="w-12 h-12 mb-6 text-[#00B7C3]" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A1E3C]">Managed Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive IT solutions to streamline your operations and boost productivity.
              </p>
              <Link
                href="/business/managed-services"
                className="inline-flex items-center text-[#DA202C] font-medium hover:underline"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Business Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0A1E3C]">Additional Business Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your business capabilities with these specialized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-[#0A1E3C]">Frontier + RingCentral</h3>
              <p className="text-lg mb-4 text-[#0A1E3C]">Run your business from anywhere</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <MessageSquare className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">All in one secure app-Message, Video, Phone</span>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Share files and manage tasks</span>
                </li>
                <li className="flex items-start">
                  <BarChart4 className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Gain business insights with call Analytics</span>
                </li>
              </ul>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-lg font-semibold mb-2 text-[#0A1E3C]">Price starts at</p>
                <p className="text-3xl font-bold text-[#DA202C] mb-2">
                  $19.99<span className="text-sm font-normal text-gray-500">/mo</span>
                </p>
                <p className="text-sm text-gray-500">
                  for Essentials package when bundled with 1 or 2 Gig Frontier Business Fiber Internet
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-[#0A1E3C]">SmartVoice</h3>
              <p className="text-lg mb-4 text-[#0A1E3C]">VoIP for any-device flexibility</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Cloud className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cloud-based access to calls and messages</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Advanced features for responsive services</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Unlimited local and nationwide calling</span>
                </li>
              </ul>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-lg font-semibold mb-2 text-[#0A1E3C]">Price starts at</p>
                <p className="text-3xl font-bold text-[#DA202C] mb-2">
                  $19.99<span className="text-sm font-normal text-gray-500">/mo</span>
                </p>
                <p className="text-sm text-gray-500">when bundled with 1 or 2 Gig Frontier Business Fiber Internet</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-[#0A1E3C]">Static IP</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Safely share large files over a secure network</span>
                </li>
                <li className="flex items-start">
                  <Server className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Reduced server interruptions</span>
                </li>
                <li className="flex items-start">
                  <Smartphone className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Remote access anytime and anywhere</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 mr-2 text-[#00B7C3] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">More reliable and higher quality connections</span>
                </li>
              </ul>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-3xl font-bold text-[#DA202C] mb-2">
                  $19.99<span className="text-sm font-normal text-gray-500">/mo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0A1E3C]">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Frontier Business solutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(0)}
              >
                <span className="font-semibold text-[#0A1E3C]">
                  What makes Frontier Business Fiber different from regular business internet?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0A1E3C] transition-transform ${openFaq === 0 ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === 0 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">
                    Frontier Business Fiber provides symmetrical upload and download speeds, meaning you get the same
                    high performance in both directions. Our fiber network delivers 99.9% reliability, dedicated
                    business support, and scalable solutions designed specifically for business operations. Unlike
                    consumer internet, our business solutions include enhanced security features, premium service level
                    agreements, and business-grade equipment.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(1)}
              >
                <span className="font-semibold text-[#0A1E3C]">
                  How quickly can you install Frontier Business Internet?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0A1E3C] transition-transform ${openFaq === 1 ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === 1 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">
                    Installation times vary based on your business location and existing infrastructure. For locations
                    with existing fiber connectivity, installation can typically be completed within 5-10 business days.
                    For locations requiring new fiber construction, our team will provide a custom timeline after a site
                    survey. Our dedicated business installation teams prioritize minimizing disruption to your
                    operations.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(2)}
              >
                <span className="font-semibold text-[#0A1E3C]">What is included in the Service Level Agreement?</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0A1E3C] transition-transform ${openFaq === 2 ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === 2 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">
                    Our Business Fiber Service Level Agreements (SLAs) include guaranteed uptime of 99.9%, priority
                    technical support with 24/7 access to business specialists, defined response times for service
                    issues, and clear resolution timelines. Higher tier plans include enhanced SLAs with faster response
                    times, proactive monitoring, and additional service guarantees. Detailed SLA information is provided
                    during the ordering process.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(3)}
              >
                <span className="font-semibold text-[#0A1E3C]">
                  Can I bundle phone services with my business internet?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0A1E3C] transition-transform ${openFaq === 3 ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === 3 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">
                    Yes, Frontier offers a variety of business phone solutions that can be bundled with your internet
                    service for additional savings. Options include traditional business lines, SmartVoice VoIP service,
                    and our premium Frontier + RingCentral solution that provides unified communications with voice,
                    video, team messaging, and more. Bundle discounts vary based on the services selected and your
                    business needs.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(4)}
              >
                <span className="font-semibold text-[#0A1E3C]">
                  What if I need to upgrade my speed as my business grows?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0A1E3C] transition-transform ${openFaq === 4 ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === 4 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">
                    Frontier makes it easy to scale your business internet as your needs evolve. You can upgrade your
                    speed at any time by contacting our Business Solutions team. In most cases, speed upgrades can be
                    implemented remotely without requiring additional equipment or on-site visits. We also offer
                    flexible contract terms specifically designed for growing businesses, allowing you to adapt your
                    services as your requirements change.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0A1E3C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Empower Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the perfect Frontier Business Fiber plan and boost your productivity today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#DA202C] hover:bg-[#c41c27] text-white"
              onClick={() => setIsOrderFormOpen(true)}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <BusinessOrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        preSelectedPlan={selectedPlan}
      />
    </div>
  )
}
