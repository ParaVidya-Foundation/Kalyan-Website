"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/UIComponents/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 z-50 mx-auto max-w-6xl px-4",
        className
      )}
    >

<Link href="/">
        <div className="flex items-center gap-2 px-4">
          <Image
            src="/Logo/Logo.svg"
            alt="Kalyan Logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="font-mono text-sm uppercase tracking-widest text-black">
            Kalyan
          </span>
        </div>
</Link>


      <Menu setActive={setActive}>
        {/* LEFT */}
        <MenuItem setActive={setActive} active={active} item="Research">
          <div className="flex flex-col space-y-3 text-sm font-mono">
            <HoveredLink href="/research/research-papers">Research Papers</HoveredLink>
            <HoveredLink href="/research/blogs">Astrology Blogs</HoveredLink>
            <HoveredLink href="/research/aiblogs">AI Blogs</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-3 text-sm font-mono">
            <HoveredLink href="services/match-making">Match Making</HoveredLink>
            <HoveredLink href="services/perfume">Perfume</HoveredLink>
            <HoveredLink href="services/poster">Poster</HoveredLink>
            <HoveredLink href="services/gems">Gems</HoveredLink>
            <HoveredLink href="services/accessories">Accessories</HoveredLink>
          </div>
        </MenuItem>


        {/* RIGHT */}
        <MenuItem setActive={setActive} active={active} item="AI Features">
          <div className="grid grid-cols-2 gap-6 p-4 text-sm">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production-ready Tailwind components."
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="From idea to blog in minutes."
            />
            <ProductItem
              title="Vastu AI"
              href="/ai/vastu"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Spatial intelligence for vastu analysis."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Education">
          <div className="flex flex-col space-y-3 text-sm font-mono">
            <HoveredLink href="education/certification">Certification</HoveredLink>
            <HoveredLink href="education/test">Test</HoveredLink>
            <HoveredLink href="education/Books">Books</HoveredLink>
          </div>
        </MenuItem>

        {/* CTA */}
        <a
          href="/login"
          className="
            ml-4 inline-flex items-center justify-center
            rounded-full px-6 py-2
            font-mono text-sm uppercase tracking-wider
            text-black
            bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400
            bg-[length:200%_200%]
            animate-gradient
            shadow-[0_0_25px_rgba(192,132,252,0.6)]
            transition hover:shadow-[0_0_35px_rgba(192,132,252,0.9)]
          "
        >
          Get Started
        </a>
      </Menu>
    </div>
  );
}
