"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Iridescence from "@/components/UIComponents/Iridescence";

/* ---------------- DATA ---------------- */
const services = [
  {
    title: "Single Question Answer",
    subtitle: "Direct answer from Astrologer",
    price: "₹15,000",
    image: "/noise.webp",
  },
  {
    title: "Gemstone Recommendation",
    subtitle: "According to your Kundali",
    price: "₹15,000",
    image: "/noise.webp",
  },
  {
    title: "Money & Wealth Analysis",
    subtitle: "Personalised financial insights",
    price: "₹31,000",
    image: "/noise.webp",
  },
  {
    title: "Kundli Matching",
    subtitle: "Software generated Milan Chart",
    price: "₹5,100",
    image: "/noise.webp",
  },
  {
    title: "Full Kundli Analysis",
    subtitle: "Without call",
    price: "₹51,000",
    image: "/noise.webp",
  },
  {
    title: "Full Kundli Analysis",
    subtitle: "With video call",
    price: "₹2,44,000",
    image: "/noise.webp",
  },
];

/* ---------------- Countdown Hook ---------------- */
function useCountdown(targetMs: number) {
  const calc = () => Math.max(0, targetMs - Date.now());
  const [remaining, setRemaining] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setRemaining(calc()), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remaining / (1000 * 60)) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

/* ---------------- COMPONENT ---------------- */
export default function KundliServices() {
  const countdown = useCountdown(
    Date.now() + 14 * 24 * 60 * 60 * 1000
  );

  return (
    <section
      aria-label="Kundli services"
      className="relative mx-auto w-[90%] rounded-3xl overflow-hidden shadow-lg"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Iridescence
          color={[1, 0.96, 0.7]}
          mouseReact={false}
          amplitude={0.18}
          speed={0.45}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff9ea]/90 via-[#fff9ea]/85 to-[#fff9ea]/95" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_2fr] gap-12 items-start">

          {/* LEFT PANEL */}
          <div className="flex flex-col gap-6">
            <span className="text-xs tracking-[0.2em] uppercase text-[#6a3b3b] font-semibold">
              By Astrologer Sunil Vashist
            </span>

            <h1
              className="text-4xl md:text-5xl leading-tight text-[#2b1c1c]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              India’s most
              <br />
              accurate Kundli
            </h1>

            <p className="text-[#4a4242] text-base max-w-md">
              450+ pages of expertly generated Vedic analysis — precise,
              practical, and deeply personalised.
            </p>

            {/* CTA */}
            <div className="flex gap-3">
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="rounded-full bg-indigo-600 text-white px-6 py-2.5 text-sm font-medium shadow"
                >
                  Get Kundli Now
                </motion.button>
              </Link>

              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="rounded-full border border-indigo-600 text-indigo-600 px-5 py-2.5 text-sm font-medium"
                >
                  Get Analysis
                </motion.button>
              </Link>
            </div>

            {/* TIMER */}
            <div className="mt-6">
              <p className="text-xs text-[#6b6060] mb-3">Offer ends in</p>
              <div className="flex gap-3">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hours", value: countdown.hours },
                  { label: "Minutes", value: countdown.minutes },
                  { label: "Seconds", value: countdown.seconds },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="w-[70px] rounded-xl bg-white shadow-sm py-3 text-center"
                  >
                    <div className="text-indigo-600 font-semibold text-lg">
                      {String(t.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] text-[#7a6f6f] uppercase tracking-wide">
                      {t.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT GRID – 3 CARDS PER ROW */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, idx) => (
              <Link key={idx} href="/login">
                <motion.div
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="rounded-xl bg-white shadow-sm hover:shadow-md overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-square w-full bg-[#f6f3ee]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-[#2b1c1c]">
                      {svc.title}
                    </h3>

                    <p className="mt-1 text-xs text-[#6b5f5f] line-clamp-2">
                      {svc.subtitle}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#2b1c1c]">
                        {svc.price}
                      </span>
                      <span className="text-xs font-medium text-indigo-600">
                        View →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
