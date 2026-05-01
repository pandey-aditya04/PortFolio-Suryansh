"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Rocket } from "lucide-react";
import { Figma } from "@/components/ui/Icons";
import { SectionReveal } from "@/components/ui/SectionReveal";

const steps = [
  {
    id: 1,
    title: "Let's Get In Touch",
    description: "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Grab Your Designs",
    description: "Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals.",
    icon: Figma,
  },
  {
    id: 3,
    title: "Kickstart Development",
    description: "I expertly transform your designs into a powerful, scalable solution, fully ready to launch.",
    icon: Zap,
  },
  {
    id: 4,
    title: "And Hand Over",
    description: "Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding overflow-hidden">
      <div className="section-container">
        <SectionReveal>
          <div className="mb-12 text-center">
             <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border bg-muted px-3 py-1">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  How it works
                </span>
              </div>
            <h2 className="heading-2">
              Process <span className="text-muted-foreground">Is Everything</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Simple, streamlined process is what get&apos;s you results.
            </p>
          </div>
        </SectionReveal>

        {/* Horizontal Scrolling Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-center rounded-3xl border border-border bg-muted p-8 flex flex-col relative group"
              >
                {/* Step Number Badge */}
                <div className="absolute top-6 right-6 h-8 w-8 rounded-full bg-black/50 border border-border flex items-center justify-center text-xs font-bold text-white z-10">
                  {step.id}
                </div>

                <div className="mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-[#141414] border border-border flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto">
                   <div className="h-px w-full bg-border mb-6" />
                   <span className="text-xs font-medium text-muted-foreground bg-[#141414] border border-border px-3 py-1.5 rounded-full">
                     Step {step.id}
                   </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
