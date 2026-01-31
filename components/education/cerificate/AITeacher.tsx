"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function AITeacher() {
  const [imageError, setImageError] = useState(false);
  
  const placeholders = [
    "How does my Lagna lord shape long-term career growth?",
    "How should Mahadasha–Antardasha be interpreted together?",
    "What is the correct way to judge Saturn transits?",
    "How do planetary aspects modify house results?",
    "Which remedies are ethically appropriate for this chart?",
    "Can Prashna astrology be applied in this situation?",
  ];
  
  // Memoized handlers to prevent re-renders
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // Input change handler - ready for API integration
    if (process.env.NODE_ENV === "development") {
      console.debug("Input changed:", e.target.value);
    }
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission handler - ready for API integration
    if (process.env.NODE_ENV === "development") {
      console.debug("Form submitted");
    }
    // TODO: Implement API call for form submission
  }, []);

  // Memoized image error handlers
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    e.stopPropagation();
  }, []);

  const handleImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth === 0 || img.naturalHeight === 0) {
      setImageError(true);
    }
  }, []);

  return (
    <section className="relative bg-black">
      <div className=" mx-auto w-full bg-[#FEF7F2]">
        
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
           Learn Astrology with an AI Mentor
           
            <br />
            built for serious understanding.
          </h2>

          <p className="mt-6 max-w-xl text-sm sm:text-base text-black/70">
          Your personal AI guide for mastering astrology — from foundational principles to advanced predictive techniques.
<br />
Ask complex questions, explore multiple interpretations, and understand the why behind every astrological outcome — clearly, ethically, and step by step.
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
                onError={handleImageError}
                onLoad={handleImageLoad}
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

      {/* Keyframes moved to globals.css for better performance */}
    </section>
  );
}
