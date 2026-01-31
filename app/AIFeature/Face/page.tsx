"use client";

import FaceProcess from "@/components/aifeatures/Face/FaceProcess";
import FaceScan from "@/components/aifeatures/Face/FaceScan";
import FaceResult from "@/components/aifeatures/Face/FaceResult";
import FaceTrust from "@/components/aifeatures/Face/FaceTrust";
export default function FacePage() {
  return (
    <div>
     <FaceScan />
     <FaceProcess />
     <FaceResult />
     <FaceTrust />
    </div>
  );
}