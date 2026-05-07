"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export const FeaturedProject = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateY(0) rotateX(0)";
  };

  return (
    <section className="py-32 bg-[#0c0c0c] flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side — Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-6xl font-serif text-white">FRND Ad Campaign</h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              A high-performance Meta Ads campaign powered by cutting-edge AI video synthesis to create hyper-realistic, high-converting visuals for the FRND social platform.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">Client</span>
              <span className="text-white text-sm">FRND (Social Platform)</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">Service</span>
              <span className="text-white text-sm">AI Video Synthesis & Meta Ads</span>
            </div>
          </div>

          <button className="w-fit px-8 py-4 border border-white/10 text-white rounded-full font-semibold hover:bg-white/5 transition-all">
            Live Site Preview
          </button>
        </div>

        {/* Right Side — 3D Tilt Mockup */}
        <div className="relative group">
          {/* Radial Gradient Glow behind */}
          <div className="absolute inset-0 bg-[#787878]/20 blur-[100px] -z-10 rounded-full" />
          
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full aspect-[16/10] bg-[#111] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden transition-transform duration-200 ease-out flex flex-col"
          >
             {/* Browser Header */}
             <div className="flex items-center gap-1.5 px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
             </div>
             {/* Mockup Content */}
             <div className="flex-1 bg-[#1a1a1a] relative overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/Skills/EDITS/Advertisement videos/1.mp4" type="video/mp4" />
                </video>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
