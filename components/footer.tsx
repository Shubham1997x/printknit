import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CATEGORIES } from "@/lib/catalogue";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <Image
              src="/logo.webp"
              alt="PrintKnit"
              width={130}
              height={38}
              className="h-8 w-auto"
            />
            <p className="mt-3 max-w-xs text-base text-muted-foreground">
              {SITE.tagline} — premium printing partner in Jalandhar since 1998.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-foreground uppercase">
              Categories
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-base font-medium text-muted-foreground">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href="#catalogue" className="transition-colors hover:text-foreground">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-foreground uppercase">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-base font-medium text-muted-foreground">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-2 transition-colors hover:text-foreground">
                  <Phone className="mt-0.5 size-3.5 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={waLink("Hi PrintKnit, I'd like to know more about your products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-foreground"
                >
                  <WhatsAppIcon className="mt-0.5 size-3.5 shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-2 transition-colors hover:text-foreground">
                  <Mail className="mt-0.5 size-3.5 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-5 text-center text-sm font-medium text-muted-foreground">
          &copy; {new Date().getFullYear()} PrintKnit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
