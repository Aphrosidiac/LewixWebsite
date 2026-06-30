"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-5 sm:px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-8 md:pb-10">
      {/* Top metadata */}
      <div className="animate-fade-in">
        <span className="text-[10px] md:text-[11px] font-body uppercase tracking-widest text-text-muted">
          (Est. 2026 — Malaysia)
        </span>
      </div>

      {/* Center — massive name + description */}
      <div className="flex-1 flex flex-col justify-center -mt-6 md:-mt-10">
        {/* Giant wordmark + CTAs on same line */}
        <div className="flex items-center justify-between animate-fade-in-up">
          <h1>
            <Image
              src="/logos/lewix-logo-dark.png"
              alt="LEWIX"
              width={800}
              height={128}
              className="h-[clamp(3rem,12vw,10rem)] w-auto"
              priority
            />
          </h1>

          <div className="hidden md:flex items-center gap-8 mr-8 lg:mr-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/contact"
              data-cursor="pointer"
              className="relative text-xs font-display font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-text-primary hover:after:w-full after:transition-all after:duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/work"
              data-cursor="pointer"
              className="relative text-xs font-display font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-text-primary hover:after:w-full after:transition-all after:duration-300"
            >
              View Work
            </Link>
          </div>
        </div>

        {/* .AI + Description */}
        <div className="mt-3 md:mt-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-[clamp(1rem,3vw,2.5rem)] font-display font-medium text-text-secondary tracking-[0.15em] uppercase">
            .AI
          </span>
          <p className="mt-4 md:mt-6 text-[10px] md:text-xs font-body uppercase leading-relaxed tracking-wider text-text-secondary max-w-xs md:max-w-sm">
            We align strategy, design, and engineering
            into production-grade systems. Your vision,
            executed with precision and
            shipped to production.
          </p>

          {/* Mobile CTAs */}
          <div className="mt-6 flex items-center gap-6 md:hidden">
            <Link
              href="/contact"
              className="relative text-[11px] font-display font-semibold uppercase tracking-wider text-text-secondary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-text-secondary"
            >
              Get in Touch
            </Link>
            <Link
              href="/work"
              className="relative text-[11px] font-display font-semibold uppercase tracking-wider text-text-secondary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-text-secondary"
            >
              View Work
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom service tags */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap animate-fade-in" style={{ animationDelay: "0.5s" }}>
        {["Systems", "Web Apps", "AI", "Logistics"].map((service, i) => (
          <span key={service} className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <span className="text-[10px] sm:text-xs md:text-sm font-display font-semibold uppercase tracking-wider text-text-secondary">
              {service}
            </span>
            {i < 3 && (
              <span className="text-text-muted/30 text-xs sm:text-sm">/</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
