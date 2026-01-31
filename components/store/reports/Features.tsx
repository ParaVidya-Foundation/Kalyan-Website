"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  id: string;
  leftBadge?: string;
  leftTitleLines: string[];
  leftSummary?: string;
  media: string; // image path
  bullets?: string[];
  description?: string;
};

const SLIDES: Slide[] = [
  {
    id: "premium-janam",
    leftBadge: "PREMIUM",
    leftTitleLines: ["JANAM", "KUNDLI", "DETAILED", "REPORT"],
    leftSummary:
      "450+ pages of in-depth Vedic analysis — precise timings, divisional charts and practical remedies.",
    media: "/hero/right-person-1.jpg",
    bullets: ["450+ pages", "D1–D60 divisional charts", "Software-based accuracy"],
    description: "450+ pages, precise timings, divisional charts and practical remedies.",
  },
  {
    id: "Wealth-janam-2",
    leftBadge: "Luxury",
    leftTitleLines: [ "Wealth", "Detailed","Report"],
    leftSummary:
      "Wealth report — precise timings, divisional charts and practical remedies.",
    media: "/hero/right-person-2.jpg",
    bullets: ["Wealth report", "Precise timings", "Divisional charts", "Practical remedies"],
    description: "Wealth report — precise timings, divisional charts and practical remedies.",
  },
  {
    id: "Life-janam",
    leftBadge: "Complete",
    leftTitleLines: ["Complete", "Life", "Detailed","Report"],
    leftSummary:
      "Complete life report — precise timings, divisional charts and practical remedies.",
    media: "/hero/right-person-1.jpg",
    bullets: ["Complete life report", "Precise timings", "Divisional charts", "Practical remedies"],
    description: "Complete life report — precise timings, divisional charts and practical remedies.",
  },
  {
    id: "Marriage-janam",
    leftBadge: "Premium",
    leftTitleLines: ["Marriage", "Detailed", "Report"],
    leftSummary:
      "Marriage report — precise timings, divisional charts and practical remedies.",
    media: "/hero/right-person-2.jpg",
    bullets: ["Marriage report", "Precise timings", "Divisional charts", "Practical remedies"],
    description: "Marriage report — precise timings, divisional charts and practical remedies.",
  },
];

export default function FeaturesFullImage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef<number | null>(null);

  // autoplay
  useEffect(() => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
    if (!paused) {
      autoRef.current = window.setInterval(() => {
        setIndex((p) => (p + 1) % SLIDES.length);
      }, 7000);
    }
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [paused]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + SLIDES.length) % SLIDES.length);
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % SLIDES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const cur = SLIDES[index];

  return (
    <section
      aria-label="Feature showcase"
      className="w-[95%] mx-auto py-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative rounded-3xl bg-white shadow-[0_30px_80px_rgba(16,24,40,0.08)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 p-6 md:p-8 items-stretch min-h-[520px]">

          {/* === LEFT: Text tile (big, typographic) === */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 rounded-xl bg-white p-8 md:p-10 flex flex-col justify-between border">
              <div>
                {cur.leftBadge && (
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-800 font-semibold text-xs">
                    {cur.leftBadge}
                  </span>
                )}

                <div className="mt-6 leading-tight">
                  {cur.leftTitleLines.map((line, i) => (
                    <motion.div
                      key={line + i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.36 }}
                      className={`font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight`}
                      style={{
                        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                      }}
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.22, duration: 0.5 }}
                  className="mt-6 text-sm md:text-base text-slate-600 max-w-xl"
                >
                  {cur.leftSummary}
                </motion.p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-md p-4 bg-slate-50 border">
                  <div className="text-xs text-slate-500">TRUSTED BY</div>
                  <div className="mt-2 text-lg font-semibold text-emerald-500">1.7M+ Followers</div>
                  <div className="text-xs text-slate-400">Worldwide</div>
                </div>

                <div className="rounded-md p-4 bg-slate-50 border">
                  <div className="text-xs text-slate-500">WHAT YOU GET</div>
                  <div className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {cur.description}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT: Full-cover square image panel === */}
          <div className="relative rounded-xl overflow-hidden flex items-stretch">
            {/* Motion wrapper for subtle parallax / tilt on hover */}
            <motion.div
              className="relative w-full aspect-square md:aspect-[4/5] rounded-xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
              style={{ willChange: "transform" }}
            >
              {/* Image fill covers the entire right panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.media}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={cur.media}
                    alt={cur.leftTitleLines.join(" ")}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 520px, 760px"
                    className="object-cover"
                    style={{ transformOrigin: "center" }}
                  />
                  {/* subtle overlay gradient for readability and premium look */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(8,10,23,0.06) 0%, rgba(8,10,23,0.15) 70%)",
                      mixBlendMode: "normal",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* controls & indicators */}
              <div className="absolute inset-0 pointer-events-none">
                {/* left arrow (clickable) */}
                <button
                  onClick={() => setIndex((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
                  className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white grid place-items-center shadow transition"
                  aria-label="Previous slide"
                >
                  ‹
                </button>

                {/* right arrow */}
                <button
                  onClick={() => setIndex((p) => (p + 1) % SLIDES.length)}
                  className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white grid place-items-center shadow transition"
                  aria-label="Next slide"
                >
                  ›
                </button>

                {/* small bullet list centered-left on image for visual parity */}
                <div className="absolute left-6 bottom-6 rounded-md bg-white/10 backdrop-blur px-4 py-3 shadow-sm">
                  <ul className="space-y-2 text-white text-sm">
                    {cur.bullets?.map((b, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 inline-block shrink-0" />
                        <span className="opacity-95">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* dots center bottom */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`transition-all ${
                i === index ? "bg-sky-600 w-8 h-2 rounded-full" : "bg-slate-300 w-2.5 h-2.5 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
