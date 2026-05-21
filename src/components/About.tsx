"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, Leaf, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { StarRating } from "@/components/ui/StarRating";
import { images } from "@/lib/content";

const pillars = [
  {
    icon: Coffee,
    title: "Freshly Brewed Daily",
    body: "Brewed to order, never more than a few minutes from grind. Quietly precise, every time.",
  },
  {
    icon: Leaf,
    title: "Locally Sourced",
    body: "Dairy from a family farm in Coorg, sourdough from our own oven, produce from this morning’s market.",
  },
  {
    icon: Sparkles,
    title: "Specialty Coffee",
    body: "A rotating menu of single-origin beans from Chikmagalur, Yirgacheffe, and Antigua — pulled to suit each origin.",
  },
];

const stats = [
  { value: 4, suffix: "+", label: "Years of slow craft" },
  { value: 38, suffix: "", label: "Origins served" },
  { value: 100, suffix: "%", label: "Compostable take-away" },
  { value: 4.1, suffix: "", label: "Average rating", decimals: 1 },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-espresso text-cream overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />
      <div
        aria-hidden
        className="absolute -bottom-10 left-[-4%] hidden lg:block font-display text-[22rem] leading-none text-cream/[0.04] select-none pointer-events-none"
      >
        Story
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-soft"
            >
              <Image
                src={images.aboutPortrait}
                alt="Barista at work"
                fill
                loading="lazy"
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute -right-2 sm:-right-10 -bottom-10 w-40 sm:w-56 aspect-square rounded-3xl overflow-hidden border-[8px] border-espresso shadow-soft"
            >
              <Image
                src={images.aboutDetail}
                alt="Pour-over detail"
                fill
                loading="lazy"
                sizes="240px"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -left-3 sm:-left-8 top-10 rounded-2xl bg-cream/95 text-espresso p-4 shadow-soft backdrop-blur"
            >
              <div className="text-[10px] uppercase tracking-widest2 text-caramel">Est.</div>
              <div className="font-display text-3xl leading-none mt-1">2022</div>
            </motion.div>
          </div>

          {/* Copy */}
          <div>
            <SectionHeading
              invert
              eyebrow="Our Story"
              title={
                <>
                  A small room, a slow ritual,
                  <br />
                  <span className="italic text-latte">and a love for the craft.</span>
                </>
              }
              description="The Entrance began as a small counter on Taylors Road. Today, it’s a cafe, coffee house, and bakery — a quiet retreat for anyone who believes a good cup deserves a slower hour."
            />

            <div className="mt-10 space-y-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-5 items-start group"
                >
                  <span className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/10 border border-cream/15 text-caramel group-hover:bg-caramel group-hover:text-cream group-hover:border-caramel transition-all duration-500">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-cream">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/65 max-w-md">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <ButtonLink href="#gallery" variant="cream" arrow>
                Step Inside
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 rounded-3xl overflow-hidden border border-cream/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-espresso p-7 sm:p-9 relative overflow-hidden"
            >
              <Counter
                to={s.value}
                decimals={s.decimals ?? 0}
                suffix={s.suffix}
                className="block font-display text-5xl sm:text-6xl text-cream tracking-tight"
              />
              <div className="mt-2 flex items-center justify-between gap-3">
                <div className="text-[11px] uppercase tracking-widest2 text-cream/55">
                  {s.label}
                </div>
                {s.decimals === 1 && (
                  <StarRating
                    value={s.value}
                    size={13}
                    emptyClassName="text-cream/15"
                    filledClassName="text-latte"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
