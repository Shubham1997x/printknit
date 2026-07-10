"use client";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { waLink } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={waLink("Hi PrintKnit, I'd like to know more about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex size-13 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg shadow-black/20 ring-1 ring-black/5 transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
