"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// 3D Sphere Component
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#4c1d95"
          speed={3}
          distort={0.3}
          radius={1}
          emissive="#2e1065"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

// Particle System
function Particles({ count = 30 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function HeroBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden bg-[#030303]"
    >
      {/* 1. Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.07), transparent 80%)`,
        }}
      />

      {/* 2. Floating Glow Orb */}
      <div 
        className="absolute left-1/4 top-1/4 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full opacity-[0.15] blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse at center, #6d28d9 0%, transparent 70%)',
        }}
      />

      {/* 3. 3D Content (Sphere & Particles) */}
      <div className="absolute inset-0 flex items-center justify-end pr-20 opacity-60 lg:opacity-100">
        <div className="h-[600px] w-[600px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <AnimatedSphere />
            <Particles count={40} />
          </Canvas>
        </div>
      </div>

      {/* 4. Noise Grain Overlay (CSS/SVG fallback) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Bottom fade for smoother section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
    </div>
  );
}
