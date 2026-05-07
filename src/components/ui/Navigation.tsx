"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "AI Videos", href: "#work-ai-videos" },
    { name: "Edits", href: "#work-edits" },
    { name: "Designs", href: "#work-post-designs" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.header
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-5 left-1/2 z-[100] flex items-center gap-3 md:gap-6 px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 bg-[#141414]/85 backdrop-blur-xl transition-all duration-500",
        isScrolled ? "shadow-[0_20px_50px_rgba(255,255,255,0.05)] border-white/15" : "shadow-none"
      )}
    >
      {/* Logo */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 pr-4 border-r border-white/10 cursor-pointer group"
      >
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#0c0c0c] font-bold transition-transform group-hover:scale-110">
          S
        </div>
        <span className="text-white font-medium tracking-tight">Suryansh S.</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              if (link.href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center gap-2 bg-white text-[#0c0c0c] px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
      >
        <span>✦</span>
        <span>Let&apos;s Talk</span>
      </motion.button>
    </motion.header>
  );
};
