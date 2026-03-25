import { CalendarIcon, ClockIcon, TagIcon, CheckCircleIcon, UserIcon } from "lucide-react"
import { AUTHORS } from "@/lib/authors"
import { formatDisplayDate, getResolvedMonthlyUpdatedDate } from "@/lib/seo-dates"

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
  const resolvedUpdateDate = getResolvedMonthlyUpdatedDate(updateDate)
  const resolvedCategories = categories.length > 0 ? categories : category ? [category] : []
  const authorProfile = author ? AUTHORS[author] : undefined

  const isoDate = (dateString: string) => new Date(dateString).toISOString()
  const slugToTitle = (slug: string) => {
    const tail = slug.split("/").filter(Boolean).pop() || ""
    return tail
      .split("-")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const resolvedTitle = pageTitle || (pageSlug ? slugToTitle(pageSlug) : undefined)
  const resolvedDescription = pageDescription

  // Build Article JSON-LD when we have enough data
  const articleSchema =
    authorProfile && resolvedPublishDate
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          ...(resolvedTitle ? { headline: resolvedTitle } : {}),
          ...(resolvedDescription ? { description: resolvedDescription } : {}),
          ...(pageSlug
            ? { url: `https://frontier-deals.com${pageSlug}` }
            : {}),
          datePublished: isoDate(resolvedPublishDate),
          dateModified: isoDate(resolvedUpdateDate),
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
          // Speakable: headline + first article paragraph are ideal for voice/AI summaries
          speakableSpecification: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", "article > p:first-of-type"],
          },
        }
      : null

  // Build ClaimReview JSON-LD when content has been fact-checked
  const claimReviewSchema =
    factChecked && pageSlug && resolvedTitle
      ? {
          "@context": "https://schema.org",
          "@type": "ClaimReview",
          url: `https://frontier-deals.com${pageSlug}`,
          claimReviewed: resolvedTitle,
          reviewDate: isoDate(resolvedUpdateDate),
          author: {
            "@type": "Organization",
            name: factChecker ?? "Technical Review Team",
            url: "https://frontier-deals.com",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
            worstRating: 1,
            alternateName: "True",
          },
          itemReviewed: {
            "@type": "CreativeWork",
            name: resolvedTitle,
            ...(resolvedDescription ? { description: resolvedDescription } : {}),
            author: authorProfile
              ? { "@type": "Person", name: authorProfile.name, url: authorProfile.url }
              : undefined,
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
      {claimReviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewSchema) }}
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
              Published: <time dateTime={isoDate(resolvedPublishDate)}>{formatDisplayDate(resolvedPublishDate)}</time>
            </span>
          </div>
        )}

        {resolvedUpdateDate && (
          <div className="flex items-center gap-1">
            <CalendarIcon size={15} />
            <span>
              Updated: <time dateTime={isoDate(resolvedUpdateDate)}>{formatDisplayDate(resolvedUpdateDate)}</time>
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

