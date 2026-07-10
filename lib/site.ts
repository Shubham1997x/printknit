export const SITE = {
  name: "PrintKnit",
  tagline: "Design. Print. Creative.",
  description:
    "Premium offset, digital & large-format printing in Jalandhar — business cards, ID cards, badges, ties & belts, brochures and more.",
  phone: "+91 8567 929292",
  phoneRaw: "918567929292",
  whatsapp: "918567929292",
  email: "printknit23@gmail.com",
  address: "484, Guru Gobind Singh Avenue, Near Chugiti Bye Pass, Jalandhar 144009 (Pb.) India",
  stats: [
    { label: "Years of Experience", value: "25+" },
    { label: "Prints Delivered", value: "50,000+" },
    { label: "Happy Clients", value: "1,000+" },
    { label: "Quality Assured", value: "100%" },
  ],
} as const;

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function productEnquiryText(productName: string) {
  return `Hi PrintKnit, I'd like to enquire about "${productName}". Please share more details and pricing.`;
}

export function customEnquiryText(productName: string, message: string) {
  return `Hi PrintKnit, I'm enquiring about "${productName}".\n\n${message}`;
}

export type EnquiryDetails = {
  name?: string;
  phone?: string;
  quantity?: string;
  specs?: string;
  message?: string;
};

export function detailedEnquiryText(productName: string, details: EnquiryDetails) {
  const lines = [`Hi PrintKnit, I'd like to enquire about "${productName}".`, ""];
  if (details.name) lines.push(`Name: ${details.name}`);
  if (details.phone) lines.push(`Phone: ${details.phone}`);
  if (details.quantity) lines.push(`Quantity: ${details.quantity}`);
  if (details.specs) lines.push(`Size / Specs: ${details.specs}`);
  if (details.message) lines.push(`Notes: ${details.message}`);
  if (lines.length === 2) lines.push("Please share more details and pricing.");
  return lines.join("\n");
}
