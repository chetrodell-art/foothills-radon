import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { SEO, localBusinessSchema, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateForm } from "@/components/EstimateForm";
import { company } from "@/data/site";
import { locations } from "@/data/locations";

const ServiceArea = () => (
  <Layout>
    <SEO
      title="Service Area | All Phase Radon | Colorado Foothills"
      description="All Phase Radon serves the Jefferson County & Park County foothills along the HWY 285 corridor — Pine, Conifer, Evergreen, Bailey, Morrison & more. Free estimates."
      path="/service-area"
      schema={[localBusinessSchema, breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Service Area", path: "/service-area" },
      ])]}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Area" }]} />

    <section className="py-12">
      <div className="container-pro">
        <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Our Service Area</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          All Phase Radon is based in {company.baseTown} and serves the Jefferson County and Park County foothills communities along the HWY 285 corridor. If you're in the Colorado foothills, we're your local radon company.
        </p>
      </div>
    </section>

    <section className="bg-muted/40 py-12">
      <div className="container-pro">
        <h2 className="font-heading text-2xl font-bold text-primary">Towns We Serve</h2>
        <p className="mt-2 text-muted-foreground">Click your town for local radon information specific to your area.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <h3 className="font-heading text-lg font-bold text-primary group-hover:text-accent">{loc.town}, CO</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{loc.county} · Elevation {loc.elevation}</p>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{loc.geography}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                {loc.town} radon info <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Not Sure If You're in Our Area?</h2>
          <p className="mt-4 text-muted-foreground">If you're in the Jefferson County or Park County foothills — or anywhere along the 285 corridor from Morrison to Grant — give us a call. We respond within {company.responseHours} and we'll let you know right away if we can help.</p>
          <a href={company.phoneHref} className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent">
            <Phone className="h-5 w-5 text-accent" /> {company.phone}
          </a>
        </div>
        <EstimateForm variant="section" />
      </div>
    </section>
  </Layout>
);

export default ServiceArea;
