"use client";

import ReportHero from "@/components/store/reports/ReportHero";
import ReportGallery from "@/components/store/reports/ReportGallery";
import Features from "@/components/store/reports/Features";
import Content from "@/components/store/reports/content";
import ReportFAQ from "@/components/store/reports/ReportFAQ";
import PricingCard from "@/components/store/reports/Pricing";
import KundliServices from "@/components/store/reports/KundliServices";

export default function ReportsPage() {
  return (
    <div>
  <ReportHero />
  <ReportGallery />
  <Features />
  <Content />
<KundliServices />
  <section className="w-full py-32 flex justify-center gap-10 flex-wrap">
      <PricingCard
        title="Essential"
        price="$99"
        features={[
          "Personal Vedic chart",
          "Basic compatibility analysis",
          "Career & finance overview",
          "Health indicators",
          "Email delivery",
        ]}
      />

      <PricingCard
        title="Premium"
        price="$199"
        features={[
          "Complete kundli analysis",
          "Marriage compatibility",
          "Career & wealth timing",
          "Health & longevity insights",
          "Priority support",
        ]}
        ctaText="Most Popular"
      />

      <PricingCard
        title="Elite"
        price="$299"
        features={[
          "Full life report",
          "Marriage & match timing",
          "Business & investments",
          "Personal remedies",
          "1-to-1 consultation",
        ]}
        ctaText="Book Consultation"
      />
    </section>

  <ReportFAQ />
    </div>
  );
}