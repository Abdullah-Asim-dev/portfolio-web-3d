'use client';

import React from 'react';

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="w-full max-w-5xl mx-auto px-4 md:px-8 py-20 relative"
    >
      {/* =====================================================
          BLOG MAIN BOX
      ====================================================== */}
      <div className="relative overflow-hidden rounded-3xl border border-[#096B90]/20 bg-[#040911] px-6 py-10 md:px-10 md:py-14 shadow-[0_0_40px_rgba(9,107,144,0.08)]">

        {/* Ambient Background Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#096B90]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-[#096B90]/5 blur-3xl" />

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}
        <div className="relative z-20 mb-16 flex w-full flex-col items-center justify-center text-center">
          <h2 className="select-none bg-gradient-to-r from-[#A1CCDC] to-[#096B90] bg-clip-text text-4xl font-extrabold uppercase tracking-wider text-transparent md:text-5xl">
            Blog
          </h2>

          <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#096B90] via-[#A1CCDC] to-[#096B90] shadow-[0_0_10px_rgba(9,107,144,0.7)]" />
        </div>

        {/* ===================================================
            SEO META TARGETS
        ==================================================== */}
        <div className="sr-only">
          <span>Primary Target: low latency ai voice agents portfolio</span>
          <span>
            SEO KD Focus Tier: Low Difficulty / High Intent Technical Stack
          </span>
          <span>
            Keywords: nextjs backend automation pipelines, python data
            transformation workflows, serverless cloud deployment, custom
            autonomous web bots, streamlit telemetry dashboards
          </span>
        </div>

        {/* ===================================================
            BLOG CONTENT
        ==================================================== */}
        <article className="relative z-10 w-full space-y-8 text-sm font-medium leading-relaxed text-gray-300 md:text-base">

          {/* BLOG META + TITLE */}
          <div className="border-b border-white/10 pb-7">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold text-gray-500">
              <span className="rounded border border-[#096B90]/20 bg-[#096B90]/10 px-2 py-0.5 uppercase text-[#A1CCDC]">
                Tech Strategy
              </span>

              <span>September 2026</span>
              <span>•</span>
              <span>6 Min Read</span>
            </div>

            <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
              Engineering Low Latency AI Voice Agents: Scaling Next.js Backend
              Automation Pipelines Globally
            </h1>
          </div>

          {/* PARAGRAPH 1 */}
          <p>
            The architecture of web engineering is undergoing a critical
            evolution. Modern enterprise client queries have accelerated past
            passive graphical interfaces, shifting heavily toward
            high-performance systems powered by{' '}
            <strong className="text-[#A1CCDC]">
              low latency ai voice agents
            </strong>{' '}
            and multi-tier background automation models. For developer systems
            to handle real-time vocal feedback seamlessly, the total
            operational network round-trip time must remain below 180ms.
            Bridging this gap demands an optimized integration infrastructure.
          </p>

          {/* PARAGRAPH 2 */}
          <p>
            This core engineering methodology targets a unique computational
            strategy. Grounded in a rigorous academic foundation in{' '}
            <strong className="text-white">
              ICS Computer Science (2023 - 2025)
            </strong>
            , I have spent years mastering data logic flow matrices,
            decentralized processing structures, and memory-safe database
            optimization parameters. This structural academic knowledge serves
            as a critical launchpad for designing high-performance application
            layers that avoid standard execution blocks.
          </p>

          {/* PARAGRAPH 3 */}
          <p>
            To maintain extreme scalability under intense traffic, my modern
            technical development stack isolates tasks based on platform
            strengths. Front-facing layout components and API route integrations
            are engineered using{' '}
            <strong>Next.js and React</strong>, paired with{' '}
            <strong>React Native</strong> to stream duplex audio frames
            natively on mobile channels. On the data ingest layer, a decoupled{' '}
            <strong>Python serverless backend</strong> deploys libraries like{' '}
            <strong>NumPy and Pandas</strong> to transform raw frequencies and
            calculate telemetry values within microsecond bounds.
          </p>

          {/* PARAGRAPH 4 */}
          <p>
            The execution metrics of these methodologies are proven throughout
            over{' '}
            <strong className="text-white">
              1+ years of intense active commercial freelance engineering
            </strong>
            . My global repository track records include a production-grade{' '}
            <strong>Full-Ecommerce App</strong> embedded with distributed
            payment protocols, a decentralized real-time{' '}
            <strong>Chat Application</strong> powered by low-latency socket
            clusters, and a custom token-isolated{' '}
            <strong>JWT Authentication shield</strong> built to mitigate
            security exploits. Every single deployment layer is validated
            inside isolated <strong>Docker containers</strong> using advanced
            diagnostic tools like <strong>Cursor and Claude Code</strong>.
          </p>

          {/* PARAGRAPH 5 */}
          <p>
            The absolute competitive threshold of my services lies within
            advanced{' '}
            <strong className="text-white">
              nextjs backend automation pipelines
            </strong>
            . By connecting secure framework layers with complex{' '}
            <strong>n8n automation webhooks</strong>, I construct robust,
            deterministic guardrails around runtime environments. These
            automation blocks securely process operational data nodes, piping
            variables directly into live{' '}
            <strong>Streamlit analytics dashboards</strong>. This blueprint
            ensures that entire system operations remain resilient, automated,
            and seamlessly scalable across modern cloud instances like{' '}
            <strong>Vercel and AWS</strong>.
          </p>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-7">
            <a
              href="https://github.com/Abdullah-Asim-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              Inspect GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/abdullah-asim-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-[#096B90]/20 bg-[#096B90]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#A1CCDC] transition-all duration-300 hover:bg-[#096B90] hover:text-white"
            >
              Connect on LinkedIn
            </a>
          </div>
        </article>

        {/* Bottom Accent */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#096B90]/60 to-transparent" />
      </div>
    </section>
  );
}