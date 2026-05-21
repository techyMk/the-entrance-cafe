"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Chapter } from "@/components/ui/Chapter";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { images } from "@/lib/content";

type Moment = {
  hour: string;
  title: string;
  body: string;
  image: string;
};

const moments: Moment[] = [
  {
    hour: "07:30",
    title: "Arrival",
    body: "The door swings open to a low hum of grinders, warm timber underfoot, and a soft light that hasn’t quite found its corners yet.",
    image: images.hero,
  },
  {
    hour: "10:42",
    title: "The Counter",
    body: "A slow pour. A careful tare. Three seconds of silence at the scale. The first cup of the day is a ritual you can watch.",
    image: images.gallery[2],
  },
  {
    hour: "14:15",
    title: "The Window Seat",
    body: "Sunlight angles low across the table. A book, a flat white, an hour with no agenda. The city carries on without you.",
    image: images.gallery[5],
  },
  {
    hour: "19:08",
    title: "At Dusk",
    body: "The lamps come on, one by one. Bread cools on the counter. Conversations soften. The room remembers everyone who passed through today.",
    image: images.gallery[1],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-ink text-cream">
      {/* Desktop — sticky horizontal scroll */}
      <DesktopExperience />
      {/* Mobile — vertical narrative stack */}
      <MobileExperience />
    </section>
  );
}

function DesktopExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // 0 = first panel aligned left, end = last panel aligned right
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(moments.length - 1) * 100}vw`]);

  return (
    <div
      ref={ref}
      className="hidden lg:block relative"
      style={{ height: `${moments.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <FixedIntro scrollYProgress={scrollYProgress} />

        <motion.div style={{ x }} className="flex h-full will-change-transform">
          {moments.map((m, i) => (
            <Panel key={m.title} moment={m} index={i} total={moments.length} />
          ))}
        </motion.div>

        <ChapterRail scrollYProgress={scrollYProgress} count={moments.length} />
      </div>
    </div>
  );
}

function MobileExperience() {
  return (
    <div className="lg:hidden py-20 bg-ink">
      <Container>
        <Chapter number={4} label="Experience The Space" invert />
        <MaskReveal as="h2" className="display-h2 text-cream mt-5 text-balance">
          {"A room designed\nto slow time."}
        </MaskReveal>
        <p className="mt-5 text-cream/65 text-base leading-relaxed max-w-md">
          Four moments from a single day on Taylors Road.
        </p>
      </Container>

      <div className="mt-12 space-y-10">
        {moments.map((m, i) => (
          <motion.article
            key={m.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            className="px-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src={m.image}
                alt={m.title}
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-baseline gap-3 text-[11px] tracking-widest2 uppercase text-cream/60">
                  <span className="text-latte tabular-nums">{m.hour}</span>
                  <span className="h-px flex-1 bg-cream/15" />
                  <span>0{i + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-4xl text-cream leading-tight">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">
                  {m.body}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function FixedIntro({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute z-20 top-1/2 left-12 -translate-y-1/2 max-w-md pointer-events-none"
    >
      <Chapter number={4} label="Experience The Space" invert />
      <MaskReveal as="h2" className="display-h2 text-cream mt-5">
        {"A room designed\nto slow time."}
      </MaskReveal>
      <p className="mt-6 text-cream/65 text-base leading-relaxed">
        Four moments from a single day on Taylors Road. Scroll to wander
        through the room as the light shifts.
      </p>
    </motion.div>
  );
}

function Panel({
  moment,
  index,
  total,
}: {
  moment: Moment;
  index: number;
  total: number;
}) {
  return (
    <article className="relative h-screen w-screen shrink-0 flex items-end overflow-hidden">
      <Image
        src={moment.image}
        alt={moment.title}
        fill
        loading={index === 0 ? "eager" : "lazy"}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/15" />
      <div className="absolute inset-0 grain pointer-events-none opacity-60" />

      {/* Hour marker — top right */}
      <div className="absolute top-12 right-12 text-right">
        <div className="text-[10px] uppercase tracking-widest2 text-cream/55">
          0{index + 1} / {total.toString().padStart(2, "0")}
        </div>
        <div className="mt-2 font-display text-5xl text-latte tabular-nums">
          {moment.hour}
        </div>
      </div>

      {/* Caption — bottom right */}
      <div className="relative z-10 ml-auto mr-12 mb-24 max-w-md">
        <h3 className="font-display text-6xl text-cream tracking-tight leading-[0.95]">
          {moment.title}
        </h3>
        <p className="mt-5 text-cream/80 text-base leading-relaxed">
          {moment.body}
        </p>
      </div>
    </article>
  );
}

function ChapterRail({
  scrollYProgress,
  count,
}: {
  scrollYProgress: MotionValue<number>;
  count: number;
}) {
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute bottom-10 left-12 right-12 z-20 pointer-events-none">
      <div className="flex items-center gap-4 text-[10px] tracking-widest2 uppercase text-cream/55">
        <span>Chapter IV</span>
        <div className="relative h-px flex-1 bg-cream/15 overflow-hidden">
          <motion.div style={{ width: progress }} className="absolute inset-y-0 left-0 bg-latte" />
        </div>
        <span>{count} Moments</span>
      </div>
    </div>
  );
}
