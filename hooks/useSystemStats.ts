"use client";
import { useState, useEffect } from 'react';

export function useSystemStats() {
  const [stats, setStats] = useState({ cpu: 0, ram: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setStats({ cpu: data.cpuLoad, ram: data.ramUsage });
      } catch (e) { console.error("Telemetry failed"); }
    };
    
    // Poll every 1.5 seconds for real-time feel
    const interval = setInterval(fetchStats, 1500);
    return () => clearInterval(interval);
  }, []);

  return stats;
}