"use client";

import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { motion } from "framer-motion";

interface StatItem {
  id: string;
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    id: "listings",
    value: 1200,
    decimals: 0,
    suffix: "+",
    label: "Active Listings",
    description: "Premium rooms, lofts, and apartments ready to rent.",
  },
  {
    id: "cities",
    value: 35,
    decimals: 0,
    suffix: "+",
    label: "Cities Covered",
    description: "Metropolitan centers and university towns.",
  },
  {
    id: "rating",
    value: 4.8,
    decimals: 1,
    suffix: "/5",
    label: "Average Rating",
    description: "Consistently rated 5-stars by happy tenants.",
  },
  {
    id: "renters",
    value: 10000,
    decimals: 0,
    suffix: "+",
    label: "Happy Renters",
    description: "Helped thousands discover their ideal home.",
  },
];

function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latestValue) {
          const numFormatted = latestValue.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          });
          node.textContent = numFormatted + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [value, inView, decimals, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-neutral-bg border-b border-card-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-card-bg border border-card-border rounded-2xl shadow-sm text-center flex flex-col justify-between"
            >
              <div>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-2">
                  <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </span>
                <span className="block text-base font-bold text-foreground mb-1">
                  {stat.label}
                </span>
              </div>
              <p className="text-xs text-muted mt-3 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
