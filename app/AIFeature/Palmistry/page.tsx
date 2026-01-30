"use client";

import PalmistryHero from "@/components/aifeatures/palmistry/PalmistryHero";
import PalmResult from "@/components/aifeatures/palmistry/PalmResult";
import Palmexpert from "@/components/aifeatures/palmistry/Palmexpert";
import PalmistryTrust from "@/components/aifeatures/palmistry/PalmistryTrust";
import Image from "next/image";

export default function PalmistryPage() {
  return (
    <div>
      <PalmistryHero />
      <div className="bg-[#5A4235]">
<PalmResult />
<Palmexpert />
</div>
<Image
          src="/AI/Palmistry/PalmistryConsultation.png"
          alt="AI Vastu – intelligent space alignment"
          width={1920}
          height={700}
          priority
          className="w-full h-auto object-cover object-center drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
        />
  
    <PalmistryTrust />
    </div>  
  );
}