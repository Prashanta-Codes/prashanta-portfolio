import React from 'react';
import { Code2, Server, Database, ShieldCheck, Cpu, Terminal, Zap, Layers, Sparkles } from 'lucide-react';

export default function TechTicker() {
  const items = [
    { name: 'REACT.JS', icon: Code2, color: 'text-cyan-400' },
    { name: 'NODE.JS', icon: Server, color: 'text-emerald-400' },
    { name: 'EXPRESS.JS', icon: Cpu, color: 'text-indigo-400' },
    { name: 'MONGODB', icon: Database, color: 'text-emerald-500' },
    { name: 'JWT AUTH', icon: ShieldCheck, color: 'text-amber-400' },
    { name: 'OTP VERIFICATION', icon: Zap, color: 'text-cyan-300' },
    { name: 'RESTful APIs', icon: Layers, color: 'text-indigo-300' },
    { name: 'JAVASCRIPT ES6+', icon: Sparkles, color: 'text-yellow-400' },
    { name: 'SQL DATABASES', icon: Database, color: 'text-blue-400' },
    { name: 'PYTHON', icon: Terminal, color: 'text-indigo-400' },
    { name: 'TAILWIND CSS', icon: Code2, color: 'text-cyan-400' },
  ];

  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="py-10 bg-slate-950/80 border-y border-slate-800/80 overflow-hidden relative select-none">
      <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {marqueeItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 mx-4 px-6 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm font-mono font-bold tracking-wider text-slate-200 shadow-md hover:border-cyan-500/50 hover:scale-105 transition-all"
            >
              <IconComponent className={`w-5 h-5 ${item.color}`} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
