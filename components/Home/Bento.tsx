"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

/* ======================================================
   IMAGE HEADER (NO STRETCH, NO CLS, SAFE)
====================================================== */

function FeatureImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div
      className="
        relative w-full
        aspect-[4/3]
        rounded-xl overflow-hidden
   
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-contain p-4"
      />
    </div>
  );
}

/* ======================================================
   DATA — UNCHANGED IMAGE NAMES
====================================================== */

const items: {
  title: string;
  description: string;
  header: React.ReactNode;
}[] = [
  {
    title: "Accurate Kundli & Birth Chart Engine",
    description:
      "Generate precise Janam Kundli with planetary positions, houses, aspects, and yogas using time-tested Vedic algorithms.",
    header: (
      <FeatureImage
        src="/placement.webp"
        alt="Astrology Kundli Chart"
        priority
      />
    ),
  },
  {
    title: "Advanced Dasha & Transit Analysis",
    description:
      "Vimshottari and Mahadasha timelines with real-time transit overlays for predictive accuracy.",
    header: (
      <FeatureImage
        src="/placement2.webp"
        alt="Dasha and Transit Analysis"
      />
    ),
  },
  {
    title: "AI-Assisted Interpretations",
    description:
      "Transforms complex astrological data into structured, easy-to-understand insights.",
    header: (
      <FeatureImage
        src="/placement.webp"
        alt="AI Astrology Analysis"
      />
    ),
  },
  {
    title: "Multi-System Astrology Support",
    description:
      "Vedic, KP, Lal Kitab, Nadi, Numerology, Palmistry, and Vastu — all unified.",
    header: (
      <FeatureImage
        src="/placement2.webp"
        alt="Multiple Astrology Systems"
      />
    ),
  },
  {
    title: "Professional PDF Report Generation",
    description:
      "Auto-generate branded astrology reports with charts, predictions, and remedies.",
    header: (
      <FeatureImage
        src="/placement2.webp"
        alt="Astrology PDF Reports"
      />
    ),
  },
  {
    title: "Remedies, Gemstones & Yantra Logic",
    description:
      "Rule-based gemstone, mantra, yantra, and corrective recommendations.",
    header: (
      <FeatureImage
        src="/placement.webp"
        alt="Astrological Remedies"
      />
    ),
  },
  {
    title: "Cloud-Ready & API-First Architecture",
    description:
      "Secure APIs, scalable cloud deployment, and seamless app integrations.",
    header: (
      <FeatureImage
        src="/placement2.webp"
        alt="Astrology API Platform"
      />
    ),
  },
];

/* ======================================================
   ASTROLOGY SOFTWARE BENTO
====================================================== */

export function Bento() {
  return (
    <section className="relative mx-auto w-full min-h-[90vh] py-20 bg-black overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_65%)]
        animate-pulseSlow"
      />

      <div className="relative z-10 mx-auto w-[85vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs tracking-[0.35em] text-violet-400 font-medium">
            ASTROLOGY SOFTWARE
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white leading-tight">
            Intelligent Astrology,
            <br />
            <span className="text-white/70">
              Built for Accuracy & Scale
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-white/60 max-w-xl">
            A modern astrology platform combining traditional calculations with
            advanced automation — designed for professionals, learners, and
            enterprises.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>

      {/* Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.7; }
        }
        .animate-pulseSlow {
          animation: pulseSlow 7s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}

export default Bento;
