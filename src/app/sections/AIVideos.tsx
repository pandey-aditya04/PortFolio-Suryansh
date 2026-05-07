"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Sparkles } from 'lucide-react';

const AIVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const aiVideos = [
    {
      id: 1,
      type: 'youtube',
      videoId: 'd3HpHGpXFuE',
      title: 'Motion Graphics',
      subtitle: 'AI Synthesis',
      className: 'md:col-span-3 md:row-span-2',
      scale: 'scale-[1.2]',
      featured: true
    },
    {
      id: 2,
      type: 'cloudinary',
      src: 'https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Landscape/1.mp4',
      title: 'Realistic Product Ad',
      subtitle: 'AI Generated',
      className: 'md:col-span-1 md:row-span-1',
      scale: 'scale-[1.0]',
    },
    {
      id: 3,
      type: 'cloudinary',
      src: 'https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Landscape/4.mp4',
      title: 'Cinematic Landscape',
      subtitle: 'AI Motion',
      className: 'md:col-span-1 md:row-span-1',
      scale: 'scale-[1.0]',
    },
    {
      id: 4,
      type: 'cloudinary',
      src: 'https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Landscape/3.mp4',
      title: 'Visual Evolution',
      subtitle: 'AI Art',
      className: 'md:col-span-1 md:row-span-1',
      scale: 'scale-[1.0]',
    }
  ];

  return (
    <section id="ai-videos" className="w-full py-32 px-4 md:px-8 relative overflow-hidden bg-black">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 w-fit">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-purple-300">
              Future of Visuals
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight">
            AI <span className="text-white/40 italic">Videos</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl">
            Exploring the boundaries of cinematic storytelling through state-of-the-art AI synthesis and motion arts.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {aiVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedVideo(video)}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 cursor-pointer ${video.className}`}
            >
              {/* Background Preview */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                {video.type === 'youtube' ? (
                  <div className={`absolute w-full h-[145%] -top-[22.5%] left-0 ${video.scale} transform-gpu`}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playlist=${video.videoId}&enablejsapi=1&playsinline=1`}
                      className="w-full h-full border-none pointer-events-none"
                      allow="autoplay; encrypted-media"
                      title={video.title}
                    />
                  </div>
                ) : (
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${video.featured ? 'from-black/90' : 'from-black/80'} via-black/20 to-transparent pointer-events-none`} />

              {/* Title Overlay */}
              <div className={`absolute ${video.featured ? 'bottom-12 left-12' : 'bottom-8 left-8'} right-8 flex items-end justify-between`}>
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] text-purple-400 uppercase tracking-widest font-bold">{video.subtitle}</span>
                   <h3 className={`text-white ${video.featured ? 'text-4xl md:text-5xl' : 'text-2xl'} font-serif tracking-wide drop-shadow-md`}>
                    {video.title}
                  </h3>
                </div>
                
                {/* Play Icon */}
                <motion.div 
                  className={`bg-white/10 backdrop-blur-xl border border-white/20 ${video.featured ? 'w-16 h-16' : 'w-12 h-12'} rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black text-white`}
                >
                  <Play size={video.featured ? 24 : 18} fill="currentColor" className="ml-1" />
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
              {selectedVideo.type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full border-none"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  className="w-full h-full bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIVideos;
