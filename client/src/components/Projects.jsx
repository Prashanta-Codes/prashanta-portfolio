import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Github, ExternalLink, Utensils, ShoppingCart, Check, ArrowRight, X, Monitor, Eye } from 'lucide-react';
import foodWasteImg from '../assets/food_waste_app.jpg';
import ecommerceImg from '../assets/ecommerce_backend.jpg';
import profileImg from '../assets/prashanta.jpg';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'food-waste',
      title: 'Food Waste Reduction System',
      tagline: 'MERN Stack Social Impact Platform connecting surplus food donors with local NGOs',
      badge: 'Full-Stack MERN Application',
      image: foodWasteImg,
      icon: Utensils,
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      borderColor: 'border-emerald-500/40',
      github: 'https://github.com/Prashanta-Codes',
      demo: '#',
      description: 'A complete full-stack solution built with the MERN stack designed to minimize urban food wastage. The system seamlessly connects surplus food donors (restaurants, events, households) with local verified NGOs.',
      keyFeatures: [
        'Secure OTP-Based Verification: Ensures authentic and verified physical food handovers between donors and NGO collectors.',
        'Real-time Donor & NGO Dashboards: Interactive tracking metrics for active food listings, pickup statuses, and collection routes.',
        'Robust JWT Authentication: Role-isolated authentication workflows ensuring secure access control for donors, NGOs, and system admins.',
        'Collection Time-Gap Automation: Automated matching algorithm that reduces the delay between food availability and pickup.'
      ],
      architectureDetails: 'Built using React.js for the dynamic frontend, Express.js and Node.js for backend REST APIs, and MongoDB for flexible data modeling of food posts, user credentials, and handover audit logs.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'OTP Verification', 'REST APIs', 'Tailwind CSS']
    },
    {
      id: 'ecommerce-backend',
      title: 'E-Commerce Backend System',
      tagline: 'Flipkart-Like Enterprise Backend API with Role-Based Access & Inventory Engine',
      badge: 'Backend Architecture (Node.js/Express)',
      image: ecommerceImg,
      icon: ShoppingCart,
      color: 'from-indigo-500 via-purple-500 to-cyan-500',
      borderColor: 'border-indigo-500/40',
      github: 'https://github.com/Prashanta-Codes',
      demo: '#',
      description: 'A production-grade E-Commerce backend API system inspired by Flipkart. Architected to support multi-user operations with stringent data consistency and concurrency safeguards.',
      keyFeatures: [
        'Role-Based Access Control (RBAC): Strict JWT authentication differentiating Admin actions (product insertion, stock updates) from User actions (browsing, purchasing).',
        'Inventory & Stock Lock Management: Atomic stock deduction and order lifecycle state transitions to prevent overselling.',
        'Complete Cart & Order Lifecycle: Robust cart management logic, order status tracking (Pending, Processing, Shipped, Delivered), and invoice calculation.',
        'Schema Validation & Middleware: Express-validator checks ensuring clean inputs, sanitization, and graceful API error payloads.'
      ],
      architectureDetails: 'Engineered with Node.js and Express.js using a modular MVC pattern. MongoDB Mongoose schemas enforce indexes, transaction integrity, and relational references across Users, Products, Carts, and Orders.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ORM', 'JWT', 'RBAC', 'RESTful API', 'Postman']
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Production Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world full-stack and backend software architectures with live project interfaces.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const IconComp = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`glass-card rounded-3xl border ${project.borderColor} glass-card-hover flex flex-col justify-between overflow-hidden group shadow-2xl relative`}
              >
                {/* Top Image Preview Container with Smooth Hover Overlay */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  
                  {/* Browser Header Bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 bg-slate-950/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Monitor className="w-3 h-3 text-cyan-400" />
                        {project.title}.app
                      </span>
                    </div>

                    {/* Single Profile Badge */}
                    <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1 rounded-full border border-cyan-500/30 shadow-md">
                      <img src={profileImg} alt="Prashanta Nayak" className="w-4 h-4 rounded-full object-cover border border-cyan-400" />
                      <span className="text-[11px] font-mono font-bold text-cyan-300">Prashanta Nayak</span>
                    </div>
                  </div>

                  {/* Image with Hover Zoom */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top pt-9 transition-transform duration-700 group-hover:scale-108 group-hover:blur-[1px]"
                  />

                  {/* Mask for stock area */}
                  <div className="absolute top-11 right-6 z-10 bg-[#0f172a] px-4 py-2 rounded-xl border border-slate-800 flex items-center gap-2 shadow-2xl">
                    <img src={profileImg} alt="Prashanta Nayak Profile" className="w-5 h-5 rounded-full object-cover border border-cyan-400 shrink-0" />
                    <span className="text-[11px] font-bold font-mono text-white">Prashanta Nayak</span>
                  </div>

                  {/* Dark Transparent Hover Overlay with GitHub & Live Demo CTA Buttons */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center gap-4 p-6 pt-12">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>Source Code</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-xs font-bold text-white shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect System</span>
                    </button>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-slate-900 border border-slate-700">
                        {project.badge}
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                        title="View Code on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">{project.tagline}</p>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills & CTA */}
                  <div className="space-y-4 pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/60 text-[11px] font-mono text-cyan-300 group-hover:border-cyan-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white transition-all shadow-md"
                    >
                      <span>Inspect System Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Inspection Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-6 relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 pr-8">
                  <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400">
                    {React.createElement(selectedProject.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                    <span className="text-xs text-cyan-400 font-mono">{selectedProject.badge}</span>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 relative">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover object-top" />
                    <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-xl border border-cyan-500/40 flex items-center gap-2">
                      <img src={profileImg} alt="Prashanta Nayak" className="w-4 h-4 rounded-full border border-cyan-400" />
                      <span className="text-[10px] font-bold text-white">Prashanta Nayak</span>
                    </div>
                  </div>

                  <p>{selectedProject.description}</p>
                  
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase">Architecture Pattern</h4>
                    <p className="text-xs text-slate-300">{selectedProject.architectureDetails}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold text-white uppercase">Feature Breakdown</h4>
                    <div className="space-y-2">
                      {selectedProject.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Close
                  </button>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Code</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
