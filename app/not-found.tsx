import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Page Not Found | Frontier Deals",
  description: "The page you're looking for doesn't exist. Return to Frontier Deals to explore our internet, TV, and phone services.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Illustration */}
        <div className="space-y-4">
          <div className="text-7xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">Here are some helpful links:</p>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/internet"
              className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
            >
              Internet Plans
            </Link>
            <Link
              href="/bundles"
              className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
            >
              Bundles
            </Link>
            <Link
              href="/tv-netflix"
              className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
            >
              TV Services
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            Need help?{" "}
            <a href="https://frontier.com/helpcenter" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-medium">
              Contact Frontier Support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
