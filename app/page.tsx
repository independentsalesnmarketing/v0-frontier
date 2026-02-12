import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AvailabilityToolbar from "./components/AvailabilityToolbar"
import {
  CheckCircle2,
  Wifi,
  Tv,
  Phone,
  Package,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Shield,
  Award,
  Zap,
  Users,
  Building2,
  Check,
  Home,
  Laptop,
  Gamepad2,
  Video,
  MonitorSmartphone,
  FileText,
  Calendar,
  Quote,
} from "lucide-react"
import Hero from "./components/Hero"
import CityStateAccordion from "./components/CityStateAccordion"
import { OrderCTAButton, ServiceTabs, FaqItem } from "@/components/HomePageClient"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { TrustBadgesSection } from "@/components/TrustBadgesSection"
import { MoneyBackGuarantee } from "@/components/MoneyBackGuarantee"

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://frontier-deals.com/#organization",
  name: "Frontier Communications",
  url: "https://frontier-deals.com",
  logo: {
    "@type": "ImageObject",
    url: "https://frontier-deals.com/android-chrome-192x192.png",
    width: 192,
    height: 192,
  },
  sameAs: [
    "https://www.facebook.com/FrontierCorp",
    "https://twitter.com/FrontierCorp",
    "https://www.instagram.com/frontiercorp",
    "https://www.linkedin.com/company/frontier-communications",
  ],
  description:
    "Frontier Communications provides high-speed fiber internet, digital voice, and entertainment services for residential and business customers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "401 Merritt 7",
    addressLocality: "Norwalk",
    addressRegion: "CT",
    postalCode: "06851",
    addressCountry: "US",
  },
  telephone: "+1-800-921-8101",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-921-8101",
    contactType: "Customer Service",
    availableLanguage: ["en", "es"],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  foundingDate: "1935-01-01",
  priceRange: "$29.99-$109.99",
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://frontier-deals.com/#webpage",
  url: "https://frontier-deals.com",
  name: "Frontier Communications - High-Speed Fiber Internet, TV & Phone Services",
  description:
    "Experience lightning-fast fiber internet with speeds up to 7 Gbps, plus TV and phone services from Frontier Communications. Reliable connectivity for homes and businesses.",
  datePublished: "2024-01-15",
  dateModified: "2025-04-15",
  isPartOf: {
    "@id": "https://frontier-deals.com/#website",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://frontier-deals.com/android-chrome-192x192.png",
    width: 192,
    height: 192,
  },
  publisher: {
    "@id": "https://frontier-deals.com/#organization",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is fiber internet and how is it different from cable or DSL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiber internet uses fiber-optic cables to transmit data using light signals, resulting in faster speeds and more reliable connections than traditional copper-based internet. Frontier Fiber offers symmetrical upload and download speeds, meaning you can upload large files just as quickly as you download them. Unlike cable or DSL, fiber maintains consistent speeds even during peak usage times and is less susceptible to interference or weather-related outages. This makes Frontier Fiber Internet ideal for households with multiple users and connected devices.",
      },
    },
    {
      "@type": "Question",
      name: "Is Frontier Fiber available in my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier is rapidly expanding its fiber network across the United States. Use our availability checker at the top of this page to see if Frontier Fiber is available at your address. If it's not yet available, you can sign up for notifications when service comes to your area. We're currently expanding in California, Texas, Florida, Connecticut, New York, and 20+ additional states. Our goal is to bring Frontier Fiber Internet to millions more homes by 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need special equipment for fiber internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, fiber internet requires an Optical Network Terminal (ONT) to convert light signals to electrical signals. Frontier will install this equipment during your installation appointment at no additional cost. We also provide a free eero Pro 6 router with most plans to ensure you get the best possible Wi-Fi coverage throughout your home. The eero Pro 6 supports Wi-Fi 6 technology for faster wireless speeds and better performance with multiple connected devices. Our professional installation ensures your Frontier Fiber Internet is set up correctly for optimal performance.",
      },
    },
    {
      "@type": "Question",
      name: "Are there data caps on Frontier Fiber plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, all Frontier Fiber plans come with unlimited data. You can stream, game, video conference, and download as much as you want without worrying about data caps or overage charges. This is a key advantage of Frontier Fiber compared to many cable internet providers who impose monthly data limits. With Frontier Internet, you'll never have to worry about throttling or additional fees for high data usage.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of symmetrical upload and download speeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Symmetrical speeds mean your upload speed matches your download speed, which is a significant advantage of Frontier Fiber Internet. This is particularly important for activities like video conferencing, uploading large files, cloud backups, live streaming, and online gaming. While cable internet typically offers much slower upload speeds than download speeds, Frontier Fiber provides the same blazing-fast speed in both directions, ensuring a seamless experience for all your online activities.",
      },
    },
    {
      "@type": "Question",
      name: "How do I sign up for Frontier Internet service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Signing up for Frontier Internet is easy. You can order Frontier Internet online through our website, call our customer service team at 1-800-921-8101, or visit a local Frontier store. New customer offers are available for those switching to Frontier from another provider, and installation can be scheduled at your convenience. Our professional technicians will set up your Frontier Fiber Internet service, ensuring optimal performance throughout your home.",
      },
    },
  ],
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://frontier-deals.com/#product",
  name: "Frontier Fiber Internet",
  description: "High-speed fiber internet with symmetrical speeds up to 7 Gbps",
  brand: {
    "@type": "Brand",
    name: "Frontier Communications",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "29.99",
    highPrice: "109.99",
    offerCount: "6",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
}

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Frontier Fiber Internet Overview",
  description: "Learn about Frontier's high-speed fiber internet with speeds up to 7 Gbps, perfect for streaming, gaming, and working from home.",
  thumbnailUrl: "https://frontier-deals.com/android-chrome-192x192.png",
  uploadDate: "2025-01-15",
  contentUrl: "https://frontier-deals.com/",
}

export default function IndexPage() {
  return (
    <>
      {/* Structured data rendered server-side for crawlers */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(expertReviewSchema) }} />

      <AvailabilityToolbar />
      <div className="pt-[108px] md:pt-[112px] bg-[#0A1E3C] text-[#333333]">
        {/* Hero Section */}
        <Hero />

        {/* Quick Summary Section for Featured Snippets */}
        <section className="py-8 bg-[#F5F7FA] border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="sr-only">Frontier Fiber Internet Summary</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <p className="text-[#0A1E3C] font-medium">
                  Frontier Fiber Internet delivers symmetrical speeds up to 7 Gbps through advanced fiber optic
                  technology. All plans include unlimited data, free professional installation, and a complimentary
                  Wi-Fi 6 router. Frontier Communications offers residential plans starting at $29.99/month and business
                  solutions with 99.9% uptime reliability. Available in select areas across 29 states, with rapid
                  network expansion ongoing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Urgency Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#e10600]">7 Gbps</div>
                <p className="text-xs md:text-sm text-gray-600">Lightning-Fast Speeds</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#00B7C3]">$29.99</div>
                <p className="text-xs md:text-sm text-gray-600">Starting Price</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#0A1E3C]">99.9%</div>
                <p className="text-xs md:text-sm text-gray-600">Uptime Guarantee</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#64ffda]">4.8★</div>
                <p className="text-xs md:text-sm text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Fiber Section */}
        <section className="py-20 bg-white" id="why-fiber">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">
                The Frontier Fiber Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">
                Why Choose Frontier Fiber Internet?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Frontier Fiber Optic technology delivers superior performance compared to traditional cable or DSL
                connections, making it the premier choice for high-speed internet service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F7FA] rounded-xl p-8 transition-all hover:shadow-lg border-t-4 border-[#e10600]">
                <div className="bg-[#0A1E3C] inline-flex p-3 rounded-lg mb-6">
                  <Zap className="h-8 w-8 text-[#e10600]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1E3C] mb-4">Lightning-Fast Speeds</h3>
                <p className="text-gray-600 mb-6">
                  Experience symmetrical upload and download speeds up to 7 Gbps with Frontier Fiber Internet, perfect
                  for streaming, gaming, and working from home.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#e10600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Download a 4K movie in under a minute</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#e10600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Upload large files in seconds, not minutes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#e10600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Stream 4K content on multiple devices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F7FA] rounded-xl p-8 transition-all hover:shadow-lg border-t-4 border-[#00B7C3]">
                <div className="bg-[#0A1E3C] inline-flex p-3 rounded-lg mb-6">
                  <Shield className="h-8 w-8 text-[#00B7C3]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1E3C] mb-4">Unmatched Reliability</h3>
                <p className="text-gray-600 mb-6">
                  Frontier Fiber Optic cables are less susceptible to interference and weather conditions, providing a
                  more stable connection for all your internet needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00B7C3] mr-2 flex-shrink-0 mt-0.5" />
                    <span>99.9% uptime reliability</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00B7C3] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Consistent performance during peak hours</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00B7C3] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Less susceptible to outages</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F7FA] rounded-xl p-8 transition-all hover:shadow-lg border-t-4 border-[#64ffda]">
                <div className="bg-[#0A1E3C] inline-flex p-3 rounded-lg mb-6">
                  <Users className="h-8 w-8 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1E3C] mb-4">Multi-Device Support</h3>
                <p className="text-gray-600 mb-6">
                  Connect all your devices simultaneously to Frontier WiFi without compromising on speed or performance,
                  ideal for modern connected homes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#64ffda] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Support for 20+ connected devices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#64ffda] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Perfect for smart homes and remote work</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#64ffda] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Seamless whole-home WiFi coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Analysis Section */}
        <section className="py-12 bg-[#0A1E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#1A3E6C]/50 p-8 rounded-lg">
              <div className="flex items-start">
                <Quote className="h-12 w-12 text-[#64ffda] mr-4 flex-shrink-0" />
                <div>
                  <blockquote className="text-xl italic mb-4">
                    {'"Frontier\'s fiber network represents one of the most significant investments in U.S. broadband infrastructure in recent years. Their symmetrical speeds up to 7 Gbps position them at the forefront of residential internet service providers."'}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#64ffda] rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#0A1E3C] font-bold text-lg">MC</span>
                    </div>
                    <div>
                      <p className="font-bold">Dr. Michael Chen</p>
                      <p className="text-sm text-white/80">Telecommunications Infrastructure Analyst</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-gradient-to-b from-[#F5F7FA] to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">
                Compare Internet Providers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">
                Why Switch to Frontier Internet?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how Frontier Internet Plans compare to other internet service providers in your area.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[768px] border-collapse">
                <thead>
                  <tr className="bg-[#0A1E3C] text-white">
                    <th className="p-4 text-left">Features</th>
                    <th className="p-4 text-center">Frontier Fiber</th>
                    <th className="p-4 text-center">Cable Providers</th>
                    <th className="p-4 text-center">DSL Providers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Max Download Speed</td>
                    <td className="p-4 text-center bg-[#f8f9fa]">
                      <span className="font-bold text-[#e10600]">Up to 7 Gbps</span>
                    </td>
                    <td className="p-4 text-center">Up to 1.2 Gbps</td>
                    <td className="p-4 text-center">Up to 100 Mbps</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Upload Speed</td>
                    <td className="p-4 text-center bg-[#f8f9fa]">
                      <span className="font-bold text-[#e10600]">Symmetrical (Up to 7 Gbps)</span>
                    </td>
                    <td className="p-4 text-center">Asymmetrical (Up to 35 Mbps)</td>
                    <td className="p-4 text-center">Asymmetrical (Up to 10 Mbps)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Data Caps</td>
                    <td className="p-4 text-center bg-[#f8f9fa]">
                      <span className="font-bold text-[#00B7C3]">No Data Caps</span>
                    </td>
                    <td className="p-4 text-center">Often 1.2 TB/month</td>
                    <td className="p-4 text-center">Often 1 TB/month</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Reliability</td>
                    <td className="p-4 text-center bg-[#f8f9fa]">
                      <span className="font-bold text-[#00B7C3]">Excellent (99.9% uptime)</span>
                    </td>
                    <td className="p-4 text-center">Good (98.5% uptime)</td>
                    <td className="p-4 text-center">Fair (97% uptime)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Installation Fee</td>
                    <td className="p-4 text-center bg-[#f8f9fa]">
                      <span className="font-bold text-[#64ffda]">FREE (Limited Time)</span>
                    </td>
                    <td className="p-4 text-center">$50-$100</td>
                    <td className="p-4 text-center">$50-$100</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500 mb-4">
                <Calendar className="inline-block mr-1 h-4 w-4" /> Last updated: February 2026 |
                <span className="ml-1">
                  <FileText className="inline-block mr-1 h-4 w-4" />
                  Source: Broadband Technology Review, 2025
                </span>
              </p>
              <OrderCTAButton className="inline-flex items-center justify-center rounded-md bg-[#e10600] hover:bg-[#DA202C] text-white font-semibold h-10 px-4 py-2">
                Switch to Frontier Internet Today
              </OrderCTAButton>
            </div>
          </div>
        </section>

        {/* Service Tabs Section */}
        <section className="py-20 bg-[#F5F7FA]" id="services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">
                Premium Frontier Communications Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the perfect Frontier Internet packages and connectivity solutions for your home or business
                with our range of premium services.
              </p>
            </div>

            <ServiceTabs
              residentialContent={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <ServiceCard
                    icon={<Wifi className="h-8 w-8 text-[#e10600]" />}
                    title="Frontier Fiber Internet"
                    description="Lightning-fast speeds up to 7 Gbps with symmetrical upload and download from a trusted internet provider."
                    features={["No data caps", "99.9% reliability", "Free Wi-Fi router"]}
                    link="/internet"
                    color="#e10600"
                  />
                  <ServiceCard
                    icon={<Tv className="h-8 w-8 text-[#00B7C3]" />}
                    title="TV & Streaming"
                    description="Access thousands of shows and movies with our Netflix bundle and Frontier TV packages."
                    features={["Netflix integration", "4K streaming quality", "Multiple device support"]}
                    link="/tv-netflix"
                    color="#00B7C3"
                  />
                  <ServiceCard
                    icon={<Phone className="h-8 w-8 text-[#0A1E3C]" />}
                    title="Home Phone"
                    description="Crystal-clear HD voice quality with unlimited nationwide calling from Frontier Communications."
                    features={["Keep your number", "20+ calling features", "Reliable connections"]}
                    link="/home-phone"
                    color="#0A1E3C"
                  />
                  <ServiceCard
                    icon={<Package className="h-8 w-8 text-[#64ffda]" />}
                    title="Bundle & Save"
                    description="Combine Frontier Internet deals and services to save with our customizable Frontier Internet packages."
                    features={["One simple bill", "Save up to 25%", "Flexible options"]}
                    link="/tv-and-bundles"
                    color="#64ffda"
                  />
                </div>
              }
              businessContent={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ServiceCard
                    icon={<Wifi className="h-8 w-8 text-[#e10600]" />}
                    title="Business Internet"
                    description="Dedicated Frontier Fiber connections with speeds up to 10 Gbps for your business needs."
                    features={["99.9% uptime SLA", "Dedicated support", "Static IP options"]}
                    link="/business/internet"
                    color="#e10600"
                  />
                  <ServiceCard
                    icon={<Phone className="h-8 w-8 text-[#00B7C3]" />}
                    title="Business Phone"
                    description="Advanced voice solutions with enterprise-grade features from Frontier Communications."
                    features={["Auto-attendant", "Conference calling", "Mobile integration"]}
                    link="/business/phone"
                    color="#00B7C3"
                  />
                  <ServiceCard
                    icon={<Shield className="h-8 w-8 text-[#0A1E3C]" />}
                    title="Managed Services"
                    description="Comprehensive IT solutions from Frontier ISP to keep your business running smoothly."
                    features={["Network security", "24/7 monitoring", "Cloud solutions"]}
                    link="/business/managed-services"
                    color="#0A1E3C"
                  />
                </div>
              }
            />
          </div>
        </section>

        {/* Digital Lifestyle Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">
                Frontier Fiber Lifestyle
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">Power Your Digital Life</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Frontier High-Speed Internet Plans support all your digital activities with blazing-fast, reliable
                connectivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DigitalLifestyleCard
                icon={<Gamepad2 className="h-10 w-10 text-white" />}
                title="Gaming"
                description="Experience lag-free gaming with ultra-low latency and consistent speeds from Frontier Fiber Internet."
                bgColor="from-[#e10600] to-[#DA202C]"
              />
              <DigitalLifestyleCard
                icon={<Video className="h-10 w-10 text-white" />}
                title="Streaming"
                description="Enjoy buffer-free 4K streaming on multiple devices with Frontier Internet speeds."
                bgColor="from-[#00B7C3] to-[#00B7C3]"
              />
              <DigitalLifestyleCard
                icon={<Laptop className="h-10 w-10 text-white" />}
                title="Work From Home"
                description="Stay productive with reliable Frontier WiFi and symmetrical upload/download speeds."
                bgColor="from-[#0A1E3C] to-[#1A3E6C]"
              />
              <DigitalLifestyleCard
                icon={<MonitorSmartphone className="h-10 w-10 text-white" />}
                title="Smart Home"
                description="Connect all your smart devices with Frontier Internet packages designed for the modern home."
                bgColor="from-[#0A6E60] to-[#0A8E80]"
              />
            </div>

            <div className="mt-10 text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-[#0A1E3C] to-[#1A3E6C] text-white hover:from-[#1A3E6C] hover:to-[#0A1E3C]"
              >
                <Link href="/internet">Explore Frontier Internet Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 bg-[#F5F7FA]" id="plans">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">Pricing Options</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">Frontier Fiber Internet Plans</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect speed for your household needs. All Frontier Internet plans include unlimited data,
                no contracts, and a free Wi-Fi router. Sign up for Frontier Fiber with no deposit required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PlanCard
                name="Fiber 500"
                speed="500/500 Mbps"
                price="44.99"
                regularPrice="54.99"
                features={["Perfect for 2-4 people", "Stream HD video on multiple devices", "Free eero Pro 6 router"]}
                popular={false}
                color="#00B7C3"
              />
              <PlanCard
                name="Fiber 1 Gig"
                speed="1000/1000 Mbps"
                price="59.99"
                regularPrice="69.99"
                features={["Ideal for 4+ people", "Stream 4K video on multiple devices", "Perfect for gaming and WFH"]}
                popular={true}
                color="#e10600"
              />
              <PlanCard
                name="Fiber 2 Gig"
                speed="2000/2000 Mbps"
                price="89.99"
                regularPrice="99.99"
                features={["Ultimate performance for power users", "Multiple 4K/8K streams", "$200 Visa Reward Card"]}
                popular={false}
                color="#0A1E3C"
              />
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">
                Looking for even faster speeds? Check out our premium 5 Gig and 7 Gig plans!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="text-[#e10600] border-[#e10600] hover:bg-[#e10600] hover:text-white bg-transparent"
                >
                  <Link href="/internet">View All Frontier Internet Plans</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#00B7C3] hover:bg-[#0099a0] text-white"
                >
                  <Link href="/internet/pricing">Detailed Plan Comparison</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Availability Section */}
        <section className="py-16 bg-gradient-to-r from-[#0A1E3C] to-[#1A3E6C] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-[#64ffda] font-semibold text-sm uppercase tracking-wider">Service Areas</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Check Frontier Fiber Availability</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Frontier Internet is expanding rapidly. Find out if Frontier Fiber is available near me in your
                neighborhood.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Find Frontier Internet Near Me</h3>
                  <p className="mb-6">
                    Enter your address to check if Frontier Fiber Optic service is available in your area.
                  </p>
                  <OrderCTAButton href="/internet" className="w-full inline-flex items-center justify-center rounded-md bg-[#64ffda] hover:bg-[#4cd7b6] text-[#0A1E3C] font-semibold h-10 px-4 py-2">
                    Check Availability
                  </OrderCTAButton>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Major Service Areas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#64ffda] mr-2" />
                      <span>California</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#64ffda] mr-2" />
                      <span>Florida</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#64ffda] mr-2" />
                      <span>Texas</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#64ffda] mr-2" />
                      <span>Connecticut</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#64ffda] mr-2" />
                      <span>And 20+ more states</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">
                Why Choose Frontier Communications?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Since 1935, Frontier Communications has been committed to connecting communities with cutting-edge
                technology and reliable internet service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-[#e10600]" />}
                title="Reliable Network"
                description="Our advanced Frontier Fiber Optic network ensures consistent high-speed connectivity with 99.9% uptime reliability."
              />
              <FeatureCard
                icon={<Award className="h-10 w-10 text-[#00B7C3]" />}
                title="Award-Winning Service"
                description="Experience top-notch customer support from our dedicated team of experts, available 24/7 to assist you."
              />
              <FeatureCard
                icon={<MapPin className="h-10 w-10 text-[#0A1E3C]" />}
                title="Expanding Coverage"
                description="We're investing billions to expand our Frontier Fiber network to 10 million locations by 2025."
              />
              <FeatureCard
                icon={<Wifi className="h-10 w-10 text-[#64ffda]" />}
                title="Advanced Wi-Fi"
                description="Enjoy whole-home coverage with our eero Pro 6 Wi-Fi 6 routers, ensuring a strong signal in every corner."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-[#e10600]" />}
                title="24/7 Support"
                description="Get help whenever you need it with our round-the-clock customer service and technical support from Frontier Communications."
              />
              <FeatureCard
                icon={<CheckCircle2 className="h-10 w-10 text-[#00B7C3]" />}
                title="No Hidden Fees"
                description="Our straightforward pricing ensures you know exactly what you're paying for, with no surprises on your Frontier Internet bill."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">Customer Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {"Don't just take our word for it. Here's what real Frontier Internet customers have to say after switching to Frontier."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Frontier Fiber has transformed the way we work from home. The speeds are incredible, and the connection is always stable. Best decision we made was to switch to Frontier Internet!"
                author="Sarah T."
                location="Tampa, FL"
                rating={5}
                color="#e10600"
              />
              <TestimonialCard
                quote="I'm amazed at how much better our TV viewing experience is with Frontier and Netflix. The integration is seamless, and the Frontier Internet speeds make streaming 4K content a breeze."
                author="Mike R."
                location="Los Angeles, CA"
                rating={5}
                color="#00B7C3"
              />
              <TestimonialCard
                quote="As a small business owner, reliable internet is crucial. Frontier's business internet has exceeded my expectations. Their customer service team is responsive and knowledgeable."
                author="Emily L."
                location="Dallas, TX"
                rating={5}
                color="#0A1E3C"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white" id="faq">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about Frontier Internet services and plans.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <FaqItem
                question="What is Frontier Fiber Internet and how is it different?"
                answer="Frontier Fiber Internet uses fiber-optic cables to transmit data using light signals, resulting in faster speeds and more reliable connections than traditional copper-based internet. Frontier Fiber offers symmetrical upload and download speeds, meaning you can upload large files just as quickly as you download them. Unlike cable or DSL, fiber maintains consistent speeds even during peak usage times and is less susceptible to interference or weather-related outages."
              />
              <FaqItem
                question="Is Frontier Fiber available in my area?"
                answer="Frontier is rapidly expanding its fiber network across the United States. Use our availability checker at the top of this page to see if Frontier Fiber is available at your address. If it's not yet available, you can sign up for notifications when service comes to your area. We're currently expanding in California, Texas, Florida, Connecticut, New York, and 20+ additional states."
              />
              <FaqItem
                question="Do I need special equipment for Frontier Fiber Internet?"
                answer="Yes, fiber internet requires an Optical Network Terminal (ONT) to convert light signals to electrical signals. Frontier will install this equipment during your installation appointment at no additional cost. We also provide a free eero Pro 6 router with most plans to ensure you get the best possible Wi-Fi coverage throughout your home. The eero Pro 6 supports Wi-Fi 6 technology for faster wireless speeds and better performance with multiple connected devices."
              />
              <FaqItem
                question="Are there data caps on Frontier Fiber plans?"
                answer="No, all Frontier Fiber plans come with unlimited data. You can stream, game, video conference, and download as much as you want without worrying about data caps or overage charges. This is a key advantage of Frontier Fiber compared to many cable internet providers who impose monthly data limits."
              />
              <FaqItem
                question="How do I sign up for Frontier Internet service?"
                answer="Signing up for Frontier Internet is easy. You can order Frontier Internet online through our website, call our customer service team, or visit a local Frontier store. New customer offers are available for those switching to Frontier from another provider, and installation can be scheduled at your convenience."
              />
            </div>

            <div className="text-center mt-10">
              <Button asChild className="bg-[#e10600] hover:bg-[#DA202C] text-white">
                <Link href="/support/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Money-Back Guarantee */}
        <MoneyBackGuarantee />

        {/* Trust Badges Section */}
        <TrustBadgesSection />

        {/* Cities and States Accordion Section */}
        <section className="py-20 bg-[#F5F7FA]" id="coverage-areas">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-[#e10600] font-semibold text-sm uppercase tracking-wider">Coverage Areas</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] mt-2 mb-4">
                Frontier Fiber Internet Coverage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find Frontier Fiber Internet availability in your city. We{"'"}re constantly expanding our coverage to bring
                lightning-fast fiber internet to more communities.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <CityStateAccordion />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A1E3C] to-[#1A3E6C] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Frontier Fiber?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have made the switch to Frontier{"'"}s high-speed fiber internet.
              Take advantage of our new customer offers today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <OrderCTAButton className="inline-flex items-center justify-center rounded-md bg-[#e10600] hover:bg-[#DA202C] text-white text-lg px-8 py-4 font-semibold">
                Order Frontier Internet Online
              </OrderCTAButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6"
              >
                <Link href="/internet">Compare Frontier Internet Plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// Component for service cards
function ServiceCard({ icon, title, description, features, link, color = "#e10600" }: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link: string
  color?: string
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:translate-y-[-5px]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-[#0A1E3C]">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: color }} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="link" className="p-0 flex items-center" style={{ color: color }}>
        <Link href={link}>
          Learn More
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  )
}

// Component for plan cards
function PlanCard({ name, speed, price, regularPrice, features, popular, color = "#e10600" }: {
  name: string
  speed: string
  price: string
  regularPrice: string
  features: string[]
  popular: boolean
  color?: string
}) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${popular ? "ring-2" : ""}`}
      style={popular ? { ringColor: color } : {}}
    >
      {popular && (
        <div className="text-white py-2 px-4 text-center font-medium" style={{ backgroundColor: color }}>
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-[#0A1E3C]">{name}</h3>
        <p className="text-gray-600 mb-4">{speed}</p>
        <div className="mb-6">
          <p className="text-4xl font-bold" style={{ color: color }}>
            ${price}
            <span className="text-sm font-normal text-gray-500">/mo</span>
          </p>
          <p className="text-sm text-gray-500">
            <span className="line-through">${regularPrice}</span> per month with Auto Pay, for 12 months
          </p>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: color }} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <OrderCTAButton className="w-full inline-flex items-center justify-center rounded-md text-white h-10 px-4 py-2 font-semibold" style={{ backgroundColor: color, borderColor: color }}>
          Select Plan
        </OrderCTAButton>
      </div>
    </div>
  )
}

// Component for feature cards
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start">
      <div className="mr-4 bg-white p-3 rounded-lg shadow-md">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-[#0A1E3C]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

// Component for testimonial cards
function TestimonialCard({ quote, author, location, rating, color = "#e10600" }: {
  quote: string
  author: string
  location: string
  rating: number
  color?: string
}) {
  return (
    <div className="bg-[#F5F7FA] rounded-xl shadow-lg p-6">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" style={{ color: color }} />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">{'"'}{quote}{'"'}</p>
      <div>
        <p className="font-semibold text-[#0A1E3C]">{author}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  )
}

// Component for digital lifestyle cards
function DigitalLifestyleCard({ icon, title, description, bgColor }: {
  icon: React.ReactNode
  title: string
  description: string
  bgColor: string
}) {
  return (
    <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${bgColor}`}>
      <div className="p-6 text-white">
        <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </div>
  )
}
