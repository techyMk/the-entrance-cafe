"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Chapter } from "@/components/ui/Chapter";
import { brand } from "@/lib/content";

export function Visit() {
  const mapSrc =
    "https://www.google.com/maps?q=4%2F63%2C+Taylors+Road%2C+Kilpauk%2C+Chennai%2C+Tamil+Nadu+600010&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <Container className="relative">
        <Chapter number={6} label="Find Us" />
        <SectionHeading
          className="mt-5"
          title={
            <>
              Pull up a chair —
              <br />
              <span className="italic text-caramel">we’ve saved you one.</span>
            </>
          }
          description="On Taylors Road in the heart of Kilpauk — easy parking, a quick auto from Kilpauk Metro. Walk-ins welcome; reservations recommended for weekends and brunch."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-card border border-espresso/5 bg-latte/40 min-h-[420px]"
          >
            <iframe
              title="The Entrance Cafe location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
              style={{ filter: "sepia(15%) hue-rotate(-10deg) saturate(0.9)" }}
            />
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3 pointer-events-none">
              <span className="rounded-full bg-cream/95 text-espresso px-4 py-2 text-[11px] uppercase tracking-widest2 shadow-card backdrop-blur">
                Find Us
              </span>
              <span className="rounded-full bg-espresso text-cream px-4 py-2 text-[11px] uppercase tracking-widest2 shadow-card">
                Open Now
              </span>
            </div>
          </motion.div>

          {/* Info cards */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-espresso text-cream p-7 sm:p-8 shadow-card"
            >
              <div className="flex items-center gap-3 text-caramel">
                <Clock className="h-5 w-5" />
                <span className="text-[11px] uppercase tracking-widest2">Opening Hours</span>
              </div>
              <ul className="mt-5 space-y-3">
                {brand.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between text-sm border-b border-cream/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-cream/80">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl bg-white border border-espresso/5 p-7 sm:p-8 shadow-card"
            >
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-caramel" />
                <div>
                  <div className="text-[11px] uppercase tracking-widest2 text-caramel">
                    Find us at
                  </div>
                  <p className="mt-2 font-display text-xl leading-snug text-espresso">
                    {brand.address}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-espresso/80">
                <Phone className="h-4 w-4 text-caramel" />
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="hover:text-espresso transition"
                >
                  {brand.phone}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink
                  href="https://www.google.com/maps/dir/?api=1&destination=4%2F63%2C+Taylors+Road%2C+Kilpauk%2C+Chennai%2C+Tamil+Nadu+600010"
                  variant="primary"
                  size="sm"
                  arrow
                >
                  <Navigation className="h-4 w-4" />
                  Directions
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="sm">
                  Reserve a Table
                </ButtonLink>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
