"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRelativeMousePosition } from "@/hooks/useMousePosition";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  spotlight = true,
  onClick,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { position, isInside } = useRelativeMousePosition(cardRef);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-muted p-6",
        "transition-all duration-300",
        onClick && "cursor-pointer",
        className
      )}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }}
      onClick={onClick}
    >
      {/* Spotlight effect */}
      {spotlight && isInside && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, 
              color-mix(in srgb, var(--gradient-start) 6%, transparent), transparent 40%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
