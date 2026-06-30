"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

// 4 distinct zones
const ZONES = [
  { id: 'frontal', name: 'AGENT ROUTING // PRIME LOGIC', center: new THREE.Vector3(0, 0.4, 1.2), radius: 0.8 },
  { id: 'core', name: 'VECTOR DB // RAG MEMORY', center: new THREE.Vector3(0, 0, 0), radius: 0.6 },
  { id: 'rear', name: 'MULTIMODAL // VISION PARSING', center: new THREE.Vector3(0, 0.2, -1.2), radius: 0.8 },
  { id: 'base', name: 'INFRASTRUCTURE // AUTO-SCALING', center: new THREE.Vector3(0, -0.8, -0.2), radius: 0.6 }
];

function BrainMesh() {
  const meshRef = useRef<THREE.Points>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const { positions, originalPositions, colors, zoneIndices } = useMemo(() => {
    const numParticles = 3000;
    const pos = new Float32Array(numParticles * 3);
    const origPos = new Float32Array(numParticles * 3);
    const col = new Float32Array(numParticles * 3);
    const zInd = new Int32Array(numParticles);

    const baseColor = new THREE.Color("#444444"); 

    let i = 0;
    while (i < numParticles) {
      // Random point in sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * 1.5;

      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta);
      let z = r * Math.cos(phi);

      // Shape into hemispheres (flatten X slightly, elongate Z)
      x *= 0.6; // Width
      y *= 0.8; // Height
      z *= 1.2; // Length

      // Create a gap for the longitudinal fissure
      if (Math.abs(x) < 0.1) continue; 
      
      // Move hemispheres slightly apart
      if (x > 0) x += 0.05;
      else x -= 0.05;

      const pt = new THREE.Vector3(x, y, z);
      
      // Assign to a zone based on distance
      let assignedZone = -1;
      for (let zIdx = 0; zIdx < ZONES.length; zIdx++) {
        if (pt.distanceTo(ZONES[zIdx].center) < ZONES[zIdx].radius) {
          assignedZone = zIdx;
          break;
        }
      }

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      origPos[i * 3] = x;
      origPos[i * 3 + 1] = y;
      origPos[i * 3 + 2] = z;

      col[i * 3] = baseColor.r;
      col[i * 3 + 1] = baseColor.g;
      col[i * 3 + 2] = baseColor.b;

      zInd[i] = assignedZone;
      i++;
    }
    return { positions: pos, originalPositions: origPos, colors: col, zoneIndices: zInd };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    meshRef.current.rotation.y = time * 0.15; // Slow rotation

    const geo = meshRef.current.geometry;
    const pos = geo.attributes.position;
    const col = geo.attributes.color;

    const baseColor = new THREE.Color("#666666"); // Ghost-white muted
    const highlightColor = new THREE.Color("#ffffff"); // Piercing silver/white

    for (let i = 0; i < pos.count; i++) {
      const idx = i * 3;
      const ox = originalPositions[idx];
      const oy = originalPositions[idx + 1];
      const oz = originalPositions[idx + 2];
      const zIdx = zoneIndices[i];

      // Subtle breathing sine wave
      const noise = Math.sin(ox * 4 + time * 2) * 0.015;
      pos.setXYZ(i, ox + noise, oy + noise, oz + noise);

      // Color logic (Immediate change without lerp for pure math speed)
      if (hoveredZone !== null && zIdx !== -1 && ZONES[zIdx].id === hoveredZone) {
        col.setXYZ(i, highlightColor.r, highlightColor.g, highlightColor.b);
      } else {
        col.setXYZ(i, baseColor.r, baseColor.g, baseColor.b);
      }
    }
    pos.needsUpdate = true;
    col.needsUpdate = true;
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.025} vertexColors={true} transparent={true} opacity={hoveredZone ? 1.0 : 0.4} sizeAttenuation={true} />
      </points>

      {/* Invisible hitboxes for zones to trigger tooltips */}
      <group rotation-y={meshRef.current ? meshRef.current.rotation.y : 0}>
        {ZONES.map((zone) => (
          <mesh 
            key={zone.id} 
            position={zone.center}
            onPointerOver={(e) => { e.stopPropagation(); setHoveredZone(zone.id); }}
            onPointerOut={(e) => { e.stopPropagation(); setHoveredZone(null); }}
            visible={false}
          >
            <sphereGeometry args={[zone.radius, 8, 8]} />
            <meshBasicMaterial />
          </mesh>
        ))}
      </group>
      
      {/* HTML Tooltips pinned to rotating zones */}
      {ZONES.map((zone) => (
        <group key={`tooltip-${zone.id}`} position={zone.center}>
          <Html center style={{ transition: 'opacity 0.3s', opacity: hoveredZone === zone.id ? 1 : 0, pointerEvents: 'none' }}>
            <div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white whitespace-nowrap shadow-xl">
              {zone.name}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export function ParticleBrain() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if(!mounted) return <div className="absolute inset-0 bg-[#050505]" />;

  return (
    <div className="absolute inset-0 w-full h-full bg-[#050505] rounded-2xl overflow-hidden shadow-[inset_0_0_80px_rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center">
      <div className="absolute inset-0 bg-dotted-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <BrainMesh />
      </Canvas>
    </div>
  );
}
