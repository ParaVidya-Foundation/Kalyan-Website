"use client";

import Image from "next/image";

export function ShopCard({
  title,
  img,
  index,
}: {
  title: string;
  img: string;
  index: number;
}) {
  const positions = [
    { top: "14%", left: "8%", duration: "22s", delay: "0s" },
    { top: "62%", left: "14%", duration: "26s", delay: "-4s" },
    { top: "16%", right: "10%", duration: "24s", delay: "-8s" },
    { top: "66%", right: "12%", duration: "28s", delay: "-6s" },
    { top: "40%", left: "3%", duration: "30s", delay: "-10s" },
    { top: "40%", right: "3%", duration: "27s", delay: "-12s" },
  ];

  const pos = positions[index % positions.length];

  return (
    <div
      className="shop-card"
      style={{
        ...pos,
        animationDuration: pos.duration,
        animationDelay: pos.delay,
      }}
    >
      <div className="shop-card-inner">
        {/* IMAGE */}
        <div className="shop-card-image">
          <Image
            src={img}
            alt={title}
            fill
            sizes="220px"
            className="object-contain"
          />
        </div>

        {/* TITLE */}
        <div className="shop-card-title">{title}</div>
      </div>

      <style jsx>{`
        /* ===== FLOAT CONTAINER ===== */
        .shop-card {
          position: absolute;
          width: 220px;
          animation: floatPremium linear infinite;
          will-change: transform;
        }

        /* ===== GLASS CARD ===== */
        .shop-card-inner {
          position: relative;
          padding: 14px;
          border-radius: 26px;

          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.75),
            rgba(255, 255, 255, 0.55)
          );

          backdrop-filter: blur(18px) saturate(130%);
          -webkit-backdrop-filter: blur(18px) saturate(130%);

          border: 1px solid rgba(255, 255, 255, 0.55);

          box-shadow:
            0 10px 20px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);

          transition:
            transform 420ms cubic-bezier(0.19, 1, 0.22, 1),
            box-shadow 420ms cubic-bezier(0.19, 1, 0.22, 1);
        }

        .shop-card-inner:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow:
            0 45px 110px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        /* ===== IMAGE ===== */
        .shop-card-image {
          position: relative;
          height: 160px;
          border-radius: 18px;

          overflow: hidden;
    
        }

        .shop-card-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 30% 20%,
            rgba(255, 255, 255, 0.55),
            transparent 60%
          );
          pointer-events: none;
        }

        /* ===== TITLE ===== */
        .shop-card-title {
          margin-top: 14px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 500;
          color: #3a334e;
          letter-spacing: 0.2px;
        }

        /* ===== FLOATING MOTION ===== */
        @keyframes floatPremium {
          0% {
            transform: translate3d(0, 0, 0);
          }
          25% {
            transform: translate3d(6px, -10px, 0);
          }
          50% {
            transform: translate3d(0, -18px, 0);
          }
          75% {
            transform: translate3d(-6px, -10px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
