import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-navy-dark)] overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--color-gold)]/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Brand */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Image
              src="/photos/cropped-logo1.png"
              alt="Gary Joyal"
              width={32}
              height={32}
              className="rounded-lg opacity-60"
            />
            <span className="text-white/50 font-semibold">Gary Joyal</span>
          </div>

          {/* Nav */}
          <nav className="flex items-center justify-center gap-8">
            <Link href="/" className="text-sm text-white/40 hover:text-[var(--color-gold)] transition-colors duration-300">
              Home
            </Link>
            <Link href="/press" className="text-sm text-white/40 hover:text-[var(--color-gold)] transition-colors duration-300">
              Press
            </Link>
            <Link href="/contact" className="text-sm text-white/40 hover:text-[var(--color-gold)] transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} Gary Joyal
            </p>
            <p className="text-xs text-white/20 mt-1">
              Built by{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-gold)]/60 hover:text-[var(--color-gold)] transition-colors duration-300"
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
