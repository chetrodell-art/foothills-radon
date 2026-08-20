import { Link } from "react-router-dom";
import { ShieldCheck, Award, Heart, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO, localBusinessSchema, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateForm } from "@/components/EstimateForm";
import { company, techImage } from "@/data/site";
import { LazyImage } from "@/components/LazyImage";
import { ScrollReveal } from "@/components/ScrollReveal";

const About = () => (
  <Layout>
    <SEO
      title="About Foothills Radon Testing and Mitigation | Colorado Foothills"
      description="Meet Foothills Radon Testing and Mitigation — a locally owned, NRPP-certified radon testing & mitigation company based in Pine, CO serving the Jefferson & Park County foothills."
      path="/about"
      schema={[localBusinessSchema, breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ])]}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About" }]} />

    <section className="py-12">
      <div className="container-pro grid items-center gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <div>
            <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">About Foothills Radon Testing and Mitigation</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              We're not a national franchise or a call center. Foothills Radon Testing and Mitigation is a locally owned radon testing and mitigation company based right here in Pine, Colorado. We live in the same foothills you do, we breathe the same air, and we've spent over a decade making it safer — one home at a time.
            </p>
            <p className="mt-4 text-muted-foreground">
              We started Foothills Radon Testing and Mitigation because we saw too many foothills families living with radon levels they didn't know about — in a state that ranks in the top 10 nationwide and sits entirely in EPA Radon Zone 1. The geology under our homes is the problem, but the solution is straightforward: test, and if the number is high, mitigate. We make that process honest, affordable, and local.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <LazyImage src={techImage} alt="Foothills Radon technician installing a mitigation system on a Colorado foothills home" className="h-full w-full object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-muted/40 py-12">
      <div className="container-pro">
        <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">What We Believe</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Local first", body: "We live here. We know the geology, the home styles, and the neighborhoods because they're ours. You'll never get a call center — you get your neighbor who happens to be the expert." },
            { icon: ShieldCheck, title: "Honest, not pushy", body: "We tell you the truth about your number. If your level is borderline, we'll say so and give you the option to monitor before spending money. No upsell, no fear-mongering — just straight talk." },
            { icon: Award, title: "Done right", body: "NRPP certified, DORA registered, fully insured. We've installed over 1,400 systems and our post-install tests consistently show dramatic reductions. Quality isn't optional." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <Icon className="h-8 w-8 text-accent" />
                <h3 className="mt-3 font-heading text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container-pro">
        <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Our Credentials</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "NRPP Certified Radon Measurement & Mitigation",
            "DORA Registered in the State of Colorado",
            "Fully insured for residential and commercial work",
            `${company.yearsInBusiness} years serving the foothills`,
            `${company.systemsInstalled}+ systems installed across Jefferson & Park Counties`,
            "Transferable written warranties on every mitigation system",
            "Fast scheduling — we respond within 1 business hour",
            "Real estate specialists with transaction-ready documentation",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <Link to="/certifications" className="mt-6 inline-flex items-center gap-1 font-semibold text-accent hover:underline">
          See full certifications & warranty details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    <section className="bg-primary py-12 text-primary-foreground">
      <div className="container-pro text-center">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Serving the Whole 285 Corridor</h2>
        <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/80">From Morrison to Grant, from Idaho Springs to Shawnee — if you're in the Jefferson County or Park County foothills, we're your local radon company.</p>
        <Link to="/service-area" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
          See Our Service Area <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    <section className="py-12">
      <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Let's Talk</h2>
          <p className="mt-4 text-muted-foreground">Whether you need a test, a mitigation estimate, or just have a question about radon in your neighborhood — we're happy to help. Call us or fill out the form and we'll get right back to you.</p>
          <div className="mt-6 space-y-3">
            <a href={company.phoneHref} className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-accent"><Phone className="h-5 w-5 text-accent" /> {company.phone}</a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground"><MapPin className="h-5 w-5 text-accent" /> {company.baseAddress}</div>
          </div>
        </div>
        <EstimateForm variant="section" />
      </div>
    </section>
  </Layout>
);

export default About;
