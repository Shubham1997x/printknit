"use client";

import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Search, X } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/catalogue";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Catalogue() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const category = CATEGORIES.find((c) => c.id === activeCategory) ?? null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (activeSubcategory && p.subcategory !== activeSubcategory) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q)
      );
    });
  }, [query, activeCategory, activeSubcategory]);

  useGSAP(
    () => {
      if (!gridRef.current) return;
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }
      );
    },
    { dependencies: [filtered.length, activeCategory, activeSubcategory, query], scope: gridRef }
  );

  const selectCategory = (id: string | null) => {
    setActiveCategory(id);
    setActiveSubcategory(null);
  };

  return (
    <section id="catalogue" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Search */}
      <div className="max-w-xl">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products — business cards, badges, brochures..."
            className="h-12 rounded-full border-border bg-white pl-10 pr-9 text-base font-medium shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3.5 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-8 flex flex-wrap  gap-2">
        <Button
          size="default"
          variant={activeCategory === null ? "default" : "outline"}
          onClick={() => selectCategory(null)}
          className="rounded-full text-sm font-semibold"
        >
          All Products
        </Button>
        {CATEGORIES.map((c) => (
          <Button
            key={c.id}
            size="default"
            variant={activeCategory === c.id ? "default" : "outline"}
            onClick={() => selectCategory(c.id)}
            className="rounded-full text-sm font-semibold"
          >
            {c.name}
          </Button>
        ))}
      </div>

      {/* Subcategories */}
      {category && (
        <div className="mt-4 flex flex-wrap  gap-2">
          <button
            onClick={() => setActiveSubcategory(null)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${activeSubcategory === null
              ? "border-secondary/60 bg-secondary/20 text-foreground"
              : "border-border bg-white text-muted-foreground hover:text-foreground"
              }`}
          >
            All {category.name}
          </button>
          {category.subcategories.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSubcategory(s)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${activeSubcategory === s
                ? "border-secondary/60 bg-secondary/20 text-foreground"
                : "border-border bg-white text-muted-foreground hover:text-foreground"
                }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 text-center">
          <p className="text-xl font-semibold text-foreground">No products found</p>
          <p className="text-base text-muted-foreground">
            Try a different search term or category.
          </p>
        </div>
      )}
    </section>
  );
}
