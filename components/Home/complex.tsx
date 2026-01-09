"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function Complex() {
  const [imageError, setImageError] = useState(false);
  
  const placeholders = [
    "What does my Lagna lord indicate in career?",
    "How to analyze Mahadasha–Antardasha results?",
    "Is this Saturn transit affecting my marriage?",
    "How to read planetary aspects in a Kundli?",
    "What remedies suit my horoscope ethically?",
    "Can Prashna astrology answer this question?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Input change handler - ready for API integration
    if (process.env.NODE_ENV === "development") {
      console.debug("Input changed:", e.target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission handler - ready for API integration
    if (process.env.NODE_ENV === "development") {
      console.debug("Form submitted");
    }
    // TODO: Implement API call for form submission
  };

  return (
    <section className="relative bg-black">
      <div className=" mx-auto w-full bg-[#FEF7F2] rounded-b-[36px]">
        
        <div className="max-w-7xl mx-auto grid px-6 py-24 grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
        <div>
          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-semibold leading-tight
              bg-gradient-to-br from-violet-500 via-fuchsia-400 to-pink-400
              bg-[length:200%_200%]
              bg-clip-text text-transparent
            "
            style={{
              animation: "gradientMove 6s ease infinite",
            }}
          >
            Solve complex astrology questions
            <br />
            with absolute clarity.
          </h2>

          <p className="mt-6 max-w-xl text-sm sm:text-base text-black/70">
            From Kundli interpretation to transits, dashas, and Prashna —
            get precise, ethical, and structured astrological answers without confusion.
          </p>

          {/* Input wrapper (critical fix) */}
          <div className="mt-10 max-w-xl relative">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="
              relative
              w-full max-w-md rounded-xl
              h-[420px] sm:h-[460px]
              overflow-hidden
              shadow-[0_40px_120px_rgba(168,85,247,0.25)]
            "
          >
            {!imageError ? (
              <Image
                src="/images/complex.png"
                alt="Complex Astrology Visualization"
                fill
                priority
                className="object-contain"
                onError={(e) => {
                  setImageError(true);
                  // Suppress 404 error in console
                  e.stopPropagation();
                }}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  if (img.naturalWidth === 0 || img.naturalHeight === 0) {
                    setImageError(true);
                  }
                }}
                unoptimized
              />
            ) : (
              <div className="flex items-center justify-center h-full text-neutral-400 text-sm font-medium">
                Visualization unavailable
              </div>
            )}

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-fuchsia-400/10"
            />
          </div>
        </div>
        </div>
      </div>

      {/* GLOBAL SAFE KEYFRAMES */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `
      }} />
    </section>
  );
}
