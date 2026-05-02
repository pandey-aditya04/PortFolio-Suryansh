import { Navigation } from "@/components/ui/Navigation";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { WhyChooseMe } from "./sections/WhyChooseMe";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyChooseMe />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
