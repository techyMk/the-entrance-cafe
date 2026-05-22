import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { brand } from "@/lib/content";

const cols = [
  {
    title: "Visit",
    links: [
      { label: "Menu", href: "#menu" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reservations", href: "#visit" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: brand.social.instagramHandle, href: brand.social.instagram },
      { label: "Press Kit", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Today",
    links: [
      { label: "Reserve a Table", href: "#visit" },
      { label: "Get Directions", href: "https://www.google.com/maps/dir/?api=1&destination=4%2F63%2C+Taylors+Road%2C+Kilpauk%2C+Chennai%2C+Tamil+Nadu+600010" },
      { label: "Order Online", href: "#" },
      { label: "Gift Cards", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <Logo size={72} />
              <div>
                <div className="font-display text-2xl leading-none tracking-tight text-cream">
                  The Entrance Cafe
                </div>
                <div className="text-[10px] uppercase tracking-widest2 text-cream/55 mt-1.5">
                  {brand.tagline}
                </div>
              </div>
            </div>
            <p className="mt-7 text-sm leading-relaxed text-cream/65 max-w-sm">
              {brand.description}
            </p>
            <ul className="mt-7 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-caramel shrink-0" />
                {brand.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-caramel shrink-0" />
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-cream transition">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-caramel shrink-0" />
                <a href={`mailto:${brand.email}`} className="hover:text-cream transition">
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-3 gap-6 sm:gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] uppercase tracking-widest2 text-caramel">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-cream/75 hover:text-cream transition relative inline-block group"
                      >
                        {l.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-caramel transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter strip */}
        <div className="mt-16 rounded-3xl border border-cream/10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between bg-cream/[0.03]">
          <div>
            <div className="font-display text-2xl text-cream">Letters from the Bar</div>
            <div className="text-sm text-cream/60 mt-1">
              New menus, seasonal pours, and quiet invitations — once a month.
            </div>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] uppercase tracking-widest2 text-cream/50">
          <span className="order-2 sm:order-1">© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <a
            href={brand.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${brand.name} on Instagram`}
            className="order-1 sm:order-2 inline-flex items-center gap-2 hover:text-cream transition"
          >
            <Instagram className="h-4 w-4" />
            {brand.social.instagramHandle}
          </a>
          <div className="order-3 flex items-center gap-5">
            <a href="#" className="hover:text-cream transition">Privacy</a>
            <a href="#" className="hover:text-cream transition">Terms</a>
          </div>
        </div>
      </Container>

      {/* Oversized brand text */}
      <div
        aria-hidden
        className="select-none pointer-events-none mt-14 -mb-10 text-center font-display leading-[0.85] tracking-tightest"
        style={{ fontSize: "clamp(4rem, 18vw, 16rem)" }}
      >
        <span className="bg-gradient-to-b from-cream/15 to-transparent bg-clip-text text-transparent">
          The Entrance
        </span>
      </div>
    </footer>
  );
}
