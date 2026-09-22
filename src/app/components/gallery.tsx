'use client';

import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'framer-motion';

// =========================================================
// PREMIUM 3D IMAGE CARD
// =========================================================

function PremiumTiltCard({
  src,
  idx,
  onClick,
}: {
  src: string;
  idx: number;
  onClick: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX =
      e.clientX - rect.left - rect.width / 2;

    const mouseY =
      e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.5,
        delay: idx * 0.05,
      }}
      className="
        relative
        aspect-square
        w-full
        overflow-hidden
        rounded-xl
        border
        border-[#096B90]/20
        bg-[#040911]/50
        cursor-pointer
        shadow-xl
        group
        perspective-1000
      "
    >
      {/* Hover Border */}
      <div
        className="
          absolute
          inset-0
          z-30
          rounded-xl
          border
          border-transparent
          group-hover:border-[#096B90]/60
          transition-all
          duration-300
          pointer-events-none
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-gradient-to-tr
          from-[#096B90]/0
          via-transparent
          to-[#A1CCDC]/0
          group-hover:from-[#096B90]/10
          group-hover:to-[#A1CCDC]/10
          transition-all
          duration-500
          pointer-events-none
        "
      />

      {/* IMAGE CONTAINER */}
      <div
        className="
          absolute
          inset-0
          z-10
          w-full
          h-full
          p-1.5
        "
        style={{
          transform: 'translateZ(25px)',
        }}
      >
        <img
          src={src}
          alt={`Gallery image ${idx + 1}`}
          className="
            w-full
            h-full
            object-cover
            object-top
            rounded-lg
            opacity-90
            group-hover:opacity-100
            group-hover:scale-[1.03]
            transition-all
            duration-500
          "
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.getElementById(`fallback-svg-node-${idx}`);
            if (fallback) {
              fallback.style.display = 'block';
            }
          }}
        />

        {/* Fallback */}
        <svg
          id={`fallback-svg-node-${idx}`}
          className="
            w-8
            h-8
            text-[#096B90]/30
            absolute
            hidden
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 00...1.5 1.5z"
          />
        </svg>
      </div>

      {/* HOVER OVERLAY */}
      <div
        className="
          absolute
          inset-0
          z-20
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          bg-[#040911]/20
          pointer-events-none
        "
      />
    </motion.div>
  );
}

// =========================================================
// MAIN GALLERY PIPELINE
// =========================================================

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    '/image1.webp',
    '/image2.webp',
    '/imago1.webp',
    '/imago.webp',
    '/imago2.webp',
    '/imago3.webp',
  ];

  return (
    <section
      id="gallery"
      className="
        relative
        w-full
        px-6
        md:px-16
        pt-8
        pb-20
        bg-transparent
        z-10
      "
    >
      <div className="w-full max-w-7xl mx-auto">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-5
            w-full
          "
        >
          {galleryImages.map((src, idx) => (
            <PremiumTiltCard
              key={idx}
              src={src}
              idx={idx}
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX EXPANSION AREA */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="
              fixed
              inset-0
              z-50
              bg-[#040911]/90
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
              md:p-12
              cursor-zoom-out
            "
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                top-6
                right-6
                z-50
                px-4
                py-2
                rounded-lg
                border
                border-[#096B90]/30
                bg-[#040911]/80
                text-[#A1CCDC]
                text-xs
                uppercase
                tracking-widest
                hover:border-[#A1CCDC]/50
                hover:text-white
                transition
              "
            >
              Close
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 190 }}
              className="
                relative
                w-full
                max-w-4xl
                max-h-[85vh]
                rounded-2xl
                border
                border-[#096B90]/30
                bg-[#040911]/70
                backdrop-blur-xl
                flex
                items-center
                justify-center
                overflow-hidden
                shadow-2xl
                p-2
              "
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged context node" 
                className="w-full h-full object-contain rounded-xl max-h-[80vh]" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

