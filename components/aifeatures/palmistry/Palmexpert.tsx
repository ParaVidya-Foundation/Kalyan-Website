"use client";

import Image from "next/image";

export default function Palmexpert() {
  return (
    <section className="relative w-full py-32 bg-[#5A4235] overflow-hidden">
      <div className="relative mx-auto z-50 max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT : IMAGE */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/AI/Palmistry/expert.webp"
            alt="Palmistry Expert and AI Analysis"
            width={760}
            height={760}
            priority
            className="
              w-full 
              max-w-lg 
              h-auto 
              object-contain
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
            "
          />
        </div>

        {/* RIGHT : CONTENT */}
        <div className="text-center md:text-left">
          <h2
            className="
              text-4xl md:text-5xl
              font-serif
              font-semibold
              tracking-tight
              text-[#F5E9DC]
            "
          >
            Let Expertise & AI
            <br />
            Read Your Hand — Together
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#E8D8CC] max-w-xl mx-auto md:mx-0">
            Palmistry is not intuition alone — it is observation, structure,
            and experience refined over centuries. Our AI reads patterns with
            precision, while our expert interprets their deeper meaning.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#D7C2B2] max-w-lg mx-auto md:mx-0">
            From life lines and mounts to timing, temperament, and life direction,
            every detail is reviewed carefully — combining technology with
            human wisdom for clarity you can trust.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center md:justify-start">
            <a href="tel:+919871130487" aria-label="Call palmistry expert">
              <button
                className="
                  relative
                  px-10 py-4
                  rounded-full
                  bg-[#F5E9DC]
                  text-[#5A4235]
                  font-semibold
                  text-base
                  shadow-[0_12px_32px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-[2px]
                  hover:shadow-[0_18px_44px_rgba(0,0,0,0.45)]
                  active:translate-y-0
                "
              >
                Talk to a Palmistry Expert
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
