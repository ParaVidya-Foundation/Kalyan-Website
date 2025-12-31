"use client";

import { LaserFlow } from "../UIComponents/LaserFlow";
import { useRef } from "react";

const LaserDashboard: React.FC = () => {
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  return (
    <section
      className="relative w-full min-h-[110vh] bg-black overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05010c] to-black" />

      {/* Laser layer */}
      <div className="absolute inset-0 z-0 pointer-events-none mb-16">
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#FF79C6"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 pt-32">
        {/* Text */}
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-violet-300/80">
            Most Productive Astrology Software
          </p>
          <h2 className="mt-3 font-mono text-2xl sm:text-3xl tracking-tight text-white">
            Cleanest UI Design
          </h2>
        </div>

        {/* Image + Glow */}
        <div className="relative mt-[200px] flex justify-center">
          
          {/* OUTER AURA */}
          <div className="absolute -inset-32 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.45),transparent_70%)] blur-3xl" />

          {/* COLOR BLOOM */}
          <div className="absolute -inset-20 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(255,121,198,0.35),transparent_75%)] blur-2xl" />

          {/* CARD */}
          <div
            className="
              relative
              w-full max-w-6xl
              overflow-hidden
              rounded-2xl
              bg-[#060010]
              border border-violet-500/40
              shadow-[0_0_180px_rgba(255,121,198,0.25)]
            "
       
          >
            {/* Base image */}
            <img
              src="/Dashboard.png"
              alt="Dashboard"
              className="w-full h-full object-contain"
            />

            {/* Reveal layer */}
            <img
              ref={revealImgRef}
              src="/Dashboard.png"
              alt="Reveal"
              className="pointer-events-none absolute inset-0 w-full h-full object-contain"
              style={{
                mixBlendMode: "lighten",
                opacity: 0.35,
                ["--mx" as any]: "-9999px",
                ["--my" as any]: "-9999px",
                WebkitMaskImage:
                  "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.9) 80px, rgba(255,255,255,0.4) 160px, rgba(255,255,255,0) 260px)",
                maskImage:
                  "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.9) 80px, rgba(255,255,255,0.4) 160px, rgba(255,255,255,0) 260px)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserDashboard;
