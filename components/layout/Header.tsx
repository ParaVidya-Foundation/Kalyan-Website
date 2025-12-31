"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Menu,
  MenuItem,
  ProductItem,
  HoveredLink,
} from "@/components/UIComponents/navbar-menu";

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* FIXED HEADER */}
      <header
  className={`
    fixed inset-x-0 top-0 z-50
    transition-all duration-300
  `}
>
  <div className="mx-auto max-w-7xl px-4 py-3">
    <div
      className={`
        flex items-center justify-between
        rounded-2xl px-6 py-3
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            : "bg-transparent"
        }
      `}
    >

            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Logo/Logo.svg"
                alt="Kalyan Logo"
                width={32}
                height={32}
                priority
              />
              <span className="font-mono text-sm uppercase tracking-widest">
                Kalyan
              </span>
            </Link>

            {/* NAV */}
            <Menu setActive={setActive}>
              <Nav label="Research" active={active} setActive={setActive}>
                <div className="flex flex-col space-y-3">
                  <HoveredLink href="/research/research-papers">Research Papers</HoveredLink>
                  <HoveredLink href="/research/blogs">Astrology Blogs</HoveredLink>
                  <HoveredLink href="/research/aiblogs">AI Blogs</HoveredLink>
                </div>
              </Nav>

              <Nav label="Services" active={active} setActive={setActive}>
                <div className="flex flex-col space-y-3">
                  <HoveredLink href="/services/match-making">Match Making</HoveredLink>
                  <HoveredLink href="/services/perfume">Perfume</HoveredLink>
                  <HoveredLink href="/services/poster">Poster</HoveredLink>
                  <HoveredLink href="/services/gems">Gems</HoveredLink>
                  <HoveredLink href="/services/accessories">Accessories</HoveredLink>
                </div>
              </Nav>

              <Nav label="AI Features" active={active} setActive={setActive}>
                <div className="grid grid-cols-2 gap-6">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews."
                  />
                  <ProductItem
                    title="Vastu AI"
                    href="/ai/vastu"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="Spatial intelligence for vastu."
                  />
                </div>
              </Nav>

              <Nav label="Education" active={active} setActive={setActive}>
                <div className="flex flex-col space-y-3">
                  <HoveredLink href="/education/certification">Certification</HoveredLink>
                  <HoveredLink href="/education/test">Test</HoveredLink>
                  <HoveredLink href="/education/books">Books</HoveredLink>
                </div>
              </Nav>
            </Menu>

            {/* CTA */}
            <Link
              href="/login"
              className="rounded-full bg-orange-500 px-6 py-2 text-sm font-medium text-white hover:bg-orange-600 transition"
            >
              Book a call
            </Link>
          </div>
        </div>
      </header>

    </>
  );
}

/* ================= NAV LABEL ================= */

function Nav({
  label,
  active,
  setActive,
  children,
}: {
  label: string;
  active: string | null;
  setActive: (v: string | null) => void;
  children: React.ReactNode;
}) {
  const open = active === label;

  return (
    <MenuItem item={label} active={active} setActive={() => setActive(label)}>
      <div className="flex items-center gap-1 mb-2">
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`transition ${open ? "rotate-180 text-orange-500" : ""}`}
        />
      </div>
      {children}
    </MenuItem>
  );
}
