"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "The Visionary",
    price: "Custom",
    description: "Perfect for brands looking for a unique, high-fidelity identity and motion assets.",
    features: [
      "AI Video Production",
      "Full Branding Suite",
      "UI/UX Design",
      "Unlimited Revisions",
      "Source Files Included"
    ],
    highlight: true,
    color: "var(--primary)"
  },
  {
    title: "The Creator",
    price: "Custom",
    description: "Ideal for social media creators and influencers needing consistent, high-quality content.",
    features: [
      "10+ Instagram Carousels",
      "Post Design System",
      "Thumbnails & Reels",
      "7-Day Turnaround",
      "Brand Style Guide"
    ],
    highlight: false,
    color: "var(--accent-blue)"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[#09090f]">
      <div className="section-container">
        <SectionReveal>
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <h2 className="heading-2 mb-4">Work With <span className="gradient-text">Me</span></h2>
            <p className="text-muted-foreground">
              Choose the package that fits your goals. Every project is handled with precision and a passion for premium design.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <div 
                className={`relative p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] ${
                  service.highlight 
                    ? "bg-surface border-primary/30 shadow-[0_0_50px_rgba(124,58,237,0.1)]" 
                    : "bg-surface/50 border-border"
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-4 left-12 px-4 py-1 bg-primary rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{service.price}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-12">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div 
                        className="h-5 w-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <Check className="h-3 w-3" style={{ color: service.color }} />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full h-14 rounded-2xl group"
                  variant={service.highlight ? "primary" : "secondary"}
                >
                  Get Started 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
