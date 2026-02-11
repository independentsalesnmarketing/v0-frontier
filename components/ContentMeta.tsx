import { CalendarIcon, ClockIcon, TagIcon, CheckCircleIcon } from "lucide-react"

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
}: ContentMetaProps) {
  const resolvedPublishDate = publishDate || date || ""
  const resolvedCategories = categories.length > 0 ? categories : category ? [category] : []
  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Format for machine-readable dates (for schema)
  const isoDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString()
  }

  return (
    <div className="flex flex-wrap gap-4 text-sm text-gray-600 my-4">
      {resolvedPublishDate && (
        <div className="flex items-center gap-1">
          <CalendarIcon size={16} />
          <span>
            Published: <time dateTime={isoDate(resolvedPublishDate)}>{formatDate(resolvedPublishDate)}</time>
          </span>
        </div>
      )}

      {updateDate && (
        <div className="flex items-center gap-1">
          <CalendarIcon size={16} />
          <span>
            Updated: <time dateTime={isoDate(updateDate)}>{formatDate(updateDate)}</time>
          </span>
        </div>
      )}

      {readTime && (
        <div className="flex items-center gap-1">
          <ClockIcon size={16} />
          <span>{readTime} min read</span>
        </div>
      )}

      {resolvedCategories.length > 0 && (
        <div className="flex items-center gap-1">
          <TagIcon size={16} />
          <span className="flex flex-wrap gap-1">
            {resolvedCategories.map((cat, index) => (
              <span key={index}>
                {cat}
                {index < resolvedCategories.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </div>
      )}

      {factChecked && (
        <div className="flex items-center gap-1 text-green-600">
          <CheckCircleIcon size={16} />
          <span>Fact checked{factChecker ? ` by ${factChecker}` : ""}</span>
        </div>
      )}
    </div>
  )
}
