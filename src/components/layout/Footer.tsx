"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/animations";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-8">
          {/* Nav links row */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className="relative text-xs font-display font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-text-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="mailto:hello@lewix.ai"
              data-cursor="pointer"
              className="relative text-xs font-display font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-text-primary hover:after:w-full after:transition-all after:duration-300 md:ml-auto"
            >
              hello@lewix.ai
            </a>
          </div>

          {/* Giant LEWIX wordmark */}
          <div className="mt-12 md:mt-16 -mx-2">
            <span
              className="block font-display font-bold leading-[0.8] tracking-tight text-[clamp(4rem,15vw,13rem)] select-none"
              style={{ color: "rgba(255, 255, 255, 0.04)" }}
            >
              LEWIX
            </span>
          </div>

          {/* Bottom metadata */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider">
              &copy; {new Date().getFullYear()} Lewix.ai
            </p>
            <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider">
              Engineered in Johor Bahru, Malaysia
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
