import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm-white)]">
      <div className="text-center px-6">
        <p className="text-[var(--color-gold)] text-6xl font-bold mb-4">404</p>
        <h1 className="text-2xl font-bold text-[var(--color-navy)] mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-navy)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-navy-light)] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
