"use client";

import { useState } from "react";

const initialNodes = [
  { id: 'email', x: 140, y: 80,  label: 'Email Trigger', sub: 'IMAP',       icon: '✉',   accent: false },
  { id: 'edit1', x: 300, y: 80,  label: 'Edit Fields',   sub: 'Manual',     icon: '▬',   accent: false },
  { id: 'agent', x: 470, y: 80,  label: 'AI Agent',      sub: 'Tools Agent', icon: '⚡',  accent: true  },
  { id: 'code',  x: 640, y: 80,  label: 'Code',          sub: '',           icon: '</>', accent: false },
  { id: 'edit2', x: 800, y: 80,  label: 'Edit Fields',   sub: 'Manual',     icon: '▬',   accent: false },
  { id: 'tele',  x: 400, y: 230, label: 'Telegram',      sub: 'sendAndWait', icon: '✈',   accent: false },
  { id: 'iff',   x: 560, y: 230, label: 'If',            sub: '',           icon: '⇒',   accent: false },
  { id: 'send',  x: 720, y: 230, label: 'Send Email',    sub: 'Send',       icon: '▶',   accent: false },
];

const edges = [
  ['email', 'edit1'],
  ['edit1', 'agent'],
  ['agent', 'code'],
  ['code',  'edit2'],
  ['agent', 'tele'],
  ['tele',  'iff'],
  ['iff',   'send'],
];

export function WorkflowCanvas() {
  const [nodes, setNodes] = useState(initialNodes);

  // Constants for anchor calculations
  const NODE_WIDTH = 140;
  const NODE_HEIGHT = 60; // Approximate height of the node based on padding and content

  return (
    <section className="w-full border-t border-[rgba(255,255,255,0.06)] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Visual Logic Routing</h2>
          <p className="text-[#888888] text-lg max-w-2xl">High-performance autonomous routing logic editor.</p>
        </div>

        <div className="relative w-full h-[400px] border border-[rgba(255,255,255,0.06)] rounded-2xl bg-dotted-grid overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          {/* SVG Connection Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {edges.map((edge, idx) => {
              const sourceNode = nodes.find(n => n.id === edge[0]);
              const targetNode = nodes.find(n => n.id === edge[1]);
              
              if (!sourceNode || !targetNode) return null;

              // Calculate Anchor Points
              const startX = sourceNode.x + NODE_WIDTH; // Right-middle of source
              const startY = sourceNode.y + NODE_HEIGHT / 2;
              const endX = targetNode.x; // Left-middle of target
              const endY = targetNode.y + NODE_HEIGHT / 2;
              
              // Cubic bezier formula for orthogonal flowing right angles
              const pathD = `M ${startX} ${startY} C ${startX + 50} ${startY}, ${endX - 50} ${endY}, ${endX} ${endY}`;

              return (
                <g key={`${edge[0]}-${edge[1]}-${idx}`}>
                  {/* Connection Path */}
                  <path 
                    d={pathD}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                  
                  {/* Data Packet Animation */}
                  <circle r="3" fill="#ffffff" filter="drop-shadow(0 0 4px #fff)">
                    <animateMotion 
                      dur="2.5s" 
                      repeatCount="indefinite" 
                      path={pathD} 
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* HTML Node Layer */}
          {nodes.map(node => {
            const isAccent = node.accent === true;
            
            return (
              <div
                key={node.id}
                className={`absolute bg-black/60 backdrop-blur-md border rounded-lg p-3 flex items-center gap-3 z-10 transition-shadow ${
                  isAccent 
                    ? "shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white/40 text-white" 
                    : "border-white/10 text-[#888888]"
                }`}
                style={{
                  left: node.x,
                  top: node.y,
                  width: NODE_WIDTH, // Fixed width for precise anchor calculation
                }}
              >
                {/* Node Icon */}
                <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded text-sm ${
                  isAccent ? 'bg-white text-black' : 'bg-[#1a1a1a] border border-white/10 text-white'
                }`}>
                  {node.icon}
                </div>
                
                {/* Node Text */}
                <div className="flex flex-col min-w-0">
                  <span className={`font-bold tracking-tight text-sm truncate leading-tight ${isAccent ? 'text-white' : 'text-neutral-200'}`}>
                    {node.label}
                  </span>
                  {node.sub && (
                    <span className="text-[10px] uppercase tracking-widest font-mono mt-0.5 truncate leading-none">
                      {node.sub}
                    </span>
                  )}
                </div>

                {/* Handles (Input/Output Ports) */}
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50" />
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
