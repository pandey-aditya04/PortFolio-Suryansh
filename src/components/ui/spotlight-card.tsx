"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
  intensity?: number; // 0 to 1 scale to control glow intensity
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 }
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps & any> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
  intensity = 1,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rect: DOMRect | null = null;
    
    const updateRect = () => {
      if (cardRef.current) {
        rect = cardRef.current.getBoundingClientRect();
      }
    };

    const syncPointer = (e: PointerEvent) => {
      if (!cardRef.current || !rect) return;
      
      requestAnimationFrame(() => {
        if (!cardRef.current || !rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / rect.width).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / rect.height).toFixed(2));
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        updateRect();
        document.addEventListener('pointermove', syncPointer);
        window.addEventListener('resize', updateRect);
        window.addEventListener('scroll', updateRect, { passive: true });
      } else {
        document.removeEventListener('pointermove', syncPointer);
        window.removeEventListener('resize', updateRect);
        window.removeEventListener('scroll', updateRect);
      }
    }, { threshold: 0 });

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
      document.removeEventListener('pointermove', syncPointer);
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, []);

  const safeGlowColor = glowColor as keyof typeof glowColorMap;
  const { base, spread } = glowColorMap[safeGlowColor] || glowColorMap.blue;

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ''; // Let className or inline styles handle sizing
    }
    return sizeMap[size as keyof typeof sizeMap] || sizeMap.md;
  };

  const getInlineStyles = () => {
    const baseStyles: any = {
      '--base': base,
      '--spread': spread,
      '--saturation': 100,
      '--lightness': 60,
      '--radius': '2',
      '--border': '2',
      '--backdrop': 'hsl(0 0% 60% / 0.12)',
      '--backup-border': 'rgba(255,255,255,0.2)',
      '--size': '600',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 400) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      '--glow-brightness': 25 * intensity,
      '--border-spot-opacity': 1,
      '--border-light-opacity': 0.8,
      backgroundImage: 'none',
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative' as const,
      touchAction: 'none' as const,
    };

    // Add width and height if provided
    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  return (
    <motion.div
      ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize && !width && !height ? 'aspect-[3/4]' : ''}
          rounded-sm 
          relative 
          grid 
          grid-rows-[1fr_auto] 
          shadow-[0_1rem_2rem_-1rem_black] 
          p-4 
          gap-4 
          ${className}
        `}
        {...props}
      >
      <div ref={innerRef} data-glow></div>
      {children}
    </motion.div>
  );
};

export { GlowCard }
