import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  name: string;
  path?: string;
}

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="border-b border-border bg-muted/40">
    <ol className="container-pro flex flex-wrap items-center gap-1 py-3 text-sm text-muted-foreground">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1">
          {item.path && i < items.length - 1 ? (
            <Link to={item.path} className="hover:text-accent">{item.name}</Link>
          ) : (
            <span className="font-medium text-foreground">{item.name}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />}
        </li>
      ))}
    </ol>
  </nav>
);
