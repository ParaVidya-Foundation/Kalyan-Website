"use client";

import { WavyBackground } from "@/components/UIComponents/wavy-background";
import FeatureStrip from "./FeatureStrip";

export default function AnytimeKundli() {
  return (
    <div className="relative isolate w-full overflow-hidden">
      <WavyBackground
        className="
          flex
          min-h-[50vh]
          flex-col
          items-center
          justify-center
          text-center
          px-6"
        backgroundFill="white"
        speed="fast"
        waveOpacity={0.14}
        blur={6}
        colors={["#3b82f6", "#6366f1", "#9333ea"]}
      >
        <div className="mt-20">
        <h1
          className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-semibold
            tracking-tight
            text-black
          "
          style={{
            textShadow: "0 12px 28px rgba(0,0,0,0.18)",
          }}
        >
          Your <span className="font-bold font-serif">Kundli</span>,
          <br />
          always within reach.
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-base md:text-lg text-black/70 leading-relaxed">
          See your favorite Kundli anytime, anyplace, anywhere — securely stored
          in the cloud and instantly accessible whenever insight is needed.
        </p>

        {/* Supporting line (optional but premium) */}
        <p className="mt-3 text-sm md:text-base text-black/50">
          Built for continuity, clarity, and lifelong reference.
        </p>
        </div>
          <div className="py-10"><FeatureStrip /></div>
      </WavyBackground>
    
    </div>
  );
}
