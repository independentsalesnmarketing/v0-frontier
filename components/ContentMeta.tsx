import { CalendarIcon, ClockIcon, TagIcon, CheckCircleIcon, UserIcon } from "lucide-react"
import { AUTHORS } from "@/lib/authors"

export interface ContentMetaProps {
  publishDate?: string
  /** @deprecated Use publishDate instead */
  date?: string
  updateDate?: string
  readTime?: number
  categories?: string[]
  /** @deprecated Use categories instead */
  category?: string
  factChecked?: boolean
  factChecker?: string
  /** Author name — must match a key in lib/authors.ts for schema generation */
  author?: string
  /** Page title — used in Article structured data */
  pageTitle?: string
  /** Page description — used in Article structured data */
  pageDescription?: string
  /** Canonical slug e.g. "/blog/fiber-vs-cable" — used in Article structured data */
  pageSlug?: string
}

export default function ContentMeta({
  publishDate,
  date,
  updateDate,
  readTime,
  categories = [],
  category,
  factChecked = false,
  factChecker,
  author,
  pageTitle,
  pageDescription,
  pageSlug,
}: ContentMetaProps) {
  const resolvedPublishDate = publishDate || date || ""
  const resolvedCategories = categories.length > 0 ? categories : category ? [category] : []
  const authorProfile = author ? AUTHORS[author] : undefined

  const formatDate = (dateString: string) => {
    const d = new Date(dateString)
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const isoDate = (dateString: string) => new Date(dateString).toISOString()

  // Build Article JSON-LD when we have enough data
  const articleSchema =
    authorProfile && resolvedPublishDate
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: pageTitle,
          description: pageDescription,
          ...(pageSlug
            ? { url: `https://frontier-deals.com${pageSlug}` }
            : {}),
          datePublished: isoDate(resolvedPublishDate),
          ...(updateDate ? { dateModified: isoDate(updateDate) } : {}),
          author: {
            "@type": "Person",
            name: authorProfile.name,
            jobTitle: authorProfile.role,
            url: authorProfile.url,
          },
          publisher: {
            "@type": "Organization",
            name: "Frontier Deals",
            url: "https://frontier-deals.com",
            logo: {
              "@type": "ImageObject",
              url: "https://frontier-deals.com/android-chrome-192x192.png",
            },
          },
        }
      : null

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 my-4">
        {authorProfile && (
          <div className="flex items-center gap-1 font-medium text-[#0A1E3C]">
            <UserIcon size={15} />
            <span>By {authorProfile.name}</span>
            <span className="text-gray-400 font-normal">— {authorProfile.role}</span>
          </div>
        )}

        {resolvedPublishDate && (
          <div className="flex items-center gap-1">
            <CalendarIcon size={15} />
            <span>
              Published: <time dateTime={isoDate(resolvedPublishDate)}>{formatDate(resolvedPublishDate)}</time>
            </span>
          </div>
        )}

        {updateDate && (
          <div className="flex items-center gap-1">
            <CalendarIcon size={15} />
            <span>
              Updated: <time dateTime={isoDate(updateDate)}>{formatDate(updateDate)}</time>
            </span>
          </div>
        )}

        {readTime && (
          <div className="flex items-center gap-1">
            <ClockIcon size={15} />
            <span>{readTime} min read</span>
          </div>
        )}

        {resolvedCategories.length > 0 && (
          <div className="flex items-center gap-1">
            <TagIcon size={15} />
            <span className="flex flex-wrap gap-1">
              {resolvedCategories.map((cat, i) => (
                <span key={i}>
                  {cat}
                  {i < resolvedCategories.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>
        )}

        {factChecked && (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircleIcon size={15} />
            <span>Fact checked{factChecker ? ` by ${factChecker}` : ""}</span>
          </div>
        )}
      </div>
    </>
  )
}

