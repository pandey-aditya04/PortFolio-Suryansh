"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram, Globe, Mail } from "lucide-react";
import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";
import { RandomLetterSwapForward, RandomLetterSwapPingPong } from "@/components/ui/random-letter-swap";
import { TextScramble } from "@/components/ui/text-scramble";
import { TextEffect } from "@/components/ui/text-effect";

export const About = () => {
  const skillGroups = [
    {
      title: "Tools",
      skills: [
        { name: "Adobe After Effects", desc: "Motion graphics, visual effects, and dynamic brand content" },
        { name: "Adobe Premiere Pro", desc: "Primary editor for cinematic commercial and video editing" },
        { name: "Adobe Photoshop", desc: "Compositing, retouching, and visual asset creation" },
        { name: "Canva", desc: "Quick social media assets and layout design" },
      ]
    },
    {
      title: "AI Tools",
      skills: [
        { name: "Veo 3 & Nano Banana", desc: "Google DeepMind's broadcast-grade cinematic AI models" },
        { name: "Higgsfield AI", desc: "High-fidelity AI video generation for brand storytelling" },
        { name: "Descript & Runway ML", desc: "AI-powered editing and text-to-video synthesis" },
        { name: "ChatGPT & Sora & ElevenLabs", desc: "AI writing, video generation, and voice synthesis" },
      ]
    },
    {
      title: "Creative Skills",
      skills: [
        { name: "Storytelling", desc: "Narrative-driven visual content and brand films" },
        { name: "Color Grading", desc: "Applying professional cinematic colour to raw footages" },
        { name: "Typography & Design", desc: "Kinetic typography and minimalist layout design" },
        { name: "Speed Ramping", desc: "Dynamic temporal effects for high-impact editing" },
      ]
    },
    {
      title: "Editing",
      skills: [
        { name: "3D Camera", desc: "Complex virtual camera movements and scene tracking" },
        { name: "Motion Graphics", desc: "Animated titles and dynamic ad pieces" },
        { name: "Audio Mixing", desc: "Cinematic sound design and audio engineering" },
        { name: "Rotoscoping", desc: "Precise subject isolation and masking" }
      ]
    }
  ];

  const experience = [
    { 
      role: "Freelance Video Editor", 
      company: "FRND", 
      year: "Jan 2026 - Present",
      desc: "Developed high-performing AI-generated video advertisements for Meta, Google Ads, and FRND’s social media channels."
    },
    { 
      role: "Video Editor & Designer", 
      company: "Freelancing", 
      year: "Ongoing",
      desc: "Delivering visual content for brands including Club 17, Forest Club, and various international clients."
    },
    { 
      role: "Video Editor", 
      company: "PocketFM", 
      year: "Ongoing",
      desc: "Worked as Video Editor at PocketFM (ongoing)."
    },
    { 
      role: "Co-founder", 
      company: "Verity Media", 
      year: "2024",
      desc: "Creative agency at the intersection of cinematic storytelling and AI-powered production."
    },
    { 
      role: "Secretary", 
      company: "EEL, MMMUT", 
      year: "Aug 2025 - Present",
      desc: "Edited official after-movie for ELECTRA and created promotional creatives boosting brand visibility."
    },
    { 
      role: "Joint Secretary", 
      company: "NSS, MMMUT", 
      year: "July 2025 - Present",
      desc: "Produced and edited event teaser videos reaching 17K+ views launched by SP City."
    },
  ];

  return (
    <section id="about" className="pt-32 pb-24 bg-[#0c0c0c]">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-center mb-10">
          <p className="text-white/40 text-center max-w-md text-base font-medium">
            Brief initial presentation of myself and my core expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column — Profile Card */}
          <div className="lg:col-span-5">
            <div 
              className="p-8 rounded-[2rem] border border-white/10 bg-[#111] h-full flex flex-col"
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

              <div className="flex flex-col gap-3 mb-8">
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

              {/* Categorized Skills Grid */}
              <div className="flex flex-col gap-8 mb-12">
                {skillGroups.map((group) => (
                  <div key={group.title} className="flex flex-col gap-3">
                    <TextScramble 
                      className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold px-1"
                      duration={1}
                      characterSet="01"
                    >
                      {group.title}
                    </TextScramble>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="relative group/skill">
                          <span 
                            className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-white/60 text-[11px] font-medium hover:bg-white/10 hover:text-white transition-all cursor-help block"
                          >
                            {skill.name}
                          </span>
                          {/* Tooltip on Hover */}
                          <div className="absolute bottom-full left-0 mb-2 w-48 p-2 rounded-lg bg-[#1a1a1a] border border-white/10 text-[10px] text-white/60 opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all z-50 shadow-2xl pointer-events-none">
                            {skill.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
            </div>
          </div>

          {/* Right Column — Detailed Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div 
              className="p-10 rounded-[2rem] border border-white/10 bg-[#111] flex flex-col gap-10 h-full justify-center"
            >
              {/* Bio */}
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
                  <RandomLetterSwapPingPong label="Crafting" /> the <span className="text-white/40 italic">Future</span> of Visual Storytelling
                </h3>
                <div className="flex flex-col gap-6">
                  <TextEffect preset="blur" className="text-xl md:text-2xl text-white/80 leading-relaxed font-serif">
                    I am a versatile AI Visual Creator and Motion Artist specializing in high-end AI video synthesis, cinematic motion graphics, and premium brand storytelling. 
                  </TextEffect>
                </div>

                <div className="h-px w-full bg-white/5" />

                {/* Experience List */}
                <div className="flex flex-col gap-6">
                  {experience.map((exp, i) => (
                    <div 
                      key={i}
                      className="flex flex-col gap-2 w-full text-white/80 group py-2 border-b border-white/5 last:border-0"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium group-hover:text-white transition-colors">{exp.role}</span>
                        <span className="text-base text-white/40 group-hover:text-white/60 transition-colors">{exp.company}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-white/30 max-w-[80%] leading-relaxed">{exp.desc}</p>
                        <span className="text-sm font-mono text-white/10 group-hover:text-white/30 transition-colors uppercase">{exp.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
