import { Link, useLocation } from "react-router-dom";
import { Phone, Star, Menu, X, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { company, navLinks } from "@/data/site";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top trust bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container-pro flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-4">
            {company.certifications.map((c) => (
              <span key={c} className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                {c}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              {company.rating} ({company.reviewCount} reviews)
            </span>
            <span>·</span>
            <span>Responds within {company.responseHours}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur">
        <div className="container-pro flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="font-heading text-lg font-bold">R</span>
            </div>
            <div className="leading-tight">
              <div className="font-heading text-base font-bold text-primary">All Phase Radon</div>
              <div className="text-[11px] text-muted-foreground">Colorado Foothills</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-secondary text-secondary-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-muted sm:flex"
            >
              <Phone className="h-4 w-4" />
              {company.phone}
            </a>
            <Link
              to="/contact"
              className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow hover:bg-accent/90 sm:inline-block"
            >
              Get Free Estimate
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 text-foreground hover:bg-muted lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-card lg:hidden">
            <nav className="container-pro flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={company.phoneHref}
                className="mt-1 flex items-center gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                Call {company.phone}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <Footer />

      {/* Sticky mobile click-to-call */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-card p-2 shadow-lg sm:hidden">
        <a
          href={company.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link
          to="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-3 py-2.5 text-sm font-semibold text-accent-foreground"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container-pro grid gap-8 py-12 md:grid-cols-4">
      <div>
        <div className="font-heading text-lg font-bold">All Phase Radon</div>
        <p className="mt-2 text-sm text-primary-foreground/80">
          Locally owned radon testing & mitigation serving the Jefferson County and Park County foothills along the HWY 285 corridor.
        </p>
        <div className="mt-3 flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <Star className="h-4 w-4 fill-accent text-accent" />
          <Star className="h-4 w-4 fill-accent text-accent" />
          <Star className="h-4 w-4 fill-accent text-accent" />
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="ml-1 text-primary-foreground/80">{company.rating} on Google</span>
        </div>
      </div>
      <div>
        <div className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">Services</div>
        <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
          <li><Link to="/services/radon-testing" className="hover:text-accent">Radon Testing</Link></li>
          <li><Link to="/services/radon-mitigation" className="hover:text-accent">Radon Mitigation</Link></li>
          <li><Link to="/services/crawl-space-encapsulation" className="hover:text-accent">Crawl Space Encapsulation</Link></li>
          <li><Link to="/services/fan-replacement-repair" className="hover:text-accent">Fan Replacement & Repair</Link></li>
          <li><Link to="/services/real-estate-radon-services" className="hover:text-accent">Real Estate Radon Services</Link></li>
        </ul>
      </div>
      <div>
        <div className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">Company</div>
        <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
          <li><Link to="/about" className="hover:text-accent">About</Link></li>
          <li><Link to="/service-area" className="hover:text-accent">Service Area</Link></li>
          <li><Link to="/realtors" className="hover:text-accent">Realtors</Link></li>
          <li><Link to="/reviews" className="hover:text-accent">Reviews</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
        </ul>
      </div>
      <div>
        <div className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">Contact</div>
        <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
          <li><a href={company.phoneHref} className="hover:text-accent">{company.phone}</a></li>
          <li><a href={company.emailHref} className="hover:text-accent">{company.email}</a></li>
          <li>{company.baseAddress}</li>
          <li>{company.hours}</li>
        </ul>
        <Link to="/contact" className="mt-3 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
          Get a Free Estimate
        </Link>
      </div>
    </div>
    <div className="border-t border-primary-foreground/15 py-4">
      <div className="container-pro flex flex-col items-center justify-between gap-2 text-xs text-primary-foreground/60 sm:flex-row">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Licensed · NRPP Certified · Insured · Locally Owned</span>
      </div>
    </div>
  </footer>
);
