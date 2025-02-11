import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-white">
        <li>
          <Link href="/" className="flex items-center hover:text-zinc-400">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {index === items.length - 1 ? (
              <span className="text-white">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-white">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
