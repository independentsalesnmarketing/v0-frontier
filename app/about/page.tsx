import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Users, Globe, Zap, Shield } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "About Frontier Retailer | Connecting Communities with Fiber",
  description: "Learn about Frontier Communications, a leading fiber internet provider connecting millions of homes and businesses with cutting-edge technology since 1935.",
  alternates: { canonical: "/about" },
}

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Frontier Retailer</h1>
          <p className="text-xl">Connecting communities with cutting-edge fiber technology since 1935</p>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg mb-8">
            At Frontier Retailer, we're dedicated to building the digital infrastructure that connects people,
            businesses, and communities. Our mission is to deliver the fastest, most reliable internet and communication
            services, empowering our customers to thrive in the digital age.
          </p>
          <p className="text-lg mb-8">
            With a legacy spanning over 85 years, we've evolved from a rural telephone company to a leading provider of
            fiber-optic internet, serving millions of customers across the United States. Our commitment to innovation
            and customer satisfaction drives us to continually expand our network and improve our services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">Innovation</h3>
              <p>
                We continuously push the boundaries of technology to provide cutting-edge solutions. From our
                state-of-the-art fiber-optic network to our advanced Wi-Fi systems, we're always looking for ways to
                enhance our customers' digital experiences.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">Reliability</h3>
              <p>
                We're committed to delivering consistent, high-quality service that our customers can depend on. Our
                robust infrastructure and dedicated support team ensure that you stay connected when it matters most.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">Community</h3>
              <p>
                We're dedicated to supporting and enhancing the communities we serve. Through various initiatives and
                partnerships, we strive to bridge the digital divide and promote digital literacy across all
                demographics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-500">Expanding Fiber Network</h3>
              <p className="mb-4">
                We're investing billions of dollars to expand our fiber-optic network, bringing ultra-fast internet to
                more communities across the nation. Our goal is to provide fiber internet access to 10 million locations
                by 2025.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  <span>Speeds up to 5 Gbps for residential customers</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  <span>Low latency for seamless gaming and video conferencing</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  <span>Symmetrical upload and download speeds</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-500">Customer-Centric Approach</h3>
              <p className="mb-4">
                We put our customers at the heart of everything we do. Our commitment to exceptional service is
                reflected in our:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Self-service online tools and resources</span>
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Rapid response times for service issues</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Comprehensive security solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <p className="text-lg mb-8">
            As a Frontier Retailer, we're proud to play a crucial role in connecting communities and driving economic
            growth. Our services enable:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">Remote Work</h3>
              <p>Empowering professionals to work from home with fast, reliable internet connections.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">Distance Learning</h3>
              <p>Supporting students and educators with the connectivity needed for online education.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-500">Small Businesses</h3>
              <p>Providing the digital infrastructure for local businesses to compete in the global marketplace.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Frontier Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/internet" className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Zap className="w-8 h-8 mx-auto mb-3 text-red-500" />
              <h3 className="font-semibold text-white">Fiber Internet</h3>
              <p className="text-sm text-gray-400 mt-1">Plans from $29.99/mo</p>
            </Link>
            <Link href="/tv-netflix" className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Globe className="w-8 h-8 mx-auto mb-3 text-red-500" />
              <h3 className="font-semibold text-white">TV & Netflix</h3>
              <p className="text-sm text-gray-400 mt-1">Stream your favorites</p>
            </Link>
            <Link href="/home-phone" className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Shield className="w-8 h-8 mx-auto mb-3 text-red-500" />
              <h3 className="font-semibold text-white">Home Phone</h3>
              <p className="text-sm text-gray-400 mt-1">Unlimited calling</p>
            </Link>
            <Link href="/bundles" className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Users className="w-8 h-8 mx-auto mb-3 text-red-500" />
              <h3 className="font-semibold text-white">Bundles</h3>
              <p className="text-sm text-gray-400 mt-1">Save with bundles</p>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/coverage" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
              Check Coverage Map
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/blog" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
              Read Our Blog
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/support" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
              Get Support
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/contact" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Experience the Frontier Difference</h2>
          <p className="text-xl mb-8">
            Join the millions of satisfied customers who trust Frontier Retailer for their internet and communication
            needs.
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/internet">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
