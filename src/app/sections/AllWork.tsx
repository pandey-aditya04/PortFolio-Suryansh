"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink } from 'lucide-react';

const AllWork = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

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
    <section className="projects-section py-24 md:py-32 bg-[#080808] font-['DM_Sans']">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">⊙ All Work</span>
        </div>
        <h2 className="font-['Bebas_Neue'] text-[clamp(52px,8vw,92px)] leading-[0.95] tracking-[0.01em] text-white mb-16 md:mb-20">
          ARCHIVE<br/><span className="text-[#f5a623]">2024-25</span>
        </h2>

        {categories.map((category) => (
          <div key={category.index} id={`work-${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="mb-24 relative pt-20 -mt-20">
            <div className="flex items-baseline gap-5 mb-8 pb-4 border-b border-white/10">
              <span className="font-mono text-[11px] text-white/40 tracking-[0.1em]">{category.index}</span>
              <div className="flex items-baseline gap-4 flex-1">
                <span className="font-['Bebas_Neue'] text-3xl md:text-4xl tracking-[0.04em] text-white uppercase">{category.name}</span>
                {category.badge && (
                  <span className="font-mono text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-[3px] bg-[#f5a623]/10 text-[#f5a623] border border-[#f5a623]/20 self-center">
                    {category.badge}
                  </span>
                )}
              </div>
              <div className="w-9 h-[2px] rounded-[2px] hidden md:block" style={{ backgroundColor: category.accent }} />
            </div>

            {category.subcategories.map((sub, sIdx) => (
              <div key={sub.name} className={sIdx === 0 ? "mt-1" : "mt-8"}>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-4 flex items-center gap-2.5">
                  {sub.name}
                  <div className="h-[1px] bg-white/10 flex-1" />
                </div>

                <div className={`grid ${sub.gridCols} gap-4`}>
                  {sub.items.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedVideo(item)}
                      className={`video-card group relative rounded-lg overflow-hidden bg-[#141414] border border-white/10 cursor-pointer transition-all duration-300 ${category.cardType}`}
                    >
                      <div className="video-thumb aspect-video relative overflow-hidden flex items-center justify-center">
                         {/* Thumbnail Preview */}
                         <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" 
                              style={{ backgroundImage: `url(${item.type === 'youtube' ? `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` : item.src})` }} 
                         />
                         
                         {/* Accent Overlay */}
                         <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                         <div className="absolute inset-0 opacity-10 pointer-events-none" 
                              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
                         />
                         
                         {/* Play Ring */}
                         <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/60 flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                              style={{ borderColor: category.accent }}>
                           <Play className="w-5 h-5 md:w-6 md:h-6 fill-current text-white ml-1" style={{ color: category.accent }} />
                         </div>
                      </div>

                      <div className="p-4 bg-[#0f0f0f]">
                        <p className="text-[13px] font-medium text-white mb-2 truncate group-hover:text-white transition-colors">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-[3px] transition-colors"
                                style={{ backgroundColor: `${category.accent}15`, color: category.accent }}>
                            {item.tag}
                          </span>
                          <button className="font-mono text-[10px] text-white/40 flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/5 hover:border-white/20 hover:text-white transition-all">
                             <ExternalLink size={10} />
                             VIEW
                          </button>
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
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
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
                  className="w-full h-full bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .video-card:hover {
          border-color: rgba(255,255,255,0.2) !important;
        }
        .card-amber:hover { border-color: #f5a62340 !important; }
        .card-teal:hover { border-color: #00c8a840 !important; }
        .card-coral:hover { border-color: #ff6b4a40 !important; }
        .card-violet:hover { border-color: #a78bfa40 !important; }
        .card-rose:hover { border-color: #f472b640 !important; }
      `}</style>
    </section>
  );
};

export default AllWork;
