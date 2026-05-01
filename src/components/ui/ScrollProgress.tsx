"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, useSpring } from "framer-motion";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
      }}
    />
  );
}
