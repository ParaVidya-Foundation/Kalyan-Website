"use client";

import React from "react";
import Image from "next/image";
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
            <div className="absolute w-[520px] h-[520px] opacity-90 animate-spinSlow will-change-transform">
              <Image
                src="/apptry.png"
                alt="Celestial ring"
                fill
                className="object-contain"
                sizes="520px"
                loading="lazy"
                unoptimized
              />
            </div>

            {/* Phone mockup */}
            <div className="relative z-10 w-[360px] sm:w-[400px] h-auto drop-shadow-[0_0_120px_rgba(168,85,247,0.55)] will-change-transform">
              <Image
                src="/app.png"
                alt="Astrology App Preview"
                width={400}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 640px) 360px, 400px"
                priority
              />
            </div>
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

      {/* Keyframes moved to globals.css for better performance */}
    </section>
  );
}
