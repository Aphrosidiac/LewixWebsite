"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 10, suffix: "+", label: "Production Systems" },
  { value: 7, suffix: "+", label: "Active Clients" },
  { value: 3, suffix: "+", label: "Years Shipping" },
  { value: 99.99, suffix: "%", label: "Uptime" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const hasDecimals = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      setDisplay(
        hasDecimals ? current.toFixed(2) : String(Math.floor(current))
      );
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value, hasDecimals]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border-y border-white/[0.06] py-10 md:py-16"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 md:gap-4 ${
              i < stats.length - 1
                ? "md:border-r md:border-white/[0.06] md:pr-10 lg:pr-14"
                : ""
            } ${i > 0 ? "md:pl-10 lg:pl-14" : ""}`}
          >
            <span className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
            </span>
            <span className="text-[10px] md:text-[11px] font-body uppercase tracking-widest text-text-muted leading-tight">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
