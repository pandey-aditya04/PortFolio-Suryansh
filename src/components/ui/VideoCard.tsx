"use client";

import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface VideoCardProps {
  videoUrl: string;
  title: string;
}

export function VideoCard({ videoUrl, title }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="aspect-video w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
      />

      {/* Overlay Controls */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 transition-opacity group-hover:opacity-100 bg-black/40">
        <div className="flex justify-between items-start">
          <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            AI Video
          </span>
          <button
            onClick={toggleMute}
            className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-end justify-between">
          <h4 className="text-sm font-semibold text-white">{title}</h4>
        </div>
      </div>
    </div>
  );
}
