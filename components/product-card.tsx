"use client";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { waLink, productEnquiryText, detailedEnquiryText } from "@/lib/site";
import type { Product } from "@/lib/catalogue";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [specs, setSpecs] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = detailedEnquiryText(product.name, {
      name,
      phone,
      quantity,
      specs,
      message,
    });
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const specCode = `${product.id.split("-")[0].toUpperCase()} · ${product.subcategory.toUpperCase()}`;

  return (
    <>
      <Card className="flex h-full flex-col group py-0 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-lg hover:shadow-black/5">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-secondary opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-15" />
          {product.tag && (
            <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
              <span className="absolute top-[14px] right-[-30px] w-[110px] rotate-45 bg-secondary py-1 text-center text-xs font-bold tracking-wide text-secondary-foreground uppercase shadow-sm">
                {product.tag}
              </span>
            </div>
          )}
        </div>

        <div className="border-t border-secondary/30" />

        <CardHeader className="pt-3">
          <p className="font-mono text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
            {specCode}
          </p>
          <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2 text-base">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto grid grid-cols-2 gap-2 border-t border-border bg-transparent p-3">
          <Button
            size="lg"
            className="gap-1.5 text-base font-semibold"
            onClick={() => setOpen(true)}
          >
            <Send className="size-4" />
            Send Enquiry
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-1.5 text-base font-semibold"
            nativeButton={false}
            render={
              <a
                href={waLink(productEnquiryText(product.name))}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <WhatsAppIcon className="size-4 text-secondary" />
            WhatsApp Enquiry
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Enquire about {product.name}</DialogTitle>
            <DialogDescription className="text-base">
              Share a few details and we&apos;ll open WhatsApp with your message pre-filled to send to PrintKnit.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enquiry-name">Your name</Label>
                <Input
                  id="enquiry-name"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enquiry-phone">Phone number</Label>
                <Input
                  id="enquiry-phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enquiry-quantity">Quantity</Label>
                <Input
                  id="enquiry-quantity"
                  placeholder="e.g. 500 pcs"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enquiry-specs">Size / specs</Label>
                <Input
                  id="enquiry-specs"
                  placeholder="e.g. A5, matte"
                  value={specs}
                  onChange={(e) => setSpecs(e.target.value)}
                  className="text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="enquiry-message">Additional notes</Label>
              <Textarea
                id="enquiry-message"
                placeholder="Deadline, design references, anything else we should know..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-base"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSend} className="gap-1.5 text-base font-semibold" size="lg">
              <WhatsAppIcon className="size-4" />
              Send via WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
