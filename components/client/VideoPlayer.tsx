"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export function VideoPlayer() {
  const [isPointerCoarse, setIsPointerCoarse] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: coarse)");
    setIsPointerCoarse(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsPointerCoarse(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPointerCoarse || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 border-t border-[rgba(255,255,255,0.06)]">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`w-full aspect-video rounded-2xl relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#1a1a1a_0%,#000000_100%)] border border-[rgba(255,255,255,0.06)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center ${!isPointerCoarse ? "cursor-none" : ""}`}
      >
        <div className="absolute inset-0 bg-dotted-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none" />

        {isPointerCoarse ? (
          <button className="relative z-10 bg-white text-black text-[10px] uppercase tracking-widest font-bold px-4 py-2">
            PLAY VIDEO
          </button>
        ) : (
          <motion.div
            className="absolute top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
            style={{ 
              x: cursorX, 
              y: cursorY,
              opacity: isHovering ? 1 : 0
            }}
          >
            <div className="bg-white text-black text-[10px] uppercase tracking-widest font-bold px-3 py-1 -translate-x-1/2 -translate-y-1/2">
              PLAY VIDEO
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
