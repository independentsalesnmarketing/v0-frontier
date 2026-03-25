interface KeyFact {
  label: string
  value: string
}

interface KeyFactsProps {
  title?: string
  facts: KeyFact[]
}

export default function KeyFacts({ title = "Key Facts", facts }: KeyFactsProps) {
  return (
    <section aria-label={title} className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="text-lg font-bold text-[#0A1E3C] mb-3">{title}</h2>
      <dl className="grid gap-3 sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-md bg-gray-50 px-3 py-2 border border-gray-100">
            <dt className="text-xs uppercase tracking-wide text-gray-500">{fact.label}</dt>
            <dd className="text-sm font-semibold text-gray-900 mt-1">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}