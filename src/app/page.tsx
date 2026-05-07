"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Process } from "./sections/Process";
import { Comparison } from "./sections/Comparison";
import { FAQ } from "./sections/FAQ";
import AllWork from "./sections/AllWork";

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
          <About />
          <AllWork />
          <Process />
          <Comparison />
          <Testimonials />
          <FAQ />
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
