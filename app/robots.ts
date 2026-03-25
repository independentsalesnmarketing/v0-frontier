import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/order/"],
      },
    ],
    sitemap: "https://frontier-deals.com/sitemap.xml",
  }
}
