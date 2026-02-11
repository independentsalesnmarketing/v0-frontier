export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-[#DA202C] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading location information...</h2>
        <p className="mt-2 text-gray-500">Please wait while we retrieve the latest information.</p>
      </div>
    </div>
  )
}
