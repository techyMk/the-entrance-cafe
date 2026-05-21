"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  {
    variants: {
      variant: {
        primary:
          "bg-espresso text-cream hover:bg-charcoal shadow-card hover:-translate-y-0.5",
        secondary:
          "bg-transparent text-espresso border border-espresso/30 hover:border-espresso hover:bg-espresso hover:text-cream",
        cream:
          "bg-cream text-espresso hover:bg-latte shadow-card hover:-translate-y-0.5",
        ghost:
          "bg-transparent text-cream border border-cream/40 hover:bg-cream hover:text-espresso backdrop-blur-sm",
        caramel:
          "bg-caramel text-cream hover:bg-espresso shadow-card hover:-translate-y-0.5",
      },
      size: {
        sm: "h-10 px-5 text-xs rounded-full",
        md: "h-12 px-7 text-sm rounded-full",
        lg: "h-14 px-9 text-sm rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: false;
    href?: never;
    arrow?: boolean;
  };

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    arrow?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, arrow, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </button>
  )
);
Button.displayName = "Button";

export function ButtonLink({
  className,
  variant,
  size,
  arrow,
  href,
  children,
  ...props
}: LinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </Link>
  );
}
