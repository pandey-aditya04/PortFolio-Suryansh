import { motion } from "framer-motion";
import { Layout, Palette, Code, Boxes } from "lucide-react";
import Image from "next/image";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2 w-fit">
              <span className="text-[10px] text-white">⊙</span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/80">Design services</span>
            </div>
            <h2 className="text-6xl font-serif text-white leading-tight">
              Design <span className="text-white/40 italic">Services</span>
            </h2>
            <p className="text-white/40 text-lg max-w-md">
              Explore a suite of design services to elevate your brand.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all transform hover:scale-105">
            Contact Now
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 1. Website Design (Large) */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="lg:col-span-7 p-10 rounded-[2.5rem] border border-white/10 bg-[#111] overflow-hidden group flex flex-col gap-8 relative"
          >
            <div className="flex flex-col gap-4 relative z-20">
              <div className="flex items-center gap-3 text-white">
                <Layout className="w-5 h-5 text-white/40" />
                <h3 className="text-2xl font-serif">Website Design</h3>
              </div>
              <p className="text-white/40 text-sm max-w-md leading-relaxed">
                Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand.
              </p>
            </div>

            {/* Mockup Preview */}
            <div className="relative mt-auto h-[320px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-700">
               <Image 
                 src="/images/suryansh/godine_mockup.png" 
                 alt="Website Design Mockup" 
                 fill 
                 className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* 2. Logo Design (Small) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-5 p-10 rounded-[2.5rem] border border-white/10 bg-[#111] flex flex-col gap-6 group relative overflow-hidden"
          >
            <div className="flex items-center gap-3 text-white">
              <Boxes className="w-5 h-5 text-white/40" />
              <h3 className="text-2xl font-serif">Logo Design</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Crafting distinctive, scalable, and impactful logos that embody your brand's identity and vision.
            </p>
            <div className="mt-auto flex justify-center py-10">
               <div className="w-32 h-32 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Palette className="w-12 h-12 text-white/20 group-hover:text-white transition-colors" />
               </div>
            </div>
          </motion.div>

          {/* 3. Graphic Design (Small) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-5 p-10 rounded-[2.5rem] border border-white/10 bg-[#111] flex flex-col gap-6 group"
          >
            <div className="flex items-center gap-3 text-white">
              <Palette className="w-5 h-5 text-white/40" />
              <h3 className="text-2xl font-serif">Graphic Design</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience.
            </p>
            <div className="mt-auto grid grid-cols-3 gap-3">
               {[1,2,3].map(i => (
                 <div key={i} className="aspect-square rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors" />
               ))}
            </div>
          </motion.div>

          {/* 4. Framer Design (Large) */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="lg:col-span-7 p-10 rounded-[2.5rem] border border-white/10 bg-[#111] overflow-hidden group flex flex-col gap-8 relative"
          >
            <div className="flex flex-col gap-4 relative z-20">
              <div className="flex items-center gap-3 text-white">
                <Code className="w-5 h-5 text-white/40" />
                <h3 className="text-2xl font-serif">Framer Design</h3>
              </div>
              <p className="text-white/40 text-sm max-w-md leading-relaxed">
                Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience.
              </p>
            </div>

            {/* Double Mockup Preview */}
            <div className="relative mt-auto h-[320px] flex gap-6 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-700">
               <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/5 shadow-xl">
                 <Image 
                   src="/images/suryansh/chatbot_mockup.png" 
                   alt="Framer Design 1" 
                   fill 
                   className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                 />
               </div>
               <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/5 shadow-xl">
                 <Image 
                   src="/images/suryansh/collaboration.png" 
                   alt="Framer Design 2" 
                   fill 
                   className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                 />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
