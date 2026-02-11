import Link from "next/link"
import { Wifi, Tv, Phone, Package, ArrowRight } from "lucide-react"

interface ServiceLink {
  title: string
  description: string
  href: string
  icon: "internet" | "tv" | "phone" | "bundles"
}

const allServices: ServiceLink[] = [
  {
    title: "Fiber Internet",
    description: "Symmetrical speeds up to 5 Gig with no data caps. Plans from $29.99/mo.",
    href: "/internet",
    icon: "internet",
  },
  {
    title: "TV & Netflix",
    description: "Stream thousands of shows and movies with Netflix included on your Frontier plan.",
    href: "/tv-netflix",
    icon: "tv",
  },
  {
    title: "Home Phone",
    description: "Unlimited nationwide calling with 20+ features and HD voice quality for $25/mo.",
    href: "/home-phone",
    icon: "phone",
  },
  {
    title: "Internet & Phone Bundles",
    description: "Combine Fiber Internet with Digital Voice and save up to $120/year.",
    href: "/bundles",
    icon: "bundles",
  },
]

const iconMap = {
  internet: Wifi,
  tv: Tv,
  phone: Phone,
  bundles: Package,
}

interface RelatedServicesProps {
  /** The current page's path, e.g. "/internet". Services matching this path will be excluded. */
  currentPath: string
  /** Optional heading override */
  heading?: string
  /** Optional dark theme for pages with dark backgrounds */
  dark?: boolean
}

export default function RelatedServices({ currentPath, heading = "Explore More Frontier Services", dark = false }: RelatedServicesProps) {
  const related = allServices.filter((s) => s.href !== currentPath)

  return (
    <section className={dark ? "py-16 bg-[#0d2847]" : "py-16 bg-gray-50"}>
      <div className="container mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold text-center mb-10 ${dark ? "text-white" : "text-[#0A1E3C]"}`}>
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {related.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group rounded-lg p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  dark
                    ? "bg-white/5 border border-gray-700 hover:border-[#00b7c3]/50 hover:shadow-[#00b7c3]/10"
                    : "bg-white border border-gray-200 hover:border-[#da202c]/30 hover:shadow-red-100"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  dark ? "bg-[#00b7c3]/10" : "bg-red-50"
                }`}>
                  <Icon className={`w-6 h-6 ${dark ? "text-[#00b7c3]" : "text-[#da202c]"}`} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${dark ? "text-white" : "text-[#0A1E3C]"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
                  {service.description}
                </p>
                <span className={`inline-flex items-center text-sm font-medium ${
                  dark ? "text-[#00b7c3] group-hover:text-[#00d4e3]" : "text-[#da202c] group-hover:text-[#b71c1c]"
                } transition-colors`}>
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
