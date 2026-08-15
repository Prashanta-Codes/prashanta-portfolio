import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import profileImg from '../assets/prashanta.jpg';

export default function Hero({ onOpenResume }) {
  const titles = [
    'MERN Stack Developer',
    'Full-Stack Engineer',
    'Backend Specialist (Node/Express)',
    'MCA Scholar (CGPA 8.18)'
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentTitle) {
      typingSpeed = 2200;
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentTitle.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden select-none">
      {/* Dynamic Glowing Accents */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-lg shadow-cyan-500/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Hiring & Full-Stack Roles</span>
            </div>

            {/* Main Name Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-gradient">Prashanta</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">Nayak</span>
            </h1>

            {/* Typewriter Title */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl font-mono font-medium text-slate-300 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400 inline" />
                <span className="text-cyan-300 font-bold">{displayedText}</span>
                <span className="w-2 h-6 bg-cyan-400 animate-pulse inline-block ml-0.5" />
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dedicated & hardworking MCA scholar with hands-on expertise building production-level full-stack web applications using 
              <span className="text-white font-semibold"> React.js, Node.js, Express.js & MongoDB</span>. Experienced in OTP authentication, JWT security, and scalable API architecture.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right rounded-2xl shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

          </motion.div>

          {/* Right Profile Photo Container - Razor Sharp Image with Ambient Glow Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 group">
              {/* Glowing Ambient Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative w-full h-full rounded-3xl bg-[#0b101c] p-[2px] overflow-hidden border border-cyan-500/40 shadow-2xl">
                {/* Razor Sharp Image */}
                <img
                  src={profileImg}
                  alt="Prashanta Nayak Profile"
                  className="w-full h-full object-cover object-top rounded-[22px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
