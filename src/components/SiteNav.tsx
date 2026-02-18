"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Shield, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEMO_URL, CONTACT_EMAIL } from "@/lib/site";

const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Developers", href: "/developers" },
  { label: "Trust Demo", href: "/trust-demo" },
  { label: "Investors", href: "/investors" },
  { label: "Full Demo", href: DEMO_URL, external: true },
  { label: "Roadmap", href: "/roadmap" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight">SONATE</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = !link.external && pathname === link.href;
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="gap-2" size="sm">
              Full Demo <ExternalLink className="w-3 h-3" />
            </Button>
          </Link>
          <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
            <Button size="sm">Request Pilot</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 bg-black/95 backdrop-blur-xl border-t border-white/5 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = !link.external && pathname === link.href;
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="h-px bg-white/10 my-4" />

            <div className="flex flex-col gap-3">
              <Link
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Button variant="outline" className="w-full gap-2">
                  Full Demo <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>
              <Link
                href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}
                onClick={() => setOpen(false)}
              >
                <Button className="w-full">Request Pilot</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
