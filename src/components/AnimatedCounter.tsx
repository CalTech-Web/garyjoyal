"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  useCommas?: boolean;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([~$]*)(\d+)([\+%]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: "" };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

export default function AnimatedCounter({ value, className = "", useCommas = false }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const { prefix, number, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView || number === 0) return;

    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, number]);

  if (number === 0) {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {value}
      </motion.span>
    );
  }

  const display = useCommas ? count.toLocaleString() : count.toString();

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
}
