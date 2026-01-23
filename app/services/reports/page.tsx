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
  <Features />
  <Content />
  <ReportGallery />
  <KundliServices />
  <ReportFAQ />
    </div>
  );
}