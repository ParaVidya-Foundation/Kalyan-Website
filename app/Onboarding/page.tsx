"use client";

import CloudScene from "@/components/login/cloudbg";
import OnboardingForm from "@/components/login/Onboardingform";

export default function OnboardingPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* GPU CLOUD BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CloudScene />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <OnboardingForm />
      </div>
    </main>
  );
}
