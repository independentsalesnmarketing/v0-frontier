import { NextRequest, NextResponse } from "next/server"

const MAX_SIZE = 10_000_000 // 10 MB max

export async function GET(request: NextRequest) {
  const sizeParam = request.nextUrl.searchParams.get("size")
  const size = Math.min(Math.max(parseInt(sizeParam || "1000000", 10) || 1_000_000, 1000), MAX_SIZE)

  const buffer = new Uint8Array(size)
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Length": size.toString(),
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  })
}

export async function POST(request: NextRequest) {
  // Consume the body to measure upload speed
  await request.arrayBuffer()
  return NextResponse.json({ ok: true }, {
    headers: { "Cache-Control": "no-store" },
  })
}
