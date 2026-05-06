"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at Fintech",
    content: "Johan's ability to translate complex ideas into elegant designs is unparalleled. He truly understands the balance between form and function.",
    rating: 5,
    avatarColor: "#ff5733"
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content: "The motion graphics and AI video synthesis Johan provided for our launch were breathtaking. He's not just a designer; he's a visual storyteller.",
    rating: 5,
    avatarColor: "#33ff57"
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Zenith",
    content: "Working with Johan was the best decision we made for our rebranding. Professional, creative, and incredibly fast.",
    rating: 4.8,
    avatarColor: "#3357ff"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column — Info & Stats */}
          <div className="flex flex-col gap-10 lg:sticky lg:top-32">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-white/40">⊙ Happy Clients</span>
              <h2 className="text-6xl font-serif text-white">Clients <br /><span className="text-white/40">Love me</span></h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "100+", label: "Clients" },
                { value: "$250m", label: "Revenue" },
                { value: "4.8", label: "Rating" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl border border-white/10 bg-white/5 flex flex-col gap-1 items-center text-center">
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-[#0c0c0c] rounded-full font-semibold">Contact Now</button>
              <button className="px-8 py-4 border border-white/10 text-white rounded-full font-semibold">See All</button>
            </div>
          </div>

          {/* Right Column — Sticky Stacked Cards */}
          <div className="flex flex-col gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="sticky top-[100px] bg-[#111] p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col gap-8 transition-transform duration-500 hover:-translate-y-2"
                style={{ 
                  marginTop: i === 0 ? 0 : `${i * 20}px`,
                  top: `${100 + i * 20}px`
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: t.avatarColor }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-white">{t.name}</span>
                      <span className="text-xs text-white/40 uppercase tracking-widest">{t.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-white mr-2">{t.rating}</span>
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                </div>

                <p className="text-xl text-white/80 leading-relaxed italic">
                   "{t.content}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
