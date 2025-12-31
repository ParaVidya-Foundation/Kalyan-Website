"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResearchPaperCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  link?: string;
}

export const ResearchPaperCard: React.FC<ResearchPaperCardProps> = ({
  title,
  author,
  date,
  description,
  link = "#",
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      {/* Meta Info */}
      <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Read Button */}
      <div className="mt-6">
        <Button
          asChild
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-5 py-2 rounded-xl shadow-md transition-all duration-200"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Read Paper →
          </a>
        </Button>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-100/30 via-purple-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};
