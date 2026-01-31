"use client";

import React from "react";
import Image from "next/image";
import Applinks from "./small/Applinks";

export default function Download() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 sm:py-32 lg:py-40 rounded-b-[36px]">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

          {/* LEFT — VISUAL */}
          <div className="relative flex items-center justify-center">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_65%)]" />

            {/* Rotating celestial ring */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] opacity-80 animate-spinSlow will-change-transform">
              <Image
                src="/apptry.png"
                alt="Celestial astrology ring"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 520px"
                loading="lazy"
                unoptimized
              />
            </div>

            {/* Phone mockup */}
            <div className="relative z-10 w-[320px] sm:w-[380px] lg:w-[460px] drop-shadow-[0_0_140px_rgba(168,85,247,0.6)]">
  <Image
    src="/app.png"
    alt="Astrology App Interface"
    width={460}
    height={920}
    className="w-full h-auto"
    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 460px"
    priority
  />
</div>

          </div>

          {/* RIGHT — CONTENT */}
          <div className="relative text-center lg:text-left">
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
              The most accurate
              <br />
              Astrology Calculation App of{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                2026
              </span>
            </h2>

            <p className="mt-6 sm:mt-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">
              Built for precision. Powered by classical Vedic algorithms.
              Generate Janam Kundli, divisional charts, dashas, transits, yogas,
              and predictions — instantly, accurately, and beautifully.
            </p>

            <div className="mt-10 sm:mt-12 flex justify-center lg:justify-start">
              <Applinks />
            </div>
          </div>

        </div>
      </div>

      {/* Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spinSlow {
            animation: spinSlow 40s linear infinite;
          }
        `,
        }}
      />
    </section>
  );
}
