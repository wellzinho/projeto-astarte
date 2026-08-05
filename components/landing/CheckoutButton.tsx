"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import {
  buildCheckoutUrl,
  captureTrackingParams,
  trackInitiateCheckoutOnce,
} from "@/lib/checkout";
import { trackEvent } from "@/lib/analytics";

export type CtaLocation =
  | "hero"
  | "interest"
  | "plan"
  | "receive"
  | "offer"
  | "final"
  | "sticky";

interface CheckoutButtonProps {
  children: React.ReactNode;
  location: CtaLocation;
  label?: string;
  className?: string;
  variant?: "primary" | "ghost" | "sticky" | "navy";
}

export default function CheckoutButton({
  children,
  location,
  label,
  className = "",
  variant = "primary",
}: CheckoutButtonProps) {
  const [href, setHref] = useState<string>(siteConfig.checkoutUrl);
  const ctaLabel =
    label ?? (typeof children === "string" ? children : location);

  useEffect(() => {
    captureTrackingParams();
    setHref(buildCheckoutUrl(siteConfig.checkoutUrl));
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-location={location}
      data-cta-label={ctaLabel}
      data-product={siteConfig.productSlug}
      data-price={siteConfig.priceValue}
      data-checkout-base={siteConfig.checkoutUrl}
      className={cn(
        "btn-astarte",
        variant === "ghost" && "btn-astarte-ghost",
        variant === "sticky" && "btn-astarte-sticky",
        variant === "navy" && "btn-astarte-navy",
        className
      )}
      onClick={(event) => {
        const url = buildCheckoutUrl(siteConfig.checkoutUrl);
        event.currentTarget.href = url;
        setHref(url);
        trackInitiateCheckoutOnce();
        if (location === "hero") {
          trackEvent("hero_cta_click", { cta_label: ctaLabel });
        }
        trackEvent("checkout_click", {
          cta_position: location,
          cta_label: ctaLabel,
        });
      }}
    >
      {children}
    </a>
  );
}
