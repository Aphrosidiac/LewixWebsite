"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FadeUp } from "@/components/ui/animations";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: "dream-garage",
    title: "Dream Garage",
    type: "Workshop Management ERP",
    description: "Complete car workshop management — documents, stock, services, AI assistant.",
    color: "#818CF8",
  },
  {
    slug: "uncle-lim",
    title: "Uncle Lim Delivery",
    type: "Food Delivery Platform",
    description: "End-to-end food delivery system replacing three legacy platforms.",
    color: "#818CF8",
  },
  {
    slug: "harvestgrow",
    title: "HarvestGrow",
    type: "B2B Supply Chain ERP",
    description: "B2B vegetable supplier ERP with storefront, production kanban, and driver mobile app.",
    color: "#818CF8",
  },
  {
    slug: "shuda-logistics",
    title: "Shuda Logistics",
    type: "Distribution Management",
    description: "Full logistics and distribution management system with real-time tracking.",
    color: "#818CF8",
  },
];

export function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-12 left-0 right-0 z-10 px-6 md:px-8 max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-body uppercase tracking-widest text-text-muted">
                Selected Work
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
                Projects that ship
              </h2>
            </div>
            <Link
              href="/work"
              data-cursor="pointer"
              className="hidden md:inline-flex items-center gap-2 text-sm font-body text-text-secondary hover:text-accent transition-colors"
            >
              View all projects
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M11 6L6 1M11 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </FadeUp>
      </div>

      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="flex items-center gap-8 pt-32 pb-16 px-6 md:px-8 h-screen"
        style={{ width: "fit-content" }}
      >
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            data-cursor="pointer"
            className="group relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-elevated border border-border group-hover:border-border-hover transition-all duration-500">
              {/* Placeholder — replace with actual project images/videos */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-2xl opacity-20"
                  style={{ background: project.color }}
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number */}
              <span className="absolute top-4 right-4 font-display text-sm text-text-muted font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Info */}
            <div className="mt-5">
              <span className="text-xs font-body uppercase tracking-widest text-text-muted">
                {project.type}
              </span>
              <h3 className="mt-1 font-display text-xl md:text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-sm">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
