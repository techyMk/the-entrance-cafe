"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

const defaults = [
  "Cafe · Coffee House · Bakery",
  "Locally Sourced",
  "Baked Daily At Dawn",
  "Single-Origin Coffee",
  "Hand-Crafted In Kilpauk",
  "Slow-Living Since 2022",
  "Pastries From The Oven",
];

export function MarqueeStrip({
  items = defaults,
  invert = false,
  speed = 38,
  className,
}: {
  items?: string[];
  invert?: boolean;
  /** seconds per loop — higher = slower */
  speed?: number;
  className?: string;
}) {
  const row = [...items, ...items];

  const fadeFrom = invert ? "from-espresso" : "from-cream";

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-6",
        invert
          ? "bg-espresso text-cream border-cream/10"
          : "bg-cream text-espresso border-espresso/10",
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r to-transparent",
          fadeFrom
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l to-transparent",
          fadeFrom
        )}
      />
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 px-8 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight whitespace-nowrap"
          >
            <span>{item}</span>
            <Coffee
              className={cn("h-5 w-5 shrink-0", invert ? "text-caramel" : "text-caramel")}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
