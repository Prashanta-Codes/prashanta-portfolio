import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, Linkedin, Github, GraduationCap, Briefcase, Code, Award, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.5 } });
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl my-8 relative text-slate-200"
        >
          {/* Header Bar with Back Button */}
          <div className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur-md px-4 sm:px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-3">
            
            {/* Back Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold transition-all active:scale-95 shadow-md"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>← Back to Portfolio</span>
            </button>

            {/* Document Label */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-1 text-xs font-mono text-slate-400">Prashanta_Nayak_Curriculum_Vitae.pdf</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
              
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
                aria-label="Close CV preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Printable Resume Content Body */}
          <div className="p-6 sm:p-10 space-y-8 print:p-0 print:bg-white print:text-black">
            
            {/* Header / Contacts */}
            <div className="border-b border-slate-800 pb-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight text-white uppercase">PRASHANTA NAYAK</h1>
                  <p className="text-cyan-400 font-mono font-semibold text-sm">MERN Stack Developer & Full-Stack Engineer</p>
                </div>
                <div className="flex flex-col text-xs text-slate-300 space-y-1 font-mono">
                  <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 9078197216</span>
                  <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-cyan-400" /> prasanata4@gmail.com</span>
                  <span className="flex items-center gap-2"><Linkedin className="w-3.5 h-3.5 text-cyan-400" /> linkedin.com/in/prashanta-nayak</span>
                  <span className="flex items-center gap-2"><Github className="w-3.5 h-3.5 text-cyan-400" /> github.com/Prashanta-Codes</span>
                </div>
              </div>
            </div>

            {/* Profile Statement */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4" /> Professional Profile
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dedicated and hardworking MCA scholar with hands-on experience in developing real-world web applications and managing backend application workflows. Experienced in implementing authentication, role-based access control (RBAC), and database-driven features using the MERN stack.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education & Academic Credentials
              </h2>
              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/30 flex flex-col sm:flex-row justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white">Master of Computer Application (MCA)</h3>
                    <p className="text-xs text-slate-400">Gandhi Institute For Education And Technology (GIET), Bhubaneswar</p>
                    <p className="text-xs text-emerald-400 font-semibold mt-1">Cumulative CGPA: 8.18</p>
                  </div>
                  <span className="text-xs font-mono text-indigo-400 font-bold">2024 - 2026</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white">Bachelor of Science (Statistics)</h3>
                    <p className="text-xs text-slate-400">Marshaghai Degree College, Marshaghai</p>
                    <p className="text-xs text-cyan-400 font-semibold mt-1">Percentage: 80.03%</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">2021 - 2024</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <p className="font-bold text-white">CHSE (+2 Science)</p>
                    <p className="text-slate-400">Marshaghai Higher Secondary School</p>
                    <p className="text-cyan-400 font-semibold mt-0.5">74% (2019-2021)</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <p className="font-bold text-white">BSE (10th Secondary)</p>
                    <p className="text-slate-400">Jagannath High School, Patragarh</p>
                    <p className="text-cyan-400 font-semibold mt-0.5">71% (2018-2019)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience / Internship */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Certification & Industry Internship
              </h2>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white">MERN STACK Intern — Code Uplifter</h3>
                  <span className="text-xs font-mono text-cyan-400 font-bold">Jun 2025 - Dec 2025</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Completed an intensive hands-on MERN STACK internship focusing on real-world application development. Worked on building full-stack features including JWT authentication, OTP verification, and complex CRUD workflows.
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4" /> Technical Projects
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <h3 className="font-bold text-white text-sm">1. Food Waste Reduction System (Full-Stack MERN)</h3>
                  <p className="text-slate-300">
                    Developed a MERN stack web application to minimize urban food wastage by connecting surplus food donors with local NGOs. Features OTP verification for authentic handovers, real-time donor/NGO dashboards, and JWT authentication.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <h3 className="font-bold text-white text-sm">2. E-Commerce Backend System (Node.js & Express.js)</h3>
                  <p className="text-slate-300">
                    Engineered a Flipkart-like backend using Node.js, Express.js, and MongoDB. Secure JWT role-based access for admin & users, inventory management logic, order lifecycle tracking, and validation checks.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2 pt-2 border-t border-slate-800 flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider">Technical Skills</h2>
                <p className="text-xs text-slate-300 font-mono">
                  <span className="text-white font-bold">Programming & Web:</span> React.js, Node.js, Express.js, JavaScript (ES6+), HTML5, CSS3, Python<br />
                  <span className="text-white font-bold">Databases & Tools:</span> MongoDB, SQL, JWT, OTP Auth, Git, GitHub, Postman, VS Code
                </p>
              </div>

              {/* Bottom Back Button */}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 hover:text-white shrink-0 border border-slate-700"
              >
                ← Back
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
