"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Sparkles, Video, Palette } from "lucide-react";
import { Instagram } from "@/components/ui/Icons";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("@/components/ui/HeroBackground").then(mod => mod.HeroBackground), {
  ssr: false,
});

const letterVariants: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.02 * i,
      ease: "easeOut",
    },
  }),
};

function SplitText({ text }: { text: string }) {
  return (
    <span className="inline-block overflow-hidden pb-2">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          custom={i}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-24 pb-20 overflow-hidden bg-[#09090f]">
      <HeroBackground />
      
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20
                         bg-primary/5 px-4 py-2 text-xs font-mono font-medium text-primary-light backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              AVAILABLE FOR NEW PROJECTS
            </motion.div>

            {/* Headline */}
            <h1 className="heading-1 font-bold mb-6 text-white leading-[1.1]">
              <SplitText text="Designing" /> <br />
              <span className="gradient-text"><SplitText text="The Future" /></span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              I am <span className="text-white font-medium">Suryansh Srivastava</span>, a Lead Designer & AI Video Synthesist crafting high-performance visual experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Button
                variant="primary"
                size="lg"
                className="rounded-full px-8 h-14 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25"
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore My Work
              </Button>
              <button 
                className="group flex items-center gap-3 text-white font-medium hover:text-primary transition-colors"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let&apos;s Talk
                <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center transition-all group-hover:border-primary group-hover:bg-primary/10">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Main Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full max-w-[450px] mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/10"
            >
              <Image
                src="/images/suryansh/portrait.png"
                alt="Suryansh Srivastava"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent" />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -right-6 top-1/4 h-20 w-48 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 px-4 shadow-2xl"
            >
              <div className="h-12 w-12 rounded-xl bg-accent-pink/20 flex items-center justify-center text-accent-pink">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Expertise</div>
                <div className="text-sm font-bold text-white">AI Videos</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -left-6 bottom-1/4 h-20 w-48 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 px-4 shadow-2xl"
            >
              <div className="h-12 w-12 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Experience</div>
                <div className="text-sm font-bold text-white">Carousels</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-10 h-20 w-56 bg-surface border border-primary/30 rounded-2xl flex items-center gap-4 px-4 shadow-[0_0_40px_rgba(124,58,237,0.2)]"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <Palette className="h-6 w-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Services</div>
                <div className="text-sm font-bold text-white">Premium Design</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
