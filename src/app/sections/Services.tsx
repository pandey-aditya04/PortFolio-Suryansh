"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, PenTool, Image as ImageIcon, Video, FileText, Code, Search, Sparkles, MonitorSmartphone, Share2, Zap } from "lucide-react";
import { Figma } from "@/components/ui/Icons";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

const serviceTags = [
  { name: "Framer Migration", icon: LayoutTemplate },
  { name: "Video & Motion Graphics", icon: Video },
  { name: "Copywriting", icon: FileText },
  { name: "Posters", icon: ImageIcon },
  { name: "Custom Code", icon: Code },
  { name: "SEO", icon: Search },
  { name: "Icons", icon: Sparkles },
  { name: "Social Media", icon: Share2 },
  { name: "Landing Pages", icon: MonitorSmartphone },
  { name: "Optimization", icon: Zap },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <SectionReveal>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border bg-muted px-3 py-1">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  Design services
                </span>
              </div>
              <h2 className="heading-2">
                Design <span className="text-muted-foreground">Services</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Explore a suite of design services to elevate your brand.
              </p>
            </div>
            
            <button className="hidden md:inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90">
              Contact Now
            </button>
          </div>
        </SectionReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Website Design - Large */}
            <SectionReveal variant="slide-right" delay={0.1}>
              <div className="rounded-3xl border border-border bg-muted p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <LayoutTemplate className="h-6 w-6 text-foreground" />
                  <h3 className="text-xl font-semibold text-foreground">Website Design</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand.
                </p>
                {/* Image Placeholder */}
                <div className="mt-auto aspect-video w-full rounded-xl bg-[#141414] border border-border overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                   <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-50">
                     <div className="h-20 w-1/3 bg-white/10 rounded-lg" />
                     <div className="h-20 w-2/3 bg-white/10 rounded-lg" />
                   </div>
                </div>
              </div>
            </SectionReveal>

            {/* Graphic Design - Small */}
            <SectionReveal variant="slide-right" delay={0.2}>
              <div className="rounded-3xl border border-border bg-muted p-8">
                <div className="flex items-center gap-3 mb-4">
                  <PenTool className="h-6 w-6 text-foreground" />
                  <h3 className="text-xl font-semibold text-foreground">Graphic Design</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Logo Design - Small */}
            <SectionReveal variant="slide-left" delay={0.1}>
              <div className="rounded-3xl border border-border bg-muted p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-6 w-6 text-foreground" />
                  <h3 className="text-xl font-semibold text-foreground">Logo Design</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Crafting distinctive, scalable, and impactful logos that embody your brand&apos;s identity and vision.
                </p>
              </div>
            </SectionReveal>

            {/* Framer Design - Large */}
            <SectionReveal variant="slide-left" delay={0.2}>
              <div className="rounded-3xl border border-border bg-muted p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Figma className="h-6 w-6 text-foreground" />
                  <h3 className="text-xl font-semibold text-foreground">Framer Design</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience.
                </p>
                {/* Image Placeholder */}
                <div className="mt-auto flex gap-4 h-48">
                  <div className="w-1/2 rounded-xl bg-[#141414] border border-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/20 to-transparent" />
                  </div>
                  <div className="w-1/2 rounded-xl bg-[#141414] border border-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[var(--gradient-end)]/20 to-transparent" />
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Tags Grid */}
        <SectionReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
            {serviceTags.map((tag) => {
              const Icon = tag.icon;
              return (
                <div
                  key={tag.name}
                  className="flex items-center gap-2 rounded-full bg-transparent border border-transparent px-4 py-2 hover:bg-[#141414] hover:border-border transition-colors cursor-default"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {tag.name}
                  </span>
                </div>
              );
            })}
          </div>
        </SectionReveal>

        <div className="mt-8 flex justify-center md:hidden">
            <button className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90">
              Contact Now
            </button>
        </div>
      </div>
    </section>
  );
}
