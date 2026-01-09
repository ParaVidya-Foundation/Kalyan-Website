"use client";

interface CartLineItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  onQuantityChange?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
}

export function CartLineItem({
  id,
  title,
  price,
  quantity,
  image,
  onQuantityChange,
  onRemove,
}: CartLineItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
      {image && (
        <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />
      )}
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">₹{price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onQuantityChange?.(id, Math.max(1, quantity - 1))}
          className="px-2 py-1 border rounded"
        >
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button
          onClick={() => onQuantityChange?.(id, quantity + 1)}
          className="px-2 py-1 border rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove?.(id)}
        className="px-3 py-1 text-red-600 hover:bg-red-50 rounded text-sm"
      >
        Remove
      </button>
    </div>
  );
}

