"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { captureTrackingParams } from "@/lib/checkout";

const SCROLL_MARKS = [25, 50, 75, 90] as const;

/**
 * Eventos de página: page_view, visualização de seções marcadas com
 * data-analytics-section e profundidade de scroll (25/50/75/90).
 * Também captura UTMs no carregamento (cliente) para o checkout Kiwify.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    captureTrackingParams();
    trackEvent("page_view");

    const seenSections = new Set<string>();
    let sectionObserver: IntersectionObserver | undefined;

    if (typeof IntersectionObserver !== "undefined") {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const name = entry.target.getAttribute("data-analytics-section");
            if (!name || seenSections.has(name)) return;
            seenSections.add(name);
            trackEvent(`${name}_view`);
          });
        },
        { threshold: 0.3 }
      );
      document
        .querySelectorAll("[data-analytics-section]")
        .forEach((el) => sectionObserver?.observe(el));
    }

    const firedMarks = new Set<number>();
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = (window.scrollY / scrollable) * 100;
      for (const mark of SCROLL_MARKS) {
        if (percent >= mark && !firedMarks.has(mark)) {
          firedMarks.add(mark);
          trackEvent(`scroll_${mark}`);
        }
      }
      if (firedMarks.size === SCROLL_MARKS.length) {
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      sectionObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
