"use client";

import TestSection from "@/components/education/test/testsection";
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
      

    <div className="flex justify-center relative w-full">
          <TestSection onSubmitEmail={() => {
            // Handle email submission - ready for API integration
            if (process.env.NODE_ENV === "development") {
              console.debug("Email submitted");
            }
            // TODO: Implement API call for email submission
          }} />
        </div>
        </section>
        </>
  );
}
