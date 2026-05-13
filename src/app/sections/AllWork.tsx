"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
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

const MediaContent = React.memo(({ item, isUnmuted, setUnmutedId }: { item: any, isUnmuted: boolean, setUnmutedId: (id: string | null) => void }) => {
  const [isInView, setIsInView] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle Play/Pause logic
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newPlaying = !isPlaying;
    setIsPlaying(newPlaying);
    
    if (item.type === 'youtube') {
      const command = newPlaying ? 'playVideo' : 'pauseVideo';
      iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: command }), '*');
    } else if (videoRef.current) {
      newPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  // Restart video helper
  const restartVideo = () => {
    if (item.type === 'youtube') {
      iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'seekTo', args: [0, true] }), '*');
      iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'playVideo' }), '*');
    } else if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    setIsPlaying(true);
  };

  // Handle Mute/Unmute logic
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isUnmuted) {
      setUnmutedId(null);
    } else {
      setUnmutedId(item.id);
      restartVideo(); // Restart when manually unmuted
    }
  };

  // Sync mute state with global unmutedId
  React.useEffect(() => {
    if (item.type === 'youtube') {
      const command = isUnmuted ? 'unMute' : 'mute';
      iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: command }), '*');
    } else if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
    }
  }, [isUnmuted, item.type]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#0a0a0a] group/media cursor-pointer"
      onClick={() => {
        setUnmutedId(item.id);
        restartVideo();
      }}
    >
      {isInView ? (
        <div className="absolute inset-0 w-full h-full">
          {item.type === 'youtube' ? (
            <div className={`absolute w-[100%] h-[155%] -top-[27.5%] left-0 transform-gpu ${item.isVertical ? 'scale-[1.35]' : 'scale-[1.3]'}`}>
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playlist=${item.videoId}&enablejsapi=1&playsinline=1`}
                className="w-full h-full border-none pointer-events-none"
                allow="autoplay; encrypted-media"
                title={item.title}
                loading="lazy"
              />
            </div>
          ) : (item.type === 'video' || (item.type === 'cloudinary' && item.src?.endsWith('.mp4'))) ? (
            <video
              ref={videoRef}
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

          {/* Overlay Controls */}
          {(item.type === 'youtube' || item.type === 'video' || (item.type === 'cloudinary' && item.src?.endsWith('.mp4'))) && (
            <>
              {/* Play/Pause Center Button */}
              <div 
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-all duration-300 z-10",
                  isPlaying ? "opacity-0 group-hover/media:opacity-100 group-hover/media:bg-black/20" : "opacity-100 bg-black/40"
                )}
              >
                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                >
                  {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} className="ml-1" fill="currentColor" />}
                </button>
              </div>

              {/* Mute Toggle Bottom Corner */}
              <div className="absolute bottom-4 right-4 z-20">
                <button 
                  onClick={toggleMute}
                  className={cn(
                    "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300",
                    isUnmuted 
                      ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                      : "bg-black/40 text-white border-white/20 backdrop-blur-md hover:bg-white/10"
                  )}
                >
                  {isUnmuted ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
              </div>
            </>
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
});

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
  const [unmutedId, setUnmutedId] = useState<string | null>(null);

  const categories = useMemo(() => [
    {
      index: "01",
      name: "AI Videos",
      badge: "Series",
      accent: "#f5a623",
      cardType: "card-amber",
      subcategories: [
        {
          name: "Advertisements",
          items: [
            { id: "ai-adv-1", title: "Product Advertisement 01", tag: "Ad", type: "youtube", videoId: "sJhBE6H2PMY", isVertical: true },
            { id: "ai-adv-2", title: "Product Advertisement 02", tag: "Ad", type: "youtube", videoId: "u2MwVays7fo", isVertical: true },
            { id: "ai-adv-3", title: "Motion Design Concept", tag: "Motion", type: "youtube", videoId: "DU68DVJCTq4", isVertical: true },
            { id: "ai-adv-4", title: "Visual Storytelling", tag: "Visual", type: "youtube", videoId: "_-egdW6Ca5Y", isVertical: true },
            { id: "ai-adv-5", title: "Dynamic Ad Piece", tag: "Dynamic", type: "youtube", videoId: "tLD5PONeyzo", isVertical: true }
          ]
        },
        {
          name: "Cartoon",
          items: [
            { id: "ai-cart-1", title: "Animated Cartoon Feature", tag: "Animation", type: "youtube", videoId: "B3Yjbh1rXqg" }
          ]
        },
        {
          name: "AI Storytelling",
          items: [
            { id: "ai-story-1", title: "Cyberpunk Narrative", tag: "Story", type: "youtube", videoId: "WJS5_laqbno", isVertical: true },
            { id: "ai-story-2", title: "AI Visual Journey", tag: "Story", type: "youtube", videoId: "DuD_8TXKV_E", isVertical: true }
          ]
        },
        {
          name: "Landscape",
          items: [
            { id: "ai-land-1", title: "Mountain Vista Cinematic", tag: "Cinematic", type: "youtube", videoId: "VHdLncCBl9M" },
            { id: "ai-land-2", title: "Nature Synthesis", tag: "Visual Art", type: "youtube", videoId: "d3HpHGpXFuE" },
            { id: "ai-land-3", title: "Atmospheric Environment", tag: "Landscape", type: "youtube", videoId: "xC_v-LddSJI" },
            { id: "ai-land-4", title: "Ethereal Worlds", tag: "Landscape", type: "youtube", videoId: "QGRvL-vvtBI" }
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
            { id: "edit-1", title: "Electra CS Master Edit", tag: "Production", type: "youtube", videoId: "OHEWAcivxCA" },
            { id: "edit-2", title: "Cinematic Commercial Story", tag: "Commercial", type: "youtube", videoId: "zQArTonc-FQ" }
          ]
        },
        {
          name: "Advertisement Videos",
          items: [
            { id: "adv-v-1", title: "High-Impact Social Ad", tag: "Advertising", type: "youtube", videoId: "-MhFhPmehbg", isVertical: true },
            { id: "adv-v-2", title: "Performance Marketing", tag: "Performance", type: "youtube", videoId: "ICPDfLbCpSo" },
            { id: "adv-v-3", title: "Vertical Brand Story", tag: "Social", type: "youtube", videoId: "JKvFWeeu7xw", isVertical: true }
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
    },
    {
      index: "05",
      name: "Menu",
      accent: "#10b981",
      cardType: "card-emerald",
      subcategories: [
        {
          name: "Brand Menus",
          items: [
            { id: "menu-1", title: "Menu Page 1", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437639/skills/Menus/PAGE_1.jpg" },
            { id: "menu-2", title: "Menu Page 2", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437647/skills/Menus/PAGE_2.jpg" },
            { id: "menu-3", title: "Menu Page 3", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437649/skills/Menus/PAGE_3.jpg" },
            { id: "menu-4", title: "Menu Page 4", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437650/skills/Menus/PAGE_4.jpg" },
            { id: "menu-5", title: "Menu Page 5", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437652/skills/Menus/PAGE_5.jpg" },
            { id: "menu-6", title: "Menu Page 6", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437653/skills/Menus/PAGE_6.jpg" },
            { id: "menu-7", title: "Menu Page 7", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437654/skills/Menus/PAGE_7.jpg" },
            { id: "menu-8", title: "Menu Page 8", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437657/skills/Menus/PAGE_8.jpg" },
            { id: "menu-9", title: "Menu Page 9", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437659/skills/Menus/PAGE_9.jpg" },
            { id: "menu-10", title: "Menu Page 10", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437641/skills/Menus/PAGE_10.jpg" },
            { id: "menu-11", title: "Menu Page 11", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437643/skills/Menus/PAGE_11.jpg" },
            { id: "menu-12", title: "Menu Page 12", tag: "Design", type: "image", src: "https://res.cloudinary.com/daeio5gbf/image/upload/v1778437645/skills/Menus/PAGE_12.jpg" }
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
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="text-xl md:text-2xl font-serif text-white/60 tracking-tight italic">
                      <RandomLetterSwapPingPong label={sub.name} />
                    </h4>
                    <div className="h-[1px] w-12 bg-white/10" />
                  </div>

                  {category.name === "Carousel" || category.name === "Post Designs" || category.name === "Menu" ? (
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
                                decoding="async"
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
                                decoding="async"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-8">
                      {/* Landscape Row */}
                      {landscapeItems.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6">
                          {landscapeItems.map((item: any, idx) => (
                            <div key={item.id} className="w-full md:w-[calc(50%-12px)] max-w-[640px] transform-gpu will-change-transform">
                              <motion.div 
                                className="aspect-video rounded-[2.5rem] overflow-hidden relative group cursor-pointer p-0 border border-white/5 bg-[#111]"
                              >
                                <div className="w-full h-full" onClick={() => {
                                  setSelectedVideo(item);
                                  setUnmutedId(null); // Mute gallery when modal opens
                                }}>
                                  <MediaContent item={item} isUnmuted={unmutedId === item.id} setUnmutedId={setUnmutedId} />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-8 left-8">
                                      <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 block">{item.tag}</span>
                                      <h4 className="text-xl font-serif text-white">{item.title}</h4>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Portrait Row */}
                      {portraitItems.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6">
                          {portraitItems.map((item: any, idx) => (
                            <div key={item.id} className="w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] max-w-[420px] transform-gpu will-change-transform">
                              <motion.div 
                                className="aspect-[9/16] rounded-[2.5rem] overflow-hidden relative group cursor-pointer p-0 border border-white/5 bg-[#111]"
                              >
                                <div className="w-full h-full" onClick={() => {
                                  setSelectedVideo(item);
                                  setUnmutedId(null); // Mute gallery when modal opens
                                }}>
                                  <MediaContent item={item} isUnmuted={unmutedId === item.id} setUnmutedId={setUnmutedId} />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-6 left-6">
                                      <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1 block">{item.tag}</span>
                                      <h4 className="text-lg font-serif text-white leading-tight">{item.title}</h4>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          ))}
                        </div>
                      )}
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
              onClick={() => {
                setSelectedVideo(null);
              }}
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
