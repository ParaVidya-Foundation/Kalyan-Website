"use client";

import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ResearchTopicsProps {
  onTopicClick?: (topic: string) => void;
  selectedTopic?: string;
}

// Organized by rows to match the exact layout from the image
const topicsByRow = [
  // Row 1: 5 topics
  ["Pitra Dosh", "Vastu", "Kalsarp dosh", "Sun", "Jupiter"],
  // Row 2: 4 topics (centered/offset)
  ["Rahu", "Mercury", "Venus", "Saturn"],
  // Row 3: 5 topics
  ["Ketu", "Moon", "Mars", "Mangal Badh", "Stree Shrap"],
] as const;

// Flattened array for compatibility (unused for now)
// const allTopics = topicsByRow.flat();

// Memoized topic button component for performance
const TopicButton = React.memo<{
  topic: string;
  isSelected: boolean;
  onClick: () => void;
  delay: number;
  index: number;
}>(({ topic, isSelected, onClick, delay, index }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={cn(
        "px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-3xl",
        "border border-black bg-white text-black text-sm sm:text-base font-medium",
        "transition-all duration-200 hover:shadow-md",
        "whitespace-nowrap",
        "will-change-transform",
        isSelected && "bg-black text-white border-black"
      )}
      aria-label={`Filter by ${topic}`}
      style={{ transform: "translateZ(0)" }}
    >
      {topic}
    </motion.button>
  );
});

TopicButton.displayName = "TopicButton";

export const ResearchTopics: React.FC<ResearchTopicsProps> = ({
  onTopicClick,
  selectedTopic,
}) => {
  const handleTopicClick = useCallback(
    (topic: string) => {
      onTopicClick?.(topic);
    },
    [onTopicClick]
  );

  const selectedTopicLower = useMemo(
    () => selectedTopic?.toLowerCase(),
    [selectedTopic]
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      className="mx-auto mt-8 sm:mt-10 max-w-5xl px-4 sm:px-6"
      aria-label="Research topics"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
        {/* Row 1: 5 buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 w-full">
          {topicsByRow[0].map((topic, index) => (
            <TopicButton
              key={topic}
              topic={topic}
              isSelected={selectedTopicLower === topic.toLowerCase()}
              onClick={() => handleTopicClick(topic)}
              delay={0.5}
              index={index}
            />
          ))}
        </div>

        {/* Row 2: 4 buttons (centered - naturally creates staggered effect) */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 w-full">
          {topicsByRow[1].map((topic, index) => (
            <TopicButton
              key={topic}
              topic={topic}
              isSelected={selectedTopicLower === topic.toLowerCase()}
              onClick={() => handleTopicClick(topic)}
              delay={0.7}
              index={index}
            />
          ))}
        </div>

        {/* Row 3: 5 buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 w-full">
          {topicsByRow[2].map((topic, index) => (
            <TopicButton
              key={topic}
              topic={topic}
              isSelected={selectedTopicLower === topic.toLowerCase()}
              onClick={() => handleTopicClick(topic)}
              delay={0.9}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchTopics;
