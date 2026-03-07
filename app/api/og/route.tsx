import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // Get the city and state from the request
    const city = searchParams.get("city") || "Your City"
    const state = searchParams.get("state") || "State"
    const fiber = searchParams.get("fiber") === "true"
    const nodeposit = searchParams.get("nodeposit") === "true"

    // Font
    const interBold = await fetch(
      new URL(
        "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZFhjQ.ttf",
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer())

    const interRegular = await fetch(
      new URL(
        "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZFhjQ.ttf",
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A1E3C",
          backgroundImage: "linear-gradient(to bottom right, #0A1E3C, #1D3461)",
          color: "white",
          padding: "40px 80px",
          textAlign: "center",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: "bold",
              background: "linear-gradient(to right, #DA202C, #FF5757)",
              backgroundClip: "text",
              color: "transparent",
              marginRight: "10px",
            }}
          >
            Frontier
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            {fiber ? "Fiber" : "Internet"}
          </div>
        </div>

        <div
          style={{
            fontSize: 48,
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#FFFFFF",
          }}
        >
          Now Available in {city}, {state}
        </div>

        {nodeposit && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                backgroundColor: "#DA202C",
                borderRadius: "8px",
                fontSize: 32,
                fontWeight: "bold",
              }}
            >
              NO DEPOSIT
            </div>
            <div
              style={{
                padding: "10px 20px",
                backgroundColor: "#00B7C3",
                borderRadius: "8px",
                fontSize: 32,
                fontWeight: "bold",
              }}
            >
              FREE INSTALLATION
            </div>
          </div>
        )}

        <div
          style={{
            fontSize: 28,
            marginTop: "30px",
            color: "#F5F7FA",
          }}
        >
          {fiber
            ? "Lightning-fast fiber internet with symmetrical speeds"
            : "Reliable high-speed internet for your home"}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "30px",
            fontSize: 20,
            color: "#AAAAAA",
          }}
        >
          frontier.com
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interBold,
            style: "normal",
            weight: 700,
          },
          {
            name: "Inter",
            data: interRegular,
            style: "normal",
            weight: 400,
          },
        ],
      },
    )
  } catch (e: any) {
    console.error(`OG image generation failed: ${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
