import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2, Sparkles } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Internship – MERN STACK Developer',
      company: 'Code Uplifter',
      period: 'Jun 2025 - Dec 2025',
      type: 'Industry Internship',
      location: 'Remote / On-site',
      description: 'Completed a comprehensive hands-on MERN STACK internship focusing on real-world web application development, security architectures, and scalable API workflows.',
      deliverables: [
        'Engineered full-stack features including user authentication, JWT authorization, and OTP verification workflows.',
        'Designed RESTful APIs using Node.js & Express.js with robust validation, clean middleware, and error handling.',
        'Structured MongoDB database schemas using Mongoose, establishing relations, indexes, and efficient CRUD query handling.',
        'Developed dynamic, high-performance React.js frontends with modern UI components and state management.',
        'Collaborated on application workflow optimization, deployment practices, and code reviews.'
      ],
      techPills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'OTP Verification', 'REST APIs', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Industry <span className="text-gradient">Experience & Internship</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven track record of building production-standard web features and backend API architecture.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 space-y-8 border-l-2 border-slate-800">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/30 glass-card-hover space-y-6 relative overflow-hidden group shadow-xl"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[37px] sm:-left-[45px] top-8 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-400/50">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                  </div>
                  <p className="text-slate-300 font-semibold text-sm sm:text-base mt-1 flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs font-normal">{exp.type}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 w-fit shadow-md">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Responsibilities & Deliverables</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills with Hover Effect */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-mono mr-2">Technologies Used:</span>
                {exp.techPills.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/70 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
