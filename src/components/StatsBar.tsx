"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Briefcase, Calendar } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: Users, value: "500+", label: "Clients Nationwide" },
  { icon: MapPin, value: "30", label: "States Served" },
  { icon: Briefcase, value: "20", label: "Employees" },
  { icon: Calendar, value: "1982", label: "Founded" },
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden py-20 noise-overlay" style={{
      background: "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 40%, var(--color-navy-dark) 100%)",
    }}>
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[var(--color-gold)]/[0.04] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 mb-4 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[var(--color-gold)]/10 transition-all duration-400">
                  <stat.icon
                    size={24}
                    className="icon-hover text-[var(--color-gold)] group-hover:text-[var(--color-gold-light)] transition-colors duration-300"
                  />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  className="block text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight"
                />
                <p className="text-white/40 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
