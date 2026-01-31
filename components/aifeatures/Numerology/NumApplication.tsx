"use client";

import React from "react";
import {
  Sparkles,
  Calculator,
  Bot,
  User,
  Heart,
  Briefcase,
  Phone,
  Car,
  Calendar,
  Palette,
  Activity,
  Baby,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [

  {
    title: "Name Correction",
    description:
      "Align your personal or professional name with numerological harmony for growth, success, and balance.",
    cta: "Explore Name Correction →",
    icon: <User />,
  },
  {
    title: "Mobile Numerology",
    description:
      "Find mobile numbers that resonate with your personal energy and enhance communication and stability.",
    cta: "Check Mobile Numbers →",
    icon: <Phone />,
  },
  {
    title: "AI Numerology Chatbot",
    description:
      "Get instant numerology answers 24/7 through our intelligent AI assistant trained on classical principles.",
    cta: "Try AI Chatbot →",
    icon: <Bot />,
  },
  {
    title: "Relationship Compatibility",
    description:
      "Analyze emotional, mental, and destiny alignment between partners using birth and name numbers.",
    cta: "Check Compatibility →",
    icon: <Heart />,
  },

  {
    title: "Vehicle Number Numerology",
    description:
      "Select vehicle numbers that support safety, smooth journeys, and positive movement in life.",
    cta: "Check Vehicle Numbers →",
    icon: <Car />,
  },
  {
    title: "Personal Year Forecast",
    description:
      "Know what each year brings — growth, challenges, or rest — using your personal year cycle.",
    cta: "View Year Forecast →",
    icon: <Calendar />,
  },
  {
    title: "Lucky Numbers & Colors",
    description:
      "Discover numbers, dates, and colors that naturally support your success and well-being.",
    cta: "Find Lucky Elements →",
    icon: <Palette />,
  },

  {
    title: "Child Name Numerology",
    description:
      "Create balanced and meaningful names for children aligned with destiny and planetary harmony.",
    cta: "Explore Child Names →",
    icon: <Baby />,
  },
  {
    title: "Expert Consultation",
    description:
      "Combine AI precision with human expertise for deeper, personalized numerology guidance.",
    cta: "Talk to an Expert →",
    icon: <Calculator />,
  },
];

export default function NumApplication() {
  return (
    <section className="w-full bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Our Premium Numerology Services
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
            Trusted numerology solutions combining ancient wisdom with
            modern AI — designed for clarity, balance, and growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="
                group
                rounded-3xl
                bg-white
                border border-slate-100
                p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_30px_90px_rgba(0,0,0,0.10)]
              "
            >
              {/* Icon */}
              <div className="
                mb-6
                inline-flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-slate-50
                text-slate-800
                transition-transform duration-300
                group-hover:scale-105
              ">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-6">
                <span className="
                  text-sm font-medium text-slate-900
                  inline-flex items-center gap-1
                  transition-all
                  group-hover:gap-2
                ">
                  {service.cta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
