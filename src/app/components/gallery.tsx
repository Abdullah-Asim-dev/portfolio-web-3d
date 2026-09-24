'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'framer-motion';

const galleryImages = [
  '/image1.webp',
  '/image2.webp',
  '/imago1.webp',
  '/imago.webp',
  '/imago2.webp',
  '/imago3.webp',
];

interface PremiumTiltCardProps {
  src: string;
  idx: number;
  onClick: () => void;
}

function PremiumTiltCard({
  src,
  idx,
  onClick,
}: PremiumTiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-180, 180], [7, -7]);
  const rotateY = useTransform(x, [-180, 180], [-7, 7]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetTilt = () => {
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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        duration: 0.4,
        delay: idx * 0.04,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onClick={onClick}
      className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl border border-[#096B90]/20 bg-[#040911]/50 shadow-xl [perspective:1000px]"
    >
      {/* Hover Border */}
      <div className="pointer-events-none absolute inset-0 z-30 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-[#096B90]/60" />

      {/* Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-[#096B90]/0 to-[#A1CCDC]/0 transition-opacity duration-300 group-hover:from-[#096B90]/10 group-hover:to-[#A1CCDC]/10" />

      {/* Image */}
      <div
        className="absolute inset-0 z-10 p-1.5"
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#07101a]">
          <Image
            src={src}
            alt={`Gallery image ${idx + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />

          {/* Dark hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[#040911]/0 transition-colors duration-300 group-hover:bg-[#040911]/10" />
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    null
  );

  return (
    <section
      id="gallery"
      className="relative z-10 w-full bg-transparent px-6 pb-20 pt-8 md:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src, idx) => (
            <PremiumTiltCard
              key={src}
              src={src}
              idx={idx}
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-[#040911]/95 p-4 md:p-10"
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-50 rounded-lg border border-[#096B90]/30 bg-[#040911]/90 px-4 py-2 text-xs uppercase tracking-widest text-[#A1CCDC] transition-colors hover:border-[#A1CCDC]/50 hover:text-white md:right-8 md:top-8"
            >
              Close
            </button>

            {/* Preview */}
            <motion.div
              initial={{
                scale: 0.96,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.96,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-auto max-h-[85vh] w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl border border-[#096B90]/30 bg-[#040911] p-2 shadow-2xl"
            >
              <div className="relative h-[75vh] max-h-[80vh] w-full">
                <Image
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  fill
                  sizes="(max-width: 768px) 95vw, 80vw"
                  className="rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
