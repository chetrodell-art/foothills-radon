import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateForm } from "@/components/EstimateForm";
import { company } from "@/data/site";

const Contact = () => (
  <Layout>
    <SEO
      title="Free Estimate & Contact | All Phase Radon | Colorado Foothills"
      description="Get a free radon testing or mitigation estimate in the Colorado foothills. Call (303) 555-0142 or fill out our quick form. We respond within 1 business hour."
      path="/contact"
      schema={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ])}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact" }]} />

    <section className="py-12">
      <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Get a Free Estimate</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your home and we'll call you back within {company.responseHours}. Whether you need a radon test, a mitigation estimate, or just have a question — we're local and we answer the phone.
          </p>
          <div className="mt-8 space-y-4">
            <a href={company.phoneHref} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm hover:border-accent">
              <Phone className="h-6 w-6 text-accent" />
              <div>
                <div className="text-sm text-muted-foreground">Call us</div>
                <div className="text-lg font-semibold text-primary">{company.phone}</div>
              </div>
            </a>
            <a href={company.emailHref} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm hover:border-accent">
              <Mail className="h-6 w-6 text-accent" />
              <div>
                <div className="text-sm text-muted-foreground">Email us</div>
                <div className="text-lg font-semibold text-primary">{company.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
              <MapPin className="h-6 w-6 text-accent" />
              <div>
                <div className="text-sm text-muted-foreground">Based in</div>
                <div className="text-lg font-semibold text-primary">{company.baseAddress}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
              <Clock className="h-6 w-6 text-accent" />
              <div>
                <div className="text-sm text-muted-foreground">Hours</div>
                <div className="text-lg font-semibold text-primary">{company.hours}</div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {company.certifications.map((c) => (
              <span key={c} className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-accent" /> {c}</span>
            ))}
          </div>
        </div>
        <EstimateForm variant="section" />
      </div>
    </section>
  </Layout>
);

export default Contact;
