"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Navigation, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

export function MobileCTABar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="lg:hidden fixed bottom-4 inset-x-4 z-40"
        >
          <div className="rounded-full bg-espresso/95 backdrop-blur-md text-cream shadow-soft border border-cream/10 p-1.5 flex items-center gap-1.5">
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="flex-1 h-12 inline-flex items-center justify-center gap-2 rounded-full text-[13px] font-medium hover:bg-cream/10 transition"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=4%2F63%2C+Taylors+Road%2C+Kilpauk%2C+Chennai%2C+Tamil+Nadu+600010"
              className="flex-1 h-12 inline-flex items-center justify-center gap-2 rounded-full text-[13px] font-medium hover:bg-cream/10 transition"
              aria-label="Get directions"
            >
              <Navigation className="h-4 w-4" />
              Directions
            </a>
            <a
              href="#visit"
              className="flex-1 h-12 inline-flex items-center justify-center rounded-full bg-caramel text-cream text-[13px] font-medium hover:bg-cream hover:text-espresso transition"
            >
              Reserve
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
