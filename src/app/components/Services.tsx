'use client';

import React from 'react';

/* =========================================================
   SERVICES DATA (All 10 Core Professional Services)
========================================================= */
const SERVICES_DATA = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Development",
    description: "Building production-grade, highly optimized, and ultra-fast web applications using modern scalable tech stacks."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "App Development",
    description: "Engineering cross-platform, native-performing mobile applications with fluid interfaces and smooth operations."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Chatbot Development",
    description: "Deploying intelligent conversational interfaces with context retention capability to improve user retention."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Automation",
    description: "Designing end-to-end intelligent pipelines that connect systems and eliminate manual workflows entirely."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "AI Call Agents",
    description: "Developing autonomous, reactive vocal systems for seamless voice handling and scheduling operations."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "AI Voice Agent",
    description: "Integrating real-time speech synthesis models to deliver premium quality, natural sounding vocal feedback."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Cloud & Deployment",
    description: "Architecting cloud instances with multi-region scaling capabilities to ensure maximum uptime performance."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "SaaS Development",
    description: "Building production-ready, multitenant software ecosystems backed by secure layer logic configurations."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "API & Backend Development",
    description: "Designing structured, highly performant RESTful/GraphQL schemas to connect internal operations cleanly."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Web Design",
    description: "Creating premium, sleek digital visual interfaces matching immersive modern dark-theme user dynamics."
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto block relative">
      
      {/* 1. CENTERED HEADER WITH TAGLINE AND UNDERLINE */}
      <div className="w-full flex flex-col items-center justify-center text-center mb-20 relative z-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#A1CCDC] to-[#096B90] uppercase block select-none">
          My Services
        </h2>
        {/* Sleek centralized text line */}
        <p className="text-gray-400 text-xs md:text-sm font-medium mt-3 tracking-wide max-w-xl">
          Transforming complex engineering bottlenecks into seamless, production-ready digital capabilities.
        </p>
        <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#096B90] via-[#A1CCDC] to-[#096B90] shadow-[0_0_10px_rgba(9,107,144,0.7)] animate-pulse" />
      </div>

      {/* 2. RESPONSIVE GRID FOR 10 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
        {SERVICES_DATA.map((service, index) => (
          <div 
            key={index}
            className="group relative rounded-2xl border border-white/10 bg-[#040911]/60 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#096B90]/50 hover:shadow-[0_10px_30px_rgba(9,107,144,0.15)] overflow-hidden"
          >
            {/* Ambient Background Glow Effect on Hover */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#096B90]/0 via-transparent to-[#096B90]/0 group-hover:from-[#096B90]/5 group-hover:to-transparent transition-all duration-500" />
            
            {/* Dynamic Glass Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A1CCDC]/0 to-transparent group-hover:via-[#A1CCDC]/40 transition-all duration-500" />

            {/* Icon Wrapper */}
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-[#A1CCDC] group-hover:bg-[#096B90] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(9,107,144,0.1)]">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold tracking-wide text-white mb-3 group-hover:text-[#A1CCDC] transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
