"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 16, opacity: 0, duration: 0.5 })
        .from(".hero-title", { y: 28, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
    },
    { scope: rootRef }
  );

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative overflow-hidden bg-background"
    >
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/hero-new.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-noise opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-128 w-lg -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12  sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
        <div className="hero-badge mx-auto mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm backdrop-blur-sm">
          <Sparkles className="size-4 text-primary" />
          Trusted since 1998 &middot; Jalandhar
        </div>

        <h1 className="hero-title  max-w-3xl  text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Premium prints that make your{" "}
          <span className="bg-linear-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            brand stand out
          </span>
        </h1>

        <p className="hero-sub mt-5 max-w-xl text-balance text-lg font-medium text-muted-foreground sm:text-xl">
          {SITE.description}
        </p>

      </div>
    </section>
  );
}
