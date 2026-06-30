"use client";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useSystemStats } from "@/hooks/useSystemStats";

export const AdvancedMonitor = () => {
  const { ram } = useSystemStats();
  const [history, setHistory] = useState<{ time: string, value: number }[]>([]);

  // Update history array every time 'ram' changes
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setHistory(prev => {
      const newHistory = [...prev, { time: timestamp, value: ram }];
      return newHistory.slice(-10); // Keep only the last 10 data points
    });
  }, [ram]);

  return (
    <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 w-full max-w-lg shadow-2xl">
      <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Memory Leak Tracker</h3>
      
      {/* The Chart */}
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history}>
            <Line type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} dot={false} />
            <XAxis dataKey="time" hide />
            <YAxis domain={[0, 100]} hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
              itemStyle={{ color: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-4">
        <span className="text-xs text-[#888888]">Current: {ram}%</span>
        <span className="text-xs text-green-500">Stable</span>
      </div>
    </div>
  );
};