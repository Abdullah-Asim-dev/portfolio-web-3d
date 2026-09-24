'use client';

import React, { useMemo, useState } from 'react';
import type { IconType } from 'react-icons';

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNumpy,
  SiPandas,
  SiStreamlit,
  SiVercel,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiReplit,
  SiN8N,
  SiGooglecloud,
  SiDialogflow,
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

import {
  Code2,
  Server,
  Cloud,
  Workflow,
  Bot,
} from 'lucide-react';

type Category =
  | 'All'
  | 'Languages'
  | 'Technologies'
  | 'Tools';

type TechItem = {
  name: string;
  category: Exclude<Category, 'All'>;
  rating: string;
  icon: IconType;
};

const TECH_DATA: TechItem[] = [
  // =========================================================
  // LANGUAGES
  // =========================================================

  {
    name: 'HTML5',
    category: 'Languages',
    rating: '98%',
    icon: SiHtml5,
  },

  {
    name: 'CSS3',
    category: 'Languages',
    rating: '95%',
     icon: Code2,
  },

  {
    name: 'JavaScript',
    category: 'Languages',
    rating: '95%',
    icon: SiJavascript,
  },

  {
    name: 'TypeScript',
    category: 'Languages',
    rating: '82%',
    icon: SiTypescript,
  },

  {
    name: 'React.js',
    category: 'Languages',
    rating: '94%',
    icon: SiReact,
  },

  {
    name: 'Next.js',
    category: 'Languages',
    rating: '95%',
    icon: SiNextdotjs,
  },

  {
    name: 'React Native',
    category: 'Languages',
    rating: '88%',
    icon: SiReact,
  },

  {
    name: 'Python',
    category: 'Languages',
    rating: '90%',
    icon: SiPython,
  },

  // =========================================================
  // TECHNOLOGIES
  // =========================================================

  {
    name: 'Frontend Architecture',
    category: 'Technologies',
    rating: '96%',
    icon: Code2,
  },

  {
    name: 'Backend Development',
    category: 'Technologies',
    rating: '92%',
    icon: Server,
  },

  {
    name: 'Node.js',
    category: 'Technologies',
    rating: '92%',
    icon: SiNodedotjs,
  },

  {
    name: 'Express.js',
    category: 'Technologies',
    rating: '90%',
    icon: SiExpress,
  },

  {
    name: 'Tailwind CSS',
    category: 'Technologies',
    rating: '94%',
    icon: SiTailwindcss,
  },

  {
    name: 'MongoDB',
    category: 'Technologies',
    rating: '88%',
    icon: SiMongodb,
  },

  {
    name: 'MySQL',
    category: 'Technologies',
    rating: '80%',
    icon: SiMysql,
  },

  {
    name: 'PostgreSQL',
    category: 'Technologies',
    rating: '78%',
    icon: SiPostgresql,
  },

  {
    name: 'NumPy',
    category: 'Technologies',
    rating: '86%',
    icon: SiNumpy,
  },

  {
    name: 'Pandas',
    category: 'Technologies',
    rating: '88%',
    icon: SiPandas,
  },

  {
    name: 'Streamlit',
    category: 'Technologies',
    rating: '88%',
    icon: SiStreamlit,
  },

  {
    name: 'Cloud & Deployment',
    category: 'Technologies',
    rating: '90%',
    icon: Cloud,
  },

  {
    name: 'CI/CD Pipelines',
    category: 'Technologies',
    rating: '85%',
    icon: Workflow,
  },

  // =========================================================
  // TOOLS
  // =========================================================

  {
    name: 'Git',
    category: 'Tools',
    rating: '90%',
    icon: SiGit,
  },

  {
    name: 'GitHub',
    category: 'Tools',
    rating: '92%',
    icon: SiGithub,
  },

  {
    name: 'VS Code',
    category: 'Tools',
    rating: '95%',
    icon: VscVscode,
  },

  {
    name: 'Postman',
    category: 'Tools',
    rating: '88%',
    icon: SiPostman,
  },

  {
    name: 'Replit',
    category: 'Tools',
    rating: '92%',
    icon: SiReplit,
  },

  {
    name: 'Lovable',
    category: 'Tools',
    rating: '94%',
    icon: Bot,
  },

  {
    name: 'Vercel',
    category: 'Tools',
    rating: '95%',
    icon: SiVercel,
  },

  {
    name: 'AWS',
    category: 'Tools',
    rating: '86%',
    icon: Cloud,
  },

  {
    name: 'Docker',
    category: 'Tools',
    rating: '84%',
    icon: SiDocker,
  },

  {
    name: 'n8n Automation',
    category: 'Tools',
    rating: '92%',
    icon: SiN8N,
  },

  {
    name: 'Dialogflow',
    category: 'Tools',
    rating: '90%',
    icon: SiDialogflow,
  },

  {
    name: 'Google Cloud',
    category: 'Tools',
    rating: '82%',
    icon: SiGooglecloud,
  },

  {
    name: 'AI Development',
    category: 'Tools',
    rating: '90%',
    icon: Bot,
  },
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] =
    useState<Category>('All');

  const filteredTech = useMemo(() => {
    if (activeTab === 'All') {
      return TECH_DATA;
    }

    return TECH_DATA.filter(
      (item) => item.category === activeTab
    );
  }, [activeTab]);

  const tabs: Category[] = [
    'All',
    'Languages',
    'Technologies',
    'Tools',
  ];

  return (
    <section
      id="tech"
      className="relative mx-auto w-full max-w-7xl px-4 py-20 md:px-8"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative z-20 mb-10 flex w-full flex-col items-center justify-center text-center">
        <h2 className="select-none bg-gradient-to-r from-[#A1CCDC] to-[#096B90] bg-clip-text text-4xl font-extrabold uppercase tracking-wider text-transparent md:text-5xl">
          Tech Stack
        </h2>

        <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#096B90] via-[#A1CCDC] to-[#096B90] shadow-[0_0_10px_rgba(9,107,144,0.7)]" />

        <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500">
          Technologies, frameworks, languages and tools I use
          to build modern digital products.
        </p>
      </div>

      {/* =====================================================
          FILTER TABS
      ====================================================== */}

      <div className="relative z-20 mb-12 flex flex-wrap items-center justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-xl border px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
              activeTab === tab
                ? 'scale-105 border-[#A1CCDC] bg-[#096B90] text-white shadow-[0_0_15px_rgba(9,107,144,0.3)]'
                : 'border-white/5 bg-[#040911]/40 text-gray-400 hover:border-[#096B90]/40 hover:bg-white/5 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* =====================================================
          TECH GRID
      ====================================================== */}

      <div className="relative z-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTech.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-[#040911]/40 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#096B90]/50 hover:shadow-[0_10px_25px_rgba(9,107,144,0.15)]"
            >
              {/* Hover Glow */}

              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#096B90]/0 via-transparent to-[#096B90]/0 transition-all duration-500 group-hover:from-[#096B90]/10" />

              {/* =================================================
                  REAL ICON
              ================================================== */}

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#A1CCDC] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#A1CCDC]/40 group-hover:bg-[#096B90] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              {/* =================================================
                  NAME + RATING
              ================================================== */}

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-xs font-bold text-white transition-colors group-hover:text-[#A1CCDC]">
                    {tech.name}
                  </span>

                  <span className="shrink-0 text-[10px] font-semibold text-zinc-500">
                    {tech.rating}
                  </span>
                </div>

                {/* Progress Bar */}

                <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#096B90] to-[#A1CCDC] transition-all duration-700 group-hover:shadow-[0_0_8px_rgba(161,204,220,0.6)]"
                    style={{
                      width: tech.rating,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}