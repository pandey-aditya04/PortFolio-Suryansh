"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Play, CheckCircle } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Initial Brief & Vision",
      description: "We start with a detailed consultation to understand your brand's unique voice, goals, and visual aspirations.",
      icon: MessageSquare,
    },
    {
      id: 2,
      title: "AI Concept Synthesis",
      description: "Using advanced AI tools like Runway and Higgsfield, I generate striking visual concepts and motion storyboards.",
      icon: Zap,
    },
    {
      id: 3,
      title: "Pro Post-Production",
      description: "I expertly refine and edit assets in Premiere Pro and After Effects, adding sound design and cinematic polish.",
      icon: Play,
    },
    {
      id: 4,
      title: "Final Delivery",
      description: "Receive high-converting, premium visual content tailored for your social platforms and ad campaigns.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="process" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-20 text-center">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
            <span className="text-[10px] text-white">⊙</span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">How it works</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white">
            Process <span className="text-white/40 italic">Is Everything</span>
          </h2>
          <p className="text-white/40 text-lg max-w-md">
            Simple, streamlined process is what gets you premium results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] border border-white/10 bg-[#111] relative group overflow-hidden"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40 group-hover:text-white group-hover:border-white/30 transition-all">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mb-8 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:scale-110 transition-all">
                <step.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-serif text-white group-hover:translate-x-1 transition-transform">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Step Label */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold bg-white/5 px-4 py-1.5 rounded-full">
                  Step {step.id}
                </span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
