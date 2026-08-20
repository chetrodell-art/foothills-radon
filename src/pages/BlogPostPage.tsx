import { Link, useParams } from "react-router-dom";
import { ArrowRight, Phone, Calendar, User } from "lucide-react";
import { SEO, breadcrumbSchema, articleSchema, faqSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { EstimateForm } from "@/components/EstimateForm";
import { blogMap, blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { company } from "@/data/site";
import NotFound from "./NotFound";
import { LazyImage } from "@/components/LazyImage";
import { ScrollReveal } from "@/components/ScrollReveal";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = slug ? blogMap[slug] : undefined;

  if (!post) return <NotFound />;

  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
    articleSchema(post),
    ...(post.faqs ? [faqSchema(post.faqs)] : []),
  ];

  return (
    <Layout>
      <SEO
        title={`${post.metaTitle}`}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        schema={schema}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/blog" }, { name: post.title }]} />

      <article className="py-12">
        <div className="container-pro grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">{post.title}</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-accent" /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="flex items-center gap-1"><User className="h-4 w-4 text-accent" /> {post.author}</span>
              </div>
              <p className="mt-5 text-lg font-medium text-foreground">{post.excerpt}</p>
            </ScrollReveal>

            {post.heroImage && (
              <ScrollReveal delay={150}>
                <div className="mt-6 overflow-hidden rounded-xl shadow-lg">
                  <LazyImage src={post.heroImage} alt={post.title} className="h-full w-full object-cover" />
                </div>
              </ScrollReveal>
            )}

            <div className="prose-radon mt-8">
              {post.sections.map((section) => (
                <div key={section.heading} className="mb-8">
                  <h2 className="font-heading text-2xl font-bold text-primary">{section.heading}</h2>
                  <p className="mt-3 text-muted-foreground">{section.body}</p>
                </div>
              ))}
            </div>

            {post.faqs && <FAQ faqs={post.faqs} />}

            <div className="mt-8 rounded-xl bg-primary p-6 text-primary-foreground">
              <h3 className="font-heading text-xl font-bold">Need Help With Radon in the Foothills?</h3>
              <p className="mt-2 text-primary-foreground/80">Foothills Radon Testing and Mitigation is locally owned, NRPP certified, and based in Pine, CO. Call us or request a free estimate — we respond within {company.responseHours}.</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-2.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  Free Estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <EstimateForm />
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">Our Radon Services</h3>
              <ul className="mt-3 space-y-2">
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="flex items-start gap-2 text-sm text-foreground hover:text-accent">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{s.shortTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">More Resources</h3>
              <ul className="mt-3 space-y-2">
                {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 6).map((p) => (
                  <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`} className="flex items-start gap-2 text-sm text-foreground hover:text-accent">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
