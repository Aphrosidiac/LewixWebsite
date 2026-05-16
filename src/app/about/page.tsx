import { Footer } from "@/components/layout/Footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { TiltCard } from "@/components/ui/TiltCard";

const values = [
  {
    num: "01",
    title: "Ship, Don't Pitch",
    description:
      "We don't make decks. We build it, deploy it, and hand you the keys.",
  },
  {
    num: "02",
    title: "Precision Over Speed",
    description:
      "We move fast, but never sloppy. Every system is production-grade from day one.",
  },
  {
    num: "03",
    title: "Own the Stack",
    description:
      "Database to deployment — we own every layer so nothing falls through the cracks.",
  },
  {
    num: "04",
    title: "Real Problems Only",
    description:
      "We work with businesses that have real operational pain, not vanity projects.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero + Story */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8">
          <FadeUp>
            <span className="text-xs font-body uppercase tracking-widest text-text-muted">
              About Us
            </span>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              A small team that
              <br />
              ships <span className="text-accent">big systems</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Lewix.ai was founded in Malaysia with one goal —
                build the systems that businesses actually need to run. Not
                templates. Not MVPs that never grow up. Real, production-grade
                platforms that handle inventory, invoicing, deliveries, and
                everything in between.
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Today we have 10+ systems running in production across
                industries — from car workshops to vegetable suppliers, food
                delivery to label printing. Every system is built from scratch,
                tailored to how the business actually operates, and deployed on
                infrastructure we manage ourselves.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <FadeUp>
            <span className="text-xs font-body uppercase tracking-widest text-text-muted">
              How We Work
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              Our principles
            </h2>
          </FadeUp>

          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value) => (
              <StaggerItem key={value.num}>
                <TiltCard className="h-full">
                  <div className="p-8">
                    <span className="font-display text-3xl font-bold text-white/[0.06] group-hover:text-accent/30 transition-colors duration-500">
                      {value.num}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </>
  );
}
