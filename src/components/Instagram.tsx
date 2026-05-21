"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Instagram as InstaIcon, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { images, brand } from "@/lib/content";

export function Instagram() {
  return (
    <section className="relative py-24 sm:py-32 bg-latte/30 overflow-hidden">
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow={brand.social.instagramHandle}
            title={
              <>
                Postcards from the <span className="italic text-caramel">window seat.</span>
              </>
            }
            description="Tag us in your morning ritual — we feature a regular every Sunday."
          />
          <ButtonLink href={brand.social.instagram} variant="primary" arrow>
            Follow on Instagram
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {images.insta.map((src, i) => (
            <motion.a
              key={src + i}
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-latte/50 shadow-card"
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                loading="lazy"
                sizes="(min-width:1024px) 16vw, (min-width:640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/55 transition-colors duration-300 flex flex-col items-center justify-center text-cream gap-3 opacity-0 group-hover:opacity-100">
                <InstaIcon className="h-6 w-6" />
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5 fill-current" /> 2.4k
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" /> 48
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
