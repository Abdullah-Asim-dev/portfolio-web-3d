
'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto block w-full max-w-7xl px-4 py-24 md:px-8"
    >
      {/* Header */}
      <div className="relative z-20 mb-16 flex w-full flex-col items-center justify-center text-center">
        <h2 className="bg-gradient-to-r from-[#A1CCDC] to-[#096B90] bg-clip-text text-4xl font-black uppercase tracking-wider text-transparent md:text-5xl">
          About Me
        </h2>

        <div className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-[#096B90] via-[#A1CCDC] to-[#096B90]" />
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-12">

        {/* Left: Bio */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07101a]/80 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[#096B90]/40 lg:col-span-7">

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#096B90]/40 to-transparent" />

          <div className="space-y-6">
            <h3 className="text-2xl font-black leading-tight text-white">
              Building The Future of{' '}
              <span className="text-[#A1CCDC]">
                Web & AI Systems
              </span>
            </h3>

            <p className="text-sm font-medium leading-relaxed text-gray-400">
              I am a{' '}
              <strong className="text-gray-300">
                Full-Stack Developer
              </strong>{' '}
              focused on building modern web applications and practical AI-powered
              solutions. My journey started with an ICS Computer Science
              background, where I developed a strong foundation in programming
              and computer science.
            </p>

            <p className="text-sm font-medium leading-relaxed text-gray-400">
              I work with technologies such as{' '}
              <strong className="text-gray-300">
                React, Next.js, Node.js, Express, MongoDB, Python
              </strong>{' '}
              and automation tools like{' '}
              <strong className="text-gray-300">
                n8n
              </strong>{' '}
              to build useful, responsive, and scalable digital experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 space-y-6 border-t border-white/[0.06] pt-5">
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                <span className="block text-lg font-bold text-[#A1CCDC]">
                  6+
                </span>
                <span className="font-bold text-gray-500">
                  Projects
                </span>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                <span className="block text-lg font-bold text-[#A1CCDC]">
                  24+
                </span>
                <span className="font-bold text-gray-500">
                  Repositories
                </span>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                <span className="block text-lg font-bold text-[#A1CCDC]">
                  100%
                </span>
                <span className="font-bold text-gray-500">
                  Focus
                </span>
              </div>

            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Abdullah-Asim-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-xs font-bold uppercase text-white transition-colors duration-300 hover:border-[#096B90]/40 hover:bg-white/[0.08]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-asim-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#096B90]/30 bg-[#096B90]/10 px-4 py-2.5 text-xs font-bold uppercase text-[#A1CCDC] transition-colors duration-300 hover:bg-[#096B90] hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 lg:col-span-5">

          {/* Academic */}
          <div className="group flex flex-1 flex-col justify-center rounded-2xl border border-white/[0.07] bg-[#07101a]/80 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-[#096B90]/30">
            <span className="w-fit rounded bg-[#096B90]/10 px-2 py-1 text-[10px] font-bold uppercase text-[#A1CCDC]">
              Academic Base
            </span>

            <h4 className="mt-2 text-base font-bold text-white">
              ICS Computer Science
            </h4>

            <p className="mt-1 text-xs leading-relaxed text-gray-400">
              2023 – 2025
            </p>

            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              Built a foundation in programming, mathematics, algorithms,
              and core computer science concepts.
            </p>
          </div>

          {/* Development Track */}
          <div className="group flex flex-1 flex-col justify-center rounded-2xl border border-white/[0.07] bg-[#07101a]/80 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-[#096B90]/30">
            <span className="w-fit rounded bg-[#096B90]/10 px-2 py-1 text-[10px] font-bold uppercase text-[#A1CCDC]">
              Development Track
            </span>

            <h4 className="mt-2 text-base font-bold text-white">
              Full-Stack & AI Automation
            </h4>

            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              Building full-stack applications, backend APIs, AI integrations,
              and workflow automation with modern development tools.
            </p>
          </div>

          {/* Capabilities */}
          <div className="group flex flex-1 flex-col justify-center rounded-2xl border border-white/[0.07] bg-[#07101a]/80 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-[#096B90]/30">
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Current Capabilities
            </h4>

            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] font-medium text-gray-400">
              <div>
                <span className="mr-1 text-[#096B90]">✓</span>
                Web Applications
              </div>

              <div>
                <span className="mr-1 text-[#096B90]">✓</span>
                React Apps
              </div>

              <div>
                <span className="mr-1 text-[#096B90]">✓</span>
                REST APIs
              </div>

              <div>
                <span className="mr-1 text-[#096B90]">✓</span>
                AI Automation
              </div>

              <div>
                <span className="mr-1 text-[#096B90]">✓</span>
                Real-Time Apps
              </div>

              <div>
                <span className="mr-1 text-[#096B90]">✓</span>
                Backend Systems
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

