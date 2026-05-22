"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { brand, images } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax with restraint — the heavier work is the always-on ken-burns below.
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-espresso"
    >
      {/* Background — long, slow ken-burns. Combined with scroll parallax. */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.22 }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={images.hero}
            alt="The Entrance Cafe — interior on Taylors Road"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Warm cinematic overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(183,121,67,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/45 via-espresso/30 to-espresso/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/65 via-transparent to-transparent" />

      {/* Soft vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 220px 60px rgba(0,0,0,0.55)",
        }}
      />

      {/* Subtle grain */}
      <div className="absolute inset-0 grain pointer-events-none opacity-90" />

      {/* Top tag rail */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="absolute top-28 inset-x-0 z-10 hidden md:flex justify-center"
      >
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-cream/70">
          <span className="h-px w-10 bg-cream/30" />
          Est. 2022 · Kilpauk, Chennai
          <span className="h-px w-10 bg-cream/30" />
        </span>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full">
        <Container className="h-full flex flex-col justify-end pb-24 sm:pb-28">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <span className="eyebrow text-latte">
                <span className="h-px w-8 bg-latte/60" />
                Cafe · Coffee House · Bakery
              </span>
            </motion.div>

            <MaskReveal as="h1" className="display-h1 text-cream mt-7 text-balance">
              {"Where Every Cup\nOpens a Conversation"}
            </MaskReveal>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.9 }}
              className="mt-8 max-w-xl text-cream/80 text-base sm:text-lg leading-relaxed"
            >
              Hidden away from the city’s rush — a small room of warm timber,
              soft light, and slow conversations. Coffee, brewed with care.
              Pastries, baked at dawn. An hour you’ll want to keep for yourself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.9 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4"
            >
              <Magnetic className="inline-block">
                <ButtonLink href="#menu" variant="cream" size="lg" arrow className="w-full sm:w-auto">
                  Explore the Menu
                </ButtonLink>
              </Magnetic>
              <Magnetic strength={0.18} className="inline-block">
                <ButtonLink href="#visit" variant="ghost" size="lg" className="w-full sm:w-auto">
                  Visit the Cafe
                </ButtonLink>
              </Magnetic>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Floating review badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute right-8 lg:right-16 bottom-32 z-10"
      >
        <div className="relative w-72 rounded-2xl bg-cream/95 backdrop-blur-md p-6 shadow-soft border border-cream/40">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="font-display text-5xl leading-none text-espresso">
                {brand.reviews.rating.toFixed(1)}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest2 text-espresso/45">
                out of 5
              </div>
            </div>
            <StarRating value={brand.reviews.rating} size={20} className="pb-1" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-espresso/85">
            “A quiet, considered cafe — warm staff, beautiful coffee, the kind of room you don’t want to leave.”
          </p>
          <div className="mt-5 pt-4 border-t border-espresso/10 flex items-center justify-between text-[11px] uppercase tracking-widest2 text-espresso/50">
            <span>{brand.reviews.count.toLocaleString()} reviews</span>
            <span className="text-caramel font-medium">{brand.reviews.source}</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.9 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10 flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
