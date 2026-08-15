import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Terminal, Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'languages', label: 'Languages & Tools' },
  ];

  const skillsData = [
    // Frontend
    { name: 'React.js', category: 'frontend', level: 90, icon: Code2, desc: 'Hooks, Context API, Components, Modern UI', color: 'from-cyan-500 via-blue-500 to-indigo-500' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 88, icon: Zap, desc: 'Async/Await, Promises, Closures, DOM manipulation', color: 'from-yellow-400 via-amber-500 to-orange-500' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 92, icon: Layers, desc: 'Semantic HTML, Flexbox, Grid, Responsive Design', color: 'from-orange-500 via-red-500 to-amber-500' },
    
    // Backend
    { name: 'Node.js', category: 'backend', level: 86, icon: Server, desc: 'Event Loop, Express middleware, File I/O, Async logic', color: 'from-emerald-500 via-teal-500 to-cyan-500' },
    { name: 'Express.js', category: 'backend', level: 88, icon: Cpu, desc: 'REST API routing, validation, error handling middleware', color: 'from-indigo-400 via-cyan-400 to-emerald-400' },
    { name: 'JWT & OTP Auth', category: 'backend', level: 90, icon: ShieldCheck, desc: 'Secure authentication, role-based access control (RBAC)', color: 'from-purple-500 via-indigo-500 to-cyan-500' },

    // Database
    { name: 'MongoDB & Mongoose', category: 'database', level: 85, icon: Database, desc: 'Document schemas, aggregations, indexing, relationships', color: 'from-emerald-400 via-teal-400 to-cyan-500' },
    { name: 'SQL', category: 'database', level: 80, icon: Database, desc: 'Relational data queries, joins, schema design', color: 'from-blue-400 via-indigo-500 to-cyan-400' },

    // Languages & Tools
    { name: 'Python', category: 'languages', level: 78, icon: Terminal, desc: 'Analytical scripting, algorithms, data logic', color: 'from-blue-500 via-indigo-500 to-amber-400' },
    { name: 'Git & GitHub', category: 'languages', level: 85, icon: Terminal, desc: 'Version control, branching, PR workflows, commits', color: 'from-orange-600 via-amber-500 to-yellow-400' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative z-10 bg-slate-950/40 border-y border-slate-800/60 overflow-hidden select-none">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Title with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive breakdown of my engineering capabilities across frontend, backend API design, database modeling, and security protocols.
          </p>
        </motion.div>

        {/* Category Filters with Spring Scale Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {categories.map((cat) => (
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid with 3D Tilt Hover and Animated Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-5 rounded-2xl glass-card-hover border border-slate-800 flex flex-col justify-between space-y-4 group relative overflow-hidden shadow-xl"
              >
                {/* Subtle Hover Shimmer Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-400 shadow-inner group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">{skill.name}</h3>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {skill.desc}
                </p>

                {/* Animated Skill Progress Bar with Dynamic Scroll Trigger */}
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden p-[1px] border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
