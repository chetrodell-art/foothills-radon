import { Link, useParams } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Building2, Mountain, Home, CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbSchema, localBusinessSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";


import { locationMap, locations } from "@/data/locations";
import { services } from "@/data/services";
import { company } from "@/data/site";
import NotFound from "./NotFound";
import { ScrollReveal } from "@/components/ScrollReveal";

const LocationPage = () => {
  const { slug } = useParams();
  const loc = slug ? locationMap[slug] : undefined;

  if (!loc) return <NotFound />;

  const locationSchema = {
    ...localBusinessSchema,
    "@type": "LocalBusiness",
    name: `${company.name} — ${loc.town}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.town,
      addressRegion: "CO",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: `${loc.town}, CO` },
    geo: { "@type": "GeoCoordinates", latitude: loc.geo.lat, longitude: loc.geo.lng },
  };

  return (
    <Layout>
      <SEO
        title={`Radon Mitigation & Testing in ${loc.town}, CO | Foothills Radon Testing and Mitigation | Colorado Foothills`}
        description={`Connect with qualified radon testing & mitigation professionals in ${loc.town}, CO. ${loc.county} foothills homes test high — get your free estimate today.`}
        path={`/locations/${loc.slug}`}
        schema={[locationSchema, breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
          { name: `${loc.town}, CO`, path: `/locations/${loc.slug}` },
        ])]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/locations" }, { name: `${loc.town}, CO` }]} />

      <section className="py-12">
        <div className="container-pro">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-accent" /> {loc.county}</span>
              <span className="flex items-center gap-1"><Mountain className="h-4 w-4 text-accent" /> Elevation {loc.elevation}</span>
              <span className="flex items-center gap-1"><Building2 className="h-4 w-4 text-accent" /> Pop. {loc.population}</span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold text-primary sm:text-5xl">Radon Mitigation & Testing in {loc.town}, CO</h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{loc.geography}</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
                Get a Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-5 py-2.5 font-semibold text-primary hover:bg-muted">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8">
        <div className="container-pro grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary">Home Styles in {loc.town}</h2>
              <p className="mt-3 text-muted-foreground">{loc.homeStyles}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary">Why {loc.town} Homes Are at Risk</h2>
              <p className="mt-3 text-muted-foreground">{loc.radonContext}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary">Services Available in {loc.town}</h2>
              <p className="mt-3 text-muted-foreground">We connect {loc.town} homeowners, buyers, sellers, and realtors with qualified radon professionals offering the full range of radon services:</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="group flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm shadow-sm hover:border-accent">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span className="font-medium text-primary group-hover:text-accent">{s.shortTitle}</span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary">What to Expect in {loc.town}</h2>
              <p className="mt-3 text-muted-foreground">{loc.responseNote}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary">Real Estate in {loc.town}</h2>
              <p className="mt-3 text-muted-foreground">{loc.realEstateNote}</p>
              <Link to="/services/real-estate-radon-services" className="mt-3 inline-flex items-center gap-1 font-semibold text-accent hover:underline">
                Learn about our real estate radon services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <aside className="space-y-6">
            <Link to="/contact" className="block rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md">
              <h3 className="font-heading text-lg font-bold text-primary">Get a Free Estimate</h3>
              <p className="mt-2 text-sm text-muted-foreground">Quick form — we respond within {company.responseHours}. No obligation.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Start here <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-primary"><Home className="h-5 w-5 text-accent" /> Nearby Towns</h3>
              <ul className="mt-3 space-y-2">
                {locations.filter((l) => l.slug !== loc.slug).slice(0, 6).map((l) => (
                  <li key={l.slug}>
                    <Link to={`/locations/${l.slug}`} className="flex items-center gap-2 text-sm text-foreground hover:text-accent">
                      <MapPin className="h-3.5 w-3.5 text-accent" /> {l.town}, CO
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted/40 py-12">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Ready to Get Connected in {loc.town}?</h2>
            <p className="mt-3 text-muted-foreground">We'll connect you with a qualified radon professional serving {loc.town} and the surrounding {loc.county} area. Call us or request a free estimate.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 font-semibold text-primary hover:bg-muted">
                Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={loc.faqs} title={`${loc.town} Radon FAQ`} />

      <section className="py-12">
        <div className="container-pro">
          <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Radon Testing & Mitigation in {loc.town}, CO</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Locally based in Pine, CO. We connect you with qualified radon professionals — call us or request a free estimate. We respond within {company.responseHours}.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-2.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
