import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { company } from "@/data/site";
import { reviews, reviewStats } from "@/data/reviews";
import { ScrollReveal } from "@/components/ScrollReveal";

const Reviews = () => (
  <Layout>
    <SEO
      title="Client Reviews & Testimonials | Foothills Radon Testing and Mitigation"
      description="Read real client reviews for the top-rated, NRPP-certified radon contractors we connect homeowners with across Pine, Conifer, Evergreen, Bailey & the HWY 285 corridor."
      path="/reviews"
      schema={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Reviews", path: "/reviews" },
      ])}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews" }]} />

    <section className="py-12">
      <div className="container-pro">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              <ShieldCheck className="h-4 w-4" /> Top-Rated Partner Contractors
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold text-primary sm:text-5xl">Client Reviews & Testimonials</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We connect Colorado foothills homeowners with the best radon testing and mitigation specialists in the industry. Here is what local clients have to say about the work done by our partner contractors across the HWY 285 corridor.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="font-heading text-3xl font-bold text-primary">{reviewStats.average}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-bold text-primary">100% Satisfaction Rate</span> across 150+ installations
              </div>
              <div className="text-sm text-accent font-semibold flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> 20-Year Low Radon Guarantee
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-muted/40 py-12">
      <div className="container-pro">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, i) => (
            <ScrollReveal key={rev.name} delay={i * 80}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-accent">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{rev.date}</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{rev.text}"</p>
                </div>
                <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-primary">{rev.name} — {rev.town}</span>
                  <span className="rounded bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">{rev.service}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Get Connected With an Expert Contractor</h2>
          <p className="mt-4 text-muted-foreground">Whether you need a radon test, a mitigation system, or a fan replacement, we match you with trusted, NRPP-certified contractors who back their work with a 20-Year Low Radon Guarantee. Call us or fill out the form and we'll connect you within {company.responseHours}.</p>
          <a href={company.phoneHref} className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent">
            <Phone className="h-5 w-5 text-accent" /> {company.phone}
          </a>
          <div className="mt-8">
            <Link to="/services/radon-mitigation" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Explore our radon services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg transition hover:scale-105 hover:bg-accent/90">
          Get a Free Estimate <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Reviews;
