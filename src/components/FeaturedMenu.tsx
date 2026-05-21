"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Coffee } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { Chapter } from "@/components/ui/Chapter";
import { menu } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FeaturedMenu() {
  const [featured, ...rest] = menu;

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      {/* Decorative type */}
      <div
        aria-hidden
        className="absolute -top-6 right-[-4%] hidden lg:block font-display text-[22rem] leading-none text-espresso/[0.035] select-none pointer-events-none"
      >
        Menu
      </div>

      <Container className="relative">
        <Chapter number={2} label="The Table" />
        <div className="mt-5 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            title={
              <>
                Slow-crafted. <span className="italic text-caramel">Quietly bold.</span>
              </>
            }
            description="Every drink and every plate is built from scratch, in-house. Seasonal produce, hand-folded pastries, single-origin coffee — quietly considered."
          />
          <ButtonLink href="#visit" variant="secondary" size="md" arrow>
            View Full Menu
          </ButtonLink>
        </div>

        {/* Bento — featured card spans 2 cols on lg */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 auto-rows-fr">
          {/* Featured card */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2 group"
          >
            <TiltCard intensity={4} className="h-full">
              <div className="relative h-full min-h-[480px] rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-500">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  loading="lazy"
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/35 to-transparent" />
                <div className="absolute inset-0 grain pointer-events-none opacity-50" />

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream/95 px-3.5 py-1.5 text-[10px] uppercase tracking-widest2 text-espresso shadow-card">
                    <Coffee className="h-3 w-3 text-caramel" />
                    Signature
                  </span>
                  <span className="font-display text-[11px] tracking-widest2 text-cream/70 uppercase">
                    Chef’s Pick
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-cream">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                        {featured.name}
                      </h3>
                      <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-cream/80">
                        {featured.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[10px] uppercase tracking-widest2 text-cream/60">
                        From
                      </div>
                      <div className="font-display text-4xl sm:text-5xl text-cream">
                        {featured.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.article>

          {rest.map((item, idx) => {
            const n = idx + 2; // featured was 01
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: (idx % 4) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <TiltCard intensity={6} className="h-full">
                  <div className="relative h-full rounded-3xl bg-white/70 backdrop-blur-sm border border-espresso/5 overflow-hidden shadow-card hover:shadow-soft transition-all duration-500 flex flex-col">
                    <div className="relative aspect-[5/4] w-full overflow-hidden bg-latte/40">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        loading="lazy"
                        sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-espresso/55 via-espresso/10 to-transparent" />

                      <span className="absolute top-3.5 left-3.5 inline-flex items-center justify-center rounded-full bg-cream/95 h-7 w-7 text-[10px] tracking-widest2 text-espresso shadow-sm font-medium">
                        {n.toString().padStart(2, "0")}
                      </span>

                      {item.tag && (
                        <span className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full bg-espresso/85 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest2 text-cream">
                          <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
                          {item.tag}
                        </span>
                      )}

                      <span className="absolute bottom-3.5 right-3.5 rounded-full bg-cream text-espresso h-10 w-10 inline-flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-card">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-xl leading-tight text-espresso group-hover:text-caramel transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="shrink-0 font-display text-lg text-caramel">
                          {item.price}
                        </span>
                      </div>
                      <p className={cn(
                        "mt-2.5 text-[13px] leading-relaxed text-espresso/65 line-clamp-3"
                      )}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
