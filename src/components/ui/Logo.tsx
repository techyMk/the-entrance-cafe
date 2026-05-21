import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { brand } from "@/lib/content";

/**
 * Logo mark. Source is a 960×960 JPG (white background). We crop to a
 * circle to drop the empty corners of the square, then apply
 * `mix-blend-mode: multiply` so the remaining white interior blends
 * into whatever surface sits behind it.
 */
export function Logo({
  className,
  size = 72,
  href = "#home",
  bare = false,
}: {
  className?: string;
  size?: number;
  href?: string;
  /** Render without the surrounding link wrapper. */
  bare?: boolean;
  /** Kept for API compatibility; no visual difference. */
  invert?: boolean;
}) {
  const inner = (
    <span
      className="relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-500"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.jpg"
        alt={brand.name}
        width={size}
        height={size}
        priority
        sizes={`${size}px`}
        className="block object-cover"
        style={{
          width: size,
          height: size,
          mixBlendMode: "multiply",
        }}
      />
    </span>
  );

  if (bare) return inner;

  return (
    <Link
      href={href}
      aria-label={`${brand.name} — home`}
      className={cn(
        "inline-flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-full",
        className
      )}
    >
      {inner}
    </Link>
  );
}
