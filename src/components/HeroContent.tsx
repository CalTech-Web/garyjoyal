"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
    >
      <motion.div variants={fadeUp} className="mb-6">
        <span className="inline-block px-5 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 backdrop-blur-sm text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold">
          Joyal Capital Management
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-5 leading-[0.95] tracking-tight"
      >
        <span className="block">Gary</span>
        <span className="block text-gradient">Joyal</span>
      </motion.h1>

      <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white/70 mb-2 font-light tracking-wide">
        Founder, CEO &amp; Managing Director
      </motion.p>

      <motion.p variants={fadeUp} className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-10">
        A leading industry expert with over two and a half decades in
        financial services.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-[var(--color-navy)] font-bold text-sm uppercase tracking-wider rounded-full shadow-2xl shadow-[var(--color-gold)]/25 hover:shadow-[var(--color-gold)]/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">Get in Touch</span>
          <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold-light)] via-[var(--color-gold)] to-[var(--color-gold-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
        <Link
          href="/press"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/90 font-semibold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/25 backdrop-blur-md transition-all duration-300"
        >
          View Press
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUp}
        className="mt-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
