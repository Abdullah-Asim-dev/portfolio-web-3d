'use client';

import React, { useState, useMemo } from 'react';

/* =========================================================
   COMPACT TECH DATA ENGINE (All 29 Items Safely Mapped)
========================================================= */
const TECH_DATA = [
  // --- LANGUAGES ---
  { name: "HTML5", category: "Languages", rating: "98%", path: "M1 0h22l-2 20-9 4-9-4L1 0zm16 5H6l.3 4h10.4l-.4 5-4.3 1.5-4.3-1.5-.3-3H4.5l.5 6.5 7 2.2 7-2.2.8-9.5z" },
  { name: "CSS3", category: "Languages", rating: "95%", path: "M1 0h22l-2 20-9 4-9-4L1 0zm16 8H6.5l.2 3h9.8l-.6 7-5.4 1.8-5.4-1.8-.4-4h2.5l.3 1.8 3 1 3-1 .4-4H4.5l.5 6.5" },
  { name: "JavaScript", category: "Languages", rating: "95%", path: "M0 0h24v24H0V0zm22 18.2c-.2-1-.9-2-3-2.8-.7-.4-1.5-.6-1.8-1.2l-.1-.7c.2-.6.9-.8 1.5-.7.4.1.8.3 1 .8l1.2-.7c-.3-.6-.8-1-1.4-1.2-.7-.3-1.6-.2-2.1.2-.7.5-.9 1.4-.5 2.1.5.9 1.9 1.1 2.6 1.5.6.3.8.5.9.9.2.7-.1 1.4-1 1.5-.7.1-1.3-.2-1.7-.6-.4-.5-.5-1-.5-1.7l-1.3.1c0 1.3.5 2.3 1.4 3 .8.6 2 .6 2.9.3 1.1-.4 1.8-1.3 1.6-2.6z" },
  { name: "ReactJS", category: "Languages", rating: "94%", path: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm-4-10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" },
  { name: "Next.js", category: "Languages", rating: "95%", path: "M12 0a12 12 0 1012 12A12 12 0 0012 0zm5 17.5l-5-6.4v6.4h-1.5V7.5h1.5l5 6.5V7.5h1.5v10z" },
  { name: "React Native", category: "Languages", rating: "88%", path: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 13.5h-2v-2h2v2zm0-3.5h-2V7h2v5z" },
  { name: "Python", category: "Languages", rating: "90%", path: "M12 0C5.3 0 5.6 2.9 5.6 2.9v2.2h6.4v.9H3.1s-2.8-.3-2.8 5.6c0 5.9 2.5 5.8 2.5 5.8h1.5v-2.1c0-2.5 2-4.7 4.5-4.7h6.4s2.6 0 2.6-2.5V3.4S18 .1 11.9 0z" },
  
  // --- TECHNOLOGIES ---
  { name: "Frontend Architecture", category: "Technologies", rating: "96%", path: "M17.2 6.7L22.5 12l-5.3 5.3M6.7 17.3L1.5 12l5.2-5.3M13.9 3.7l-4.5 16.5" },
  { name: "Backend Development", category: "Technologies", rating: "92%", path: "M5 14.2h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5" },
  { name: "Cloud & Deployment", category: "Technologies", rating: "90%", path: "M12 16.5V9.7m0 0l3 3m-3-3l-3 3M6.7 19.5a4.5 4.5 0 01-1.4-8.7 5.2 5.2 0 0110.2-2.3 3 3 0 013.7 3.8A3.7 3.7 0 0118 19.5z" },
  { name: "CI-CD Pipelines", category: "Technologies", rating: "85%", path: "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21" },
  { name: "SaaS Systems", category: "Technologies", rating: "90%", path: "M13.5 21v-7.5a.7.7 0 01.7-.7h3a.7.7 0 01.7.7V21m-4.5 0H2.3m11.1 0H18m0 0h3.6m-1.3 0V9.3" },
  { name: "Streamlit", category: "Technologies", rating: "88%", path: "M12 0L1.7 6v12L12 24l10.3-6V6L12 0zm7.5 16.5l-7.5 4.3-7.5-4.3v-8.7l7.5-4.3 7.5 4.3v8.7z" },
  { name: "NumPy", category: "Technologies", rating: "86%", path: "M12 2.2l9.7 5.6v11.2L12 24.7 2.2 19.1V7.8L12 2.2z" },
  { name: "Pandas", category: "Technologies", rating: "88%", path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 15.5h-3v3h-3v-3h-3v-3h3v-3h3v3h3v3z" },
  { name: "Matplotlib", category: "Technologies", rating: "82%", path: "M3 13c0-.6.5-1 1.1-1h2.3c.6 0 1.1.5 1.1 1.1v6.7c0 .6-.5 1.1-1.1 1.1h-2.2A1.1 1.1 0 013 19.8V13zM9.7 8.6c0-.6.5-1 1.1-1h2.3" },
  { name: "Seaborn", category: "Technologies", rating: "84%", path: "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6zM13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" },
  { name: "Databases (SQL/NoSQL)", category: "Technologies", rating: "88%", path: "M20.2 6.3c0 2.2-3.6 4.1-8.2 4.1S3.7 8.6 3.7 6.3m16.5 0c0-2.2-3.6-4.1-8.2-4.1S3.7 4 3.7 6.3m16.5 0v11.2" },

  // --- TOOLS ---
  { name: "Replit", category: "Tools", rating: "92%", path: "M2 3h8v6H2V3zm12 0h8v6h-8V3zM2 15h8v6H2v-6zm12 0h8v6h-8v-6z" },
  { name: "Lovable", category: "Tools", rating: "94%", path: "M12 21.3l-1.4-1.3C5.4 15.3 2 12.2 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2 1.1-1.2 2.8-2 4.5-2 3 0 5.5 2.4 5.5 5.5 0 3.7-3.4 6.8-8.5 11.5L12 21.3z" },
  { name: "Vercel", category: "Tools", rating: "95%", path: "M24 22.5H0L12 1.4l12 21.1z" },
  { name: "AWS", category: "Tools", rating: "86%", path: "M22.5 16.5c-1.5 1-3.5 1.5-5.5 1.5-3.5 0-6.5-1.5-8-4 1.5-.5 3-.5 4.5-.5 2.5 0 5 .5 7 1.5-1.5-1.5-3-2.5-5-3 3-1 6-.5 8.5 1.5z" },
  { name: "Claude Code", category: "Tools", rating: "95%", path: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5h-2v-2h2zm0-3.5h-2V7h2z" },
  { name: "Google Stitch", category: "Tools", rating: "85%", path: "M19.4 11.5l-4.2-4.2a1 1 0 00-1.4 0L12 9.1l-1.8-1.8a1 1 0 00-1.4 0L4.6 11.5a1 1 0 000 1.4l4.2 4.2a1 1 0 001.4 0l1.8-1.8" },
  { name: "Cursor", category: "Tools", rating: "96%", path: "M13.2 12l4.8-4.8h-4.2L9 12l4.8 4.8h4.2L13.2 12zM6 7.2h1.8v9.6H6V7.2z" },
  { name: "Botlai", category: "Tools", rating: "88%", path: "M12 2a5 5 0 00-5 5v2a3 3 0 00-3 3v5a3 3 0 003 3h10a3 3 0 003-3v-5a3 3 0 00-3-3V7a5 5 0 00-5-5z" },
  { name: "Emergent", category: "Tools", rating: "85%", path: "M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" },
  { name: "n8n Automation", category: "Tools", rating: "92%", path: "M12 2a4 4 0 104 4 4 4 0 00-4-4zm0 16a4 4 0 104 4 4 4 0 00-4-4zM2 12a4 4 0 104-4 4 4 0 00-4 4z" },
  { name: "Dialogflow", category: "Tools", rating: "90%", path: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-2h2v2z" },
  { name: "Docker", category: "Tools", rating: "84%", path: "M14 8.8h-2.1v2.1h2.1V8.8zm-2.6 0H9.3v2.1h2.1V8.8zm-2.6 0H6.6v2.1h2.1V8.8z" }
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Languages' | 'Technologies' | 'Tools'>('All');

  const filteredTech = useMemo(() => {
    if (activeTab === 'All') return TECH_DATA;
    return TECH_DATA.filter(item => item.category === activeTab);
  }, [activeTab]);

  return (
    <section className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto block relative">
      
      {/* 1. CENTERED HEADER WITH GRADIENT ACCENT AND GLOWING UNDERLINE */}
      <div className="w-full flex flex-col items-center justify-center text-center mb-10 relative z-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#A1CCDC] to-[#096B90] uppercase block select-none">
          Tech Stack
        </h2>
        <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#096B90] via-[#A1CCDC] to-[#096B90] shadow-[0_0_10px_rgba(9,107,144,0.7)] animate-pulse" />
      </div>

      {/* 2. DYNAMIC INTERACTIVE FILTER TABS (All, Languages, Technologies, Tools) */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 relative z-20">
        {(['All', 'Languages', 'Technologies', 'Tools'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 ${
              activeTab === tab
                ? 'bg-[#096B90] border-[#A1CCDC] text-white shadow-[0_0_15px_rgba(9,107,144,0.3)] scale-105'
                : 'border-white/5 bg-[#040911]/40 text-gray-400 hover:text-white hover:border-[#096B90]/40'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. RESPONSIVE GRID FOR INDIVIDUAL SKILL CARDS (NO MAIN BOX CONTAINER) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full relative z-10">
        {filteredTech.map((tech, index) => (
          <div 
            key={index}
            className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-[#040911]/40 backdrop-blur-md p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#096B90]/50 hover:shadow-[0_10px_25px_rgba(9,107,144,0.15)] overflow-hidden select-none"
          >
            {/* Ambient Background Hover Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#096B90]/0 via-transparent to-[#096B90]/0 group-hover:from-[#096B90]/5 transition-all duration-500" />

            {/* Brand Monogram Vector Logo Container */}
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A1CCDC] group-hover:bg-[#096B90] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={tech.path} />
              </svg>
            </div>

            {/* Title & Progress Metrics Layout */}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-xs font-bold text-white group-hover:text-[#A1CCDC] transition-colors truncate">
                {tech.name}
              </span>
              <div className="w-full bg-white/5 h-[3px] rounded-full mt-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#096B90] to-[#A1CCDC] h-full rounded-full"
                  style={{ width: tech.rating }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

