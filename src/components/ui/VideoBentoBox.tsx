"use client";

import React from 'react';
import { motion } from 'framer-motion';

const VideoBentoBox = () => {
  // Array defining the 5 videos, their paths, titles, and grid sizing
  const videos = [
    {
      id: 1,
      src: '/Skills/AIVIDEOS/Advertisements/2.mp4',
      title: 'AI Product Advertisement',
      className: 'md:col-span-2 md:row-span-2', 
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Advertisements%28Realistic%20Product%20Advertisement%29-keep%20this%20at%20top/3.mp4',
      title: 'Realistic Product Ad',
      className: 'md:col-span-1 md:row-span-1', 
    },
    {
      id: 3, 
      src: '/Skills/AIVIDEOS/Landscape/1.mp4',
      title: 'Cinematic Landscape Ad',
      className: 'md:col-span-1 md:row-span-1', 
    },
    {
      id: 4,
      src: '/Skills/AIVIDEOS/AIStorytelling/2.mp4',
      title: 'AI Narrative Storytelling',
      className: 'md:col-span-2 md:row-span-1', 
    },
    {
      id: 5,
      src: '/Skills/AIVIDEOS/Landscape/4.mp4',
      title: 'Commercial Visual Concept',
      className: 'md:col-span-1 md:row-span-1', 
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
              Featured <span className="text-white/40 italic">Projects</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/5 cursor-none ${video.className}`}
            >
              {/* Video Element */}
              <video
                src={video.src}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 will-change-transform"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />

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
                
                {/* Arrow Icon */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-xl border border-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-black text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoBentoBox;
