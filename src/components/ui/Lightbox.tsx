"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
          {/* Navigation */}
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-6 z-[110] h-14 w-14 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-6 z-[110] h-14 w-14 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
        </div>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-mono tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
