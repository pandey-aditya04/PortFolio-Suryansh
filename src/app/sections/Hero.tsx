"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 pb-12">
      <FloatingShapes />
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#646464]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit"
          >
            <span className="text-[10px] text-white">⊙</span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">Video Editor | Graphic Designer | AI Visual Creator</span>
          </motion.div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl md:text-7xl font-serif tracking-tight leading-tight flex items-center gap-x-4 flex-wrap">
                <div className="flex items-center gap-x-4">
                  <motion.span
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white"
                  >
                    Suryansh
                  </motion.span>
                  <motion.span
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-white/30"
                  >
                    Srivastava
                  </motion.span>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 align-middle hover:bg-white hover:text-black transition-colors duration-500"
                  >
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </div>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed"
            >
              I&apos;m a versatile visual artist specializing in video editing, AI video synthesis, and graphic design to help brands tell compelling stories through premium aesthetics.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-6 mt-4"
          >
            <button className="px-8 py-4 border border-white/10 text-white rounded-full font-semibold hover:bg-white/5 transition-all">
              See All Projects
            </button>
            <button className="px-8 py-4 bg-white text-[#0c0c0c] rounded-full font-semibold hover:bg-white/90 transition-all">
              Contact Now
            </button>
          </motion.div>
        </div>

        {/* Right Column — Antigravity Cluster */}
        <div className="relative h-[500px] flex items-center justify-center lg:justify-end lg:col-span-5">
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
            className="absolute top-0 right-4 w-72 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md z-20"
          >
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              "Suryansh's AI video synthesis is revolutionary. The level of detail and realism is far beyond anything we've seen."
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
            className="absolute bottom-4 right-[-40px] w-72 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md z-10"
          >
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              "A master of his craft. The way he integrates AI tools into professional editing is seamless and impactful."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10" />
              <div>
                <p className="text-xs font-bold text-white">Michael Chen</p>
                <p className="text-[10px] text-white/40">Founder, Arise</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
