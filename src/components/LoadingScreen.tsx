"use client";

import { useEffect, useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const TypingText = memo(({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 60); // Faster typing: 60ms per letter (22 chars × 60ms = 1.32s)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  // Split text into two lines at "INTO"
  const line1 = displayedText.slice(0, 20); // "TRANSFORMING VISIONS"
  const line2 = displayedText.slice(20); // " INTO REALITY."
  
  return (
    <p className="text-4xl md:text-6xl text-white tracking-tight text-center leading-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 900 }} role="heading" aria-level={2}>
      {line1}
      {line2 && <><br />{line2}</>}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        |
      </motion.span>
    </p>
  );
});

TypingText.displayName = 'TypingText';

const LoadingScreen = memo(({ onLoadComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 3 seconds to match typing animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadComplete, 100); // Minimal delay
          return 100;
        }
        return prev + 2; // Progress updates for 3 second duration
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black overflow-hidden"
        style={{ willChange: 'opacity' }}
      >
        {/* Static Gradient Background - Removed heavy animation for performance */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 40%, rgba(249, 115, 22, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)",
          }}
        />

        {/* Single Optimized Orb - Minimal animations for performance */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-xl"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)",
            willChange: 'transform',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Optimized Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 border border-orange-500/10"
          style={{ left: "10%", top: "20%", willChange: 'transform' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 border border-orange-400/10"
          style={{ right: "15%", bottom: "25%", willChange: 'transform' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Optimized Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="flex flex-col items-center gap-6 relative z-10">
          {/* Logo or Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypingText text="TRANSFORMING VISIONS INTO REALITY." />
          </motion.div>

          {/* Optimized Loading Bar */}
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"
              style={{ 
                width: `${progress}%`,
                willChange: 'width',
              }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
