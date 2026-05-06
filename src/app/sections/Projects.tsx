"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px]">
          
          {/* Left Large Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-7 relative rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
              <span className="text-white text-2xl font-serif">Project Name</span>
            </div>
            <div className="relative w-full h-full p-8 pt-12">
              <div className="w-full h-full bg-[#1a1a1a] rounded-t-xl overflow-hidden border border-white/5 shadow-2xl">
                {/* Browser Mockup Header */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="w-full h-full bg-[#222]" />
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            {/* Card A */}
            <div className="flex-1 rounded-[2rem] overflow-hidden border border-white/10 relative group cursor-pointer">
              <div className="blur-strips group-hover:brightness-125 group-hover:scale-110 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Aesthetics</span>
              </div>
            </div>

            {/* Card B (Center) */}
            <motion.div 
              className="flex-1 rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] relative group flex items-center justify-center cursor-pointer"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-white text-center px-6 leading-tight">
                ONE DAY,<br />WE MET
              </h3>
              
              {/* Circular Reveal Button */}
              <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center text-[#0c0c0c] font-bold text-sm uppercase tracking-tighter [clip-path:circle(0%)] group-hover:[clip-path:circle(50%)] transition-all duration-500 ease-out">
                  View project
                </div>
              </div>
            </motion.div>

            {/* Card C */}
            <div className="flex-1 rounded-[2rem] overflow-hidden border border-white/10 relative group cursor-pointer">
              <div className="blur-strips group-hover:brightness-125 group-hover:scale-110 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Motion Blur</span>
              </div>
              
              {/* Arrow Button */}
              <motion.div 
                whileHover={{ rotate: 45 }}
                className="absolute bottom-6 left-6 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
