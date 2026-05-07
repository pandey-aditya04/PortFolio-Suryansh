"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px]">
          
          {/* Left Large Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden border border-white/10 group cursor-pointer bg-[#111]"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 will-change-transform"
            >
              <source src="/Skills/EDITS/Advertisement videos/1.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-10" />
            
            <div className="relative z-20 h-full p-10 flex flex-col justify-end">
              <div className="flex flex-col gap-2 transform group-hover:translate-x-2 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Featured Campaign</span>
                <h3 className="text-4xl font-serif text-white">Meta Ads Campaign (FRND)</h3>
              </div>
            </div>

            {/* Centered View Project Pill */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
              <div className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
                View project
              </div>
            </div>

            {/* Bottom Left Arrow */}
            <div className="absolute bottom-10 left-10 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            {/* Card A — Realistic Product Ad */}
            <div className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 relative group cursor-pointer bg-[#111]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 will-change-transform"
              >
                <source src="/Skills/EDITS/Advertisement videos/2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="relative z-10 h-full flex items-center justify-center p-6 text-center">
                <span className="text-white/80 text-2xl font-serif group-hover:opacity-0 transition-opacity duration-500">Realistic Product Ad (AI)</span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
                <div className="px-7 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  View project
                </div>
              </div>

              {/* Bottom Left Arrow */}
              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card B — Brand Storytelling */}
            <motion.div 
              className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111] relative group flex items-center justify-center cursor-pointer"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 will-change-transform"
              >
                <source src="/Skills/AIVIDEOS/advertisements/2.mp4" type="video/mp4" />
              </video>
              <h3 className="relative z-10 text-3xl font-serif text-white text-center px-10 leading-tight group-hover:opacity-0 transition-opacity duration-500">
                AI Brand Storytelling & Content
              </h3>
              
              {/* Centered View Project Pill */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
                <div className="px-7 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  View project
                </div>
              </div>

              {/* Bottom Left Arrow */}
              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Card C — Motion Blur */}
            <div className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 relative group cursor-pointer bg-[#111]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 blur-[2px] group-hover:blur-0 will-change-transform"
              >
                <source src="/Skills/AIVIDEOS/advertisements/3.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                 <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em]">Motion Blur</span>
              </div>
              
              {/* Centered View Project Pill */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
                <div className="px-7 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  View project
                </div>
              </div>

              {/* Bottom Left Arrow */}
              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
