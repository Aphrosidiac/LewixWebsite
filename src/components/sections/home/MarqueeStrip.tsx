"use client";

import { Marquee } from "@/components/ui/animations";

const items = [
  "10+ Production Systems",
  "Full-Stack Engineering",
  "AI Integration",
  "Real Business Solutions",
  "24/7 Uptime",
  "End-to-End Delivery",
];

export function MarqueeStrip() {
  return (
    <section className="py-8 border-y border-border">
      <Marquee items={items} />
    </section>
  );
}
