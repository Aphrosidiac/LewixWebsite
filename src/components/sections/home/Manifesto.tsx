"use client";

import { ScrollRevealText } from "@/components/ui/animations";

export function Manifesto() {
  return (
    <section className="py-32 md:py-48">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <ScrollRevealText text="We don't just write code. We architect complete systems — from database to deployment — that businesses depend on every single day. No templates. No shortcuts. Just precision engineering." />
      </div>
    </section>
  );
}
