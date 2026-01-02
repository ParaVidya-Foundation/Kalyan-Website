"use client";

import React, { JSX , useEffect, useRef } from "react";

/**
 * ShopGradient.tsx
 *
 * - Scoped: absolute inset-0 (not fixed) so it stays inside parent
 * - Mouse-follow uses container bounds (no viewport bleed)
 * - Single DOM write per RAF: updates CSS variables on container
 * - Grain created via inline SVG fractalNoise (very small DOM)
 * - Pastel vibrant orbs + tiny particles
 */

export default function ShopGradient(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null!);

  // tuning
  const LERP = 0.12; // smoothing: lower = snappier, higher = more inertia
  const PARTICLE_COUNT = 20; // keep light
  const ORB_BLUR = 36; // px blur for orbs

  // seed once
  const seedRef = useRef<number[] | null>(null);
  useEffect(() => {
    seedRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) =>
      Math.abs(Math.sin(i * 12.9898 + 78.233) * 43758.5453)
    );
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // initialize css vars
    el.style.setProperty("--mx", "50"); // percent (0..100)
    el.style.setProperty("--my", "50");
    el.style.setProperty("--time", "0");
    el.style.setProperty("--v-scale", "1");

    // internal state (not React) for perf
    let targetX = 50;
    let targetY = 50;
    let curX = 50;
    let curY = 50;
    let raf = 0;
    let last = performance.now();

    // clamp helper
    const clamp = (v: number, a = 0, b = 100) => Math.max(a, Math.min(b, v));

    function onMove(e: MouseEvent | TouchEvent) {
      const rect = el!.getBoundingClientRect();
      let clientX = 0,
        clientY = 0;
      if (e instanceof TouchEvent) {
        const t = (e as TouchEvent).touches[0];
        if (!t) return;
        clientX = t.clientX;
        clientY = t.clientY;
      } else {
        const me = e as MouseEvent;
        clientX = me.clientX;
        clientY = me.clientY;
      }
      const rx = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
      const ry = clamp(((clientY - rect.top) / rect.height) * 100, 0, 100);

      targetX = rx;
      targetY = ry;

      // velocity-based subtle scale (visual feedback)
      const dx = Math.abs(targetX - curX);
      const dy = Math.abs(targetY - curY);
      const v = Math.min(1.12, 1 + Math.max(dx, dy) * 0.006);
      el.style.setProperty("--v-scale", String(v));
    }

    function onLeave() {
      // return slowly to center when leaving
      targetX = 50;
      targetY = 50;
      el.style.setProperty("--v-scale", "1");
    }

    function animate(now: number) {
      const dt = Math.min(0.06, (now - last) / 1000);
      last = now;

      // lerp current toward target (timing independent)
      curX += (targetX - curX) * LERP;
      curY += (targetY - curY) * LERP;

      // update single DOM element CSS vars
      el!.style.setProperty("--mx", curX.toFixed(3));
      el!.style.setProperty("--my", curY.toFixed(3));
      el!.style.setProperty("--time", String(now * 0.001));

      raf = requestAnimationFrame(animate);
    }

    // attach listeners on the container (scoped)
    el!.addEventListener("mousemove", onMove, { passive: true });
    el!.addEventListener("touchmove", onMove, { passive: true });
    el!.addEventListener("mouseleave", onLeave, { passive: true });
    el!.addEventListener("touchend", onLeave, { passive: true });

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      el!.removeEventListener("mousemove", onMove);
      el!.removeEventListener("touchmove", onMove);
      el!.removeEventListener("mouseleave", onLeave);
      el!.removeEventListener("touchend", onLeave);
    };
  }, []);

  // render
  return (
    <>
      <div
        ref={containerRef}
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        // CSS variables used by inner styles; keep inline style minimal
        style={{ willChange: "transform, opacity" }}
      >
        {/* BASE PASTEL GRADIENT (vibrant + pastel) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #fff3f8 0%, #ffe6f0 18%, #ffdcd1 40%, #fff7e9 65%, #f3f9ff 100%)",
            mixBlendMode: "normal",
            opacity: 1,
            willChange: "transform, opacity",
          }}
        />

        {/* ORBS GROUP */}
        <div className="absolute inset-0" style={{ willChange: "transform" }}>
          {/* orb 1 (follows container mouse) */}
          <div
            style={{
              position: "absolute",
              width: "720px",
              height: "720px",
              left: "calc(var(--mx,50) * 1% - 360px)",
              top: "calc(var(--my,50) * 1% - 360px)",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,195,170,0.72) 0%, rgba(255,220,200,0.28) 30%, transparent 70%)",
              filter: `blur(${ORB_BLUR}px)`,
              transform: "translate3d(0,0,0) scale(var(--v-scale,1))",
              willChange: "left, top, transform",
              pointerEvents: "none",
              opacity: 0.95,
            }}
          />

          {/* orb 2 (offset parallax) */}
          <div
            style={{
              position: "absolute",
              width: "820px",
              height: "820px",
              left:
                "calc(80% - var(--mx,50) * 0.45% - 410px + (sin(var(--time,0)/6.7) * 12px))",
              top:
                "calc(12% + var(--my,50) * 0.22% - 410px + (cos(var(--time,0)/7.2) * 18px))",
              background:
                "radial-gradient(circle at 40% 40%, rgba(255,160,200,0.55) 0%, rgba(255,220,235,0.24) 45%, transparent 78%)",
              filter: `blur(${ORB_BLUR + 8}px)`,
              transform: "translate3d(0,0,0)",
              willChange: "left, top",
              opacity: 0.9,
              pointerEvents: "none",
            }}
          />

          {/* orb 3 (cool tone) */}
          <div
            style={{
              position: "absolute",
              width: "620px",
              height: "620px",
              left:
                "calc(16% + var(--mx,50) * 0.28% - 310px + (sin(var(--time,0)/8.2) * 8px))",
              top:
                "calc(68% - var(--my,50) * 0.22% - 310px + (cos(var(--time,0)/5.1) * 12px))",
              background:
                "radial-gradient(circle at 50% 50%, rgba(190,220,255,0.44) 0%, rgba(220,235,255,0.16) 60%, transparent 90%)",
              filter: `blur(${ORB_BLUR - 6}px)`,
              transform: "translate3d(0,0,0)",
              willChange: "left, top",
              opacity: 0.9,
              pointerEvents: "none",
            }}
          />

          {/* orb 4 (warm tone) */}
          <div
            style={{
              position: "absolute",
              width: "520px",
              height: "520px",
              left:
                "calc(68% - var(--mx,50) * 0.18% - 260px + (cos(var(--time,0)/9.5) * 10px))",
              top:
                "calc(32% + var(--my,50) * 0.12% - 260px + (sin(var(--time,0)/6.3) * 10px))",
              background:
                "radial-gradient(circle at 40% 40%, rgba(255,210,170,0.46) 0%, rgba(255,240,210,0.12) 70%, transparent 96%)",
              filter: `blur(${ORB_BLUR - 2}px)`,
              transform: "translate3d(0,0,0)",
              willChange: "left, top",
              opacity: 0.9,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* small floating particles (cheap, CSS-based) */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
            const s = seedRef.current?.[i] ?? i * 17.3;
            const left = `${((s * 31.7) % 100).toFixed(2)}%`;
            const top = `${((s * 73.1) % 100).toFixed(2)}%`;
            const size = 1 + ((s * 13.3) % 3); // 1..4
            const delay = ((s * 7.1) % 20) / 10;
            const dur = 18 + (i % 7);
            const hue = -8 + ((s * 47.2) % 24); // tiny hue shift
            const bg = `radial-gradient(circle, rgba(255,200,170,${0.62 -
              size * 0.12}) 0%, rgba(255,220,200,0.02) 70%)`;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left,
                  top,
                  width: `${size}px`,
                  height: `${size}px`,
                  borderRadius: 999,
                  background: bg,
                  filter: "blur(0.6px)",
                  opacity: 0.95,
                  animation: `pg-move-${(i % 5) + 1} ${dur}s linear ${-delay}s infinite`,
                  willChange: "transform, opacity",
                }}
              />
            );
          })}
        </div>

        {/* SVG grain/noise overlay (very cheap, single element) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            pointerEvents: "none",
            mixBlendMode: "overlay",
          }}
          aria-hidden
        >
          {/* Inline SVG to generate fractal noise grain — tiny and cached by browser */}
          <svg
            viewBox="0 0 250 250"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            style={{ display: "block" }}
          >
            <filter id="sgNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="2"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#sgNoise)" fill="rgba(0,0,0,0.06)" />
          </svg>
        </div>
      </div>

      {/* lightweight keyframes */}
      <style jsx>{`
        /* subtle particle motion */
        @keyframes pg-move-1 {
          0% { transform: translate3d(0,0,0) scale(1); opacity: 0; }
          8% { opacity: 1; }
          50% { transform: translate3d(8px,-6px,0) scale(1.12); }
          100% { transform: translate3d(-6px,8px,0) scale(0.95); opacity: 0; }
        }
        @keyframes pg-move-2 {
          0% { transform: translate3d(0,0,0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translate3d(-10px,6px,0) scale(1.08); }
          100% { transform: translate3d(6px,-10px,0) scale(0.94); opacity: 0; }
        }
        @keyframes pg-move-3 {
          0% { transform: translate3d(0,0,0); opacity: 0; }
          7% { opacity: 1; }
          50% { transform: translate3d(14px,6px,0) scale(1.12); }
          100% { transform: translate3d(-10px,-6px,0) scale(0.9); opacity: 0; }
        }
        @keyframes pg-move-4 {
          0% { transform: translate3d(0,0,0); opacity: 0; }
          9% { opacity: 1; }
          50% { transform: translate3d(-8px,14px,0) scale(1.06); }
          100% { transform: translate3d(6px,-12px,0) scale(0.92); opacity: 0; }
        }
        @keyframes pg-move-5 {
          0% { transform: translate3d(0,0,0); opacity: 0; }
          6% { opacity: 1; }
          50% { transform: translate3d(10px,-4px,0) scale(1.08); }
          100% { transform: translate3d(-8px,10px,0) scale(0.9); opacity: 0; }
        }

        /* reduce motion for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .absolute[aria-hidden] { animation: none !important; }
          div[style*="animation"] { animation: none !important; }
        }
      `}</style>
    </>
  );
}
