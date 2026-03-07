import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wifi, Shield, Zap, Users } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Free eero Wi-Fi 6 Router with Frontier Fiber | Whole-Home Coverage",
  description: "Every Frontier Fiber plan includes a free Amazon eero Wi-Fi 6 router. Get whole-home wireless coverage, eliminate dead zones, and enjoy fast WiFi in every room.",
  keywords: "eero wifi 6 router, frontier wifi, whole home wifi, frontier eero router, wifi 6, mesh wifi, wireless internet",
  alternates: { canonical: "/wifi" },
  openGraph: {
    title: "Free eero Wi-Fi 6 Router with Frontier Fiber | Whole-Home Coverage",
    description: "Every Frontier Fiber plan includes a free Amazon eero Wi-Fi 6 router for whole-home wireless coverage.",
    url: "https://frontier-deals.com/wifi",
    siteName: "Frontier Deals",
    images: [{ url: "/images/og-frontier-internet.jpg", width: 1200, height: 630, alt: "Frontier eero Wi-Fi 6 Router" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free eero Wi-Fi 6 Router with Frontier Fiber | Whole-Home Coverage",
    description: "Every Frontier Fiber plan includes a free Amazon eero Wi-Fi 6 router. Eliminate dead zones.",
    images: ["/images/og-frontier-internet.jpg"],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many devices can connect to Frontier WiFi?", acceptedAnswer: { "@type": "Answer", text: "Frontier WiFi supports multiple devices, typically up to 250 connected devices depending on your plan and router capabilities." } },
    { "@type": "Question", name: "Is Frontier WiFi secure?", acceptedAnswer: { "@type": "Answer", text: "Yes, Frontier WiFi comes with built-in security features to protect your network and connected devices from potential threats." } },
    { "@type": "Question", name: "Can I manage my WiFi network remotely?", acceptedAnswer: { "@type": "Answer", text: "Yes, with the Frontier WiFi app, you can manage your network, set parental controls, and monitor connected devices from anywhere." } },
  ],
}

export default function FrontierWiFi() {
  return (
    <div className="bg-[#0a192f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "WiFi", href: "/wifi" }]} />
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ff6b6b]">Frontier WiFi</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#1d2d50] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#ff6b6b]">Frontier WiFi Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Wifi className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#ff6b6b]">Whole-Home Coverage</h3>
                <p>Experience seamless connectivity throughout your entire home with our advanced WiFi technology.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Shield className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#ff6b6b]">Enhanced Security</h3>
                <p>Stay protected with built-in security features to safeguard your network and devices.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Zap className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#ff6b6b]">High-Speed Performance</h3>
                <p>Enjoy blazing-fast speeds for streaming, gaming, and all your online activities.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 mr-2 text-[#64ffda] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#ff6b6b]">Multiple Device Support</h3>
                <p>Connect all your devices simultaneously without compromising on speed or performance.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-[#1d2d50] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#ff6b6b]">Why Choose Frontier WiFi?</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-[#ff6b6b]">Easy Setup</h3>
              <p>Our technicians will set up and optimize your WiFi network for the best performance.</p>
            </li>
            <li>
              <h3 className="font-semibold text-[#ff6b6b]">24/7 Support</h3>
              <p>Get assistance anytime with our round-the-clock customer support.</p>
            </li>
            <li>
              <h3 className="font-semibold text-[#ff6b6b]">Customizable Plans</h3>
              <p>Choose the WiFi plan that best fits your household's needs and budget.</p>
            </li>
            <li>
              <h3 className="font-semibold text-[#ff6b6b]">Regular Updates</h3>
              <p>Benefit from the latest WiFi technology with automatic updates to your router.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-[#ff6b6b]">Ready for Superior WiFi?</h2>
        <p className="mb-8">Experience the difference with Frontier WiFi in your home today.</p>
        <Button asChild size="lg" className="bg-[#e10600] hover:bg-[#ff6b6b] text-white">
          <Link href="/internet">Get Frontier WiFi</Link>
        </Button>
      </div>

      <div className="bg-[#1d2d50] p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#ff6b6b]">Related Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/blog/wifi-dead-zones-fix" className="bg-[#0a192f] p-4 rounded-lg hover:bg-[#0d2040] transition-colors">
            <h3 className="font-semibold text-white mb-1">Fix WiFi Dead Zones</h3>
            <p className="text-sm text-gray-400">Practical tips for better coverage</p>
          </Link>
          <Link href="/blog/home-network-setup-guide" className="bg-[#0a192f] p-4 rounded-lg hover:bg-[#0d2040] transition-colors">
            <h3 className="font-semibold text-white mb-1">Home Network Guide</h3>
            <p className="text-sm text-gray-400">Router placement and mesh WiFi</p>
          </Link>
          <Link href="/blog/smart-home-internet-guide" className="bg-[#0a192f] p-4 rounded-lg hover:bg-[#0d2040] transition-colors">
            <h3 className="font-semibold text-white mb-1">Smart Home Guide</h3>
            <p className="text-sm text-gray-400">How many devices can you handle?</p>
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/internet-speed-test" className="text-[#64ffda] hover:text-[#a0ffe8] text-sm font-medium transition-colors">
            Run a Speed Test
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/internet" className="text-[#64ffda] hover:text-[#a0ffe8] text-sm font-medium transition-colors">
            View Internet Plans
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/coverage" className="text-[#64ffda] hover:text-[#a0ffe8] text-sm font-medium transition-colors">
            Check Coverage
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/blog/home-internet-security-tips" className="text-[#64ffda] hover:text-[#a0ffe8] text-sm font-medium transition-colors">
            Security Tips
          </Link>
        </div>
      </div>

      <div className="bg-[#f8f9fa] p-8 rounded-lg text-[#0a192f]">
        <h2 className="text-2xl font-semibold mb-4 text-[#ff6b6b]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#ff6b6b]">How many devices can connect to Frontier WiFi?</h3>
            <p>
              Frontier WiFi supports multiple devices, typically up to 250 connected devices depending on your plan and
              router capabilities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#ff6b6b]">Is Frontier WiFi secure?</h3>
            <p>
              Yes, Frontier WiFi comes with built-in security features to protect your network and connected devices
              from potential threats.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#ff6b6b]">Can I manage my WiFi network remotely?</h3>
            <p>
              Yes, with the Frontier WiFi app, you can manage your network, set parental controls, and monitor connected
              devices from anywhere.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
