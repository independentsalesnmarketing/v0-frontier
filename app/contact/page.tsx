import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Globe, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Contact Frontier | Customer Support & Sales",
  description: "Get in touch with Frontier Communications. Contact our sales team to order fiber internet or reach customer support for help with your existing service.",
  alternates: { canonical: "/contact" },
}

export default function Contact() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <section className="bg-gradient-to-r from-[#0a192f] to-[#1d2d50] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Frontier</h1>
          <p className="text-xl mb-8">We're here to help. Reach out to us for any questions or support.</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 text-[#0a192f]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch with Frontier</h2>
              <p className="text-gray-700 mb-4">
                Have questions about our fiber internet, TV, or phone services? Our dedicated customer service team is here to help. Whether you're looking to check availability, compare plans, or need technical support, we've got you covered.
              </p>
              <p className="text-gray-700 mb-4">
                At Frontier, we believe that excellent customer service is the foundation of our business. Our team of experts is trained to provide you with personalized solutions tailored to your specific needs. We understand that every customer's situation is unique, which is why we take the time to understand your requirements before recommending a solution.
              </p>
              <p className="text-gray-700 mb-6">
                You can reach out to us through multiple channels—phone, email, or this contact form. Our representatives are available 24/7 to assist you with any questions or concerns. We're committed to responding to your inquiries promptly and providing you with the information you need to make informed decisions about your home internet and communication services.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input type="tel" id="phone" name="phone" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input type="text" id="subject" name="subject" placeholder="e.g., Fiber Availability, Tech Support, Billing" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <Button type="submit" className="bg-[#e10600] hover:bg-[#ff6b6b] text-white w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                We provide multiple ways for you to reach our customer service and technical support teams. Choose the method that works best for you.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#e10600] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone Support (24/7)</h3>
                    <p className="text-gray-600 mb-1"><strong>Customer Service:</strong> 1-800-921-8101</p>
                    <p className="text-gray-600">Technical Support: 1-800-239-4430</p>
                    <p className="text-sm text-gray-500 mt-2">Calls may be monitored for quality and training purposes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#e10600] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-1"><strong>General Inquiries:</strong> customerservice@frontier.com</p>
                    <p className="text-gray-600">Technical Support: techsupport@frontier.com</p>
                    <p className="text-sm text-gray-500 mt-2">We typically respond to emails within 24 business hours.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#e10600] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
                    <p className="text-gray-600">Frontier Communications</p>
                    <p className="text-gray-600">401 Merritt 7</p>
                    <p className="text-gray-600">Norwalk, CT 06851</p>
                    <p className="text-sm text-gray-500 mt-2">USA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-[#e10600] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Online Resources</h3>
                    <p className="text-gray-600 mb-2">Visit our website for more information:</p>
                    <a href="https://frontier.com" className="text-[#e10600] hover:underline font-medium">frontier.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#e10600] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Hours of Operation</h3>
                    <p className="text-gray-600">Customer Service: 24/7</p>
                    <p className="text-gray-600">Technical Support: 24/7</p>
                    <p className="text-sm text-gray-500 mt-2">Holidays included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a192f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Frontier for Your Communication Needs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#e10600]">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                Frontier delivers fiber-optic internet with speeds up to 5 Gbps, combined with premium TV and home phone services. Our advanced technology ensures you get the best possible experience for streaming, gaming, and working from home.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#e10600]">Reliable Customer Support</h3>
              <p className="text-gray-300">
                Our customer service team is available 24/7 to assist you. Whether you have a technical question, need to make changes to your account, or want to upgrade your service, we're here to help every step of the way.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#e10600]">Competitive Pricing</h3>
              <p className="text-gray-300">
                Frontier offers flexible plans starting at $29.99 per month with no long-term contracts. We believe high-quality internet and entertainment shouldn't break the bank, which is why we focus on affordable pricing without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 text-[#0a192f]">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">Find quick answers to common questions about our services, billing, installation, and technical support.</p>
          <div className="text-center mb-12">
            <Button size="lg" asChild className="bg-[#e10600] hover:bg-[#c70500] text-white">
              <Link href="/support/faq">View Our FAQ</Link>
            </Button>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/internet" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h4 className="font-semibold text-[#0a192f]">Internet Plans</h4>
              <p className="text-sm text-gray-500 mt-1">From $29.99/mo</p>
            </Link>
            <Link href="/coverage" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h4 className="font-semibold text-[#0a192f]">Coverage Map</h4>
              <p className="text-sm text-gray-500 mt-1">Check availability</p>
            </Link>
            <Link href="/support" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h4 className="font-semibold text-[#0a192f]">Support Center</h4>
              <p className="text-sm text-gray-500 mt-1">Get help now</p>
            </Link>
            <Link href="/order" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h4 className="font-semibold text-[#0a192f]">Order Service</h4>
              <p className="text-sm text-gray-500 mt-1">Sign up today</p>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/blog" className="text-[#e10600] hover:underline flex items-center">
              Read Our Blog <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/about" className="text-[#e10600] hover:underline flex items-center">
              About Frontier <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/business" className="text-[#e10600] hover:underline flex items-center">
              Business Solutions <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/internet-speed-test" className="text-[#e10600] hover:underline flex items-center">
              Speed Test <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
