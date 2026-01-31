"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, Mic } from "lucide-react";

/* ---------------- DATA ---------------- */
const REPORTS = [
  {
    title: "What is a Janam Kundli?",
    description:
      "A Janam Kundli is a detailed astrological blueprint derived from your exact birth details. It maps planetary positions, timings, and patterns that inform career, relationships, health, and life cycles.",
    media: "/noise.webp",
    stats: [
      { icon: User, value: "450+", label: "Pages — In-depth Kundli analysis" },
      { icon: Calendar, value: "60+", label: "Divisional charts (D1–D60)" },
      { icon: Mic, value: "150K+", label: "Astrological calculations" },
    ],
  },
  {
    title: "Career & Wealth Report",
    description:
      "Precision forecasts for career transitions and wealth-building windows — backed by planetary dashas and yogic indicators.",
    media: "/noise.webp",
    stats: [
      { icon: User, value: "120+", label: "Career yogas analysed" },
      { icon: Calendar, value: "25+", label: "Wealth indicators" },
      { icon: Mic, value: "40+", label: "Dashas reviewed" },
    ],
  },
  {
    title: "Marriage & Relationship Report",
    description:
      "Compatibility mapping, marriage timing windows, and relationship archetypes explained with clarity and practical remedies.",
    media: "/noise.webp",
    stats: [
      { icon: User, value: "36+", label: "Compatibility factors" },
      { icon: Calendar, value: "12+", label: "Marriage timing windows" },
      { icon: Mic, value: "100+", label: "Relationship combinations" },
    ],
  },
];

/* ---------------- COMPONENT ---------------- */
export default function ReportShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // autoplay with pause-on-hover
  useEffect(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!paused) {
      timerRef.current = window.setInterval(() => {
        setIndex((p) => (p + 1) % REPORTS.length);
      }, 7000);
    }
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [paused]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + REPORTS.length) % REPORTS.length);
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % REPORTS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = REPORTS[index];

  return (
    <section
      className="w-[90%] mx-auto py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Report showcase"
    >
      <div className="relative rounded-2xl bg-white border border-slate-100 shadow-lg overflow-hidden">
        {/* top subtle gradient accent */}
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-amber-50 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 p-8 md:p-12 items-stretch min-h-[520px]">
          {/* LEFT: title + media */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={current.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900"
                  style={{ lineHeight: 1.02, fontFamily: "'Playfair Display', serif" }}
                >
                  {current.title}
                </motion.h2>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={current.description}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="mt-4 text-sm md:text-base text-slate-600 max-w-xl"
                >
                  {current.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* media box */}
            <div className="mt-4 w-full">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-tr from-slate-50 to-white border border-slate-100 shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.media}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image src={current.media} alt={current.title} fill className="object-cover" />
                  </motion.div>
                </AnimatePresence>

                {/* decorative play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-white/95 flex items-center justify-center shadow">
                    <div style={{ borderLeft: "12px solid #111", borderTop: "8px solid transparent", borderBottom: "8px solid transparent", marginLeft: 2 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: description + stats (numbers bold, icons) */}
          <div className="rounded-xl bg-slate-50 border border-slate-100 p-6 flex flex-col justify-center gap-6">
            <div className="mb-2">
              <p className="text-sm text-slate-700">Report Details</p>
            </div>

            <div className="space-y-4">
              {current.stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.value + i}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.36 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-none h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <Icon className="h-5 w-5 text-emerald-500" />
                    </div>

                    <div className="flex-1">
                      <div className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-none">
                        {s.value}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">{s.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* bottom dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2 items-center">
          {REPORTS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`transition-all rounded-full ${
                i === index ? "bg-slate-900 w-7 h-2.5 rounded-full" : "bg-slate-300 w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
