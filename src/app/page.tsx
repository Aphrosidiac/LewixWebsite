import { Hero } from "@/components/sections/home/Hero";
import { MarqueeStrip } from "@/components/sections/home/MarqueeStrip";
import { Manifesto } from "@/components/sections/home/Manifesto";
import { Services } from "@/components/sections/home/Services";
import { Numbers } from "@/components/sections/home/Numbers";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Manifesto />
      <Services />
      <Numbers />
      <HomeCTA />
      <Footer />
    </>
  );
}
