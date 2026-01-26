"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * VastuProcess.tsx
 * - Single-file, production-ready component
 * - Sticky centered image on desktop, inline image on mobile
 * - Robust IntersectionObserver to set active step reliably
 * - Smooth crossfade + scale animation for images
 * - Larger copy + bullet points for trust
 * - Responsive and accessible
 */

/* ---------------- DATA ---------------- */
const STEPS = [
  {
    id: 1,
    title: "Upload Your Floor Plan or Photos",
    subtitle: "Images, PDFs, or hand-drawn sketches",
    description:
      "Upload your your home floor plan, photos, or even hand-drawn sketches. Our AI understands layout, room function, and direction without any technical input.",
    points: [
      "Supports JPG, PNG, and PDF formats",
      "AI auto-detects rooms, entrances, and directions",
      "Works with hand-drawn sketches & architectural plans",
      "Secure, encrypted upload — privacy-first",
    ],
    image: "/AI/Vastu/step-1.webp",
  },
  {
    id: 2,
    title: "AI Evaluates 50+ Vastu Parameters",
    subtitle: "Spatial intelligence + Vastu expertise",
    description:
      "Our engine combines classical Vastu principles with spatial algorithms to evaluate energy flow and room placement across 50+ signals.",
    points: [
      "Direction-wise energy & zone analysis",
      "Room placement and functional alignment",
      "Five-element (Pancha Tatva) balance check",
      "Vastu dosha detection with severity scoring",
    ],
    image: "/AI/Vastu/step-2.webp",
  },
  {
    id: 3,
    title: "Receive Your Detailed Vastu Report",
    subtitle: "Actionable steps, visual guidance",
    description:
      "Receive a clear, prioritized report with remedies designed for real homes — minimal demolition, maximum effect.",
    points: [
      "Room-wise recommendations & priority fixes",
      "Easy remedies without heavy construction",
      "Visual walkthroughs and implementation guide",
      "Downloadable, print-ready premium PDF report",
    ],
    image: "/AI/Vastu/step-3.webp",
  },
] as const;

/* ---------------- COMPONENT ---------------- */

export default function VastuProcess(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Preload images for smooth transitions
  useEffect(() => {
    STEPS.forEach((s) => {
      const img = new window.Image();
      img.src = s.image;
    });
  }, []);

  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Use a robust observer: choose the entry with the largest intersectionRatio
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // consider only entries that are intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        // choose the entry with highest intersectionRatio
        const best = visible.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        );
        const idx = Number(best.target.getAttribute("data-index"));
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      {
        // rootMargin pulls trigger earlier/later — tuned for narrative scroll
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      {/* Header */}
      <header className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
          How <span className="text-[#8b5a2b] font-bold">Kalyan Vastu AI</span> Works
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          Ancient Vastu principles translated into precise, actionable
          recommendations — powered by modern AI.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT: sticky centered image on desktop */}
        <div className="hidden md:flex md:sticky md:top-20 md:self-start items-center justify-center h-[80vh]">
          <div
            className="relative aspect-square w-full max-w-[540px] rounded-3xl overflow-hidden bg-slate-50 mx-auto"
            aria-hidden
          >
            {/* image stack — only active is visible */}
            {STEPS.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(.2,.9,.2,1)]
                  ${activeIndex === i ? "opacity-100 translate-y-0 scale-100 z-20" : "opacity-0 translate-y-6 scale-105 z-10"}
                `}
                // pointer-events none so the image doesn't capture scroll or hover
                style={{ pointerEvents: "none" }}
              >
                {/* centered image with contained size for crispness */}
                <div className="relative w-[88%] h-[88%]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 768px) 540px"
                    className="object-contain"
                  />
                </div>

                {/* subtle overlay vignette for premium look */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/6 via-transparent to-transparent" />
              </div>
            ))}

            {/* progress bar / dots under the image */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    // smooth jump to step card
                    const target = stepRefs.current[i];
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                    setActiveIndex(i);
                  }}
                  aria-current={activeIndex === i ? "true" : undefined}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-2 w-10 rounded-full transition-all duration-300 focus:outline-none ${
                    activeIndex === i ? "bg-[#8b5a2b] scale-105" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: scrollable steps */}
        <div className="space-y-20">
          {STEPS.map((step, i) => (
            <article
              key={step.id}
              ref={(el) => {
                if (el) {
                  stepRefs.current[i] = el as HTMLDivElement;
                }
              }}
              data-index={i}
              className="scroll-mt-32"
            >
              <div
                className={`rounded-2xl border border-slate-100 bg-white p-8 shadow transition-transform duration-400 ${
                  activeIndex === i ? "scale-[1.01] shadow-lg" : "hover:shadow-md"
                }`}
                tabIndex={0}
                aria-labelledby={`step-${step.id}-title`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8b5a2b] text-white text-xl font-semibold flex-shrink-0">
                    {i + 1}
                  </div>

                  <div className="min-w-0">
                    <h3
                      id={`step-${step.id}-title`}
                      className="text-2xl md:text-3xl font-semibold text-slate-900"
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">{step.subtitle}</p>

                    <p className="mt-5 text-lg text-slate-600 max-w-2xl leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="mt-6 grid gap-3">
                      {step.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 h-3 w-3 rounded-full bg-[#8b5a2b]" />
                          <span className="text-base text-slate-700">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Mobile: inline image beneath content */}
                    <div className="mt-6 md:hidden rounded-xl overflow-hidden">
                      <div className="relative w-full aspect-square bg-slate-100">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* final CTA */}
          <div className="pt-4">
            <div className="flex items-center gap-6">
              <button
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#8b5a2b] px-6 py-3 text-white text-lg font-semibold shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                onClick={() => {
                  // main CTA
                  alert("Generate your Vastu report — demo action");
                }}
              >
                Generate Your Vastu Report
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <a
                href="#"
                className="text-sm text-slate-600 underline-offset-2 hover:underline"
              >
                Contact an expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}