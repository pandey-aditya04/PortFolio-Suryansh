"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  title: string;
  thumbnail?: string;
}

export function VideoPlayer({ src, title, thumbnail }: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        poster={thumbnail}
      />
      
      {/* Overlay Title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-4 left-4 opacity-0 transition-opacity group-hover:opacity-100">
        <h4 className="text-sm font-medium text-white">{title}</h4>
      </div>

      {/* Mute/Unmute Toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
