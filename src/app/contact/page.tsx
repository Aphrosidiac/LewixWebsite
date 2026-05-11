"use client";

import { Footer } from "@/components/layout/Footer";
import { FadeUp } from "@/components/ui/animations";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Form */}
            <div>
              <FadeUp>
                <span className="text-xs font-body uppercase tracking-widest text-text-muted">
                  Get in Touch
                </span>
                <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">
                  Let&apos;s build
                  <br />
                  <span className="text-accent">together</span>
                </h1>
                <p className="mt-4 text-text-secondary max-w-md">
                  Tell us about your project. We&apos;ll get back to you within
                  24 hours.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <form className="mt-12 space-y-8">
                  <div className="group">
                    <label className="block text-xs font-body uppercase tracking-widest text-text-muted mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border pb-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body uppercase tracking-widest text-text-muted mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-border pb-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body uppercase tracking-widest text-text-muted mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border pb-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body uppercase tracking-widest text-text-muted mb-2">
                      Budget Range
                    </label>
                    <select className="w-full bg-transparent border-b border-border pb-3 text-text-muted focus:border-accent focus:outline-none transition-colors duration-300 cursor-pointer [&>option]:bg-surface [&>option]:text-text-primary">
                      <option value="">Select a range</option>
                      <option value="5k-10k">RM 5,000 - RM 10,000</option>
                      <option value="10k-25k">RM 10,000 - RM 25,000</option>
                      <option value="25k-50k">RM 25,000 - RM 50,000</option>
                      <option value="50k+">RM 50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-body uppercase tracking-widest text-text-muted mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-border pb-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <MagneticButton>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-text-primary text-background rounded-full text-sm font-display font-semibold uppercase tracking-wider hover:bg-accent transition-colors duration-300"
                    >
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M1 7H13M13 7L7 1M13 7L7 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </MagneticButton>
                </form>
              </FadeUp>
            </div>

            {/* Contact Info */}
            <div className="lg:pt-24">
              <FadeUp delay={0.3}>
                <GlassCard hover={false} className="p-8 md:p-10">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xs font-body uppercase tracking-widest text-text-muted mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@lewix.ai"
                      data-cursor="pointer"
                      className="text-lg text-text-primary hover:text-accent transition-colors"
                    >
                      hello@lewix.ai
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-body uppercase tracking-widest text-text-muted mb-3">
                      WhatsApp
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="https://wa.me/60102808533"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        className="block text-lg text-text-primary hover:text-accent transition-colors"
                      >
                        +60 10-280 8533 <span className="text-sm text-text-muted">Lewis</span>
                      </a>
                      <a
                        href="https://wa.me/60123812500"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        className="block text-lg text-text-primary hover:text-accent transition-colors"
                      >
                        +60 12-381 2500 <span className="text-sm text-text-muted">Noel</span>
                      </a>
                      <a
                        href="https://wa.me/60139078719"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        className="block text-lg text-text-primary hover:text-accent transition-colors"
                      >
                        +60 13-907 8719 <span className="text-sm text-text-muted">Fakhrul</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-body uppercase tracking-widest text-text-muted mb-3">
                      Location
                    </h3>
                    <p className="text-lg text-text-primary">
                      Johor Bahru, Malaysia
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-body uppercase tracking-widest text-text-muted mb-3">
                      Social
                    </h3>
                    <div className="flex gap-6">
                      <a
                        href="#"
                        data-cursor="pointer"
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                </GlassCard>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
