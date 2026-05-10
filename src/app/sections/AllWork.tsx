"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { GlowCard } from '@/components/ui/spotlight-card';
import { RandomLetterSwapPingPong } from '@/components/ui/random-letter-swap';
interface WorkItem {
  id: string;
  title: string;
  tag: string;
  type: 'youtube' | 'cloudinary' | 'image';
  videoId?: string;
  src?: string;
  isVertical?: boolean;
}

const MediaContent = ({ item }: { item: any }) => {
  const [isInView, setIsInView] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-[#0a0a0a]">
      {isInView ? (
        <div className="absolute inset-0 w-full h-full">
          {item.type === 'youtube' ? (
            <div className={`absolute w-[100%] h-[155%] -top-[27.5%] left-0 transform-gpu ${item.isVertical ? 'scale-[1.35]' : 'scale-[1.3]'}`}>
              <iframe
                src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playlist=${item.videoId}&enablejsapi=1&playsinline=1`}
                className="w-full h-full border-none pointer-events-none"
                allow="autoplay; encrypted-media"
                title={item.title}
              />
            </div>
          ) : (item.type === 'video' || (item.type === 'cloudinary' && item.src?.endsWith('.mp4'))) ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.src})` }}
            />
          )}
        </div>
      ) : (
        <div 
          className="w-full h-full bg-[#0a0a0a] bg-cover bg-center"
          style={{ 
            backgroundImage: item.type === 'youtube' 
              ? `url(https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg)` 
              : `url(${item.src})` 
          }}
        />
      )}
    </div>
  );
};

const optimizeCloudinaryUrl = (url: string) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  if (url.includes('upload/')) {
    return url.replace('upload/', 'upload/q_auto,f_auto,w_800/');
  }
  return url;
};

const VideoFrameGrid = null; // Removed

const AllWork = () => {
  const [selectedVideo, setSelectedVideo] = useState<WorkItem | null>(null);

  const categories = useMemo(() => [
    {
      index: "01",
      name: "AI Videos",
      badge: "3 Series",
      accent: "#f5a623",
      cardType: "card-amber",
      subcategories: [
        {
          name: "Advertisements",
          items: [
            // Row 1: 2 Landscape
            { id: "ai-land-1", title: "Mountain Vista Cinematic", tag: "Cinematic", type: "youtube", videoId: "VHdLncCBl9M" },
            { id: "ai-land-2", title: "Nature Synthesis Exploration", tag: "Visual Art", type: "youtube", videoId: "d3HpHGpXFuE" },
            // Row 2: 3 Portrait
            { id: "ai-adv-1", title: "Realistic Product Advertisement", tag: "Product Ad", type: "youtube", videoId: "u2MwVays7fo", isVertical: true },
            { id: "ai-adv-2", title: "Abstract Motion Design", tag: "Motion Art", type: "youtube", videoId: "DU68DVJCTq4", isVertical: true },
            { id: "ai-story-1", title: "Cyberpunk Narrative Short", tag: "Narrative", type: "youtube", videoId: "WJS5_laqbno", isVertical: true }
          ]
        }
      ]
    },
    {
      index: "02",
      name: "Edits",
      accent: "#ff6b4a",
      cardType: "card-coral",
      subcategories: [
        {
          name: "Professional Works",
          items: [
            // Row 1: 2 Landscape
            { id: "edit-1", title: "Electra CS Master Edit", tag: "Production", type: "youtube", videoId: "OHEWAcivxCA" },
            { id: "edit-2", title: "Cinematic Commercial Story", tag: "Commercial", type: "youtube", videoId: "zQArTonc-FQ" },
            // Row 2: 3 Portrait
            { id: "adv-v-1", title: "High-Impact Social Ad", tag: "Advertising", type: "youtube", videoId: "-MhFhPmehbg", isVertical: true },
            { id: "adv-v-2", title: "Performance Marketing Ad", tag: "Performance", type: "youtube", videoId: "ICPDfLbCpSo", isVertical: true },
            { id: "adv-v-3", title: "Vertical Brand Story", tag: "Social", type: "youtube", videoId: "WJS5_laqbno", isVertical: true }
          ]
        }
      ]
    },
    {
      index: "03",
      name: "Carousel",
      badge: "Featured",
      accent: "#00c8a8",
      cardType: "card-teal",
      subcategories: [
        {
          name: "Motion Graphics",
          items: [
            { id: "car-1", title: "Future Aesthetics", tag: "Concept", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788557/skills/Carousel/A1.jpg" },
            { id: "car-2", title: "Neon Pulse", tag: "Motion", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788561/skills/Carousel/A2.jpg" },
            { id: "car-3", title: "Cyber Flow", tag: "VFX", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788576/skills/Carousel/AA-1.jpg" },
            { id: "car-4", title: "Glitch Dream", tag: "Art", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788591/skills/Carousel/AA-2.jpg" },
            { id: "car-5", title: "Visual Flow", tag: "VFX", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778095643/skills/Carousel/AA-3.jpg" },
            { id: "car-6", title: "Digital Pulse", tag: "Motion", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777788624/skills/Carousel/AA-4.jpg" }
          ]
        }
      ]
    },
    {
      index: "04",
      name: "Post Designs",
      accent: "#f472b6",
      cardType: "card-rose",
      subcategories: [
        {
          name: "Social Media",
          items: [
            { id: "post-1", title: "Modern Minimalist 01", tag: "Graphic", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777790980/skills/Post%20designs/1.jpg" },
            { id: "post-2", title: "Branding Concept 02", tag: "Branding", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777790982/skills/Post%20designs/2.jpg" },
            { id: "post-3", title: "Typography Study 03", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777790985/skills/Post%20designs/3.jpg" },
            { id: "post-4", title: "Digital Masterpiece 04", tag: "Art", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777790991/skills/Post%20designs/4.png" },
            { id: "post-5", title: "Visual Identity 05", tag: "Branding", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777791040/skills/Post%20designs/5.png" },
            { id: "post-6", title: "Content Design 06", tag: "Social", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777791043/skills/Post%20designs/6.jpg" },
            { id: "post-7", title: "Impactful Visual 07", tag: "Graphic", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778092736/skills/Post%20designs/7.jpg" },
            { id: "post-8", title: "Creative Layout 08", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778092738/skills/Post%20designs/8.jpg" },
            { id: "post-9", title: "Style Exploration 09", tag: "Art", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778092749/skills/Post%20designs/9.jpg" },
            { id: "post-10", title: "Merchandise Concept A", tag: "Merch", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777791103/skills/Post%20designs/merch-1.png" },
            { id: "post-11", title: "Merchandise Concept B", tag: "Merch", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1777791118/skills/Post%20designs/merch-2.png" }
          ]
        }
      ]
    }
  ], []);

  return (
    <section id="projects" className="projects-section pt-40 pb-32 bg-[#080808] relative overflow-hidden font-sans">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-6 mb-24">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Portfolio Archive</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight flex items-center gap-x-4">
            <RandomLetterSwapPingPong label="All" />
            <RandomLetterSwapPingPong label="Work" className="text-white/40 italic" />
          </h2>
        </div>

        {categories.map((category) => (
          <div key={category.index} id={`work-${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="mb-32 relative">
            {/* Category Header */}
            {category.name !== "Post Designs" && (
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-white/20 tracking-widest uppercase">0{category.index}</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tight flex items-center gap-x-3">
                    <RandomLetterSwapPingPong label={category.name.split(' ')[0]} />
                    {category.name.split(' ').length > 1 && (
                      <RandomLetterSwapPingPong 
                        label={category.name.split(' ').slice(1).join(' ')} 
                        className="text-white/40 italic" 
                      />
                    )}
                  </h3>
                </div>
              </div>
            )}

            {category.subcategories.map((sub, sIdx) => {
              const landscapeItems = sub.items.filter(item => !((item as any).isVertical));
              const portraitItems = sub.items.filter(item => (item as any).isVertical);

              return (
                <div key={sub.name} className={sIdx === 0 ? "mt-0" : "mt-24"}>
                  {category.name === "Carousel" || category.name === "Post Designs" ? (
                    <div className="flex flex-col gap-12 -mx-12 overflow-hidden py-4">
                      {/* ... (Carousel code remains the same) */}
                      <div className="carousel-track scroll-left">
                        {[...sub.items, ...sub.items].map((item: any, idx) => (
                          <div 
                            key={`row1-${idx}`} 
                            className="w-[280px] h-[380px] md:w-[350px] md:h-[450px] rounded-[2rem] overflow-hidden relative group cursor-pointer shrink-0 p-0 border border-white/10 bg-[#111] shadow-2xl"
                          >
                            <div 
                              className="w-full h-full relative"
                              onClick={() => setSelectedVideo(item as any)}
                            >
                              <img 
                                src={optimizeCloudinaryUrl(item.src)} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                alt={item.title}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="carousel-track scroll-right">
                        {[...[...sub.items].reverse(), ...sub.items].map((item: any, idx) => (
                          <div 
                            key={`row2-${idx}`} 
                            className="w-[280px] h-[380px] md:w-[350px] md:h-[450px] rounded-[2rem] overflow-hidden relative group cursor-pointer shrink-0 p-0 border border-white/10 bg-[#111] shadow-2xl"
                          >
                            <div 
                              className="w-full h-full relative"
                              onClick={() => setSelectedVideo(item as any)}
                            >
                              <img 
                                src={optimizeCloudinaryUrl(item.src)} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                alt={item.title}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {/* Landscape Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {landscapeItems.map((item: any, idx) => (
                          <GlowCard 
                            key={item.id} 
                            customSize
                            className="aspect-video rounded-[2.5rem] overflow-hidden relative group cursor-pointer p-0"
                            glowColor={idx % 2 === 0 ? "blue" : "purple"}
                          >
                            <div className="w-full h-full" onClick={() => setSelectedVideo(item)}>
                              <MediaContent item={item} />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-8 left-8">
                                  <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 block">{item.tag}</span>
                                  <h4 className="text-xl font-serif text-white">{item.title}</h4>
                                </div>
                              </div>
                            </div>
                          </GlowCard>
                        ))}
                      </div>
                      
                      {/* Portrait Row */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {portraitItems.map((item: any, idx) => (
                          <GlowCard 
                            key={item.id} 
                            customSize
                            className="aspect-[9/16] rounded-[2.5rem] overflow-hidden relative group cursor-pointer p-0"
                            glowColor={idx % 2 === 0 ? "purple" : "blue"}
                          >
                            <div className="w-full h-full" onClick={() => setSelectedVideo(item)}>
                              <MediaContent item={item} />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-6 left-6">
                                  <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1 block">{item.tag}</span>
                                  <h4 className="text-lg font-serif text-white leading-tight">{item.title}</h4>
                                </div>
                              </div>
                            </div>
                          </GlowCard>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
            >
              {selectedVideo.type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full border-none"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={selectedVideo.title}
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
