"use client";

import { useEffect, useState, memo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Torus, Sphere } from "@react-three/drei";
import * as THREE from "three";

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
    <div className="font-mono text-xl md:text-3xl lg:text-4xl text-white tracking-widest text-center uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] leading-relaxed px-4">
      {displayedText}
    </div>
  );
});
ScrambleText.displayName = "ScrambleText";

const AtomCore = () => {
  const outerRef = useRef<THREE.Group>(null);
  const middleRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (outerRef.current) outerRef.current.rotation.y += delta * 0.5;
    if (middleRef.current) middleRef.current.rotation.x += delta * 0.8;
    if (innerRef.current) innerRef.current.rotation.z += delta * 1.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Outer Ring */}
      <group ref={outerRef}>
        <Torus args={[2.2, 0.04, 12, 48]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial color="#f97316" metalness={1} roughness={0.15} />
        </Torus>
      </group>

      {/* Middle Ring */}
      <group ref={middleRef}>
        <Torus args={[1.7, 0.04, 12, 48]} rotation={[0, Math.PI / 3, 0]}>
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.15} />
        </Torus>
      </group>

      {/* Inner Ring */}
      <group ref={innerRef}>
        <Torus args={[1.2, 0.04, 12, 48]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#f97316" metalness={1} roughness={0.15} />
        </Torus>
      </group>

      {/* The glowing plasma core */}
      <Sphere args={[0.4, 16, 16]}>
        <meshBasicMaterial color="#f97316" />
      </Sphere>

      {/* Light emitted from the core */}
      <pointLight color="#f97316" intensity={40} distance={10} decay={2} />
    </Float>
  );
};

const LoadingScreen = memo(({ onLoadComplete }: LoadingScreenProps) => {
  const container = useRef<HTMLDivElement>(null);



  return (
    <AnimatePresence>
      <motion.div
        ref={container}
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

          {/* True WebGL 3D Glass Core */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={1} gl={{ antialias: false, powerPreference: "high-performance" }} performance={{ min: 0.5 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Environment preset="city" resolution={32} frames={1} />
              <AtomCore />
            </Canvas>
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
