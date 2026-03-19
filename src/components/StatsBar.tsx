"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Briefcase, Calendar } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: Users, value: "500+", label: "Clients Nationwide", useCommas: false },
  { icon: MapPin, value: "30", label: "States Served", useCommas: false },
  { icon: Briefcase, value: "20", label: "Employees", useCommas: false },
  { icon: Calendar, value: "1982", label: "Founded", useCommas: false },
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden py-24 noise-overlay" style={{
      background: "linear-gradient(160deg, var(--color-navy-dark) 0%, var(--color-navy) 50%, var(--color-navy-dark) 100%)",
    }}>
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-gold)]/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 text-[var(--color-gold)] uppercase tracking-[0.15em] text-xs font-bold mb-4">
            By the Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Track Record
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="group"
            >
              <div className="relative rounded-2xl p-6 md:p-8 text-center border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/[0.1] transition-all duration-400 overflow-hidden">
                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/0 group-hover:via-[var(--color-gold)]/40 to-transparent transition-all duration-500" />

                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 mb-5 group-hover:bg-[var(--color-gold)]/15 group-hover:scale-110 transition-all duration-300">
                  <stat.icon
                    size={22}
                    className="icon-hover text-[var(--color-gold)]"
                  />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  useCommas={stat.useCommas}
                  className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight"
                />
                <p className="text-white/40 text-sm font-medium tracking-wide">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
