'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const buttonsList = [
    '1+ Years Experience',
    'Cloud Architecture',
    'ML / DL Logic',
    'n8n Workflows'
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-8 pt-36 pb-16 overflow-hidden bg-transparent z-10"
    >
      {/* 🚀 PERFECT SYNC BOUNDARY: Managed custom spacing metrics to match top navigation corners flawlessly */}
      <div className="w-full max-w-7xl flex flex-col relative z-20 mx-auto px-0">
        
        {/* GLOBAL TWO-COLUMN GRID LAYOUT WITH FINE-TUNED SPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* LEFT CONTENT COLUMN - RECONFIGURED FOR CLEAN SUBTLE LEFT SPACING */}
          <div className="lg:col-span-8 flex flex-col text-left items-start w-full pl-0 ml-0">
            
            {/* 1️⃣ PUNCHLINE - Balanced offset from edge */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest text-[#096b90] uppercase mb-4 flex flex-col gap-1 leading-none font-mono"
            >
              <span><b>Architects</b></span>
              <span><b>Of</b></span>
              <span className="text-[#a1ccdc]"><b>Intelligence</b></span>
            </motion.div>

            {/* 2️⃣ NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-xl md:text-2xl font-bold tracking-wider text-zinc-200 uppercase mb-6"
            >
              Abdullah Asim
            </motion.h1>

            {/* 3️⃣ DETAILED DESCRIPTION BODY */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed text-justify opacity-80 pb-6 border-t border-zinc-800/20 w-full max-w-2xl mb-6"
            >
              I engineer high-performance web applications powered by scalable, enterprise-grade cloud architecture. 
              Leveraging deep ML and DL expertise, I build intelligent core systems that transform complex data into actionable logic. 
              Through advanced n8n workflows, I orchestrate custom automation pipelines that eliminate manual operational bottlenecks. 
              Ultimately, I deliver unified, production-ready smart solutions precisely optimized to scale with your business demands.
            </motion.p>

            {/* 4️⃣ COMPACT CORE BUTTONS LABELS */}
            <div className="flex flex-wrap gap-3 w-full max-w-2xl">
              {buttonsList.map((text, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-fit inline-flex items-center justify-center px-5 py-3 rounded-xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-md cursor-pointer hover:border-[#096b90]/40 hover:bg-[#096b90]/5 transition-all duration-300 shadow-md group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-[#a1ccdc]/50 m-2 transition-colors duration-300" />
                  <span className="text-xs font-black text-[#096b90] tracking-wide text-center whitespace-nowrap group-hover:text-white transition-colors duration-200">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT CONTENT COLUMN - PROFILE PICTURE CONTAINER */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-start w-full lg:pt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 aspect-square overflow-hidden group rounded-xl bg-transparent"
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden relative rounded-xl">
                <img 
                  src="/profile.webp" 
                  alt="Abdullah Asim Profile" 
                  className="w-full h-full object-cover z-10 opacity-95 group-hover:scale-105 transition-all duration-500 rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('image-fail-node-final-width');
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div id="image-fail-node-final-width" className="hidden text-center z-10 p-2">
                  <span className="text-zinc-600 text-[9px] font-mono uppercase">[ IMAGE NOT FOUND ]</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}