import Link from "next/link";
import { Landmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-navy-dark)] overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--color-gold)]/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Brand */}
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-gold)]/15 flex items-center justify-center">
              <Landmark size={18} className="text-[var(--color-gold)]" />
            </div>
            <span className="text-white/80 font-bold text-lg tracking-tight">Gary <span className="text-[var(--color-gold)]">Joyal</span></span>
          </div>

          {/* Nav */}
          <nav className="flex items-center justify-center gap-8">
            <Link href="/" className="text-sm text-white/60 hover:text-[var(--color-gold)] transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/press" className="text-sm text-white/60 hover:text-[var(--color-gold)] transition-colors duration-300 font-medium">
              Press
            </Link>
            <Link href="/contact" className="text-sm text-white/60 hover:text-[var(--color-gold)] transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-sm text-white/50 font-medium">
              &copy; {new Date().getFullYear()} Gary Joyal
            </p>
            <p className="text-xs text-white/35 mt-1.5">
              Built by{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-gold)]/70 hover:text-[var(--color-gold)] transition-colors duration-300 font-medium"
              >
                CalTech Web
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
