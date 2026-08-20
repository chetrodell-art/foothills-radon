import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateForm } from "@/components/EstimateForm";
import { company } from "@/data/site";
import { ScrollReveal } from "@/components/ScrollReveal";

const Contact = () => (
  <Layout>
    <SEO
      title="Free Estimate & Contact | Foothills Radon Testing and Mitigation | Colorado Foothills"
      description="Get a free radon testing or mitigation estimate in the Colorado foothills. Call (303) 816-3130 or fill out our quick form. We respond within 2 business hours."
      path="/contact"
      schema={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ])}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact" }]} />

    <section className="py-12">
      <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Get a Free Estimate</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your home and we'll call you back within {company.responseHours} to connect you with a qualified radon professional. Whether you need a radon test, a mitigation estimate, or just have a question — we're local and we answer the phone.
          </p>
<div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
            <a href={company.phoneHref} className="flex items-center gap-3 border-b border-border pb-3 hover:text-accent">
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Call us</span>
              <span className="ml-auto text-lg font-semibold text-primary">{company.phone}</span>
            </a>
            <div className="flex items-center gap-3 border-b border-border py-3">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Based in</span>
              <span className="ml-auto font-semibold text-primary">{company.baseAddress}</span>
            </div>
            <div className="flex items-center gap-3 pt-3">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Hours</span>
              <span className="ml-auto font-semibold text-primary">{company.hours}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-accent" /> Free Estimates</span>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-accent" /> No Obligation</span>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-accent" /> Locally Based in Pine, CO</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <EstimateForm variant="section" />
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Contact;
