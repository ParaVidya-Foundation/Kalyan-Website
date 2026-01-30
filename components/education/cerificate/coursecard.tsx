// components/CourseCard.tsx
"use client";

import React from "react";
import Image from "next/image";

/**
 * Minimal, professional course contract
 * (intentionally lean — academic & trust-first)
 */
export type Course = {
  id: string;
  title: string;
  img: string; // 1280x960 recommended
  category: string;
  excerpt?: string;
  badge?: string;
};

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <article
      aria-label={course.title}
      className="group w-[320px] md:w-[360px] shrink-0 snap-start focus:outline-none"
      tabIndex={0}
    >
      <div
        className="
          relative
          h-full
          rounded-3xl
          bg-white/80
          backdrop-blur-xl
          border border-slate-200/70
          overflow-hidden
          shadow-[0_12px_40px_rgba(15,23,42,0.06)]
          transition-transform transition-shadow duration-300
          will-change-transform
          group-hover:-translate-y-1
          group-hover:shadow-[0_30px_90px_rgba(15,23,42,0.10)]
          focus-visible:-translate-y-1
        "
      >
        {/* IMAGE — 4:3 (1280x960) */}
        <div className="relative w-full aspect-[4/3] bg-slate-100">
          <Image
            src={course.img}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 320px, 360px"
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-[1.03]
            "
            priority={false}
          />

          {/* Soft glass overlay */}
          <div
            aria-hidden
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/10 via-transparent to-transparent
            "
          />

          {/* Badge (optional, subtle) */}
          {course.badge && (
            <div className="absolute top-4 left-4">
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  bg-white/90
                  backdrop-blur
                  px-3 py-1
                  text-xs font-semibold text-slate-900
                  shadow-sm
                "
              >
                {course.badge}
              </span>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3
            className="
              text-lg md:text-xl
              font-semibold
              tracking-tight
              text-slate-900
              leading-snug
            "
          >
            {course.title}
          </h3>

          {course.excerpt && (
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {course.excerpt}
            </p>
          )}

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#"
              aria-label={`View course: ${course.title}`}
              className="
                inline-flex items-center justify-center
                rounded-full
                px-5 py-2.5
                text-sm font-medium
                text-slate-900
                border border-slate-300
                bg-white/70
                backdrop-blur
                transition-all duration-300
                hover:bg-slate-900 hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-slate-900
              "
            >
              View course →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
