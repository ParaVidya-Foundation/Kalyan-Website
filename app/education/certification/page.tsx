"use client";

import CertificateHero from "@/components/education/cerificate/CertificateHero";
import CertBanner from "@/components/education/cerificate/CertBanner";
import CertSubject from "@/components/education/cerificate/CertSubject";
import { AITeacher } from "@/components/education/cerificate/AITeacher";
import CoursesCert from "@/components/education/cerificate/CoursesCert";
import CertTestimonial from "@/components/education/cerificate/CertTestimonial";
import CertBooks from "@/components/education/cerificate/CertBooks";
import CertTest from "@/components/education/cerificate/CertTest";

export default function CertificationPage() {
  return (
    <div>
      <CertificateHero />
      <CoursesCert />
      <CertSubject />
      <CertBanner />
      <AITeacher />
      <CertBooks />
      <CertTest />
      <CertTestimonial />
      
    </div>
  );
}