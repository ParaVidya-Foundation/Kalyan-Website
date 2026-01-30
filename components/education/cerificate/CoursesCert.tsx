// components/CoursesCert.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState, JSX } from "react";
import CourseCard, { Course } from "./coursecard";

const COURSES: Course[] = [
  {
    id: "ast-001",
    title: "Foundations of Vedic Astrology",
    badge: "Core Certification",
    img: "/courses/vedic-1.jpg",
    category: "Astrology",
    excerpt:
      "A structured introduction to planetary principles, chart architecture, and classical predictive foundations.",
  },
  {
    id: "ast-002",
    title: "Advanced Kundli Interpretation",
    badge: "Advanced Level",
    img: "/courses/kundli-1.jpg",
    category: "Astrology",
    excerpt:
      "Systematic chart reading methodologies with real-world analytical frameworks.",
  },
  {
    id: "vastu-001",
    title: "Applied Vastu for Contemporary Spaces",
    badge: "Professional Track",
    img: "/courses/vastu-1.jpg",
    category: "Vastu",
    excerpt:
      "Practical Vastu principles adapted for modern residential and commercial environments.",
  },
  {
    id: "num-001",
    title: "Numerology: Life Path & Destiny Analysis",
    badge: "Certification Module",
    img: "/courses/num-1.jpg",
    category: "Numerology",
    excerpt:
      "Life path numbers, destiny patterns, and decision-making indicators grounded in classical numerology.",
  },
  {
    id: "palm-001",
    title: "Samudrik Palmistry Essentials",
    badge: "Foundational Study",
    img: "/courses/palm-1.jpg",
    category: "Palmistry",
    excerpt:
      "Character analysis and timing indicators through structured hand morphology study.",
  },
];

const CATEGORIES = ["All", "Astrology", "Vastu", "Numerology", "Palmistry"];

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function CoursesCert(): JSX.Element {
  const [category, setCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filtered = useMemo(
    () =>
      category === "All"
        ? COURSES
        : COURSES.filter((c) => c.category === category),
    [category]
  );

  /* --------------------------- Scroll State Sync --------------------------- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const sync = () => {
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(
        el.scrollLeft + el.clientWidth < el.scrollWidth - 8
      );
    };

    sync();
    el.addEventListener("scroll", sync, { passive: true });

    const ro = new ResizeObserver(sync);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", sync);
      ro.disconnect();
    };
  }, [filtered]);

  /* ------------------------- Keyboard Navigation --------------------------- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onKey = (e: KeyboardEvent) => {
      if (!el.contains(document.activeElement)) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handlePrev() {
    containerRef.current?.scrollBy({
      left: -containerRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  function handleNext() {
    containerRef.current?.scrollBy({
      left: containerRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  /* -------------------------------------------------------------------------- */

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16">
      {/* Ambient glow — Apple-style */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-200/20 blur-[160px]" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-amber-200/25 blur-[180px]" />
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900">
            Skills to transform your career and practice
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">
            Professionally structured certification programs across astrology
            and allied metaphysical sciences — academic, ethical, and verifiable.
          </p>
        </div>

        {/* Discipline Tabs */}
        <nav
          aria-label="Certification disciplines"
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setTimeout(() => containerRef.current?.focus(), 120);
              }}
              aria-pressed={category === cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  category === cat
                    ? "bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]"
                    : "bg-white/70 text-slate-700 border border-slate-200 hover:bg-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* Carousel */}
      <div className="relative">
        {/* Controls */}
        <button
          onClick={handlePrev}
          disabled={!canScrollLeft}
          aria-label="Previous courses"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white/90 border border-slate-200 shadow-sm disabled:opacity-40"
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          disabled={!canScrollRight}
          aria-label="Next courses"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white/90 border border-slate-200 shadow-sm disabled:opacity-40"
        >
          ›
        </button>

        {/* Scroll Container */}
        <div
          ref={containerRef}
          tabIndex={0}
          aria-label="Certification courses"
          className="
            flex gap-6 overflow-x-auto px-2 py-4
            snap-x snap-mandatory
            focus:outline-none
          "
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="w-3 shrink-0" aria-hidden />

          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}

          <div className="w-6 shrink-0" aria-hidden />
        </div>
      </div>

      {/* Footer Link */}
      <div className="mt-6 text-sm text-slate-700">
        <a className="font-semibold text-amber-700 hover:underline" href="#">
          View full certification catalog →
        </a>
      </div>
    </section>
  );
}
