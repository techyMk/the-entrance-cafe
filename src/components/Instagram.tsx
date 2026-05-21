"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Instagram as InstaIcon,
  Layers,
  MessageCircle,
  Play,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { brand, instaPosts, type InstaPost } from "@/lib/content";
import { cn } from "@/lib/utils";

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`;
  return n.toLocaleString();
}

function PostTypeBadge({ type }: { type: InstaPost["type"] }) {
  const Icon = type === "reel" ? Play : type === "carousel" ? Layers : InstaIcon;
  return (
    <span className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-8 w-8 rounded-full bg-espresso/65 backdrop-blur-md text-cream">
      <Icon className="h-3.5 w-3.5" fill={type === "reel" ? "currentColor" : "none"} />
    </span>
  );
}

function PostCard({
  post,
  className,
  featured = false,
  index,
}: {
  post: InstaPost;
  className?: string;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative block overflow-hidden rounded-3xl bg-latte/40 shadow-card",
        className
      )}
      aria-label={`${post.caption} — open on Instagram`}
    >
      <Image
        src={post.image}
        alt={post.caption}
        fill
        loading="lazy"
        sizes={featured ? "(min-width:1024px) 66vw, 100vw" : "(min-width:1024px) 33vw, 50vw"}
        className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
      />

      {/* Gradient base — always visible, holds the engagement stats */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/15 to-transparent" />

      <PostTypeBadge type={post.type} />

      {featured && (
        <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 text-[10px] uppercase tracking-widest2 text-espresso shadow-card">
          <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
          Most Loved
        </span>
      )}

      {/* Persistent stats footer */}
      <div className={cn(
        "absolute inset-x-0 bottom-0 p-4 sm:p-5 text-cream",
        featured && "sm:p-7"
      )}>
        {featured && (
          <p className="mb-3 text-sm sm:text-base leading-snug text-cream/90 font-display text-balance max-w-md">
            “{post.caption}”
          </p>
        )}
        <div className="flex items-center gap-4 text-[12px] sm:text-[13px] font-medium">
          {typeof post.views === "number" && (
            <span className="inline-flex items-center gap-1.5">
              <Play className="h-3.5 w-3.5 fill-current" />
              {formatCount(post.views)}
              <span className="text-cream/55 font-normal ml-0.5 text-[11px]">views</span>
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Heart className="h-3.5 w-3.5 fill-current" />
            {formatCount(post.likes)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" />
            {formatCount(post.comments)}
          </span>
        </div>
      </div>

      {/* Caption reveal on hover (non-featured cards) */}
      {!featured && (
        <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-espresso via-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div>
            <p className="text-sm leading-snug text-cream text-balance font-display italic">
              “{post.caption}”
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest2 text-latte">
              <InstaIcon className="h-3 w-3" />
              View on Instagram
            </div>
          </div>
        </div>
      )}
    </motion.a>
  );
}

export function Instagram() {
  const featured = instaPosts.find((p) => p.featured) ?? instaPosts[0];
  const rest = instaPosts.filter((p) => p.id !== featured.id);

  return (
    <section className="relative py-24 sm:py-32 bg-latte/30 overflow-hidden">
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow={brand.social.instagramHandle}
            title={
              <>
                The week in <span className="italic text-caramel">window-seat moments.</span>
              </>
            }
            description="Six of our most-loved posts from this season. Tap any one to open it on Instagram."
          />
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="font-display text-4xl text-espresso tabular-nums leading-none">
                {brand.social.instagramFollowers.toLocaleString()}
              </span>
              <span className="text-[10px] uppercase tracking-widest2 text-espresso/55 mt-2">
                Instagram Followers
              </span>
            </div>
            <ButtonLink
              href={brand.social.instagram}
              variant="primary"
              arrow
              {...{ target: "_blank", rel: "noopener noreferrer" }}
            >
              Follow on Instagram
            </ButtonLink>
          </div>
        </div>

        {/* Bento: featured spans 2x2, five smaller cells fill around it */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px]">
          <PostCard
            post={featured}
            featured
            index={0}
            className="col-span-2 row-span-2"
          />
          {rest.slice(0, 5).map((p, i) => (
            <PostCard
              key={p.id}
              post={p}
              index={i + 1}
              className={cn(
                // First small card on desktop fills the last gap nicely
                i === 4 && "col-span-2 lg:col-span-1"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
