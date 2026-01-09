"use client";

import React from "react";
import Image from "next/image";
import Herotext from "./Herotext";
import MovingGradient from "../store/Perfume/MovingGradient";

const HomeHero: React.FC = () => {
  return (
    <section
      className="
        relative mx-auto w-[95%]
        min-h-[100vh]
        overflow-hidden rounded-b-[25px]
        bg-gradient-to-b from-white via-blue-100 to-blue-200
        shadow-[0_10px_36px_0_rgba(0,0,0,0.16),_0_0_0_1px_rgba(0,0,0,0.06)]
        py-20 sm:py-28
      "
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 35%, black 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 35%, black 100%)",
      }}
    >
      {/* Grid lines background — DO NOT TOUCH */}
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-b-[25px] bg-[linear-gradient(to_right,rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Fade overlay — DO NOT TOUCH */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-b-[25px]
        bg-gradient-to-t from-blue-100 via-white/40 to-transparent"
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl h-full">
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT — TEXT (slightly smaller, vertically centered) */}
          <div className="flex items-center">
            <div className="max-w-xl origin-left">
              <Herotext />
            </div>
          </div>

          {/* RIGHT — IMAGE (square, bottom-aligned) */}
          <div className="relative flex items-end justify-end w-full">
            <div className="relative aspect-square w-[90%] max-w-[560px]">
              <Image
                src="/check.png"
                alt="Home hero visual"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="
                  object-contain
                  object-bottom
                  select-none
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;
