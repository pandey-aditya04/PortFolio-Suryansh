"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // seconds
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        pauseOnHover && "[&:hover>div]:animation-play-state-paused",
        className
      )}
    >
      <div
        className="flex shrink-0 items-center gap-8"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-8"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
