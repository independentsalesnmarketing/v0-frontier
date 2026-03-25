import { NextRequest, NextResponse } from "next/server"

type QueryRecord = {
  count: number
  lastSearchedAt: string
  selectedHref?: string
}

const queryStats = new Map<string, QueryRecord>()

function normalizeQuery(value: string): string {
  return value.toLowerCase().trim().slice(0, 120)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const rawQuery = typeof body?.query === "string" ? body.query : ""
    const selectedHref = typeof body?.selectedHref === "string" ? body.selectedHref.slice(0, 250) : undefined
    const query = normalizeQuery(rawQuery)

    if (query.length < 2) {
      return NextResponse.json({ ok: false, error: "Query too short" }, { status: 400 })
    }

    const previous = queryStats.get(query)
    queryStats.set(query, {
      count: (previous?.count ?? 0) + 1,
      lastSearchedAt: new Date().toISOString(),
      selectedHref: selectedHref || previous?.selectedHref,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
  }
}

export async function GET() {
  const queries = Array.from(queryStats.entries())
    .map(([query, stats]) => ({ query, ...stats }))
    .sort((a, b) => b.count - a.count)

  return NextResponse.json({
    ok: true,
    totalUniqueQueries: queries.length,
    queries,
  })
}
