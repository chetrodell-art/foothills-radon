import { Link } from "react-router-dom";
import { ShieldCheck, Award, BadgeCheck, FileCheck, Wrench, ArrowRight, Phone, CheckCircle2, Star, TrendingUp, Users } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { company } from "@/data/site";
import { ScrollReveal } from "@/components/ScrollReveal";

const credentials = [
  {
    icon: BadgeCheck,
    title: "NRPP Certified Professionals",
    body: "Every radon professional we connect homeowners with holds active certification through the National Radon Proficiency Program (NRPP) — the gold standard for radon measurement and mitigation in the United States. NRPP certification requires rigorous training, demonstrated competency, and ongoing continuing education. When we refer a contractor, you're getting someone who has proven they understand radon physics, building science, and the specific protocols that keep your family safe.",
    detail: "Verified NRPP certification on every contractor we refer.",
  },
  {
    icon: Award,
    title: "20-Year Low Radon Guarantee",
    body: "Mitigation systems installed by our partner contractors are backed by a 20-Year Low Radon Guarantee — one of the strongest warranties in the industry. If your radon levels ever rise above the EPA action level of 4.0 pCi/L during the guarantee period, the contractor returns and corrects the system at no cost to you. That's two decades of peace of mind, not a one-year promise that expires before you remember it exists.",
    detail: "Guaranteed at 3.9 pCi/L or below for 20 years.",
  },
  {
    icon: FileCheck,
    title: "Fully Transferable Warranties",
    body: "When you sell your foothills home, the system warranty and 20-year guarantee transfer directly to the new owner. This isn't a perk — it's a selling point. Along the HWY 285 corridor, where Colorado's radon disclosure law requires sellers to share radon test results, a transferable warranty on a professionally installed system can be the difference between a smooth closing and a stalled deal. We make sure the documentation is clean, clear, and ready for your title company.",
    detail: "Warranty transfers to new homeowner at no charge.",
  },
  {
    icon: TrendingUp,
    title: "Decades of Combined Experience",
    body: "We don't connect homeowners with beginners. The radon professionals in our network bring decades of combined experience testing and mitigating homes across the Colorado foothills — from older ranch homes in Morrison to new construction in Evergreen and crawl-space cabins in Bailey. They've seen every foundation type, every soil condition, and every system configuration the Front Range can throw at them. That experience shows up in cleaner installs, faster diagnostics, and systems that actually work.",
    detail: "Only seasoned, top-rated professionals in our network.",
  },
  {
    icon: Users,
    title: "We Only Work With the Best",
    body: "We vet every contractor before they ever set foot in your home. Our partners maintain high customer ratings, clean complaint records, and a track record of standing behind their work. If a contractor doesn't meet our standards — for craftsmanship, communication, or post-install support — they don't stay in our network. Period. We're staking our local reputation on the people we refer, so we refer people we'd send to our own families.",
    detail: "Vetted, rated, and held to a higher standard.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Service Providers",
    body: "The independent professionals we connect you with carry liability insurance for every service they perform. On the rare occasion something goes wrong, you're protected — not left chasing a handshake. Certificates of insurance can be provided to your realtor, title company, or general contractor on request, so your transaction stays on track.",
    detail: "Certificate of insurance available on request.",
  },
];

const Certifications = () => (
  <Layout>
    <SEO
      title="Credentials & Guarantees | Foothills Radon Testing and Mitigation | Colorado Foothills"
      description="We connect foothills homeowners with NRPP certified, insured radon professionals backed by a 20-year low-radon guarantee and fully transferable warranties. Decades of experience."
      path="/certifications"
      schema={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Credentials", path: "/certifications" },
      ])}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Credentials" }]} />

    <section className="py-12">
      <div className="container-pro">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">Credentials & Guarantees</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Radon is the second leading cause of lung cancer in the United States. When you're dealing with a radioactive gas in the place your family sleeps, you don't want the cheapest option — you want the best. We connect foothills homeowners exclusively with NRPP certified, top-rated radon professionals who back their work with a 20-year guarantee and decades of real-world experience.
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
        <ScrollReveal delay={250}>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span>We only partner with the highest-rated radon professionals in the Colorado foothills.</span>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-muted/40 py-12">
      <div className="container-pro">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">What You Can Count On</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Every contractor in our network is held to the same standard. Here's exactly what that means for you.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {credentials.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <ScrollReveal key={exp.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-primary">{exp.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{exp.body}</p>
                  <p className="mt-3 text-xs font-semibold text-accent">{exp.detail}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container-pro">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">Warranty Details</h2>
        </ScrollReveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">20-Year Low Radon Guarantee</h3>
              <p className="mt-3 text-sm text-muted-foreground">If radon levels in your home rise above 3.9 pCi/L at any point during the 20-year guarantee period, the installing contractor returns and corrects the system at no cost. No fine print. No pro-rated nonsense. The guarantee stays in effect for two full decades.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">Fully Transferable to New Owners</h3>
              <p className="mt-3 text-sm text-muted-foreground">Sell your home and the warranty transfers automatically to the buyer — a genuine selling point in a state where radon disclosure is legally required. We provide the documentation your title company needs.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">Post-Install Verification Testing</h3>
              <p className="mt-3 text-sm text-muted-foreground">Every mitigation install includes follow-up radon testing to confirm your levels dropped well below the EPA action level before the job is considered complete. You get the numbers in writing.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary">Up to 8-Year Fan Replacement Warranty</h3>
              <p className="mt-3 text-sm text-muted-foreground">Premium radon fans from RadonAway and Fantech include manufacturer warranties up to 8 years. If a fan fails within the warranty window, it's replaced — labor included through our partner contractors.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-12">
      <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Have Questions?</h2>
            <p className="mt-4 text-muted-foreground">Ask us anything about the professionals we work with, warranty documentation, or what to expect from start to finish. We're local, we answer the phone, and we stand behind every referral.</p>
            <a href={company.phoneHref} className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent">
              <Phone className="h-5 w-5 text-accent" /> {company.phone}
            </a>
            <Link to="/contact" className="mt-4 block inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Or request a free estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg transition hover:scale-105 hover:bg-accent/90">
            Get a Free Estimate <ArrowRight className="h-5 w-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Certifications;
