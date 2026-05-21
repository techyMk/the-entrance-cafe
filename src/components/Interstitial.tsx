"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { MaskReveal } from "@/components/ui/MaskReveal";

/**
 * Oversized typographic interstitial. A single editorial line set very
 * large with generous breathing room. Sits between two sections to vary
 * the visual rhythm and let the reader pause.
 */
export function Interstitial({
  attribution,
  children,
  invert = false,
}: {
  attribution?: string;
  children: string;
  invert?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className={`relative py-32 sm:py-44 lg:py-56 overflow-hidden ${
        invert ? "bg-ink text-cream" : "bg-cream text-espresso"
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 grain pointer-events-none ${invert ? "opacity-50" : "opacity-30"}`}
      />

      <Container className="relative">
        <motion.div style={{ y }} className="relative">
          <span
            aria-hidden
            className={`absolute -left-2 -top-12 font-display text-[12rem] leading-none ${
              invert ? "text-latte/30" : "text-caramel/30"
            }`}
          >
            “
          </span>

          <MaskReveal
            as="p"
            className="font-display font-medium italic tracking-tightest leading-[0.95] text-balance"
          >
            {children}
          </MaskReveal>

          {attribution && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className={`mt-10 flex items-center gap-4 text-[11px] uppercase tracking-widest2 ${
                invert ? "text-cream/50" : "text-espresso/50"
              }`}
            >
              <span className={`h-px w-10 ${invert ? "bg-cream/30" : "bg-espresso/25"}`} />
              {attribution}
            </motion.div>
          )}
        </motion.div>
      </Container>

      <style jsx>{`
        section :global(p) {
          font-size: clamp(2.5rem, 7.5vw, 8rem);
        }
      `}</style>
    </section>
  );
}
