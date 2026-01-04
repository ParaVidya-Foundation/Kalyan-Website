"use client";

import React, {JSX, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Rainbow from "./Rainbow";


export default function Footer(): JSX.Element {
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <>
    

      <footer
        ref={footerRef}
        role="contentinfo"
        aria-labelledby="footer-heading"
        className="relative overflow-hidden rounded-t-[36px] border-t border-neutral-800 bg-black text-white"
      >
        {/* subtle amber spotlight (behind content) */}
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

        {/* Rainbow layer (bottom) */}
        <Rainbow footerRef={footerRef} heightVh={34} maxOpacity={1} />

        {/* Foreground content (z-10) */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <h2 id="footer-heading" className="sr-only">
            Kalyan footer
          </h2>


          {/* links area (asymmetrical layout) */}
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/Logo/Logo.svg" alt="Kalyan logo" width={36} height={36} />
                <span className="font-mono text-lg uppercase tracking-widest">Kalyan</span>
              </Link>
              <p className="mt-4 text-sm text-white/60">
                Vedic astrology re-engineered for precision, scale and modern intelligence systems.
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-16 gap-y-8 text-sm">
              <FooterColumn title="Platform">
                <FooterLink href="/kalyan">Kalyan AI</FooterLink>
                <FooterLink href="/ai/vastu">AI Vastu</FooterLink>
                <FooterLink href="/ai/palmistry">AI Palmistry</FooterLink>
                <FooterLink href="/research">Research</FooterLink>
              </FooterColumn>

              <FooterColumn title="Company">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
              </FooterColumn>

              <FooterColumn title="Trust">
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
                <FooterLink href="/security">Security</FooterLink>
              </FooterColumn>
            </nav>
          </div>

          {/* legal row */}
          <div className="mt-16 border-t border-neutral-800 pt-6 text-xs text-white/45 flex flex-col gap-3 md:flex-row md:justify-between">
            <span>© 2026 Kalyan. All rights reserved.</span>
            <span className="font-mono">Built with tradition · Optimized for the future</span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* Helper primitives */
function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
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
