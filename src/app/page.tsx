"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Process } from "./sections/Process";
import { RecentDesigns } from "./sections/RecentDesigns";
import { Comparison } from "./sections/Comparison";
import { FAQ } from "./sections/FAQ";

import { FeaturedProject } from "./sections/FeaturedProject";
import DesignCarousel from "@/components/ui/DesignCarousel";
import VideoBentoBox from "@/components/ui/VideoBentoBox";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <Hero />
          <VideoBentoBox />
          <FeaturedProject />
          <About />
          <Process />
          <Comparison />
          <Projects />
          <RecentDesigns />
          <DesignCarousel />
          <Testimonials />
          <FAQ />
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
