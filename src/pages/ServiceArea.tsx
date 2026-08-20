import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight, Mountain, Building2 } from "lucide-react";
import { SEO, localBusinessSchema, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateForm } from "@/components/EstimateForm";
import { company } from "@/data/site";
import { locations } from "@/data/locations";
import { ScrollReveal } from "@/components/ScrollReveal";

const countyOrder: Record<string, number> = {
  "Jefferson County": 1,
  "Park County": 2,
  "Clear Creek County": 3,
};

const ServiceArea = () => {
  const counties = Array.from(new Set(locations.map((l) => l.county))).sort(
    (a, b) => (countyOrder[a] || 9) - (countyOrder[b] || 9)
  );

  return (
    <Layout>
      <SEO
        title="Radon Testing & Mitigation Service Areas | Foothills Radon Testing and Mitigation | Colorado Foothills"
        description="Foothills Radon Testing and Mitigation serves homeowners, realtors, builders & businesses throughout Colorado's mountain communities along the HWY 285 corridor. See all towns we serve."
        path="/service-area"
        schema={[localBusinessSchema, breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Area", path: "/service-area" },
        ])]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Area" }]} />

      <section className="py-12">
        <div className="container-pro">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Radon Testing & Mitigation Service Areas</h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Foothills Radon Testing and Mitigation serves homeowners, realtors, builders, and businesses throughout Colorado's mountain communities and Front Range foothills. We're locally owned and based in {company.baseTown}, and we cover every town along the HWY 285 corridor — from Morrison to Grant, and out to Idaho Springs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-5 py-2.5 font-semibold text-primary hover:bg-muted">
                Get a Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-muted/40 py-12">
        <div className="container-pro">
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Counties & Communities We Serve</h2>
          <p className="mt-2 text-muted-foreground">Click your town for local radon information specific to your area — geology, home styles, and what to expect.</p>

          <div className="mt-10 space-y-12">
            {counties.map((county) => {
              const towns = locations.filter((l) => l.county === county);
              return (
                <div key={county}>
                  <div className="flex items-center gap-2 border-b border-border pb-3">
                    <Building2 className="h-5 w-5 text-accent" />
                    <h3 className="font-heading text-xl font-bold text-primary">{county}</h3>
                    <span className="ml-2 text-sm text-muted-foreground">{towns.length} {towns.length === 1 ? "community" : "communities"}</span>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {towns.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/locations/${loc.slug}`}
                        className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-accent" />
                          <h4 className="font-heading text-lg font-bold text-primary group-hover:text-accent">{loc.town}, CO</h4>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">Elevation {loc.elevation} · Pop. {loc.population} · Avg. {loc.avgRadon}</p>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{loc.geography}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                          {loc.town} radon info <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-pro grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Why a Local Foothills Radon Company Matters</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>The Colorado foothills aren't a generic market. Our homes sit on uranium-bearing granite, at high elevation, with foundation types that range from 1960s walk-out basements to dirt crawl spaces to brand-new slab construction. A radon company that drives up from Denver a few times a month doesn't know your neighborhood, your geology, or your foundation the way a local company does.</p>
              <p>Foothills Radon Testing and Mitigation is based in Pine and has installed hundreds of systems across Jefferson and Park Counties. We know which neighborhoods test high, which foundation types need what approach, and how to schedule around mountain access and weather. When you call, you reach your neighbor — not a call center.</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Mountain className="h-5 w-5 text-accent" /> Serving the 285 corridor from Morrison to Grant, plus Idaho Springs
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Not Sure If You're in Our Area?</h2>
            <p className="mt-4 text-muted-foreground">If you're in the Jefferson County or Park County foothills — or anywhere along the 285 corridor — give us a call. We respond within {company.responseHours} and we'll let you know right away if we can help. If you're just outside our range, we'll point you to someone trustworthy.</p>
            <a href={company.phoneHref} className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent">
              <Phone className="h-5 w-5 text-accent" /> {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12">
        <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Request a Free Estimate</h2>
            <p className="mt-4 text-muted-foreground">Tell us your ZIP code and foundation type, and we'll get back to you within {company.responseHours} with next steps.</p>
          </div>
          <EstimateForm variant="section" />
        </div>
      </section>
    </Layout>
  );
};

export default ServiceArea;
