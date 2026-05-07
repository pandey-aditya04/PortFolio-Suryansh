"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skillCategories } from "@/lib/skillsData";

export function CarouselShowcase() {
  const category = skillCategories.find(c => c.id === "carousel");
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false,
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  if (!category || !category.images) return null;

  return (
    <section className="section-padding bg-[#09090f]">
      <div className="section-container mb-16">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent-blue" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-blue">
                Engagement
              </span>
              <div className="h-px w-8 bg-accent-blue" />
            </div>
            <h2 className="heading-2 mb-4">Designs That <span className="text-accent-blue">Stop the Scroll</span></h2>
            <p className="text-muted-foreground">
              Built for Instagram. Optimized for engagement. Designed with intent. Swipe through my favorite carousel designs.
            </p>
          </div>
        </SectionReveal>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex touch-pan-y ml-[calc(1rem*-1)] py-10">
          {category.images.map((image, index) => (
            <CarouselItem 
              key={index} 
              image={image} 
              index={index} 
              emblaApi={emblaApi}
              onClick={() => setLightbox({ isOpen: true, index })}
            />
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

import { Lightbox } from "@/components/ui/Lightbox";

function CarouselItem({ image, index, emblaApi, onClick }: { image: string, index: number, emblaApi: any, onClick: () => void }) {
  const [scale, setScale] = useState(0.8);
  const [opacity, setOpacity] = useState(0.5);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slideProgress = engine.scrollSnaps[index] - scrollProgress;
    
    // Handle loop wrap-around
    let diff = Math.abs(slideProgress);
    if (diff > 0.5) diff = 1 - diff;
    
    const factor = 1 - (diff * 1.2);
    setScale(Math.max(0.8, factor));
    setOpacity(Math.max(0.4, factor));
  }, [emblaApi, index]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", onScroll);
    return () => {
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <div 
      className="flex-[0_0_280px] md:flex-[0_0_400px] min-w-0 pl-4 perspective-[1000px]"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
      }}
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-surface shadow-2xl shadow-black/40 cursor-pointer">
        <img 
          src={image} 
          alt={`Carousel ${index + 1}`} 
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
