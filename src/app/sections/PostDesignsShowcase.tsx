"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skillCategories } from "@/lib/skillsData";
import { Lightbox } from "@/components/ui/Lightbox";
import { Maximize2 } from "lucide-react";

export function PostDesignsShowcase() {
  const category = skillCategories.find(c => c.id === "post-designs");
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  if (!category || !category.images) return null;

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionReveal>
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent-pink" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-pink">
                Social Media
              </span>
            </div>
            <h2 className="heading-2 mb-4">Posts That <span className="text-accent-pink">Perform</span></h2>
            <p className="text-muted-foreground max-w-2xl">
              Every post is a micro-brand moment. Make it count. Scroll-stopping social media posts for Instagram, LinkedIn, and beyond.
            </p>
          </div>
        </SectionReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {category.images.map((img, idx) => (
            <SectionReveal key={idx} delay={idx * 0.05}>
              <div 
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface cursor-pointer"
                onClick={() => setLightbox({ isOpen: true, index: idx })}
              >
                <img 
                  src={img} 
                  alt={`Post ${idx + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-accent-pink/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        images={category.images}
        currentIndex={lightbox.index}
        onNavigate={(index) => setLightbox({ ...lightbox, index })}
      />
    </section>
  );
}
