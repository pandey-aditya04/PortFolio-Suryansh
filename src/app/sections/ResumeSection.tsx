"use client";

import { motion } from "framer-motion";
import { Download, Users, TrendingUp, Star } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { TextScramble } from "@/components/ui/text-scramble";

export const ResumeSection = () => {
  const stats = [
    { 
      label: "Happy Clients", 
      value: "100+", 
      icon: Users,
    },
    { 
      label: "Revenue Added", 
      value: "$110K+", 
      icon: TrendingUp,
    },
    { 
      label: "Average Rating", 
      value: "4.3★", 
      icon: Star,
    },
  ];

  return (
    <section id="resume" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-[1300px] mx-auto px-6">
        <div 
          className="p-8 md:p-12 rounded-[3rem] border border-white/10 bg-[#111] overflow-hidden relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            {/* Left: Content */}
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit mx-auto lg:mx-0">
                <span className="text-[10px] text-white">⊙</span>
                <TextScramble 
                  className="text-[10px] uppercase tracking-widest text-white/40 font-bold"
                  duration={1}
                  characterSet="01"
                >
                  Resume
                </TextScramble>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-[1.1]">
                AT A <span className="text-white/30 italic">GLANCE</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed">
                A quick overview of my professional impact and key performance metrics. Download my full resume for a deeper dive into my experience.
              </p>
              <div className="flex justify-center lg:justify-start mt-4">
                <LiquidButton 
                  size="lg" 
                  className="group"
                  onClick={() => window.open('https://drive.google.com/file/d/1epOZzSQ3Q6a8BMwhHEH0Se2GmqK7NO-7/view?usp=sharing', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </LiquidButton>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:flex-1">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.03] flex flex-col items-center gap-5 hover:bg-white/[0.06] transition-all group w-full relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <span className="text-4xl font-bold text-white tracking-tight">{stat.value}</span>
                    <TextScramble 
                      className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold whitespace-nowrap"
                      duration={1.2}
                    >
                      {stat.label}
                    </TextScramble>
                  </div>
                  
                  {/* Subtle card glow */}
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-white/5 blur-2xl group-hover:bg-white/10 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
