"use client";

import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

// Tech-inspired Scramble Text Effect
const ScrambleText = memo(({ text, onComplete }: { text: string, onComplete: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startScramble = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayedText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (letter === " ") return " ";
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Wait 0.8s after text is fully readable before continuing
        }

        iteration += 0.66; // Slowed down decoding (takes ~3 seconds for 33 chars)
      }, 60); // 60ms per tick
    };

    startScramble();

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <div className="font-mono text-lg md:text-2xl lg:text-4xl text-white tracking-widest text-center uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] leading-relaxed">
      {displayedText}
    </div>
  );
});
ScrambleText.displayName = "ScrambleText";

const LoadingScreen = memo(({ onLoadComplete }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-[#050505] overflow-hidden"
      >
        {/* Tech Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 115, 22, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            backgroundPosition: "center center"
          }}
        />

        {/* Ambient Glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[80px] z-0"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)",
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center gap-12 w-full max-w-4xl px-6">
          
          {/* 3D Gyroscopic Arc Core */}
          <div 
            className="relative w-32 h-32 md:w-40 md:h-40 mb-12 flex items-center justify-center"
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            {/* Outer Ring */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(249,115,22,0.6)" strokeWidth="1" />
              {/* Orbital node perfectly tracked on path */}
              <circle cx="50" cy="2" r="2" fill="#f97316" style={{ filter: "drop-shadow(0 0 6px #f97316)" }} />
            </motion.svg>

            {/* Middle Ring */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: [0, 360], rotateX: [0, -180] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <circle 
                cx="50" cy="50" r="38" 
                fill="none" 
                stroke="rgba(249,115,22,0.6)" 
                strokeWidth="1.5" 
              />
            </motion.svg>

            {/* Inner Ring */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateZ: [0, 360], rotateX: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <circle 
                cx="50" cy="50" r="28" 
                fill="none" 
                stroke="rgba(249,115,22,0.6)" 
                strokeWidth="1.5" 
              />
              <circle cx="22" cy="50" r="1.5" fill="#fff" style={{ filter: "drop-shadow(0 0 4px #fff)" }} />
            </motion.svg>

            {/* Central Core Sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <motion.div
                className="w-6 h-6 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full flex items-center justify-center"
                style={{ boxShadow: "0 0 25px 8px rgba(249,115,22,0.6)" }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 bg-white rounded-full opacity-90 shadow-[0_0_8px_#fff]" />
              </motion.div>
            </div>
          </div>

          {/* Scrambled Text */}
          <div className="w-full flex flex-col items-center gap-6">
            <ScrambleText text="TRANSFORMING VISIONS INTO REALITY" onComplete={onLoadComplete} />
            
            <div className="w-full max-w-sm flex justify-between text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-widest mt-4">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Initializing Core...
              </motion.span>
              <span>SYS.ARC.AI // V.2.0.4</span>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
});
LoadingScreen.displayName = "LoadingScreen";

export default LoadingScreen;
