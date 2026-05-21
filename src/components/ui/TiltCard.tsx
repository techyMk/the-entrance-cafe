"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const SPRING = { stiffness: 220, damping: 22, mass: 0.4 };

/**
 * Subtle 3D tilt on pointer move — disabled on touch / reduced-motion contexts.
 * Wraps a card and exposes `--mx` / `--my` CSS vars (0..1) so children can
 * react with their own parallax or glow effects.
 */
export function TiltCard({
  className,
  children,
  intensity = 8,
}: {
  className?: string;
  children: React.ReactNode;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), SPRING);
  const ry = useSpring(useMotionValue(0), SPRING);
  const mx = useSpring(useMotionValue(0.5), SPRING);
  const my = useSpring(useMotionValue(0.5), SPRING);

  const transform = useMotionTemplate`perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height;
    mx.set(px);
    my.set(py);
    ry.set((px - 0.5) * intensity);
    rx.set((0.5 - py) * intensity);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
