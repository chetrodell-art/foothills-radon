import { Link } from "react-router-dom";
import {
  FlaskConical, Wind, Layers, Wrench, ClipboardCheck, Hammer,
  Home, Building2, ArrowRight, Star, Phone, ShieldCheck,
  MapPin, Clock, Award, TrendingDown, CheckCircle2,
} from "lucide-react";
import { SEO, localBusinessSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";
import { EstimateForm } from "@/components/EstimateForm";
import { company, stats, heroImage, geologyImage } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { reviews } from "@/data/reviews";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical, Wind, Layers, Wrench, ClipboardCheck, Hammer, Home, Building2,
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="All Phase Radon — Radon Testing & Mitigation in the Colorado Foothills"
        description="Locally owned radon testing & mitigation serving Pine, Conifer, Evergreen & the HWY 285 corridor. NRPP certified, insured, one-day installs. Free estimates."
        schema={localBusinessSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Colorado foothills mountain homes along the HWY 285 corridor" className="h-full w-full object-cover opacity-30" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        </div>
        <div className="container-pro relative py-16 sm:py-24">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
              <ShieldCheck className="h-4 w-4" /> Locally Owned · NRPP Certified · Serving the 285 Corridor
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Colorado's Foothills Have a Radon Problem. We Fix It.
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90">
              All Phase Radon is your locally owned radon testing and mitigation company based in {company.baseTown}. We serve the Jefferson County and Park County foothills — Pine, Conifer, Evergreen, Bailey, and every town along the way.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg hover:bg-accent/90">
                Get a Free Estimate <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="h-5 w-5" /> {company.phone}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/80">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <span>{company.rating} stars from {company.reviewCount} Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-secondary">
        <div className="container-pro grid gap-6 py-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-4xl font-bold text-primary">
                {s.value}<span className="text-xl text-accent">{s.unit && ` ${s.unit}`}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Our Radon Services</h2>
            <p className="mt-3 text-muted-foreground">From testing to mitigation to crawl space encapsulation — we handle every phase of radon, start to finish.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wind;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-primary group-hover:text-accent">{service.shortTitle}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why the foothills are different */}
      <section className="bg-muted/40 py-16">
        <div className="container-pro grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Why the Foothills Are Different</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>The Front Range and foothills sit on the Pikes Peak Batholith — a massive granite formation rich in uranium-bearing minerals. As that uranium decays underground, it releases radon gas that travels through fractured rock and soil straight into your home's foundation.</p>
              <p>At elevations above 7,000 feet, foothills homes from Pine to Evergreen to Bailey sit close to that fractured bedrock with thin soil cover. The cold mountain climate strengthens the stack effect, actively pulling radon-laden soil gas up through basement floors and crawl spaces. Add in the prevalence of basement foundations, and it's no surprise Jefferson County and Park County homes test on the upper end of the state range.</p>
              <p>Colorado is in the top 10 states for radon nationwide, and the entire state is EPA Radon Zone 1. The geology isn't going to change — but a properly installed mitigation system makes your indoor air safe regardless of what's beneath your home.</p>
            </div>
            <Link to="/blog/colorado-radon-geology-granite-front-range" className="mt-6 inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Read the full geology breakdown <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={geologyImage} alt="Granite rock formation with uranium-bearing mineral veins in the Colorado Front Range foothills" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">How It Works</h2>
            <p className="mt-3 text-muted-foreground">Three simple steps from worry to clean air.</p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { num: "1", title: "Test", icon: FlaskConical, body: "We place an EPA-approved monitor for 2–7 days. You get a clear written report with your real pCi/L number — no guesswork." },
              { num: "2", title: "Assess", icon: ClipboardCheck, body: "If your level is elevated, we inspect your foundation and design a mitigation system tailored to your home — with a firm written estimate." },
              { num: "3", title: "Mitigate", icon: TrendingDown, body: "Most installs finish in one day. We verify with a post-install test so you know your radon dropped well below the action level." },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="absolute right-4 top-4 font-heading text-3xl font-bold text-muted/60">{step.num}</div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-pro">
          <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">Why Foothills Homeowners Trust All Phase Radon</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, value: `${company.yearsInBusiness} years`, label: "Serving the foothills" },
              { icon: ShieldCheck, value: "NRPP & DORA", label: "Certified & registered" },
              { icon: TrendingDown, value: `${company.systemsInstalled}+`, label: "Systems installed" },
              { icon: Clock, value: "1 day", label: "Most installs complete" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center">
                  <Icon className="mx-auto h-8 w-8 text-accent" />
                  <div className="mt-3 font-heading text-2xl font-bold">{item.value}</div>
                  <div className="mt-1 text-sm text-primary-foreground/70">{item.label}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            {company.certifications.map((c) => (
              <span key={c} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> {c}</span>
            ))}
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Written warranties</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Transferable to new owners</span>
          </div>
        </div>
      </section>

      {/* Location clusters */}
      <section className="py-16">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Towns We Serve Along the 285 Corridor</h2>
            <p className="mt-3 text-muted-foreground">From the Jefferson County foothills to Park County — we're your local radon experts.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition hover:border-accent hover:shadow-md"
              >
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-semibold text-primary group-hover:text-accent">{loc.town}, CO</div>
                  <div className="text-xs text-muted-foreground">{loc.county} · {loc.elevation}</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/service-area" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              View full service area <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-muted/40 py-16">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-accent text-accent" />)}
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary sm:text-4xl">{company.rating} Stars from {company.reviewCount} Neighbors</h2>
            <p className="mt-3 text-muted-foreground">Real reviews from foothills homeowners we've helped.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">"{review.text}"</p>
                <div className="mt-4 text-sm">
                  <div className="font-semibold text-primary">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.town} · {review.service}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Real estate CTA */}
      <section className="bg-amber-50 py-16">
        <div className="container-pro">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent">
                <ShieldCheck className="h-4 w-4" /> Colorado Radon Disclosure Required
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold text-primary sm:text-4xl">Buying or Selling in the Foothills?</h2>
              <p className="mt-4 text-muted-foreground">Colorado law requires radon disclosure in real estate transactions. Whether you're a buyer, seller, or realtor, we keep your closing on track with fast testing, rapid mitigation, written reports, and transferable warranties.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/services/real-estate-radon-services" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:bg-primary/90">
                  Real Estate Services
                </Link>
                <Link to="/realtors" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-5 py-2.5 font-semibold text-primary hover:bg-muted">
                  For Realtors <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
              <h3 className="font-heading text-lg font-bold text-primary">Realtor? Partner With Us</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fast scheduling, written reports, transferable warranties, and a partner who picks up the phone. We make radon contingencies easy.</p>
              <Link to="/realtors" className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
                Become a Partner <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with form */}
      <section className="py-16">
        <div className="container-pro grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Ready to Know Your Number?</h2>
            <p className="mt-4 text-muted-foreground">Fill out the form and we'll call you back within {company.responseHours}. Or call us right now — we're local and we answer the phone.</p>
            <div className="mt-6 space-y-3">
              <a href={company.phoneHref} className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-accent">
                <Phone className="h-5 w-5 text-accent" /> {company.phone}
              </a>
              <a href={company.emailHref} className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-accent">
                <ShieldCheck className="h-5 w-5 text-accent" /> {company.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-accent" /> {company.hours}
              </div>
            </div>
          </div>
          <EstimateForm variant="section" />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
