'use client';

import React from 'react';

const SERVICES_DATA = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: 'Web Development',
    description:
      'Building responsive and scalable web applications with modern technologies and clean user experiences.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'App Development',
    description:
      'Creating modern mobile applications with responsive interfaces and smooth user experiences.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: 'Chatbot Development',
    description:
      'Building conversational interfaces that help businesses automate support and improve customer interactions.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'AI Automation',
    description:
      'Connecting tools, APIs, and business processes into practical automated workflows using AI and n8n.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: 'AI Call Agents',
    description:
      'Developing voice-based AI systems for customer conversations, lead handling, and appointment workflows.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    title: 'AI Voice Agent',
    description:
      'Integrating real-time voice technologies to create natural and interactive AI-powered experiences.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: 'Cloud & Deployment',
    description:
      'Deploying web applications and backend services with practical cloud and hosting configurations.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: 'SaaS Development',
    description:
      'Building modern SaaS interfaces and application features with reusable and scalable components.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    title: 'API & Backend Development',
    description:
      'Developing REST APIs and backend services that connect applications, databases, and external services.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: 'Web Design',
    description:
      'Designing clean, responsive, and modern interfaces focused on usability and strong visual presentation.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mx-auto block w-full max-w-7xl px-4 py-24 md:px-8"
    >
      {/* Header */}
      <div className="relative z-20 mb-16 flex w-full flex-col items-center justify-center text-center">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#096B90]">
          What I Build
        </p>

        <h2 className="text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#A1CCDC] to-[#096B90] md:text-5xl">
          My Services
        </h2>

        <p className="mt-4 max-w-xl text-xs font-medium leading-6 tracking-wide text-zinc-500 md:text-sm">
          Practical digital solutions across web development, applications,
          AI integration, and automation.
        </p>

        <div className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#A1CCDC] to-transparent" />
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES_DATA.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07101a]/80 p-7 transition-transform duration-300 hover:-translate-y-1 hover:border-[#096B90]/40"
          >
            {/* Top Accent */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#096B90]/0 to-transparent transition-opacity duration-300 group-hover:via-[#A1CCDC]/50" />

            {/* Icon */}
            <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-xl border border-[#096B90]/20 bg-[#096B90]/10 text-[#A1CCDC] transition-all duration-300 group-hover:border-[#096B90]/50 group-hover:bg-[#096B90]/20 group-hover:text-white">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mb-3 text-lg font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-[#A1CCDC]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-6 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
              {service.description}
            </p>

            {/* Bottom Detail */}
            <div className="mt-6 h-px w-8 bg-[#096B90]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#A1CCDC]/60" />
          </article>
        ))}
      </div>
    </section>
  );
}