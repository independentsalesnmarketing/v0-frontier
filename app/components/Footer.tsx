import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
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
]

export default function Footer() {
  const states = Object.keys(frontierCoverage).sort()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Residential</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/order" className="hover:text-red-400 transition-colors text-sm">
                  Order Now
                </Link>
              </li>
              <li>
                <Link href="/internet" className="hover:text-red-400 transition-colors text-sm">
                  Fiber Internet
                </Link>
              </li>
              <li>
                <Link href="/tv-netflix" className="hover:text-red-400 transition-colors text-sm">
                  TV & Netflix
                </Link>
              </li>
              <li>
                <Link href="/tv-and-bundles" className="hover:text-red-400 transition-colors text-sm">
                  TV & Bundles
                </Link>
              </li>
              <li>
                <Link href="/bundles" className="hover:text-red-400 transition-colors text-sm">
                  Internet & Phone Bundles
                </Link>
              </li>
              <li>
                <Link href="/home-phone" className="hover:text-red-400 transition-colors text-sm">
                  Home Phone
                </Link>
              </li>
              <li>
                <Link href="/wifi" className="hover:text-red-400 transition-colors text-sm">
                  Frontier WiFi
                </Link>
              </li>
              <li>
                <Link href="/internet-speed-test" className="hover:text-red-400 transition-colors text-sm">
                  Speed Test
                </Link>
              </li>
              <li>
                <Link href="/internet/pricing" className="hover:text-red-400 transition-colors text-sm">
                  Internet Pricing
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="hover:text-red-400 transition-colors text-sm">
                  Coverage Map
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Business</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/business" className="hover:text-red-400 transition-colors text-sm">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/business/internet" className="hover:text-red-400 transition-colors text-sm">
                  Business Internet
                </Link>
              </li>
              <li>
                <Link href="/business/phone" className="hover:text-red-400 transition-colors text-sm">
                  Business Phone
                </Link>
              </li>
              <li>
                <Link href="/business/managed-services" className="hover:text-red-400 transition-colors text-sm">
                  Managed Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-red-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/what-is-fiber-internet" className="hover:text-red-400 transition-colors text-sm">
                  What Is Fiber?
                </Link>
              </li>
              <li>
                <Link href="/blog/how-much-internet-speed-do-i-need" className="hover:text-red-400 transition-colors text-sm">
                  Speed Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/fiber-vs-cable" className="hover:text-red-400 transition-colors text-sm">
                  Fiber vs Cable
                </Link>
              </li>
              <li>
                <Link href="/blog/work-from-home-internet-guide" className="hover:text-red-400 transition-colors text-sm">
                  WFH Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/switching-internet-providers" className="hover:text-red-400 transition-colors text-sm">
                  Switching ISPs
                </Link>
              </li>
              <li>
                <Link href="/compare/fiber-vs-cable" className="hover:text-red-400 transition-colors text-sm">
                  Fiber vs Cable
                </Link>
              </li>
              <li>
                <Link href="/compare/fiber-vs-cable-vs-dsl" className="hover:text-red-400 transition-colors text-sm">
                  Fiber vs Cable vs DSL
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-red-400 transition-colors text-sm">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/support/faq" className="hover:text-red-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors text-sm">
                  About Frontier
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-red-400 transition-colors text-sm">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-red-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Coverage Areas</h3>
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Popular Cities</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {topCities.map(({ city, state }) => (
                  <li key={`${city}-${state}`}>
                    <Link
                      href={`/fiber-internet-in/${city.toLowerCase().replace(/\s+/g, "-")}/${state.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-red-400 transition-colors text-sm"
                    >
                      {city}, {state.slice(0, 2).toUpperCase() === state.slice(0, 2) ? state : state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Browse by State</h4>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {states.map((state) => (
                  <Link
                    key={state}
                    href={`/coverage#${state.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-xs text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {state}
                  </Link>
                ))}
              </div>
              <Link
                href="/coverage"
                className="inline-block mt-3 text-sm text-red-400 hover:text-red-300 font-medium transition-colors"
              >
                View Full Coverage Map
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Frontier Retailer. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/FrontierCorp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/FrontierCorp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/frontiercorp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/frontier-communications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
