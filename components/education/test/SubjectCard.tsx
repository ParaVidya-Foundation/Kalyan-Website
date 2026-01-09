"use client";

import * as React from "react";
import { Sun, Home, BookOpen, Hash, Hand, Shuffle } from "lucide-react";
import { HoverEffect } from "@/components/UIComponents/card-hover-effect";

type CardKey =
  | "vedic"
  | "vastu"
  | "lal-kitab"
  | "numerology"
  | "palmistry"
  | "tarot";

type Card = {
  key: CardKey;
  title: string;
  desc: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type SubjectCardProps = {
  onSelect?: (key: CardKey) => void;
};

const CARDS: Card[] = [
  {
    key: "vedic",
    title: "Vedic Astrology",
    desc:
      "Timeless natal charts, yogas and planetary remedies rooted in Parāśara tradition.",
    href: "/login",
    Icon: Sun,
  },
  {
    key: "vastu",
    title: "Vastu",
    desc:
      "Space alignment & practical guidelines to harmonize energy in home and workspaces.",
    href: "/login",
    Icon: Home,
  },
  {
    key: "lal-kitab",
    title: "Lal Kitab",
    desc:
      "Practical remedies and house-based solutions from Lal Kitab's unique system.",
    href: "/login",
    Icon: BookOpen,
  },
  {
    key: "numerology",
    title: "Numerology",
    desc:
      "Name & number analysis to uncover personal cycles and life path signals.",
    href: "/login",
    Icon: Hash,
  },
  {
    key: "palmistry",
    title: "Palmistry",
    desc:
      "Hand reading that reveals strengths, timing, and character through lines & mounts.",
    href: "/login",
    Icon: Hand,
  },
  {
    key: "tarot",
    title: "Tarot",
    desc:
      "Insightful card spreads for clarity on decisions, timing and inner guidance.",
    href: "/login",
    Icon: Shuffle,
  },
];

export default function SubjectCard() {
  const items = CARDS.map((c) => ({
    title: c.title,
    description: c.desc,
    href: c.href,
    Icon: c.Icon,
  }));

  return (
    <section aria-label="Knowledge categories" className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <HoverEffect items={items} />
      </div>
    </section>
  );
}
