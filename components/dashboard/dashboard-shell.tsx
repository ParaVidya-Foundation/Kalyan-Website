"use client";

import { ReactNode } from "react";

interface DashboardShellProps {
  title: string;
  description?: string;
  rightPanel?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
}

export function DashboardShell({ title, description, rightPanel, actions, children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description && <p className="mt-2 text-gray-600">{description}</p>}
          </div>
          {actions && <div>{actions}</div>}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <div>{children}</div>
          {rightPanel && <div>{rightPanel}</div>}
        </div>
      </div>
    </div>
  );
}

