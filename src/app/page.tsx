import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Interstitial } from "@/components/Interstitial";
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
        {/* I — Arrival */}
        <Hero />
        <MarqueeStrip />

        {/* II — The Table */}
        <FeaturedMenu />

        {/* III — The Story */}
        <About />

        {/* IV — Experience The Space */}
        <Experience />

        {/* Editorial pause — sits between the immersive space and the lived-in moments */}
        <Interstitial attribution="A line we live by">
          {"An atmosphere\ndesigned to slow time."}
        </Interstitial>

        <Gallery />
        <WhyChooseUs />

        {/* V — Voices */}
        <Testimonials />
        <PressStrip />
        <Instagram />

        {/* VI — Find Us */}
        <Visit />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
