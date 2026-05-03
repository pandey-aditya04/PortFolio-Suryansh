"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "AI Videos",
  "Carousel Design",
  "Photo Editing",
  "Menu Design",
  "Post Design",
  "Branding",
  "Social Media",
  "Photoshop",
];

export function MarqueeStrip() {
  return (
    <div className="relative flex w-full overflow-hidden bg-background py-4 border-y border-border">
      <motion.div
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {/* First set of items */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span className="text-sm font-mono uppercase tracking-[0.2em] font-medium text-foreground">
                  {item}
                </span>
                <span className="text-primary text-xl">★</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
