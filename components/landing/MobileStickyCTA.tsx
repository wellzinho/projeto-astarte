"use client";

import { useEffect, useState } from "react";
import { CTA_STICKY_TEXT } from "@/data/astarte-content";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import CheckoutButton from "./CheckoutButton";

/**
 * Barra fixa mobile: aparece depois que a hero sai parcialmente da tela
 * e some enquanto o footer está visível, para não cobri-lo.
 */
export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const hero = document.getElementById("hero");
    const footer = document.getElementById("site-footer");
    if (!hero) return;

    let heroInView = true;
    let footerInView = false;

    const update = () => setVisible(!heroInView && !footerInView);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroInView = entry.isIntersecting;
        update();
      },
      { threshold: 0.2 }
    );
    heroObserver.observe(hero);

    let footerObserver: IntersectionObserver | undefined;
    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          footerInView = entry.isIntersecting;
          update();
        },
        { threshold: 0 }
      );
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky-cta-mobile transition-transform duration-300",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="sticky-cta-inner">
        <div className="sticky-cta-copy">
          <p className="sticky-cta-price">{siteConfig.price}</p>
        </div>
        <CheckoutButton
          location="sticky"
          variant="sticky"
          label={CTA_STICKY_TEXT}
          className="min-w-0 flex-1 whitespace-nowrap"
        >
          {CTA_STICKY_TEXT}
        </CheckoutButton>
      </div>
    </div>
  );
}
