"use client";

interface DocumentCardProps {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  onDownload?: () => void;
}

export function DocumentCard({ title, description, tags, onDownload }: DocumentCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
      {onDownload && (
        <button
          onClick={onDownload}
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          Download
        </button>
      )}
    </div>
  );
}

