import { CONSOLE_URL } from "@/lib/site";

export type NavItem = {
  label: string;
  href: string;
  match?: "exact" | "prefix";
  external?: boolean;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/", match: "exact" },
  { label: "Solutions", href: "/solutions", match: "prefix" },
  { label: "Technology", href: "/technology", match: "exact" },
  { label: "Trust Demo", href: "/trust-demo", match: "exact" },
  { label: "Contact", href: "/contact", match: "exact" },
];

export const SECONDARY_NAV: NavItem[] = [
  { label: "Sitemap", href: "/sitemap", match: "exact" },
  { label: "Changelog", href: "/changelog", match: "exact" },
  { label: "Governance", href: "/governance", match: "prefix" },
  { label: "Risk Assessment", href: "/risk-assessment", match: "exact" },
  { label: "Security Monitor", href: "/security-monitor", match: "exact" },
];

export const FOOTER_GROUPS: Array<{ title: string; items: NavItem[] }> = [
  {
    title: "Product",
    items: [
      { label: "Solutions", href: "/solutions", match: "prefix" },
      { label: "Technology", href: "/technology", match: "exact" },
      { label: "Trust Demo", href: "/trust-demo", match: "exact" },
      { label: "Contact", href: "/contact", match: "exact" },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/s8ken/yseeku-platform",
        external: true,
      },
      { label: "Email", href: "mailto:stephen@yseeku.com", external: true },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Sitemap", href: "/sitemap", match: "exact" },
      { label: "Changelog", href: "/changelog", match: "exact" },
      { label: "Platform Console", href: CONSOLE_URL, external: true },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Risk Assessment", href: "/risk-assessment", match: "exact" },
      { label: "Governance", href: "/governance", match: "prefix" },
      { label: "Security Monitor", href: "/security-monitor", match: "exact" },
    ],
  },
];

