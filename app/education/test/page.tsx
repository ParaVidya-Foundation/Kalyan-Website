"use client";
import CertTest from "@/components/education/cerificate/CertTest";
import CertTestimonial from "@/components/education/cerificate/CertTestimonial";
import SubjectCard from "@/components/education/test/SubjectCard";
import TestHero from "@/components/education/test/TestHero";

export default function TestPage() {
  return (
    <>
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden 
                 text-black font-[Inter]"
    >

     <TestHero />

     <SubjectCard />
      

     <CertTest />
     <CertTestimonial />
        </section>
        </>
  );
}
