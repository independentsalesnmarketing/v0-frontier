import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <h1 className="text-4xl font-bold text-[#0A1E3C] mb-4">Location Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the location you're looking for. It may not be in our service area or there might be a typo
          in the URL.
        </p>
        <div className="space-y-4">
          <Link
            href="/coverage"
            className="inline-block w-full sm:w-auto px-6 py-3 bg-[#DA202C] text-white font-medium rounded-lg hover:bg-[#B71C1C] transition-colors"
          >
            View Coverage Map
          </Link>
          <Link
            href="/"
            className="inline-block w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
