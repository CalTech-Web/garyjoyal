"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-navy)]/90 backdrop-blur-2xl shadow-xl shadow-black/10 border-b border-white/[0.06]"
          : "bg-transparent backdrop-blur-sm border-b border-white/[0.03]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/photos/cropped-logo1.png"
              alt="Gary Joyal"
              width={40}
              height={40}
              className="rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[var(--color-gold)]/10"
            />
          </div>
          <span className="text-white font-bold text-lg hidden sm:block group-hover:text-[var(--color-gold)] transition-colors duration-300">
            Gary Joyal
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-[var(--color-gold)] bg-[var(--color-gold)]/10"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 p-2.5 rounded-xl hover:bg-white/5 hover:text-[var(--color-gold)] transition-all"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-[var(--color-navy)]/98 backdrop-blur-2xl border-t border-white/[0.04]"
          >
            <div className="px-4 py-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                      pathname === link.href
                        ? "text-[var(--color-gold)] bg-[var(--color-gold)]/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
