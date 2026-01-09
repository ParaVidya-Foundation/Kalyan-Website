"use client";

import React from "react";
import Applinks from "./small/Applinks";

export default function Download() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-40 rounded-b-[36px]">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">

          {/* LEFT — VISUAL */}
          <div className="relative flex items-center justify-center lg:justify-start">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_65%)]" />

            {/* Rotating celestial ring */}
            <img
              src="/apptry.png"
              alt="Celestial ring"
              className="
                absolute
                w-[520px]
                max-w-none
                opacity-90
                animate-spinSlow
                will-change-transform
              "
            />

            {/* Phone mockup */}
            <img
              src="/app.png"
              alt="Astrology App Preview"
              className="
                relative z-10
                w-[360px] sm:w-[400px]
                drop-shadow-[0_0_120px_rgba(168,85,247,0.55)]
                will-change-transform
              "
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="relative">
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Best Astrological
              <br />
              Mobile App Of{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                2026
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Stars in the palm of your hand.  
              Discover deeply personalized horoscopes, charts, and insights —
              crafted with clarity, precision, and a beautifully calm interface.
            </p>

            <div className="mt-12">
              <Applinks />
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spinSlow {
          animation: spinSlow 40s linear infinite;
        }
      `}} />
    </section>
  );
}
