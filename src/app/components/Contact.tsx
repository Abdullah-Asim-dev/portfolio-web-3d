'use client';

import React, { useState } from 'react';

export default function ContactAndFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Development', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    try {
      const response = await fetch('https://web3forms.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", 
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Message: ${formData.service} from ${formData.name}`,
          message: `Service Requested: ${formData.service}\n\nMessage:\n${formData.message}`,
          to_email: "abdullahasimoffical4737@gmail.com"
        })
      });
      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
        setTimeout(() => setStatus('IDLE'), 4000);
      } else { setStatus('ERROR'); setTimeout(() => setStatus('IDLE'), 3000); }
    } catch { setStatus('ERROR'); setTimeout(() => setStatus('IDLE'), 3000); }
  };

  return (
    <div className="w-full flex flex-col bg-transparent relative z-10">
      
      {/* =========================================================
         GLOBAL FLOATING WHATSAPP CHATBOT WIDGET NODE (ALWAYS VISIBLE)
      ========================================================= */}
      <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
        <a 
          href="https://wa.me" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Connect via WhatsApp Secure Link"
          className="w-14 h-14 rounded-full border border-emerald-500/30 bg-[#040911]/90 text-emerald-400 hover:bg-emerald-500 hover:text-[#040911] hover:border-emerald-500 flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 group transform"
        >
          {/* Enhanced High-Fidelity SVG Icon Scale */}
          <svg className="w-7 h-7 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.03 11.966.03c3.184.001 6.177 1.242 8.426 3.496 2.249 2.254 3.487 5.244 3.486 8.428-.003 6.616-5.339 11.934-11.907 11.934-2.001-.001-3.972-.5-5.733-1.455L0 24zm6.29-4.314c1.674.993 3.348 1.521 5.341 1.522 5.514 0 10.001-4.436 10.004-9.897.001-2.645-1.026-5.132-2.894-7.004-1.868-1.873-4.351-2.903-6.997-2.904-5.518 0-10.005 4.437-10.008 9.899-.001 1.956.5 3.864 1.454 5.545l-.993 3.626 3.731-.976zm11.332-6.84c-.287-.144-1.702-.84-1.965-.936-.262-.096-.453-.144-.644.144-.191.288-.741.936-.908 1.129-.167.192-.334.216-.621.072-1.354-.68-2.327-1.129-3.23-2.69-.24-.413.24-.383.687-1.27.072-.144.036-.27-.018-.413-.054-.144-.453-1.092-.621-1.499-.164-.398-.344-.344-.473-.346-.121-.002-.26-.003-.4-.003-.14 0-.368.052-.56.27-.192.218-.733.717-.733 1.748 0 1.032.75 2.031.854 2.167.104.136 1.475 2.252 3.574 3.157 1.637.702 2.285.765 3.102.644.382-.057 1.703-.695 1.942-1.368.24-.672.24-1.25.167-1.368-.073-.118-.262-.191-.549-.335z"/>
          </svg>
        </a>
      </div>

      {/* PREMIUM CONTACT FORM SECTION */}
      <section id="contact" className="w-full py-24 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-20">
        <div className="w-full flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#A1CCDC] to-[#096B90] uppercase block select-none">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-medium mt-3 tracking-wide max-w-md">
            Let's collaborate on your next production application, automated pipeline, or custom AI system.
          </p>
          <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#096B90] via-[#A1CCDC] to-[#096B90] animate-pulse shadow-[0_0_12px_rgba(9,107,144,0.8)]" />
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">Your Name</label>
              <input type="text" required disabled={status === 'LOADING'} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Abdullah Asim" className="w-full bg-[#040911]/60 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#096B90] focus:bg-[#040911] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">Email Coordinates</label>
              <input type="email" required disabled={status === 'LOADING'} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="client@domain.com" className="w-full bg-[#040911]/60 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#096B90] focus:bg-[#040911] transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">Project Operational Tier / Service</label>
            <select disabled={status === 'LOADING'} value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-[#040911] border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#096B90] cursor-pointer">
              <option value="Web Development">Web Development / SaaS Setup</option>
              <option value="App Development">App Development / React Native</option>
              <option value="AI Automation">AI Automation / n8n Pipelines</option>
              <option value="AI Voice Agents">AI Voice Agents & Call Bots</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">Message</label>
            <textarea required rows={5} disabled={status === 'LOADING'} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Outline your project requirements..." className="w-full bg-[#040911]/60 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#096B90] resize-none transition-all" />
          </div>

          <button type="submit" disabled={status === 'LOADING'} className="w-full flex items-center justify-center gap-2 rounded-xl text-xs font-black uppercase tracking-widest py-4 border border-[#096B90]/40 bg-[#096B90]/20 text-[#A1CCDC] hover:bg-[#096B90] hover:text-white transition-all duration-300 disabled:opacity-50 shadow-[0_0_15px_rgba(9,107,144,0.1)]">
            {status === 'LOADING' ? 'Dispatched Stream Processing...' : status === 'SUCCESS' ? '✓ Transmission Dispatched Successfully' : 'Send Message'}
          </button>
        </form>
      </section>

      {/* ULTRA-CLEAN CORPORATE FOOTER SECTION */}
      <footer className="w-full border-t border-white/5 bg-[#040911]/60 backdrop-blur-md py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
            <span className="text-sm font-black tracking-wider text-white uppercase">Abdullah Asim</span>
            <p className="text-xs text-zinc-500 font-medium tracking-wide">MERN Stack & AI Systems Architect © 2026</p>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-400 bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl select-none">
            <svg className="w-3.5 h-3.5 text-[#A1CCDC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 14 14 14h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.143-5.12-3.439-6.264-6.264l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
            03716386114
          </div>
          <div className="flex items-center gap-5 text-zinc-500">
            <a href="mailto:abdullahasimoffical4737@gmail.com" title="Direct Mail Relay" className="hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-[#A1CCDC] transition-colors duration-200">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}