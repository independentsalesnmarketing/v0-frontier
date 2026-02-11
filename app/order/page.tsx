import type { Metadata } from "next"
import OrderPageClient from "./OrderPageClient"

export const metadata: Metadata = {
  title: "Frontier Internet: FREE Installation Offer",
  description:
    "Order Frontier's lightning-fast fiber internet, TV, and phone services for your home or business with our simple online form.",
  openGraph: {
    title: "Frontier Internet: FREE Installation Offer",
    description:
      "Limited time offer: Get Frontier's lightning-fast fiber internet with FREE installation. Order online today!",
    url: "https://frontier-deals.com/order",
    type: "website",
    images: [{ url: "/images/hero-family-internet.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Internet: FREE Installation Offer",
    description:
      "Order Frontier's lightning-fast fiber internet with FREE installation today!",
    images: ["/images/hero-family-internet.jpg"],
  },
}

export default function OrderPage() {
  return <OrderPageClient />
}
