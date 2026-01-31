"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const STEPS = [
  {
    id: 1,
    title: "Upload Your Face Photo",
    subtitle: "Clear, front-facing image — no complexity",
    description:
      "Upload a clear photo of your face taken in natural light. Our AI works best with a neutral expression and a straight, front-facing angle. No filters, no makeup rules, no special setup — just a simple photo.",
    points: [
      "Supports JPG, PNG formats",
      "Front-facing face with natural lighting",
      "No filters or heavy editing required",
      "Secure & private — images are never shared",
    ],
    image: "/AI/Face/step-1.webp",
  },
  {
    id: 2,
    title: "AI Analyzes Facial Features & Patterns",
    subtitle: "Ancient face reading meets modern AI",
    description:
      "Our AI maps and studies key facial zones based on traditional face reading principles. It evaluates proportions, symmetry, lines, and feature placements to understand personality traits, strengths, emotional patterns, and life tendencies.",
    points: [
      "Face shape & structure analysis",
      "Eyes, nose, lips & forehead reading",
      "Emotion, mindset & personality indicators",
      "Luck, career, relationships & health zones",
    ],
    image: "/AI/Face/step-2.webp",
  },
  {
    id: 3,
    title: "Get Your Personalized Face Reading Report",
    subtitle: "Clear insights you can actually use",
    description:
      "Receive a beautifully structured report explaining what your face reveals about you. The insights are practical, easy to understand, and focused on self-awareness, growth, and decision-making.",
    points: [
      "Personality & behavioral insights",
      "Career, wealth & relationship tendencies",
      "Emotional strengths & challenges",
      "Simple guidance for self-improvement",
    ],
    image: "/AI/Face/step-3.webp",
  },
] as const;


/* ---------------- COMPONENT ---------------- */

export default function FaceProcess(): React.ReactElement {
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
          How <span className="text-[#8b5a2b] font-bold">Face AI</span> Works
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          Ancient Face principles translated into precise, actionable
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
                  alert("Generate your Face report — demo action");
                }}
              >
                Generate Your Face Report
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