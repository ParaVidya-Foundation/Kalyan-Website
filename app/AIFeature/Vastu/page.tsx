"use client";

import VastuHero from "@/components/aifeatures/vastu/VastuHero";
import VastuProcess from "@/components/aifeatures/vastu/VastuProcess";
import VastuScan from "@/components/aifeatures/vastu/VastuScan";
import VastuFeatures from "@/components/aifeatures/vastu/VastuFeatures";
import VastuTools from "@/components/aifeatures/vastu/VastuTools";
import WhyVastu from "@/components/aifeatures/vastu/WhyVastu";
import VastuTrust from "@/components/aifeatures/vastu/VastuTrust";

export default function VastuPage() {
  return (
    <div>
      <VastuHero />
      <VastuProcess />
      <VastuScan />
      <VastuTools />
      <VastuFeatures />
      <WhyVastu />
      <VastuTrust />
    </div>
  );
}