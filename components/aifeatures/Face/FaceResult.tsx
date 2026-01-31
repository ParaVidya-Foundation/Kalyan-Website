"use client";

import React, { useEffect, useRef, useState, JSX } from "react";
import Image from "next/image";

/* -------------------- TYPES -------------------- */
type InfoRow = { label: string; value: string };
type Trait = { name: string; value: number; note: string };

/* -------------------- DATA -------------------- */
const images = {
  front: "/AI/Face/front.jpg",
};

const DEFAULT_INFO: InfoRow[] = [
  { label: "Name", value: "Mark Wahlberg" },
  { label: "Birth Date", value: "1971-06-05" },
  { label: "Gender", value: "Male" },
  { label: "Ethnicity", value: "European" },
  { label: "Country", value: "USA" },
  { label: "Primary Signal", value: "Leadership & Authority" },
];

const FACE_TRAITS: Trait[] = [
  {
    name: "Personality Strength",
    value: 0.78,
    note: "Strong bone structure and balanced symmetry indicate confidence and assertiveness.",
  },
  {
    name: "Anger / Temper",
    value: 0.42,
    note: "Defined jawline with controlled brow suggests restrained anger, expressed only under pressure.",
  },
  {
    name: "Success Potential",
    value: 0.81,
    note: "Firm jaw, wide forehead and steady gaze are classic markers of long-term success.",
  },
  {
    name: "Relationship Harmony",
    value: 0.64,
    note: "Softened cheek muscles add warmth, improving emotional connections.",
  },
  {
    name: "Communication Skill",
    value: 0.70,
    note: "Balanced mouth width and relaxed lips indicate persuasive and clear communication.",
  },
];

/* -------------------- COMPONENT -------------------- */
export default function FaceResult(): JSX.Element {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(true);

  /* entrance animation */
  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.animate(
      [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 600, easing: "cubic-bezier(.2,.9,.2,1)", fill: "forwards" }
    );
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">
        AI Face Reading Results
      </h1>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* IMAGE */}
        <div className="lg:col-span-7 flex justify-center">
          <div
            ref={imageRef}
            className="relative w-full max-w-[420px] aspect-square rounded-3xl
                       bg-white/30 backdrop-blur-xl border border-white/40
                       shadow-[0_40px_120px_rgba(0,0,0,0.12)]
                       overflow-hidden"
          >
            <Image
              src={images.front}
              alt="Face Scan"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* INFO */}
        <aside className="lg:col-span-5">
          <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Profile Overview
            </h2>

            <div className="space-y-3">
              {DEFAULT_INFO.map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-slate-500">{row.label}</span>
                  <span className="font-medium text-slate-900">{row.value}</span>
                </div>
              ))}
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-gradient-to-b from-amber-500 to-amber-600
                         py-3 text-white font-semibold shadow-lg
                         transition-transform hover:-translate-y-0.5"
            >
              Download Full Report
            </button>
          </div>
        </aside>
      </div>

      {/* FACE TRAITS */}
      <div className="mt-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg overflow-hidden">
        <button
          onClick={() => setExpanded((s) => !s)}
          className="w-full flex items-center justify-between px-6 py-5"
        >
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Face Reading Insights</h3>
            <p className="text-sm text-slate-500">
              Derived from traditional face reading & astrological physiognomy
            </p>
          </div>
          <span className="text-amber-600 text-2xl font-bold">
            {expanded ? "–" : "+"}
          </span>
        </button>

        <div
          className="transition-all duration-500 ease-[cubic-bezier(.2,.9,.2,1)]"
          style={{ maxHeight: expanded ? 1000 : 0, overflow: "hidden" }}
        >
          <div className="px-6 pb-8 grid md:grid-cols-2 gap-6">
            {FACE_TRAITS.map((trait) => (
              <div
                key={trait.name}
                className="rounded-2xl bg-white/70 backdrop-blur-md p-5
                           border border-slate-100 hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-slate-900">{trait.name}</h4>
                  <span className="text-sm font-bold text-amber-600">
                    {Math.round(trait.value * 100)}%
                  </span>
                </div>

                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600
                               transition-all duration-700"
                    style={{ width: `${trait.value * 100}%` }}
                  />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {trait.note}
                </p>
              </div>
            ))}
          </div>

          {/* FOOTER NOTE */}
          <div className="px-6 pb-6 text-xs text-slate-500">
            These insights are interpretive in nature, rooted in traditional face reading
            (Samudrik Shastra & Eastern physiognomy) and intended for self-understanding.
          </div>
        </div>
      </div>
    </section>
  );
}
