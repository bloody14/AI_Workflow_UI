"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const studies = [
  { company: "Cigna", title: "The Fault-Tolerant Matrix", metric: "99% Uptime", desc: "Automated neural redundancy across all tier-one health logic nodes." },
  { company: "Aetna", title: "Edge Routing", metric: "12ms Latency", desc: "Global packet prioritization ensuring sub-millisecond diagnosis sync." },
  { company: "Anthem", title: "Auto-Scaling", metric: "4x Scale", desc: "Elastic compute cluster reacting dynamically to massive telemetry spikes." },
];

function CignaVisual() {
  const [glitches, setGlitches] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newGlitches = [];
      const numGlitches = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numGlitches; i++) {
        newGlitches.push(Math.floor(Math.random() * 100));
      }
      setGlitches(newGlitches);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#050505]">
      <div className="grid grid-cols-10 gap-3 absolute inset-0 content-center justify-center p-[10%]">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: glitches.includes(i) ? 1 : [0.3, 0.8, 0.3],
              backgroundColor: glitches.includes(i) ? "#ff0055" : "#00ff66"
            }}
            transition={{ 
              opacity: glitches.includes(i) ? { duration: 0.1 } : { duration: 2.5, repeat: Infinity, delay: i * 0.05 },
              backgroundColor: { duration: 0.1 }
            }}
            className="w-[4px] h-[4px] mx-auto rounded-[1px]"
            style={{ boxShadow: glitches.includes(i) ? "0 0 10px #ff0055" : "0 0 5px rgba(0, 255, 102, 0.5)" }}
          />
        ))}
      </div>
      
      <div className="z-10 bg-[rgba(5,5,5,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-xl py-8 px-12 shadow-[0_0_50px_rgba(0,0,0,1)]">
        <h3 className="text-5xl font-bold font-mono text-white tracking-tighter text-center">99%<br/><span className="text-xl text-[#888888] tracking-widest uppercase">Uptime</span></h3>
      </div>
    </div>
  );
}

function AetnaVisual() {
  const nodes = [
    { cx: 20, cy: 30 }, { cx: 80, cy: 20 }, { cx: 50, cy: 50 }, { cx: 15, cy: 80 }, { cx: 85, cy: 75 }
  ];

  const paths = [
    { d: "M 20 30 L 50 50", dur: 1 }, { d: "M 80 20 L 50 50", dur: 1.2 }, { d: "M 15 80 L 50 50", dur: 0.9 },
    { d: "M 85 75 L 50 50", dur: 1.1 }, { d: "M 20 30 L 80 20", dur: 1.5 }, { d: "M 15 80 L 85 75", dur: 2 }
  ];

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050505]">
      <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="packetGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {paths.map((p, i) => (
          <path key={`line-${i}`} d={p.d} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
        ))}

        {paths.map((p, i) => (
          <motion.path 
            key={`packet-${i}`} 
            d={p.d} 
            stroke="#ffffff" 
            strokeWidth="1.5" 
            fill="none" 
            strokeDasharray="4 200" 
            initial={{ strokeDashoffset: 200 }}
            animate={{ strokeDashoffset: -200 }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
            filter="url(#packetGlow)"
          />
        ))}

        {nodes.map((n, i) => (
          <circle key={`node-${i}`} cx={n.cx} cy={n.cy} r="2" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
        ))}
        {nodes.map((n, i) => (
          <motion.circle 
            key={`node-glow-${i}`} 
            cx={n.cx} 
            cy={n.cy} 
            r="1" 
            fill="#ffffff" 
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>
      
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-full px-5 py-2.5 flex flex-col items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
        <span className="text-[11px] text-white uppercase tracking-[0.2em] font-mono font-bold">12ms Latency</span>
      </div>
    </div>
  );
}

function AnthemVisual() {
  const [isSplit, setIsSplit] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsSplit((prev) => !prev);
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  const RingCluster = ({ transformStyle }: { transformStyle: any }) => (
    <motion.div 
      className="absolute w-[180px] h-[180px] top-1/2 left-1/2 flex items-center justify-center pointer-events-none"
      animate={transformStyle}
      transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
    >
      <motion.svg className="absolute inset-0 w-full h-full origin-center overflow-visible" viewBox="0 0 100 100" animate={{ rotate: 360 }} transition={{ duration: 12, ease: "linear", repeat: Infinity }}>
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 8" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray="1 2" />
      </motion.svg>
    </motion.div>
  );

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505]">
      <RingCluster transformStyle={isSplit ? { scale: 0.4, x: "calc(-50% - 50px)", y: "calc(-50% - 50px)" } : { scale: 1, x: "-50%", y: "-50%" }} />
      <RingCluster transformStyle={isSplit ? { scale: 0.4, x: "calc(-50% + 50px)", y: "calc(-50% - 50px)" } : { scale: 1, x: "-50%", y: "-50%" }} />
      <RingCluster transformStyle={isSplit ? { scale: 0.4, x: "calc(-50% - 50px)", y: "calc(-50% + 50px)" } : { scale: 1, x: "-50%", y: "-50%" }} />
      <RingCluster transformStyle={isSplit ? { scale: 0.4, x: "calc(-50% + 50px)", y: "calc(-50% + 50px)" } : { scale: 1, x: "-50%", y: "-50%" }} />
      
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 bg-[rgba(0,0,0,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded px-5 py-2.5 text-[10px] text-white uppercase tracking-[0.2em] font-mono shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
        {isSplit ? "4x Scale Deployed" : "Elastic Compute Core"}
      </div>
    </div>
  );
}

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 border-t border-[rgba(255,255,255,0.06)]">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Proven at scale</h2>
        <p className="text-lg text-[#888888]">Deployed across the world's most demanding infrastructure.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 min-h-[450px]">
        {/* Left Pane: Media Card */}
        <div className="w-full lg:w-1/2 h-[450px] rounded-2xl relative overflow-hidden bg-[#050505] shadow-[inset_0_0_80px_rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center">
          <div className="absolute inset-0 bg-dotted-grid opacity-20 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {activeIndex === 0 && <CignaVisual />}
              {activeIndex === 1 && <AetnaVisual />}
              {activeIndex === 2 && <AnthemVisual />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Pane: List */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
          {studies.map((study, idx) => (
            <div 
              key={study.company}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col relative overflow-hidden ${
                activeIndex === idx 
                  ? "bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] border-[rgba(255,255,255,0.06)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                  : "bg-transparent border-transparent hover:bg-[rgba(255,255,255,0.02)]"
              }`}
            >
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-bold tracking-tighter text-white">{study.company}</h3>
                <span className="font-mono text-sm uppercase tracking-widest text-white/50">{study.metric}</span>
              </div>
              <h4 className="text-lg text-white mb-2 font-medium">{study.title}</h4>
              <p className="text-sm text-[#888888]">{study.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
