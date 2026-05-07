"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Play, Video } from "lucide-react";

export const ProfessionalEdits = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const edits = [
    {
      id: 1,
      videoId: 'OHEWAcivxCA',
      title: 'Electra CS Master Edit',
      category: 'Featured Campaign',
      className: 'lg:col-span-7',
      height: 'h-[500px]',
      featured: true
    },
    {
      id: 2,
      videoId: 'zQArTonc-FQ',
      title: 'Electra 25 Commercial',
      category: 'Ad Campaign',
      className: 'lg:col-span-5',
      height: 'h-[500px]',
    },
    {
      id: 3,
      videoId: 'ICPDfLbCpSo',
      title: 'FRND Ad Campaign',
      category: 'Performance Marketing',
      className: 'lg:col-span-6',
      height: 'h-[400px]',
    },
    {
      id: 4,
      videoId: 'd3HpHGpXFuE',
      title: 'Commercial Visuals',
      category: 'Motion Graphics',
      className: 'lg:col-span-6',
      height: 'h-[400px]',
    }
  ];

  return (
    <section id="edits" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-start gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit">
            <Video className="w-3 h-3 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-widest text-white/40">
              Commercial Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">
            Professional <span className="text-white/40 italic">Edits</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {edits.map((edit, index) => (
            <motion.div 
              key={edit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`${edit.className} ${edit.height} relative rounded-[2.5rem] overflow-hidden border border-white/10 group cursor-pointer bg-[#111]`}
              onClick={() => setSelectedVideo(edit.videoId)}
            >
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-700 overflow-hidden">
                <div className="absolute w-full h-[145%] -top-[22.5%] left-0 scale-[1.1] transform-gpu">
                  <iframe
                    src={`https://www.youtube.com/embed/${edit.videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playlist=${edit.videoId}&enablejsapi=1&playsinline=1`}
                    className="w-full h-full border-none pointer-events-none"
                    allow="autoplay; encrypted-media"
                    title={edit.title}
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-10" />
              
              <div className="relative z-20 h-full p-10 flex flex-col justify-end">
                <div className="flex flex-col gap-2 transform group-hover:translate-x-2 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{edit.category}</span>
                  <h3 className={`${edit.featured ? 'text-4xl' : 'text-3xl'} font-serif text-white`}>{edit.title}</h3>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Left Arrow */}
              <div className="absolute bottom-10 left-10 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
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
