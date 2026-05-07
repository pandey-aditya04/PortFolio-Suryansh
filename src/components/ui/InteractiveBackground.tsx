"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Small optimization: only update if movement is significant or on requestAnimationFrame
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Reduced star count for better performance
  const stars = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .star {
          animation: twinkle var(--d) infinite ease-in-out;
          animation-delay: var(--delay);
          will-change: opacity, transform;
        }
        .smoke {
          animation: smoke-float var(--d) infinite ease-in-out;
          filter: blur(120px);
          mix-blend-mode: screen;
          will-change: transform, opacity;
        }
        @keyframes smoke-float {
          0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.02; }
          50% { transform: translate3d(5%, 5%, 0) scale(1.1); opacity: 0.04; }
          100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.02; }
        }
      `}</style>
      
      {/* 1. Star Field */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star absolute bg-white/30 rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size * 0.7}px`,
              height: `${star.size * 0.7}px`,
              '--d': `${star.duration}s`,
              '--delay': `${star.delay}s`,
            } as any}
          />
        ))}
      </div>

      {/* 2. Optimized Smoke Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="smoke absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
            '--d': '30s'
          } as any}
        />
        <div 
          className="smoke absolute bottom-[-10%] right-[-10%] w-[110vw] h-[110vw] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
            '--d': '40s'
          } as any}
        />
      </div>
      
      {/* 3. The Solid Crescent Planet */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[5%] right-[5%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full z-10 opacity-[0.4] will-change-transform"
        style={{
          background: `
            radial-gradient(circle at 30% 50%, #222 0%, #0a0a0a 60%, #000 100%),
            url('https://www.transparenttextures.com/patterns/stardust.png')
          `,
        }}
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 100% 50%, black 25%, transparent 75%)",
            mixBlendMode: "multiply"
          }}
        />
        <div className="absolute inset-0 rounded-full opacity-[0.12] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/rocky-wall.png')]" />
        <div className="absolute inset-0 rounded-full border border-white/[0.12] shadow-[inset_12px_0_25px_rgba(255,255,255,0.08)]" />
      </motion.div>

      {/* 4. Optimized Mouse Glow */}
      <div 
        className="absolute w-[30vw] h-[30vw] rounded-full mix-blend-screen blur-[100px] transition-transform duration-700 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 60%)",
          transform: `translate3d(${mousePos.x - (typeof window !== 'undefined' ? window.innerWidth * 0.15 : 0)}px, ${mousePos.y - (typeof window !== 'undefined' ? window.innerHeight * 0.15 : 0)}px, 0)`
        }}
      />
    </div>
  );
}
