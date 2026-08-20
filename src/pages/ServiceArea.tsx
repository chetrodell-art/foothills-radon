import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight, Mountain, Building2, Route } from "lucide-react";
import { SEO, localBusinessSchema, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

import { company } from "@/data/site";
import { locations } from "@/data/locations";

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
        description="Foothills Radon Testing and Mitigation connects homeowners with qualified radon professionals throughout Colorado's mountain communities along the HWY 285 corridor. See our coverage area."
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
              Foothills Radon Testing and Mitigation connects homeowners, realtors, builders, and businesses with qualified radon professionals throughout Colorado's mountain communities and Front Range foothills. We're locally based in {company.baseTown}, and we serve every town along the HWY 285 corridor — from Morrison to Grant, and out to Idaho Springs.
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

      {/* Visual coverage overview */}
      <section className="bg-muted/40 py-12">
        <div className="container-pro">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Route className="mx-auto h-10 w-10 text-accent" />
              <h2 className="mt-3 font-heading text-2xl font-bold text-primary sm:text-3xl">The HWY 285 Corridor</h2>
              <p className="mt-3 text-muted-foreground">
                Our coverage follows Highway 285 as it climbs from the Denver metro into the Jefferson County foothills, then south into Park County — plus Idaho Springs along I-70. It's a tight, coherent geographic cluster of mountain communities all sitting on the same uranium-bearing granite that drives Colorado's radon problem.
              </p>
            </div>
          </ScrollReveal>

          {/* County summary cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {counties.map((county, i) => {
              const towns = locations.filter((l) => l.county === county);
              return (
                <ScrollReveal key={county} delay={i * 100}>
                  <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-accent" />
                      <h3 className="font-heading text-lg font-bold text-primary">{county}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {county === "Jefferson County" && "The heart of our service area — Evergreen, Conifer, Morrison, and the surrounding foothills communities along the 285 corridor and I-70."}
                      {county === "Park County" && "South along HWY 285 into Park County — Pine, Bailey, Shawnee, Grant, and Aspen Park, where granite geology and high elevation produce some of the state's highest radon readings."}
                      {county === "Clear Creek County" && "Our extended service area along I-70 — Idaho Springs and the historic mining district, where uranium-bearing geology from the mining era still drives radon risk today."}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {towns.map((loc) => (
                        <Link
                          key={loc.slug}
                          to={`/locations/${loc.slug}`}
                          className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <MapPin className="h-3 w-3" /> {loc.town}
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link to="/locations" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Browse all locations with detailed radon info <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="py-12">
        <div className="container-pro grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Why a Local Foothills Radon Company Matters</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>The Colorado foothills aren't a generic market. Our homes sit on uranium-bearing granite, at high elevation, with foundation types that range from 1960s walk-out basements to dirt crawl spaces to brand-new slab construction. A radon company that drives up from Denver a few times a month doesn't know your neighborhood, your geology, or your foundation the way a local service does.</p>
              <p>Foothills Radon Testing and Mitigation is based in Pine and connects you with professionals who know which neighborhoods test high, which foundation types need what approach, and how to schedule around mountain access and weather. When you call, you reach someone local — not a call center.</p>
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

      {/* CTA */}
      <section className="bg-muted/40 py-12">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Request a Free Estimate</h2>
            <p className="mt-3 text-muted-foreground">Tell us your ZIP code and foundation type, and we'll get back to you within {company.responseHours} with next steps.</p>
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
    </Layout>
  );
};

export default ServiceArea;
