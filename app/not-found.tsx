import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">404 · Not Found</p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Return to the homepage to continue
          exploring.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm transition hover:bg-accent/90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
