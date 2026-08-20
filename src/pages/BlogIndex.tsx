import { Link } from "react-router-dom";
import { ArrowRight, Phone, BookOpen } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyImage } from "@/components/LazyImage";
import { company } from "@/data/site";
import { blogPosts } from "@/data/blog";

const BlogIndex = () => {
  return (
    <Layout>
      <SEO
        title="Radon Resources & Blog | Foothills Radon Testing and Mitigation | Colorado Foothills"
        description="Expert radon guides for Colorado homeowners: radon levels, mitigation costs, geology, disclosure laws, foundation types, DIY vs professional testing, and more."
        path="/blog"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/blog" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/blog" }]} />

      <section className="py-12">
        <div className="container-pro">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-accent" />
              <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Radon Resources & Guides</h1>
            </div>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              We believe an informed homeowner makes better decisions. These guides cover everything you need to know about radon in the Colorado foothills — from understanding your test results to choosing the right mitigation system to navigating real estate disclosure laws. Written by local experts who work in these communities every day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-pro">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm transition hover:border-accent hover:shadow-md"
                >
                  {post.heroImage && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <LazyImage src={post.heroImage} alt={post.title} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="text-xs font-medium text-accent">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
                    <h2 className="mt-2 font-heading text-lg font-bold text-primary group-hover:text-accent">{post.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-16">
        <div className="container-pro">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-primary">Have Questions About Your Home?</h2>
              <p className="mt-3 text-muted-foreground">Reading is a great start — but the only way to know your radon level is to test. Call us or request a free estimate online.</p>
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

export default BlogIndex;
