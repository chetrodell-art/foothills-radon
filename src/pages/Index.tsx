import { Link } from "react-router-dom";
import {
  FlaskConical, Wind, Layers, Wrench, ClipboardCheck, Hammer,
  Home, Building2, ArrowRight, Phone, ShieldCheck,
  MapPin, Clock, TrendingDown, CheckCircle2, Star, Award,
} from "lucide-react";
import { SEO, localBusinessSchema } from "@/components/seo";
import { Layout } from "@/components/Layout";

import { company, stats, heroImage, geologyImage } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { reviews } from "@/data/reviews";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyImage } from "@/components/LazyImage";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical, Wind, Layers, Wrench, ClipboardCheck, Hammer, Home, Building2,
};

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (heroRef.current) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", "6a8749a764c286aff35d63a3");
    script.setAttribute("data-source", "WEB_USER");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      const widget = document.querySelector("#leadconnector-chat-widget");
      if (widget) widget.remove();
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Foothills Radon Testing and Mitigation — Connect With Local Radon Professionals"
        description="We connect Colorado foothills homeowners with qualified radon testing and mitigation professionals. Serving Pine, Conifer, Evergreen, Bailey & the HWY 285 corridor. Free estimates."
        schema={localBusinessSchema}
      />

      {/* Hero with parallax */}
      <section ref={heroRef} className="relative min-h-[600px] overflow-hidden bg-primary text-primary-foreground">
        {/* Parallax background image - more visible, extends beyond viewport */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.4}px) scale(1.15)`,
            willChange: "transform",
          }}
        >
          <img
            src={heroImage}
            alt="Colorado foothills mountain homes along the HWY 285 corridor"
            className="h-full w-full object-cover"
            style={{ opacity: 0.55 }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        {/* Gradient overlay - lighter to show more of the image */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-transparent"
          style={{ opacity: Math.max(0.5, 1 - scrollY / 600) }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

        <div className="container-pro relative flex min-h-[600px] items-center py-20 sm:py-28">
          <div className="max-w-2xl">
            {/* Fade-in badge */}
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <ShieldCheck className="h-4 w-4" /> Connecting Foothills Homeowners with Local Radon Professionals
            </div>
            {/* Fade-in headline */}
            <h1
              className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
              }}
            >
              Colorado's Foothills Have a Radon Problem. We'll Connect You With the Right Professional.
            </h1>
            {/* Fade-in subheadline */}
            <p
              className="mt-6 text-lg text-primary-foreground/90 sm:text-xl"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
              }}
            >
              Foothills Radon Testing and Mitigation helps homeowners in the Colorado foothills connect with qualified radon testing and mitigation professionals. We serve the Jefferson County and Park County communities along the HWY 285 corridor — Pine, Conifer, Evergreen, Bailey, and every town along the way.
            </p>
            {/* Fade-in CTAs */}
            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease-out 0.45s, transform 0.8s ease-out 0.45s",
              }}
            >
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg transition hover:scale-105 hover:bg-accent/90">
                Get a Free Estimate <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-base font-semibold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10">
                <Phone className="h-5 w-5" /> {company.phone}
              </a>
            </div>
            {/* Fade-in rating & guarantee */}
            <div
              className="mt-6 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/90"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
              }}
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-medium">{company.rating} Rating from Top-Rated Local Contractors</span>
              </div>
              <span className="hidden sm:inline text-primary-foreground/40">•</span>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4 text-accent" />
                <span className="font-semibold text-accent">20-Year Low Radon Guarantee</span>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease-out 1s",
          }}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary-foreground/40 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary-foreground/60" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-secondary">
        <div className="container-pro grid gap-6 py-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-primary">
                  {s.value}<span className="text-xl text-accent">{s.unit && ` ${s.unit}`}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container-pro">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">How It Works</h2>
              <p className="mt-3 text-muted-foreground">Three simple steps from worry to clean air. <Link to="/how-it-works" className="font-semibold text-accent hover:underline">See the full process →</Link></p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { num: "1", title: "Test", icon: FlaskConical, body: "A qualified professional places an EPA-approved monitor for 2–7 days. You get a clear written report with your real pCi/L number — no guesswork." },
              { num: "2", title: "Assess", icon: ClipboardCheck, body: "If your level is elevated, the professional inspects your foundation and designs a mitigation system tailored to your home — with a firm written estimate." },
              { num: "3", title: "Mitigate", icon: TrendingDown, body: "Most installs finish in one day. A post-install test verifies your radon dropped well below the action level." },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.num} delay={i * 150}>
                  <div className="relative h-full rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="absolute right-4 top-4 font-heading text-3xl font-bold text-muted/60">{step.num}</div>
                    <h3 className="mt-4 font-heading text-xl font-bold text-primary">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-muted/40 py-16">
        <div className="container-pro">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Our Radon Services</h2>
              <p className="mt-3 text-muted-foreground">From testing to mitigation to crawl space encapsulation — we connect you with professionals who handle every phase of radon, start to finish.</p>
            </div>
          </ScrollReveal>
          <div className="mt-8 text-center">
            <Link to="/services" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Wind;
              return (
                <ScrollReveal key={service.slug} delay={i * 80}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block h-full rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md"
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why the foothills are different */}
      <section className="py-16">
        <div className="container-pro grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Why the Foothills Are Different</h2>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>The Front Range and foothills sit on the Pikes Peak Batholith — a massive granite formation rich in uranium-bearing minerals. As that uranium decays underground, it releases radon gas that travels through fractured rock and soil straight into your home's foundation.</p>
                <p>At elevations above 7,000 feet, foothills homes from Pine to Evergreen to Bailey sit close to that fractured bedrock with thin soil cover. The cold mountain climate strengthens the stack effect, actively pulling radon-laden soil gas up through basement floors and crawl spaces. Add in the prevalence of basement foundations, and it's no surprise Jefferson County and Park County homes test on the upper end of the state range.</p>
                <p>Colorado is in the top 10 states for radon nationwide, and the entire state is EPA Radon Zone 1. The geology isn't going to change — but a properly installed mitigation system can dramatically reduce your indoor radon levels regardless of what's beneath your home.</p>
              </div>
              <Link to="/blog/colorado-radon-geology-granite-front-range" className="mt-6 inline-flex items-center gap-1 font-semibold text-accent hover:underline">
                Read the full geology breakdown <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <LazyImage src={geologyImage} alt="Granite rock formation with uranium-bearing mineral veins in the Colorado Front Range foothills" className="h-full w-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-pro">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">Why Foothills Homeowners Use Foothills Radon</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, value: "NRPP Certified", label: "Our partner contractors are certified for measurement & mitigation" },
              { icon: Award, value: "20-Yr Guarantee", label: "Systems backed by a 20-year low-radon guarantee" },
              { icon: Clock, value: "Fast Response", label: `We connect you within ${company.responseHours}` },
              { icon: TrendingDown, value: "1 Day Install", label: "Decades of combined experience — most installs complete in 1 day" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.label} delay={i * 100}>
                  <div className="h-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center">
                    <Icon className="mx-auto h-8 w-8 text-accent" />
                    <div className="mt-3 font-heading text-2xl font-bold">{item.value}</div>
                    <div className="mt-1 text-sm text-primary-foreground/70">{item.label}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> NRPP Certified Contractors</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> 20-Year Transferable Guarantee</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Free Estimates & Fast Matching</span>
          </div>
        </div>
      </section>

      {/* Location clusters */}
      <section className="py-16">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Towns We Serve Along the 285 Corridor</h2>
            <p className="mt-3 text-muted-foreground">From the Jefferson County foothills to Park County — we connect you with local radon professionals.</p>
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
            <Link to="/locations" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Browse all service areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-muted/40 py-16">
        <div className="container-pro">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                <Star className="h-4 w-4 fill-accent text-accent" /> Verified Client Feedback
              </div>
              <h2 className="mt-3 font-heading text-3xl font-bold text-primary sm:text-4xl">What Homeowners Say About Our Partner Contractors</h2>
              <p className="mt-3 text-muted-foreground">We connect you with top-rated, NRPP-certified radon specialists who deliver results.</p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((rev, i) => (
              <ScrollReveal key={rev.name} delay={i * 100}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground italic">"{rev.text}"</p>
                  </div>
                  <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs">
                    <span className="font-bold text-primary">{rev.name} — {rev.town}</span>
                    <span className="text-muted-foreground">{rev.service}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Read all client reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Real estate CTA */}
      <section className="bg-secondary py-16">
        <div className="container-pro">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent">
                <ShieldCheck className="h-4 w-4" /> Colorado Radon Disclosure Required
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold text-primary sm:text-4xl">Buying or Selling in the Foothills?</h2>
              <p className="mt-4 text-muted-foreground">Colorado law requires radon disclosure in real estate transactions. Whether you're a buyer, seller, or realtor, we help connect you with professionals who keep your closing on track with fast testing, rapid mitigation, written reports, and transferable warranties.</p>
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
              <p className="mt-2 text-sm text-muted-foreground">Fast scheduling, written reports, transferable warranties, and a partner who picks up the phone. We make radon contingencies easy by connecting you with qualified professionals.</p>
              <Link to="/realtors" className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent/90">
                Become a Partner <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Ready to Know Your Number?</h2>
            <p className="mt-4 text-muted-foreground">Fill out a quick form and we'll call you back within {company.responseHours} to connect you with a qualified radon professional. Or call us right now — we're local and we answer the phone.</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg transition hover:scale-105 hover:bg-accent/90">
                Get a Free Estimate <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-muted">
                <Phone className="h-5 w-5" /> {company.phone}
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 text-accent" /> {company.hours}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
