"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

const VideoBentoBox = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      videoId: 'OHEWAcivxCA',
      title: 'Electra CS Campaign',
      className: 'md:col-span-2 md:row-span-2',
      scale: 'scale-[1.1]', // Horizontal video in wide card
    },
    {
      id: 2,
      videoId: 'ICPDfLbCpSo',
      title: 'FRND Ad Campaign',
      className: 'md:col-span-1 md:row-span-1',
      scale: 'scale-[1.2]', // Horizontal in square
    },
    {
      id: 3, 
      videoId: '-MhFhPmehbg',
      title: 'AI Narrative Short',
      className: 'md:col-span-1 md:row-span-1',
      scale: 'scale-[1.8]', // Vertical in square (needs more scale to fill)
    },
    {
      id: 4,
      videoId: 'zQArTonc-FQ',
      title: 'Electra 25 Visuals',
      className: 'md:col-span-2 md:row-span-1',
      scale: 'scale-[1.1]', // Horizontal video in wide card
    },
    {
      id: 5,
      videoId: 'd3HpHGpXFuE',
      title: 'Commercial Visuals',
      className: 'md:col-span-1 md:row-span-1',
      scale: 'scale-[1.2]', // Horizontal in square
    },
  ];

  return (
    <section className="w-full py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-white">⊙</span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                Showcase
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight">
              Featured <span className="text-white/40 italic">Edits</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors text-sm uppercase tracking-wider"
          >
            See All Videos
          </motion.button>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedVideo(video.videoId)}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/5 cursor-pointer ${video.className}`}
            >
              {/* YouTube Background Previews (No local videos) - Fixed Cover Issue */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                <div className={`absolute w-full h-[120%] -top-[10%] left-0 ${video.scale} transform-gpu`}>
                   <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playlist=${video.videoId}&enablejsapi=1&playsinline=1`}
                    className="w-full h-full border-none pointer-events-none"
                    allow="autoplay; encrypted-media"
                    title={video.title}
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>

              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Title & Arrow Button Overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">0{index + 1}</span>
                   <h3 className="text-white text-2xl font-serif tracking-wide drop-shadow-md">
                    {video.title}
                  </h3>
                </div>
                
                {/* Play Icon/Button */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-xl border border-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black text-white"
                >
                  <Play size={18} fill="currentColor" className="ml-1" />
                </motion.div>
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

export default VideoBentoBox;
