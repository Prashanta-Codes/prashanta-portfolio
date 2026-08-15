import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      num: '01',
      degree: 'Master of Computer Application (MCA)',
      institution: 'Gandhi Institute For Education And Technology (GIET), Bhubaneswar',
      period: '2024 - 2026',
      score: 'Cumulative CGPA: 8.18',
      badge: 'Master Degree',
      color: 'from-indigo-500 via-cyan-500 to-emerald-400',
      borderColor: 'border-indigo-500/40 hover:border-cyan-400',
      glowColor: 'shadow-indigo-500/20 hover:shadow-cyan-500/30',
      highlights: ['Advanced Software Engineering & Architecture', 'Database Systems & Mongo Schema Design', 'Full-Stack Web Application Development']
    },
    {
      num: '02',
      degree: 'Bachelor of Science (Statistics)',
      institution: 'Marshaghai Degree College, Marshaghai',
      period: '2021 - 2024',
      score: 'Percentage: 80.03%',
      badge: 'Graduation / First Class',
      color: 'from-cyan-500 via-teal-500 to-emerald-500',
      borderColor: 'border-cyan-500/40 hover:border-emerald-400',
      glowColor: 'shadow-cyan-500/20 hover:shadow-emerald-500/30',
      highlights: ['Statistical Analytics & Modeling', 'Probability Theory & Linear Algebra', 'Logical Data Deduction']
    },
    {
      num: '03',
      degree: 'Council of Higher Secondary Education (CHSE)',
      institution: 'Marshaghai Higher Secondary School, Marshaghai',
      period: '2019 - 2021',
      score: 'Percentage: 74%',
      badge: 'Higher Secondary (+2)',
      color: 'from-purple-500 via-indigo-500 to-cyan-500',
      borderColor: 'border-purple-500/40 hover:border-indigo-400',
      glowColor: 'shadow-purple-500/20 hover:shadow-indigo-500/30',
      highlights: ['Higher Secondary Science Stream', 'Mathematics & Physical Sciences']
    },
    {
      num: '04',
      degree: 'Board of Secondary Education (BSE)',
      institution: 'Jagannath High School, Patragarh',
      period: '2018 - 2019',
      score: 'Percentage: 71%',
      badge: 'High School (10th)',
      color: 'from-blue-500 via-cyan-500 to-indigo-500',
      borderColor: 'border-blue-500/40 hover:border-cyan-400',
      glowColor: 'shadow-blue-500/20 hover:shadow-cyan-500/30',
      highlights: ['Secondary Education Foundation']
    }
  ];

  return (
    <section id="education" className="py-20 relative z-10 bg-slate-950/40 border-y border-slate-800/60 overflow-hidden">
      {/* Dynamic Background Glow circles */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Education <span className="text-gradient">History</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed timeline of academic performance and core analytical foundation.
          </p>
        </div>

        {/* 4 Interactive Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`glass-card p-6 sm:p-8 rounded-3xl border ${edu.borderColor} ${edu.glowColor} transition-all duration-300 space-y-5 relative overflow-hidden group shadow-xl`}
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />

              {/* Background Index Number Watermark */}
              <span className="absolute -right-2 -bottom-4 text-7xl font-extrabold font-mono text-slate-800/30 group-hover:text-cyan-500/10 transition-colors pointer-events-none select-none">
                {edu.num}
              </span>

              {/* Card Top Row */}
              <div className="flex items-center justify-between gap-2">
                <span className={`px-3.5 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${edu.color} shadow-md`}>
                  {edu.badge}
                </span>
                <div className="flex items-center gap-1.5 text-slate-300 text-xs font-mono bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Degree Title & College */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{edu.institution}</span>
                </p>
              </div>

              {/* Official Result Score Pill */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center gap-3 shadow-inner">
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-mono font-bold tracking-wider">Official Result</p>
                  <p className="text-base sm:text-lg font-extrabold text-cyan-300">{edu.score}</p>
                </div>
              </div>

              {/* Focus points */}
              <div className="space-y-2 pt-1">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
