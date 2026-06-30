"use client";
import { useSystemStats } from "@/hooks/useSystemStats";
import { MONITOR_CONFIG } from "@/data/site-content";

export const SystemMonitor = () => {
  const { cpu, ram } = useSystemStats();

  // Determine status color based on load
  const getStatusColor = (val: number) => {
    if (val > 80) return MONITOR_CONFIG.colors.critical;
    if (val > 50) return MONITOR_CONFIG.colors.warning;
    return MONITOR_CONFIG.colors.healthy;
  };

  return (
    <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 w-full max-w-xs shadow-2xl backdrop-blur-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-bold tracking-wider text-[10px] uppercase opacity-70">
          {MONITOR_CONFIG.title}
        </h3>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${getStatusColor(Math.max(cpu, ram))}`} />
        </div>
      </div>

      <div className="space-y-4">
        {/* CPU Row */}
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-[#888888] uppercase">CPU Load</span>
            <span className="text-white font-mono">{cpu}%</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${getStatusColor(cpu)}`}
              style={{ width: `${cpu}%` }} 
            />
          </div>
        </div>

        {/* RAM Row */}
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-[#888888] uppercase">RAM Usage</span>
            <span className="text-white font-mono">{ram}%</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${getStatusColor(ram)}`}
              style={{ width: `${ram}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};