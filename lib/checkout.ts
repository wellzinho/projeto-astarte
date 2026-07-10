export const CHECKOUT_BASE_URL = "https://pay.kiwify.com.br/aIDnsjt";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck",
  "s1",
  "s2",
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

function readFromStorage(storage: Storage): TrackingParams {
  try {
    const raw = storage.getItem(STORAGE_KEY);
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

function saveTrackingParams(params: TrackingParams): void {
  if (!isBrowser() || !hasTrackingParams(params)) return;

  try {
    const serialized = JSON.stringify(params);
    window.sessionStorage.setItem(STORAGE_KEY, serialized);
    window.localStorage.setItem(STORAGE_KEY, serialized);
  } catch {
    // Storage may be unavailable (private mode, quota, etc.)
  }
}

/**
 * Captures tracking params from the current landing URL and persists them.
 * Safe to call only on the client.
 */
export function captureTrackingParams(): TrackingParams {
  if (!isBrowser()) return {};

  try {
    const fromUrl = pickTrackingParams(new URLSearchParams(window.location.search));

    if (hasTrackingParams(fromUrl)) {
      saveTrackingParams(fromUrl);

      if (!hasLoggedCapture) {
        hasLoggedCapture = true;
        logDev("[Astarte UTM] parâmetros capturados na landing page:", fromUrl);
      }

      return fromUrl;
    }

    const fromSession = readFromStorage(window.sessionStorage);
    if (hasTrackingParams(fromSession)) {
      if (!hasLoggedCapture) {
        hasLoggedCapture = true;
        logDev("[Astarte UTM] parâmetros recuperados do sessionStorage:", fromSession);
      }
      return fromSession;
    }

    const fromLocal = readFromStorage(window.localStorage);
    if (hasTrackingParams(fromLocal)) {
      if (!hasLoggedCapture) {
        hasLoggedCapture = true;
        logDev("[Astarte UTM] parâmetros recuperados do localStorage:", fromLocal);
      }
      return fromLocal;
    }

    if (!hasLoggedCapture) {
      hasLoggedCapture = true;
      logDev("[Astarte UTM] nenhum parâmetro de rastreamento encontrado");
    }

    return {};
  } catch (error) {
    logDev("[Astarte UTM] falha ao capturar parâmetros:", error);
    return {};
  }
}

/**
 * Builds the Kiwify checkout URL with preserved tracking params.
 * Priority: current URL → sessionStorage → localStorage.
 * Never throws; falls back to the bare checkout URL.
 */
export function buildCheckoutUrl(baseUrl: string = CHECKOUT_BASE_URL): string {
  if (!isBrowser()) return baseUrl;

  try {
    const checkout = new URL(baseUrl);
    const params = captureTrackingParams();

    for (const key of TRACKING_KEYS) {
      const value = params[key];
      if (!value) continue;

      // Do not overwrite params already present on the checkout URL
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
