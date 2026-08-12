import { siteConfig } from "@/config/site";

/** Única fonte da verdade do checkout Kiwify — não duplicar em outros arquivos. */
export const CHECKOUT_BASE_URL = siteConfig.checkoutUrl;

/**
 * Parâmetros de rastreamento propagados da landing para o checkout Kiwify.
 * `fbclid` é preservado além da lista pedida (Meta Ads).
 */
const TRACKING_KEYS = [
  "src",
  "sck",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "s1",
  "s2",
  "s3",
  "fbclid",
] as const;

type TrackingKey = (typeof TRACKING_KEYS)[number];
export type TrackingParams = Partial<Record<TrackingKey, string>>;

const STORAGE_KEY = "astarte_tracking_params";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

let hasLoggedCapture = false;
let hasLoggedCheckoutUrl = false;

function logDev(message: string, data?: unknown): void {
  if (!isDev()) return;
  if (data !== undefined) {
    console.log(message, data);
  } else {
    console.log(message);
  }
}

function sanitizeValue(value: string | null | undefined): string | null {
  if (value == null) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed;
}

function pickTrackingParams(source: URLSearchParams): TrackingParams {
  const params: TrackingParams = {};

  for (const key of TRACKING_KEYS) {
    const value = sanitizeValue(source.get(key));
    if (value) {
      params[key] = value;
    }
  }

  return params;
}

function hasTrackingParams(params: TrackingParams): boolean {
  return Object.keys(params).length > 0;
}

function readFromSessionStorage(): TrackingParams {
  if (!isBrowser()) return {};

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    const params: TrackingParams = {};
    for (const key of TRACKING_KEYS) {
      const value = sanitizeValue((parsed as Record<string, unknown>)[key] as string);
      if (value) {
        params[key] = value;
      }
    }

    return params;
  } catch {
    return {};
  }
}

function saveToSessionStorage(params: TrackingParams): void {
  if (!isBrowser() || !hasTrackingParams(params)) return;

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    // sessionStorage pode estar indisponível (modo privado, etc.)
  }
}

/**
 * Remove cópia antiga em localStorage que vazava UTMs pagos para visitas orgânicas.
 */
function clearLegacyLocalStorage(): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

/**
 * Captura parâmetros da URL da landing e persiste em sessionStorage pela sessão.
 * Seguro apenas no cliente (nunca chamar durante SSR).
 *
 * Prioridade: valores da URL atual sobrescrevem a sessão; demais chaves da sessão permanecem.
 * Sem parâmetros na URL e sem sessão → objeto vazio.
 */
export function captureTrackingParams(): TrackingParams {
  if (!isBrowser()) return {};

  try {
    clearLegacyLocalStorage();

    const fromUrl = pickTrackingParams(new URLSearchParams(window.location.search));
    const fromSession = readFromSessionStorage();

    // URL ganha nas chaves presentes; o restante da sessão é preservado.
    const merged: TrackingParams = { ...fromSession, ...fromUrl };

    if (hasTrackingParams(fromUrl)) {
      saveToSessionStorage(merged);
    }

    if (!hasLoggedCapture) {
      hasLoggedCapture = true;
      if (hasTrackingParams(merged)) {
        logDev("[Astarte UTM] parâmetros ativos:", merged);
      } else {
        logDev("[Astarte UTM] nenhum parâmetro de rastreamento — checkout sem UTMs");
      }
    }

    return hasTrackingParams(merged) ? merged : {};
  } catch (error) {
    logDev("[Astarte UTM] falha ao capturar parâmetros:", error);
    return {};
  }
}

/**
 * Monta a URL do checkout Kiwify com os parâmetros capturados.
 * Usa `URL` / `URLSearchParams` para montar `?` e `&` corretamente.
 * Não sobrescreve parâmetros que já existam no link base.
 * Sem UTMs, devolve exatamente a URL base.
 * Nunca lança erro.
 */
export function buildCheckoutUrl(baseUrl: string = CHECKOUT_BASE_URL): string {
  if (!isBrowser()) return baseUrl;

  try {
    const checkout = new URL(baseUrl);
    const params = captureTrackingParams();

    for (const key of TRACKING_KEYS) {
      const value = params[key];
      if (!value) continue;

      if (!checkout.searchParams.has(key)) {
        checkout.searchParams.set(key, value);
      }
    }

    const finalUrl = checkout.toString();

    if (!hasLoggedCheckoutUrl) {
      hasLoggedCheckoutUrl = true;
      logDev("[Astarte UTM] URL final do checkout:", finalUrl);
    }

    return finalUrl;
  } catch (error) {
    logDev("[Astarte UTM] falha ao montar URL do checkout:", error);
    return baseUrl;
  }
}

/**
 * Dispara o evento personalizado CheckoutClick no Meta Pixel.
 * Não dispara InitiateCheckout nem Purchase — esses ficam na Kiwify.
 * Nunca lança erro: falha no Pixel não pode bloquear o checkout.
 */
export function trackCheckoutClick(ctaPosition: string): void {
  if (!isBrowser()) return;

  try {
    const fbq = (
      window as Window & { fbq?: (...args: unknown[]) => void }
    ).fbq;

    if (typeof fbq !== "function") return;

    fbq("trackCustom", "CheckoutClick", {
      content_name: "Método Astarte",
      content_ids: ["metodo-astarte"],
      content_type: "product",
      value: Number(siteConfig.priceValue),
      currency: "BRL",
      cta_position: ctaPosition,
    });

    if (isDev()) {
      logDev("[Astarte Pixel] CheckoutClick", { cta_position: ctaPosition });
    }
  } catch (error) {
    logDev("[Astarte Pixel] falha ao disparar CheckoutClick:", error);
  }
}
