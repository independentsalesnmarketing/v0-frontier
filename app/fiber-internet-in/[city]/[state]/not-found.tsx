import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8 max-w-xl">
        <h1 className="text-4xl font-bold text-[#0A1E3C] mb-4">Location Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the location you're looking for. It may not be in our service area, or there might be a typo
          in the URL.
        </p>
        <div className="space-y-4">
          <Link
            href="/coverage"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#DA202C] hover:bg-[#B71C1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA202C] transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            View Coverage Map
          </Link>
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-[#0A1E3C] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A1E3C] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
