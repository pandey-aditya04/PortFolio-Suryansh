"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowRight, Download } from "lucide-react";

const skillsList = [
  "AI Video Synthesis",
  "UI/UX Design",
  "Full-Stack Dev",
  "Motion Design",
  "Branding",
  "Typography",
];

const timeline = [
  { role: "Lead Designer", company: "Freelance", year: "2023 — Pres" },
  { role: "Full-Stack Dev", company: "Saas Platform", year: "2022 — 2023" },
  { role: "Graphic Designer", company: "Agency", year: "2021 — 2022" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Imagery */}
          <div className="lg:col-span-5 relative">
            <SectionReveal variant="slide-right">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/suryansh/portrait.png"
                  alt="Suryansh Srivastava"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent" />
                
                {/* Status Overlay */}
                <div className="absolute bottom-8 left-8 flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">
                    Open for Projects
                  </span>
                </div>
              </div>
            </SectionReveal>

            {/* Secondary Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -right-8 -bottom-8 w-64 aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl hidden md:block"
            >
              <Image
                src="/images/suryansh/collaboration.png"
                alt="Collaborative Session"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">
                    The Creator
                  </span>
                </div>
                <h2 className="heading-2 mb-6">Designing with <span className="gradient-text">Purpose</span></h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I&apos;m <span className="text-white font-medium">Suryansh Srivastava</span>, a designer and developer dedicated to crafting digital experiences that feel as good as they look. My work sits at the intersection of aesthetics and utility.
                  </p>
                  <p>
                    With a deep understanding of both design principles and engineering constraints, I bridge the gap between vision and reality. Whether it&apos;s a high-energy AI video reel or a complex SaaS dashboard, my goal is always clarity and impact.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Skills List */}
              <SectionReveal delay={0.2}>
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-6">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsList.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-surface border border-white/5 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SectionReveal>

              {/* Timeline */}
              <SectionReveal delay={0.3}>
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-6">Experience</h3>
                <div className="space-y-4">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center group">
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">{item.role}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">{item.company}</div>
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground">{item.year}</div>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Actions */}
            <SectionReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-6">
                <a 
                  href="/resume.pdf" 
                  className="group flex items-center gap-3 px-8 h-14 bg-white text-black font-bold rounded-2xl hover:bg-primary hover:text-white transition-all"
                >
                  Download CV
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
                <div className="flex items-center gap-4">
                  <a href="#" className="h-12 w-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:border-primary/20">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-12 w-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:border-primary/20">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-12 w-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:border-primary/20">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
