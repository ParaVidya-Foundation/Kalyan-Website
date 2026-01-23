"use client";

import Image from "next/image";

export default function VastuHero() {
  return (
    <section className="relative w-full overflow-hidden py-36">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
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
          src="/matchmaking/wedding.webp"
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
