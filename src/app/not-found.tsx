import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm-white)] bg-pattern relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[var(--color-navy)]/5 rounded-full blur-3xl" />
      <div className="text-center px-6 relative">
        <p className="text-gradient text-7xl font-bold mb-4">404</p>
        <h1 className="text-2xl font-bold text-[var(--color-navy)] mb-3">
          Page Not Found
        </h1>
        <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mx-auto mb-4" />
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-lift inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-navy-light)] text-white text-sm font-semibold rounded-xl shadow-lg shadow-[var(--color-navy)]/15"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
