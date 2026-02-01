"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function EasyManage() {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      
      {/* ================= BLOG ================= */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Secure Kundli Cloud
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
          A private, encrypted cloud built exclusively for astrology records.
            Store every Kundli securely, preserve years of consultation history,
            and access them instantly—without worrying about loss, clutter, or
            device dependency.
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
          Smart Tags & Favorites
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
          Organize Kundlis effortlessly using tags like Career, Marriage,
            Health, or Family. Mark important charts as favorites and retrieve
            them instantly—no manual searching, no confusion.
          </p>
        </div>
      </WobbleCard>

      {/* ================= RESEARCH ================= */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-sm">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Scalable. Simple. Always Accessible.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Designed for serious learners and professional astrologers. Store
            unlimited Kundlis, manage records across clients and years, and
            access your complete astrology archive anytime, anywhere—securely
            and seamlessly.
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
