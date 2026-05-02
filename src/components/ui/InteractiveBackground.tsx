"use client";

import { useEffect, useState } from "react";

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      <style jsx>{`
        @keyframes bg-drift-1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, 10%) scale(1.1); }
          66% { transform: translate(-5%, 5%) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes bg-drift-2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-5%, -10%) scale(1.1); }
          66% { transform: translate(5%, -5%) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .mesh-orb-1 {
          animation: bg-drift-1 30s infinite ease-in-out;
        }
        .mesh-orb-2 {
          animation: bg-drift-2 25s infinite ease-in-out;
        }
      `}</style>
      
      {/* Orb 1: Top Left */}
      <div 
        className="mesh-orb-1 absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--gradient-start) 0%, transparent 70%)",
          opacity: 0.04
        }}
      />
      
      {/* Orb 2: Bottom Right */}
      <div 
        className="mesh-orb-2 absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen blur-[140px]"
        style={{
          background: "radial-gradient(circle, var(--gradient-end) 0%, transparent 70%)",
          opacity: 0.03
        }}
      />

      {/* Interactive Mouse Follower Orb */}
      <div 
        className="absolute w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[100px] transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, var(--gradient-start) 0%, transparent 60%)",
          opacity: 0.05,
          left: mousePos.x - (typeof window !== 'undefined' ? window.innerWidth * 0.2 : 0),
          top: mousePos.y - (typeof window !== 'undefined' ? window.innerHeight * 0.2 : 0),
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
        }}
      />
    </div>
  );
}
