"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const lineVariants: Variants = {
  hidden: { y: "115%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1.05,
      delay: 0.1 + i * 0.09,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/**
 * Mask-reveal text. Each newline becomes its own clipped row that slides
 * up into place. Intentionally line-based (not word) so display headlines
 * don't fragment into nervous, choppy reveals.
 *
 * Usage:
 *   <MaskReveal as="h1" className="display-h1">
 *     {`Where Every Cup\nOpens a Conversation`}
 *   </MaskReveal>
 */
export function MaskReveal({
  children,
  className,
  as = "div",
  delay = 0,
}: {
  children: string | React.ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const lines = typeof children === "string"
    ? children.split("\n")
    : Array.isArray(children) ? children : [children];

  const Wrapper = motion[as] as typeof motion.div;

  return (
    <Wrapper ref={ref} className={cn(className)} aria-label={typeof children === "string" ? children.replace(/\n/g, " ") : undefined}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ paddingBottom: "0.05em" }}
        >
          <motion.span
            custom={i + delay}
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="block will-change-transform"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}
