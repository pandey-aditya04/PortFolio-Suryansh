"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
  const [initialScroll, setInitialScroll] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setInitialScroll(window.scrollY);
      
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        // Close if scrolled more than 150px
        if (Math.abs(currentScroll - initialScroll) > 150) {
          onClose();
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isOpen, initialScroll, onClose]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={onClose}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[210] h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12" onClick={(e) => e.stopPropagation()}>
            {/* Navigation - Only show if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
                  className="absolute left-6 z-[210] h-14 w-14 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors hover:bg-white/10"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                
                <button
                  onClick={() => onNavigate((currentIndex + 1) % images.length)}
                  className="absolute right-6 z-[210] h-14 w-14 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors hover:bg-white/10"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain shadow-[0_0_80px_rgba(255,255,255,0.05)]"
            />
          </div>

          {/* Info / Interaction Tips */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            {images.length > 1 && (
              <div className="px-4 py-2 rounded-full bg-white/10 text-white text-[10px] font-mono tracking-widest uppercase">
                {currentIndex + 1} / {images.length}
              </div>
            )}
            <div className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
              Scroll to exit
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
