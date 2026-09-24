"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- MAGNETIC BUTTON ---
function LocalMagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      ref.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({
      x: x * 0.35,
      y: y * 0.35,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 15,
        mass: 0.1,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

// --- MAIN NAVBAR ---
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "Gallery", id: "gallery" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "TechStack", id: "tech" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleConnectRedirect = () => {
    window.open(
      "https://www.linkedin.com/in/abdullah-asim-dev/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#040911]/30 backdrop-blur-md border-b border-[#096b90]/15 px-6 py-4 flex items-center justify-between transition-all duration-300">

        {/* Logo */}
        <LocalMagneticButton>
          <div
            onClick={() => handleScroll("hero")}
            className="flex items-center gap-2.5 text-lg font-black tracking-wider text-[#a1ccdc] cursor-pointer px-2 py-1 select-none group"
          >
            <svg
              className="w-5 h-5 text-[#096b90] group-hover:text-[#a1ccdc] group-hover:rotate-180 transition-all duration-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>

            <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#a1ccdc]">
              AbdullahDev
            </span>
          </div>
        </LocalMagneticButton>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 lg:gap-3">
          {menuItems.map((item) => (
            <LocalMagneticButton key={item.id}>
              <button
                type="button"
                onClick={() => handleScroll(item.id)}
                className="text-xs font-semibold text-zinc-400 hover:text-white hover:shadow-[0_0_12px_rgba(161,204,220,0.15)] transition-all duration-200 px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </button>
            </LocalMagneticButton>
          ))}
        </div>

        {/* Right Utilities */}
        <div className="flex items-center gap-4">

          {/* Connect Button */}
          <LocalMagneticButton>
            <button
              type="button"
              onClick={handleConnectRedirect}
              className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-white border border-[#096b90]/40 bg-gradient-to-r from-[#040911] via-[#096b90]/10 to-[#040911] hover:from-[#096b90] hover:to-[#a1ccdc] hover:text-[#040911] rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(9,107,144,0.15)] group/connect"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover/connect:bg-white animate-pulse" />
              Connect
            </button>
          </LocalMagneticButton>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col gap-1.5 justify-center items-center w-8 h-8 rounded-lg bg-[#040911]/80 border border-[#096b90]/30 z-50 relative"
          >
            <span
              className={`w-4 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />

            <span
              className={`w-4 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 210,
            }}
            className="fixed inset-y-0 right-0 w-full max-w-sm z-40 bg-[#040911]/95 backdrop-blur-2xl border-l border-[#096b90]/20 shadow-2xl p-8 pt-28 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase px-3 mb-2">
                Navigation Matrix
              </p>

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleScroll(item.id)}
                  className="text-left text-xl font-bold text-zinc-300 hover:text-[#a1ccdc] hover:bg-[#096b90]/10 transition-all duration-200 py-3 px-3 rounded-xl border border-transparent hover:border-[#096b90]/20"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
