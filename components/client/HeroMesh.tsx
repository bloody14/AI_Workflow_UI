"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // 1. High-Density Geometry: Denser, premium wireframe grid (120x120)
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(120, 120, 120, 120);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positionAttribute = geometry.attributes.position;
    
    // 2. Advanced Oscillation Math (Fluid Dynamics)
    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      
      // Complex, multi-layered wave function
      const z = Math.sin(x * 0.2 + time * 0.4) * 1.5 
              + Math.sin(y * 0.2 + time * 0.3) * 1.5 
              + Math.sin(x * 0.8 - time * 0.8) * 0.3;
              
      positionAttribute.setZ(i, z);
    }
    
    positionAttribute.needsUpdate = true;
    // Slow, continuous rotation on the Z-axis
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry} 
      rotation={[-Math.PI / 2.2, 0, 0]} 
      position={[0, -3, -8]}
    >
      <meshBasicMaterial 
        color="#ffffff" 
        wireframe={true} 
        transparent={true}
        opacity={0.45} // 3. Visibility and Lighting Fixes
      />
    </mesh>
  );
}

export function HeroMesh() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-black">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        dpr={[1, 2]} // Optimize performance vs retina
        gl={{ alpha: false, antialias: false }} // Strict optimizations
      >
        {/* 3. Fog pushed back to prevent swallowing the grid early */}
        <fog attach="fog" args={["#000000", 5, 25]} />
        <WaveMesh />
      </Canvas>
    </div>
  );
}
