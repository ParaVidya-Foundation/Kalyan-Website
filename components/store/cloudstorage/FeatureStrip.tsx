"use client";

import {
  Cloud,
  Globe,
  ArrowUpRight,
  MousePointer2,
} from "lucide-react";

const FEATURES = [
  {
    icon: Cloud,
    title: "Secure Kundli Cloud",
    desc: "Store and manage all your Kundli records safely in one centralized cloud space.",
  },
  {
    icon: Globe,
    title: "Access Anywhere",
    desc: "View your Kundli from any device, anytime — globally available and always synced.",
  },
  {
    icon: ArrowUpRight,
    title: "Scalable Records",
    desc: "Unlimited Kundli storage designed to grow with your family and consultations.",
  },
  {
    icon: MousePointer2,
    title: "Simple & Intuitive",
    desc: "A clean, distraction-free experience built for clarity and ease of use.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto
         
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-10 py-14 text-center">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="
                group
                flex flex-col items-center
                transition-transform duration-300
                hover:-translate-y-[3px]
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-5
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  bg-slate-900/5
                  text-slate-800
                  transition-all duration-300
                  group-hover:bg-slate-900/10
                "
              >
                <item.icon className="h-5 w-5" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
