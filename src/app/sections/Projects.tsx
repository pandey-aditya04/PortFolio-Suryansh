"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Play } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px]">
          
          {/* Left Large Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden border border-white/10 group cursor-pointer bg-[#111]"
            onClick={() => setSelectedVideo('OHEWAcivxCA')}
          >
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-700 overflow-hidden">
              <div className="absolute w-full h-[120%] -top-[10%] left-0 scale-[1.1] transform-gpu">
                <iframe
                  src="https://www.youtube.com/embed/OHEWAcivxCA?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&showinfo=0&iv_load_policy=3&playlist=OHEWAcivxCA"
                  className="w-full h-full border-none pointer-events-none"
                  allow="autoplay; encrypted-media"
                />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-10" />
            
            <div className="relative z-20 h-full p-10 flex flex-col justify-end">
              <div className="flex flex-col gap-2 transform group-hover:translate-x-2 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Featured Campaign</span>
                <h3 className="text-4xl font-serif text-white">Electra CS Master Edit</h3>
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
            {/* Card A — Electra 25 */}
            <div className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 relative group cursor-pointer bg-[#111]"
            >
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700 overflow-hidden">
                <div className="absolute w-full h-[120%] -top-[10%] left-0 scale-[1.2] transform-gpu">
                  <iframe
                    src="https://www.youtube.com/embed/zQArTonc-FQ?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&showinfo=0&iv_load_policy=3&playlist=zQArTonc-FQ"
                    className="w-full h-full border-none pointer-events-none"
                    allow="autoplay; encrypted-media"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="relative z-10 h-full flex items-center justify-center p-6 text-center">
                <span className="text-white/80 text-2xl font-serif group-hover:opacity-0 transition-opacity duration-500">Electra 25 Commercial</span>
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

            {/* Card B — FRND Ad Campaign */}
            <motion.div 
              onClick={() => setSelectedVideo('ICPDfLbCpSo')}
              className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111] relative group flex items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 overflow-hidden">
                <div className="absolute w-full h-[120%] -top-[10%] left-0 scale-[1.2] transform-gpu">
                  <iframe
                    src="https://www.youtube.com/embed/ICPDfLbCpSo?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&showinfo=0&iv_load_policy=3&playlist=ICPDfLbCpSo"
                    className="w-full h-full border-none pointer-events-none"
                    allow="autoplay; encrypted-media"
                  />
                </div>
              </div>
              <h3 className="relative z-10 text-3xl font-serif text-white text-center px-10 leading-tight group-hover:opacity-0 transition-opacity duration-500">
                FRND Ad Campaign
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

            {/* Card C — Commercial Visuals */}
            <div 
              onClick={() => setSelectedVideo('d3HpHGpXFuE')}
              className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 relative group cursor-pointer bg-[#111]"
            >
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700 overflow-hidden">
                <div className="absolute w-full h-[120%] -top-[10%] left-0 scale-[1.2] transform-gpu">
                  <iframe
                    src="https://www.youtube.com/embed/d3HpHGpXFuE?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&showinfo=0&iv_load_policy=3&playlist=d3HpHGpXFuE"
                    className="w-full h-full border-none pointer-events-none"
                    allow="autoplay; encrypted-media"
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                 <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em]">Commercial Visuals</span>
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

      {/* Cinema Mode Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[110]"
            >
              <X size={24} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                className="w-full h-full border-none"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
