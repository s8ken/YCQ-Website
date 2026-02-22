"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Shield, ExternalLink, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEMO_URL, CONTACT_EMAIL } from "@/lib/site";

const NAV_SECTIONS = [
  {
    label: "Product",
    items: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Archive Validation", href: "/archive-validation" },
      { label: "Use Cases", href: "/use-cases", coming: true },
    ],
  },
  {
    label: "Developers",
    items: [
      { label: "Documentation", href: "/developers" },
      { label: "API Reference", href: "/api-docs", coming: true },
      { label: "SDK", href: "https://github.com/s8ken/sonate-verify-sdk", external: true },
    ],
  },
  {
    label: "Demos",
    items: [
      { label: "Trust Demo", href: "/trust-demo" },
      { label: "Compliance Demo", href: "/compliance-demo" },
      { label: "Full Platform", href: DEMO_URL, external: true },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "Investors", href: "/investors" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Licensing", href: "/licensing" },
    ],
  },
];

interface DropdownState {
  [key: string]: boolean;
}

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({});

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen({});
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-heading font-bold tracking-tight">SONATE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_SECTIONS.map((section) => (
            <div key={section.label} className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1">
                {section.label}
                <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* Desktop Dropdown */}
              <div className="absolute left-0 mt-0 w-48 bg-gray-900/95 border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {section.items.map((item) => (
                  <div key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === item.href
                            ? "text-white bg-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                        {item.coming && (
                          <span className="ml-2 text-xs text-blue-400 opacity-60">Coming</span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="gap-2 text-sm" size="sm">
              Full Demo <ExternalLink className="w-3 h-3" />
            </Button>
          </Link>
          <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
            <Button size="sm" className="text-sm">
              Request Pilot
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 bg-black/95 backdrop-blur-xl border-t border-white/5 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV_SECTIONS.map((section) => (
              <div key={section.label}>
                <button
                  onClick={() => toggleDropdown(section.label)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {section.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen[section.label] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown */}
                {dropdownOpen[section.label] && (
                  <div className="bg-white/5 rounded-lg mt-1 py-2 px-2">
                    {section.items.map((item) => (
                      <div key={item.label}>
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-3 py-2 rounded text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 rounded text-sm transition-colors ${
                              pathname === item.href
                                ? "text-white bg-white/10"
                                : "text-white/60 hover:text-white hover:bg-white/5"
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                            {item.coming && (
                              <span className="ml-2 text-xs text-blue-400 opacity-60">Coming</span>
                            )}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="h-px bg-white/10 my-4" />

            <div className="flex flex-col gap-3">
              <Link
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                <Button variant="outline" className="w-full gap-2 text-sm">
                  Full Demo <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>
              <Link
                href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}
                onClick={() => setMobileOpen(false)}
              >
                <Button className="w-full text-sm">Request Pilot</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
