'use client';

import React, { useState } from 'react';

type FormStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';

const services = [
  'Web Development',
  'App Development',
  'AI Automation',
  'AI Voice Agents',
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abdullah-asim-dev/',
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Abdullah-Asim-dev',
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        />
      </svg>
    ),
  },
];

export default function ContactAndFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'LOADING') return;

    setStatus('LOADING');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Message: ${formData.service} from ${formData.name}`,
          message: `
Service Requested: ${formData.service}

Client Name: ${formData.name}
Client Email: ${formData.email}

Message:
${formData.message}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('SUCCESS');

        setFormData({
          name: '',
          email: '',
          service: 'Web Development',
          message: '',
        });

        setTimeout(() => setStatus('IDLE'), 4000);
      } else {
        setStatus('ERROR');
        setTimeout(() => setStatus('IDLE'), 3000);
      }
    } catch {
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 3000);
    }
  };

  const updateField = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="relative z-10 w-full overflow-hidden bg-transparent">

      {/* =========================================================
          WHATSAPP FLOATING BUTTON
      ========================================================= */}
      <div className="pointer-events-auto fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/923716386114"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Abdullah Asim on WhatsApp"
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-[#040911]/90 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500 hover:text-[#040911] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
        >
          <svg
            className="h-6 w-6 fill-current transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.03 11.966.03c3.184.001 6.177 1.242 8.426 3.496 2.249 2.254 3.487 5.244 3.486 8.428-.003 6.616-5.339 11.934-11.907 11.934-2.001-.001-3.972-.5-5.733-1.455L0 24zm6.29-4.314c1.674.993 3.348 1.521 5.341 1.522 5.514 0 10.001-4.436 10.004-9.897.001-2.645-1.026-5.132-2.894-7.004-1.868-1.873-4.351-2.903-6.997-2.904-5.518 0-10.005 4.437-10.008 9.899-.001 1.956.5 3.864 1.454 5.545l-.993 3.626 3.731-.976zm11.332-6.84c-.287-.144-1.702-.84-1.965-.936-.262-.096-.453-.144-.644.144-.191.288-.741.936-.908 1.129-.167.192-.334.216-.621.072-1.354-.68-2.327-1.129-3.23-2.69-.24-.413.24-.383.687-1.27.072-.144.036-.27-.018-.413-.054-.144-.453-1.092-.621-1.499-.164-.398-.344-.344-.473-.346-.121-.002-.26-.003-.4-.003-.14 0-.368.052-.56.27-.192.218-.733.717-.733 1.748 0 1.032.75 2.031.854 2.167.104.136 1.475 2.252 3.574 3.157 1.637.702 2.285.765 3.102.644.382-.057 1.703-.695 1.942-1.368.24-.672.24-1.25.167-1.368-.073-.118-.262-.191-.549-.335z" />
          </svg>
        </a>
      </div>

      {/* =========================================================
          CONTACT SECTION
      ========================================================= */}
      <section
        id="contact"
        className="scroll-mt-20 px-4 py-24 md:px-8 md:py-28"
      >
        <div className="mx-auto w-full max-w-5xl">

          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#096B90]">
              Start A Conversation
            </p>

            <h2 className="text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#A1CCDC] via-white to-[#096B90] md:text-5xl">
              Get In Touch
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-zinc-500 md:text-sm">
              Have a project, idea, or automation requirement?
              Send me the details and I&apos;ll get back to you.
            </p>

            <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#A1CCDC] to-transparent" />
          </div>

          {/* Contact Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#07101a]/80 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">

            {/* Subtle top glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#096B90] to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr]">

              {/* Left Info Panel */}
              <div className="relative border-b border-white/[0.06] p-7 md:p-10 lg:border-b-0 lg:border-r">
                <div className="flex h-full flex-col justify-between">

                  <div>
                    <div className="mb-6 inline-flex rounded-xl border border-[#096B90]/20 bg-[#096B90]/10 px-3 py-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#A1CCDC]">
                        Available For Work
                      </span>
                    </div>

                    <h3 className="max-w-xs text-2xl font-bold leading-tight text-white md:text-3xl">
                      Let&apos;s build something useful.
                    </h3>

                    <p className="mt-4 max-w-sm text-xs leading-6 text-zinc-500 md:text-sm">
                      Whether it&apos;s a web application, mobile app,
                      AI automation, or a custom digital product,
                      share your idea and let&apos;s discuss it.
                    </p>
                  </div>

                  <div className="mt-10 space-y-4">

                    {/* Email */}
                    <a
                      href="mailto:abdullahasimoffical4737@gmail.com"
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-[#096B90]/30 hover:bg-[#096B90]/5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#096B90]/20 bg-[#096B90]/10 text-[#A1CCDC]">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </span>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                          Email
                        </p>
                        <p className="truncate text-xs text-zinc-300 transition-colors group-hover:text-white">
                          abdullahasimoffical4737@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+923716386114"
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-[#096B90]/30 hover:bg-[#096B90]/5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#096B90]/20 bg-[#096B90]/10 text-[#A1CCDC]">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 14 14 14h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.143-5.12-3.439-6.264-6.264l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </span>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                          Phone
                        </p>
                        <p className="text-xs text-zinc-300 transition-colors group-hover:text-white">
                          +92 371 6386114
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-7 md:p-10">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500"
                      >
                        Your Name
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        required
                        disabled={status === 'LOADING'}
                        value={formData.name}
                        onChange={(e) =>
                          updateField('name', e.target.value)
                        }
                        placeholder="Abdullah Asim"
                        className="w-full rounded-xl border border-white/[0.08] bg-[#040911]/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-700 hover:border-white/[0.14] focus:border-[#096B90]/70 focus:bg-[#040911]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500"
                      >
                        Email Address
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        required
                        disabled={status === 'LOADING'}
                        value={formData.email}
                        onChange={(e) =>
                          updateField('email', e.target.value)
                        }
                        placeholder="client@domain.com"
                        className="w-full rounded-xl border border-white/[0.08] bg-[#040911]/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-700 hover:border-white/[0.14] focus:border-[#096B90]/70 focus:bg-[#040911]"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500"
                    >
                      Project Type
                    </label>

                    <select
                      id="contact-service"
                      disabled={status === 'LOADING'}
                      value={formData.service}
                      onChange={(e) =>
                        updateField('service', e.target.value)
                      }
                      className="w-full cursor-pointer rounded-xl border border-white/[0.08] bg-[#040911] px-4 py-3.5 text-sm text-white outline-none transition-all hover:border-white/[0.14] focus:border-[#096B90]/70"
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500"
                    >
                      Project Details
                    </label>

                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      disabled={status === 'LOADING'}
                      value={formData.message}
                      onChange={(e) =>
                        updateField('message', e.target.value)
                      }
                      placeholder="Tell me about your project, requirements, or idea..."
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#040911]/70 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-zinc-700 hover:border-white/[0.14] focus:border-[#096B90]/70 focus:bg-[#040911]"
                    />
                  </div>

                  {/* Status */}
                  {status === 'SUCCESS' && (
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-center text-xs text-emerald-400">
                      ✓ Message sent successfully. I&apos;ll get back to you soon.
                    </div>
                  )}

                  {status === 'ERROR' && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-center text-xs text-red-400">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'LOADING'}
                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-[#096B90]/40 bg-[#096B90]/15 px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#A1CCDC] transition-all duration-300 hover:border-[#096B90] hover:bg-[#096B90] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="relative z-10">
                      {status === 'LOADING'
                        ? 'Sending Message...'
                        : status === 'SUCCESS'
                          ? 'Message Sent ✓'
                          : 'Send Message'}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.06] bg-[#030810]/80">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Brand */}
            <div>
              <a
                href="#home"
                className="text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:text-[#A1CCDC]"
              >
                Abdullah Asim
              </a>

              <p className="mt-2 text-[10px] tracking-wide text-zinc-600">
                Full-Stack Development · App Development · AI Automation
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {['About', 'Services', 'Projects', 'Tech', 'Blog', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#A1CCDC]"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-zinc-500 transition-all duration-300 hover:border-[#096B90]/40 hover:bg-[#096B90]/10 hover:text-[#A1CCDC]"
                >
                  {social.icon}
                </a>
              ))}

              <a
                href="mailto:abdullahasimoffical4737@gmail.com"
                aria-label="Send email"
                title="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-zinc-500 transition-all duration-300 hover:border-[#096B90]/40 hover:bg-[#096B90]/10 hover:text-[#A1CCDC]"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.05] pt-5 text-[9px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Abdullah Asim. All rights reserved.
            </p>

            <p className="uppercase tracking-[0.18em]">
              Built with React · Next.js · Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}