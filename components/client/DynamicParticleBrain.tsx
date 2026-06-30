'use client';
import dynamic from 'next/dynamic';
export const ParticleBrain = dynamic(() => import('./ParticleBrain').then((mod) => mod.ParticleBrain), { 
  ssr: false,
  loading: () => <div className="w-full h-[500px] flex items-center justify-center text-white font-mono uppercase tracking-widest">Loading Neural Cluster...</div>
});
