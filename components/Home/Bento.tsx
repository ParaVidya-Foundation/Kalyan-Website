"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function Bento() {
  return (
    <section className="relative mx-auto w-full min-h-[90vh] py-16 bg-black">
      <div className="w-[85vw] mx-auto">
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_60%)]
          animate-pulseSlow
        "
      />

      <BentoGrid className="relative z-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      </div>
      {/* subtle animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.7; }
        }
        .animate-pulseSlow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `
      }} />
    </section>
  );
}

/* ===========================
   SKELETON (DARK)
=========================== */

const Skeleton = () => (
  <div
    className="
      flex flex-1 w-full h-full min-h-[8rem]
      rounded-xl
      bg-gradient-to-br
      from-neutral-900 via-neutral-800 to-neutral-900
      shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]
    "
  />
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
];
