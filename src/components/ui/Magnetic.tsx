"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const SPRING = { stiffness: 180, damping: 18, mass: 0.35 };

/**
 * Wraps a child element so it gently follows the cursor on hover.
 * Disabled for touch / coarse pointers so mobile users don't get phantom
 * displacement that breaks tap targets.
 *
 * Keep the strength low (0.18–0.25). Magnetism reads as expensive at
 * subtle intensities and gimmicky at high ones.
 */
export function Magnetic({
  children,
  strength = 0.22,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), SPRING);
  const y = useSpring(useMotionValue(0), SPRING);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
