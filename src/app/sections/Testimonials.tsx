"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

const statsData = [
  { value: "100+", label: "Happy clients", highlighted: false },
  { value: "$250m", label: "revenue added", highlighted: true },
  { value: "4.8", label: "Average Rating", highlighted: false },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Header & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <SectionReveal variant="slide-right">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border bg-muted px-3 py-1">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  Happy Clients
                </span>
              </div>
              <h2 className="heading-2 mb-4">
                Clients <span className="text-muted-foreground">Love me</span>
              </h2>
              <p className="text-muted-foreground mb-10">
                Trusted by 100+ happy clients, adding $250m+ in revenue.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {statsData.map((stat, i) => (
                  <div
                    key={i}
                    className={cn(
                      "rounded-xl border border-border bg-muted p-4 text-center flex flex-col justify-center items-center h-24",
                      stat.highlighted && "highlight-border bg-[#141414]"
                    )}
                  >
                    <span className="text-xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
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

          {/* Right Column: Testimonials List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.id} variant="slide-left" delay={i * 0.1}>
                <TestimonialCard testimonial={t} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="rounded-2xl border border-border bg-muted p-6 transition-colors hover:bg-[#141414]">
      {/* Author Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-lg font-bold border border-border overflow-hidden relative">
           {/* Placeholder for actual image */}
           <div className="absolute inset-0 bg-gradient-to-tr from-[var(--gradient-start)]/40 to-transparent" />
           {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-base font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.company}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4 flex gap-1">
        <span className="text-sm font-medium mr-2">{testimonial.rating.toFixed(1)}</span>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < testimonial.rating
                ? "fill-[#f59e0b] text-[#f59e0b]"
                : "text-border"
            )}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {testimonial.content}
      </p>
    </div>
  );
}
