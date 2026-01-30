"use client";

import React from "react";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export default function PalmistryTrust(): React.ReactElement {
  return (
    <section className="w-full border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* TRUST ITEM 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-[#8B5A2B] transition-transform duration-300 group-hover:scale-110">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Your Palm Data Is Fully Protected
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Palm images and personal details are securely encrypted and processed with strict confidentiality.
              </p>
            </div>
          </div>

          {/* TRUST ITEM 2 */}
          <div className="flex flex-col md:flex-row items-center gap-4 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-[#8B5A2B] transition-transform duration-300 group-hover:scale-110">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Authentic & Ethical Palmistry AI
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Our analysis is rooted in traditional palmistry and Samudrik Shastra — no fabricated insights or false promises.
              </p>
            </div>
          </div>

          {/* TRUST ITEM 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-[#8B5A2B] transition-transform duration-300 group-hover:scale-110">
              <EyeOff className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Privacy-First Palm Reading
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Your palm images are used only for analysis and are never shared, stored, or reused without consent.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
