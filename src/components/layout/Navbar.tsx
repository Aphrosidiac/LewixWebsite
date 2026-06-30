"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 100) {
      setHidden(true);
      setMobileOpen(false);
    } else {
      setHidden(false);
    }
  });

  const activeHref = links.find((l) =>
    l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
  )?.href;

  const bubbleTarget = hoveredHref ?? activeHref;

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -20, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <nav
          className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full"
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            boxShadow:
              "0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)",
          }}
          onMouseLeave={() => setHoveredHref(null)}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="px-5 py-2 font-display font-bold text-sm tracking-[0.25em] uppercase text-text-primary hover:text-accent transition-colors duration-300"
            data-cursor="pointer"
            onMouseEnter={() => setHoveredHref("/")}
          >
            LEWIX
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-white/[0.06] mx-1" />

          {/* Navigation Links */}
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const isBubbleTarget = bubbleTarget === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                onMouseEnter={() => setHoveredHref(link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-body font-medium transition-colors duration-200 ${
                  isBubbleTarget
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isBubbleTarget && (
                  <motion.div
                    layoutId="nav-bubble"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backdropFilter: "blur(24px) saturate(200%)",
                      WebkitBackdropFilter: "blur(24px) saturate(200%)",
                      background:
                        hoveredHref && !isActive
                          ? "rgba(255, 255, 255, 0.06)"
                          : "rgba(129, 140, 248, 0.12)",
                      border: `1px solid ${
                        hoveredHref && !isActive
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(129, 140, 248, 0.2)"
                      }`,
                      boxShadow:
                        isActive && !hoveredHref
                          ? "0 0 20px rgba(129, 140, 248, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.06)"
                          : "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                      mass: 0.8,
                    }}
                  />
                )}
              </Link>
            );
          })}

        </nav>
      </motion.header>

      {/* Mobile Navbar */}
      <header className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div
          className="flex items-center justify-between px-5 py-3 rounded-2xl"
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Link
            href="/"
            className="font-display font-bold text-sm tracking-[0.25em] uppercase text-text-primary"
          >
            LEWIX
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
            data-cursor="pointer"
          >
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-px bg-text-primary origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-text-primary"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-px bg-text-primary origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { opacity: 1, pointerEvents: "auto" as const }
            : { opacity: 0, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6"
      >
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={
              mobileOpen
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 + i * 0.05 },
                  }
                : { opacity: 0, y: 20 }
            }
          >
            <Link
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-display text-2xl font-bold tracking-wider uppercase transition-colors ${
                pathname === link.href
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
