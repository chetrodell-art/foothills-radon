import { Link } from "react-router-dom";
import { ShieldCheck, Award, BadgeCheck, FileCheck, Wrench, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateForm } from "@/components/EstimateForm";
import { company } from "@/data/site";
import { ScrollReveal } from "@/components/ScrollReveal";

const credentials = [
  {
    icon: BadgeCheck,
    title: "NRPP Certified",
    body: "Foothills Radon Testing and Mitigation is certified by the National Radon Proficiency Program (NRPP), the leading national certification body for radon professionals. NRPP certification requires passing exams, ongoing continuing education, and adherence to industry-standard protocols. It's the credential that proves we know what we're doing — not just that we say we do.",
    detail: "Certification ID available on request.",
  },
  {
    icon: ShieldCheck,
    title: "DORA Registered",
    body: "We are registered with the Colorado Department of Regulatory Agencies (DORA), which oversees professional licensing and registration in Colorado. Radon measurement and mitigation professionals in Colorado are subject to state-level oversight, and we maintain our registration in good standing.",
    detail: "Colorado-registered radon contractor.",
  },
  {
    icon: FileCheck,
    title: "Fully Insured",
    body: "Foothills Radon Testing and Mitigation carries full liability insurance. Every system we install is backed by both our workmanship and our insurance coverage, so you're protected on the rare occasion something goes wrong. We're happy to provide a certificate of insurance to your realtor, title company, or general contractor.",
    detail: "Certificate of insurance available on request.",
  },
  {
    icon: Wrench,
    title: "Manufacturer-Certified Installations",
    body: "We install radon fans and system components from leading manufacturers including RadonAway, Fantech, and SPF. Our installations follow each manufacturer's specifications for fan sizing, pipe routing, and system design, which keeps warranties valid and ensures optimal performance.",
    detail: "Authorized installer of major radon fan brands.",
  },
  {
    icon: Award,
    title: "Locally Owned & Operated",
    body: "Foothills Radon Testing and Mitigation is a locally owned business based in Pine, Colorado — not a franchise or a national chain. We live in the foothills, we work in the foothills, and our reputation in our own community is everything to us. When you hire us, you're hiring a neighbor who answers the phone and stands behind the work.",
    detail: "Headquartered in Pine, CO 80470.",
  },
];

const Certifications = () => (
  <Layout>
    <SEO
      title="Certifications & Credentials | Foothills Radon Testing and Mitigation | Colorado Foothills"
      description="NRPP certified, DORA registered, fully insured, and locally owned. See the certifications, licenses, and warranties behind Foothills Radon Testing and Mitigation's radon testing & mitigation work."
      path="/certifications"
      schema={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Certifications", path: "/certifications" },
      ])}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Certifications" }]} />

    <section className="py-12">
      <div className="container-pro">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Certifications & Credentials</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Radon work is health work. When you hire someone to test for and mitigate a radioactive gas in your home, you deserve proof that they know what they're doing. Here are the certifications, licenses, and warranties behind every Foothills Radon job.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="mt-6 flex flex-wrap gap-3">
            {company.certifications.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" /> {c}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-muted/40 py-12">
      <div className="container-pro">
        <div className="grid gap-6 lg:grid-cols-2">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div key={cred.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-heading text-xl font-bold text-primary">{cred.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{cred.body}</p>
                <p className="mt-3 text-xs font-semibold text-accent">{cred.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container-pro">
        <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Warranty & Guarantee</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-primary">Written System Warranty</h3>
            <p className="mt-3 text-sm text-muted-foreground">Every radon mitigation system we install comes with a written warranty covering workmanship and materials. If something fails due to our installation, we fix it — no arguments.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-primary">Transferable to New Owners</h3>
            <p className="mt-3 text-sm text-muted-foreground">Our system warranties transfer to the next owner when you sell your home. That's a selling point for your buyers and one less thing to worry about in a transaction.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-primary">Performance Guarantee</h3>
            <p className="mt-3 text-sm text-muted-foreground">We stand behind our results. If a post-installation test shows your radon hasn't dropped below the action level, we return and adjust the system — adding suction points or upgrading the fan — until it does. Our work isn't done until your number is down.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-primary">Fan Warranty</h3>
            <p className="mt-3 text-sm text-muted-foreground">Radon fans carry a manufacturer warranty, typically 5 to 10 years depending on the model. We register your fan and provide documentation so any future warranty claim is straightforward.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-12">
      <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Have Questions About Our Credentials?</h2>
          <p className="mt-4 text-muted-foreground">We're happy to provide NRPP certification numbers, certificates of insurance, or warranty documentation to you, your realtor, or your title company. Just ask.</p>
          <a href={company.phoneHref} className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent">
            <Phone className="h-5 w-5 text-accent" /> {company.phone}
          </a>
          <Link to="/contact" className="mt-4 block inline-flex items-center gap-1 font-semibold text-accent hover:underline">
            Or request a free estimate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <EstimateForm variant="section" />
      </div>
    </section>
  </Layout>
);

export default Certifications;
