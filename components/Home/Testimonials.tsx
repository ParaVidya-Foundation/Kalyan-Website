"use client";

import React, { useMemo } from "react";
import { TestimonialCard } from "./small/TestimonialCard";

const testimonials = [
  {
    quote:
      "These daily horoscope podcasts have become my morning ritual. Spot-on guidance every single day.",
    name: "Anton",
    role: "Marketing Director · Quantum Forge",
  },
  {
    quote:
      "These personalized horoscopes go beyond predictions. It feels uniquely crafted for me.",
    name: "Dom",
    role: "Data Scientist · Cipher Labs",
  },
  {
    quote:
      "Highly recommended for anyone seeking deeper guidance and daily clarity.",
    name: "James",
    role: "CMO · Lumina Brands",
  },
  {
    quote:
      "A personal cosmic guide that keeps me grounded and motivated.",
    name: "Joseph",
    role: "Director of IT · Meridian Solutions",
  },
  {
    quote:
      "This service is a game-changer. Truly a new level of astrology experience.",
    name: "Phuc",
    role: "Founder · Aurora Tech",
  },
];

export default function Testimonials() {
  // Memoize duplicated testimonials to prevent recreation on every render
  const duplicatedTestimonials = useMemo(
    () => testimonials.concat(testimonials),
    []
  );

  // Memoize column configs
  const columnConfigs = useMemo(
    () => [
      { col: 0, speed: 36, offset: 0 },
      { col: 1, speed: 30, offset: 8 },
      { col: 2, speed: 42, offset: 16 },
      { col: 3, speed: 36, offset: 24 },
      { col: 4, speed: 30, offset: 32 },
    ],
    []
  );

  return (
    <section
      className="relative w-full h-[110vh] overflow-hidden"
    >
      {/* ===== HEADER (FIXED, NEVER OVERLAPS) ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-12">
        <span className="block text-xs tracking-[0.35em] font-mono text-neutral-500">
          TESTIMONIALS
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900">
          Loved by our community
        </h2>
      </div>

      {/* ===== SCROLL AREA (CLIPPED) ===== */}
      <div className="relative h-[calc(110vh-220px)] overflow-hidden"       
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}>
        <div className="mx-auto max-w-[1600px] px-6 h-full">
          <div className="grid h-full grid-cols-1 md:grid-cols-5 gap-8">
            {columnConfigs.map(({ col, speed, offset }) => (
              <FlowColumn
                key={col}
                speed={speed}
                offset={offset}
              >
                {duplicatedTestimonials.map((t, i) => (
                  <TestimonialCard key={`${col}-${i}`} {...t} />
                ))}
              </FlowColumn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   FLOW COLUMN (SAFE CONTINUOUS)
================================ */

const FlowColumn = React.memo<{
  children: React.ReactNode;
  speed: number;
  offset: number;
}>(({ children, speed, offset }) => {
  return (
    <div
      className="flow-column"
      style={{
        animationDuration: `${speed}s`,
        animationDelay: `-${offset}s`,
        willChange: "transform",
      }}
    >
      {children}

      <style jsx>{`
        .flow-column {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          animation-name: flowUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
          transform: translateZ(0);
        }

        .flow-column:hover {
          animation-play-state: paused;
        }

        @keyframes flowUp {
          from {
            transform: translateY(0) translateZ(0);
          }
          to {
            transform: translateY(-100%) translateZ(0);
          }
        }
      `}</style>
    </div>
  );
});

FlowColumn.displayName = "FlowColumn";
