// Central site config + helpers.

export const SITE = {
  name: "zanto",
  tagline: "A local-first AI workspace for your desktop.",
  description:
    "Bring your own model and keys; your files never leave your machine. " +
    "10+ providers, consented file/shell/web tools, and answers rendered as charts, tables, and documents.",
  repo: "https://github.com/satyamyadav/zanto-rust",
  releasesLatest: "https://github.com/satyamyadav/zanto-rust/releases/latest",
  releases: "https://github.com/satyamyadav/zanto-rust/releases",
  linkedin: "https://www.linkedin.com/in/satyamyadav",
} as const;

// Base path (handles the GitHub Pages project subpath). Trailing slash stripped.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Build an internal href that respects the configured `base`. */
export function href(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
