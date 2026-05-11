"use client";

import { FadeUp } from "@/components/ui/animations";
import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="py-20 md:py-48 px-5 sm:px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <FadeUp>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-[0.95]">
          Let&apos;s build
          <br />
          <span className="text-accent">something real.</span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="mt-8 text-sm text-text-muted max-w-sm leading-relaxed">
          Tell us about your project. We move fast
          and ship production-ready.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <Link
          href="/contact"
          data-cursor="pointer"
          className="group relative inline-block mt-10 md:mt-12 font-display text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-primary"
        >
          Get in Touch
          <span className="block h-[2px] bg-accent mt-2 transition-all duration-500 group-hover:translate-y-1 group-hover:bg-text-primary" />
        </Link>
      </FadeUp>
    </section>
  );
}
