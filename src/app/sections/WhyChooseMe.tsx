"use client";

import { Check, X } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

const comparisons = [
  {
    pro: {
      title: "Skilled Professional",
      desc: "Gain access to top-tier talent with years of experience, ensuring flawless execution.",
    },
    con: {
      title: "Amateur Designer",
      desc: "Lack of experience may result in design inconsistencies and overlooked details.",
    },
    highlighted: false,
  },
  {
    pro: {
      title: "Future-Ready Designs",
      desc: "Crafting modern, scalable designs that grow with your business and stay ahead of trends.",
    },
    con: {
      title: "Outdated Concepts",
      desc: "Stale designs that don't reflect current trends or your evolving brand narrative.",
    },
    highlighted: true,
  },
  {
    pro: {
      title: "Client-Centric Collaboration",
      desc: "Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity.",
    },
    con: {
      title: "Detached Communication",
      desc: "Lack of collaboration and poor feedback loops can result in misaligned outcomes.",
    },
    highlighted: false,
  },
  {
    pro: {
      title: "Timely Project Tracking",
      desc: "Stay informed with regular progress updates and timely deliverables.",
    },
    con: {
      title: "Unstructured & Unreliable Work",
      desc: "Inconsistent timelines and last-minute changes can compromise quality.",
    },
    highlighted: false,
  },
];

export function WhyChooseMe() {
  return (
    <section id="why-me" className="section-padding">
      <div className="section-container max-w-5xl">
        {/* Header */}
        <SectionReveal>
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border bg-muted px-3 py-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Why choose me
              </span>
            </div>
            <h2 className="heading-2">
              Why me as <span className="text-muted-foreground">Design Partner</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Why Partner with Me for the Design Excellence
            </p>
          </div>
        </SectionReveal>

        {/* Grid */}
        <div className="flex flex-col gap-4">
          {comparisons.map((row, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden",
                  row.highlighted && "highlight-border"
                )}
              >
                {/* Pro Side */}
                <div className="bg-muted p-8">
                  <div className="mb-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#1a1a1a] border border-border">
                    <Check className="h-3 w-3 text-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {row.pro.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {row.pro.desc}
                  </p>
                </div>

                {/* Con Side */}
                <div className="bg-[#0a0a0a] p-8">
                  <div className="mb-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#1a1a1a] border border-border">
                    <X className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {row.con.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {row.con.desc}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
