"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import {
  buildCheckoutUrl,
  captureTrackingParams,
  trackInitiateCheckoutOnce,
} from "@/lib/checkout";

export type CtaLocation = "hero" | "social-proof" | "offer" | "final";

interface CheckoutButtonProps {
  children: React.ReactNode;
  location: CtaLocation;
  label?: string;
  className?: string;
  variant?: "primary" | "ghost" | "sticky";
}

export default function CheckoutButton({
  children,
  location,
  label,
  className = "",
  variant = "primary",
}: CheckoutButtonProps) {
  const [href, setHref] = useState(siteConfig.checkoutUrl);
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
        className
      )}
      onClick={(event) => {
        const url = buildCheckoutUrl(siteConfig.checkoutUrl);
        event.currentTarget.href = url;
        setHref(url);
        trackInitiateCheckoutOnce();
      }}
    >
      {children}
    </a>
  );
}
