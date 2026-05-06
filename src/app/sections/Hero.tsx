"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <FloatingShapes />
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#646464]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit"
          >
            <span className="text-[10px] text-white">⊙</span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">UI/UX & Graphic Designer</span>
          </motion.div>

          <div className="flex flex-col gap-2">
            <h1 className="text-7xl md:text-9xl font-serif leading-none tracking-tight">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-white"
              >
                Johan
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-[#666666]"
              >
                Beker
              </motion.span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed"
          >
            I craft digital experiences that blend innovative design with flawless functionality. Let's build something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-white text-[#0c0c0c] rounded-full font-semibold hover:bg-white/90 transition-all">
              Contact Now
            </button>
            <button className="px-8 py-4 border border-white/10 text-white rounded-full font-semibold hover:bg-white/5 transition-all">
              See All Projects
            </button>
          </motion.div>
        </div>

        {/* Right Column — Antigravity Cluster */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Card 1 */}
          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [-8, -8, -8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-0 w-72 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md z-20"
          >
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              "The attention to detail and creative vision Johan brought to our project was truly exceptional."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10" />
              <div>
                <p className="text-xs font-bold text-white">Sarah Jenkins</p>
                <p className="text-[10px] text-white/40">CEO, TechFlow</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [5, 5, 5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 right-0 w-72 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md z-10"
          >
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              "Working with Johan was a game-changer for our brand identity. A master of his craft."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10" />
              <div>
                <p className="text-xs font-bold text-white">Michael Chen</p>
                <p className="text-[10px] text-white/40">Founder, Arise</p>
              </div>
            </div>
          </motion.div>

          {/* Cursor Arrow Icon */}
          <motion.div
            animate={{
              x: [-20, 20, -20],
              y: [20, -20, 20]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
