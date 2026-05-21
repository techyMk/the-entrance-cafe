"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/content";
import { cn } from "@/lib/utils";

const layout = [
  "row-span-2",
  "",
  "",
  "",
  "row-span-2",
  "",
  "",
  "",
  "col-span-2 sm:col-span-1",
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="The Atmosphere"
            title={
              <>
                A room that <span className="italic text-caramel">slows you down.</span>
              </>
            }
            description="Soft lamp-light, worn timber floors, and the gentle clatter of porcelain. Spend a minute with us through the lens of those who’ve stayed."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px]">
          {images.gallery.map((src, i) => (
            <motion.figure
              key={src + i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-latte/50 shadow-card",
                layout[i]
              )}
            >
              <Image
                src={src}
                alt={`Cafe moment ${i + 1}`}
                fill
                loading="lazy"
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-cream opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] uppercase tracking-widest2">
                  #entranceCafe
                </span>
                <span className="text-[10px] uppercase tracking-widest2">
                  0{i + 1}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
