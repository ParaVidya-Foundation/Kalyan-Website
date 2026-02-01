"use client";

import LifeChart from "@/components/aifeatures/LifePrediction/LifeChart";
import LifeHero from "@/components/aifeatures/LifePrediction/LifeHero";
import PredictionFeat from "@/components/aifeatures/LifePrediction/PredictionFeat";
import Image from "next/image";

export default function LifePredictionPage() {
  return (
    <div>
      <LifeHero />
      <div className="absolute left-0 right-0 bottom-[-75px] z-20 pointer-events-none">
          <div className="relative w-full h-[230px]">
            <Image
              src="/Service/Perfume/Paper-Border.webp"
              alt="Paper Border Over Hero"
              fill
              priority
              sizes="100vw"
              className="object-fill w-full h-full"
            />
          </div>
        </div>
       
          <LifeChart />
      <PredictionFeat />
    </div>
  );
}