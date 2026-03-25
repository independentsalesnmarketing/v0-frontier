export function getMonthlyDeployDateIso(date = new Date()): string {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, "0")
  return `${year}-${month}-01`
}

/** Returns "March 2026" style string for the current month at build/request time */
export function getCurrentMonthYear(date = new Date()): string {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
}

/** Returns the last day of the current month as YYYY-MM-DD (e.g. "2026-03-31") */
export function getEndOfCurrentMonthIso(date = new Date()): string {
  const last = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0))
  return last.toISOString().split("T")[0]
}

export function formatDisplayDate(dateString: string): string {
  const d = new Date(dateString)
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export function getResolvedMonthlyUpdatedDate(updateDate?: string): string {
  const monthlyDeployDate = getMonthlyDeployDateIso()
  if (!updateDate) return monthlyDeployDate

  const provided = new Date(updateDate)
  const monthly = new Date(monthlyDeployDate)
  return provided > monthly ? updateDate : monthlyDeployDate
}