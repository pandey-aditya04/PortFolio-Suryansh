"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { skillCategories } from "@/lib/skillsData";

export function EditsShowcase() {
  const category = skillCategories.find(c => c.id === "edits");
  
  if (!category || !category.images) return null;

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionReveal>
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent-amber" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-amber">
                Retouching
              </span>
            </div>
            <h2 className="heading-2 mb-4">Before <span className="text-accent-amber">→</span> After</h2>
            <p className="text-muted-foreground max-w-2xl">
              The difference a skilled editor makes. Slide the divider to reveal the creative process behind high-impact photo compositing and retouching.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Slider 1 */}
          <SectionReveal>
            <BeforeAfter 
              before={category.images[0]} 
              after={category.images[1]} 
            />
          </SectionReveal>

          {/* Main Slider 2 */}
          <SectionReveal delay={0.2}>
            <BeforeAfter 
              before={category.images[2]} 
              after={category.images[0]} 
            />
          </SectionReveal>
        </div>

        {/* Small Gallery below if more images */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {category.images.map((img, idx) => (
            <SectionReveal key={idx} delay={idx * 0.05}>
              <div className="aspect-square rounded-2xl overflow-hidden border border-border group cursor-zoom-in">
                <img 
                  src={img} 
                  alt={`Edit ${idx + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
