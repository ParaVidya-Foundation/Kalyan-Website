"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { CartLineItem } from "@/components/cards/cart-line-item";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { CartItem } from "@/lib/dashboard-data";

type CartDashboardProps = {
  initialItems: CartItem[];
};

export function CartDashboard({ initialItems }: CartDashboardProps) {
  const [items, setItems] = useState(initialItems);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsBooting(false), 420);
    return () => clearTimeout(timeout);
  }, []);

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const shipping = subtotal > 499 ? 0 : 40; // Indian standards
    const tax = subtotal * 0.05; // GST Approx
    const grand = subtotal + shipping + tax;

    return { subtotal, shipping, tax, grand };
  }, [items]);

  const summaryPanel = (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="
        relative overflow-hidden
        rounded-3xl border border-yellow-200/80
        bg-gradient-to-br from-amber-50 via-white to-yellow-100
        p-6 shadow-[0_22px_70px_rgba(250,204,21,0.35)]
        backdrop-blur-xl space-y-4
      "
    >
      {/* Soft glow accent */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-300/30 blur-3xl"
      />

      <div className="relative flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-600">
          Order Summary
        </p>
        <Sparkles className="h-4 w-4 text-yellow-500" />
      </div>

      <div className="relative space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono text-gray-900">
            ₹{totals.subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-mono text-gray-900">
            ₹{totals.shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>GST (5%)</span>
          <span className="font-mono text-gray-900">
            ₹{totals.tax.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="relative flex items-center justify-between border-t border-yellow-100 pt-4">
        <span className="text-sm font-semibold text-gray-700">Total</span>
        <span className="font-mono text-2xl text-gray-900">
          ₹{totals.grand.toFixed(2)}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Button
          className="
            mt-4 w-full rounded-full
            bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600
            text-gray-900 text-sm font-semibold
            shadow-[0_14px_40px_rgba(250,204,21,0.55)]
            hover:brightness-105 hover:shadow-[0_18px_50px_rgba(245,158,11,0.7)]
            transition-all duration-300
            flex items-center justify-center
          "
        >
          Proceed to Checkout
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );

  const handleQuantityChange = (id: string, next: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: next } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const renderSkeleton = () => (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <Skeleton key={i} className="h-36 w-full rounded-3xl" />
      ))}
    </div>
  );

  return (
    <DashboardShell
      title="My Cart"
      description="Review and complete your order."
      rightPanel={summaryPanel}
      actions={
        <div
          className="
            hidden lg:flex items-center
            rounded-full border border-yellow-200/80 bg-white/90 px-4 py-2 
            text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-700
            shadow-sm
          "
        >
          Items · {items.length.toString().padStart(2, "0")}
        </div>
      }
    >
      <AnimatePresence mode="popLayout">
        {isBooting ? (
          renderSkeleton()
        ) : items.length > 0 ? (
          <motion.div
            layout
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {items.map((item) => (
              <CartLineItem
                key={item.id}
                {...item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              rounded-3xl border border-dashed border-yellow-200
              bg-gradient-to-br from-amber-50 via-white to-yellow-50
              p-10 text-center shadow-sm
            "
          >
            <p className="font-mono text-lg text-gray-900">Your cart is empty</p>
            <p className="mt-2 text-sm text-gray-600">
              Add products to continue shopping.
            </p>
            <Button className="mt-4 rounded-full bg-gray-900 text-white hover:bg-gray-800">
              Browse Store
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardShell>
  );
}
