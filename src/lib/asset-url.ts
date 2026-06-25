// Lovable assets are served at /__l5e/assets-v1/... on *.lovable.app domains.
// When the app is deployed to a different host (e.g. Vercel), the relative
// path 404s. Rewrite to the absolute Lovable host so media keeps working.

const LOVABLE_ASSET_HOST = "https://deep-clone-magic.lovable.app";

export function assetUrl(url: string | undefined | null): string {
  if (!url || typeof url !== "string") return url ?? "";
  if (!url.startsWith("/__l5e/")) return url;

  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (
      host.endsWith("lovable.app") ||
      host.endsWith("lovable.dev") ||
      host === "localhost" ||
      host === "127.0.0.1"
    ) {
      return url;
    }
  }
  return LOVABLE_ASSET_HOST + url;
}
