'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./Navbar'), {
  ssr: false,
});

const Hero = dynamic(() => import('./Home'), {
  ssr: false,
});

const BG = dynamic(() => import('./particle-background'), {
  ssr: false,
});

// Below-the-fold sections
const Gal = dynamic(() => import('./gallery'));
const Abt = dynamic(() => import('./About'));
const Svc = dynamic(() => import('./Services'));
const Prj = dynamic(() => import('./Projects'));
const Tech = dynamic(() => import('./TechStack'));
const Blog = dynamic(() => import('./Blog'));
const Contact = dynamic(() => import('./Contact'));

// Heavy AI component
const Bot = dynamic(() => import('./AiVoiceBot'), {
  ssr: false,
});

export default function HomeClient() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#040911] text-white">

      {/* Background */}
      <BG />

      {/* Navigation */}
      <Nav />

      <div className="relative z-10 flex w-full flex-col bg-transparent">

        {/* HERO */}
        <div id="home" className="w-full">
          <Hero />
        </div>

        {/* GALLERY */}
        <section id="gallery" className="w-full">
          <Gal />
        </section>

        {/* ABOUT */}
        <section id="about" className="w-full">
          <Abt />
        </section>

        {/* SERVICES */}
        <section id="services" className="w-full">
          <Svc />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="w-full">
          <Prj />
        </section>

        {/* TECH STACK */}
        <section id="tech" className="w-full">
          <Tech />
        </section>

        {/* BLOG */}
        <section id="blog" className="w-full">
          <Blog />
        </section>

        {/* CONTACT */}
        <section id="contact" className="w-full">
          <Contact />
        </section>

      </div>

      {/* AI Voice Bot */}
      <Bot />

    </main>
  );
}