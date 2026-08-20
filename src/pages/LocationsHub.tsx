import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { company } from "@/data/site";
import { locations } from "@/data/locations";

const countyOrder = ["Jefferson County", "Park County", "Clear Creek County"] as const;

const LocationsHub = () => {
  const grouped = countyOrder.map((county) => ({
    county,
    towns: locations.filter((l) => l.county === county),
  }));

  return (
    <Layout>
      <SEO
        title="Radon Service Areas in Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills"
        description="Radon testing & mitigation service areas across Jefferson County, Park County & Clear Creek County. Evergreen, Conifer, Pine, Bailey & more along the HWY 285 corridor."
        path="/locations"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/locations" }]} />

      <section className="py-12">
        <div className="container-pro">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Colorado Foothills Radon Service Areas</h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              Browse every community we serve along the HWY 285 corridor. Each town below has its own page with local radon information — average readings, geology, common home styles, and what to expect. For a visual overview of our entire coverage area, see our <Link to="/service-area" className="font-semibold text-accent hover:underline">service area map</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {grouped.map((group, gi) => (
        <section key={group.county} className={gi % 2 === 1 ? "bg-muted/40 py-12" : "py-12"}>
          <div className="container-pro">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">{group.county}</h2>
              <p className="mt-2 text-muted-foreground">
                {group.county === "Jefferson County" && "The heart of our service area — Evergreen, Conifer, Morrison, and the surrounding foothills communities along the 285 corridor and I-70."}
                {group.county === "Park County" && "South along HWY 285 into Park County — Pine, Bailey, Shawnee, Grant, and Aspen Park, where granite geology and high elevation produce some of the state's highest radon readings."}
                {group.county === "Clear Creek County" && "Our extended service area along I-70 — Idaho Springs and the historic mining district, where uranium-bearing geology from the mining era still drives radon risk today."}
              </p>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.towns.map((loc, i) => (
                <ScrollReveal key={loc.slug} delay={i * 60}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <div>
                        <div className="font-heading text-lg font-bold text-primary group-hover:text-accent">{loc.town}, CO</div>
                        <div className="text-xs text-muted-foreground">{loc.elevation} · {loc.population}</div>
                      </div>
                    </div>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{loc.radonContext.slice(0, 140)}...</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-accent">Avg. radon: {loc.avgRadon}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        View <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-pro">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">Don't See Your Town?</h2>
              <p className="mt-3 text-primary-foreground/80">If you're in the Colorado foothills or along the 285 corridor, chances are we serve you. Give us a call and we'll let you know.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent/90">
                  <Phone className="h-5 w-5" /> {company.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  Get a Free Estimate <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> Qualified professionals</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> Free estimates</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> Locally based in Pine, CO</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default LocationsHub;
