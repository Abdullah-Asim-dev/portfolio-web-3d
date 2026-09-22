'use client';

import React, { useState, useMemo } from 'react';

/* =========================================================
   PROJECTS DATA (Pre-categorized under Development, Tools, SaaS)
========================================================= */
const PROJECTS_DATA = [
  {
    title: "Full-Ecommerce App",
    description: "A production-ready architecture featuring secure checkout logic, product dashboards, and complete MERN CRUD integration layers.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    category: "Development",
    liveLink: "https://mern-ecommerce-app-alpha-henna.vercel.app/",
    githubLink: "https://github.com/Abdullah-Asim-dev/Mern-Ecommerce-App.git"
  },
  {
    title: "Chat Application",
    description: "Real-time communication engine leveraging secure web socket instances, persistent history layers, and typing synchronizations.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    category: "Development",
    liveLink: "https://gleaming-fairy-e0fcdc.netlify.app/",
    githubLink: "https://github.com/Abdullah-Asim-dev/Websocket-App.git"
  },
  {
    title: "JWT Authentication",
    description: "Advanced cryptographic authentication module structured around atomic access tokens, refresh tracking, and protected routing shields.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    category: "SaaS",
    liveLink: "https://jwt-authicatication-xvlc.vercel.app/",
    githubLink: "https://github.com/Abdullah-Asim-dev/JWT-Authicatication.git"
  },
  {
    title: "React Todo App",
    description: "A highly optimized, performant state monitoring utility application engineered with global state hooks and fluid dark glassmorphism.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    category: "Tools",
    liveLink: "https://redux-tool-kit-l7rk-mu.vercel.app/",
    githubLink: "https://github.com/Abdullah-Asim-dev/Redux-Tool-Kit.git"
  },
  {
    title: "Password Generator",
    description: "Cryptographic micro-tool utilizing secure random parameters, custom length configurations, and native copy-to-clipboard interactions.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Tools",
    liveLink: "https://statuesque-zabaione-a8d6d4.netlify.app/",
    githubLink: "https://github.com/Abdullah-Asim-dev/Password-Generator.git"
  },
  {
    title: "Weather Radar Station",
    description: "A comprehensive atmospheric observation interface pulling real-time coordinates and parsing meteorological JSON layers.",
    tech: ["React.js", "JavaScript", "Weather API"],
    category: "SaaS",
    liveLink: "https://jwt-authicatication-xvlc.vercel.app/",
    githubLink: "https://github.com/Abdullah-Asim-dev/React-Weather-App.git"
  }
];

export default function ProjectsSection() {
  // Active Tab State (Options: 'All', 'Development', 'Tools', 'SaaS')
  const [activeTab, setActiveTab] = useState<'All' | 'Development' | 'Tools' | 'SaaS'>('All');

  // Case-insensitive mapping logic to avoid layout parsing bugs
  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter(project => project.category.toLowerCase() === activeTab.toLowerCase());
  }, [activeTab]);

  return (
    <section className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto block relative">
      
      {/* 1. CENTERED HEADER WITH GLOWING UNDERLINE */}
      <div className="w-full flex flex-col items-center justify-center text-center mb-10 relative z-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#A1CCDC] to-[#096B90] uppercase block select-none">
          Projects
        </h2>
        <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#096B90] via-[#A1CCDC] to-[#096B90] shadow-[0_0_10px_rgba(9,107,144,0.7)] animate-pulse" />
      </div>

      {/* 2. DYNAMIC INTERACTIVE FILTER TABS (All, Development, Tools, SaaS) */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16 relative z-20">
        {(['All', 'Development', 'Tools', 'SaaS'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 ${
              activeTab === tab
                ? 'bg-[#096B90] border-[#A1CCDC] text-white shadow-[0_0_15px_rgba(9,107,144,0.4)] scale-105'
                : 'border-white/10 bg-[#040911]/40 text-gray-400 hover:text-white hover:border-[#096B90]/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. RESPONSIVE GRID FOR PROJECTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            onClick={() => window.open(project.liveLink, '_blank')}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#040911]/40 backdrop-blur-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#096B90]/60 hover:shadow-[0_15px_35px_rgba(9,107,144,0.2)] overflow-hidden cursor-pointer min-h-[340px]"
          >
            {/* Ambient Background Flow Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#096B90]/0 via-transparent to-[#096B90]/0 group-hover:from-[#096B90]/8 group-hover:to-transparent transition-all duration-500" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#A1CCDC]/50 transition-all duration-500" />

            <div>
              {/* Category Badge */}
              <div className="mb-4">
                <span className="text-[10px] font-bold tracking-widest text-[#A1CCDC] uppercase bg-[#096B90]/20 px-2.5 py-1 rounded-md border border-[#096B90]/30">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold tracking-wide text-white mb-3 group-hover:text-[#A1CCDC] transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description Excerpt */}
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>

              {/* Technology Tags Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 text-gray-400 group-hover:bg-[#096B90]/10 group-hover:text-white transition-all"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION TRIGGERS FOOTER */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 gap-4">
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveLink, '_blank');
                }}
                className="flex items-center gap-2 text-xs font-bold text-[#A1CCDC] bg-[#096B90]/10 hover:bg-[#096B90] hover:text-white border border-[#096B90]/30 px-4 py-2 rounded-xl transition-all duration-300"
              >
                Live Link
              </button>
              
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubLink, '_blank');
                }}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl transition-all duration-300"
              >
                GitHub Source
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
