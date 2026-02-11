export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Frontier Red Spinner */}
        <div className="relative w-16 h-16">
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border/30"
            />
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="31.4 125.6"
              strokeLinecap="round"
              className="text-primary animate-spin"
            />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-foreground font-semibold">Loading</p>
          <p className="text-sm text-muted-foreground mt-1">
            Getting your fastest connection ready...
          </p>
        </div>
      </div>
    </div>
  )
}
