'use client';

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/Logo/Logo.svg"
                alt="Kalyan Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-mono text-lg uppercase tracking-widest">
                Kalyan
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Vedic astrology re-engineered for modern decision-making.
              Tradition, delivered with precision.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/80">
              Product
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/kalyan" className="footer-link">
                  Kalyan AI
                </Link>
              </li>
              <li>
                <Link href="/ai/palmistry" className="footer-link">
                  AI Palmistry
                </Link>
              </li>
              <li>
                <Link href="/ai/vastu" className="footer-link">
                  AI Vastu
                </Link>
              </li>
              <li>
                <Link href="/research" className="footer-link">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/80">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/education" className="footer-link">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/special" className="footer-link">
                  Special Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/80">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="footer-link">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © 2026 Jyotish. All rights reserved.
          </p>

          <p className="font-mono text-xs text-white/40">
            Built with tradition. Optimized for the future.
          </p>
        </div>
      </div>

      {/* Local utility class (Tailwind-safe) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .footer-link {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #ffffff;
        }
      `
      }} />
    </footer>
  );
}
