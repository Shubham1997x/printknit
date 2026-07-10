"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { SITE, waLink } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60 shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="PrintKnit"
            width={140}
            height={40}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden items-center gap-1.5 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <Button
            size="default"
            className="gap-1.5 text-base font-semibold"
            nativeButton={false}
            render={
              <a
                href={waLink("Hi PrintKnit, I'd like to know more about your products.")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden xs:inline">WhatsApp</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
