"use client";

import { motion } from "framer-motion";
import { Layout, Palette, Video, Share2 } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Website Design",
      icon: Layout,
      description: "Custom, responsive websites with high-end animations and seamless user experiences.",
      color: "rgba(255,255,255,0.05)",
    },
    {
      title: "Logo Design",
      icon: Palette,
      description: "Unique brand identities that stand out in the digital landscape.",
      color: "rgba(255,255,255,0.05)",
    },
    {
      title: "Motion Graphics",
      icon: Video,
      description: "Dynamic visual storytelling through advanced motion design and AI synthesis.",
      color: "rgba(255,255,255,0.05)",
    },
    {
      title: "Social Media",
      icon: Share2,
      description: "Engaging content systems for Instagram, Twitter, and LinkedIn.",
      color: "rgba(255,255,255,0.05)",
    },
  ];

  return (
    <section id="services" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-[10px] uppercase tracking-widest text-white/40">⊙ Services</span>
          <h2 className="text-5xl font-serif text-white">What I Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                borderColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 0 40px rgba(255,255,255,0.04)"
              }}
              className="p-10 rounded-[2rem] border border-white/5 bg-[#111] flex flex-col gap-12 group cursor-pointer transition-all duration-500"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                </div>
                <p className="text-white/40 leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Overlapping Images Grid */}
              <div className="relative h-48 mt-auto overflow-hidden rounded-xl">
                 <div className="absolute top-0 left-0 w-3/4 h-full bg-[#222] rounded-xl border border-white/10 group-hover:scale-[1.03] transition-transform duration-500 group-hover:-translate-y-2" />
                 <div className="absolute top-10 right-0 w-1/2 h-full bg-[#333] rounded-xl border border-white/10 group-hover:scale-[1.03] transition-transform duration-500 group-hover:translate-x-2" />
                 <div className="absolute -bottom-10 left-10 w-2/3 h-full bg-[#1a1a1a] rounded-xl border border-white/10 group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
