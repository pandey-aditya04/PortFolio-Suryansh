"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink } from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  tag: string;
  type: 'youtube' | 'cloudinary' | 'image';
  videoId?: string;
  src?: string;
}

const AllWork = () => {
  const [selectedVideo, setSelectedVideo] = useState<WorkItem | null>(null);

  const categories = [
    {
      index: "01",
      name: "AI Videos",
      badge: "3 Series",
      accent: "#f5a623",
      cardType: "card-amber",
      subcategories: [
        {
          name: "Advertisements",
          gridCols: "grid-cols-1 md:grid-cols-3",
          items: [
            { id: "ai-adv-1", title: "Motion Graphics", tag: "AI Synthesis", type: "youtube", videoId: "d3HpHGpXFuE" },
            { id: "ai-adv-2", title: "Realistic Product Ad", tag: "AI Generated", type: "cloudinary", src: "https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Landscape/1.mp4" },
            { id: "ai-adv-3", title: "Visual Evolution", tag: "AI Art", type: "cloudinary", src: "https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Landscape/3.mp4" }
          ]
        },
        {
          name: "AI Storytelling",
          gridCols: "grid-cols-1 md:grid-cols-3",
          items: [
             { id: "ai-story-1", title: "Narrative Concept", tag: "Narrative", type: "cloudinary", src: "https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Landscape/2.mp4" },
             { id: "ai-story-2", title: "Character Study", tag: "AI Motion", type: "cloudinary", src: "https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Landscape/5.mp4" }
          ]
        },
        {
          name: "Landscape",
          gridCols: "grid-cols-1 md:grid-cols-3",
          items: [
            { id: "ai-land-1", title: "Cinematic Landscape", tag: "Cinematic", type: "cloudinary", src: "https://res.cloudinary.com/daeio5gbf/video/upload/v1777787883/skills/AI%20VIDEOS/Landscape/4.mp4" }
          ]
        }
      ]
    },
    {
      index: "02",
      name: "Carousel",
      accent: "#00c8a8",
      cardType: "card-teal",
      subcategories: [
        {
          name: "Instagram Designs",
          gridCols: "grid-cols-2 md:grid-cols-4",
          items: [
            { id: "car-1", title: "Carousel A1", tag: "Graphic", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788557/skills/Carousel/A1.jpg" },
            { id: "car-2", title: "Carousel A2", tag: "Graphic", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788561/skills/Carousel/A2.jpg" },
            { id: "car-3", title: "Carousel AA-1", tag: "Graphic", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788576/skills/Carousel/AA-1.jpg" },
            { id: "car-4", title: "Carousel AA-2", tag: "Graphic", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788591/skills/Carousel/AA-2.jpg" }
          ]
        }
      ]
    },
    {
      index: "03",
      name: "Edits",
      accent: "#ff6b4a",
      cardType: "card-coral",
      subcategories: [
        {
          name: "Professional Works",
          gridCols: "grid-cols-1 md:grid-cols-3",
          items: [
            { id: "edit-1", title: "Electra CS Master Edit", tag: "Premiere Pro", type: "youtube", videoId: "OHEWAcivxCA" },
            { id: "edit-2", title: "FRND Ad Campaign", tag: "Performance", type: "youtube", videoId: "ICPDfLbCpSo" },
            { id: "edit-3", title: "Narrative Short", tag: "After Effects", type: "youtube", videoId: "-MhFhPmehbg" }
          ]
        }
      ]
    },
    {
      index: "04",
      name: "Menu",
      accent: "#a78bfa",
      cardType: "card-violet",
      subcategories: [
        {
          name: "Motion Menus",
          gridCols: "grid-cols-1 md:grid-cols-3",
          items: [
            { id: "menu-1", title: "Menu Design 01", tag: "Motion", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778096395/skills/Menu/1.jpg" },
            { id: "menu-2", title: "Menu Design 02", tag: "Motion", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778096395/skills/Menu/2.jpg" }
          ]
        }
      ]
    },
    {
      index: "05",
      name: "Post Designs",
      accent: "#f472b6",
      cardType: "card-rose",
      subcategories: [
        {
          name: "Social Media",
          gridCols: "grid-cols-2 md:grid-cols-4",
          items: [
            { id: "post-1", title: "Design 01", tag: "Graphic", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777790980/skills/PostDesigns/1.jpg" },
            { id: "post-2", title: "Design 02", tag: "Graphic", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777790982/skills/PostDesigns/2.jpg" },
            { id: "post-3", title: "Design 03", tag: "Branding", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777790985/skills/PostDesigns/3.jpg" },
            { id: "post-4", title: "Design 04", tag: "Branding", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777790991/skills/PostDesigns/4.png" }
          ]
        }
      ]
    }
  ];

  return (
    <section className="projects-section py-32 bg-black relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-6 mb-24">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Portfolio Archive</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight">
            All <span className="text-white/40 italic">Work</span>
          </h2>
        </div>

        {categories.map((category) => (
          <div key={category.index} id={`work-${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="mb-32 relative pt-20 -mt-20">
            {/* Category Header */}
            <div className="flex flex-col gap-4 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-white/20 tracking-widest uppercase">0{category.index}</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <div className="flex items-baseline gap-4">
                <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
                  {category.name.split(' ')[0]} <span className="text-white/40 italic">{category.name.split(' ').slice(1).join(' ')}</span>
                </h3>
                {category.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/40">
                    {category.badge}
                  </span>
                )}
              </div>
            </div>

            {category.subcategories.map((sub, sIdx) => (
              <div key={sub.name} className={sIdx === 0 ? "mt-0" : "mt-16"}>
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">{sub.name}</span>
                   <div className="h-[1px] flex-1 border-t border-dashed border-white/5" />
                </div>

                <div className={`grid ${sub.gridCols} gap-6 md:gap-8`}>
                  {sub.items.map((item: any) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => setSelectedVideo(item)}
                      className={`group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 cursor-pointer transition-all duration-500`}
                    >
                      {/* Background Preview */}
                      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                        {item.type === 'youtube' ? (
                          <div className={`absolute w-full h-[145%] -top-[22.5%] left-0 scale-[1.2] transform-gpu`}>
                            <iframe
                              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playlist=${item.videoId}&enablejsapi=1&playsinline=1`}
                              className="w-full h-full border-none pointer-events-none"
                              allow="autoplay; encrypted-media"
                              title={item.title}
                            />
                          </div>
                        ) : item.type === 'image' ? (
                          <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${item.src})` }}
                          />
                        ) : (
                          <video
                            src={item.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                      
                      <div className="relative z-20 h-[250px] md:h-[300px] p-8 flex flex-col justify-end">
                        <div className="flex flex-col gap-1 transform group-hover:translate-x-2 transition-transform duration-500">
                           <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: category.accent }}>{item.tag}</span>
                           <h4 className="text-xl md:text-2xl font-serif text-white tracking-wide">{item.title}</h4>
                        </div>
                        
                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                            <Play className="w-6 h-6 fill-current ml-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Cinema Mode Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[120]"
            >
              <X size={24} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            >
              {selectedVideo.type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full border-none"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              ) : selectedVideo.type === 'image' ? (
                <img src={selectedVideo.src} className="w-full h-full object-contain" alt={selectedVideo.title} />
              ) : (
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AllWork;
