"use client";

interface TestCardProps {
  id: string;
  title: string;
  description?: string;
  onStart?: () => void;
}

export function TestCard({ title, description, onStart }: TestCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
      <button
        onClick={onStart}
        className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
      >
        Start Test
      </button>
    </div>
  );
}

