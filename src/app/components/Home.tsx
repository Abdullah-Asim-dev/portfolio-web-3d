'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const buttonsList = [
  '1+ Years Experience',
  'Cloud Architecture',
  'ML / DL Logic',
  'n8n Workflows',
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent px-6 pb-16 pt-36 md:px-8"
    >
      <div className="relative z-20 mx-auto w-full max-w-7xl px-0">
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <div className="ml-0 flex w-full flex-col items-start text-left lg:col-span-8">

            {/* HEADLINE */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 flex flex-col gap-1 font-mono text-3xl font-black uppercase leading-none tracking-widest text-[#096b90] md:text-5xl lg:text-6xl"
            >
              <span>Architects</span>
              <span>Of</span>
              <span className="text-[#a1ccdc]">Intelligence</span>
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mb-6 text-xl font-bold uppercase tracking-wider text-zinc-200 md:text-2xl"
            >
              Abdullah Asim
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-6 w-full max-w-2xl border-t border-zinc-800/20 pb-6 pt-4 text-justify text-xs font-light leading-relaxed text-zinc-400 opacity-80 md:text-sm"
            >
              I engineer high-performance web applications powered by scalable,
              enterprise-grade cloud architecture. Leveraging deep ML and DL
              expertise, I build intelligent core systems that transform complex
              data into actionable logic. Through advanced n8n workflows, I
              orchestrate custom automation pipelines that eliminate manual
              operational bottlenecks. Ultimately, I deliver unified,
              production-ready smart solutions precisely optimized to scale with
              your business demands.
            </motion.p>

            {/* SKILL LABELS */}
            <div className="flex w-full max-w-2xl flex-wrap gap-3">
              {buttonsList.map((text) => (
                <motion.div
                  key={text}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex w-fit cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/20 px-5 py-3 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#096b90]/40 hover:bg-[#096b90]/5"
                >
                  <div className="absolute right-0 top-0 m-2 h-2 w-2 border-r border-t border-transparent transition-colors duration-300 group-hover:border-[#a1ccdc]/50" />

                  <span className="whitespace-nowrap text-center text-xs font-black tracking-wide text-[#096b90] transition-colors duration-200 group-hover:text-white">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="flex w-full items-start justify-center lg:col-span-4 lg:justify-end lg:pt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative aspect-square w-48 overflow-hidden rounded-xl bg-transparent sm:w-56 md:w-64"
            >
              <Image
                src="/profile.webp"
                alt="Abdullah Asim Profile"
                fill
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="z-10 rounded-xl object-cover opacity-95 transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}