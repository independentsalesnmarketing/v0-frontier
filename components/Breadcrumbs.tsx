import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://frontler-internet.com${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-1 py-3 text-sm text-gray-600 overflow-x-auto">
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1
              return (
                <li key={item.label} className="flex items-center gap-1 whitespace-nowrap">
                  {index > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  )}
                  {index === 0 && (
                    <Home className="w-3.5 h-3.5 mr-0.5 flex-shrink-0" aria-hidden="true" />
                  )}
                  {isLast || !item.href ? (
                    <span className={isLast ? "text-gray-900 font-medium" : ""} aria-current={isLast ? "page" : undefined}>
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-[#da202c] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
