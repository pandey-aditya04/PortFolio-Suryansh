"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";

export const RecentDesigns = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const CL_IMG = "https://res.cloudinary.com/daeio5gbf/image/upload";
  const clImg = (version: string, path: string) => `${CL_IMG}/v${version}/skills/${path}`;

  const designs = [
    {
      id: 1,
      title: "Premium Brand Identity",
      category: "Graphic Design",
      image: clImg("1777790980", "PostDesigns/1.jpg"),
      className: "lg:col-span-8 aspect-[16/10]",
    },
    {
      id: 2,
      title: "Digital Art Series",
      category: "Digital Art",
      image: clImg("1777790982", "PostDesigns/2.jpg"),
      className: "lg:col-span-4 aspect-square",
    },
    {
      id: 3,
      title: "Marketing Visuals",
      category: "Ad Design",
      image: clImg("1777790985", "PostDesigns/3.jpg"),
      className: "lg:col-span-4 aspect-square",
    },
    {
      id: 4,
      title: "Social Media Strategy",
      category: "Social Design",
      image: clImg("1777790991", "PostDesigns/4.png"),
      className: "lg:col-span-4 aspect-square",
    },
    {
      id: 5,
      title: "Cinematic Poster",
      category: "Motion Design",
      image: clImg("1777791040", "PostDesigns/5.png"),
      className: "lg:col-span-4 aspect-square",
    },
  ];

  return (
    <section id="designs" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2 w-fit">
              <span className="text-[10px] text-white">⊙</span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/80">Recent Projects</span>
            </div>
            <h2 className="text-6xl font-serif text-white flex items-center gap-4">
              Recent <span className="text-white/40 italic">Designs</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                 <ArrowUpRight className="w-5 h-5 text-white/40" />
              </div>
            </h2>
            <p className="text-white/40 text-lg max-w-md">
              Showcase of some of my recent sleek websites and graphic designs.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all"
            >
              See All Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all"
            >
              Contact Now
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage({ src: design.image, alt: design.title })}
              className={`group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111] cursor-pointer will-change-transform ${design.className}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 50vw, 33vw"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">{design.category}</span>
                    <h3 className="text-2xl font-serif text-white">{design.title}</h3>
                  </div>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        images={selectedImage ? [selectedImage.src] : []}
        currentIndex={0}
        onNavigate={() => {}}
      />
    </section>
  );
};
