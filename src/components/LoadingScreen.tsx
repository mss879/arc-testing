"use client";

import { useEffect, useState, memo, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

// ==========================================
// 1. WebGL Data Stream (Flying Particles - Optimized via InstancedMesh)
// ==========================================
const DataStream = () => {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const particleCount = 100;
    
    const particles = useMemo(() => {
        return new Array(particleCount).fill(0).map(() => ({
            x: (Math.random() - 0.5) * 40,
            y: (Math.random() - 0.5) * 20,
            z: (Math.random() - 0.5) * 40,
            speed: Math.random() * 0.4 + 0.1, 
            scaleZ: Math.random() * 2 + 0.5
        }));
    }, []);

    const tempObject = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        if (!meshRef.current) return;
        particles.forEach((p, i) => {
            p.z += p.speed;
            if (p.z > 20) {
                p.z = -20;
            }
            tempObject.position.set(p.x, p.y, p.z);
            tempObject.scale.set(1, 1, p.scaleZ);
            tempObject.updateMatrix();
            meshRef.current!.setMatrixAt(i, tempObject.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null as any, null as any, particleCount]}>
            <boxGeometry args={[0.05, 0.05, 1]} />
            <meshBasicMaterial color="#f97316" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
        </instancedMesh>
    );
};

// ==========================================
// 2. Voxel Font Generator
// ==========================================
const FONT: Record<string, string[]> = {
  'A': ["010","101","111","101","101"],
  'B': ["110","101","110","101","110"],
  'D': ["110","101","101","101","110"],
  'E': ["111","100","110","100","111"],
  'I': ["111","010","010","010","111"],
  'L': ["100","100","100","100","111"],
  'N': ["1001","1101","1011","1001","1001"],
  'O': ["010","101","101","101","010"],
  'S': ["011","100","010","001","110"],
  'U': ["101","101","101","101","011"],
  'V': ["101","101","101","101","010"],
  'Y': ["101","101","010","010","010"],
  ' ': ["00","00","00","00","00"]
};

const generateTextBlocks = (lines: string[]) => {
    const blocks = [];
    const spacing = 1.1; 
    let currentY = 0;

    lines.forEach((line) => {
        let currentX = 0;
        const lineBlocks = [];

        for (let i = 0; i < line.length; i++) {
            const char = line[i].toUpperCase();
            const fontChar = FONT[char] || FONT[' '];
            
            const charWidth = fontChar[0].length;
            const charHeight = fontChar.length;

            for (let r = 0; r < charHeight; r++) {
                for (let c = 0; c < charWidth; c++) {
                    if (fontChar[r][c] === '1') {
                        lineBlocks.push({
                            x: currentX + c * spacing,
                            y: currentY - r * spacing
                        });
                    }
                }
            }
            currentX += (charWidth + 1) * spacing;
        }

        const lineWidth = currentX - spacing;
        lineBlocks.forEach(b => {
            blocks.push({
                x: b.x - lineWidth / 2,
                finalY: b.y,
                z: 0,
                dropHeight: b.y + 30 + Math.random() * 10
            });
        });

        currentY -= 7 * spacing;
    });

    if (blocks.length > 0) {
        let minY = blocks[0].finalY;
        let maxY = blocks[0].finalY;
        blocks.forEach(b => {
            if (b.finalY < minY) minY = b.finalY;
            if (b.finalY > maxY) maxY = b.finalY;
        });
        const yOffset = -(maxY + minY) / 2;
        blocks.forEach(b => {
            b.finalY += yOffset;
            b.dropHeight += yOffset;
        });
    }

    return blocks;
};

// ==========================================
// 3. Isometric Builder (Ultra-Stable Instanced Animation)
// ==========================================
const IsometricCity = ({ onComplete }: { onComplete: () => void }) => {
  const masterGroupRef = useRef<THREE.Group>(null);
  const gridRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  const blocks = useMemo(() => {
    return generateTextBlocks(["BEYOND", "VISUALS"]);
  }, []);

  const blockData = useMemo(() => {
    return blocks.map(block => ({
      x: block.x,
      y: block.dropHeight,
      finalY: block.finalY,
      dropHeight: block.dropHeight,
      z: block.z,
      rx: 0,
      ry: 0,
      rz: 0,
      scale: 0
    }));
  }, [blocks]);

  // Store the latest callback in a ref to decouple it from effect cleanup
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Utilize GSAP context to ensure clean initialization and complete cleanup upon unmount
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onCompleteRef.current();
        }
      });

      // 1. Subtle camera rotation
      gsap.set(masterGroupRef.current?.rotation || {}, { x: 0.6, y: -0.6, z: 0 });
      tl.to(masterGroupRef.current?.rotation || {}, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2.3,
        ease: "power2.out"
      }, 0);

      // 2. Realistic block drop: start at scale 0 in the air with rotation, scale up and snap straight on impact
      const sortedIndices = blockData.map((_, i) => i).sort((a, b) => blockData[a].finalY - blockData[b].finalY);
      
      sortedIndices.forEach((index, i) => {
        const block = blockData[index];
        
        // Setup initial physical drop state
        gsap.set(block, {
          scale: 0,
          rx: (Math.random() - 0.5) * Math.PI * 0.4,
          ry: (Math.random() - 0.5) * Math.PI * 0.4
        });

        // Drop animation with beautiful physical bounce and scale growth
        tl.to(block, {
          y: block.finalY,
          scale: 1,
          rx: 0,
          ry: 0,
          duration: 0.9,
          ease: "bounce.out",
          delay: i * 0.012
        }, 0);
      });

      // 3. Emissive pulse overcharge when construction finishes (starts at 2.3s)
      tl.to(materialRef.current, {
        emissiveIntensity: 4,
        duration: 0.2,
        ease: "power4.in"
      }, 2.3);

      tl.to(materialRef.current, {
        emissiveIntensity: 0.2,
        duration: 0.8,
        ease: "power2.out"
      }, 2.5);

      // Scale blocks up to close the gaps during the power flare (starts at 2.3s)
      blockData.forEach((block) => {
        // Grow to 1.16 to close the gaps (1.16 * 0.95 = 1.102, perfectly touching/overlapping)
        tl.to(block, {
          scale: 1.16,
          duration: 0.25,
          ease: "power2.out"
        }, 2.3);

        // Shrink back to 1.0 before collapse begins
        tl.to(block, {
          scale: 1.0,
          duration: 0.4,
          ease: "power2.inOut"
        }, 3.1);
      });

      // 4. Matrix collapse: structural fall down into space (delayed to hold letters for 1.3 seconds)
      const collapseIndices = blockData.map((_, i) => i).sort((a, b) => blockData[a].finalY - blockData[b].finalY);
      collapseIndices.forEach((index, i) => {
        const block = blockData[index];
        tl.to(block, {
          y: -40,
          rx: (Math.random() - 0.5) * Math.PI * 4,
          ry: (Math.random() - 0.5) * Math.PI * 4,
          rz: (Math.random() - 0.5) * Math.PI * 4,
          scale: 0,
          duration: 0.8,
          ease: "power3.in"
        }, 3.6 + i * 0.005);
      });
    });

    return () => ctx.revert();
  }, [blockData]);

  const tempObject = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
      // 1. Matrix block updates
      if (meshRef.current) {
        blockData.forEach((block, i) => {
          tempObject.position.set(block.x, block.y, block.z);
          tempObject.rotation.set(block.rx, block.ry, block.rz);
          tempObject.scale.set(block.scale, block.scale, block.scale);
          tempObject.updateMatrix();
          meshRef.current!.setMatrixAt(i, tempObject.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
      }

      // 2. High-intensity camera rumble during power flare (2.3s to 3.0s)
      if (masterGroupRef.current) {
        if (state.clock.elapsedTime > 2.3 && state.clock.elapsedTime < 3.0) {
          masterGroupRef.current.position.x = (Math.random() - 0.5) * 0.12;
          masterGroupRef.current.position.y = (Math.random() - 0.5) * 0.12;
          masterGroupRef.current.position.z = (Math.random() - 0.5) * 0.12;
        } else {
          masterGroupRef.current.position.set(0, 0, 0);
        }
      }

      // 3. Grid floor movement
      if (gridRef.current) {
          gridRef.current.position.z += delta * 10;
          if (gridRef.current.position.z > 5) gridRef.current.position.z = 0;
      }
  });

  return (
    <group position={[0, 0, 0]}>
      <DataStream />

      <group ref={masterGroupRef}>
        <instancedMesh 
          ref={meshRef} 
          args={[null as any, null as any, blocks.length]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.95, 0.95, 0.95]} />
          <meshStandardMaterial 
            ref={materialRef}
            color="#f97316"
            roughness={0.2}
            metalness={0.6}
            emissive="#f97316"
            emissiveIntensity={0.2} 
          />
        </instancedMesh>
      </group>

      <group ref={gridRef} position={[0, -5, 0]}>
          <Grid infiniteGrid fadeDistance={40} sectionColor="#f97316" cellColor="#f97316" sectionThickness={1.5} cellThickness={0.5} />
      </group>
    </group>
  );
};

// ==========================================
// 4. Main Loading Screen Component
// ==========================================
const LoadingScreen = memo(({ onLoadComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setZoomLevel(10.5);
      } else if (width < 768) {
        setZoomLevel(13.5);
      } else if (width < 1024) {
        setZoomLevel(14);
      } else {
        setZoomLevel(16);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleComplete = useCallback(() => {
    setIsExiting(true);
    setTimeout(onLoadComplete, 1000);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[70] overflow-hidden select-none pointer-events-none">
      
      {/* Left Sliding Panel (Door) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={isExiting ? { x: "-50vw" } : { x: "0%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute left-0 top-0 w-[50vw] h-full bg-[#020202] z-10 pointer-events-auto shadow-[0_0_20px_rgba(249,115,22,0.05)]"
      >
        {/* Glowing seam border split details - only rendered during exit split transition */}
        {isExiting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-0 w-[1.5px] h-full bg-orange-500 shadow-[0_0_10px_#f97316,0_0_4px_#f97316]"
          />
        )}
      </motion.div>

      {/* Right Sliding Panel (Door) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={isExiting ? { x: "50vw" } : { x: "0%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute right-0 top-0 w-[50vw] h-full bg-[#020202] z-10 pointer-events-auto shadow-[0_0_20px_rgba(249,115,22,0.05)]"
      >
        {/* Glowing seam border split details - only rendered during exit split transition */}
        {isExiting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-0 w-[1.5px] h-full bg-orange-500 shadow-[0_0_10px_#f97316,0_0_4px_#f97316]"
          />
        )}
      </motion.div>

      {/* 3D WebGL Canvas Layer (Fades out when exiting) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 z-20 w-full h-full pointer-events-auto"
      >
        {/* Subtle blueprint grid overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

        <Canvas orthographic camera={{ position: [0, 0, 20], zoom: zoomLevel }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }} shadows className="w-full h-full">
          <color attach="background" args={["#020202"]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" castShadow shadow-mapSize={[1024, 1024]} />
          <directionalLight position={[-10, 10, -10]} intensity={0.5} color="#f97316" />
          
          <IsometricCity onComplete={handleComplete} />
        </Canvas>
      </motion.div>
      
    </div>
  );
});
LoadingScreen.displayName = "LoadingScreen";

export default LoadingScreen;
