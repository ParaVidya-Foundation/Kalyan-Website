"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function BlogBento() {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      
      {/* ================= BLOG ================= */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Astrology Blog
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            In-depth astrology articles rooted in classical Jyotish — planets,
            dashas, yogas, remedies, and real-world applications explained
            clearly for modern readers.
          </p>
        </div>

        <img
          src="/blog.png"
          width={500}
          height={500}
          alt="Astrology blog preview"
          className="
            absolute
            -right-7
            -bottom-5
            w-[420px]
            md:w-[480px]
            lg:w-[520px]
            object-contain
            rounded-2xl
          "
        />
      </WobbleCard>

      {/* ================= AI BLOG ================= */}
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-80">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            AI Astrology Updates
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Latest insights from our AI astrology research — model updates,
            interpretation logic, accuracy improvements, and how technology is
            reshaping predictive astrology.
          </p>
        </div>
      </WobbleCard>

      {/* ================= RESEARCH ================= */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-sm">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Astrology Research Papers
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Explore the world’s largest curated collection of astrology research
            papers — covering Vedic systems, statistical studies, planetary
            correlations, AI-assisted analysis, and historical manuscripts.
          </p>
        </div>

        <img
          src="/research.png"
          width={560}
          height={560}
          alt="Astrology research papers"
          className="
            absolute
           -right-7
            -bottom-2
            w-[540px]
            md:w-[500px]
            lg:w-[560px]
            object-contain
            rounded-2xl
          "
        />
      </WobbleCard>
    </div>
  );
}
