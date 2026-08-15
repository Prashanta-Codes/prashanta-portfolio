import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#080b11] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Custom Stylish Interactive Glowing Pointer Cursor */}
      <CustomCursor />

      {/* Preloader Intro Screen */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Interactive Particles */}
          <BackgroundCanvas />

          {/* Navigation */}
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />

          {/* Main Sections */}
          <main className="relative z-10 space-y-8">
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            
            {/* Tech Infinite Marquee Ticker */}
            <TechTicker />

            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Resume Digital Preview Modal with Back Button */}
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </motion.div>
      )}
    </div>
  );
}
