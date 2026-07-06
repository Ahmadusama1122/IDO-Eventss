export interface HireItem {
  slug: string;
  name: string;
  category: string;
  occasions: string[];
  price: number;
  description: string;
  includes: string[];
  image: string;
}

export const CATEGORIES = [
  "backdrops",
  "florals",
  "balloons",
  "furniture",
  "signage",
  "packages",
  "draping",
  "lighting",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<string, string> = {
  backdrops: "Backdrops",
  florals: "Florals",
  balloons: "Balloons",
  furniture: "Furniture",
  signage: "Signage",
  packages: "Packages",
  draping: "Draping",
  lighting: "Lighting",
};

export const OCCASION_LABELS: Record<string, string> = {
  weddings: "Weddings",
  birthdays: "Birthdays",
  "christenings-baptisms": "Christenings",
  "baby-showers": "Baby Showers",
  engagements: "Engagements",
  corporate: "Corporate",
};

export const hireItems: HireItem[] = [
  // --- Packages (4 homepage packages) ---
  {
    slug: "rustic-romance-package",
    name: "Rustic Romance Package",
    category: "packages",
    occasions: ["weddings", "engagements"],
    price: 450,
    description:
      "Our most-loved wedding and engagement styling package. Rustic Romance brings warm timber tones, lush greenery, and soft candlelight together for an effortlessly elegant atmosphere. Perfect for barn venues, garden ceremonies, and rustic reception halls.",
    includes: [
      "Timber arch backdrop with draping",
      "2 x wooden plinth pedestals",
      "Faux greenery garland for arch",
      "6 x glass jar centrepieces with candles",
      "Welcome sign on easel",
      "Full delivery, setup & pack-down",
    ],
    image: "/gallery/weddings/weddings-1.jpg",
  },
  {
    slug: "modern-luxe-package",
    name: "Modern Luxe Package",
    category: "packages",
    occasions: ["weddings", "engagements", "corporate"],
    price: 650,
    description:
      "Sleek, sophisticated, and statement-making. The Modern Luxe package features clean lines, metallic accents, and premium florals for a high-end feel. Ideal for couples and corporates who want a polished, contemporary look that photographs beautifully.",
    includes: [
      "Gold hexagonal arch backdrop",
      "3 x white plinth set with floral toppers",
      "10 x premium faux floral centrepieces",
      "Neon sign hire (choice of text)",
      "Gold candelabras for tables",
      "Sequin table runner",
      "Full delivery, setup & pack-down",
    ],
    image: "/gallery/engagements/engagements-1.jpg",
  },
  {
    slug: "garden-party-package",
    name: "Garden Party Package",
    category: "packages",
    occasions: ["birthdays", "baby-showers", "christenings-baptisms"],
    price: 380,
    description:
      "Light, fresh, and full of charm. The Garden Party package is perfect for outdoor celebrations, baby showers, and milestone birthdays. Soft pastels, balloon garlands, and whimsical details create a space that feels joyful and Instagram-worthy.",
    includes: [
      "Pastel balloon garland (3m)",
      "Backdrop frame with fabric draping",
      "Dessert table styling (table not included)",
      "4 x mason jar centrepieces",
      "Letter board welcome sign",
      "Full delivery, setup & pack-down",
    ],
    image: "/gallery/baby-showers/baby-showers-1.jpg",
  },
  {
    slug: "classic-elegance-package",
    name: "Classic Elegance Package",
    category: "packages",
    occasions: ["weddings", "christenings-baptisms", "engagements"],
    price: 550,
    description:
      "Timeless and refined, the Classic Elegance package is designed for celebrations that call for a formal, graceful aesthetic. White florals, crystal accents, and soft draping create a sophisticated atmosphere that never goes out of style.",
    includes: [
      "Round arch backdrop with white draping",
      "3 x white plinth set",
      "8 x crystal vase centrepieces with faux florals",
      "White feather tree feature",
      "Personalised welcome sign",
      "Fairy light curtain backdrop",
      "Full delivery, setup & pack-down",
    ],
    image: "/gallery/christenings-baptisms/christenings-baptisms-1.jpg",
  },

  // --- Backdrops ---
  {
    slug: "rustic-arch-backdrop",
    name: "Rustic Arch Backdrop",
    category: "backdrops",
    occasions: ["weddings", "engagements", "christenings-baptisms"],
    price: 180,
    description:
      "A stunning timber arch that sets the scene for any ceremony or photo opportunity. The warm natural wood finish pairs beautifully with greenery, florals, or draping fabric. Available as a standalone hire or as part of a full styling package.",
    includes: [
      "Timber arch frame (2.2m tall)",
      "Choice of faux greenery garland or fabric draping",
      "Delivery, setup & pack-down",
    ],
    image: "/gallery/weddings/weddings-2.jpg",
  },
  {
    slug: "gold-hexagonal-arch",
    name: "Gold Hexagonal Arch",
    category: "backdrops",
    occasions: ["weddings", "engagements", "corporate"],
    price: 200,
    description:
      "Our gold hexagonal arch makes a bold, modern statement at any event. The geometric design looks incredible dressed with florals or left clean for a minimalist aesthetic. A favourite for weddings, engagement parties, and corporate product launches.",
    includes: [
      "Gold metal hexagonal arch (2.4m tall)",
      "Base stabiliser weights",
      "Delivery, setup & pack-down",
    ],
    image: "/gallery/engagements/engagements-2.jpg",
  },
  {
    slug: "round-moongate-arch",
    name: "Round Moongate Arch",
    category: "backdrops",
    occasions: ["weddings", "baby-showers", "birthdays", "christenings-baptisms"],
    price: 190,
    description:
      "The circular moongate arch creates a dreamy, ethereal frame for your event. Perfect for ceremonies, dessert tables, or as a standalone photo backdrop. It looks stunning wrapped in florals, balloons, or sheer fabric for a soft, romantic finish.",
    includes: [
      "White metal circular arch (2m diameter)",
      "Freestanding base",
      "Delivery, setup & pack-down",
    ],
    image: "/gallery/baby-showers/baby-showers-2.jpg",
  },

  // --- Florals ---
  {
    slug: "floral-centrepiece-set",
    name: "Floral Centrepiece Set (5)",
    category: "florals",
    occasions: ["weddings", "engagements", "christenings-baptisms", "corporate"],
    price: 150,
    description:
      "A set of five premium faux floral centrepieces designed to elevate your guest tables. Each arrangement features a curated mix of roses, peonies, and eucalyptus in your chosen colour palette. Presented in elegant glass or gold vases.",
    includes: [
      "5 x faux floral arrangements",
      "Choice of glass or gold vases",
      "Colour palette customisation",
      "Delivery, setup & pack-down",
    ],
    image: "/gallery/weddings/weddings-3.jpg",
  },
  {
    slug: "floral-tower-arrangement",
    name: "Floral Tower Arrangement",
    category: "florals",
    occasions: ["weddings", "engagements", "corporate"],
    price: 120,
    description:
      "A dramatic tall floral arrangement that creates a stunning focal point at your event. Standing over a metre tall on a clear acrylic or gold stand, this statement piece draws the eye and adds height and grandeur to any space.",
    includes: [
      "1 x tall floral tower (1.2m height)",
      "Clear acrylic or gold stand",
      "Custom colour palette",
      "Delivery, setup & pack-down",
    ],
    image: "/gallery/engagements/engagements-3.jpg",
  },

  // --- Balloons ---
  {
    slug: "balloon-garland-installation",
    name: "Balloon Garland Installation",
    category: "balloons",
    occasions: ["birthdays", "baby-showers", "christenings-baptisms", "engagements", "corporate"],
    price: 220,
    description:
      "A show-stopping organic balloon garland custom-made in your colours and theme. Our balloon garlands typically span 3-4 metres and feature a mix of sizes including jumbo, standard, and mini balloons for beautiful dimension and texture.",
    includes: [
      "Custom colour organic balloon garland (3-4m)",
      "Mix of jumbo, standard & mini balloons",
      "Installation hardware",
      "On-site installation & removal",
    ],
    image: "/gallery/birthdays/birthdays-1.jpg",
  },
  {
    slug: "balloon-arch-full",
    name: "Full Balloon Arch",
    category: "balloons",
    occasions: ["birthdays", "baby-showers", "christenings-baptisms", "corporate"],
    price: 350,
    description:
      "Transform your entrance or backdrop with a full balloon arch spanning up to 3 metres wide and 2.5 metres tall. This is the ultimate statement piece for birthdays, baby showers, and corporate events. Custom colours matched to your theme.",
    includes: [
      "Full balloon arch (up to 3m x 2.5m)",
      "Premium quality latex balloons",
      "Freestanding frame",
      "Custom colour matching",
      "On-site installation & removal",
    ],
    image: "/gallery/birthdays/birthdays-2.jpg",
  },

  // --- Furniture ---
  {
    slug: "white-plinth-set",
    name: "White Plinth Set (3)",
    category: "furniture",
    occasions: ["weddings", "christenings-baptisms", "engagements", "baby-showers", "corporate"],
    price: 90,
    description:
      "A set of three graduated white plinths that add height and dimension to your event styling. Use them for floral displays, cakes, or decorative features. These versatile pieces work at ceremonies, receptions, and corporate events alike.",
    includes: [
      "3 x white plinths (80cm, 60cm, 40cm heights)",
      "Delivery & pick-up",
    ],
    image: "/gallery/christenings-baptisms/christenings-baptisms-2.jpg",
  },
  {
    slug: "dessert-table-styling",
    name: "Dessert Table Styling",
    category: "furniture",
    occasions: ["birthdays", "baby-showers", "weddings", "christenings-baptisms", "engagements"],
    price: 250,
    description:
      "Make your sweet treats the star of the show with our full dessert table styling package. We provide the backdrop, stands, platters, and decorative accents to create a picture-perfect display that matches your event theme and colour palette.",
    includes: [
      "Backdrop frame with draping or balloon garland",
      "Assorted cake stands & platters (6-8 pieces)",
      "Decorative accents & florals",
      "Table runner or cloth",
      "Setup & styling on the day",
    ],
    image: "/gallery/birthdays/birthdays-3.jpg",
  },

  // --- Signage ---
  {
    slug: "gold-letter-light-up",
    name: "Gold Letter Light-Up",
    category: "signage",
    occasions: ["birthdays", "weddings", "engagements", "corporate"],
    price: 80,
    description:
      "Make it glow with our gold marquee letter lights. Available as individual letters or numbers, these warm-lit light-ups create a stunning feature at any event. Perfect for spelling out names, ages, or initials.",
    includes: [
      "Individual letter or number (60cm tall)",
      "Warm white LED bulbs",
      "Power cable",
      "Delivery & pick-up",
    ],
    image: "/gallery/birthdays/birthdays-4.jpg",
  },
  {
    slug: "neon-sign-custom-text",
    name: "Neon Sign \u2014 Custom Text",
    category: "signage",
    occasions: ["weddings", "engagements", "birthdays", "corporate"],
    price: 160,
    description:
      "Add a modern, eye-catching touch with a custom LED neon sign. Choose from our library of popular phrases or request custom text for your event. The warm glow creates amazing photo opportunities and a focal point that guests love.",
    includes: [
      "LED neon sign (up to 80cm wide)",
      "Clear acrylic backing",
      "Hanging hardware or stand",
      "Choice of warm white, cool white, or blush pink",
      "Delivery & pick-up",
    ],
    image: "/gallery/engagements/engagements-4.jpg",
  },
  {
    slug: "welcome-sign-on-easel",
    name: "Welcome Sign on Easel",
    category: "signage",
    occasions: ["weddings", "christenings-baptisms", "engagements", "birthdays", "baby-showers", "corporate"],
    price: 65,
    description:
      "A beautifully designed welcome sign personalised with your event details, presented on a timber or gold easel. Sets the tone from the moment guests arrive. Available in acrylic, timber, or printed styles to match your event aesthetic.",
    includes: [
      "Personalised welcome sign (A2 size)",
      "Timber or gold easel",
      "Custom design to match your theme",
      "Delivery & pick-up",
    ],
    image: "/gallery/weddings/weddings-4.jpg",
  },

  // --- Draping ---
  {
    slug: "ceiling-draping-package",
    name: "Ceiling Draping Package",
    category: "draping",
    occasions: ["weddings", "engagements", "christenings-baptisms", "corporate"],
    price: 400,
    description:
      "Transform any venue with our professional ceiling draping. Flowing sheer fabric creates a romantic canopy effect that softens industrial spaces and adds elegance to any room. Includes fairy lights woven through the fabric for a magical evening glow.",
    includes: [
      "Sheer fabric ceiling draping (up to 10m span)",
      "Fairy lights integrated throughout",
      "Professional rigging & installation",
      "Full removal after event",
    ],
    image: "/gallery/drapes/drapes-1.jpg",
  },
  {
    slug: "backdrop-draping-set",
    name: "Backdrop Draping Set",
    category: "draping",
    occasions: ["weddings", "engagements", "christenings-baptisms", "baby-showers", "birthdays", "corporate"],
    price: 180,
    description:
      "A versatile fabric backdrop that works as a ceremony feature, bridal table backdrop, or photo wall. Available in white, ivory, blush, or sage, the flowing fabric creates a soft, elegant canvas for your event styling.",
    includes: [
      "Backdrop frame (3m wide x 2.4m tall)",
      "Sheer and solid fabric layers",
      "Choice of white, ivory, blush, or sage",
      "Delivery, setup & pack-down",
    ],
    image: "/gallery/drapes/drapes-2.jpg",
  },

  // --- Lighting ---
  {
    slug: "fairy-light-curtain",
    name: "Fairy Light Curtain",
    category: "lighting",
    occasions: ["weddings", "engagements", "birthdays", "christenings-baptisms", "corporate"],
    price: 110,
    description:
      "Create a warm, twinkling backdrop with our fairy light curtain. Hundreds of warm white LEDs cascade from top to bottom, creating a stunning wall of light that works as a ceremony backdrop, photo wall, or dance floor feature.",
    includes: [
      "LED fairy light curtain (3m wide x 2.4m tall)",
      "Warm white LEDs",
      "Frame & hanging hardware",
      "Delivery, setup & pack-down",
    ],
    image: "/gallery/weddings/weddings-5.jpg",
  },
  {
    slug: "festoon-light-string",
    name: "Festoon Light String",
    category: "lighting",
    occasions: ["weddings", "engagements", "birthdays", "corporate"],
    price: 75,
    description:
      "Nothing sets the mood quite like festoon lights. Our 10-metre strings of warm Edison-style bulbs create an inviting, romantic atmosphere for outdoor celebrations and indoor receptions alike. Multiple strings can be linked for larger spaces.",
    includes: [
      "10m festoon light string",
      "Warm white Edison-style bulbs",
      "Extension cable",
      "Delivery & pick-up",
    ],
    image: "/gallery/engagements/engagements-5.jpg",
  },
];

export function getHireItem(slug: string): HireItem | undefined {
  return hireItems.find((item) => item.slug === slug);
}

export function getRelatedItems(item: HireItem, max = 4): HireItem[] {
  return hireItems
    .filter((i) => i.slug !== item.slug && i.category === item.category)
    .slice(0, max);
}
