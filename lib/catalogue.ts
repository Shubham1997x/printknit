export type Category = {
  id: string;
  name: string;
  image: string;
  subcategories: string[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  image: string;
  tag?: string;
};

/**
 * Placeholder catalogue seeded from printknit.co.in categories.
 * Replace this file's PRODUCTS array with the real WhatsApp Business
 * catalogue export when available — CATEGORIES can stay as-is or be
 * adjusted to match the real category names.
 */
export const CATEGORIES: Category[] = [
  {
    id: "business-cards",
    name: "Business Cards",
    image: "/categories/business-cards.png",
    subcategories: ["Matte", "Glossy", "Textured", "Foil Stamped"],
  },
  {
    id: "id-cards",
    name: "ID Cards",
    image: "/categories/id-cards.png",
    subcategories: ["Standard PVC", "Photo ID", "RFID / Access", "Lanyard Sets"],
  },
  {
    id: "button-badges",
    name: "Button Badges",
    image: "/categories/button-badge.png",
    subcategories: ["Round Badges", "Fridge Magnets", "Keychain Badges", "Bottle Openers"],
  },
  {
    id: "school-ties-belts",
    name: "School Ties & Belts",
    image: "/categories/school-ties.png",
    subcategories: ["House Ties", "Elastic Belts", "Leather Belts", "Woven Ties"],
  },
  {
    id: "brochures",
    name: "A5 Brochures",
    image: "/categories/brochures.png",
    subcategories: ["Tri-Fold", "Bi-Fold", "Single Sheet", "Booklet"],
  },
  {
    id: "design",
    name: "Design Services",
    image: "/categories/design.png",
    subcategories: ["Logo Design", "Branding Kit", "Packaging", "Social Creatives"],
  },
  {
    id: "print-services",
    name: "Print Services",
    image: "/categories/print-services.png",
    subcategories: ["Offset Printing", "Digital Printing", "Large Format", "Custom Stationery"],
  },
];

export const PRODUCTS: Product[] = [
  // Business Cards
  { id: "bc-matte", name: "Matte Finish Business Card", category: "business-cards", subcategory: "Matte", description: "Soft-touch matte lamination for a premium, fingerprint-free feel.", image: "/categories/business-cards.png", tag: "Bestseller" },
  { id: "bc-glossy", name: "Glossy Business Card", category: "business-cards", subcategory: "Glossy", description: "Vibrant, high-shine finish that makes colours pop.", image: "/categories/business-cards.png" },
  { id: "bc-textured", name: "Textured Cotton Card", category: "business-cards", subcategory: "Textured", description: "Premium cotton-feel stock for a tactile, high-end impression.", image: "/categories/business-cards.png" },
  { id: "bc-foil", name: "Foil Stamped Card", category: "business-cards", subcategory: "Foil Stamped", description: "Gold or silver foil detailing for standout branding.", image: "/categories/business-cards.png", tag: "Premium" },

  // ID Cards
  { id: "id-standard", name: "Standard PVC ID Card", category: "id-cards", subcategory: "Standard PVC", description: "Durable PVC cards for offices, schools and institutions.", image: "/categories/id-cards.png" },
  { id: "id-photo", name: "Photo ID Card", category: "id-cards", subcategory: "Photo ID", description: "Full-colour photo printing with tamper-proof lamination.", image: "/categories/id-cards.png", tag: "Bestseller" },
  { id: "id-rfid", name: "RFID Access Card", category: "id-cards", subcategory: "RFID / Access", description: "Smart access cards with embedded RFID chip.", image: "/categories/id-cards.png" },
  { id: "id-lanyard", name: "ID Card + Lanyard Set", category: "id-cards", subcategory: "Lanyard Sets", description: "Complete ID kit with custom-printed lanyard.", image: "/categories/id-cards.png" },

  // Button Badges
  { id: "bb-round", name: "Round Button Badge", category: "button-badges", subcategory: "Round Badges", description: "Classic pin-back badges, great for events and promotions.", image: "/categories/button-badge.png", tag: "Bestseller" },
  { id: "bb-magnet", name: "Fridge Magnet Badge", category: "button-badges", subcategory: "Fridge Magnets", description: "Custom-printed magnets for giveaways and merchandise.", image: "/categories/button-badge.png" },
  { id: "bb-keychain", name: "Keychain Badge", category: "button-badges", subcategory: "Keychain Badges", description: "Durable keychain badges with vivid full-colour print.", image: "/categories/button-badge.png" },
  { id: "bb-opener", name: "Bottle Opener Badge", category: "button-badges", subcategory: "Bottle Openers", description: "Functional badge-openers, a fun branded takeaway.", image: "/categories/button-badge.png" },

  // School Ties & Belts
  { id: "st-house", name: "House Tie", category: "school-ties-belts", subcategory: "House Ties", description: "Custom woven house-colour ties for school uniforms.", image: "/categories/school-ties.png" },
  { id: "st-elastic", name: "Elastic School Belt", category: "school-ties-belts", subcategory: "Elastic Belts", description: "Comfortable elastic belts with durable buckle.", image: "/categories/school-ties.png" },
  { id: "st-leather", name: "Leather School Belt", category: "school-ties-belts", subcategory: "Leather Belts", description: "Long-lasting leather belts built for daily wear.", image: "/categories/school-ties.png" },
  { id: "st-woven", name: "Custom Woven Tie", category: "school-ties-belts", subcategory: "Woven Ties", description: "Fully custom woven pattern and crest, made to order.", image: "/categories/school-ties.png", tag: "Custom" },

  // Brochures
  { id: "br-trifold", name: "Tri-Fold Brochure", category: "brochures", subcategory: "Tri-Fold", description: "A5 tri-fold layout, ideal for product and service handouts.", image: "/categories/brochures.png", tag: "Bestseller" },
  { id: "br-bifold", name: "Bi-Fold Brochure", category: "brochures", subcategory: "Bi-Fold", description: "Clean bi-fold format for menus and catalogues.", image: "/categories/brochures.png" },
  { id: "br-single", name: "Single Sheet Flyer", category: "brochures", subcategory: "Single Sheet", description: "High-impact single sheet flyers, multicolour print.", image: "/categories/brochures.png" },
  { id: "br-booklet", name: "Multi-Page Booklet", category: "brochures", subcategory: "Booklet", description: "Saddle-stitched booklets for detailed marketing material.", image: "/categories/brochures.png" },

  // Design Services
  { id: "ds-logo", name: "Logo Design", category: "design", subcategory: "Logo Design", description: "Distinctive brand marks crafted from concept to final files.", image: "/categories/design.png", tag: "Popular" },
  { id: "ds-brand", name: "Branding Kit", category: "design", subcategory: "Branding Kit", description: "Complete visual identity — colours, type, stationery templates.", image: "/categories/design.png" },
  { id: "ds-package", name: "Packaging Design", category: "design", subcategory: "Packaging", description: "Retail-ready packaging design that stands out on shelf.", image: "/categories/design.png" },
  { id: "ds-social", name: "Social Media Creatives", category: "design", subcategory: "Social Creatives", description: "On-brand post and story templates for your channels.", image: "/categories/design.png" },

  // Print Services
  { id: "ps-offset", name: "Offset Printing", category: "print-services", subcategory: "Offset Printing", description: "High-volume offset runs with precise colour matching.", image: "/categories/print-services.png" },
  { id: "ps-digital", name: "Digital Printing", category: "print-services", subcategory: "Digital Printing", description: "Fast-turnaround digital prints for short runs.", image: "/categories/print-services.png", tag: "Fast Turnaround" },
  { id: "ps-large", name: "Large Format Printing", category: "print-services", subcategory: "Large Format", description: "Banners, posters and hoardings printed at scale.", image: "/categories/print-services.png" },
  { id: "ps-stationery", name: "Custom Stationery", category: "print-services", subcategory: "Custom Stationery", description: "Letterheads, envelopes and branded office stationery.", image: "/categories/print-services.png" },
];
