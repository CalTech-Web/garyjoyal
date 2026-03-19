"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-navy)]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/photos/cropped-logo1.png"
            alt="Gary Joyal"
            width={40}
            height={40}
            className="rounded transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-white font-semibold text-lg hidden sm:block group-hover:text-[var(--color-gold)] transition-colors duration-300">
            Gary Joyal
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
                pathname === link.href
                  ? "text-[var(--color-gold)]"
                  : "text-white/70 hover:text-[var(--color-gold)]"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 hover:text-[var(--color-gold)] transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-[var(--color-navy)]/98 backdrop-blur-xl border-t border-white/[0.06] px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3.5 text-sm font-medium border-b border-white/5 transition-colors duration-300 ${
                pathname === link.href
                  ? "text-[var(--color-gold)]"
                  : "text-white/70 hover:text-[var(--color-gold)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
