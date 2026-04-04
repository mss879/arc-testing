import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * SEO Breadcrumbs — visible navigation trail that matches JSON-LD breadcrumb schema.
 * Improves internal linking, user navigation, and Google SERP breadcrumb display.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="px-6 lg:px-12 pt-24 pb-0"
    >
      <ol
        className="flex items-center gap-2 text-sm text-zinc-500 max-w-[1800px] mx-auto"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <span className="text-zinc-600" aria-hidden="true">/</span>
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-zinc-400 hover:text-white transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-zinc-300" itemProp="name" aria-current="page">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
