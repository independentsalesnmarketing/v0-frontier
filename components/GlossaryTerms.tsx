/**
 * GlossaryTerms — entity-based content optimization component.
 *
 * Renders a collapsible "Key Terms & Concepts" section that natural-language
 * search engines and AI crawlers can use to map your page to a broad topic graph.
 * Uses native <details>/<summary> for progressive disclosure so the page appears
 * concise while every term remains fully crawlable.
 */

export interface GlossaryTerm {
  term: string
  definition: string
}

export interface GlossaryTermsProps {
  terms: GlossaryTerm[]
  /** Section heading, defaults to "Key Terms & Concepts" */
  heading?: string
}

export default function GlossaryTerms({ terms, heading = "Key Terms & Concepts" }: GlossaryTermsProps) {
  if (!terms.length) return null
  return (
    <aside
      aria-label="Glossary of key terms"
      className="my-10 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden not-prose"
    >
      <details>
        <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 font-semibold text-[#0A1E3C] hover:bg-gray-100 transition-colors select-none list-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2 text-base">
            <span className="inline-block w-2 h-2 rounded-full bg-[#DA202C]" aria-hidden="true" />
            {heading}
          </span>
          <span className="text-xs text-gray-400 font-normal shrink-0 group-open:hidden">{terms.length} terms ▾</span>
        </summary>

        <div className="px-6 pb-6 pt-2">
          <dl className="grid gap-4 sm:grid-cols-2">
            {terms.map(({ term, definition }) => (
              <div key={term} className="rounded-lg bg-white border border-gray-100 p-4">
                <dt className="font-bold text-[#0A1E3C] text-sm mb-1">{term}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </details>
    </aside>
  )
}
