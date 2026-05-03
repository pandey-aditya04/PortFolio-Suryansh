"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { skillCategories } from "@/lib/skillsData";

export function AIVideosReel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featured = skillCategories.find(c => c.id === "ai-videos");
  
  if (!featured || !featured.videos) return null;

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="section-container mb-12">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-accent-pink" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent-pink">
                  Featured
                </span>
              </div>
              <h2 className="heading-2 mb-4">AI Video <span className="text-accent-pink">Reel</span></h2>
              <p className="text-muted-foreground max-w-xl">
                Motion meets intelligence. Every frame crafted with purpose using state-of-the-art AI synthesis.
              </p>
            </div>
            <div className="hidden md:block">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Scroll horizontally →
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-auto pb-12 px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] no-scrollbar snap-x snap-mandatory"
      >
        {featured.videos.map((video, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex-none w-[280px] h-[500px] rounded-3xl overflow-hidden border border-border bg-surface snap-center group relative"
          >
            <VideoPlayer 
              src={video.src} 
              title={`Scene ${idx + 1}`} 
              thumbnail={video.thumbnail} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
