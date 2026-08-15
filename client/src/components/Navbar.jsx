import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, FileDown, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['about', 'education', 'skills', 'projects', 'experience', 'contact'];
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-30% 0px -60% 0px',
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b11]/90 backdrop-blur-xl border-b border-slate-800/90 py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d121f] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <span>
              Prashanta<span className="text-cyan-400">.Nayak</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl shadow-sm hover:border-cyan-500/50 transition-all hover:scale-105 active:scale-95"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>CV Preview</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 rounded-xl shadow-md shadow-indigo-600/30 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-300 bg-slate-800/80 border border-slate-700/80 rounded-lg"
              aria-label="View Resume"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 overflow-hidden"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl shadow-md"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
