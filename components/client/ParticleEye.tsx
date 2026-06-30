"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function EyeParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;
  const size = 30; 
  
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { positions, basePositions } = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    const base = new Float32Array(count * count * 3);
    
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const px = (x / count - 0.5) * size;
        const py = (y / count - 0.5) * size;
        
        pos[i] = px;
        pos[i + 1] = py;
        pos[i + 2] = 0;
        
        base[i] = px;
        base[i + 1] = py;
        base[i + 2] = 0;
        
        i += 3;
      }
    }
    
    return { positions: pos, basePositions: base };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geometry = pointsRef.current.geometry;
    const pos = geometry.attributes.position.array as Float32Array;
    
    const time = state.clock.elapsedTime;
    const targetPupilX = mouse.x * 2.5;
    const targetPupilY = mouse.y * 1.5;
    
    for (let i = 0; i < pos.length; i += 3) {
      const bx = basePositions[i];
      const by = basePositions[i + 1];
      
      const eyeOuter = Math.pow(bx / 10, 2) + Math.pow(by / 4, 2);
      let z = 0;
      
      if (eyeOuter < 1) {
        z = Math.sqrt(1 - eyeOuter) * 3;
        
        const dx = bx - targetPupilX;
        const dy = by - targetPupilY;
        const distToPupil = Math.sqrt(dx * dx + dy * dy);
        
        if (distToPupil < 1.5) {
          z -= (1.5 - distToPupil) * 3;
        } else if (distToPupil < 2.5) {
          z += (2.5 - distToPupil) * 1.0;
        }
        
        z += Math.sin(bx * 1.5 + time) * 0.15 + Math.cos(by * 1.5 + time) * 0.15;
      } else {
        z = -10; // Hide points outside the eye mask
      }
      
      pos[i + 2] += (z - pos[i + 2]) * 0.1;
    }
    
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="rgba(255, 255, 255, 0.9)"
        transparent
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleEye() {
  return (
    <div className="w-full h-[600px] bg-black relative overflow-hidden flex flex-col items-center justify-center border border-[rgba(255,255,255,0.06)] rounded-2xl">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
          <EyeParticles />
        </Canvas>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_90%)]" />
      <div className="relative z-10 text-center pointer-events-none mt-auto pb-8">
        <p className="text-neutral-500 font-mono text-sm tracking-widest uppercase">Visual Cortex Telemetry</p>
      </div>
    </div>
  );
}
