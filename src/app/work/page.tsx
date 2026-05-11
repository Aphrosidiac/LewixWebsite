"use client";

import { Footer } from "@/components/layout/Footer";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

export default function WorkPage() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-lg"
        >
          <GlassCard hover={false} className="py-16 md:py-20 px-8 md:px-12 text-center">
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-16 h-px bg-accent mx-auto mb-10 origin-center"
            />

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs font-body uppercase tracking-[0.3em] text-text-muted"
            >
              Our Work
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mt-4 font-display text-4xl md:text-5xl font-bold"
            >
              Coming Soon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-5 text-text-secondary text-base max-w-sm mx-auto leading-relaxed"
            >
              We&apos;re preparing our case studies. In the meantime, get in
              touch to learn about what we&apos;ve built.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-display font-semibold uppercase tracking-wider text-text-secondary border border-white/[0.08] hover:text-text-primary hover:border-white/[0.15] transition-all duration-300"
                  style={{
                    backdropFilter: "blur(8px)",
                    background: "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  Get in Touch
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-16 h-px bg-accent mx-auto mt-10 origin-center"
            />
          </GlassCard>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
