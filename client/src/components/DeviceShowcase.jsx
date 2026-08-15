import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Laptop, Tv, Sparkles, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import foodWasteImg from '../assets/food_waste_app.jpg';
import ecommerceImg from '../assets/ecommerce_backend.jpg';

export default function DeviceShowcase() {
  const [deviceMode, setDeviceMode] = useState('laptop'); // 'laptop' | 'mobile' | 'desktop'
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Food Waste Reduction System',
      badge: 'Full-Stack MERN Application',
      image: foodWasteImg,
      stats: 'OTP Handover Verified • Real-Time NGO Tracking',
      desc: 'Connects surplus food donors with local NGOs using OTP verification and live donor/NGO dashboards.'
    },
    {
      title: 'E-Commerce Backend System',
      badge: 'Node.js & Express API Engine',
      image: ecommerceImg,
      stats: 'Role-Based Access Control • Inventory Engine',
      desc: 'Flipkart-style scalable backend API with JWT authentication, cart logic, and order lifecycle management.'
    }
  ];

  const currentProj = projects[activeProject];

  return (
    <section className="py-20 relative z-10 bg-slate-950/70 border-y border-slate-800/80 overflow-hidden">
      {/* Background Neon Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Tv className="w-3.5 h-3.5" />
            <span>Responsive Cross-Device Mockups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Interactive <span className="text-gradient">Device Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Toggle between Desktop Monitor, Laptop, and Smartphone preview frames to inspect project UI responsiveness.
          </p>
        </div>

        {/* Project & Device Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-3xl border border-slate-800">
          
          {/* Project Switcher Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {projects.map((proj, idx) => (
              <button
                key={proj.title}
                onClick={() => setActiveProject(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  activeProject === idx
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                Project {idx + 1}: {proj.title.split(' ')[0]}...
              </button>
            ))}
          </div>

          {/* Device Frame Mode Controls */}
          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setDeviceMode('laptop')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                deviceMode === 'laptop'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Laptop</span>
            </button>

            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Desktop TV</span>
            </button>

            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile Phone</span>
            </button>
          </div>

        </div>

        {/* Device Frame Display Container */}
        <div className="flex justify-center items-center py-6 min-h-[480px]">
          <AnimatePresence mode="wait">
            
            {/* 1. LAPTOP / DESKTOP FRAME */}
            {(deviceMode === 'laptop' || deviceMode === 'desktop') && (
              <motion.div
                key={`${activeProject}-${deviceMode}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl space-y-0 relative group"
              >
                {/* Screen Frame */}
                <div className="relative bg-slate-900 p-3 sm:p-4 rounded-t-3xl border-t border-x border-slate-700 shadow-2xl overflow-hidden">
                  
                  {/* Camera Dot & Web Status */}
                  <div className="flex items-center justify-between mb-3 px-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600" />
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {currentProj.badge}
                    </span>
                  </div>

                  {/* Display Screenshot */}
                  <div className="rounded-xl overflow-hidden h-72 sm:h-96 w-full bg-slate-950 border border-slate-800 relative">
                    <img
                      src={currentProj.image}
                      alt={currentProj.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Info Overlay Bar */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <h4 className="font-bold text-white">{currentProj.title}</h4>
                        <p className="text-[11px] text-cyan-400 font-mono">{currentProj.stats}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                        RESPONSIVE 100%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 h-4 rounded-b-2xl border-x border-b border-slate-700 shadow-xl flex items-center justify-center">
                  <div className="w-24 h-1 bg-slate-900 rounded-full" />
                </div>
              </motion.div>
            )}

            {/* 2. MOBILE SMARTPHONE FRAME */}
            {deviceMode === 'mobile' && (
              <motion.div
                key={`${activeProject}-${deviceMode}`}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.5 }}
                className="relative w-72 sm:w-80 h-[520px] bg-slate-900 rounded-[42px] p-3 border-4 border-slate-700 shadow-2xl group overflow-hidden"
              >
                {/* Phone Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-950 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                </div>

                {/* Screen View */}
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={currentProj.image}
                    alt={currentProj.title}
                    className="w-full h-full object-cover object-top pt-5 transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Phone Pill */}
                  <div className="absolute bottom-4 left-3 right-3 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 space-y-1 text-center">
                    <p className="text-xs font-bold text-white">{currentProj.title}</p>
                    <p className="text-[10px] text-cyan-400 font-mono">Mobile Responsive UI</p>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
