import { Link } from "react-router-dom";
import {
  ClipboardList, Phone, UserCheck, Wrench, ArrowRight, CheckCircle2, ShieldCheck, Clock,
} from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { company } from "@/data/site";

const steps = [
  {
    num: "1",
    icon: ClipboardList,
    title: "Tell Us What You Need",
    body: "Submit a quick request through our form or call us. Tell us your ZIP code, foundation type, and what's going on — a high test result, a real estate deadline, or you just want to test.",
  },
  {
    num: "2",
    icon: UserCheck,
    title: "We Connect You With a Qualified Local Professional",
    body: "Based on your location and service needs, we match you with an NRPP-certified radon professional from our network — someone who knows your area, your geology, and your foundation type.",
  },
  {
    num: "3",
    icon: Phone,
    title: "The Professional Contacts You",
    body: "The independent service provider reaches out directly to discuss your project, answer your questions, and schedule service — usually within 2 business hours of your request.",
  },
  {
    num: "4",
    icon: Wrench,
    title: "Work Is Performed by the Professional",
    body: "The independent contractor handles the inspection, testing, mitigation, or repair. They carry the applicable credentials, insurance, and warranties for the work they perform.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <SEO
        title="How It Works | Foothills Radon Testing and Mitigation | Colorado Foothills"
        description="How Foothills Radon connects you with qualified radon professionals: submit a request, get matched, the pro contacts you, work is performed. Simple, transparent, local."
        path="/how-it-works"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "How It Works" }]} />

      <section className="py-12">
        <div className="container-pro">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">How It Works</h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              Foothills Radon Testing and Mitigation is a local connection service. We help Colorado foothills homeowners find qualified radon professionals — we're not the contractor, but we know who the right one is for your home, your town, and your situation. Here's how the process works, start to finish.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-muted/40 py-12">
        <div className="container-pro">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.num} delay={i * 100}>
                  <div className="relative h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-2xl font-bold text-accent">{step.num}</span>
                          <h2 className="font-heading text-xl font-bold text-primary">{step.title}</h2>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transparency section */}
      <section className="py-12">
        <div className="container-pro grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Who We Are — and Who We Aren't</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>Foothills Radon Testing and Mitigation is a referral and connection service based in Pine, Colorado. We connect homeowners, buyers, sellers, and realtors with independent radon professionals who perform the actual testing, mitigation, and repair work.</p>
                <p>We aren't the contractor who shows up at your door — but we make sure the person who does is qualified, experienced, and the right fit for your specific needs. Every professional in our network is NRPP-certified and carries the applicable credentials and insurance for the services they provide.</p>
                <p>This model lets us focus on what we do best: understanding your situation, answering your questions honestly, and matching you with the right local expert — while the professionals we work with focus on what they do best: delivering clean, safe indoor air.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">What You Can Expect</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  A response within {company.responseHours} of your request
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  A qualified, NRPP-certified professional matched to your needs
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  Clear communication and honest answers — no pressure, no upsell
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  Work performed by an independent, insured professional
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  A 20-year transferable low-radon guarantee on mitigation systems
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
                Get a Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container-pro">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-5 w-5 text-accent" /> NRPP Certified Professionals</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-5 w-5 text-accent" /> 20-Year Transferable Guarantee</span>
              <span className="flex items-center gap-1.5"><Clock className="h-5 w-5 text-accent" /> Responds Within {company.responseHours}</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-5 w-5 text-accent" /> Locally Based in Pine, CO</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-muted-foreground">Fill out a quick form and we'll connect you with a qualified radon professional. Or call us right now — we're local and we answer the phone.</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg transition hover:scale-105 hover:bg-accent/90">
                Get a Free Estimate <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-muted">
                <Phone className="h-5 w-5" /> {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
