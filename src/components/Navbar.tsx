"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { brand } from "@/lib/content";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow,padding] duration-500 ease-out",
          scrolled
            ? "bg-cream/80 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(28,28,28,0.25)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <Container className="flex items-center justify-between gap-6">
          <Logo size={scrolled ? 56 : 72} />

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[13px] font-medium tracking-wide transition-colors duration-300 group",
                  scrolled
                    ? "text-espresso/80 hover:text-espresso"
                    : "text-cream/85 hover:text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-0 transition-all duration-300 group-hover:w-full",
                    scrolled ? "bg-caramel" : "bg-cream"
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className={cn(
                "inline-flex items-center gap-2 text-[13px] transition-colors duration-300",
                scrolled
                  ? "text-espresso/80 hover:text-espresso"
                  : "text-cream/85 hover:text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {brand.phone}
            </a>
            <ButtonLink
              href="#visit"
              size="sm"
              variant={scrolled ? "primary" : "cream"}
              arrow
            >
              Reserve
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={cn(
              "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border transition",
              scrolled
                ? "bg-espresso/5 border-espresso/10 text-espresso hover:bg-espresso hover:text-cream"
                : "bg-cream/15 border-cream/30 text-cream backdrop-blur-md hover:bg-cream hover:text-espresso"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-cream shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-espresso/10">
                <Logo size={64} />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-espresso/5 border border-espresso/10 text-espresso hover:bg-espresso hover:text-cream transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1">
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline justify-between py-4 border-b border-espresso/10 font-display text-3xl text-espresso hover:text-caramel transition"
                      >
                        <span>{link.label}</span>
                        <span className="text-[11px] tracking-widest2 text-espresso/40 font-sans">
                          0{i + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="p-6 border-t border-espresso/10 space-y-4">
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="block text-sm text-espresso/80"
                >
                  <span className="block text-[11px] tracking-widest2 text-caramel uppercase mb-1">
                    Call us
                  </span>
                  {brand.phone}
                </a>
                <ButtonLink href="#visit" size="md" variant="primary" arrow className="w-full">
                  Reserve a Table
                </ButtonLink>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
