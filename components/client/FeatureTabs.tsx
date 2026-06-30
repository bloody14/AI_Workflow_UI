"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Discovery", "Analysis", "Training", "Deploy"];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Full Lifecycle Control</h2>
        <p className="text-lg text-[#888888]">Segmented insights into your agent's neural performance.</p>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Bar */}
        <div className="flex gap-8 mb-8 border-b border-[rgba(255,255,255,0.06)] w-full overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-sm uppercase tracking-widest font-mono transition-colors border-b-2 -mb-[1px] whitespace-nowrap ${
                activeTab === tab
                  ? "text-white border-white"
                  : "text-[#7a7a7a] border-transparent hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="w-full min-h-[500px] relative overflow-hidden bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.06)] rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 p-6 md:p-12 flex flex-col h-full w-full"
            >
              
              {/* DISCOVERY TAB */}
              {activeTab === "Discovery" && (
                <div className="flex flex-col h-full w-full font-mono gap-6">
                  {/* Top Bar Terminal */}
                  <div className="w-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.06)] rounded p-4 flex items-center text-xs text-[#888888]">
                    <span className="text-white mr-2">{">"}</span>
                    <span>grep data_lake --clusters</span>
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="w-2 h-4 bg-white ml-2 inline-block"
                    />
                  </div>

                  {/* Node Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-grow content-start">
                    {[
                      { id: "NODE-01A", cap: "84%" },
                      { id: "NODE-02B", cap: "62%" },
                      { id: "NODE-03C", cap: "91%" },
                      { id: "NODE-04D", cap: "45%" },
                      { id: "NODE-05E", cap: "78%" },
                      { id: "NODE-06F", cap: "55%" },
                    ].map((node, i) => (
                      <div key={i} className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded p-5 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <div className="flex justify-between items-start mb-6">
                          <span className="text-white text-[11px] tracking-widest">{node.id}</span>
                          <span className="text-green-500 text-[10px] uppercase tracking-wider font-bold">Active</span>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between text-[10px] text-[#888888] mb-2 uppercase tracking-widest">
                            <span>Capacity</span>
                            <span>{node.cap}</span>
                          </div>
                          <div className="w-full h-[1px] bg-[rgba(255,255,255,0.1)]">
                            <motion.div 
                              className="h-full bg-white"
                              initial={{ width: 0 }}
                              animate={{ width: node.cap }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Log */}
                  <div className="w-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.06)] rounded p-4 text-[11px] text-[#888888] h-[90px] overflow-hidden flex flex-col justify-end mt-auto leading-relaxed">
                    <p>{"[SYS] Initiating parallel stream ingestion..."}</p>
                    <p>{"[SYS] Partitioning raw tensors to NODE-01A, NODE-03C..."}</p>
                    <p className="text-white">{"[SUCCESS] 42.8TB unstructured data indexed."}</p>
                  </div>
                </div>
              )}

              {/* ANALYSIS TAB */}
              {activeTab === "Analysis" && (
                <div className="flex flex-col h-full w-full font-mono max-w-2xl">
                  <h3 className="text-white text-sm tracking-widest uppercase mb-8 border-b border-[rgba(255,255,255,0.06)] pb-4">
                    Agent Evaluation Metrics
                  </h3>
                  
                  <div className="space-y-8 flex-grow">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between text-[11px] text-[#888888] uppercase tracking-widest">
                        <span>Logic Accuracy</span>
                        <span className="text-white">9/10</span>
                      </div>
                      <div className="w-full h-[1px] bg-[rgba(255,255,255,0.1)] overflow-hidden">
                        <div className="w-[90%] h-full bg-white" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between text-[11px] text-[#888888] uppercase tracking-widest">
                        <span>Processing Speed</span>
                        <span className="text-white">8/10</span>
                      </div>
                      <div className="w-full h-[1px] bg-[rgba(255,255,255,0.1)] overflow-hidden">
                        <div className="w-[80%] h-full bg-white" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between text-[11px] text-[#888888] uppercase tracking-widest">
                        <span>Uptime Guarantee</span>
                        <span className="text-[#ff0055]">100%</span>
                      </div>
                      <div className="w-full h-[1px] bg-[rgba(255,255,255,0.1)] overflow-hidden">
                        <div className="w-full h-full bg-[#ff0055]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 bg-[rgba(0,0,0,0.5)] p-4 border border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                    <p className="text-[#888888] text-[10px] uppercase tracking-[0.2em]">System Status</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-green-500 font-bold">Nominal</p>
                  </div>
                </div>
              )}

              {/* TRAINING TAB */}
              {activeTab === "Training" && (
                <div className="flex flex-col md:flex-row h-full w-full font-mono gap-6">
                  {/* Left Pane: Terminal Logs */}
                  <div className="w-full md:w-1/2 h-full min-h-[250px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 text-[11px] overflow-hidden flex flex-col gap-3 leading-relaxed">
                    <p className="text-[#888888]">Initializing <span className="text-white font-bold">CUDA</span> cores...</p>
                    <p className="text-[#888888]">Loading dataset <span className="text-white font-bold">weights_v4.pt</span>...</p>
                    <p className="text-[#888888]">[Epoch 12/50] Loss: 0.0891 - Accuracy: 92.4%</p>
                    <p className="text-[#888888]">[Epoch 13/50] Loss: 0.0612 - Accuracy: 95.1%</p>
                    <p className="text-[#888888]"><span className="text-white font-bold">Optimizing</span> neural weights...</p>
                    <p className="text-[#888888]">Applying <span className="text-white font-bold">K-means</span> clustering...</p>
                    <p className="text-white font-bold mt-2">[Epoch 14/50] Loss: 0.0432 - Accuracy: 98.2%</p>
                    <motion.div 
                      className="w-2 h-4 bg-white mt-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Right Pane: Loss Graph */}
                  <div className="w-full md:w-1/2 h-full min-h-[250px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-lg p-6 flex flex-col relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <h3 className="text-white text-[10px] tracking-widest uppercase mb-4 z-10">Loss Curve</h3>
                    <div className="flex-grow w-full relative z-10">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path 
                          d="M 0,10 C 30,10 40,60 70,80 C 85,90 95,95 100,98"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                        {/* Static Grid Lines */}
                        <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                        <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                      </svg>
                    </div>
                    {/* Dark gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent pointer-events-none z-0" />
                  </div>
                </div>
              )}

              {/* DEPLOY TAB */}
              {activeTab === "Deploy" && (
                <div className="flex flex-col h-full w-full font-mono items-center justify-center py-12">
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-4xl relative">
                    
                    {/* Connecting architecture lines (Desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-[rgba(255,255,255,0.1)] -translate-y-1/2 z-0" />
                    
                    {/* Database Tier */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="w-full md:w-1/3 bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6 flex flex-col z-10 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <span className="text-white text-[11px] tracking-widest uppercase">Database</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                      </div>
                      <div className="text-[10px] text-[#888888] uppercase tracking-widest mb-2">MongoDB Shard Cluster</div>
                      <div className="text-white text-2xl tracking-tighter">8.4K <span className="text-[10px] text-[#888888] tracking-widest uppercase ml-1">IOPS</span></div>
                    </motion.div>

                    {/* Backend Tier */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="w-full md:w-1/3 bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6 flex flex-col z-10 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <span className="text-white text-[11px] tracking-widest uppercase">Backend API</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                      </div>
                      <div className="text-[10px] text-[#888888] uppercase tracking-widest mb-2">Node.js Gateway</div>
                      <div className="text-white text-2xl tracking-tighter">1,204 <span className="text-[10px] text-[#888888] tracking-widest uppercase ml-1">REQ/S</span></div>
                    </motion.div>

                    {/* Client Tier */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="w-full md:w-1/3 bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6 flex flex-col z-10 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <span className="text-white text-[11px] tracking-widest uppercase">Client Edge</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                      </div>
                      <div className="text-[10px] text-[#888888] uppercase tracking-widest mb-2">React Global CDN</div>
                      <div className="text-white text-2xl tracking-tighter">12ms <span className="text-[10px] text-[#888888] tracking-widest uppercase ml-1">PING</span></div>
                    </motion.div>

                  </div>

                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
