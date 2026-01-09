"use client";

import React from "react";

interface BookButtonProps {
  label?: string;
  onClick?: () => void;
}

const BookButton: React.FC<BookButtonProps> = ({ label = "Ask AI", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 px-6 py-2 text-white text-sm font-semibold shadow-md transition-all duration-300 hover:from-blue-600 hover:to-purple-600 focus:outline-none"
    >
      {label}
    </button>
  );
};

export default BookButton;
