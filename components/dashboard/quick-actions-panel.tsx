"use client";

import { ReactNode, ComponentType } from "react";

interface Action {
  label: string;
  icon?: ComponentType<any> | ReactNode;
  onClick?: () => void;
  href?: string;
  description?: string;
  actionLabel?: string;
}

interface QuickActionsPanelProps {
  actions: Action[];
}

export function QuickActionsPanel({ actions }: QuickActionsPanelProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3">
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Quick Actions</h3>
      <div className="space-y-2">
        {actions.map((action, index) => {
          const IconComponent = action.icon as ComponentType<any> | undefined;
          return (
            <button
              key={index}
              onClick={action.onClick}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700"
            >
              {IconComponent && <IconComponent className="mr-2 h-4 w-4 inline" />}
              {typeof action.icon !== 'function' && action.icon && <span className="mr-2">{action.icon}</span>}
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

