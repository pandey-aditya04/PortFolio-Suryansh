"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMousePosition } from "@/hooks/useMousePosition";

const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.65, 0, 0.35, 1],
    },
  }),
};

export function Hero() {
  const mousePosition = useMousePosition();
  
  // Parallax effect for floating cards
  const xOffset = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * 0.05;
  const yOffset = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * 0.05;

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center pt-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gradient-start)] opacity-[0.05] blur-[100px]" />
      
      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            custom={0.1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border
                       bg-muted px-4 py-2 text-xs font-medium text-foreground backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3 text-muted-foreground" />
            UI/UX & Graphic Designer
          </motion.div>

          {/* Headline */}
          <motion.div
            custom={0.2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 flex-wrap"
          >
            <h1 className="heading-1">
              <span className="font-normal">Aditya</span> <span className="font-bold">Pandey</span>
            </h1>
            <motion.a 
              href="#projects"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted transition-colors hover:border-foreground"
              whileHover={{ scale: 1.05, rotate: 45 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpRight className="h-5 w-5 text-foreground" />
            </motion.a>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            custom={0.3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            I&apos;m a versatile designer specializing in graphic, web, and product
            design to help grow your business. Let&apos;s build something great!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={0.4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-transparent border border-border text-foreground hover:bg-muted"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See All Projects
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="rounded-full bg-white text-black hover:bg-white/90"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Now
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Testimonial Cards */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block w-[400px]">
        {/* Top Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ x: xOffset, y: yOffset }}
          className="absolute -top-32 right-10 z-20 w-72 rounded-2xl border border-border/50 bg-muted/80 p-5 backdrop-blur-md shadow-2xl"
        >
          <p className="text-sm font-medium text-foreground leading-relaxed">
            &quot;Working with him was a game changer!&quot;
          </p>
          <p className="mt-2 text-right text-xs text-muted-foreground">- pranavnb</p>
          
          {/* Decorative Cursor */}
          <div className="absolute -bottom-6 -left-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="m12 19-7-7 3-3 7 7-3 3z"/><path d="m18 13-1.5-7.5L9 4l9 9z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
          </div>
        </motion.div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ x: xOffset * 1.5, y: yOffset * 1.5 }}
          className="absolute top-10 -right-10 z-10 w-72 rounded-2xl border border-border/50 bg-card p-5 shadow-2xl"
        >
          <p className="text-sm font-medium text-foreground leading-relaxed">
            &quot;We increased our conversions by 200%&quot;
          </p>
          <p className="mt-2 text-right text-xs text-muted-foreground">- vijaynb</p>
          
          {/* Decorative Cursor */}
          <div className="absolute -top-8 -left-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground rotate-90"><path d="m12 19-7-7 3-3 7 7-3 3z"/><path d="m18 13-1.5-7.5L9 4l9 9z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
