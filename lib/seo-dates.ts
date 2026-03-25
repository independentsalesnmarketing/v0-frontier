export function getMonthlyDeployDateIso(date = new Date()): string {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, "0")
  return `${year}-${month}-01`
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