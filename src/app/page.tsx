import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "./sections/Hero";
import { MarqueeStrip } from "./sections/MarqueeStrip";
import { SkillsShowcase } from "./sections/SkillsShowcase";
import { AIVideosReel } from "./sections/AIVideosReel";
import { CarouselShowcase } from "./sections/CarouselShowcase";
import { EditsShowcase } from "./sections/EditsShowcase";
import { MenuShowcase } from "./sections/MenuShowcase";
import { PostDesignsShowcase } from "./sections/PostDesignsShowcase";
import { StatsSection } from "./sections/StatsSection";
import { About } from "./sections/About";
import { ServicesSection } from "./sections/ServicesSection";
import { Projects } from "./sections/Projects";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <MarqueeStrip />
        <SkillsShowcase />
        <AIVideosReel />
        <CarouselShowcase />
        <EditsShowcase />
        <MenuShowcase />
        <PostDesignsShowcase />
        <StatsSection />
        <About />
        <ServicesSection />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
