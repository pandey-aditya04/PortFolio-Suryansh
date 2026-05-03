"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";

function Counter({ value, label }: { value: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-bold gradient-text mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "20+", label: "Happy Clients" },
    { value: "5+", label: "Design Categories" },
    { value: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="section-padding bg-background border-y border-border/50">
      <div className="section-container">
        <SectionReveal>
          <div className="mb-20 text-center">
            <h2 className="heading-2">By The <span className="gradient-text">Numbers</span></h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          {stats.map((stat, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <Counter value={stat.value} label={stat.label} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
