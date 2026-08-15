import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Sparkles, Cpu } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const statuses = [
    'INITIALIZING_SYSTEM_CORE...',
    'LOADING_MERN_STACK_MODULES...',
    'COMPILING_REACT_AND_NODE_APIS...',
    'VERIFYING_MCA_CGPA_8.18...',
    'SYSTEM_ONLINE_WELCOME'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 25) setStatusIndex(0);
    else if (progress < 55) setStatusIndex(1);
    else if (progress < 80) setStatusIndex(2);
    else if (progress < 100) setStatusIndex(3);
    else setStatusIndex(4);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#05070d] flex flex-col items-center justify-center p-6 selection:bg-cyan-500 selection:text-white"
        >
          {/* Subtle Background Radial Glow */}
          <div className="absolute w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 max-w-md w-full text-center space-y-8">
            
            {/* Logo & Terminal Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-cyan-400 to-emerald-400 p-[2px] shadow-2xl shadow-cyan-500/30">
                <div className="w-full h-full bg-[#0a0e19] rounded-[14px] flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-cyan-400 animate-pulse" />
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold tracking-tight text-white">Prashanta Nayak</h1>
                <p className="text-xs font-mono text-cyan-400">Full-Stack Portfolio System</p>
              </div>
            </motion.div>

            {/* Percentage Number Display */}
            <div className="relative py-2">
              <motion.span
                key={progress}
                initial={{ opacity: 0.6, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-6xl sm:text-7xl font-extrabold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400"
              >
                {progress}%
              </motion.span>
            </div>

            {/* Progress Bar Container */}
            <div className="space-y-3">
              <div className="w-full bg-slate-900/90 rounded-full h-3 p-0.5 border border-slate-800 shadow-inner overflow-hidden relative">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-cyan-400 to-emerald-400 shadow-lg shadow-cyan-500/50"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>

              {/* Dynamic Status Text */}
              <div className="h-6 flex items-center justify-center">
                <p className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400 inline" />
                  <span className="text-cyan-300 font-semibold tracking-wider">{statuses[statusIndex]}</span>
                </p>
              </div>
            </div>

            {/* Footer Tech Pills */}
            <div className="pt-4 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800">React 18</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800">Node.js</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800">Express</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800">Tailwind</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
