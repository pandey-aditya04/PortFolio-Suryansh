"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/skillsData";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowUpRight, Play } from "lucide-react";
import { CarouselModal } from "@/components/ui/CarouselModal";

export function SkillsShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<typeof skillCategories[0] | null>(null);

  const featured = skillCategories.find(c => c.id === "ai-videos");
  const others = skillCategories.filter(c => c.id !== "ai-videos");

  return (
    <section id="skills" className="section-padding bg-[#09090f]">
      <div className="section-container">
        
        <SectionReveal>
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                My Work
              </span>
            </div>
            <h2 className="heading-2 mb-4">Everything You <span className="gradient-text">Need</span></h2>
            <p className="text-muted-foreground max-w-2xl">
              From AI-generated video to print menus — one designer, complete creative range.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Featured Card: AI Videos */}
          {featured && (
            <SectionReveal className="md:col-span-2">
              <div 
                className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] cursor-pointer"
                onMouseEnter={() => setHoveredId(featured.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedCategory(featured)}
              >
                {/* Background Image / Video Preview */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={featured.thumbnail} 
                    alt={featured.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-[#09090f]/20 to-transparent" />
                </div>

                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <div 
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: featured.badge_color }}
                  >
                    {featured.badge_text}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{featured.label}</h3>
                      <p className="text-sm text-gray-400 max-w-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {featured.description}
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                {/* Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-20 w-20 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/50 flex items-center justify-center text-white">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* 2x2 Grid for others */}
          {others.map((category, idx) => (
            <SectionReveal key={category.id} delay={idx * 0.1}>
              <div 
                className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] cursor-pointer"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedCategory(category)}
              >
                {/* Background */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={category.thumbnail} 
                    alt={category.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-[#09090f]/40 to-transparent" />
                </div>

                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <div 
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: category.badge_color }}
                  >
                    {category.badge_text}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{category.label}</h3>
                    <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary group-hover:scale-110 opacity-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {category.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}

        </div>
      </div>

      <CarouselModal 
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        images={selectedCategory?.images || []}
        title={selectedCategory?.label || ""}
      />
    </section>
  );
}
