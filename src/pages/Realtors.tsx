import { Link } from "react-router-dom";
import { ShieldCheck, Clock, FileCheck, BadgeCheck, ArrowRight, Phone, CheckCircle2, Home } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { company } from "@/data/site";
import { ScrollReveal } from "@/components/ScrollReveal";

const Realtors = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <SEO
        title="Realtor Partner Program | Foothills Radon Testing and Mitigation | Colorado Foothills"
        description="Partner with Foothills Radon Testing and Mitigation to connect your clients with qualified radon professionals. Fast testing, mitigation & transferable warranties for Colorado real estate closings."
        path="/realtors"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Realtors", path: "/realtors" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Realtors" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="container-pro py-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
              <ShieldCheck className="h-4 w-4" /> Colorado Radon Disclosure Required
            </div>
<h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">Help Your Clients Close Faster. Partner with Foothills Radon Testing and Mitigation.</h1>
            <p className="mt-5 text-lg text-primary-foreground/90">
              Radon is one of the most common inspection contingencies in foothills real estate. We make it easy — by connecting you with qualified professionals who provide fast scheduling, written reports, rapid mitigation, and transferable warranties that give your buyers confidence and keep your closings on schedule.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent/90">
                <Phone className="h-5 w-5" /> {company.phone}
              </a>
              <a href="#partner" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Become a Partner <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure law overview */}
      <section className="py-12">
        <div className="container-pro grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Colorado Radon Disclosure Law: The Basics</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>Colorado requires sellers to disclose known radon test results and the presence of any radon mitigation system in the property. As a realtor, you play a key role in ensuring disclosure compliance and managing radon contingencies.</p>
                <p>In a Zone 1 state where the average home tests at 6.4 pCi/L, radon testing is a standard part of most foothills inspection periods. A high reading doesn't have to derail a deal — a fast, professional mitigation system with a transferable warranty usually satisfies the contingency and keeps the closing on track.</p>
                <p>The professionals we connect you with provide the documentation — signed reports, system specs, and warranty details — that satisfies disclosure and contingency requirements so your transaction file is clean.</p>
              </div>
              <Link to="/blog/colorado-radon-real-estate-disclosure-law" className="mt-6 inline-flex items-center gap-1 font-semibold text-accent hover:underline">
                Read the full disclosure law guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">What We Offer Realtors</h3>
              <ul className="mt-4 space-y-3">
                {[
                  { icon: Clock, text: "Fast scheduling — often same-week testing and mitigation" },
                  { icon: FileCheck, text: "Signed written reports suitable for transaction disclosures" },
                  { icon: CheckCircle2, text: "Post-install verification testing with documentation" },
                  { icon: BadgeCheck, text: "Transferable warranties that give buyers confidence" },
                  { icon: ShieldCheck, text: "Qualified, insured radon professionals" },
                  { icon: Phone, text: "A partner who picks up the phone and meets your deadlines" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How we support transactions */}
      <section className="bg-muted/40 py-12">
        <div className="container-pro">
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">How We Support Your Transactions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { step: "1", title: "Fast Testing", body: "48-hour continuous monitor tests scheduled within days of contact, with signed written reports delivered fast — well inside most inspection windows." },
              { step: "2", title: "Rapid Mitigation", body: "If a buyer's test comes back high, the professional installs a mitigation system before your closing date — often within a week — with a post-install report for the file." },
              { step: "3", title: "Clean Documentation", body: "Signed reports, system specs, transferable warranty, and post-install verification — everything you need for disclosure and contingency compliance." },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="font-heading text-3xl font-bold text-accent">{item.step}</div>
                <h3 className="mt-2 font-heading text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realtor CTA */}
      <section className="py-12">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Ready to Partner With Us?</h2>
            <p className="mt-3 text-muted-foreground">Join our network of realtors who trust Foothills Radon to connect their clients with qualified radon professionals. Fast scheduling, clear communication, and transaction-ready documentation.</p>
            <a href="#partner" className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
              Become a Partner <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Partner form */}
      <section id="partner" className="py-12">
        <div className="container-pro max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Become a Foothills Radon Partner</h2>
          <p className="mt-3 text-muted-foreground">Fill out the form below and we'll reach out to set up your partnership. Prefer to call? {company.phone}.</p>
          {submitted ? (
            <div className="mt-6 rounded-xl border border-border bg-card p-8 text-center shadow-sm">
              <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
              <h3 className="mt-4 font-heading text-xl font-bold text-primary">Thanks — We'll Be in Touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">We'll call you within {company.responseHours} to set up your realtor partnership. Questions? Call us at <a href={company.phoneHref} className="font-semibold text-accent">{company.phone}</a>.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-6 space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="r-name">Your Name *</Label>
                  <Input id="r-name" required placeholder="Jane Agent" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="r-brokerage">Brokerage *</Label>
                  <Input id="r-brokerage" required placeholder="Your brokerage" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="r-phone">Phone *</Label>
                <Input id="r-phone" type="tel" required placeholder="(303) 816-3130" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="r-email">Email *</Label>
                  <Input id="r-email" type="email" required placeholder="you@brokerage.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="r-notes">Anything you'd like us to know?</Label>
                <Textarea id="r-notes" rows={3} placeholder="How many transactions per year, preferred communication, etc." />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Home className="mr-2 h-4 w-4" /> Become a Partner
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Realtors;
