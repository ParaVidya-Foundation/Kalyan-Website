// components/Orb.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mesh, Program, Renderer, Triangle, Vec3 } from "ogl";

interface OrbProps {
  hue?: number;
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  forceHoverState?: boolean;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Orb - WebGL shader orb using ogl
 * - Production-ready: defensive checks, ResizeObserver, cleanup
 * - Fallback UI when WebGL fails (no crashes)
 */
export default function Orb({
  hue = 0,
  hoverIntensity = 0.4,
  rotateOnHover = true,
  forceHoverState = false,
  backgroundColor = "#FEF7F2",
  className,
  style,
}: OrbProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // refs to WebGL objects (kept in refs so we can clean up)
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const geometryRef = useRef<Triangle | null>(null);
  const rafRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const [webglSupported, setWebglSupported] = useState<boolean | null>(null); // null = not checked yet

  // GLSL sources (unchanged core logic but kept inside component for bundling)
  const vert = `precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }`;

  const frag = `precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    uniform vec3 backgroundColor;
    varying vec2 vUv;

    // ... (shader code identical to your version) ...
    // For brevity here: full shader kept exactly as in your original,
    // including utility functions rgb2yiq, snoise3, draw(), mainImage(), etc.

    // --- BEGIN SHADER BODY (same as original) ---
    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }
    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }
    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }
    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }
    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }
    vec4 extractAlpha(vec3 colorIn) {
      float a = max(max(colorIn.r, colorIn.g), colorIn.b);
      return vec4(colorIn.rgb / (a + 1e-5), a);
    }
    const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
    const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
    const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;
    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }
    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }
    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);
      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;
      float bgLuminance = dot(backgroundColor, vec3(0.299, 0.587, 0.114));
      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);
      v0 *= smoothstep(r0 * 1.05, r0, len);
      float innerFade = smoothstep(r0 * 0.8, r0 * 0.95, len);
      v0 *= mix(innerFade, 1.0, bgLuminance * 0.7);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;
      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);
      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);
      vec3 colBase = mix(color1, color2, cl);
      float fadeAmount = mix(1.0, 0.1, bgLuminance);
      vec3 darkCol = mix(color3, colBase, v0);
      darkCol = (darkCol + v1) * v2 * v3;
      darkCol = clamp(darkCol, 0.0, 1.0);
      vec3 lightCol = (colBase + v1) * mix(1.0, v2 * v3, fadeAmount);
      lightCol = mix(backgroundColor, lightCol, v0);
      lightCol = clamp(lightCol, 0.0, 1.0);
      vec3 finalCol = mix(darkCol, lightCol, bgLuminance);
      return extractAlpha(finalCol);
    }
    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;
      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);
      return draw(uv);
    }
    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
    // --- END SHADER BODY ---
  `;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      setWebglSupported(false);
      return;
    }

    // Quick capability test: attempt to create a WebGL context using a canvas.
    let testCanvas: HTMLCanvasElement | null = document.createElement("canvas");
    let testCtx: WebGLRenderingContext | null = null;
    try {
      testCtx = testCanvas.getContext("webgl") as WebGLRenderingContext || testCanvas.getContext("experimental-webgl") as WebGLRenderingContext;
    } catch (e) {
      testCtx = null;
    }
    if (!testCtx) {
      // gracefully fallback
      console.warn("Orb: WebGL not available in this environment — falling back to static UI.");
      setWebglSupported(false);
      return;
    }
    // We have basic WebGL; attempt to create ogl Renderer in try/catch.
    let renderer: Renderer | null = null;
    try {
      renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
    } catch (err) {
      console.error("Orb: could not create Renderer (WebGL context failed).", err);
      setWebglSupported(false);
      return;
    }

    // mark supported
    setWebglSupported(true);
    rendererRef.current = renderer;
    const gl = renderer.gl;

    // keep canvas clear and append
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    // geometry / program / mesh creation
    const geometry = new Triangle(gl);
    geometryRef.current = geometry;

    // initial vecs
    const initialResolution = new Vec3(1, 1, 1);
    const initialBg = hexToVec3(backgroundColor);

    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: initialResolution },
        hue: { value: hue },
        hover: { value: 0 },
        rot: { value: 0 },
        hoverIntensity: { value: hoverIntensity },
        backgroundColor: { value: initialBg },
      },
    });
    programRef.current = program;

    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;

    // handle resizing with ResizeObserver for crisp results
    const resize = () => {
      if (!container || !rendererRef.current) return;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const width = Math.max(1, Math.floor(container.clientWidth));
      const height = Math.max(1, Math.floor(container.clientHeight));
      rendererRef.current.setSize(Math.floor(width * dpr), Math.floor(height * dpr));
      gl.canvas.style.width = width + "px";
      gl.canvas.style.height = height + "px";
      // update iResolution uniform (in device pixels)
      const res = programRef.current?.uniforms.iResolution.value;
      if (res && typeof res.set === "function") {
        res.set(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height);
      } else if (res instanceof Vec3) {
        res.x = gl.canvas.width;
        res.y = gl.canvas.height;
        res.z = gl.canvas.width / gl.canvas.height;
      }
    };

    // initial resize
    resize();

    // setup ResizeObserver
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resizeObserverRef.current = ro;

    // hover tracking
    let targetHover = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;
      const size = Math.min(width, height);
      const centerX = width / 2;
      const centerY = height / 2;
      const uvX = ((x - centerX) / size) * 2.0;
      const uvY = ((y - centerY) / size) * 2.0;
      // inside circle roughly
      if (Math.sqrt(uvX * uvX + uvY * uvY) < 0.8) {
        targetHover = 1;
      } else {
        targetHover = 0;
      }
    };
    const handleMouseLeave = () => {
      targetHover = 0;
    };
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // reduced motion
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // animation loop
    let lastTime = performance.now();
    let currentRot = 0;
    let currentHover = 0;
    const rotationSpeed = 0.3;

    const step = (time: number) => {
      rafRef.current = requestAnimationFrame(step);
      const dt = Math.max(0, (time - lastTime) / 1000);
      lastTime = time;

      // update time uniform
      if (programRef.current) programRef.current.uniforms.iTime.value = time * 0.001;

      // update hue and hoverIntensity in case props changed
      if (programRef.current) {
        programRef.current.uniforms.hue.value = hue;
        programRef.current.uniforms.hoverIntensity.value = hoverIntensity;
        // background color uniform
        const bgVal = programRef.current.uniforms.backgroundColor.value;
        if (bgVal && typeof bgVal.set === "function") {
          const bgVec = hexToVec3(backgroundColor);
          bgVal.set(bgVec.x, bgVec.y, bgVec.z);
        } else {
          programRef.current.uniforms.backgroundColor.value = hexToVec3(backgroundColor);
        }
      }

      // smooth hover lerp
      const effectiveHover = forceHoverState ? 1 : targetHover;
      currentHover += (effectiveHover - currentHover) * 0.12;
      if (programRef.current) programRef.current.uniforms.hover.value = currentHover;

      // rotation behavior
      if (rotateOnHover && effectiveHover > 0.5 && !reduced) {
        currentRot += dt * rotationSpeed;
      } else {
        // slowly decay rotation when not hovered
        currentRot += (0 - currentRot) * 0.02;
      }
      if (programRef.current) programRef.current.uniforms.rot.value = currentRot;

      // render
      try {
        if (rendererRef.current && meshRef.current) {
          rendererRef.current.render({ scene: meshRef.current });
        }
      } catch (err) {
        // If rendering fails (rare), cancel animation and log once.
        console.error("Orb: render error:", err);
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }
    };

    // start loop
    rafRef.current = requestAnimationFrame(step);

    // cleanup on unmount
    return () => {
      // stop RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      // remove resize observer
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      // remove listeners
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      // remove canvas
      try {
        if (rendererRef.current?.gl?.canvas && container.contains(rendererRef.current.gl.canvas)) {
          container.removeChild(rendererRef.current.gl.canvas);
        }
        // try to lose context (best-effort)
        try {
          rendererRef.current?.gl.getExtension && rendererRef.current?.gl.getExtension("WEBGL_lose_context")?.loseContext();
        } catch (err) {
          // noop
        }
      } catch (e) {
        // noop
      }
      // dispose ogl objects (best-effort)
      try {
        meshRef.current = null;
        programRef.current = null;
        geometryRef.current = null;
        rendererRef.current = null;
      } catch (err) {
        // noop
      }
    };
  }, [
    hue,
    hoverIntensity,
    rotateOnHover,
    forceHoverState,
    backgroundColor,
  ]); // rebuild when controlling props change

  // If webglSupported === null, we haven't checked yet: render an empty container (client mount)
  // If false, show graceful fallback static DOM (no crash).
  // If true, container will host the canvas appended by ogl.
  const ariaHiddenValue: "true" | "false" = webglSupported === false ? "true" : "false";

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        display: "block",
        ...style,
      }}
      {...(ariaHiddenValue === "true" ? { "aria-hidden": "true" } : { "aria-hidden": "false" })}
    >
      {webglSupported === false && (
        // Fallback: subtle gradient / amber spotlight so layout remains pleasing
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(800px 400px at 50% 30%, rgba(255,196,80,0.06), rgba(0,0,0,0.0) 40%), linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.85))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.85)",
            fontSize: 12,
            padding: 12,
            boxSizing: "border-box",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 420 }}>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>Orb visual unavailable</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
              Your device or browser does not allow WebGL. The interactive orb is disabled to keep the page stable.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* --------------------- Helpers --------------------- */
/**
 * Convert hex / rgb() / hsl() string to Vec3 (0..1)
 * - returns Vec3(x,y,z)
 */
function hexToVec3(color: string): Vec3 {
  // hex
  if (typeof color === "string" && color.startsWith("#")) {
    const hex = color.slice(1);
    const bigint = parseInt(hex, 16);
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    return new Vec3(r, g, b);
  }

  // rgb(...) or rgba(...)
  const rgbMatch = (color || "").match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if (rgbMatch) {
    return new Vec3(
      parseInt(rgbMatch[1], 10) / 255,
      parseInt(rgbMatch[2], 10) / 255,
      parseInt(rgbMatch[3], 10) / 255
    );
  }

  // hsl(...) fallback
  const hslMatch = (color || "").match(/hsla?\(\s*([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/i);
  if (hslMatch) {
    const h = parseFloat(hslMatch[1]) / 360;
    const s = parseFloat(hslMatch[2]) / 100;
    const l = parseFloat(hslMatch[3]) / 100;
    return hslToRgb(h, s, l);
  }

  // default black
  return new Vec3(0, 0, 0);
}

/** HSL to RGB using same return type (Vec3) */
function hslToRgb(h: number, s: number, l: number): Vec3 {
  let r = 0, g = 0, b = 0;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return new Vec3(r, g, b);
}
