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
      title: "Financial Prosperity",
      description:
        "Attract wealth and abundance through proper placement of financial zones.",
      icon: Wallet,
    },
    {
      title: "Better Health",
      description:
        "Improve physical and mental well-being with balanced energy flow.",
      icon: Heart,
    },
    {
      title: "Harmonious Relationships",
      description:
        "Strengthen family bonds and romantic relationships through spatial balance.",
      icon: HandHeart,
    },
    {
      title: "Career Success",
      description:
        "Enhance focus, productivity, and professional growth naturally.",
      icon: TrendingUp,
    },
    {
      title: "Mental Peace",
      description:
        "Reduce stress and anxiety through spatial harmony and alignment.",
      icon: Brain,
    },
    {
      title: "Positive Energy",
      description:
        "Eliminate negative energies and invite long-lasting positivity.",
      icon: Smile,
    },
  ];
  
export default function WhyVastu(): React.ReactElement {
  return (
        <section className="mx-auto max-w-7xl px-6 py-20">
          {/* Header */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2b1b0f]">
              Why Vastu Shastra?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#6b5b4a] leading-relaxed">
              Transform your life through the power of balanced, harmonious spaces
              aligned with nature’s fundamental principles.
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