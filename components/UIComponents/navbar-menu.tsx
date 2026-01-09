// components/navbar-menu.tsx
"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type MenuProps = {
  active: string | null;
  setActive: (v: string | null) => void;
  children: React.ReactNode;
};

/**
 * Menu: Top-level navigation wrapper
 * - Manages hover behavior for desktop
 * - Coordinates state across NavItems
 */
export function Menu({ active, setActive, children }: MenuProps) {
  const items = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, { active, setActive })
      : child
  );

  return (
    <nav
      className="relative flex items-center gap-2"
      onMouseLeave={() => setActive(null)}
      role="navigation"
      aria-label="Primary navigation"
    >
      {items}
    </nav>
  );
}

type NavItemProps = {
  label: string;
  active?: string | null;
  setActive?: (v: string | null) => void;
  children?: React.ReactNode;
};

/**
 * NavItem: Individual navigation item with dropdown
 * - Keyboard accessible (Enter/Space/Escape/Arrow keys)
 * - Mouse hover support
 * - Touch-friendly click toggle
 * - ARIA compliant
 */
export function NavItem({ label, active, setActive, children }: NavItemProps) {
  const open = active === label;
  const panelId = `nav-panel-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Open on hover (desktop)
  const onOpen = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setActive?.(label);
    }
  }, [label, setActive]);

  // Close handler
  const onClose = useCallback(() => setActive?.(null), [setActive]);

  // Toggle on click (touch devices and intentional clicks)
  const onToggle = useCallback(() => {
    setActive?.(open ? null : label);
  }, [open, label, setActive]);

  // Keyboard navigation
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      } else if (e.key === "ArrowDown" && !open) {
        e.preventDefault();
        setActive?.(label);
        setTimeout(() => {
          const panel = panelRef.current;
          if (!panel) return;
          const focusable = panel.querySelector<HTMLElement>(
            'a, button, input, textarea, [tabindex]:not([tabindex="-1"])'
          );
          focusable?.focus();
        }, 100);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        buttonRef.current?.focus();
      }
    },
    [label, onClose, onToggle, open, setActive]
  );

  // Close when focus leaves both button and panel
  useEffect(() => {
    if (!open) return;

    const onFocusIn = (ev: FocusEvent) => {
      const newFocus = ev.target as Node;
      const panel = panelRef.current;
      const button = buttonRef.current;

      if (!panel || !button) return;
      if (panel.contains(newFocus) || button.contains(newFocus)) return;

      // Focus moved outside - close menu
      onClose();
    };

    // Small delay to let focus settle
    const timer = setTimeout(() => {
      document.addEventListener("focusin", onFocusIn);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [open, onClose]);

  const navButton = open ? (
    <button
      ref={buttonRef}
      aria-haspopup="true"
      aria-expanded="true"
      aria-controls={panelId}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      className="group flex items-center gap-1.5 px-3 py-2 text-[15px] font-medium text-neutral-700 hover:text-neutral-900 transition-colors duration-200 rounded-lg hover:bg-neutral-50/50"
      type="button"
    >
      <span>{label}</span>
      <ChevronDown
        size={16}
        className="transition-all duration-300 rotate-180 text-orange-500"
        strokeWidth={2}
      />
    </button>
  ) : (
    <button
      ref={buttonRef}
      aria-haspopup="true"
      aria-expanded="false"
      aria-controls={panelId}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      className="group flex items-center gap-1.5 px-3 py-2 text-[15px] font-medium text-neutral-700 hover:text-neutral-900 transition-colors duration-200 rounded-lg hover:bg-neutral-50/50"
      type="button"
    >
      <span>{label}</span>
      <ChevronDown
        size={16}
        className="transition-all duration-300 text-neutral-400 group-hover:text-neutral-600"
        strokeWidth={2}
      />
    </button>
  );

  return (
    <div className="relative" onMouseEnter={onOpen}>
      {navButton}

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id={panelId}
            role="region"
            aria-label={`${label} submenu`}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2"
            style={{
              transformOrigin: "top center",
            }}
          >
            <div
              className="rounded-3xl bg-white/95 backdrop-blur-2xl border border-neutral-200/60 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.15)] p-8"
              onMouseLeave={onClose}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Legacy exports for backward compatibility with Navbar.tsx
export function MenuItem({ item, active, setActive, children }: { item: string; active: string | null; setActive: (v: string | null) => void; children?: React.ReactNode }) {
  return <NavItem label={item} active={active} setActive={setActive}>{children}</NavItem>;
}

export function HoveredLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className={`block text-sm text-neutral-600 hover:text-black transition ${props.className ?? ""}`} />;
}

export function ProductItem({ title, description, href, src }: { title: string; description: string; href: string; src: string }) {
  // Check if href is external (starts with http:// or https://)
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  const linkProps = isExternal 
    ? { rel: 'noopener noreferrer', target: '_blank' as const }
    : {};
  
  return (
    <a 
      href={href} 
      className="group flex gap-4 rounded-xl p-3 hover:bg-black/5 transition"
      {...linkProps}
    >
      <Image src={src} alt={title} width={88} height={60} className="rounded-lg object-cover" />
      <div>
        <h4 className="text-sm font-semibold text-black">{title}</h4>
        <p className="mt-1 text-xs text-neutral-600">{description}</p>
      </div>
    </a>
  );
}