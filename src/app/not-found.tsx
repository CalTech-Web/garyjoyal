import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[var(--color-warm-white)] bg-dots relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-[var(--color-gold)]/5 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-[20%] left-[10%] w-56 h-56 bg-[var(--color-navy)]/5 rounded-full blur-[80px] animate-float-slow" />

      <div className="text-center px-6 relative z-10">
        <div className="text-gradient text-8xl md:text-9xl font-bold mb-2 leading-none">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-3">
          Page Not Found
        </h1>
        <span className="accent-line-center mb-5" />
        <p className="text-gray-500 mb-10 max-w-md mx-auto text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-navy-light)] text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-xl shadow-[var(--color-navy)]/15"
        >
          <span className="relative z-10 flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </span>
        </Link>
      </div>
    </section>
  );
}
