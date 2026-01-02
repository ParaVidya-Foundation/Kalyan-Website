"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  footerRef: React.RefObject<HTMLElement | null>;
  // optional tuning
  maxOpacity?: number; // e.g. 0.14
  heightVh?: number; // e.g. 40
};

export default function Rainbow({
  footerRef,
  maxOpacity = 0.14,
  heightVh = 40,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef<number>(0); // target scale 0..1
  const curRef = useRef<number>(0);
  const tRef = useRef<number>(0);

  useEffect(() => {
    const footerEl = footerRef?.current;
    const el = containerRef.current;
    if (!el || !footerEl) return;

    // IntersectionObserver to set target scale (how visible footer is)
    const thresholds = Array.from({ length: 51 }, (_, i) => i / 50); // 0..1 in 0.02 steps
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const ratio = entry ? entry.intersectionRatio : 0;
        // Use a slightly biased mapping (optional). Keep linear for now.
        targetRef.current = Math.max(0, Math.min(1, ratio));
      },
      { threshold: thresholds }
    );

    observer.observe(footerEl);

    // animation loop (only transforms + opacity)
    const step = (now: number) => {
      // now is DOMHighResTimeStamp
      tRef.current += 0.016; // increment pseudo-time (not tied to now; fine)
      // lerp current -> target
      const cur = curRef.current;
      const target = targetRef.current;
      const lerp = 0.12; // smoothing
      const next = cur + (target - cur) * lerp;
      curRef.current = next;

      // horizontal drift scales with current visibility (subtle)
      const drift = Math.sin(tRef.current * 0.8) * 22 * next; // px

      // apply transform + opacity on container (GPU)
      // translateX for soft movement; scaleY for "growing" reveal
      el.style.transform = `translate3d(${drift}px, 0, 0) scaleY(${next})`;
      el.style.opacity = String(maxOpacity * Math.min(1, next * 1.08));

      // Condition to keep running: run as long as either target>0 or cur>small epsilon
      if (target > 0.0005 || next > 0.0005) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // small cleanup: ensure fully hidden
        el.style.transform = `translate3d(0,0,0) scaleY(0)`;
        el.style.opacity = "0";
        rafRef.current = null;
      }
    };

    // start loop (one frame)
    if (!rafRef.current) rafRef.current = requestAnimationFrame(step);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [footerRef, maxOpacity, heightVh]);

  // Note: the container is positioned absolutely and sized by CSS.
  // The SVG below is the decorative rainbow columns you supplied, but simplified:
  // we scale the entire SVG via the container transform.
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        // scoped to footer parent: absolute inside footer
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
      }}
    >
      {/* Put the SVG inside; it scales with the container. Using supplied shapes */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1271 599"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* LEFT STACK */}
        <g filter="url(#g)">
          <path
            transform="matrix(1 0 0 -1 -16 614)"
            fill="url(#h)"
            d="M0 0h174v323H0z"
          />
        </g>
        <g filter="url(#i)">
          <path
            transform="matrix(1 0 0 -1 125 614)"
            fill="url(#j)"
            d="M0 0h174v404H0z"
          />
        </g>
        <g filter="url(#k)">
          <path
            transform="matrix(1 0 0 -1 266 614)"
            fill="url(#l)"
            d="M0 0h174v478H0z"
          />
        </g>
        <g filter="url(#m)">
          <path
            transform="matrix(1 0 0 -1 407 614)"
            fill="url(#n)"
            d="M0 0h175v530H0z"
          />
        </g>

        {/* CENTER */}
        <g filter="url(#q)">
          <path
            transform="matrix(1 0 0 -1 549 614)"
            fill="url(#r)"
            d="M0 0h173v584H0z"
          />
        </g>

        {/* RIGHT */}
        <g filter="url(#o)">
          <path
            transform="rotate(180 864 614)"
            fill="url(#p)"
            d="M864 614h175v530H864z"
          />
        </g>
        <g filter="url(#e)">
          <path
            transform="rotate(180 1005 614)"
            fill="url(#f)"
            d="M1005 614h174v478h-174z"
          />
        </g>
        <g filter="url(#c)">
          <path
            transform="rotate(180 1146 614)"
            fill="url(#d)"
            d="M1146 614h174v404h-174z"
          />
        </g>
        <g filter="url(#a)">
          <path
            transform="rotate(180 1287 614)"
            fill="url(#b)"
            d="M1287 614h174v323h-174z"
          />
        </g>

        {/* DEFINITIONS */}
        <defs>
          {/* gradients */}
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

          {/* lightweight blur filters */}
          <filter id="a" x="1083" y="261" width="234" height="383" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="c" x="942" y="180" width="234" height="464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="e" x="801" y="106" width="234" height="538" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="g" x="-46" y="261" width="234" height="383" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="i" x="95" y="180" width="234" height="464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="k" x="236" y="106" width="234" height="538" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="m" x="377" y="54" width="235" height="590" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="o" x="659" y="54" width="235" height="590" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="q" x="519" y="0" width="233" height="644" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
