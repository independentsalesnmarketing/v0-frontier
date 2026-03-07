"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Shield, Zap, Globe, Server, Clock, ArrowRight, Star, Building2, ChevronRight, Lock, BarChart4 } from "lucide-react"
import { BusinessOrderForm } from "@/components/BusinessOrderForm"
import Breadcrumbs from "@/components/Breadcrumbs"

const diaPlans = [
  { name: "DIA 500M", speed: "500/500 Mbps", price: "299", sla: "99.99%", ips: "5 static IPs", support: "4-hour repair", forText: "Small offices, retail, medical practices" },
  { name: "DIA 1 Gig", speed: "1,000/1,000 Mbps", price: "499", sla: "99.99%", ips: "13 static IPs", support: "4-hour repair", forText: "Mid-size businesses, multi-location", popular: true },
  { name: "DIA 2 Gig", speed: "2,000/2,000 Mbps", price: "799", sla: "99.99%", ips: "29 static IPs", support: "2-hour repair", forText: "Enterprise, data centers, healthcare" },
  { name: "DIA 5 Gig", speed: "5,000/5,000 Mbps", price: "1,299", sla: "99.99%", ips: "61 static IPs", support: "2-hour repair", forText: "Large enterprise, colocation, ISP" },
]

const features = [
  { icon: <Shield className="h-6 w-6" />, title: "99.99% Uptime SLA", desc: "Contractual uptime guarantee with financial credits if we fall short. Your business stays connected." },
  { icon: <Zap className="h-6 w-6" />, title: "Guaranteed Bandwidth", desc: "Unlike shared business internet, DIA provides committed information rate (CIR) — your speed never drops." },
  { icon: <Lock className="h-6 w-6" />, title: "Static IP Blocks", desc: "Dedicated static IP addresses for hosting servers, VPN endpoints, security cameras, and more." },
  { icon: <Clock className="h-6 w-6" />, title: "Priority Repair SLA", desc: "2-4 hour on-site repair guarantees. Dedicated NOC monitoring detects issues before you do." },
  { icon: <Globe className="h-6 w-6" />, title: "Symmetrical Fiber", desc: "Equal upload and download speeds on dedicated fiber — critical for cloud apps, VoIP, and video." },
  { icon: <BarChart4 className="h-6 w-6" />, title: "Proactive Monitoring", desc: "24/7 network operations center monitors your circuit. We see and fix problems before they impact you." },
]

const industries = [
  { name: "Healthcare", desc: "HIPAA-compliant connectivity for EHR, telehealth, and medical imaging.", icon: "🏥" },
  { name: "Financial Services", desc: "Low-latency, redundant connections for trading, banking, and compliance.", icon: "🏦" },
  { name: "Retail & Hospitality", desc: "Reliable POS, inventory systems, and guest Wi-Fi across locations.", icon: "🏪" },
  { name: "Education", desc: "High-bandwidth for 1:1 device programs, LMS, and video conferencing.", icon: "🎓" },
  { name: "Manufacturing", desc: "IoT connectivity, SCADA systems, and supply chain management.", icon: "🏭" },
  { name: "Government", desc: "Secure, compliant connectivity with redundancy for critical services.", icon: "🏛️" },
]

const faqData = [
  { q: "What is Dedicated Internet Access (DIA)?", a: "DIA is a premium business internet service where your organization gets a dedicated fiber connection that isn't shared with other customers. Unlike standard broadband, DIA guarantees your contracted speed 100% of the time with enterprise-grade SLAs." },
  { q: "How is DIA different from standard business internet?", a: "Standard business internet shares bandwidth with other users in your area. DIA provides a dedicated fiber line exclusively for your business with guaranteed bandwidth (CIR), stricter SLAs (99.99% vs 99.9%), faster repair times, and static IP blocks included." },
  { q: "What SLA do you offer?", a: "Frontier DIA includes a 99.99% uptime SLA with financial credits for any downtime. Repair SLAs range from 2-4 hours depending on your plan tier." },
  { q: "Can I get DIA at multiple locations?", a: "Yes. Frontier provides multi-site DIA with centralized management, consistent SLAs across all locations, and optional MPLS/SD-WAN connectivity between sites." },
  { q: "Is DIA available in my area?", a: "Frontier DIA is available across our 29-state fiber footprint. Contact us with your business address for a custom availability check and quote." },
]

export default function DedicatedInternetPage() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)

  return (
    <div className="bg-white text-[#333]">
      <Breadcrumbs items={[
        { label: "Business", href: "/business" },
        { label: "Dedicated Internet" },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3C] to-[#162d52] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 text-sm">
              <Server className="h-4 w-4 text-[#00b7c3]" />
              Enterprise Grade
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Dedicated Internet Access
              <span className="block text-[#00b7c3] mt-2">Guaranteed Speed. Zero Compromise.</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl">
              When your business can&apos;t afford downtime, shared bandwidth isn&apos;t an option. Frontier DIA delivers committed symmetrical fiber with 99.99% SLA and priority repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsOrderFormOpen(true)} className="inline-flex items-center justify-center gap-2 bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl transition-all">
                Get a Custom Quote <ArrowRight className="h-5 w-5" />
              </button>
              <Link href="/business" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white font-bold h-14 px-10 rounded-xl text-lg transition-all">
                View Standard Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#f8f9fb]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><p className="text-3xl font-black text-[#0A1E3C]">99.99%</p><p className="text-xs text-gray-500 mt-1">Uptime SLA</p></div>
            <div><p className="text-3xl font-black text-[#0A1E3C]">5 Gbps</p><p className="text-xs text-gray-500 mt-1">Max Speed</p></div>
            <div><p className="text-3xl font-black text-[#0A1E3C]">2hr</p><p className="text-xs text-gray-500 mt-1">Repair SLA</p></div>
            <div><p className="text-3xl font-black text-[#0A1E3C]">29</p><p className="text-xs text-gray-500 mt-1">States</p></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">Why Dedicated Internet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#00b7c3] transition-all">
                <div className="w-12 h-12 bg-[#00b7c3]/10 rounded-xl flex items-center justify-center text-[#00b7c3] mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#0A1E3C] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIA Plans */}
      <section className="py-16 px-4 bg-[#0A1E3C] text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-4">Dedicated Internet Plans</h2>
          <p className="text-center text-white/60 mb-12 max-w-xl mx-auto">Custom pricing based on location. Contact us for an exact quote.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diaPlans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-6 flex flex-col ${plan.popular ? "bg-white text-[#0A1E3C] ring-2 ring-[#DA202C]" : "bg-white/5 border border-white/10"}`}>
                {plan.popular && <span className="inline-block bg-[#DA202C] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">Most Popular</span>}
                <h3 className={`text-xl font-black mb-1 ${plan.popular ? "text-[#0A1E3C]" : ""}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-gray-500" : "text-white/50"}`}>{plan.speed}</p>
                <div className="mb-4">
                  <span className={`text-sm ${plan.popular ? "text-gray-500" : "text-white/50"}`}>Starting at</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black">${plan.price}</span>
                    <span className={`text-sm ${plan.popular ? "text-gray-500" : "text-white/50"}`}>/mo</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6 flex-grow">
                  {[plan.sla + " uptime SLA", plan.ips + " included", plan.support + " guarantee", "Symmetrical fiber", plan.forText].map((feat, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Check className={`h-4 w-4 flex-shrink-0 ${plan.popular ? "text-[#00b7c3]" : "text-[#64ffda]"}`} />
                      <span className={`text-sm ${plan.popular ? "text-gray-600" : "text-white/70"}`}>{feat}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setIsOrderFormOpen(true)} className={`w-full font-bold py-3 rounded-xl text-sm transition-all ${plan.popular ? "bg-[#DA202C] hover:bg-[#b71c1c] text-white" : "bg-white/10 hover:bg-white/20 text-white"}`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">Built for Every Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <span className="text-3xl mb-3 block">{ind.icon}</span>
                <h3 className="font-bold text-[#0A1E3C] mb-2">{ind.name}</h3>
                <p className="text-sm text-gray-600">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIA vs Standard */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">DIA vs Standard Business Internet</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="text-left py-3 px-4 rounded-tl-lg">Feature</th>
                  <th className="text-center py-3 px-4">Standard Business</th>
                  <th className="text-center py-3 px-4 rounded-tr-lg bg-[#DA202C]">Dedicated (DIA)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bandwidth Type", "Shared", "Dedicated (CIR)"],
                  ["Uptime SLA", "99.9%", "99.99%"],
                  ["Repair Time", "Next business day", "2-4 hours"],
                  ["Static IPs", "Add-on ($19.99/mo)", "Included (5-61)"],
                  ["Speed Guarantee", "Best effort", "100% committed"],
                  ["Monitoring", "Self-service", "24/7 NOC proactive"],
                  ["Financial Credits", "No", "Yes — SLA-backed"],
                ].map(([feature, standard, dia], i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-[#0A1E3C]">{feature}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{standard}</td>
                    <td className="py-3 px-4 text-center font-bold text-[#DA202C] bg-[#DA202C]/5">{dia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0A1E3C] mb-12">Dedicated Internet FAQ</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 group">
                <summary className="p-5 font-bold text-[#0A1E3C] cursor-pointer hover:text-[#00b7c3] transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#DA202C] text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Get Your Custom DIA Quote</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Tell us about your business needs and we&apos;ll design a dedicated internet solution with guaranteed performance.</p>
          <button onClick={() => setIsOrderFormOpen(true)} className="inline-flex items-center gap-2 bg-white text-[#DA202C] hover:bg-gray-100 font-bold h-14 px-10 rounded-xl text-lg shadow-xl transition-all">
            Request a Quote <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Cross Links */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/business" className="text-[#00b7c3] hover:underline font-medium">Business Solutions</Link>
            <Link href="/business/internet" className="text-[#00b7c3] hover:underline font-medium">Business Internet</Link>
            <Link href="/business/phone" className="text-[#00b7c3] hover:underline font-medium">Business Phone</Link>
            <Link href="/internet" className="text-[#00b7c3] hover:underline font-medium">Residential Plans</Link>
          </div>
        </div>
      </section>

      <BusinessOrderForm isOpen={isOrderFormOpen} onClose={() => setIsOrderFormOpen(false)} preSelectedPlan="Dedicated Internet" />
    </div>
  )
}
