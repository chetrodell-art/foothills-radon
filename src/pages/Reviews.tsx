import { Link } from "react-router-dom";
import { Star, ArrowRight, Phone } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateForm } from "@/components/EstimateForm";
import { reviews, reviewStats } from "@/data/reviews";
import { company } from "@/data/site";
import { ScrollReveal } from "@/components/ScrollReveal";

const Reviews = () => (
  <Layout>
    <SEO
      title="Reviews & Testimonials | Foothills Radon Testing and Mitigation | Colorado Foothills"
      description="Read what foothills homeowners say about Foothills Radon Testing and Mitigation. 4.9 stars from 187+ Google reviews across Pine, Conifer, Evergreen, Bailey & the 285 corridor."
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
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-8 w-8 fill-accent text-accent" />)}
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold text-primary sm:text-5xl">{reviewStats.average} Stars from {reviewStats.count} Neighbors</h1>
            <p className="mt-4 text-lg text-muted-foreground">Real reviews from foothills homeowners we've helped with radon testing, mitigation, and crawl space encapsulation.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-muted/40 py-12">
      <div className="container-pro grid gap-5 md:grid-cols-2">
        {reviews.map((review, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, j) => <Star key={j} className="h-5 w-5 fill-accent text-accent" />)}
              </div>
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>
            <p className="mt-4 text-foreground">"{review.text}"</p>
            <div className="mt-4 border-t border-border pt-3">
              <div className="font-semibold text-primary">{review.name}</div>
              <div className="text-sm text-muted-foreground">{review.town} · {review.service}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-12">
      <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Ready to Join Our Happy Customers?</h2>
          <p className="mt-4 text-muted-foreground">Whether you need a test, a mitigation estimate, or have a question about radon in your home — we're here to help. Call us or fill out the form and we'll respond within {company.responseHours}.</p>
          <a href={company.phoneHref} className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent">
            <Phone className="h-5 w-5 text-accent" /> {company.phone}
          </a>
          <div className="mt-8">
            <Link to="/services/radon-mitigation" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <EstimateForm variant="section" />
      </div>
    </section>
  </Layout>
);

export default Reviews;
