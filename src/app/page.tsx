"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { ServicesSection } from "./sections/ServicesSection";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

import { FeaturedProject } from "./sections/FeaturedProject";

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
          <FeaturedProject />
          <Projects />
          <About />
          <ServicesSection />
          <Testimonials />
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
