"use client";

import { cn } from "@/lib/utils";

interface GradientBlurProps {
  className?: string;
  variant?: "purple" | "pink" | "mixed";
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
};

export function GradientBlur({
  className,
  variant = "mixed",
  size = "md",
}: GradientBlurProps) {
  const gradients = {
    purple: "from-[var(--gradient-start)]/20 to-transparent",
    pink: "from-[var(--gradient-end)]/20 to-transparent",
    mixed:
      "from-[var(--gradient-start)]/15 via-[var(--gradient-end)]/10 to-transparent",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full bg-gradient-to-br blur-[100px]",
        gradients[variant],
        sizeMap[size],
        "animate-[pulse-glow_6s_ease-in-out_infinite]",
        className
      )}
      aria-hidden="true"
    />
  );
}
