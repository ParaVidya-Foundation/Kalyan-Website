"use client";

import React, { JSX } from "react";

/* -------------------- constants -------------------- */

const BROWN = "#8b5a2b";
const FONT =
  "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";

/* -------------------- icons -------------------- */

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 13l4 4L19 7"
        stroke={BROWN}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------- component -------------------- */

export default function FloorPlanGeneratorTab(): JSX.Element {
  return (
    <div
      className="space-y-6 animate-fadeIn"
      style={{ fontFamily: FONT }}
    >
      {/* LABEL */}
      <div
        className="text-sm tracking-wider font-medium"
        style={{ color: BROWN }}
      >
        FREE TOOL
      </div>

      {/* TITLE */}
      <h3
        className="text-3xl md:text-4xl font-extrabold leading-tight"
        style={{ color: BROWN }}
      >
        AI Vastu Floor Plan Generator
      </h3>

      {/* DESCRIPTION */}
      <p className="max-w-xl text-slate-700 leading-relaxed">
        Create professional floor plans with AI assistance. Design your space
        with intelligent room layouts, furniture placement, and
        Vastu-compliant arrangements. Download and customize plans to match
        your exact requirements.
      </p>

      {/* FEATURES */}
      <div className="space-y-3 max-w-xl">
        {[
          {
            title: "AI-powered design",
            desc: "Generate professional floor plans in minutes using intelligent room placement logic.",
          },
          {
            title: "Vastu-compliant layouts",
            desc: "Automatically optimized for positive energy flow and directional harmony.",
          },
          {
            title: "Download & customize",
            desc: "Export your plans and fine-tune layouts to suit your lifestyle or project needs.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white/70 p-4 shadow-sm transition hover:shadow-md hover:-translate-y-[2px]"
            style={{ backdropFilter: "blur(6px)" }}
          >
            <div className="mt-1">
              <CheckIcon />
            </div>

            <div>
              <div
                className="text-sm font-medium"
                style={{ color: "#4a3526" }}
              >
                {item.title}
              </div>
              <div className="text-sm text-slate-500">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-4">
        <button
          className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
          style={{
            background: `linear-gradient(180deg, #9a6a3a, ${BROWN})`,
          }}
          onClick={() => {
            alert("Try Free Vastu Floor Plan Generator");
          }}
        >
          <span className="font-medium">
            Try Free Vastu Floor Plan Generator
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* SUBTLE ENTRANCE ANIMATION */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.45s ease both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
