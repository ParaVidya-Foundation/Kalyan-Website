"use client";
import React from "react";
import {
    Heart,
    HandHeart,
    Smile,
    TrendingUp,
    Wallet,
    Brain,
  } from "lucide-react";
  
  const FEATURES = [
    {
      title: "Financial Outlook",
      description:
        "Understand income flow, financial stability, wealth phases, and periods of growth or caution. Identify when to invest, consolidate, or wait — based on planetary timing.",
      icon: Wallet,
    },
    {
      title: "Health & Vitality",
      description:
        "Predict physical resilience, stress phases, recovery periods, and long-term health patterns. Helps you act early, not react late.",
      icon: Heart,
    },
    {
      title: "Relationships & Marriage",
      description:
        "Clarity on emotional compatibility, relationship cycles, marriage timing, and interpersonal challenges — explained with maturity, not fear.",
      icon: HandHeart,
    },
    {
      title: "Career & Purpose",
      description:
        "See how your profession evolves over time. Identify peak growth phases, career shifts, leadership periods, and moments requiring strategic patience.",
      icon: TrendingUp,
    },
    {
      title: "Mind & Decision Cycles",
      description:
        "Track mental pressure, clarity phases, confusion cycles, and confidence peaks. Understand why certain periods feel heavy — and when clarity returns.",
      icon: Brain,
    },
    {
      title: "Overall Life Direction",
      description:
        "A high-level view of your life’s rhythm — supportive phases, testing periods, and long-term trajectory — helping you align effort with timing.",
      icon: Smile,
    },
  ];
  
  
export default function PredictionFeat(): React.ReactElement {
  return (
        <section className="mx-auto max-w-7xl px-6 py-20">
          {/* Header */}
          <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2b1b0f]">
  Life Predictions, Clearly Explained
</h2>

<p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#6b5b4a] leading-relaxed">
  A unified prediction system that interprets your life across health,
  relationships, career, finances, and mental well-being — grounded in
  astrology, timing, and cause–effect clarity.
</p>

          </div>
    
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-3xl border border-[#eadfd4] bg-[#f9f5f1] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Soft glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      boxShadow: "inset 0 0 80px rgba(139,90,43,0.08)",
                    }}
                  />
    
                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-[#8b5a2b]" strokeWidth={1.8} />
                  </div>
    
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#2b1b0f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b5b4a]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
    );
}