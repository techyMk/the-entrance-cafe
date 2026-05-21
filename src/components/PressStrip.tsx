"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * "As seen in" credibility strip. Uses pure-CSS wordmarks for now so there are
 * zero image dependencies — swap each `<span>` for an SVG logo when real
 * publications are confirmed.
 */
const press = [
  { name: "Conde Nast Traveller", font: "font-display italic" },
  { name: "BURRP", font: "font-sans font-extrabold tracking-tight" },
  { name: "The Hindu", font: "font-display" },
  { name: "Zomato Gold", font: "font-sans font-bold tracking-tight" },
  { name: "Vogue India", font: "font-display tracking-widest2 uppercase text-lg" },
  { name: "LBB Chennai", font: "font-sans font-black tracking-tight" },
];

export function PressStrip() {
  return (
    <section className="relative bg-cream py-16 sm:py-20 border-t border-espresso/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-caramel/60" />
            Featured In
            <span className="h-px w-8 bg-caramel/60" />
          </span>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-8 items-center justify-items-center">
          {press.map((p, i) => (
            <motion.span
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`${p.font} text-xl sm:text-2xl text-espresso/50 hover:text-espresso transition-colors duration-300 text-center select-none`}
            >
              {p.name}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
