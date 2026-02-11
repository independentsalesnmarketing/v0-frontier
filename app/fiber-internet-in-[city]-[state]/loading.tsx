import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="relative bg-[#0A1E3C] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12">
              <Skeleton className="h-8 w-24 bg-white/10 mb-4" />
              <Skeleton className="h-12 w-full max-w-xl bg-white/10 mb-3" />
              <Skeleton className="h-12 w-4/5 max-w-xl bg-white/10 mb-6" />
              <Skeleton className="h-6 w-full max-w-xl bg-white/10 mb-2" />
              <Skeleton className="h-6 w-5/6 max-w-xl bg-white/10 mb-6" />

              <div className="flex flex-wrap gap-4">
                <Skeleton className="h-14 w-40 bg-white/10" />
                <Skeleton className="h-14 w-40 bg-white/10" />
              </div>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0">
              <Skeleton className="h-[400px] w-full bg-white/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section Skeleton */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto bg-gray-200 mb-4" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto bg-gray-200 mb-2" />
            <Skeleton className="h-6 w-5/6 max-w-3xl mx-auto bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="h-[400px] w-full bg-gray-200 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
