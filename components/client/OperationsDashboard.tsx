"use client";

import { motion } from "framer-motion";

export function OperationsDashboard() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 bg-dotted-grid border-t border-[rgba(255,255,255,0.06)]">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Optimized for performance</h2>
        <p className="text-lg text-[#888888]">Real-time observability and auto-scaling telemetry.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 1. System Load: The Precision Radial Gauge */}
        <div className="bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 flex flex-col justify-center h-[300px]">
          <h3 className="text-xl font-semibold text-white mb-6">System Load</h3>
          <div className="flex items-center justify-between w-full h-full">
            {/* Left Stats */}
            <div className="flex flex-col gap-6 w-1/3">
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-mono tracking-tighter text-white">99%</span>
                <span className="text-[10px] uppercase tracking-widest text-[#888888]">CACHE</span>
              </div>
              <div className="w-full h-px bg-[rgba(255,255,255,0.1)]" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-mono tracking-tighter text-white">6M</span>
                <span className="text-[10px] uppercase tracking-widest text-[#888888]">UPTIME</span>
              </div>
            </div>

            {/* Right Gauge */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100">
                {/* Outer Tick Ring */}
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="1.5 4.5" />
                {/* Inner Track */}
                <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                {/* Inner Progress Arc */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="34"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="213.6"
                  initial={{ strokeDashoffset: 213.6 }}
                  whileInView={{ strokeDashoffset: 213.6 - (213.6 * 0.75) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ rotate: -90, transformOrigin: "50% 50%", filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}
                />
              </svg>
              <div className="flex flex-col items-center justify-center z-10 text-center bg-[#0a0a0a] rounded-full w-[52px] h-[52px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <span className="text-2xl font-bold font-mono text-white tracking-tighter leading-none">15</span>
              </div>
              <span className="absolute bottom-[-20px] text-[8px] uppercase tracking-[0.2em] text-[#888888] font-mono text-center">Core<br/>Systems</span>
            </div>
          </div>
        </div>

        {/* 2. Token Usage: The Half-Circle Speedometer */}
        <div className="bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 flex flex-col justify-between h-[300px]">
          <h3 className="text-xl font-semibold text-white mb-4">Token Usage</h3>
          
          <div className="relative w-full flex-grow flex items-end justify-center mb-6">
            <div className="relative w-64 h-32 overflow-hidden">
              <svg className="absolute bottom-0 w-full h-full overflow-visible" viewBox="0 0 200 100">
                {/* The Track */}
                <path d="M 10 90 A 80 80 0 0 1 190 90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="16" strokeLinecap="round" />
                {/* The Arc */}
                <motion.path 
                  d="M 10 90 A 80 80 0 0 1 190 90" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="16" 
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 251.2 - (251.2 * 0.5) }} // Fill halfway
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.4))" }}
                />
                
                {/* The Needle */}
                <motion.g
                  initial={{ rotate: -90 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "100px 90px" }}
                >
                  <polygon points="96,90 104,90 100,20" fill="rgba(255,255,255,0.9)" />
                  <circle cx="100" cy="90" r="8" fill="#ffffff" className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                </motion.g>
              </svg>
              {/* Center Stats */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-2">
                <span className="text-4xl font-bold font-mono tracking-tighter text-white bg-[rgba(20,20,20,0.8)] backdrop-blur-md px-4 rounded shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.06)] z-10">345</span>
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="flex justify-between items-center w-full mt-auto pt-4 border-t border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase">152 Total Queries</span>
            <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase">115 Active Nodes</span>
          </div>
        </div>

        {/* 3. Growth Vector: Financial-Grade Bezier Graph */}
        <div className="bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 flex flex-row lg:col-span-2 relative h-[300px] overflow-hidden">
          {/* Left Stats */}
          <div className="w-1/3 flex flex-col justify-center z-10 pr-8 border-r border-[rgba(255,255,255,0.06)]">
            <h3 className="text-xl font-semibold text-white mb-2">Growth Vector</h3>
            <span className="text-7xl font-bold font-mono tracking-tighter text-white">82%</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#888888] mt-2 font-bold">Net Growth</span>
          </div>
          
          {/* Right Graph */}
          <div className="w-2/3 h-full relative z-0 pl-8 flex items-center">
            <svg className="w-full h-[200px] overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 150">
              <defs>
                <linearGradient id="bezierGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>

              {/* Gridlines */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Gradient Fill under path */}
              <motion.path
                d="M 0 150 L 0 120 C 50 120, 100 70, 150 90 C 200 110, 250 40, 300 60 S 400 10, 500 20 L 500 150 Z"
                fill="url(#bezierGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                viewport={{ once: true }}
              />

              {/* The crisp white stroke line path */}
              <motion.path
                d="M 0 120 C 50 120, 100 70, 150 90 C 200 110, 250 40, 300 60 S 400 10, 500 20"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={{ filter: "drop-shadow(0 4px 6px rgba(255,255,255,0.5))" }}
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
