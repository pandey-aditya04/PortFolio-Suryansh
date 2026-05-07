"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skillCategories } from "@/lib/skillsData";

import { Lightbox } from "@/components/ui/Lightbox";

export function MenuShowcase() {
  const category = skillCategories.find(c => c.id === "menu");
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });
  
  if (!category || !category.images) return null;

  return (
    <section className="section-padding bg-[#09090f] overflow-hidden">
      <div className="section-container">
        <SectionReveal>
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent-green" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-green">
                Identity
              </span>
              <div className="h-px w-8 bg-accent-green" />
            </div>
            <h2 className="heading-2 mb-4">Print Meets <span className="text-accent-green">Appetite</span></h2>
            <p className="text-muted-foreground">
              Restaurant and cafe menus designed to elevate brand identity and drive customer appetite. Digital and print-ready solutions.
            </p>
          </div>
        </SectionReveal>

        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -100, rotateY: 45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 100, rotateY: -45 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-4 md:gap-8 preserve-3d"
            >
              {/* Left Page Mockup */}
              <div 
                onClick={() => setLightbox({ isOpen: true, index: activeIndex })}
                className="w-[180px] md:w-[350px] aspect-[1/1.4] bg-white rounded-sm shadow-2xl overflow-hidden origin-right -rotate-y-12 border border-black/10 cursor-pointer"
              >
                <img src={category.images[activeIndex]} alt="Menu Page 1" className="w-full h-full object-cover" />
              </div>
              
              {/* Right Page Mockup */}
              <div 
                onClick={() => setLightbox({ isOpen: true, index: (activeIndex + 1) % category.images.length })}
                className="w-[180px] md:w-[350px] aspect-[1/1.4] bg-white rounded-sm shadow-2xl overflow-hidden origin-left rotate-y-12 border border-black/10 cursor-pointer"
              >
                <img src={category.images[(activeIndex + 1) % category.images.length]} alt="Menu Page 2" className="w-full h-full object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-10 bg-accent-green/5 blur-[100px] -z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Selector */}
        <div className="mt-16 flex justify-center gap-4">
          {category.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative h-20 w-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === idx ? "border-accent-green scale-110 shadow-lg shadow-accent-green/20" : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Thumb ${idx}`} className="h-full w-full object-cover" />
            </button>
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
