import { formatDisplayDate, getResolvedMonthlyUpdatedDate } from "@/lib/seo-dates"

interface SeoFreshnessNoteProps {
  updateDate?: string
  label?: string
}

export default function SeoFreshnessNote({
  updateDate,
  label = "Last reviewed",
}: SeoFreshnessNoteProps) {
  const resolvedUpdatedDate = getResolvedMonthlyUpdatedDate(updateDate)

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
      <p>
        <span className="font-semibold">{label}:</span>{" "}
        <time dateTime={resolvedUpdatedDate}>{formatDisplayDate(resolvedUpdatedDate)}</time>
      </p>
      <p className="text-xs text-gray-500 mt-1">This page is refreshed monthly on production deploys.</p>
    </div>
  )
}