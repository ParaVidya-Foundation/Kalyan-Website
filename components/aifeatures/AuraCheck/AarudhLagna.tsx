"use client";

import Image from "next/image";

export default function AarudhLagna() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              What’s Your
              <br />
              <span className="font-serif font-bold">Aarudh Lagna ?</span>
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600">
              Your Aarudh Lagna is the silent language you speak before words — a subtle
              field shaped by birth time, planetary influence, and inner nature.
              Aarudh Lagna decodes this invisible signature to reveal how your
              presence feels to others, where your energy flows naturally, and
              where imbalance may arise.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Grounded in astrology. Interpreted with clarity. Presented without
              exaggeration.
            </p>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/AI/AuraCheck/aarudh.webp"
                alt="Aura visualization"
                width={900}
                height={900}
                priority
                className="
                  object-contain
                  drop-shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                "
              />

              {/* Ambient glow */}
              <div
                aria-hidden
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-amber-200/20
                  blur-[160px]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
