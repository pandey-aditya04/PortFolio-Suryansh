"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram, Globe, Mail } from "lucide-react";
import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";
import { RandomLetterSwapForward } from "@/components/ui/random-letter-swap";

export const About = () => {
  const experience = [
    { role: "Secretary", company: "EEL, MMMUT", year: "2025" },
    { role: "Joint Secretary", company: "NSS, MMMUT", year: "2024" },
    { role: "Freelance Video Editor", company: "FRND Ad Campaign", year: "2024" },
    { role: "B.Tech Student", company: "MMMUT Gorakhpur", year: "2023" },
  ];

  const skills = [
    "AI Video Synthesis", 
    "Adobe Premiere Pro", 
    "After Effects", 
    "Photoshop", 
    "Runway ML", 
    "Higgsfield AI",
    "Color Grading",
    "Branding"
  ];

  return (
    <section id="about" className="pt-32 pb-24 bg-[#0c0c0c]">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-center mb-10">
          <p className="text-white/40 text-center max-w-md text-base font-medium">
            Brief initial presentation of myself and my previous experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column — Profile Card */}
          <div className="lg:col-span-5">
            <GlowCard 
              customSize
              className="p-8 rounded-[2rem] border border-white/10 bg-[#111] h-full flex flex-col"
              glowColor="blue"
              intensity={0.5}
            >
              <div className="relative aspect-[1/1] rounded-[1.5rem] overflow-hidden bg-[#1a1a1a] mb-10 group">
                {/* Profile Image */}
                <Image 
                  src="/images/suryansh/Profile.jpeg"
                  alt="Suryansh Srivastava"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                
                {/* Available Badge */}
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c0c0c]/80 backdrop-blur-md border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-[9px] uppercase tracking-widest text-white/90 font-bold">Available for work</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-10">
                <h3 className="text-4xl font-serif text-white flex flex-wrap gap-x-3">
                  <span className="text-white">Hello I am</span>
                  <RandomLetterSwapForward
                    label="Suryansh"
                    className="text-white"
                  />
                  <RandomLetterSwapForward
                    label="Srivastava"
                    className="text-white/40"
                  />
                </h3>
                <p className="text-white/40 text-base">AI Visual Creator & Motion Artist Based in India.</p>
              </div>

              <div className="mt-auto flex items-center gap-6">
                {[Twitter, Instagram, Globe].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, color: "#fff" }}
                    className="text-white/20 transition-all"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </GlowCard>
          </div>

          {/* Right Column — Bio & Experience */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <GlowCard 
              customSize
              className="p-10 rounded-[2rem] border border-white/10 bg-[#111] flex flex-col gap-12"
              glowColor="purple"
              intensity={0.5}
            >
              {/* Bio */}
              <div className="flex flex-col gap-6">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-serif">
                  I&apos;m Suryansh Srivastava, a dedicated AI Visual Creator & Motion Artist based in India. I specialize in creative design with seamless technical execution to craft exceptional digital experiences.
                </p>
              </div>

              <div className="h-px w-full bg-white/5" />

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white/80 text-sm font-medium hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="h-px w-full bg-white/5" />

              {/* Experience List */}
              <div className="flex flex-col gap-8">
                {experience.map((exp, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between w-full text-white/80 group py-1"
                  >
                    <span className="text-lg font-medium group-hover:text-white transition-colors">{exp.role}</span>
                    <div className="flex-grow mx-4 border-b border-white/5 border-dotted" />
                    <span className="text-base text-white/40 group-hover:text-white/60 transition-colors mr-4">{exp.company}</span>
                    <span className="text-base font-mono text-white/20 group-hover:text-white/40 transition-colors">{exp.year}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>

        </div>
      </div>
    </section>
  );
};
