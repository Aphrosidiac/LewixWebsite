import { Footer } from "@/components/layout/Footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

const services = [
  {
    title: "Systems & ERPs",
    description: "Complete business management systems built from scratch. Inventory, invoicing, CRM, production tracking, audit logs — everything your operation needs in one place.",
    features: ["Inventory Management", "Invoice & Payment Tracking", "Customer CRM", "Production Boards", "Audit Logging", "Role-Based Access"],
  },
  {
    title: "Web Applications",
    description: "High-performance web applications that scale with your business. Dashboards, portals, marketplaces, and SaaS platforms engineered for speed and reliability.",
    features: ["Admin Dashboards", "Client Portals", "Real-Time Data", "API Integrations", "Multi-Tenant Architecture", "Performance Optimized"],
  },
  {
    title: "AI Integration",
    description: "Intelligent features powered by AI — embedded directly into your existing systems. Not AI for the sake of AI, but practical intelligence that saves time.",
    features: ["AI Chat Assistants", "Document Processing", "Smart Workflows", "Content Generation", "Data Analysis", "Voice & TTS"],
  },
  {
    title: "Logistics & Delivery",
    description: "Complete delivery and distribution platforms. Order management, driver tracking, route optimization, kitchen display systems, and fleet management.",
    features: ["Order Management", "Driver Mobile Apps", "Real-Time Tracking", "Route Optimization", "Kitchen Display", "Proof of Delivery"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn your business inside out. What works, what doesn't, what keeps you up at night.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "We design the system — database schema, API structure, user flows. No surprises during build.",
  },
  {
    step: "03",
    title: "Build",
    description: "We code. Fast, focused sprints with daily progress. You see working software within the first week.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "Your system goes live on production infrastructure. SSL, monitoring, backups — all handled.",
  },
  {
    step: "05",
    title: "Support",
    description: "We don't disappear after launch. Ongoing maintenance, feature additions, and system evolution.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <FadeUp>
            <span className="text-xs font-body uppercase tracking-widest text-text-muted">
              Services
            </span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              What we build
            </h1>
            <p className="mt-4 text-text-secondary text-base md:text-lg max-w-lg">
              We specialize in production-grade systems for businesses that need
              to move fast and ship reliably.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StaggerContainer className="space-y-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <GlassCard className="h-full">
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-text-secondary"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeUp>
            <span className="text-xs font-body uppercase tracking-widest text-text-muted">
              Process
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              How we work
            </h2>
          </FadeUp>

          <div className="mt-16 space-y-12">
            {process.map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.08}>
                <div className="flex gap-8 items-start">
                  <span className="font-display text-3xl font-bold text-accent/30 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-20 text-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-text-primary text-background rounded-full text-sm font-display font-semibold uppercase tracking-wider hover:bg-accent transition-colors duration-300"
                >
                  Start a Project
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
