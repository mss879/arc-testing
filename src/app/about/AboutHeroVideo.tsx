"use client";

import { useRef, useEffect } from "react";

/**
 * Client-side video component for the About hero section.
 * Extracted from the Server Component to prevent hydration mismatch —
 * browsers (and extensions) modify <video> attributes (autoplay state,
 * custom data attributes) after the initial server render.
 */
export default function AboutHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set attributes programmatically to avoid SSR/client mismatch
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play().catch(() => {
      // Autoplay blocked — silent fallback, video stays paused
    });
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 1 }}
      suppressHydrationWarning
    >
      <source src="/about-hero.mp4" type="video/mp4" />
    </video>
  );
}
