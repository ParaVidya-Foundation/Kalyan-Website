"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Rainbow from "./Rainbow";

/**
 * Footer — production ready, dark + amber palette, subtle spotlight, Rainbow integrated inside.
 * - Footer content sits at z-10
 * - Rainbow rendered as absolutely positioned layer (z-0) inside footer
 * - All styles scoped locally with Tailwind-like classes + inline styles
 */

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <>
      {/* optional top visual anchor — leave or remove as you prefer */}
      <Image
        src="/footer.png"
        alt="Kalyan cosmic footer backdrop"
        width={2400}
        height={800}
        priority={false}
        className="w-full h-auto"
      />

      <footer
        ref={footerRef}
        className="relative overflow-hidden rounded-t-[36px] border-t border-neutral-800 bg-black text-white"
        aria-labelledby="footer-title"
        role="contentinfo"
      >
        {/* subtle spotlight to emphasize warm-amber glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 0,
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(255,196,80,0.06), transparent 36%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Rainbow layer — controlled internally, placed behind content */}
        <Rainbow footerRef={footerRef} maxOpacity={1} heightVh={36} />

        {/* content (above rainbow) */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">


          {/* columns: asymmetrical, minimal, accessible */}
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/Logo/Logo.svg" alt="Kalyan Logo" width={36} height={36} />
                <span className="font-mono text-lg uppercase tracking-widest">Kalyan</span>
              </Link>
              <p className="mt-4 text-sm text-white/60">
                Vedic astrology re-engineered for precision and modern intelligence.
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex gap-10 flex-wrap text-sm">
              <FooterCol title="Platform">
                <FooterLink href="/kalyan">Kalyan AI</FooterLink>
                <FooterLink href="/ai/vastu">AI Vastu</FooterLink>
                <FooterLink href="/ai/palmistry">AI Palmistry</FooterLink>
                <FooterLink href="/research">Research</FooterLink>
              </FooterCol>

              <FooterCol title="Company">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
              </FooterCol>

              <FooterCol title="Trust">
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
                <FooterLink href="/security">Security</FooterLink>
              </FooterCol>
            </nav>
          </div>

          {/* legal */}
          <div className="mt-16 border-t border-neutral-800 pt-6 text-xs text-white/45 flex flex-col gap-3 md:flex-row md:justify-between">
            <span>© 2026 Kalyan. All rights reserved.</span>
            <span className="font-mono">Built with tradition · Optimized for the future</span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* Small helper primitives */

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/70">{title}</p>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/60 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
