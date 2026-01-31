"use client";

import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="relative w-full overflow-hidden py-36">


      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
          Where <span className="font-bold font-serif text-red-700">Destiny</span> Meets <span className="font -bold font-serif text-red-700">Design</span>
        </h2>

        <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
          Marriage is not found — it is aligned.
          <br />
          We bring together ancient Vedic wisdom and modern intelligence
          to reveal connections that feel effortless, meaningful, and enduring.
        </p>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
          From planetary harmony to life direction and emotional compatibility,
          every match is shaped with intention, privacy, and respect for tradition —
          refined for today’s world.
        </p>
      </div>

      {/* BOTTOM IMAGE */}
      <div className="relative z-10 w-full">
        <Image
          src="/Service/matchmaking/wedding.webp"
          alt="Sacred wedding moment"
          width={1920}
          height={800}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
