"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV, SECONDARY_NAV, type NavItem } from "@/lib/navigation";
import { CONSOLE_URL } from "@/lib/site";

function isActive(pathname: string, item: NavItem) {
  if (item.external) return false;
  if (item.match === "exact") return pathname === item.href;
  if (item.match === "prefix") return pathname === item.href || pathname.startsWith(`${item.href}/`);
  return pathname === item.href;
}

function NavLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
}) {
  const className =
    "px-3 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2" +
    (active
      ? " text-stone-900 bg-amber-100"
      : " text-stone-700 hover:text-stone-900 hover:bg-stone-100");

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activePrimary = useMemo(() => {
    return PRIMARY_NAV.map((item) => ({ item, active: isActive(pathname, item) }));
  }, [pathname]);

  const activeSecondary = useMemo(() => {
    return SECONDARY_NAV.map((item) => ({ item, active: isActive(pathname, item) }));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-stone-900">Sonate</span>
              <span className="hidden sm:inline text-xs text-stone-500">YCQ Labs</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {activePrimary.map(({ item, active }) => (
              <NavLink key={item.href} item={item} active={active} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact"
              className="bg-stone-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-stone-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              Get Started
            </Link>
            <a
              href={CONSOLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-stone-300 text-stone-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-stone-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              Console
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-1">
              {activePrimary.map(({ item, active }) => (
                <NavLink key={item.href} item={item} active={active} onClick={() => setOpen(false)} />
              ))}
              <div className="h-px bg-stone-200 my-2" />
              {activeSecondary.map(({ item, active }) => (
                <NavLink key={item.href} item={item} active={active} onClick={() => setOpen(false)} />
              ))}
              <div className="h-px bg-stone-200 my-2" />
              <a
                href={CONSOLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium rounded-md border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors"
              >
                Open Console
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

