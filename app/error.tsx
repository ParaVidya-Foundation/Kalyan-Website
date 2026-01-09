"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error for monitoring (production-safe)
    if (process.env.NODE_ENV === "development") {
      console.error("[Error Boundary]:", error);
    }
    // In production, send to error tracking service (e.g., Sentry, LogRocket)
    // Example: Sentry.captureException(error);
  }, [error])

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive" />
        <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground">Something Went Wrong</h2>
        <p className="mt-4 text-lg text-muted-foreground">The cosmic energies are misaligned. Please try again.</p>
        <Button onClick={reset} size="lg" className="mt-8">
          Try Again
        </Button>
      </div>
    </main>
  )
}
