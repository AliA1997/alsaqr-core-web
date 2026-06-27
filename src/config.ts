// Runtime configuration for alsaqr-web-core.
//
// The library NO LONGER reads import.meta.env, so nothing is inlined into the
// CDN bundle at build time — keeping secrets out of the committed dist/.
// Each consuming app calls configureAlSaqr({...}) with values from ITS OWN
// private .env before using any client or store-backed component.
export interface AlSaqrConfig {
  // Public-by-design (safe in the browser).
  supabaseUrl: string;
  supabaseAnonKey: string; // protected by RLS
  apiBaseUrl: string;
  baseUrl?: string; // e.g. https://alsaqr.app/
  zookUrl?: string;
  meetupUrl?: string;
  hfNsfwChecker?: string; // HuggingFace space URL (public)

  // SECRET — prefer proxying NSFW checks through your API instead of shipping
  // this to the browser. Optional, and never required to render components.
  hfToken?: string;

  testMode?: boolean;
  locationApiUrl?: string;
  locationReverseApiUrl?: string;
}

let current: AlSaqrConfig | undefined;

export function configureAlSaqr(config: AlSaqrConfig): void {
  current = config;
}

/** Throws if used before configureAlSaqr — for clients that truly need config. */
export function getConfig(): AlSaqrConfig {
  if (!current) {
    throw new Error(
      "alsaqr-web-core: call configureAlSaqr({...}) before using its clients."
    );
  }
  return current;
}

/** Non-throwing variant — for render paths that can degrade gracefully. */
export function getConfigSafe(): AlSaqrConfig | undefined {
  return current;
}
