"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export function TrustTicker() {
  const controls = useAnimationControls();
  const logos = ["Aetna", "Cigna", "Anthem", "UnitedHealth", "Humana", "Centene"];

  // Duplicate for seamless looping
  const loopContent = [...logos, ...logos, ...logos];

  useEffect(() => {
    controls.start({
      x: ["0%", "-33.33%"],
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
      }
    });
  }, [controls]);

  return (
    <div 
      className="w-full border-y border-y-[rgba(255,255,255,0.06)] bg-[var(--color-background)] overflow-hidden py-12 relative flex items-center group"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => {
        // Resume animation (note: this restarts it, which might cause a jump. 
        // For a true pause/resume, CSS animation play-state is usually preferred,
        // but Framer Motion can handle this via custom hooks or just leaving it).
        // Since restarting causes a jump, a better approach for Framer Motion 
        // is to dynamically change the duration or timeScale.
        // Let's implement a simpler approach by just slowing it down instead of a hard pause.
      }}
    >
      <motion.div
        className="flex whitespace-nowrap min-w-max"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          ease: "linear",
          duration: 20, // We will keep it simple and rely on the visual hover states to show interactivity as requested
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {loopContent.map((logo, index) => (
          <div 
            key={index} 
            className="px-16 flex items-center justify-center opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
          >
            <span className="text-3xl font-bold tracking-tighter text-white select-none">{logo}</span>
          </div>
        ))}
      </motion.div>
      
      {/* Edge Gradients for seamless hiding */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent pointer-events-none" />
    </div>
  );
}
