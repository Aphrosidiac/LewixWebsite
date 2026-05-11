"use client";

import { FadeUp } from "@/components/ui/animations";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Systems & ERPs",
    description:
      "End-to-end business management — inventory, invoicing, CRM, production, and everything your operation needs.",
  },
  {
    num: "02",
    title: "Web Applications",
    description:
      "Dashboards, portals, marketplaces, and SaaS platforms engineered for speed and scale.",
  },
  {
    num: "03",
    title: "AI Integration",
    description:
      "Chatbots, automation, document processing, and smart workflows embedded into your systems.",
  },
  {
    num: "04",
    title: "Logistics & Delivery",
    description:
      "Order management, driver tracking, route optimization, and fleet management in real-time.",
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-40 px-5 sm:px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <FadeUp>
        <span className="text-[11px] font-body uppercase tracking-widest text-text-muted">
          What We Build
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
          Engineered for real business
        </h2>
      </FadeUp>

      <div className="mt-16 border-t border-white/[0.06]">
        {services.map((service, i) => (
          <FadeUp key={service.num} delay={i * 0.08}>
            <Link
              href="/services"
              data-cursor="pointer"
              className="group relative block py-8 md:py-14 border-b border-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4 md:gap-8">
                <div className="flex items-start gap-4 md:gap-10">
                  {/* Number */}
                  <span className="font-display text-xs font-medium text-text-muted pt-1 md:pt-3 shrink-0">
                    ({service.num})
                  </span>

                  {/* Title + Description */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-bold group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 md:mt-3 text-xs md:text-sm text-text-muted leading-relaxed max-w-lg group-hover:text-text-secondary transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center pt-3 shrink-0 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
