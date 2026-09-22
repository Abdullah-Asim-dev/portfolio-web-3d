'use client';

import dynamic from 'next/dynamic';

const DynamicNavbar = dynamic(
  () => import('./Navbar').then((mod) => mod.default),
  { ssr: false }
);

const DynamicHomeSection = dynamic(
  () => import('./Home').then((mod) => mod.default),
  { ssr: false }
);

const DynamicGallerySection = dynamic(
  () => import('./gallery').then((mod) => mod.default),
  { ssr: false }
);

const DynamicAboutSection = dynamic(
  () => import('./About').then((mod) => mod.default),
  { ssr: false }
);

const DynamicServicesSection = dynamic(
  () => import('./Services').then((mod) => mod.default),
  { ssr: false }
);

const DynamicProjectsSection = dynamic(
  () => import('./Projects').then((mod) => mod.default),
  { ssr: false }
);

const DynamicTechStackSection = dynamic(
  () => import('./TechStack').then((mod) => mod.default),
  { ssr: false }
);

const DynamicBlogSection = dynamic(
  () => import('./Blog').then((mod) => mod.default),
  { ssr: false }
);

const DynamicContactSection = dynamic(
  () => import('./Contact').then((mod) => mod.default),
  { ssr: false }
);

const DynamicParticleBackground = dynamic(
  () => import('./particle-background').then((mod) => mod.default),
  { ssr: false }
);

// 🚀 DYNAMICALLY IMPORTED THE NEW AI VOICE CHATBOT AGENT
const DynamicAiVoiceBot = dynamic(
  () => import('./AiVoiceBot').then((mod) => mod.default),
  { ssr: false }
);

export default function HomeClient() {
  return (
    <main className="relative min-h-screen w-full bg-[#040911] text-white overflow-x-hidden">
      {/* Moving particle background fixed on back layer */}
      <DynamicParticleBackground />

      {/* Sticky/Fixed Navigation Controller Header */}
      <DynamicNavbar />

      {/* 🚀 FIXED: Removed the self-closing slash from the div tag below to unblock layout components tree rendering */}
      <div className="relative z-10 w-full flex flex-col bg-transparent">
        
        {/* Hero Section */}
        <div id="home" className="w-full">
          <DynamicHomeSection />
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="w-full">
          <DynamicGallerySection />
        </div>

        {/* About Section */}
        <div id="about" className="w-full">
          <DynamicAboutSection />
        </div>

        {/* Services Section */}
        <div id="services" className="w-full">
          <DynamicServicesSection />
        </div>

        {/* Projects Section */}
        <div id="projects" className="w-full">
          <DynamicProjectsSection />
        </div>

        {/* Tech Stack Section */}
        <div id="tech" className="w-full">
          <DynamicTechStackSection />
        </div>

        {/* Blog Section */}
        <div id="blog" className="w-full">
          <DynamicBlogSection />
        </div>

        {/* 🚀 FIXED: Structural div nodes layout separated cleanly outside the blog container wrapper element */}
        <div id="contact" className="w-full">
          <DynamicContactSection />
        </div>

      </div>

      {/* 🚀 AI VOICE MULTI-AGENT FLOATING ENGINE LAYER NODE (MOUNTED DIRECTLY TO THE MAIN ROOT INTERFACE VIEWPORT) */}
      <DynamicAiVoiceBot />

    </main>
  );
}
