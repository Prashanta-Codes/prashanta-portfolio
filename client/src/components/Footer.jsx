import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUp, Github, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#04060b] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4 Columns with Staggered Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0d121f] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Prashanta<span className="text-cyan-400">.Nayak</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              MERN Stack & Full-Stack Engineer dedicated to crafting high-performance web applications, secure REST APIs, and responsive user experiences.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>MCA Scholar (CGPA 8.18)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education History</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Internship Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack Built With */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Engineering Stack</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">React 18</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">Node.js</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">Express.js</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">MongoDB</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">Framer Motion</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">JWT Security</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">REST APIs</span>
            </div>
          </div>

          {/* Column 4: Contact Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Direct Contacts</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:prasanata4@gmail.com" className="hover:text-cyan-300 transition-colors">prasanata4@gmail.com</a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <a href="tel:+919078197216" className="hover:text-cyan-300 transition-colors">+91 9078197216</a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Bhubaneswar, Odisha</span>
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <motion.a
                whileHover={{ scale: 1.15, rotate: 6 }}
                href="https://github.com/Prashanta-Codes"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: -6 }}
                href="https://linkedin.com/in/prashanta-nayak"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

        </motion.div>

        {/* Bottom Bar with Spring Back to Top Button */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Prashanta Nayak. Handcrafted with React & Node.js.</p>

          <motion.button
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/40 text-cyan-300 hover:text-white transition-all shadow-md"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
