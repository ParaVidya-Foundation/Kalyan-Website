"use client";

import dynamic from "next/dynamic";
import { ShopByChoice } from "./small/shopbychoice";
import SpiritualHero from "./small/SpiritualHero";

const Iridescence = dynamic(
  () => import("@/components/UIComponents/Iridescence"),
  { ssr: false }
);

export default function Shop() {
  return (
    <section className="shop-root">
      {/* Base pastel iridescent gradient */}
      <div className="bg-iridescent" />

      {/* Animated iridescence layer */}
      <div className="bg-iridescence">
        <Iridescence
          color={[1, 0.95, 0.9]}
          mouseReact={false}
          amplitude={0.12}
          speed={0.18}
        />
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Content */}
      <div className="shop-content">
        <SpiritualHero />
        <ShopByChoice />
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        /* ROOT */
        .shop-root {
          position: relative;
          width: 82%;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 2rem;
        }

        /* CONTENT LAYER */
        .shop-content {
          position: relative;
          z-index: 10;
        }

        /* ================= IRIDESCENT BASE ================= */

        .bg-iridescent {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(
              1200px 800px at 15% 20%,
              rgba(255, 210, 190, 0.65),
              transparent 60%
            ),
            radial-gradient(
              1000px 700px at 85% 25%,
              rgba(220, 210, 255, 0.55),
              transparent 60%
            ),
            radial-gradient(
              900px 600px at 50% 85%,
              rgba(200, 240, 255, 0.55),
              transparent 65%
            ),
            linear-gradient(
              135deg,
              #fff7f2 0%,
              #fff1e8 25%,
              #f7f3ff 55%,
              #f2faff 75%,
              #ffffff 100%
            );
       
        }

        /* ================= IRIDESCENCE MOTION ================= */

        .bg-iridescence {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        /* ================= GRAIN ================= */

        .grain-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0.1;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='1' seed='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 640px 640px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1024px) {
          .shop-root {
            width: 92%;
            border-radius: 2rem;
          }
        }

        @media (max-width: 640px) {
          .shop-root {
            width: 100%;
            border-radius: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
