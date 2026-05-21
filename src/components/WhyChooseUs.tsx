"use client";

import { motion } from "framer-motion";
import { Coffee, Flame, Leaf, Sofa, Sparkles, Timer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Coffee,
    title: "Artisan Coffee",
    body: "Carefully sourced beans, cupped and dialled in by our baristas — pulled with patience for every cup.",
  },
  {
    icon: Sofa,
    title: "Cozy Ambience",
    body: "Soft jazz, warm timber, candle-light at dusk. Plenty of nooks for one — generous tables for many.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    body: "Seasonal produce, farm-fresh dairy, and house-baked sourdough that lands warm on your plate.",
  },
  {
    icon: Timer,
    title: "Fast Service",
    body: "A practiced bar team and a kitchen that moves quietly — your order, beautifully, in under nine minutes.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    body: "Hand-thrown ceramics, linen napkins, and the small touches that make an afternoon feel special.",
  },
  {
    icon: Flame,
    title: "Baked In-House",
    body: "Croissants, sourdough, and seasonal bakes from our own oven — out of the door warm, every morning.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-latte/40 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-10 right-[-5%] hidden lg:block font-display text-[20rem] leading-none text-espresso/[0.04] select-none pointer-events-none"
      >
        Why us
      </div>

      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Why The Entrance"
          title={
            <>
              Six small things that, together,
              <br />
              <span className="italic text-caramel">make a perfect hour.</span>
            </>
          }
          description="We obsess over the details so you don’t have to. Here’s what to expect on every visit."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-7 sm:p-8 rounded-3xl bg-cream border border-espresso/[0.06] hover:border-caramel/40 hover:-translate-y-1.5 transition-all duration-500 shadow-sm hover:shadow-soft"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-espresso text-cream group-hover:bg-caramel transition-colors duration-500">
                <f.icon className="h-6 w-6" />
              </div>
              <div className="mt-6 font-display text-2xl text-espresso">{f.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-espresso/65">
                {f.body}
              </p>
              <span className="absolute top-6 right-6 text-[10px] tracking-widest2 text-espresso/30">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
