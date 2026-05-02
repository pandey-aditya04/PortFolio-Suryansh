"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";
import { SectionReveal } from "@/components/ui/SectionReveal";

const skillsList = [
  "Product Design",
  "UX Design",
  "UI Design",
  "Framer",
  "Branding",
  "Webflow",
];

const timeline = [
  { role: "Freelance", company: "GreenLeaf Co", year: "2021" },
  { role: "UX/UI Designer", company: "UrbanFit Studio", year: "2022" },
  { role: "Product Designer", company: "PixelCraft Studios", year: "2023" },
  { role: "Graphic Designer", company: "VistaWorks", year: "2024" },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <SectionReveal>
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border bg-muted px-3 py-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Expert Designer
              </span>
            </div>
            <h2 className="heading-2">
              Aditya Pandey, <span className="text-muted-foreground">Your Designer</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Brief initial presentation of myself and my previous experiences.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Profile Card */}
          <SectionReveal variant="slide-right" className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-muted p-6">
              {/* Image Placeholder */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))`,
                  }}
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-white">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Bio snippet */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground">
                  Hello I am Aditya Pandey
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  UI/UX Interaction Designer Based in India.
                </p>
              </div>

              {/* Social & CTA */}
              <div className="mt-8">
                <div className="flex items-center gap-6 mb-8">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                
                <button className="w-auto rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] border border-border">
                  Connect with me
                </button>
              </div>
            </div>
          </SectionReveal>

          {/* Right Column: Bio, Skills, Timeline */}
          <SectionReveal variant="slide-left" className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-muted p-8 lg:p-10 h-full flex flex-col">
              {/* Text */}
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                I&apos;m Aditya Pandey, a dedicated Web Designer & Developer based in
                the vibrant city of India. I specialize in creative design with
                seamless technical execution to craft exceptional digital
                experiences.
              </p>

              <div className="my-8 h-px w-full bg-border" />

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-[#141414] border border-border px-4 py-2 text-sm font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Timeline */}
              <div className="mt-auto flex flex-col gap-2">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl bg-transparent p-4 transition-colors hover:bg-[#141414] border border-transparent hover:border-border"
                  >
                    <span className="w-1/3 text-sm font-medium text-foreground">
                      {item.role}
                    </span>
                    <span className="w-1/3 text-sm text-muted-foreground text-center">
                      {item.company}
                    </span>
                    <span className="w-1/3 text-sm text-muted-foreground text-right font-mono">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
