"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Text & Pricing */}
          <SectionReveal variant="slide-right">
            <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border bg-muted px-3 py-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Let&apos;s Connect
              </span>
            </div>
            <h2 className="heading-2 mb-12">
              Let&apos;s Grow <span className="text-muted-foreground">Together</span>
            </h2>

            <div className="space-y-8 mb-12">
              {/* Pricing Item 1 */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Web Design</h3>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                    Starting From $1,000
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Showcasing sleek, high-performance designs tailored for impact.
                </p>
              </div>

              {/* Pricing Item 2 */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Framer Development</h3>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                    Starting From $2,000
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Building visually stunning, user-focused websites that elevate brands.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-transparent border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                See All Projects
              </button>
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors">
                Get Started Now
              </button>
            </div>
          </SectionReveal>

          {/* Right Column: Image Showcase */}
          <SectionReveal variant="slide-left" className="relative h-full min-h-[400px]">
             <div className="absolute inset-0 rounded-3xl bg-[#141414] border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80 z-10" />
                {/* Simulated mockups grid */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] grid grid-cols-2 gap-4 rotate-[-5deg] opacity-60">
                   <div className="bg-[#1a1a1a] rounded-xl border border-border shadow-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-[var(--gradient-start)]/10" />
                   </div>
                   <div className="bg-[#1a1a1a] rounded-xl border border-border shadow-2xl overflow-hidden relative translate-y-8">
                      <div className="absolute inset-0 bg-[var(--gradient-end)]/10" />
                   </div>
                   <div className="bg-[#1a1a1a] rounded-xl border border-border shadow-2xl overflow-hidden relative -translate-y-8">
                      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-start)]/20 to-transparent" />
                   </div>
                   <div className="bg-[#1a1a1a] rounded-xl border border-border shadow-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--gradient-end)]/20 to-transparent" />
                   </div>
                </div>
             </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
