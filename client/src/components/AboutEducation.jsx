import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, BookOpen, BarChart3, CheckCircle2, UserCheck } from 'lucide-react';

export default function AboutEducation() {
  const educationData = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Gandhi Institute For Education And Technology (GIET), Bhubaneswar',
      period: '2024 - 2026',
      score: 'Cumulative CGPA: 8.18',
      badge: 'Current / Master Degree',
      color: 'from-indigo-500 to-cyan-500',
      borderColor: 'border-indigo-500/40',
      highlights: ['Advanced Web Technologies', 'Database Systems', 'Software Engineering & System Architecture']
    },
    {
      degree: 'Bachelor of Science (Statistics)',
      institution: 'Marshaghai Degree College, Marshaghai',
      period: '2021 - 2024',
      score: 'Percentage: 80.03%',
      badge: 'Graduation / First Class',
      color: 'from-cyan-500 to-emerald-500',
      borderColor: 'border-cyan-500/40',
      highlights: ['Statistical Modeling', 'Probability & Data Analysis', 'Logical Problem Solving']
    },
    {
      degree: 'Council of Higher Secondary Education (CHSE)',
      institution: 'Marshaghai Higher Secondary School, Marshaghai',
      period: '2019 - 2021',
      score: 'Percentage: 74%',
      badge: 'Higher Secondary (+2)',
      color: 'from-purple-500 to-indigo-500',
      borderColor: 'border-purple-500/40',
      highlights: ['Science Stream', 'Mathematics & Physics']
    },
    {
      degree: 'Board of Secondary Education (BSE)',
      institution: 'Jagannath High School, Patragarh',
      period: '2018 - 2019',
      score: 'Percentage: 71%',
      badge: 'High School (10th)',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/40',
      highlights: ['Secondary Education Foundation']
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            About Me & <span className="text-gradient">Education History</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Combining analytical rigour from Statistics with cutting-edge full-stack software development skills.
          </p>
        </div>

        {/* About Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl glass-card-hover space-y-3 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">MCA Scholar (8.18 CGPA)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Pursuing MCA at GIET Bhubaneswar with an overall cumulative <span className="text-cyan-400 font-semibold">8.18 CGPA</span>. Strong focus on web application architecture and modern software development.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl glass-card-hover space-y-3 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Statistics Background (80.03%)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Graduated with <span className="text-emerald-400 font-semibold">80.03%</span> in B.Sc Statistics. High analytical reasoning, probability calculation, and data structure logic.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl glass-card-hover space-y-3 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Full-Stack Capability</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Specialized in MERN stack development: building RESTful APIs, JWT/OTP verification, RBAC security, MongoDB database optimization, and modern React interfaces.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div id="education" className="pt-6 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-500" />
            <h3 className="text-2xl font-bold text-white">Education History</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border ${edu.borderColor} glass-card-hover space-y-4 relative overflow-hidden`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${edu.color}`}>
                    {edu.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & College */}
                <div>
                  <h4 className="text-lg font-bold text-white leading-snug">{edu.degree}</h4>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </p>
                </div>

                {/* Score Pill */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Academic Score</p>
                    <p className="text-sm sm:text-base font-extrabold text-cyan-300">{edu.score}</p>
                  </div>
                </div>

                {/* Key Focus Points */}
                <div className="space-y-1.5 pt-1">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
