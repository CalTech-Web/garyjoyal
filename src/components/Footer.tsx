import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-navy-dark)] text-white/60 pt-12 pb-8 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">
            Gary Joyal &copy; {new Date().getFullYear()}
          </p>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors duration-300">
              Home
            </Link>
            <Link href="/press" className="hover:text-[var(--color-gold)] transition-colors duration-300">
              Press
            </Link>
            <Link
              href="/contact"
              className="hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
          <p className="text-sm">
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors duration-300"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
