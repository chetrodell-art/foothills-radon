import { Link } from "react-router-dom";
import {
  FlaskConical, Wind, Layers, Wrench, ClipboardCheck, Hammer,
  Home, Building2, ArrowRight, Phone, ShieldCheck, CheckCircle2,
} from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { company } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical, Wind, Layers, Wrench, ClipboardCheck, Hammer, Home, Building2,
};

const ServicesHub = () => {
  return (
    <Layout>
      <SEO
        title="Radon Services in Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills"
        description="Full-service radon testing, mitigation, crawl space encapsulation, fan repair, real estate & commercial radon services across the Colorado foothills. Free estimates."
        path="/services"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="py-12">
        <div className="container-pro">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Radon Services for Colorado Foothills Homes</h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              From your first radon test to long-term system maintenance, we connect you with qualified professionals who handle every phase of radon — testing, mitigation, crawl space encapsulation, fan repair, real estate transactions, new construction, and commercial properties. We serve homeowners, buyers, sellers, realtors, builders, and businesses throughout Jefferson County, Park County, and the HWY 285 corridor.
            </p>
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

      <section className="pb-16">
        <div className="container-pro">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Wind;
              return (
                <ScrollReveal key={service.slug} delay={i * 80}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-accent hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 font-heading text-xl font-bold text-primary group-hover:text-accent">{service.title}</h2>
                    <p className="mt-1 text-sm font-medium text-accent">{service.tagline}</p>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{service.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-muted/40 py-16">
        <div className="container-pro">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">How the Process Works</h2>
              <p className="mt-3 text-muted-foreground">Three straightforward steps from first test to clean air.</p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { num: "1", title: "Test", icon: FlaskConical, body: "A qualified professional places an EPA-approved monitor for 2–7 days and delivers a clear written report with your real pCi/L number." },
              { num: "2", title: "Assess", icon: ClipboardCheck, body: "If your level is elevated, the professional inspects your foundation and designs a mitigation system tailored to your home." },
              { num: "3", title: "Mitigate", icon: Wind, body: "Most installs finish in one day. A post-install test verifies your radon dropped below action level." },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.num} delay={i * 150}>
                  <div className="relative h-full rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="absolute right-4 top-4 font-heading text-3xl font-bold text-muted/60">{step.num}</div>
                    <h3 className="mt-4 font-heading text-xl font-bold text-primary">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust + CTA */}
      <section className="py-16">
        <div className="container-pro">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> Qualified professionals</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Written warranties</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Transferable to new owners</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Free estimates</span>
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold text-primary">Ready to Get Started?</h2>
              <p className="mt-3 text-muted-foreground">Call us now or request a free estimate online. We respond within {company.responseHours}.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
                  <Phone className="h-5 w-5" /> {company.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent/90">
                  Get a Free Estimate <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesHub;
