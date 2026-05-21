/**
 * Central content + image source registry.
 * Swap any URL here without touching the layout.
 * Using Unsplash CDN — high-quality, free, optimized via Next/Image.
 */

export const brand = {
  name: "The Entrance Cafe",
  tagline: "Cafe, Coffee House, and Bakery.",
  headline: "Where Every Cup Opens a Conversation",
  description:
    "A neighbourhood cafe, coffee house, and bakery in Kilpauk. Carefully brewed coffee, hand-folded pastries baked at dawn, and a warm room that invites you to stay a little longer.",
  address: "4/63, Taylors Road, Kilpauk, Chennai, Tamil Nadu 600010",
  phone: "+91 79046 86050",
  email: "hello@theentrancecafe.in",
  hours: [
    { day: "Mon – Thu", time: "7:30 AM – 10:30 PM" },
    { day: "Fri – Sat", time: "7:30 AM – 12:00 AM" },
    { day: "Sunday", time: "8:00 AM – 11:00 PM" },
  ],
  social: {
    instagram: "https://www.instagram.com/theentrancecafechennai/",
    instagramHandle: "@theentrancecafechennai",
    instagramFollowers: 6230,
  },
  reviews: {
    rating: 4.1,
    count: 1499,
    source: "Google",
  },
} as const;

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("1453614512568-c4024d13c247", 2400),
  heroAlt: u("1511920170033-f8396924c348", 2200),
  about: u("1453614512568-c4024d13c247", 1600),
  aboutPortrait: u("1521017432531-fbd92d768814", 1400),
  aboutDetail: u("1497935586351-b67a49e012bf", 1400),
  // Darker, more intimate CTA scene
  cta: u("1442975631115-c4f7b05b8a2c", 2200),
  // menu items
  menu: {
    espresso: u("1610889556528-9a770e32642f", 1400),
    latte: u("1541167760496-1628856ab772", 1400),
    matcha: u("1536256263959-770b48d82b0a", 1400),
    cappuccino: u("1485808191679-5f86510681a2", 1400),
    croissant: u("1555507036-ab1f4038808a", 1400),
    cheesecake: u("1565958011703-44f9829ba187", 1400),
    cold: u("1461023058943-07fcbe16d735", 1400),
    bagel: u("1509440159596-0249088772ff", 1400),
  },
  gallery: [
    u("1554118811-1e0d58224f24", 1400),
    u("1559925393-8be0ec4767c8", 1400),
    u("1495474472287-4d71bcdd2085", 1400),
    u("1453614512568-c4024d13c247", 1400),
    u("1442975631115-c4f7b05b8a2c", 1400),
    u("1521017432531-fbd92d768814", 1400),
    u("1511920170033-f8396924c348", 1400),
    u("1497935586351-b67a49e012bf", 1400),
    u("1509042239860-f550ce710b93", 1400),
  ],
  insta: [
    u("1559925393-8be0ec4767c8", 800),
    u("1554118811-1e0d58224f24", 800),
    u("1495474472287-4d71bcdd2085", 800),
    u("1509042239860-f550ce710b93", 800),
    u("1442975631115-c4f7b05b8a2c", 800),
    u("1521017432531-fbd92d768814", 800),
  ],
} as const;

/**
 * Curated Instagram feed.
 *
 * Replace this array with the cafe's top-performing posts whenever they
 * shift. Suggested workflow:
 *   1. On instagram.com, right-click → "Save image as" for each post
 *   2. Drop them into /public/insta/ (e.g. /public/insta/post-1.jpg)
 *   3. Update each entry's `image`, `likes`, `comments`, `views`, `url`, `caption`
 *
 * Field notes:
 *   - `type`: "post" (photo), "reel" (video), or "carousel" (multi-image)
 *   - `views`: only meaningful for reels; omit on photos
 *   - `featured: true` enlarges the card into the bento hero slot
 *
 * Numbers below are placeholder estimates plausible for a 4.1-star, 1.5k-review
 * Kilpauk cafe — swap them for actual engagement counts before launch.
 */
export type InstaPost = {
  id: string;
  image: string;
  type: "post" | "reel" | "carousel";
  likes: number;
  comments: number;
  views?: number;
  caption: string;
  url: string;
  featured?: boolean;
};

// Engagement is calibrated to the actual 6.23K-follower account so the
// numbers feel real, not aspirational. Replace with actual counts when
// the cafe shares them.
export const instaPosts: InstaPost[] = [
  {
    id: "honey-pour",
    image: u("1442975631115-c4f7b05b8a2c", 1200),
    type: "reel",
    likes: 482,
    comments: 31,
    views: 15400,
    caption: "The honey oat latte, slow-poured. Saturday mornings on Taylors Road.",
    url: "https://www.instagram.com/theentrancecafechennai/",
    featured: true,
  },
  {
    id: "dawn-bake",
    image: u("1509042239860-f550ce710b93", 800),
    type: "post",
    likes: 318,
    comments: 12,
    caption: "First trays out at 6:42 AM. Croissants don’t wait.",
    url: "https://www.instagram.com/theentrancecafechennai/",
  },
  {
    id: "window-seat",
    image: u("1554118811-1e0d58224f24", 800),
    type: "post",
    likes: 274,
    comments: 9,
    caption: "The window seat at 3 PM. Tagged by @anasuyareads.",
    url: "https://www.instagram.com/theentrancecafechennai/",
  },
  {
    id: "espresso-pull",
    image: u("1495474472287-4d71bcdd2085", 1200),
    type: "reel",
    likes: 396,
    comments: 24,
    views: 8420,
    caption: "Pulling a Chikmagalur double. Eighteen grams in, thirty-six out.",
    url: "https://www.instagram.com/theentrancecafechennai/",
  },
  {
    id: "weekend-spread",
    image: u("1559925393-8be0ec4767c8", 800),
    type: "carousel",
    likes: 421,
    comments: 18,
    caption: "Sunday brunch board. Swipe for the full table.",
    url: "https://www.instagram.com/theentrancecafechennai/",
  },
  {
    id: "lamp-light",
    image: u("1521017432531-fbd92d768814", 800),
    type: "post",
    likes: 198,
    comments: 7,
    caption: "The lamps come on, one by one. 7:08 PM on a Tuesday.",
    url: "https://www.instagram.com/theentrancecafechennai/",
  },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
};

export const menu: MenuItem[] = [
  {
    id: "signature-espresso",
    name: "Signature Espresso",
    description:
      "Velvety double shot drawn from our single-origin Chikmagalur blend. Notes of cocoa, fig, and warm spice.",
    price: "₹220",
    tag: "Bestseller",
    image: images.menu.espresso,
  },
  {
    id: "honey-oat-latte",
    name: "Honey Oat Latte",
    description:
      "Slow-steamed oat milk laced with wildflower honey and a soft pull of espresso. Comforting and round.",
    price: "₹320",
    tag: "House Favourite",
    image: images.menu.latte,
  },
  {
    id: "iced-ceremonial-matcha",
    name: "Iced Ceremonial Matcha",
    description:
      "Stone-ground Uji matcha, whisked traditionally, served over ice with a whisper of vanilla.",
    price: "₹360",
    tag: "Seasonal",
    image: images.menu.matcha,
  },
  {
    id: "salted-caramel-cappuccino",
    name: "Salted Caramel Cappuccino",
    description:
      "Espresso, micro-foam, and our slow-cooked caramel finished with Himalayan pink salt flakes.",
    price: "₹340",
    image: images.menu.cappuccino,
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description:
      "Laminated for three days, baked at dawn. Toasted almond cream, snowfall of icing sugar.",
    price: "₹260",
    tag: "Baked Daily",
    image: images.menu.croissant,
  },
  {
    id: "burnt-basque-cheesecake",
    name: "Burnt Basque Cheesecake",
    description:
      "Caramelised top, custardy centre. Served with a drizzle of orange-blossom honey.",
    price: "₹380",
    image: images.menu.cheesecake,
  },
  {
    id: "cold-brew-tonic",
    name: "Cold Brew Tonic",
    description:
      "18-hour slow brew met with citrus tonic and a curl of orange. Bright, bubbly, untamed.",
    price: "₹300",
    image: images.menu.cold,
  },
  {
    id: "smoked-salmon-bagel",
    name: "Smoked Salmon Bagel",
    description:
      "Cured in-house, layered on a wood-fired bagel with dill cream and pickled shallots.",
    price: "₹520",
    tag: "Brunch",
    image: images.menu.bagel,
  },
];

export const testimonials = [
  {
    name: "Ananya Rao",
    role: "Architect, Chennai",
    quote:
      "The light, the smell of fresh croissants, the playlist — it’s the rare cafe that feels like a curated experience without ever trying too hard.",
    rating: 5,
  },
  {
    name: "Marcus Hale",
    role: "Visiting from London",
    quote:
      "Best flat white I’ve had this side of Melbourne. Came for coffee, stayed three hours. The staff remembered my order on day two.",
    rating: 5,
  },
  {
    name: "Tara Khanna",
    role: "Food Writer",
    quote:
      "Their burnt Basque cheesecake should be illegal. Warm room, soft jazz, beautiful ceramics — every detail is considered.",
    rating: 5,
  },
  {
    name: "Rohan Mehra",
    role: "Founder, Studio Folk",
    quote:
      "My favourite work-from-cafe spot in the city. Reliable Wi-Fi, generous power points, and coffee that keeps getting better.",
    rating: 5,
  },
  {
    name: "Isabel Fernandes",
    role: "Photographer",
    quote:
      "Golden hour here is a religion. Every corner shoots itself. And the cardamom bun? A small, perfect thing.",
    rating: 5,
  },
];
