"use client";

import React, { useEffect, useRef, useState, JSX } from "react";
import Image from "next/image";

/* -------------------- TYPES -------------------- */
type InfoRow = { label: string; value: string };
type Trait = { name: string; value: number; note: string };

/* -------------------- DATA -------------------- */
const images = {
  palm: "/AI/Palm/palm.jpg",
};

const DEFAULT_INFO: InfoRow[] = [
  { label: "Name", value: "Mark Wahlberg" },
  { label: "Birth Date", value: "1971-06-05" },
  { label: "Dominant Hand", value: "Right (Active Hand)" },
  { label: "Elemental Type", value: "Fire–Earth Hybrid" },
  { label: "Palm Shape", value: "Square with Firm Mounts" },
  { label: "Primary Indication", value: "Leadership & Material Authority" },
];

const PALM_TRAITS: Trait[] = [
  {
    name: "Personality Nature",
    value: 0.82,
    note:
      "A developed Jupiter mount and deep Life Line indicate confidence, ambition, and natural leadership energy.",
  },
  {
    name: "Anger & Emotional Control",
    value: 0.46,
    note:
      "Balanced Mars influence suggests emotional restraint, with reactions triggered only under pressure.",
  },
  {
    name: "Career & Success Potential",
    value: 0.88,
    note:
      "A strong Fate Line supported by the Sun Line reflects sustained success and earned recognition.",
  },
  {
    name: "Relationships & Emotional Bonds",
    value: 0.66,
    note:
      "A clear Heart Line with gentle curvature points to loyalty and selective emotional investment.",
  },
  {
    name: "Communication & Influence",
    value: 0.74,
    note:
      "Mercury mount activity indicates persuasive communication and intellectual clarity.",
  },
];

/* -------------------- COMPONENT -------------------- */
export default function PalmResult(): JSX.Element {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.animate(
      [
        { opacity: 0, transform: "translateY(14px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 700,
        easing: "cubic-bezier(.2,.9,.2,1)",
        fill: "forwards",
      }
    );
  }, []);

  return (
    <section
      className="max-w-6xl mx-auto px-6 py-14"
      style={{ backgroundColor: "#5A4235" }}
    >
      <h1 className="text-3xl font-semibold text-[#F5E9DC] mb-12">
        AI Palmistry Reading Results
      </h1>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* PALM IMAGE */}
        <div className="lg:col-span-7 flex justify-center">
          <div
            ref={imageRef}
            className="relative w-full max-w-[440px] aspect-square rounded-3xl
                       bg-white/10 backdrop-blur-2xl border border-white/20
                       shadow-[0_70px_160px_rgba(0,0,0,0.55)]
                       overflow-hidden"
          >
            <Image
              src={images.palm}
              alt="Palm Scan"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </div>

        {/* INFO */}
        <aside className="lg:col-span-5">
          <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-[#F5E9DC] mb-6">
              Palm Profile Overview
            </h2>

            <div className="space-y-3">
              {DEFAULT_INFO.map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-[#D7C2B2]">{row.label}</span>
                  <span className="font-medium text-[#F5E9DC]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="mt-8 w-full rounded-xl
                         bg-[#8FAEA3] hover:bg-[#7C9E94]
                         py-3 text-[#1F2A27] font-semibold
                         shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Download Palmistry Report
            </button>
          </div>
        </aside>
      </div>

      {/* PALM INSIGHTS */}
      <div className="mt-14 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl overflow-hidden">
        <button
          onClick={() => setExpanded((s) => !s)}
          className="w-full flex items-center justify-between px-6 py-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-[#F5E9DC]">
              Palmistry Insights
            </h3>
            <p className="text-sm text-[#D7C2B2]">
              AI interpretation using Samudrik Shastra & classical palm science
            </p>
          </div>
          <span className="text-[#8FAEA3] text-2xl font-bold">
            {expanded ? "–" : "+"}
          </span>
        </button>

        <div
          className="transition-all duration-500 ease-[cubic-bezier(.2,.9,.2,1)]"
          style={{ maxHeight: expanded ? 1200 : 0, overflow: "hidden" }}
        >
          <div className="px-6 pb-10 grid md:grid-cols-2 gap-6">
            {PALM_TRAITS.map((trait) => (
              <div
                key={trait.name}
                className="rounded-2xl bg-white/12 backdrop-blur-md p-5
                           border border-white/20 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-[#F5E9DC]">
                    {trait.name}
                  </h4>
                  <span className="text-sm font-bold text-[#8FAEA3]">
                    {Math.round(trait.value * 100)}%
                  </span>
                </div>

                <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-2 rounded-full
                               bg-gradient-to-r from-[#8FAEA3] to-[#6F8F86]
                               transition-all duration-700"
                    style={{ width: `${trait.value * 100}%` }}
                  />
                </div>

                <p className="text-sm text-[#E8D8CC] leading-relaxed">
                  {trait.note}
                </p>
              </div>
            ))}
          </div>

          {/* FOOTER NOTE */}
          <div className="px-6 pb-8 text-xs text-[#CDB7A6]">
            This AI palmistry reading is interpretive, blending traditional
            palmistry (Samudrik Shastra) with modern pattern recognition for
            insight and self-reflection.
          </div>
        </div>
      </div>
    </section>
  );
}
