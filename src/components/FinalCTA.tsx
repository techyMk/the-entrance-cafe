"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/lib/content";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate overflow-hidden bg-espresso text-cream"
    >
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <Image
          src={images.cta}
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-50"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/75 to-espresso/95" />
      <div className="absolute inset-0 grain pointer-events-none opacity-60" />

      <Container className="relative py-28 sm:py-40 text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-latte justify-center"
        >
          <span className="h-px w-8 bg-latte/60" />
          See You Soon
          <span className="h-px w-8 bg-latte/60" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="display-h1 text-cream mt-6 text-balance"
        >
          Your next favourite
          <br />
          <span className="italic font-light text-latte">coffee spot awaits.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 max-w-xl mx-auto text-cream/75 text-base sm:text-lg leading-relaxed"
        >
          Book a window seat for the weekend brunch, or wander in on a quiet
          weekday afternoon. The kettle is on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <ButtonLink href="#visit" variant="cream" size="lg" arrow>
            Book a Table
          </ButtonLink>
          <ButtonLink
            href="https://www.google.com/maps/dir/?api=1&destination=4%2F63%2C+Taylors+Road%2C+Kilpauk%2C+Chennai%2C+Tamil+Nadu+600010"
            variant="ghost"
            size="lg"
          >
            Get Directions
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}
