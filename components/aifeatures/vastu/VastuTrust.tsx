"use client";

import React from "react";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export default function VastuTrust(): React.ReactElement {
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
                Your Property Data Is Secure
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Floor plans, images, and Vastu details are encrypted and handled with strict confidentiality.
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
                Ethical & Authentic Vastu Analysis
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Our AI follows classical Vastu principles — no manipulation, no misleading remedies.
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
                Privacy-First Vastu Consultation
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Your home data is used only for analysis and never shared or retained without permission.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
