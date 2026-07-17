export const CHECKOUT_BASE_URL = "https://pay.kiwify.com.br/aIDnsjt";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "src",
  "sck",
  "s1",
  "s2",
  "s3",
  "fbclid",
] as const;

type TrackingKey = (typeof TRACKING_KEYS)[number];
type TrackingParams = Partial<Record<TrackingKey, string>>;

const STORAGE_KEY = "astarte_tracking_params";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

let hasLoggedCapture = false;
let hasLoggedCheckoutUrl = false;
let hasTrackedInitiateCheckout = false;

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
    // sessionStorage may be unavailable
  }
}

/**
 * Clears legacy localStorage tracking that used to leak paid UTMs into organic visits.
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
 * Captures tracking params from the current landing URL and persists them for the session.
 * Never invents defaults. Safe to call only on the client.
 *
 * Priority: current URL → sessionStorage (same browser tab/session only).
 */
export function captureTrackingParams(): TrackingParams {
  if (!isBrowser()) return {};

  try {
    clearLegacyLocalStorage();

    const fromUrl = pickTrackingParams(new URLSearchParams(window.location.search));

    if (hasTrackingParams(fromUrl)) {
      saveToSessionStorage(fromUrl);

      if (!hasLoggedCapture) {
        hasLoggedCapture = true;
        logDev("[Astarte UTM] parâmetros capturados na landing page:", fromUrl);
      }

      return fromUrl;
    }

    const fromSession = readFromSessionStorage();
    if (hasTrackingParams(fromSession)) {
      if (!hasLoggedCapture) {
        hasLoggedCapture = true;
        logDev("[Astarte UTM] parâmetros recuperados do sessionStorage:", fromSession);
      }
      return fromSession;
    }

    if (!hasLoggedCapture) {
      hasLoggedCapture = true;
      logDev("[Astarte UTM] nenhum parâmetro de rastreamento — checkout sem UTMs");
    }

    return {};
  } catch (error) {
    logDev("[Astarte UTM] falha ao capturar parâmetros:", error);
    return {};
  }
}

/**
 * Builds the Kiwify checkout URL with only params that exist on the landing (or session).
 * Without tracking params, returns the bare checkout URL.
 * Never throws.
 */
export function buildCheckoutUrl(baseUrl: string = CHECKOUT_BASE_URL): string {
  if (!isBrowser()) return baseUrl;

  try {
    const checkout = new URL(baseUrl);
    const params = captureTrackingParams();

    for (const key of TRACKING_KEYS) {
      const value = params[key];
      if (!value) continue;

      // Do not overwrite params already present on the checkout base URL
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
 * Fires Meta Pixel InitiateCheckout at most once per page load.
 * Does not fire Purchase.
 */
export function trackInitiateCheckoutOnce(): void {
  if (!isBrowser() || hasTrackedInitiateCheckout) return;

  try {
    const fbq = (
      window as Window & { fbq?: (...args: unknown[]) => void }
    ).fbq;

    if (typeof fbq !== "function") return;

    hasTrackedInitiateCheckout = true;
    fbq("track", "InitiateCheckout");

    if (isDev()) {
      logDev("[Astarte Pixel] InitiateCheckout disparado uma vez");
    }
  } catch (error) {
    logDev("[Astarte Pixel] falha ao disparar InitiateCheckout:", error);
  }
}
