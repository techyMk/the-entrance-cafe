import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { PressStrip } from "@/components/PressStrip";
import { Instagram } from "@/components/Instagram";
import { Visit } from "@/components/Visit";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { brand } from "@/lib/content";

const jsonLd = (b: typeof brand) => ({
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: b.name,
  description: b.description,
  telephone: b.phone,
  email: b.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "4/63, Taylors Road, Kilpauk",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600010",
    addressCountry: "IN",
  },
  url: "https://entrancecafe.in",
  servesCuisine: ["Coffee", "Brunch", "Bakery"],
  priceRange: "$$",
  openingHours: ["Mo-Th 07:30-22:30", "Fr-Sa 07:30-24:00", "Su 08:00-23:00"],
  image: "https://entrancecafe.in/logo.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(b.reviews.rating),
    reviewCount: String(b.reviews.count),
  },
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(brand)) }}
      />
      <Navbar />
      <main className="relative">
        <Hero />
        <MarqueeStrip />
        <FeaturedMenu />
        <About />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <PressStrip />
        <Instagram />
        <Visit />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
