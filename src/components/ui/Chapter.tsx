"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/**
 * Chapter marker — converts a section into a "chapter" of the brand story
 * with a roman numeral and a thin rule. Designed to sit above section
 * headings so the page reads as a curated journey, not a catalogue.
 */
export function Chapter({
  number,
  label,
  invert = false,
  align = "left",
  className,
}: {
  number: number;
  label: string;
  invert?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  const roman = ROMAN[number - 1] ?? String(number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "inline-flex items-center gap-4 text-[11px] uppercase tracking-widest2",
        invert ? "text-cream/55" : "text-espresso/55",
        align === "center" && "justify-center w-full",
        className
      )}
    >
      <span className={cn("font-display italic text-base normal-case tracking-normal", invert ? "text-latte" : "text-caramel")}>
        {roman}
      </span>
      <span className={cn("h-px w-10", invert ? "bg-cream/30" : "bg-espresso/25")} />
      <span>{label}</span>
    </motion.div>
  );
}
