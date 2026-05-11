import { Footer } from "@/components/layout/Footer";
import { FadeUp } from "@/components/ui/animations";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

const projectData: Record<string, { title: string; type: string; description: string; challenge: string; solution: string; tech: string[] }> = {
  "dream-garage": {
    title: "Dream Garage",
    type: "Workshop Management ERP",
    description: "A complete car workshop management system handling documents, stock management, service tracking, multi-foreman support, and an AI-powered assistant.",
    challenge: "Dream Garage was running their workshop on spreadsheets and WhatsApp. Service records were lost, stock was untracked, and scaling to multiple foremen was impossible.",
    solution: "We built a full ERP system from scratch — service management with chassis photo capture, document generation, inventory tracking, multi-foreman assignment, audit logs, and a public-facing website. The system handles everything from customer intake to invoice generation.",
    tech: ["Vue 3", "Fastify", "Prisma", "PostgreSQL", "Redis", "Tailwind CSS", "Claude AI"],
  },
  "uncle-lim": {
    title: "Uncle Lim Delivery",
    type: "Food Delivery Platform",
    description: "A complete food delivery system replacing three separate legacy platforms — OrderLord, FeedMe, and PandaGo — with one unified solution.",
    challenge: "Uncle Lim Delivery was juggling three different platforms for order management, kitchen display, and delivery tracking. Data was fragmented and operational costs were high.",
    solution: "We consolidated everything into a single platform: customer-facing ordering website, admin dashboard, kitchen ticket system, delivery driver tracking, and comprehensive reporting. One system, zero fragmentation.",
    tech: ["Vue 3", "Fastify", "Prisma", "PostgreSQL", "WebSocket", "Tailwind CSS"],
  },
  "harvestgrow": {
    title: "HarvestGrow",
    type: "B2B Supply Chain ERP",
    description: "A B2B vegetable supplier ERP system with storefront, production kanban, same-day delivery coordination, and driver mobile interface.",
    challenge: "Harvest Grow Veg needed to digitize their entire supply chain — from farmer intake to restaurant delivery — while maintaining same-day delivery commitments.",
    solution: "We built a complete supply chain ERP: B2B storefront for restaurant ordering, production kanban for warehouse operations, driver mobile app for deliveries, and invoicing that syncs with their accounting system.",
    tech: ["Vue 3", "Fastify", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  "shuda-logistics": {
    title: "Shuda Logistics",
    type: "Distribution Management",
    description: "A full logistics and distribution management platform with real-time tracking, route optimization, and fleet management.",
    challenge: "Shuda Logistics needed a custom platform to handle their unique distribution workflows that no off-the-shelf solution could accommodate.",
    solution: "We built a complete distribution management system — order processing, route planning, real-time driver tracking, proof of delivery, and comprehensive analytics. Currently in its second major version rewrite.",
    tech: ["Vue 3", "Fastify", "Prisma", "PostgreSQL", "WebSocket", "Tailwind CSS"],
  },
  "label-company": {
    title: "Label Company",
    type: "Label Printing ERP",
    description: "A label and sticker printing ERP with a complete artwork pipeline, from client brief to production-ready files.",
    challenge: "Girpack Sdn Bhd needed to streamline their label printing workflow — from receiving artwork to managing production runs across multiple presses.",
    solution: "We built a specialized ERP handling the complete artwork pipeline: job intake, artwork approval workflow, color management, die-cutting specs, production scheduling, and quality control tracking.",
    tech: ["Vue 3", "Fastify", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  "gc-bakery": {
    title: "Gold Coast Baking Co",
    type: "Bakery Management",
    description: "A management system for a bakery enterprise featuring halal certification tracking, AI-powered video generation, and a production board.",
    challenge: "Gold Coast Baking needed to manage halal certifications, create marketing content efficiently, and coordinate production across their facility.",
    solution: "We built a tailored system with certification management and expiry tracking, AI-powered TTS video generation for social media content, a public product catalogue, and a production coordination board.",
    tech: ["Vue 3", "Fastify", "Prisma", "PostgreSQL", "Claude AI", "TTS", "Tailwind CSS"],
  },
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    return (
      <section className="pt-40 pb-32 text-center">
        <h1 className="font-display text-4xl font-bold">Project not found</h1>
        <Link href="/work" className="mt-4 text-accent">
          Back to work
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeUp>
            <Link
              href="/work"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M11 6H1M1 6L6 1M1 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All Projects
            </Link>
            <span className="block text-xs font-body uppercase tracking-widest text-text-muted">
              {project.type}
            </span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              {project.title}
            </h1>
            <p className="mt-6 text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Project Image Placeholder */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="aspect-video rounded-2xl bg-surface-elevated border border-border flex items-center justify-center">
              <div className="w-32 h-32 rounded-3xl bg-accent/10" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-16">
          <FadeUp>
            <div>
              <h2 className="font-display text-sm uppercase tracking-widest text-text-muted mb-4">
                The Challenge
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <h2 className="font-display text-sm uppercase tracking-widest text-text-muted mb-4">
                The Solution
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h2 className="font-display text-sm uppercase tracking-widest text-text-muted mb-4">
                Technology
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-xs font-body text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="pt-8 border-t border-border">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-text-primary text-background rounded-full text-sm font-display font-semibold uppercase tracking-wider hover:bg-accent transition-colors duration-300"
                >
                  Start a Similar Project
                </Link>
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
