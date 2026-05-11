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

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:hello@lewix.ai" },
];

export function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06]"
      style={{
        backdropFilter: "blur(12px) saturate(150%)",
        background: "rgba(255, 255, 255, 0.02)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 md:py-20">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="font-display font-bold text-xl tracking-[0.3em] uppercase text-text-primary"
                data-cursor="pointer"
              >
                LEWIX
              </Link>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-xs">
                We engineer production-grade systems that businesses depend on
                every day.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-body uppercase tracking-widest text-text-muted mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-cursor="pointer"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-body uppercase tracking-widest text-text-muted mb-4">
                Connect
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Lewix.ai. All rights reserved.
            </p>
            <p className="text-xs text-text-muted">
              Engineered in Malaysia
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
