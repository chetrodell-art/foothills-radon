import { Link, useParams } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2, MapPin, Star } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { EstimateForm } from "@/components/EstimateForm";
import { ReviewSnippet } from "@/components/ReviewSnippet";
import { serviceMap, services } from "@/data/services";
import { locationMap } from "@/data/locations";
import { blogPosts } from "@/data/blog";
import { company } from "@/data/site";
import NotFound from "./NotFound";
import { LazyImage } from "@/components/LazyImage";
import { ScrollReveal } from "@/components/ScrollReveal";

const ServicePage = () => {
  const { slug } = useParams();
  const service = slug ? serviceMap[slug] : undefined;

  if (!service) return <NotFound />;

  const related = service.relatedLocations.map((s) => locationMap[s]).filter(Boolean);

  return (
    <Layout>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.shortTitle }]} />

      <section className="py-12">
        <div className="container-pro">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">{service.title}</h1>
            <p className="mt-3 text-xl font-medium text-accent">{service.tagline}</p>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{service.intro}</p>
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

      {service.heroImage && (
        <section className="pb-8">
          <div className="container-pro">
            <ScrollReveal>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <LazyImage src={service.heroImage} alt={`${service.title} in the Colorado foothills`} className="h-full w-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="py-8">
        <div className="container-pro grid gap-10 lg:grid-cols-3">
          <div className="prose-radon lg:col-span-2">
            {service.sections.map((section) => (
              <div key={section.heading} className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-primary">{section.heading}</h2>
                <p className="mt-3 text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">All Our Services</h3>
              <ul className="mt-3 space-y-2">
                {services.filter((s) => s.slug !== service.slug).map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-foreground hover:text-accent">
                      <ArrowRight className="h-3.5 w-3.5 text-accent" /> {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <EstimateForm />
          </aside>
        </div>
      </section>

      {/* Reviews for this service */}
      <section className="py-12">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
            </div>
            <h2 className="mt-3 font-heading text-2xl font-bold text-primary sm:text-3xl">What Our Customers Say</h2>
            <p className="mt-2 text-muted-foreground">Real reviews from foothills homeowners who trusted us with their {service.shortTitle.toLowerCase()}.</p>
          </div>
          <div className="mt-8">
            <ReviewSnippet service={service.shortTitle} count={2} />
          </div>
        </div>
      </section>

      {/* Related blog resources */}
      <section className="bg-muted/40 py-12">
        <div className="container-pro">
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Related Resources</h2>
          <p className="mt-2 text-muted-foreground">Learn more about {service.shortTitle.toLowerCase()} and how it fits into protecting your foothills home.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md">
                <h3 className="font-heading text-base font-bold text-primary group-hover:text-accent">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related locations */}
      <section className="py-12">
        <div className="container-pro">
          <h2 className="font-heading text-2xl font-bold text-primary">Serving These Foothills Towns</h2>
          <p className="mt-2 text-muted-foreground">We provide {service.shortTitle.toLowerCase()} throughout the Jefferson County and Park County foothills.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((loc) => (
              <Link key={loc.slug} to={`/locations/${loc.slug}`} className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm hover:border-accent hover:shadow-md">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-semibold text-primary group-hover:text-accent">{loc.town}, CO</div>
                  <div className="text-xs text-muted-foreground">{loc.county}</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={service.faqs} />

      <section className="py-12">
        <div className="container-pro">
          <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Call us now or request a free estimate. We respond within {company.responseHours}.</p>
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

export default ServicePage;
