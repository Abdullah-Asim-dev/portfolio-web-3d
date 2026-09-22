'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto block clear-both relative">
      
      {/* 1. COMPONENT HEADER CONTAINER BLOCK */}
      <div className="w-full flex flex-col items-center justify-center text-center mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#A1CCDC] to-[#096B90] uppercase block select-none">
          About Me
        </h2>
        <div className="mt-4 h-[3px] w-24 bg-gradient-to-r from-[#096B90] via-[#A1CCDC] to-[#096B90] animate-pulse rounded-full shadow-[0_0_12px_rgba(9,107,144,0.8)]" />
      </div>

      {/* 2. CORE WORKSPACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch relative z-10">
        
        {/* LEFT COLUMN: BIO INFRASTRUCTURE */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#040911]/40 backdrop-blur-md p-6 relative overflow-hidden group hover:border-[#096B90]/30 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A1CCDC]/20 to-transparent" />
          
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white leading-tight">
              Architecting The Future of <span className="text-[#A1CCDC]">Intelligence & Web Systems</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              I am a specialized **Full-Stack Developer and AI Automation Architect** dedicated to transforming complex manual bottlenecks into seamless digital workflows. My journey started with a solid foundation in **ICS Computer Science (2023 - 2025)**, where I mastered architectural computing principles.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              With **1+ years of intense active commercial freelancing experience**, I ship scalable web pipelines, multitenant SaaS apps, and voice intelligence nodes globally using framework systems like **Next.js and React** coupled with data tools like **NumPy and Pandas**.
            </p>
          </div>
          
          {/* SYSTEM STATS & COORDINATE METRICS */}
          <div className="space-y-6 mt-8 pt-4 border-t border-white/5">
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-lg font-bold text-[#A1CCDC]">1+</span>
                <span className="text-gray-500 font-bold">Year Exp</span>
              </div>
              <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                <span className="block text-lg font-bold text-[#A1CCDC]">24</span>
                <span className="text-gray-500 font-bold">GitHub Repos</span>
              </div>
              <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                <span className="block text-lg font-bold text-[#A1CCDC]">100%</span>
                <span className="text-gray-500 font-bold">Delivery</span>
              </div>
            </div>
            
            {/* ROUTING BUTTON LINKS */}
            <div className="flex gap-4">
              <a href="https://github.com/Abdullah-Asim-dev" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase text-white bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all duration-300">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/abdullah-asim-dev/" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase text-[#A1CCDC] bg-[#096B90]/10 border border-[#096B90]/30 px-4 py-2.5 rounded-xl hover:bg-[#096B90] hover:text-white transition-all duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INFRASTRUCTURE TRACK NODES */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="rounded-2xl border border-white/10 bg-[#040911]/40 backdrop-blur-md p-5 flex-1 flex flex-col justify-center group hover:border-[#096B90]/20 transition-all">
            <span className="text-[10px] font-bold text-[#A1CCDC] uppercase bg-[#096B90]/10 px-2 py-0.5 rounded w-max">Academic Base</span>
            <h4 className="text-md font-bold text-white mt-2">ICS Computer Science (2023 - 2025)</h4>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Mastered algorithmic pipelines, computational mathematics matrices, and core computing data streams.</p>
          </div>
          
          <div className="rounded-2xl border border-white/10 bg-[#040911]/40 backdrop-blur-md p-5 flex-1 flex flex-col justify-center group hover:border-[#096B90]/20 transition-all">
            <span className="text-[10px] font-bold text-[#A1CCDC] uppercase bg-[#096B90]/10 px-2 py-0.5 rounded w-max">Commercial Track</span>
            <h4 className="text-md font-bold text-white mt-2">Freelance Automation Agent</h4>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Architecting commercial-grade multitenant software, scalable execution workflows, and custom systems.</p>
          </div>
          
          <div className="rounded-2xl border border-white/10 bg-[#040911]/40 backdrop-blur-md p-5 text-xs text-gray-300 space-y-2 flex-1 flex flex-col justify-center group hover:border-[#096B90]/20 transition-all">
            <h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-wider mb-2">Production Ready Matrix:</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-medium">
              <div><span className="text-[#096B90]">✓</span> AI Conversational Bots</div>
              <div><span className="text-[#096B90]">✓</span> Cross Mobile Apps</div>
              <div><span className="text-[#096B90]">✓</span> Automated Pipelines</div>
              <div><span className="text-[#096B90]">✓</span> Real-Time Web SaaS</div>
              <div><span className="text-[#096B90]">✓</span> Autonomous Voice Agents</div>
              <div><span className="text-[#096B90]">✓</span> Big Data System Layer</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
