"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  footerRef: React.RefObject<HTMLElement | null>;
  maxOpacity?: number; // 0..1
  heightVh?: number; // how tall the rainbow area is (vh)
};

/**
 * Rainbow
 * - Renders INSIDE the footer (absolutely positioned bottom:0)
 * - Uses IntersectionObserver on footerRef to compute how visible footer is
 * - Only appears during the final portion of the footer visibility (subtle ramp)
 * - GPU-friendly transforms + opacity only; small drift for life
 * - Respects prefers-reduced-motion: will not animate if user prefers reduced motion
 */
export default function Rainbow({
  footerRef,
  maxOpacity = 0.10,
  heightVh = 36,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // target visibility (0..1), current (0..1), time for drift
  const targetRef = useRef<number>(0);
  const curRef = useRef<number>(0);
  const tRef = useRef<number>(0);

  useEffect(() => {
    const footer = footerRef?.current;
    const el = containerRef.current;
    if (!footer || !el) return;

    // Respect prefers-reduced-motion
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // thresholds for observer (0..1 steps)
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        const ratio = e?.intersectionRatio ?? 0;

        // Ramp the target only when footer is substantially visible.
        // We want the rainbow to "bloom" during the final ~5% of entry.
        const rampStart = 0.95; // start ramp at 95% visible
        const rampRange = 0.05; // ramp duration (5%)
        if (ratio <= rampStart) {
          targetRef.current = 0;
        } else {
          const v = (ratio - rampStart) / rampRange;
          targetRef.current = Math.min(1, Math.max(0, v));
        }

        // If reduced motion, jump to target (no animation loop)
        if (reduce) {
          curRef.current = targetRef.current;
          el.style.transform = `translate3d(0,0,0) scaleY(${curRef.current})`;
          el.style.opacity = String(maxOpacity * curRef.current);
        } else {
          // kick animation if needed
          if (!rafRef.current && (targetRef.current > 0 || curRef.current > 0.0005)) {
            rafRef.current = requestAnimationFrame(step);
          }
        }
      },
      { threshold: thresholds }
    );

    obs.observe(footer);

    // animation step (GPU-friendly)
    function step(now?: number) {
      tRef.current += 0.016; // pseudo time increment
      const lerp = 0.12;
      const cur = curRef.current;
      const target = targetRef.current;
      const next = cur + (target - cur) * lerp;
      curRef.current = next;

      // subtle horizontal drift proportional to visibility
      const driftPx = Math.sin(tRef.current * 0.8) * 18 * next; // px, small
      // transform: translateX for soft movement, scaleY for reveal
      el!.style.transform = `translate3d(${driftPx}px, 0, 0) scaleY(${next})`;
      el!.style.opacity = String(maxOpacity * Math.min(1, next * 1.05));

      // continue loop only if not settled
      if (target > 0.0005 || next > 0.0005) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // hide completely and cancel
        el!.style.transform = `translate3d(0,0,0) scaleY(0)`;
        el!.style.opacity = "0";
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }
    }

    return () => {
      obs.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [footerRef, maxOpacity, heightVh]);

  // The container is absolutely positioned inside the footer and sits behind content (z-index low).
  // We use transform-origin: bottom so it visually grows from the bottom up.
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${heightVh}vh`,
        transformOrigin: "bottom",
        transform: "scaleY(0)",
        opacity: 0,
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform, opacity",
        overflow: "hidden",
        // subtle mix-blend so the rainbow feels ambient and never blocks text
        mixBlendMode: "screen",
        // fallback background that will be under the SVG (keeps color when SVG may not render)
        background: "transparent",
      }}
    >
      {/* SVG columns: decorative. The container scales; the SVG simply fills. */}
      <svg
        className="w-full h-full block"
        viewBox="0 0 1271 599"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* LEFT STACK */}
        <g filter="url(#g)"><path transform="matrix(1 0 0 -1 -16 614)" fill="url(#h)" d="M0 0h174v323H0z" /></g>
        <g filter="url(#i)"><path transform="matrix(1 0 0 -1 125 614)" fill="url(#j)" d="M0 0h174v404H0z" /></g>
        <g filter="url(#k)"><path transform="matrix(1 0 0 -1 266 614)" fill="url(#l)" d="M0 0h174v478H0z" /></g>
        <g filter="url(#m)"><path transform="matrix(1 0 0 -1 407 614)" fill="url(#n)" d="M0 0h175v530H0z" /></g>

        {/* CENTER */}
        <g filter="url(#q)"><path transform="matrix(1 0 0 -1 549 614)" fill="url(#r)" d="M0 0h173v584H0z" /></g>

        {/* RIGHT STACK */}
        <g filter="url(#o)"><path transform="rotate(180 864 614)" fill="url(#p)" d="M864 614h175v530H864z" /></g>
        <g filter="url(#e)"><path transform="rotate(180 1005 614)" fill="url(#f)" d="M1005 614h174v478h-174z" /></g>
        <g filter="url(#c)"><path transform="rotate(180 1146 614)" fill="url(#d)" d="M1146 614h174v404h-174z" /></g>
        <g filter="url(#a)"><path transform="rotate(180 1287 614)" fill="url(#b)" d="M1287 614h174v323h-174z" /></g>

        <defs>
          {/* gradients (kept identical to prior design) */}
          <linearGradient id="b" x1="1374" y1="614" x2="1374" y2="937" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="d" x1="1233" y1="614" x2="1233" y2="1018" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="f" x1="1092" y1="614" x2="1092" y2="1092" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="h" x1="87" y1="0" x2="87" y2="323" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="j" x1="87" y1="0" x2="87" y2="404" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="l" x1="87" y1="0" x2="87" y2="478" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="n" x1="87.5" y1="0" x2="87.5" y2="530" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="p" x1="951.5" y1="614" x2="951.5" y2="1144" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="r" x1="86.5" y1="0" x2="86.5" y2="584" gradientUnits="userSpaceOnUse">
            <stop stopColor="#340B05" />
            <stop offset="0.18" stopColor="#0358F7" />
            <stop offset="0.28" stopColor="#5092C7" />
            <stop offset="0.41" stopColor="#E1ECFE" />
            <stop offset="0.58" stopColor="#FFD400" />
            <stop offset="0.68" stopColor="#FA3D1D" />
            <stop offset="0.8" stopColor="#FD02F5" />
            <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
          </linearGradient>

          {/* lightweight blur filters - feGaussianBlur only (keeps GPU work modest) */}
          <filter id="a" x="1083" y="261" width="234" height="383" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="c" x="942" y="180" width="234" height="464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="e" x="801" y="106" width="234" height="538" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="g" x="-46" y="261" width="234" height="383" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="i" x="95" y="180" width="234" height="464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="k" x="236" y="106" width="234" height="538" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="m" x="377" y="54" width="235" height="590" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="o" x="659" y="54" width="235" height="590" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="q" x="519" y="0" width="233" height="644" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
