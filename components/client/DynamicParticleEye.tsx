"use client";

import dynamic from "next/dynamic";

export const ParticleEye = dynamic(
  () => import("@/components/client/ParticleEye").then((mod) => mod.ParticleEye),
  {
    ssr: false,
    loading: () => <div className="w-full h-[600px] bg-black border border-[rgba(255,255,255,0.06)] rounded-2xl flex items-center justify-center"><p className="text-neutral-500 animate-pulse font-mono text-sm tracking-widest">INITIALIZING MESH...</p></div>,
  }
);
