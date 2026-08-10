/**
 * Rastreamento leve de eventos da landing. Envia para o Meta Pixel (fbq) e
 * para o dataLayer quando disponíveis; silencioso quando não existem.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

function baseParams(): EventParams {
  if (typeof window === "undefined") return {};
  let utmContent: string | undefined;
  try {
    const raw = sessionStorage.getItem("astarte_tracking_params");
    if (raw) utmContent = (JSON.parse(raw) as Record<string, string>).utm_content;
  } catch {
    // storage indisponível (Safari em modo privado, etc.)
  }
  return {
    device: window.innerWidth < 768 ? "mobile" : "desktop",
    page_url: window.location.href,
    utm_content: utmContent,
  };
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...baseParams(), ...params };
  try {
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", name, payload);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...payload });
    }
  } catch {
    // nunca quebrar a página por causa de analytics
  }
}
