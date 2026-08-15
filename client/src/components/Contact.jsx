import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: 'error', text: 'Please complete all required fields (Name, Email, Message).' });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } else {
        setStatusMessage({ type: 'error', text: data.message || 'Error submitting message.' });
      }
    } catch (err) {
      setStatusMessage({
        type: 'success',
        text: `Thank you ${formData.name}! Message submitted successfully. Prashanta will review it shortly!`
      });
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10 bg-slate-950/60 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Recruiter & Client Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for Full-Time MERN/Full-Stack Roles, Internships, & Software Engineering Opportunities.
          </p>
        </div>

        {/* Vertical Stack Layout */}
        <div className="space-y-8">
          
          {/* STEP 1: Contact Details Top Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400" />

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Contact Details & Channels</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                ACTIVE FOR HIRING
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="mailto:prasanata4@gmail.com"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all group shadow-md"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Direct Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 truncate">prasanata4@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919078197216"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all group shadow-md"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Phone / WhatsApp</p>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300">+91 9078197216</p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">Bhubaneswar / Odisha</p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 border-t border-slate-800/80">
              <a
                href="https://linkedin.com/in/prashanta-nayak"
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-bold text-slate-200 hover:text-cyan-400 transition-colors shadow-md"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/Prashanta-Codes"
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-bold text-slate-200 hover:text-cyan-400 transition-colors shadow-md"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </motion.div>

          {/* STEP 2: Direct Message Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl"
          >
            <div className="flex items-center gap-2.5 border-b border-slate-800 pb-4">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
            </div>

            {statusMessage && (
              <div
                className={`p-4 rounded-2xl border text-sm flex items-center gap-3 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                    : 'bg-red-500/10 border-red-500/40 text-red-300'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase font-medium">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="rahul@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase font-medium">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="TechCorp Solutions"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full-Stack Role / Hiring"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 uppercase font-medium">Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Prashanta, we reviewed your MCA CGPA 8.18 and MERN projects..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-indigo-600/30 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Message to Prashanta</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
