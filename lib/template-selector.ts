/**
 * Determines which template to use for a given city and state
 * Uses a deterministic approach to ensure consistent template selection
 */
export function selectTemplate(cityName: string, stateName: string): "template2" | "template5" {
  // Create a simple hash of the city name
  const cityHash = cityName.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)

  // Even hash values get Template 2, odd hash values get Template 5
  return cityHash % 2 === 0 ? "template2" : "template5"
}
