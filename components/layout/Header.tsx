// components/Header.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, NavItem } from "@/components/UIComponents/navbar-menu";

// cspell:ignore aiblogs Vastu vastu

export default function Header(): React.ReactElement {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Scroll behavior with throttling for performance
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      const target = e.target as Node;
      if (!headerRef.current.contains(target)) {
        setActive(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onDocClick);
    return () => document.removeEventListener("pointerdown", onDocClick);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = useCallback(() => {
    setActive(null);
    setMobileOpen(false);
  }, []);

  const setActiveMemo = useCallback((v: string | null) => setActive(v), []);

  // Memoized handlers for mobile menu toggle to prevent re-renders
  const handleMobileOpen = useCallback(() => setMobileOpen(true), []);
  const handleMobileClose = useCallback(() => setMobileOpen(false), []);

  // Memoized data for better performance
  const researchLinks = useMemo(
    () => [
      { href: "/research/research-papers", label: "Research Papers" },
      { href: "/research/blogs", label: "Astrology Blogs" },
      { href: "/research/aiblogs", label: "AI Blogs" },
    ],
    []
  );

  const services = useMemo(
    () => [
      { href: "/services/match-making", label: "Match Making" },
      { href: "/services/perfume", label: "Perfume" },
      { href: "/services/poster", label: "Poster" },
      { href: "/services/gems", label: "Gems" },
      { href: "/services/accessories", label: "Accessories" },
      { href: "/services/consultation", label: "Consultation" },
    ],
    []
  );

  const educationLinks = useMemo(
    () => [
      { href: "/education/certification", label: "Certification" },
      { href: "/education/test", label: "Test" },
      { href: "/education/Books", label: "Books" },
    ],
    []
  );

  const mobileToggleButton = mobileOpen ? (
    <button
      onClick={handleMobileClose}
      className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors duration-200"
      aria-label="Toggle menu"
      aria-expanded="true"
      type="button"
    >
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        className="transition-transform duration-300 rotate-90"
      >
        <rect
          y="0"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          className="transition-all duration-300 transform opacity-0 translate-y-[6px]"
        />
        <rect
          y="6"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          className="transition-all duration-300"
        />
        <rect
          y="12"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          className="transition-all duration-300 transform opacity-0 -translate-y-[6px]"
        />
      </svg>
    </button>
  ) : (
    <button
      onClick={handleMobileOpen}
      className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors duration-200"
      aria-label="Toggle menu"
      aria-expanded="false"
      type="button"
    >
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        className="transition-transform duration-300"
      >
        <rect
          y="0"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          className="transition-all duration-300 transform"
        />
        <rect
          y="6"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          className="transition-all duration-300"
        />
        <rect
          y="12"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          className="transition-all duration-300 transform"
        />
      </svg>
    </button>
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-6 py-4 my-3"
                : "bg-transparent px-6 py-6 my-0"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 z-20 group"
              onClick={closeAll}
              aria-label="Kalyan home"
            >
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Logo/Logo.svg"
                  alt="Kalyan logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-semibold text-base tracking-tight text-neutral-900">
                Kalyan
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <Menu active={active} setActive={setActiveMemo}>
                {/* Research */}
                <NavItem label="Research" active={active} setActive={setActiveMemo}>
                  <div className="grid grid-cols-[1fr_auto] gap-10 min-w-[680px]">
                    <div className="space-y-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                        Knowledge Base
                      </p>
                      <div className="space-y-3">
                        {researchLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeAll}
                            className="block text-[15px] leading-relaxed text-neutral-700 hover:text-orange-600 transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden w-[280px] h-[180px] relative">
                      <Image
                        src="/images/research.jpg"
                        alt="Research insights"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </NavItem>

                {/* Services */}
                <NavItem label="Services" active={active} setActive={setActiveMemo}>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-4 min-w-[720px]">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeAll}
                        className="text-[15px] leading-relaxed text-neutral-700 hover:text-orange-600 transition-colors duration-200 py-2"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </NavItem>

                {/* AI Features */}
                <NavItem label="AI Features" active={active} setActive={setActiveMemo}>
                  <div className="grid grid-cols-2 gap-6 min-w-[620px]">
                    <FeatureCard
                      title="Vastu AI"
                      desc="Spatial intelligence & energy mapping"
                      img="/images/vastu.png"
                      href="/ai/vastu"
                      onClick={closeAll}
                    />
                    <FeatureCard
                      title="Palmistry AI"
                      desc="Deep AI-powered palm insights"
                      img="/images/palm.png"
                      href="/ai/palmistry"
                      onClick={closeAll}
                    />
                  </div>
                </NavItem>

                {/* Education */}
                <NavItem label="Education" active={active} setActive={setActiveMemo}>
                  <div className="space-y-3 min-w-[280px]">
                    {educationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeAll}
                        className="block text-[15px] leading-relaxed text-neutral-700 hover:text-orange-600 transition-colors duration-200 py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </NavItem>
              </Menu>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4 z-20">
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-[14px] font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
                onClick={closeAll}
              >
                Get Started
              </Link>

              {/* Mobile Menu Toggle */}
              {mobileToggleButton}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed left-0 right-0 bottom-0 top-[88px] z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeAll}
            aria-hidden="true"
          />
          <nav
            className="absolute top-0 inset-x-0 mx-4 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="p-6 space-y-8">
              {/* Research Section */}
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                  Research
                </h3>
                <div className="space-y-3">
                  {researchLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeAll}
                      className="block text-[15px] leading-relaxed text-neutral-700 hover:text-orange-600 transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Section */}
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                  Services
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeAll}
                      className="text-[15px] leading-relaxed text-neutral-700 hover:text-orange-600 transition-colors py-2"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* AI Features Section */}
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                  AI Features
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/ai/vastu"
                    onClick={closeAll}
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  >
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="/images/vastu.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-neutral-900">
                        Vastu AI
                      </h4>
                      <p className="text-[13px] text-neutral-600">
                        Spatial intelligence
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/ai/palmistry"
                    onClick={closeAll}
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  >
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="/images/palm.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-neutral-900">
                        Palmistry AI
                      </h4>
                      <p className="text-[13px] text-neutral-600">
                        Palm insights
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                  Education
                </h3>
                <div className="space-y-3">
                  {educationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeAll}
                      className="block text-[15px] leading-relaxed text-neutral-700 hover:text-orange-600 transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <Link
                href="/login"
                onClick={closeAll}
                className="block w-full text-center rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-3 text-[15px] font-medium text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

/* Feature Card Component */
function FeatureCard({
  title,
  desc,
  img,
  href,
  onClick,
}: {
  title: string;
  desc: string;
  img: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex gap-4 rounded-2xl p-4 hover:bg-neutral-50 transition-all duration-300"
    >
      <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-[15px] font-semibold text-neutral-900 mb-1">
          {title}
        </h4>
        <p className="text-[13px] text-neutral-600 leading-snug">{desc}</p>
      </div>
    </Link>
  );
}