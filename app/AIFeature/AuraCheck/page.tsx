"use client";

import AarudhLagna from "@/components/aifeatures/AuraCheck/AarudhLagna";
import AuraHero from "@/components/aifeatures/AuraCheck/AuraHero";
import PeopleSee from "@/components/aifeatures/AuraCheck/PeopleSee";
import PersonalGame from "@/components/aifeatures/AuraCheck/PersonalGame";

export default function AuraCheckPage() {
  return (
    <div>
      <AuraHero />
      <PersonalGame />
      <PeopleSee />
      <AarudhLagna />
    </div>
  );
}