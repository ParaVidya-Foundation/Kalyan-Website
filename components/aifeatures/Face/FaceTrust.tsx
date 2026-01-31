"use client";
import React from "react";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export default function FaceTrust() {
  return (
    <section className="w-full border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* TRUST ITEM 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition-transform duration-300 group-hover:scale-110">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Your Data Is Fully Protected
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                All face data is encrypted and processed securely using industry-grade protection.
              </p>
            </div>
          </div>

          {/* TRUST ITEM 2 */}
          <div className="flex flex-col md:flex-row items-center gap-4 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition-transform duration-300 group-hover:scale-110">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                No Data Misuse. Ever.
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Your images are never sold, shared, or used for training without consent.
              </p>
            </div>
          </div>

          {/* TRUST ITEM 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition-transform duration-300 group-hover:scale-110">
              <EyeOff className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Privacy-First AI Face Reading
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Face analysis is temporary, private, and automatically deleted after processing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}