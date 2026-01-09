"use client";

import React, { useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Rainbow from "./Rainbow";

/**
 * Premium Footer Component
 * - Dark-yellow theme with modern, sleek design
 * - Performance optimized with memoized components
 * - Accessible and SEO-friendly
 * - Industry-level code quality
 */

interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumnProps {
  title: string;
  links: readonly FooterLink[];
}

const FOOTER_LINKS = {
  platform: [
    { href: "/kalyan", label: "Kalyan AI" },
    { href: "/ai/vastu", label: "AI Vastu" },
    { href: "/ai/palmistry", label: "AI Palmistry" },
    { href: "/research", label: "Research" },
  ],
  services: [
    { href: "/services/match-making", label: "Match Making" },
    { href: "/services/perfume", label: "Perfume" },
    { href: "/services/gems", label: "Gems" },
    { href: "/services/accessories", label: "Accessories" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/security", label: "Security" },
  ],
} as const satisfies Record<string, readonly FooterLink[]>;

const FooterColumn = React.memo<FooterColumnProps>(({ title, links }) => (
  <div className="flex flex-col">
    <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-amber-400/90">
      {title}
    </h3>
    <ul className="flex flex-col space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-white/60 transition-all duration-200 hover:text-amber-400/90 hover:translate-x-0.5"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
));

FooterColumn.displayName = "FooterColumn";

export default function Footer(): React.JSX.Element {
  const footerRef = useRef<HTMLElement | null>(null);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      aria-labelledby="footer-heading"
      className="relative overflow-hidden border-t border-neutral-800/50 bg-[#0a0a0a] text-white rounded-t-[36px] h-[70vh]"
    >
      {/* Subtle amber spotlight (behind content) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(900px 420px at 50% -10%, rgba(255,196,80,0.06), transparent 40%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Rainbow layer (unchanged) */}
      <Rainbow footerRef={footerRef} heightVh={30} maxOpacity={1} />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <h2 id="footer-heading" className="sr-only">
          Kalyan footer navigation
        </h2>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand section */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
              aria-label="Kalyan homepage"
            >
              <Image
                src="/Logo/Logo.svg"
                alt="Kalyan logo"
                width={40}
                height={40}
                className="h-10 w-10"
                priority={false}
              />
              <span className="font-mono text-xl font-semibold uppercase tracking-widest text-white">
                Kalyan
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Vedic astrology re-engineered for precision, scale and modern
              intelligence systems.
            </p>
          </div>

          {/* Links grid */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8 lg:grid-cols-4"
          >
            <FooterColumn title="Platform" links={FOOTER_LINKS.platform} />
            <FooterColumn title="Services" links={FOOTER_LINKS.services} />
            <FooterColumn title="Company" links={FOOTER_LINKS.company} />
            <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-neutral-800/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/45">
              © {currentYear} Kalyan. All rights reserved.
            </p>
            <p className="font-mono text-xs text-white/45">
              Built with tradition · Optimized for the future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
