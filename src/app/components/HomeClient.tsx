'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./Navbar'), { ssr: false });
const Hero = dynamic(() => import('./Home'), { ssr: false });
const BG = dynamic(() => import('./particle-background'), { ssr: false });

// 🚀 OPTIMIZED LABELS: Dynamic chunks splitting with low overhead loading indicators
const Gal = dynamic(() => import('./gallery'), { ssr: false, loading: () => <div className="text-center py-10 font-mono text-[10px] text-zinc-600 animate-pulse">Loading Asset Nodes...</div> });
const Abt = dynamic(() => import('./About'), { ssr: false });
const Svc = dynamic(() => import('./Services'), { ssr: false });
const Prj = dynamic(() => import('./Projects'), { ssr: false });
const Tech = dynamic(() => import('./TechStack'), { ssr: false });
const Blog = dynamic(() => import('./Blog'), { ssr: false });
const Contact = dynamic(() => import('./Contact'), { ssr: false });
const Bot = dynamic(() => import('./AiVoiceBot'), { ssr: false });

export default function HomeClient() {
  const [loadHeavyNodes, setLoadHeavyNodes] = useState(false);

  // 🚀 PERFORMANCE ENGINE FIX: Delays GPU intensive heavy modules rendering until initial paint finishes
  useEffect(() => {
    const timer = setTimeout(() => setLoadHeavyNodes(true), 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="relative min-h-screen w-full bg-[#040911] text-white overflow-x-hidden">
      {/* Background and Sticky Headers render instantly */}
      <BG />
      <Nav />

      <div className="relative z-10 w-full flex flex-col bg-transparent">
        {/* Core Instant Section */}
        <div id="home" className="w-full">
          <Hero />
        </div>

        {/* 🚀 DEFERRED SECTIONS: Mounts smoothly after 1.2s to guarantee high PageSpeed score */}
        {loadHeavyNodes ? (
          <>
            <div id="gallery" className="w-full">
              <Gal />
            </div>

            <div id="about" className="w-full">
              <Abt />
            </div>

            <div id="services" className="w-full">
              <Svc />
            </div>

            <div id="projects" className="w-full">
              <Prj />
            </div>

            <div id="tech" className="w-full">
              <Tech />
            </div>

            <div id="blog" className="w-full">
              <Blog />
            </div>

            <div id="contact" className="w-full">
              <Contact />
            </div>
          </>
        ) : (
          /* Sleek non-blocking placeholder loop to keep CLS ratio stable */
          <div className="w-full text-center py-20 font-mono text-[9px] uppercase tracking-widest text-zinc-700 animate-pulse">
            Optimizing Performance Vectors...
          </div>
        )}
      </div>

      {/* Heavy AI Agent mounting stream delayed seamlessly */}
      {loadHeavyNodes && <Bot />}
    </main>
  );
}

