import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-xs text-[#6B5E54]">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-[#C5A059] transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1 text-[#2E5A44]" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-[#C5A059]/60 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-[#1C1613]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
