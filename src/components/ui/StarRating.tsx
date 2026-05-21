import { cn } from "@/lib/utils";

/**
 * Hand-tuned star geometry — sharper points, slimmer waist than lucide's
 * default. Reads as a refined editorial mark rather than a chunky icon.
 * Both layers render filled paths so fractional fills look like a smooth
 * colour blend.
 */
function StarGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="shrink-0"
    >
      {/* slim 5-point star, classical proportions */}
      <path d="M12 1.6 L14.65 8.95 L22.5 9.5 L16.4 14.55 L18.3 22.3 L12 18.05 L5.7 22.3 L7.6 14.55 L1.5 9.5 L9.35 8.95 Z" />
    </svg>
  );
}

export function StarRating({
  value,
  max = 5,
  size = 16,
  className,
  emptyClassName = "text-caramel/20",
  filledClassName = "text-caramel",
}: {
  value: number;
  max?: number;
  size?: number;
  className?: string;
  emptyClassName?: string;
  filledClassName?: string;
}) {
  const pct = Math.max(0, Math.min(value / max, 1)) * 100;
  const gap = Math.max(2, Math.round(size * 0.18));

  const row = (cls: string) => (
    <div className={cn("flex", cls)} style={{ gap }} aria-hidden>
      {Array.from({ length: max }).map((_, i) => (
        <StarGlyph key={i} size={size} />
      ))}
    </div>
  );

  return (
    <div
      role="img"
      aria-label={`${value.toFixed(1)} out of ${max} stars`}
      className={cn("relative inline-flex", className)}
    >
      {row(emptyClassName)}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        {row(filledClassName)}
      </div>
    </div>
  );
}
