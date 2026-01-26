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

export default function FloorPlanOptimizerTab(): JSX.Element {
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
        AI Vastu Floor Plan Optimizer
      </h3>

      {/* DESCRIPTION */}
      <p className="max-w-xl text-slate-700 leading-relaxed">
        Upload your floor plan and receive instant AI-powered Vastu Shastra
        analysis. Detect room placement issues, uncover hidden defects, and
        generate optimized renovation layouts using precise 9-grid Mandala
        mapping.
      </p>

      {/* FEATURES */}
      <div className="space-y-3 max-w-xl">
        {[
          {
            title: "Instant Vastu analysis",
            desc: "Upload your existing floor plan and get a comprehensive analysis in seconds.",
          },
          {
            title: "Identify defects & remedies",
            desc: "Clear insights into room placement issues with practical, Vastu-compliant solutions.",
          },
          {
            title: "Optimized renovation layouts",
            desc: "Generate improved layouts using 9-grid Mandala mapping for perfect spatial alignment.",
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
            alert("Try Free Vastu Floor Plan Optimizer");
          }}
        >
          <span className="font-medium">
            Try Free Vastu Floor Plan Optimizer
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* ANIMATION */}
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
