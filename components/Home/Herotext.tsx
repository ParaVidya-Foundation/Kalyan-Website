"use client";

import { useEffect, useState } from "react";

type Persona = {
  name: string;
  zodiac: string;
  symbol: string;
};

const PERSONAS: Persona[] = [
  { name: "Soham", zodiac: "Gemini", symbol: "♊" },
  { name: "Aarav", zodiac: "Scorpio", symbol: "♏" },
  { name: "Shubham", zodiac: "Leo", symbol: "♌" },
  { name: "Ishaan", zodiac: "Capricorn", symbol: "♑" },
];

export default function HeroText() {
  const [index, setIndex] = useState(0);
  const persona = PERSONAS[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PERSONAS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[72vh] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[21px] font-medium text-violet-300 backdrop-blur">
          <span className="opacity-80">New</span>
          <span className="tracking-wide">AI-Powered Horoscopes →</span>
        </div>

        {/* Headline */}
        <h1 className="text-balance font-semibold leading-[1.08] tracking-tight text-[54px] sm:text-[54px] md:text-[54px]">
          <span className="text-black/90">Hey</span>{" "}
          <AnimatedPill key={persona.name}>
            {persona.name}
          </AnimatedPill>
          <span className="text-black/90">!</span>
          <br />

          <span className="animated-gradient-text">
            Your personalised daily
            <br />
            AI horoscope podcast
          </span>
          <br />

          <span className="text-black/90">for</span>{" "}
          <AnimatedPill key={persona.zodiac}>
            <span className="mr-2 text-yellow-400">{persona.symbol}</span>
            {persona.zodiac}
          </AnimatedPill>{" "}
          <span className="text-black/90">awaits you.</span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-xl text-sm sm:text-sm text-black/70">
          Astrology that speaks to you. Anytime, anywhere.
        </p>
      </div>

      {/* Gradient animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .animated-gradient-text {
          background: linear-gradient(
            120deg,
            #f472b6,
            #c084fc,
            #818cf8,
            #f472b6
          );
          background-size: 300% 300%;
          animation: gradientMove 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `
      }} />
    </section>
  );
}

/* =========================
   Animated Gradient Pill
========================= */

function AnimatedPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center
        rounded-xl border border-violet-500/30
        bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10
        px-3 py-1
        text-violet-300
        backdrop-blur
        shadow-[0_0_30px_rgba(139,92,246,0.18)]
        transition
      "
    >
      {children}
    </span>
  );
}
