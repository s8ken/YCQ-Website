import Link from "next/link";
import { FOOTER_GROUPS, type NavItem } from "@/lib/navigation";

function FooterLink({ item }: { item: NavItem }) {
  const className = "text-sm text-stone-600 hover:text-stone-900 transition-colors";

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <div className="text-sm font-semibold text-stone-900 mb-4">{group.title}</div>
              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <FooterLink key={`${group.title}-${item.href}`} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-stone-200 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="text-sm text-stone-600">
            © {new Date().getFullYear()} YCQ Labs. Sonate is an open-source trust infrastructure effort.
          </div>
          <div className="text-sm text-stone-500">
            Built with Next.js + TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
}

