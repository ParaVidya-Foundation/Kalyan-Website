"use client";

import { useState } from "react";
import { PaperHeroSection } from "@/components/research/paper/PaperHeroSection";
import { ResearchPaperGrid } from "@/components/research/paper/ResearchPaperGrid";

export default function ResearchPapersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setSelectedTopic(undefined); // Clear topic filter when searching
    }
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <main className="">
      <PaperHeroSection 
        onSearchChange={handleSearchChange}
        onTopicSelect={handleTopicSelect}
        selectedTopic={selectedTopic}
      />
      <ResearchPaperGrid 
        searchQuery={searchQuery}
        selectedTopic={selectedTopic}
      />
    </main>
  );
}