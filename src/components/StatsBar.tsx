"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Briefcase, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Nationwide" },
  { icon: MapPin, value: "30", label: "States Served" },
  { icon: Briefcase, value: "~20", label: "Employees" },
  { icon: Calendar, value: "1982", label: "Founded" },
];

export default function StatsBar() {
  return (
    <section className="bg-[var(--color-navy)] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-gold)]/15 mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon
                  size={22}
                  className="text-[var(--color-gold)] group-hover:text-[var(--color-gold-light)] transition-colors"
                />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
