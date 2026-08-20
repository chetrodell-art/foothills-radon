import { Layout } from "@/components/Layout";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { company } from "@/data/site";

const Terms = () => (
  <Layout>
    <SEO
      title="Terms of Service | Foothills Radon Testing and Mitigation"
      description="Terms of service for Foothills Radon Testing and Mitigation. Read our terms governing the use of our website and radon testing and mitigation services."
      path="/terms"
      schema={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Terms of Service", path: "/terms" },
      ])}
    />
    <div className="container-pro py-12">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }]} />
      <h1 className="mt-4 font-heading text-3xl font-bold text-primary sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="prose prose-slate mt-8 max-w-3xl space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-heading text-xl font-bold text-primary">1. Acceptance of Terms</h2>
          <p>By accessing and using the {company.name} website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">2. Services</h2>
          <p>{company.name} connects homeowners in the Jefferson County and Park County foothills of Colorado with qualified radon testing, radon mitigation, crawl space encapsulation, fan replacement and repair, post-mitigation testing, new construction radon prevention, real estate radon services, and commercial radon service providers. Services are performed by independent professionals who carry the applicable credentials and insurance for the services they provide.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">3. Estimates and Pricing</h2>
          <p>Free estimates provided through our website or by phone are approximate and subject to change following an on-site inspection. A firm, written estimate will be provided after assessment of your property. Mitigation systems typically cost between $1,500 and $3,500 on the Front Range, though actual costs may vary based on foundation type, system requirements, and site conditions.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">4. Warranties</h2>
          <p>We stand behind our work with written warranties on installation and materials. Warranties are transferable to new homeowners. Specific warranty terms will be detailed in your service agreement. Warranty coverage does not extend to damage caused by modifications to the system by third parties, natural disasters, or normal wear of consumable components such as fan motors.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">5. Radon Testing Disclaimer</h2>
          <p>Radon levels fluctuate based on season, weather, ventilation, and other environmental factors. A single test represents a snapshot in time and cannot guarantee future radon levels. We recommend periodic retesting as recommended by the EPA. While our mitigation systems are designed to reduce radon below the EPA action level of 4.0 pCi/L, no system can guarantee zero radon or eliminate all health risks.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">6. Website Use</h2>
          <p>You agree to use this website for lawful purposes only. You may not use the site in any way that could damage, disable, overburden, or impair the server or interfere with any other party's use. All content on this site—including text, graphics, logos, and images—is the property of {company.name} and may not be reproduced without written permission.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">7. Third-Party Links</h2>
          <p>This website may contain links to third-party websites, including community-trusted business partners. We are not responsible for the content, accuracy, or practices of any third-party sites and encourage you to review their terms and privacy policies.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">8. Limitation of Liability</h2>
          <p>{company.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability for any claim arising from our services is limited to the amount paid for the specific service in question.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">9. Contact Information</h2>
          <p>If you have questions about these Terms of Service, please contact us at:</p>
          <p className="font-medium text-foreground">
            {company.name}<br />
            {company.baseAddress}<br />
            {company.phone}
          </p>
        </section>
      </div>
    </div>
  </Layout>
);

export default Terms;
