"use client";

import React from 'react';
import Image from 'next/image';

const DesignCarousel = () => {
  // Optimized Cloudinary URLs with f_auto, q_auto
  const rowOneImages = [
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788557/skills/Carousel/A1.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788561/skills/Carousel/A2.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788576/skills/Carousel/AA-1.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788591/skills/Carousel/AA-2.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788624/skills/Carousel/AA-4.jpg',
  ];

  const rowTwoImages = [
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788625/skills/Carousel/B-1.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788627/skills/Carousel/B-2.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788632/skills/Carousel/C-1.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788640/skills/Carousel/C-2.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788646/skills/Carousel/C-3.jpg',
    'https://res.cloudinary.com/daeio5gbf/image/upload/f_auto,q_auto/v1777788652/skills/Carousel/C-4.jpg',
  ];

  return (
    <section className="carousel-container overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-white">⊙</span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                Design Inspirations
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Thinking design doesn&apos;t matter <br/> in Editing? <span className="text-white/40 italic">Think Again.</span>
            </h2>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <div className="carousel-track scroll-left">
          {[...rowOneImages, ...rowOneImages].map((img, index) => (
            <div key={`row1-${index}`} className="carousel-image-wrapper relative">
              <Image 
                src={img} 
                alt={`Design Example ${index + 1}`} 
                fill
                sizes="350px"
                className="object-cover"
                priority={index < 5}
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="carousel-track scroll-right">
          {[...rowTwoImages, ...rowTwoImages].map((img, index) => (
            <div key={`row2-${index}`} className="carousel-image-wrapper relative">
              <Image 
                src={img} 
                alt={`Design Example ${index + 1}`} 
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignCarousel;
