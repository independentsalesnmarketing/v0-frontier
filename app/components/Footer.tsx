import Link from "next/link"
import { Phone } from "lucide-react"
import { frontierCoverage } from "@/lib/coverage-data"

const topCities = [
  { city: "Dallas", state: "Texas" },
  { city: "Tampa", state: "Florida" },
  { city: "Hartford", state: "Connecticut" },
  { city: "Los Angeles", state: "California" },
  { city: "Phoenix", state: "Arizona" },
  { city: "San Jose", state: "California" },
  { city: "New Haven", state: "Connecticut" },
  { city: "Jacksonville", state: "Florida" },
  { city: "San Francisco", state: "California" },
  { city: "Indianapolis", state: "Indiana" },
]

export default function Footer() {
  const states = Object.keys(frontierCoverage).sort()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Internet Plans */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Internet Plans</h3>
            <ul className="space-y-2.5">
              <li><Link href="/internet" className="text-sm hover:text-white transition-colors">Fiber Internet</Link></li>
              <li><Link href="/bundles" className="text-sm hover:text-white transition-colors">Internet & Phone Bundles</Link></li>
              <li><Link href="/tv-netflix" className="text-sm hover:text-white transition-colors">TV & Netflix</Link></li>
              <li><Link href="/home-phone" className="text-sm hover:text-white transition-colors">Home Phone</Link></li>
              <li><Link href="/wifi" className="text-sm hover:text-white transition-colors">Whole-Home WiFi</Link></li>
              <li><Link href="/internet-speed-test" className="text-sm hover:text-white transition-colors">Speed Test</Link></li>
              <li><Link href="/coverage" className="text-sm hover:text-white transition-colors">Coverage Map</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Business</h3>
            <ul className="space-y-2.5">
              <li><Link href="/business" className="text-sm hover:text-white transition-colors">Business Solutions</Link></li>
              <li><Link href="/business/internet" className="text-sm hover:text-white transition-colors">Business Internet</Link></li>
              <li><Link href="/business/phone" className="text-sm hover:text-white transition-colors">Business Phone</Link></li>
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mt-8 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link href="/check-availability" className="text-sm hover:text-white transition-colors">Check Availability</Link></li>
              <li><Link href="/reviews" className="text-sm hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><a href="https://frontier.com/helpcenter" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li><Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/blog/what-is-fiber-internet" className="text-sm hover:text-white transition-colors">What Is Fiber Internet?</Link></li>
              <li><Link href="/blog/how-much-internet-speed-do-i-need" className="text-sm hover:text-white transition-colors">How Much Speed Do I Need?</Link></li>
              <li><Link href="/compare/fiber-vs-cable" className="text-sm hover:text-white transition-colors">Fiber vs Cable</Link></li>
              <li><Link href="/compare/fiber-vs-cable-vs-dsl" className="text-sm hover:text-white transition-colors">Fiber vs Cable vs DSL</Link></li>
              <li><Link href="/blog/switching-internet-providers" className="text-sm hover:text-white transition-colors">Switching Providers Guide</Link></li>
              <li><Link href="/blog/work-from-home-internet-guide" className="text-sm hover:text-white transition-colors">Work From Home Guide</Link></li>
            </ul>
          </div>

          {/* Coverage Areas — spans 2 cols on large screens */}
          <div className="col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Popular Coverage Areas</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {topCities.map(({ city, state }) => (
                <li key={`${city}-${state}`}>
                  <Link
                    href={`/fiber-internet-in/${city.toLowerCase().replace(/\s+/g, "-")}/${state.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {city}, {state}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Browse by State</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 mb-3">
              {states.map((state) => (
                <Link
                  key={state}
                  href={`/coverage#${state.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs text-gray-500 hover:text-white transition-colors"
                >
                  {state}
                </Link>
              ))}
            </div>
            <Link href="/coverage" className="text-sm text-red-400 hover:text-red-300 font-medium">
              View Full Coverage Map &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Authorized retailer disclaimer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-gray-800/50 rounded-lg p-5 mb-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Authorized Retailer Disclosure:</strong> This website is operated by an authorized retailer of Frontier Communications services. We are not Frontier Communications or any of its affiliates. We help customers compare internet plans and sign up for Frontier services. Frontier, the Frontier logo, and all related marks are trademarks of Frontier Communications. Pricing, speeds, and availability vary by location. All trademarks and service marks are the property of their respective owners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
              <span>&copy; {new Date().getFullYear()} Frontier Deals. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
