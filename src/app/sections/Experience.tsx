"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { RandomLetterSwapPingPong } from "@/components/ui/random-letter-swap";
import { Briefcase, Award, Users } from "lucide-react";
import { TextScramble } from "@/components/ui/text-scramble";
import { TextEffect } from "@/components/ui/text-effect";

export const Experience = () => {
  const experiences = [
    {
      company: "FRND",
      role: "Freelance Video Editor",
      period: "Jan 2026 - Present",
      description: "Developed high-performing AI-generated video advertisements for Meta, Google Ads, and FRND’s social media channels by leveraging advanced AI tools, resulting in stronger creative quality, higher engagement, and more impactful visual storytelling.",
      icon: Briefcase,
    },
    {
      company: "Freelancing",
      role: "Video Editor & Designer",
      period: "Ongoing",
      description: "Worked as a freelance video editor and designer, delivering visual content for clients including Club 17, Forest Club, and various other brands, helping enhance their digital presence and engagement.",
      icon: Users,
    },
    {
      company: "Achievements",
      role: "Award Winning Creator",
      period: "2024 - 2025",
      description: "Integrated Veo 3, Nano Banana, and ChatGPT into the creative workflow to accelerate production speed and enhance ad quality. Won multiple competitions and secured top ranks in video editing and documentary filmmaking.",
      icon: Award,
    },
  ];

  const responsibility = [
    {
      role: "Secretary",
      org: "EEL (Electrical Engineers' League), MMMUT",
      year: "Aug 2025 - Present",
      desc: "Edited the official after-movie for ELECTRA and created promotional creatives, boosting brand visibility through motion design."
    },
    {
      role: "Joint Secretary",
      org: "NSS (National Service Scheme), MMMUT",
      year: "July 2025 - Present",
      desc: "Produced NSS MMMUT event teaser videos—one reaching 17K+ views and launched by the SP City."
    },
  ];

  return (
    <section id="experience" className="py-32 bg-[#0c0c0c] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-20 text-center">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
            <span className="text-[10px] text-white">⊙</span>
            <TextScramble 
              className="text-xs font-medium uppercase tracking-widest text-white/40"
              duration={1}
              characterSet="01"
            >
              Professional Journey
            </TextScramble>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white flex items-center gap-x-4">
            <RandomLetterSwapPingPong label="Work" />
            <RandomLetterSwapPingPong label="Experience" className="text-white/40 italic" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Experience Timeline */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlowCard 
                  customSize
                  className="p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-[#111] group hover:bg-[#151515] transition-all"
                  glowColor="blue"
                  intensity={0.3}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-white/40 group-hover:text-white transition-colors">
                        <exp.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                          <h3 className="text-2xl font-serif text-white">
                            <TextEffect preset="blur">{exp.company}</TextEffect>
                          </h3>
                          <p className="text-white/40 font-medium">
                            <TextScramble duration={0.8}>{exp.role}</TextScramble>
                          </p>
                        </div>
                        <p className="text-white/60 leading-relaxed text-base max-w-2xl">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    <div className="md:text-right shrink-0">
                      <span className="text-sm font-mono text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Sidebar: Responsibilities & Education */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <GlowCard 
              customSize
              className="p-8 rounded-[2.5rem] border border-white/10 bg-[#111]"
              glowColor="purple"
              intensity={0.4}
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-8 border-b border-white/5 pb-4">
                Positions of Responsibility
              </h4>
              <div className="flex flex-col gap-8">
                {responsibility.map((res, i) => (
                  <div key={i} className="flex flex-col gap-2 group">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium group-hover:text-blue-400 transition-colors">{res.role}</span>
                      <span className="text-[10px] font-mono text-white/20 uppercase whitespace-nowrap ml-2">{res.year}</span>
                    </div>
                    <span className="text-sm text-white/40 leading-snug">{res.org}</span>
                    <p className="text-[11px] text-white/20 group-hover:text-white/40 transition-colors mt-1">{res.desc}</p>
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard 
              customSize
              className="p-8 rounded-[2.5rem] border border-white/10 bg-[#111]"
              glowColor="blue"
              intensity={0.4}
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-8 border-b border-white/5 pb-4">
                Education
              </h4>
              <div className="flex flex-col gap-2 group">
                <span className="text-white font-medium group-hover:text-blue-400 transition-colors">B.Tech, Electrical Engineering</span>
                <span className="text-sm text-white/40">Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</span>
                <span className="text-[10px] font-mono text-white/20 mt-1 uppercase">Expected 2027</span>
              </div>
            </GlowCard>
          </div>

        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
    </section>
  );
};
