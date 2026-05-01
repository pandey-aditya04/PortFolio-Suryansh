"use client";

import { Star } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Header & Author Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <SectionReveal variant="slide-right">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border bg-muted px-3 py-1">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  FAQ Section
                </span>
              </div>
              <h2 className="heading-2 mb-4">
                Questions, <span className="text-muted-foreground">Answers</span>
              </h2>
              <p className="text-muted-foreground mb-10">
                Get quick answers to your most pressing questions.
              </p>

              {/* Author Card */}
              <div className="rounded-2xl border border-border bg-muted p-6 mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-lg font-bold border border-border overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--gradient-start)]/40 to-transparent" />
                    AP
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">Aditya Pandey</p>
                    <p className="text-xs text-muted-foreground">Expert Designer</p>
                  </div>
                </div>

                <div className="mb-4 flex gap-1 items-center">
                  <span className="text-sm font-medium mr-1">5.0</span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-transparent border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  See All Projects
                </button>
                <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors">
                  Contact Now
                </button>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <SectionReveal variant="slide-left">
              <Accordion items={faqs} />
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
