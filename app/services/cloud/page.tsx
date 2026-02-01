"use client";

import CloudHero from "@/components/store/cloudstorage/cloudhero";
import AnytimeKundli from "@/components/store/cloudstorage/anytimekundli";
import { EasyManage } from "@/components/store/cloudstorage/EasyManage";
import KundliDashboard from "@/components/store/cloudstorage/KundliDashboard";
import CloudFooter from "@/components/store/cloudstorage/cloudfooter";

export default function CloudPage() {
  return (
    <div className="bg-white">
     <div className="shadow-2xl"><CloudHero /></div> 
      <AnytimeKundli />
      <EasyManage />
      <KundliDashboard />
      <CloudFooter />
    </div>
  );
}