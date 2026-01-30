"use client";

import Image from "next/image";

export default function CertTest() {
  return (
    <section className="relative w-full overflow-hidden pt-36">
      {/* 🌈 Vibrant ambient glow layers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-48 -left-48 h-[620px] w-[620px] rounded-full bg-indigo-300/30 blur-[180px] animate-pulseSlow" />
        <div className="absolute top-1/4 -right-48 h-[620px] w-[620px] rounded-full bg-amber-200/35 blur-[200px] animate-pulseSlow delay-200" />
        <div className="absolute bottom-0 left-1/3 h-[620px] w-[620px] rounded-full bg-rose-200/30 blur-[220px] animate-pulseSlow delay-500" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
  Prepare for{" "}
  <span className="relative inline-block font-serif font-bold text-slate-800">
    Astrology Exams
    <span className="absolute left-0 -bottom-2 h-2 w-full rounded-full bg-amber-300/70 blur-[2px] -z-10" />
  </span>
</h1>


<p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
  Practice through guided astrology tests, progressive question sets,
  and clearly defined learning roadmaps — covering fundamentals,
  predictive techniques, chart analysis, and ethical application.
</p>


        <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
          Master Vedic astrology, planetary mechanics, dashas, chart analysis,
          predictive timing, and ethical consultation — guided by experts and
          validated through formal certification.
        </p>

        {/* CTA */}
        <div className="mt-14 flex justify-center gap-5">
        <button
  className="
    rounded-full
    bg-slate-900
    px-9 py-4
    text-base font-medium text-white
    shadow-[0_20px_60px_rgba(0,0,0,0.22)]
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)]
  "
>
  Start Practice Tests
</button>

<button
  className="
    rounded-full
    border border-slate-300/80
    px-9 py-4
    text-base font-medium text-slate-800
    backdrop-blur
    transition-all duration-300
    hover:bg-white/70
  "
>
  View Exam Roadmap
</button>

        </div>
      </div>

      {/* HERO VISUAL */}
      <div className="relative z-10 w-full">
        <Image
          src="/Service/Reports/testbanner.webp"
          alt="Astrology Certification Program"
          width={1920}
          height={600}
          priority
          className="
            w-full h-auto object-cover object-center
            drop-shadow-[0_60px_120px_rgba(0,0,0,0.18)]
          "
          style={{ position: 'relative' }}
        />
      </div>

      {/* Subtle ambient animation (CSS only, GPU safe) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulseSlow {
          0% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.06);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.85;
          }
        }
        .animate-pulseSlow {
          animation: pulseSlow 14s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 2s;
        }
        .delay-500 {
          animation-delay: 5s;
        }
      `}} />
    </section>
  );
}
