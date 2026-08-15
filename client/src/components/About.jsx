import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Sparkles, Code2, Brain, Shield, Rocket, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Analytical Mindset',
      desc: 'Leveraging my B.Sc in Statistics to design optimized data structures, logical workflows, and efficient algorithm pipelines.',
      icon: Brain,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
    },
    {
      title: 'Full-Stack Architecture',
      desc: 'Expertise in end-to-end web engineering: React frontends, Node/Express backends, and MongoDB document schemas.',
      icon: Code2,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
    },
    {
      title: 'Security & Auth First',
      desc: 'Deep focus on secure user authentication: JWT tokens, OTP-based handovers, and Role-Based Access Control (RBAC).',
      icon: Shield,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      title: 'Continuous Innovation',
      desc: 'Passionate about adopting modern developer toolings, building real-world social impact apps, and solving challenging engineering problems.',
      icon: Rocket,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Developer Philosophy & Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging analytical statistics with production-grade full-stack web engineering.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400" />

            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span>My Engineering Journey</span>
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated software engineer currently pursuing my <span className="text-white font-semibold">Master of Computer Application (MCA)</span> with an overall cumulative <span className="text-cyan-300 font-bold">8.18 CGPA</span>. My foundation started with a <span className="text-emerald-400 font-semibold">B.Sc in Statistics (80.03%)</span>, which instilled in me a deep appreciation for mathematical rigor, logical analysis, and structured problem-solving.
              </p>
              <p>
                Over the past few years, I transformed this statistical foundation into hands-on full-stack software development. During my internship at <span className="text-indigo-400 font-semibold">Code Uplifter</span>, I built real-world full-stack features: OTP-verified handover pipelines, Flipkart-like e-commerce API engines, and JWT role-based access security.
              </p>
              <p>
                Whether designing REST APIs in Node.js/Express, structuring MongoDB document databases, or building interactive React UIs, I take pride in delivering clean, maintainable, and high-performance software.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Clean API Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>MERN Stack Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Role-Based Access Control</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>OTP & JWT Security</span>
              </div>
            </div>
          </motion.div>

          {/* Right 4 Pillars Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-2xl border border-slate-800 glass-card-hover flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl border ${pillar.color} shrink-0`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{pillar.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
