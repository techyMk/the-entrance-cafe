"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  // Duplicate the list so the marquee can loop seamlessly.
  const row = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Said by Regulars"
          title={
            <>
              Words from the people <br />
              <span className="italic text-caramel">who keep coming back.</span>
            </>
          }
        />
      </Container>

      <div className="relative mt-14 overflow-hidden">
        {/* Edge fades — gradient overlays of the section bg blend the marquee into the page */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-cream to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-cream to-transparent"
        />
        <motion.div
          className="flex w-max gap-5 px-5 py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {row.map((t, i) => (
            <figure
              key={i}
              className="w-[88vw] sm:w-[420px] shrink-0 rounded-3xl bg-white/80 backdrop-blur-sm border border-espresso/5 p-7 sm:p-8 shadow-card"
            >
              <Quote className="h-7 w-7 text-caramel" />
              <blockquote className="mt-5 font-display text-2xl leading-snug text-espresso text-balance">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-2.5">
                <StarRating value={t.rating} size={13} />
                <span className="text-[11px] uppercase tracking-widest2 text-espresso/45">
                  {t.rating.toFixed(1)} · Verified
                </span>
              </div>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-espresso text-cream font-display text-lg">
                  {t.name[0]}
                </span>
                <div>
                  <div className="text-sm font-medium text-espresso">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-widest2 text-espresso/55">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
